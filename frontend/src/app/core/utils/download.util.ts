export function datedFileName(base: string, ext: string): string {
  const d = new Date();
  const pad = (n: number) => String(n).padStart(2, '0');
  return `${base}-${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}.${ext}`;
}

export function saveBlob(blob: Blob, base: string, ext: string): void {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = datedFileName(base, ext);
  a.style.display = 'none';
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1500);
}

export async function blobErrorMessage(err: unknown, fallback: string): Promise<string> {
  const e = err as { error?: unknown; message?: string; status?: number } | null;
  if (e?.status === 0) {
    return 'Cannot reach the server. Check your connection and try again.';
  }
  const body = e?.error;
  if (body instanceof Blob) {
    try {
      const text = await body.text();
      const parsed = JSON.parse(text) as { message?: string };
      if (parsed?.message) return parsed.message;
    } catch {
      return fallback;
    }
  }
  const msg = (body as { message?: string } | null)?.message;
  return msg || fallback;
}
