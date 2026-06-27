// Detailinhalte je Behandlung – einheitliches Schema:
//   intro, forWhom[], steps[{title, text}], facts[], faqs[{q,a}]
// "eizellspende" ist als Muster voll ausgearbeitet (Demonstration der Tiefe,
// die wir später mit den extrahierten Inhalten der Altseiten füllen).
// Andere Slugs nutzen sinnvolle Platzhalter im selben Schema.

export const treatmentContent = {
  eizellspende: {
    intro:
      'Wenn eine Schwangerschaft mit eigenen Eizellen nicht möglich ist, kann die Eizellspende ein sicherer und erprobter Weg zum eigenen Kind sein. Bei der Behandlung werden Eizellen einer sorgfältig ausgewählten Spenderin im Labor befruchtet und der Embryo in die Gebärmutter der Empfängerin übertragen.',
    forWhom: [
      'Frauen ohne ausreichende eigene Eizellreserve (z. B. nach vorzeitiger Menopause)',
      'Wiederholt erfolglose IVF-/ICSI-Versuche mit eigenen Eizellen',
      'Genetische Gründe, die gegen eigene Eizellen sprechen',
      'Frauen in fortgeschrittenem reproduktivem Alter',
    ],
    steps: [
      { title: 'Beratung & Diagnostik', text: 'Im Erstgespräch klären wir Voraussetzungen, Ablauf und rechtlichen Rahmen und führen die notwendige Diagnostik durch.' },
      { title: 'Auswahl der Spenderin', text: 'Eine passende Spenderin wird nach medizinischen und – soweit gewünscht – äußerlichen Merkmalen sorgfältig zugeordnet.' },
      { title: 'Befruchtung im Labor', text: 'Die gespendeten Eizellen werden mit dem Samen des Partners oder eines Spenders befruchtet (IVF/ICSI).' },
      { title: 'Embryotransfer', text: 'Der entstandene Embryo wird schonend in die zuvor vorbereitete Gebärmutter der Empfängerin übertragen.' },
      { title: 'Schwangerschaftstest & Begleitung', text: 'Etwa zwei Wochen später erfolgt der Test; bei Eintritt einer Schwangerschaft begleiten wir Sie weiter.' },
    ],
    facts: [
      'Erprobtes Verfahren mit guten Erfolgsaussichten',
      'Rechtlicher Rahmen wird transparent erklärt',
      'Einfühlsame, diskrete Begleitung',
    ],
    faqs: [
      { q: 'Ist eine Eizellspende in Österreich erlaubt?', a: 'Ja, die Eizellspende ist in Österreich unter bestimmten gesetzlichen Voraussetzungen (Fortpflanzungsmedizingesetz) zulässig. Die Details besprechen wir individuell mit Ihnen.' },
      { q: 'Wie wird die Spenderin ausgewählt?', a: 'Spenderinnen werden medizinisch sorgfältig untersucht und nach passenden Kriterien zugeordnet. Wir achten auf Eignung, Gesundheit und – soweit möglich – auf passende Merkmale.' },
      { q: 'Wie hoch sind die Erfolgschancen?', a: 'Die Erfolgsaussichten der Eizellspende sind im Vergleich zu anderen Verfahren gut, da junge, gesunde Eizellen verwendet werden. Ihre individuellen Chancen besprechen wir im Erstgespräch.' },
    ],
  },
};

// Strukturierter Platzhalter für noch nicht ausgearbeitete Behandlungen.
export const fallbackContent = (title) => ({
  intro: `Diese Seite zu „${title}" wird im nächsten Schritt mit den extrahierten und strukturierten Inhalten der bestehenden Seiten gefüllt. Der Aufbau folgt dem einheitlichen Schema aller Behandlungen.`,
  forWhom: ['Wird mit Inhalten der Bestandsseiten ergänzt', 'Klare Eignungskriterien', 'Individuelle Beratung im Erstgespräch'],
  steps: [
    { title: 'Beratung & Diagnostik', text: 'Erfassung Ihrer Situation und notwendige Untersuchungen.' },
    { title: 'Behandlung', text: 'Durchführung nach individuellem Plan.' },
    { title: 'Begleitung', text: 'Persönliche Betreuung über das Patientenportal.' },
  ],
  facts: ['Einheitliches, klares Seitenschema', 'Wird mit Fachinhalten gefüllt', 'Persönliche Begleitung'],
  faqs: [
    { q: 'Für wen ist diese Behandlung geeignet?', a: 'Das klären wir individuell – am besten im kostenlosen Kurzgespräch.' },
    { q: 'Wie sind die nächsten Schritte?', a: 'Vereinbaren Sie ein Erstgespräch; dort besprechen wir Diagnostik und Behandlungsweg.' },
  ],
});
