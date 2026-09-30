// Keeps `<input data-digits>` fields to digits only (phone and WhatsApp numbers).
// Letters, spaces and symbols are dropped as the visitor types. A pasted number like "+91 98765-43210"
// or "098765 43210" is cleaned to its 10 digits. The field's `pattern` still checks the result on submit.
export function digitsOnly(root: ParentNode = document) {
  root.querySelectorAll<HTMLInputElement>('input[data-digits]').forEach((el) => {
    if (el.dataset.digitsReady) return;
    el.dataset.digitsReady = '1';
    const max = el.maxLength > 0 ? el.maxLength : Infinity;

    el.addEventListener('input', () => {
      const v = el.value;
      const clean = v.replace(/\D/g, '').slice(0, max);
      if (clean === v) return;
      // Keep the cursor where it was, minus the characters removed before it.
      const caret = el.selectionStart ?? v.length;
      const before = v.slice(0, caret).replace(/\D/g, '').length;
      el.value = clean;
      el.setSelectionRange(Math.min(before, clean.length), Math.min(before, clean.length));
    });

    el.addEventListener('paste', (e) => {
      const text = e.clipboardData?.getData('text') ?? '';
      let digits = text.replace(/\D/g, '');
      // A full Indian number pasted with its country code or trunk 0: keep the last 10 digits.
      if (max === 10 && digits.length > 10 && /^(91|0)/.test(digits)) digits = digits.slice(-10);
      e.preventDefault();
      const start = el.selectionStart ?? el.value.length;
      const end = el.selectionEnd ?? el.value.length;
      const next = (el.value.slice(0, start) + digits + el.value.slice(end)).slice(0, max);
      el.value = next;
      const pos = Math.min(start + digits.length, next.length);
      el.setSelectionRange(pos, pos);
      el.dispatchEvent(new Event('input', { bubbles: true }));
    });
  });
}
