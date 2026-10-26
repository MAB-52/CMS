# IndicTrans2 microservice — Linux image recommended (IndicTransToolkit targets Linux/macOS).
FROM python:3.11-bookworm

WORKDIR /app

ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1 \
    PIP_NO_CACHE_DIR=1

COPY requirements.txt .
# CPU PyTorch wheel (smaller than default); then remaining deps including indictranstoolkit.
RUN pip install --upgrade pip \
    && pip install "torch>=2.5" --index-url https://download.pytorch.org/whl/cpu \
    && pip install -r requirements.txt

COPY main.py .

# EXPOSE 8000

# Set SKIP_MODEL_LOAD=true for a lightweight image smoke-test without downloading weights.
ENV SKIP_MODEL_LOAD=false

# CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]

EXPOSE 8090
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8090"]
