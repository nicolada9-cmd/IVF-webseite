// Zentrale Konfiguration – alle Platzhalter-Links an EINER Stelle.
// Später hier die echten URLs eintragen, dann ändern sie sich überall.

export const site = {
  brand: 'Next Fertility',          // Platzhalter bis finales Logo/Markenname
  brandSub: 'IVF Zech · Bregenz',
  // Externer Buchungslink – Hauptziel ist das ERSTGESPRÄCH:
  bookingErstgespraech: 'https://example.com/erstgespraech',   // PLATZHALTER
  bookingKurzgespraech: 'https://example.com/kurzgespraech',   // PLATZHALTER
  // Bestandspatient:innen:
  patientenportal: 'https://portal.ivf.at',
  // Webinare (Zoom) – Akademie "Fruchtbarkeit & Du":
  webinarZoom: 'https://example.com/zoom-webinar',             // PLATZHALTER
  phone: '+43 5574 44836',
  phoneHref: 'tel:+43557444836',
  email: 'zech@ivf.at',
  address: 'Römerstraße 2, 6900 Bregenz, Österreich',
};

// Behandlungen – Menüstruktur & Liste übernommen von ivf.at ("Behandlung"-Menü),
// ergänzt um die vom Konzern gewünschten neuen Seiten (Andrologie, Hysteroskopie).
export const treatments = [
  { slug: 'ivf-icsi', title: 'IVF / ICSI / IMSI', teaser: 'Die Kernverfahren der künstlichen Befruchtung im Labor.', tag: 'Befruchtung' },
  { slug: 'eizellspende', title: 'Eizellspende', teaser: 'Behandlung mit gespendeten Eizellen – einfühlsam begleitet.', tag: 'Spende', source: 'eizellspende.eu' },
  { slug: 'regenbogen', title: 'Kinderwunsch für Regenbogenpaare', teaser: 'Wege zum Kind für lesbische & gleichgeschlechtliche Paare.', tag: 'Kinderwunsch' },
  { slug: 'spermiogramm', title: 'Samenanalyse / Spermiogramm', teaser: 'Abklärung der männlichen Fruchtbarkeit im Labor.', tag: 'Diagnostik' },
  { slug: 'eizellvorsorge', title: 'Eizellvorsorge / Social Freezing', teaser: 'Fruchtbarkeit für später bewahren – Eizellen einfrieren.', tag: 'Vorsorge', source: 'ovita.eu' },
  { slug: 'genetik', title: 'Genetik', teaser: 'Genetische Untersuchung für mehr Sicherheit.', tag: 'Genetik', source: 'gentest-embryo.eu' },
  { slug: 'emotionale-begleitung', title: 'Emotionale Begleitung', teaser: 'Psychologische Unterstützung auf dem Kinderwunschweg.', tag: 'Begleitung' },
  { slug: 'andrologie', title: 'Andrologie', teaser: 'Männliche Fruchtbarkeit abklären und gezielt behandeln.', tag: 'Diagnostik', neu: true },
  { slug: 'hysteroskopie', title: 'Hysteroskopie', teaser: 'Gebärmutterspiegelung zur Abklärung vor der Therapie.', tag: 'Diagnostik', neu: true },
];

// Hauptnavigation – Dropdown-Struktur, an ivf.at orientiert.
// items mit `children` sind Dropdowns; `external: true` öffnet in neuem Tab.
export const nav = [
  {
    label: 'Wir für Sie',
    children: [
      { label: 'Warum zu uns', href: '/warum-zu-uns/' },
      { label: 'Dein Weg zu uns', href: '/ablauf/' },
      { label: 'Erstgespräch', href: site.bookingErstgespraech, external: true },
      { label: 'Kurzgespräch', href: site.bookingKurzgespraech, external: true },
      { label: 'Kontakt', href: '/kontakt/' },
    ],
  },
  {
    label: 'Behandlung',
    href: '/behandlungen/',
    mega: true, // großes Panel mit Behandlungen
    children: treatments.map((t) => ({ label: t.title, href: `/behandlungen/${t.slug}/`, teaser: t.teaser, neu: t.neu })),
  },
  { label: 'Fruchtbarkeit & Du', href: '/akademie/' },
  {
    label: 'Institut',
    children: [
      { label: 'Team', href: '/ueber-uns/' },
      { label: 'Für Zuweiser:innen', href: '/zuweiser/' },
      { label: 'Wissen & Magazin', href: '/wissen/' },
      { label: 'Karriere', href: '/karriere/' },
    ],
  },
  {
    label: 'Qualität',
    children: [
      { label: 'Unser Vorgehen', href: '/qualitaet/' },
      { label: 'Erfahrung & Exzellenz', href: '/qualitaet/#exzellenz' },
      { label: 'Sicherheit', href: '/qualitaet/#sicherheit' },
      { label: 'Erfolgsrate', href: '/qualitaet/#erfolgsrate' },
      { label: 'Kosten', href: '/kosten/' },
    ],
  },
];
