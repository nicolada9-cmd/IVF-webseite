// Link-Helfer: prefixt interne Pfade mit Astros BASE_URL,
// damit die Seite sowohl unter "/" (eigene Domain) als auch unter
// einem Unterpfad (z. B. GitHub Pages: /IVF-webseite/) korrekt funktioniert.
const BASE = import.meta.env.BASE_URL || '/';

export function u(path = '/') {
  if (typeof path !== 'string') return path;
  // Externe Links, Mail/Tel und Anker unverändert lassen:
  if (/^(https?:|mailto:|tel:|#|\/\/)/.test(path)) return path;
  const base = BASE.replace(/\/+$/, '');
  const rest = path.replace(/^\/+/, '');
  return `${base}/${rest}`;
}
