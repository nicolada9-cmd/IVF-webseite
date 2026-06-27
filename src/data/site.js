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

// Hauptnavigation – schlank gehalten (Top-Level uncluttered).
export const nav = [
  { label: 'Behandlungen', href: '/behandlungen/' },
  { label: 'Dein Weg zu uns', href: '/ablauf/' },
  { label: 'Fruchtbarkeit & Du', href: '/akademie/' },
  { label: 'Wissen', href: '/wissen/' },
  { label: 'Für Zuweiser:innen', href: '/zuweiser/' },
  { label: 'Über uns', href: '/ueber-uns/' },
];

// Behandlungen – inkl. der bisher fehlenden Seiten (Andrologie, Hysteroskopie)
// und der zu konsolidierenden Themen (Eizellspende, Eizellvorsorge, Genetik).
export const treatments = [
  { slug: 'ivf-icsi', title: 'IVF / ICSI / IMSI', teaser: 'Künstliche Befruchtung im Labor – die Kernbehandlungen bei Kinderwunsch.', tag: 'Befruchtung' },
  { slug: 'insemination', title: 'Insemination (IUI)', teaser: 'Schonende Methode, bei der aufbereitete Spermien direkt eingebracht werden.', tag: 'Befruchtung' },
  { slug: 'eizellspende', title: 'Eizellspende', teaser: 'Behandlung mit gespendeten Eizellen – umfassend und einfühlsam begleitet.', tag: 'Spende', source: 'eizellspende.eu' },
  { slug: 'eizellvorsorge', title: 'Eizellvorsorge / Social Freezing', teaser: 'Fruchtbarkeit für später bewahren durch das Einfrieren eigener Eizellen.', tag: 'Vorsorge', source: 'ovita.eu' },
  { slug: 'andrologie', title: 'Andrologie & Samenanalyse', teaser: 'Männliche Fruchtbarkeit abklären und gezielt behandeln.', tag: 'Diagnostik', neu: true },
  { slug: 'hysteroskopie', title: 'Hysteroskopie', teaser: 'Gebärmutterspiegelung zur Abklärung und Behandlung vor einer Therapie.', tag: 'Diagnostik', neu: true },
  { slug: 'genetik-pid', title: 'Genetik & PID', teaser: 'Genetische Untersuchung von Embryonen für mehr Sicherheit.', tag: 'Genetik', source: 'gentest-embryo.eu' },
  { slug: 'kryo-transfer', title: 'Kryokonservierung & Transfer', teaser: 'Einfrieren und späterer Transfer von Embryonen (Kryozyklus).', tag: 'Labor' },
];
