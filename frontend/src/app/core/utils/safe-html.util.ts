/**
 * Removes anything that can execute script from rich-text consent HTML before it is rendered with
 * bypassSecurityTrustHtml (Angular's own sanitizer is bypassed because it strips inline styles).
 * Mirrors HtmlTextUtil.sanitizeRichHtml on the backend; this copy also protects content saved
 * before the backend started sanitizing.
 */
const DANGEROUS_ELEMENTS =
  'script, iframe, frame, frameset, object, embed, applet, link, meta, base, form, input, button, ' +
  'textarea, select, style, svg, math, template, noscript';

const URL_ATTRIBUTES = new Set(['href', 'src', 'action', 'formaction', 'xlink:href', 'srcset']);

function isUnsafeUrl(value: string): boolean {
  // Browsers ignore whitespace/control chars inside the scheme ("java\tscript:"), so strip them first
  const v = value.replace(/[\s\u0000-\u001f]/g, '').toLowerCase();
  return v.startsWith('javascript:') || v.startsWith('vbscript:') || (v.startsWith('data:') && !v.startsWith('data:image/'));
}

function isUnsafeStyle(value: string): boolean {
  const v = value.replace(/\s/g, '').toLowerCase();
  return v.includes('expression(') || v.includes('javascript:') || v.includes('vbscript:');
}

export function sanitizeRichHtml(html: string | null | undefined): string {
  if (!html) {
    return '';
  }
  // DOMParser documents are inert: scripts don't run and images don't load while we clean them
  const doc = new DOMParser().parseFromString(html, 'text/html');
  doc.body.querySelectorAll(DANGEROUS_ELEMENTS).forEach((el) => el.remove());
  doc.body.querySelectorAll('*').forEach((el) => {
    for (const attr of Array.from(el.attributes)) {
      const name = attr.name.toLowerCase();
      if (
        name.startsWith('on') ||
        (URL_ATTRIBUTES.has(name) && isUnsafeUrl(attr.value)) ||
        (name === 'style' && isUnsafeStyle(attr.value))
      ) {
        el.removeAttribute(attr.name);
      }
    }
  });
  return doc.body.innerHTML;
}
