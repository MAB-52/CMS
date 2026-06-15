"""
IndicTrans2 translation microservice (English → Indic) for ConsentIQ.
Loads ai4bharat/indictrans2-en-indic-1B at startup.
"""

from __future__ import annotations

import logging
import os
import re
from typing import Any

from bs4 import BeautifulSoup
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel, Field

log = logging.getLogger("indictrans2-service")

app = FastAPI(title="ConsentIQ IndicTrans2", version="1.0.0")

_model = None
_tokenizer = None
_processor = None
_device = "cpu"
_load_error: str | None = None


def _detect_device() -> str:
    try:
        import torch

        if torch.cuda.is_available():
            return "cuda"
    except Exception:
        pass
    return "cpu"


def _load_model() -> None:
    global _model, _tokenizer, _processor, _device, _load_error
    if _model is not None:
        return
    try:
        import torch
        from IndicTransToolkit import IndicProcessor
        from transformers import AutoModelForSeq2SeqLM, AutoTokenizer

        model_name = os.environ.get(
            "INDICTRANS_MODEL", "ai4bharat/indictrans2-en-indic-1B"
        )
        _device = _detect_device()
        log.info("Loading IndicTrans2 model=%s device=%s", model_name, _device)
        _tokenizer = AutoTokenizer.from_pretrained(
            model_name, trust_remote_code=True
        )
        _model = AutoModelForSeq2SeqLM.from_pretrained(
            model_name, trust_remote_code=True
        )
        _model.to(_device)
        _model.eval()
        _processor = IndicProcessor(inference=True)
        _load_error = None
        log.info("IndicTrans2 model loaded.")
    except Exception as e:
        _load_error = str(e)
        log.exception("Failed to load IndicTrans2 model: %s", e)


@app.on_event("startup")
def startup() -> None:
    logging.basicConfig(level=os.environ.get("LOG_LEVEL", "INFO"))
    if os.environ.get("SKIP_MODEL_LOAD", "").lower() in ("1", "true", "yes"):
        log.warning("SKIP_MODEL_LOAD set — model will not be loaded.")
        return
    _load_model()


class TranslateRequest(BaseModel):
    text: str = Field(..., description="Plain text or HTML to translate")
    src_lang: str = Field(default="eng_Latn", description="Source language tag")
    tgt_lang: str = Field(..., description="Target Indic language tag, e.g. hin_Deva")
    is_html: bool = Field(
        default=False,
        description="If true, strip HTML to visible text before translating (output is plain text).",
    )


class TranslateResponse(BaseModel):
    translated_text: str


def _strip_html_to_text(html: str) -> str:
    soup = BeautifulSoup(html, "lxml")
    for tag in soup(["script", "style"]):
        tag.decompose()
    return soup.get_text(separator=" ", strip=True)


def _translate_plain(text: str, src_lang: str, tgt_lang: str) -> str:
    global _model, _tokenizer, _processor, _device, _load_error
    if _load_error or _model is None or _tokenizer is None or _processor is None:
        raise HTTPException(
            status_code=503,
            detail=f"Model not available: {_load_error or 'not loaded'}",
        )
    import torch

    text = (text or "").strip()
    if not text:
        return ""

    max_chars = int(os.environ.get("MAX_INPUT_CHARS", "6000"))
    if len(text) > max_chars:
        text = text[:max_chars]

    batch = _processor.preprocess_batch(
        [text], src_lang=src_lang, tgt_lang=tgt_lang, visualize=False
    )
    max_input_tokens = int(os.environ.get("MAX_INPUT_TOKENS", "512"))
    inputs = _tokenizer(
        batch,
        truncation=True,
        padding="longest",
        max_length=max_input_tokens,
        return_tensors="pt",
        return_attention_mask=True,
    ).to(_device)

    max_gen = int(os.environ.get("MAX_GEN_LENGTH", "512"))
    num_beams = int(os.environ.get("NUM_BEAMS", "4"))

    with torch.no_grad():
        generated = _model.generate(
            **inputs,
            use_cache=True,
            min_length=0,
            max_length=max_gen,
            num_beams=num_beams,
            num_return_sequences=1,
        )

    decoded = _tokenizer.batch_decode(
        generated.detach().cpu().tolist(),
        skip_special_tokens=True,
        clean_up_tokenization_spaces=True,
    )
    out = _processor.postprocess_batch(decoded, lang=tgt_lang)
    if not out:
        return ""
    return out[0].strip()


@app.get("/health")
def health() -> dict[str, Any]:
    ok = _model is not None and _load_error is None
    return {
        "status": "ok" if ok else "degraded",
        "model_loaded": _model is not None,
        "device": _device,
        "error": _load_error,
    }


@app.post("/translate", response_model=TranslateResponse)
def translate(req: TranslateRequest) -> TranslateResponse:
    src = (req.src_lang or "eng_Latn").strip()
    tgt = (req.tgt_lang or "").strip()
    if not tgt:
        raise HTTPException(status_code=400, detail="tgt_lang is required")

    raw = req.text or ""
    if req.is_html:
        work = _strip_html_to_text(raw)
    else:
        work = raw

    if not work.strip():
        return TranslateResponse(translated_text="")

    # Single-line batch for IndicTrans2 preprocessor
    work = re.sub(r"\s+", " ", work).strip()

    try:
        translated = _translate_plain(work, src, tgt)
        return TranslateResponse(translated_text=translated)
    except HTTPException:
        raise
    except Exception as e:
        log.exception("translate failed: %s", e)
        raise HTTPException(status_code=500, detail=str(e)) from e
