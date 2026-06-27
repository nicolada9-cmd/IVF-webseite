# Projektplan – Neue Website Next Fertility / IVF Zech Bregenz

> Arbeitsdokument. Stand: 2026-06-27. Marke vorerst als Platzhalter „Next Fertility".
> Ziel: eine einheitliche, schnelle, vertrauenswürdige, SEO- und GEO-optimierte Website,
> die alle bisher zersplitterten Themenseiten zusammenführt.

---

## 0. Die wichtigste Frage zuerst: WordPress oder „etwas Moderneres"? (CMS & Wartung)

Deine Sorge: ein Headless-CMS könnte zu komplex werden, laufende Updates nicht stemmbar,
alles gerät außer Kontrolle. Das ist eine berechtigte Sorge – aber sie ist **teilweise
andersherum**, als sie sich anfühlt. Der Kern:

**Es gibt zwei völlig verschiedene Arten von „Updates":**

| Art | Wer macht das? | WordPress | Modernes Setup (statisches Frontend + CMS) |
|---|---|---|---|
| **Inhalts-Updates** (Blogartikel, Texte, Bilder ändern) | Marketing | einfach, vertraut | ebenso einfach (gutes Editor-UI) |
| **System-/Sicherheits-Updates** (Software patchen, Hacks vermeiden) | Technik | **hoher, laufender Aufwand** | **fast keiner** |

Der zweite Punkt ist genau die Sorge, die du hast – und dort ist **WordPress der
aufwändigere Weg**, nicht der einfachere:

- WordPress ist ein **dauerhaft laufendes PHP-+Datenbank-System** und das weltweit
  meistgehackte CMS. Core, Theme und jedes Plugin müssen regelmäßig aktualisiert werden;
  Updates können die Seite brechen; Sicherheitslücken sind ein Dauerthema.
- Ein **statisches Frontend** (vorgerenderte HTML-Seiten) hat **praktisch keine
  Angriffsfläche** und nichts, was man wöchentlich patchen muss. Es ist extrem schnell
  (gut für SEO **und** GEO) und billig zu hosten (auch auf deinem Hetzner-Server).

**Wo „Headless" wirklich komplexer ist:** nicht im Tagesbetrieb, sondern bei
**strukturellen Änderungen** (neuer Seitentyp, Layout-Umbau) – dafür braucht es eine:n
Entwickler:in. Das passt aber genau zu deinem Wunsch, **Wartung optional als Service
anbieten** zu können: Marketing pflegt Inhalte selbst, größere Umbauten kommen von uns.

### Empfehlung: Entscheidung entkoppeln (passt zu deinem „erst Prototyp")

Wir bauen das **schnelle Frontend** (der Teil, der später teuer zu ändern ist) zuerst und
unabhängig vom CMS. Das CMS ist eine **austauschbare Schicht**, die wir erst festlegen,
wenn du den Prototyp gesehen und gefühlt hast. So riskierst du nichts.

Frontend-Empfehlung: **Astro** – erzeugt standardmäßig statische, blitzschnelle Seiten mit
sehr sauberem HTML (ideal für GEO), volle Designkontrolle, einfache Mehrsprachigkeit.

CMS-Optionen (entscheiden wir nach dem Prototyp – nach Marketing-Komfort vs. Eigenbetrieb):

1. **Storyblok** (SaaS, visuelles „klick-and-edit"-Editing) – komfortabelste Pflege fürs
   Marketing, **der Anbieter wartet das CMS** (du musst nichts patchen). Monatliche Gebühr.
   *Beste Wahl, wenn maximale Einfachheit für Nicht-Techniker zählt.*
2. **Payload** oder **Directus** (selbst gehostet auf deinem Hetzner-Server) – modernes
   Admin-UI, keine SaaS-Abhängigkeit, alles auf deinem Server, leicht übergebbar. Etwas
   mehr Eigenbetrieb als Storyblok, aber **weit weniger Angriffsfläche als WordPress**.
3. **Git-basiertes CMS** (Decap/Sveltia) – Inhalte liegen als Dateien im Repo, kostenlos,
   Editor schlichter. Gut als günstiger Einstieg.

**Und WordPress?** Es bleibt eine valide Option, v.a. wegen Vertrautheit des Marketings und
des integrierten Systems. Wenn wir es nehmen, dann als **gut abgesichertes, gecachtes
Block-Theme**. Aber gemessen an deinen Top-Prioritäten (Geschwindigkeit, GEO) und deiner
Sorge vor Wartungsaufwand ist der entkoppelte, statische Weg die ehrlich bessere Empfehlung.
Fertty/Ulm wirken über das Design, nicht über die Tatsache, dass im Hintergrund WordPress
läuft – diesen Look erreichen wir mit Astro genauso, nur schneller und wartungsärmer.

> **Fazit:** Du machst dir bei der *laufenden Pflege* unnötig Sorgen – die ist beim
> statischen Weg eher *geringer*. Die Komplexität steckt im *einmaligen Bau* und bei
> *Struktur-Umbauten* – beides übernehme ich.

---

## 1. Ziele & Zielgruppen

**Primäres Konversionsziel:** **Erstgespräch** (über externen Link, Platzhalter).
**Niederschwelliger Einstieg:** **Kurzgespräch** (früher „i20", kostenlos/unverbindlich) –
soll zum Erstgespräch führen, nicht das Hauptziel sein.
**Bestandspatient:innen:** prominenter Zugang zum **Patientenportal**
(https://portal.ivf.at – Befunde, Termine, Kontakt zum med. Dienst).

Zielgruppen:
1. Patientinnen & Paare (Hauptzielgruppe)
2. Zuweiser:innen (eigener Bereich, verstärkt ansprechen)

Tonalität: vertrauenswürdig, kompetent, Wohlgefühl – **nicht** steril, **nicht**
romantisierend/kitschig (kein „wenn aus Liebe ein Kind wird").

---

## 2. Informationsarchitektur / Sitemap (Entwurf)

```
/ (Startseite)
├── Behandlungen (Hub)
│   ├── IVF / ICSI / IMSI
│   ├── Insemination (IUI)
│   ├── Eizellspende                      ← Inhalte aus eizellspende.eu
│   ├── Eizellvorsorge / Social Freezing  ← Inhalte aus ovita.eu
│   ├── Andrologie / Samenanalyse         ← NEU (fehlt aktuell)
│   ├── Hysteroskopie                     ← NEU (fehlt aktuell)
│   ├── Genetik / PID / Embryo-Gentest    ← Inhalte aus gentest-embryo.eu
│   ├── Kryokonservierung / Embryotransfer
│   └── Kinderwunsch für alle (Regenbogenfamilien, Solo)
├── Ablauf / Dein Weg zu uns  (Funnel: Kurzgespräch → Erstgespräch → Behandlung)
├── Fruchtbarkeit & Du (Gesundheitsakademie)
│   ├── Webinare (Zoom – Platzhalter)
│   ├── Anstehende Termine / Anmeldung
│   └── Aufzeichnungen / Wissensvideos
├── Wissen / Magazin   ← Konsolidierung kinderwunsch-blog.com (SEO-Kapital!)
│   └── Artikel (Kategorien & Tags)
├── Für Zuweiser:innen  (Überweisungsweg, Fachinfos, direkter Kontakt)
├── Über uns
│   ├── Team / Ärzt:innen & Embryolog:innen  (Bios + Fotos → E-E-A-T)
│   ├── Institut / Labor / Qualität & Zertifikate
│   └── Standort Bregenz (Anfahrt, Local SEO)
├── Kontakt
├── Patientenportal (externer Link → portal.ivf.at)  [im Header sichtbar]
└── Rechtliches (Impressum, Datenschutz, FMedG-Hinweise)
```

**Header-Leiste (immer sichtbar):**
- Logo · Hauptmenü · **Button „Erstgespräch vereinbaren"** (primär, externer Link)
- sekundär: „Kurzgespräch" · „Patientenportal / Login"

**Einheitliches Behandlungsseiten-Schema** (jede Behandlung gleich aufgebaut → Vertrauen +
GEO): Kurzdefinition · Für wen geeignet · Ablauf in Schritten · Erfolg/Sicherheit · Kosten
(soweit erlaubt) · FAQ (schema.org `FAQPage`) · CTA Kurz-/Erstgespräch.

---

## 3. Design-Richtung

- **Orientierung:** Klarheit/Übersicht von Fertty, Seriosität/Farbwelt von Next Fertility Ulm.
- **Farben:** Basis ruhig & medizinisch-vertrauenswürdig (Weiß/Off-White, Anthrazit-Text,
  ein klares Marken-Blau/Petrol als Primärfarbe). **Babyrosa nur als Akzent**, ergänzt um
  eine komplementäre, moderne Akzentfarbe (z.B. warmes Korall/Bernstein oder ruhiges Grün
  für „Wachstum/Gesundheit"). CI wird modernisiert, nicht gebrochen.
- **Typografie:** klare, gut lesbare Schrift; große ruhige Headlines, viel Weißraum.
- **Komponenten:** Hero mit klarem CTA, Karten für Behandlungen, Schritt-für-Schritt-Ablauf,
  Team-Karten, Testimonials, Zertifikats-Badges, FAQ-Akkordeons.
- **Finale Farben/Logo:** kommen von dir nach; bis dahin Platzhalter-Designsystem.

---

## 4. SEO- & GEO-Strategie (von Anfang an eingebaut)

**SEO:** saubere URL-Struktur, sprechende Titles/Descriptions, interne Verlinkung (Hub-&-
Spoke um Behandlungen), Sitemap.xml, schnelle Core Web Vitals, Local SEO (Standort Bregenz,
Google-Business-Verknüpfung), konsolidiertes Magazin als Themen-Autorität.

**GEO (Generative Engine Optimization – Sichtbarkeit in ChatGPT, Perplexity, Google AI
Overviews, Gemini):**
- Strukturierte Daten / schema.org: `MedicalClinic`, `MedicalProcedure`, `Physician`,
  `FAQPage`, `BreadcrumbList`.
- **Frage-Antwort-Formate** und klare Definitionen (AI-Engines zitieren präzise Antworten).
- `llms.txt` + klare Entitäten (Klinik, Ärzt:innen, Behandlungen eindeutig benannt).
- Starke E-E-A-T-Signale: echte Autor:innen/Ärzt:innen mit Bios, Quellen, Aktualität.

---

## 5. Content-Migration & Redirects (kein Traffic-Verlust)

1. **Content-Inventar:** alle relevanten URLs von ivf.at, eizellspende.eu, ovita.eu,
   kinderwunsch-blog.com, gentest-embryo.eu erfassen → Tabelle (alte URL · Thema · Text ·
   Ziel-URL neu).
2. **Extraktion & Restrukturierung** der Texte in das neue Schema.
3. **301-Redirect-Map:** jede alte URL → passende neue URL. Themen-Domains bleiben
   registriert und leiten dauerhaft auf ivf.at (Konsolidierung der Domain-Autorität).
4. Nach Launch: Search-Console-Monitoring, 404-Kontrolle, Rankings beobachten.

---

## 6. Phasenplan & Deliverables

| Phase | Inhalt | Ergebnis |
|---|---|---|
| **A. Prototyp** | Astro-Setup + Startseite + 1 Beispiel-Behandlungsseite, Designsystem, Platzhalter-Inhalte/Logo | **Sichtbare Seite zum Beurteilen** → CMS-Entscheidung |
| **B. CMS-Entscheidung** | Storyblok vs. selbst gehostet (Payload/Directus) vs. WordPress | festgelegte Pflege-Lösung |
| **C. Content-Inventar & IA** | Crawl der 5 Altseiten, Redirect-Map, finale Sitemap | Migrations-Tabelle |
| **D. Vollausbau** | alle Behandlungen, Magazin, Akademie, Zuweiser, Team, Rechtliches | komplette Website |
| **E. SEO/GEO-Feinschliff** | Schema, Performance, Metadaten, llms.txt | technisch optimiert |
| **F. Launch & Redirects** | Hetzner-Deployment, 301-Redirects, Übergabe-Doku | Go-Live |

---

## 7. Offene Punkte / wird nachgeliefert

- **Logo & finale Markenfarben** (Platzhalter „Next Fertility" bis dahin)
- **Externer Buchungslink** Erstgespräch/Kurzgespräch (Platzhalter bis dahin)
- **Zoom-Webinar-Links / Termine** für „Fruchtbarkeit & Du" (Platzhalter)
- **Sprachen:** DE + EN bestätigt (Architektur von Anfang an zweisprachig)
- **Hosting:** Hetzner bestätigt (statisches Hosting problemlos; leicht übergebbar)

**Bestätigte Fakten (Quelle: ivf.at):** Römerstraße 2, 6900 Bregenz · Tel. +43 5574 44836 ·
zech@ivf.at · Patientenportal: https://portal.ivf.at
