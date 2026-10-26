# IndicTrans2 translation service (ConsentIQ)

Lightweight FastAPI service wrapping `ai4bharat/indictrans2-en-indic-1B` for English → Indic translation.

## Endpoints

- `GET /health` — model load status
- `POST /translate` — JSON body `{ "text": "...", "src_lang": "eng_Latn", "tgt_lang": "hin_Deva", "is_html": false }` → `{ "translated_text": "..." }`

## Local run

```bash
cd indictrans2-service
python -m venv .venv
.venv\Scripts\activate  # Windows
# source .venv/bin/activate  # Linux/macOS
pip install -r requirements.txt
# uvicorn main:app --host 0.0.0.0 --port 8086
uvicorn main:app --host 0.0.0.0 --port 8090

libretranslate --host 0.0.0.0 --port 5000
```

First startup downloads model weights from HuggingFace (multi‑GB). Use a GPU machine for acceptable latency.

## Docker

```bash
docker build -t consentiq-indictrans2 .
docker run --rm -p 8000:8000 consentiq-indictrans2
```

## Environment

| Variable | Default | Purpose |
|----------|---------|---------|
| `INDICTRANS_MODEL` | `ai4bharat/indictrans2-en-indic-1B` | HuggingFace model id |
| `SKIP_MODEL_LOAD` | `false` | Set `true` to skip loading (health only) |
| `MAX_INPUT_CHARS` | `6000` | Hard cap on input text length |
| `MAX_INPUT_TOKENS` | `512` | Tokenizer `max_length` |
| `MAX_GEN_LENGTH` | `512` | Generation `max_length` |
| `NUM_BEAMS` | `4` | Beam search width |
