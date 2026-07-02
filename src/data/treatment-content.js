// Detailinhalte je Behandlung – inhaltlich übernommen von ivf.at (originalgetreu,
// strukturiert). Schema pro Eintrag:
//   intro, forWhom[], steps[{title,text}], facts[], faqs[{q,a}],
//   sections[{heading, paras[]}]  (optional, für Zusatztext),
//   table {caption, head[], rows[][]}  (optional),
//   note (optional, rechtlicher/wichtiger Hinweis)

export const treatmentContent = {
  'ivf-icsi': {
    intro:
      'Unter „künstlicher Befruchtung" versteht man das Zusammenführen von Eizelle und Samenzelle außerhalb des Körpers. Dazu zählen die Verfahren IVF, ICSI und IMSI. Bei Next Fertility IVF Prof. Zech werden diese Methoden seit Jahrzehnten auf höchstem Niveau angewendet – die IVF seit 1985, die ICSI seit 1993 und die IMSI seit 2005 (als weltweit erstes Zentrum).',
    forWhom: [
      'Paare mit unerfülltem Kinderwunsch',
      'Eingeschränkte Spermienqualität (Indikation für ICSI/IMSI)',
      'Erfolglose vorangegangene Behandlungen',
      'Situationen, in denen eine gezielte Spermienauswahl die Chancen erhöht',
    ],
    sections: [
      { heading: 'IVF – In-vitro-Fertilisation', paras: [
        'Unter einer IVF (In-vitro-Fertilisation, lat. „im Glas") versteht man die Befruchtung einer Eizelle mit einem Spermium außerhalb des Körpers. Nach einer Hormonbehandlung werden der Frau Eizellen aus dem Eierstock entnommen (Punktion).',
        'Bei der klassischen IVF werden Eizellen und Spermien in einer Reagenzschale zusammengebracht – das Eindringen in die Eizelle erfolgt selbstständig. Die befruchteten Eizellen wachsen über 2–6 Tage zu Blastozysten heran und werden anschließend in die Gebärmutter übertragen (Embryotransfer).',
      ]},
      { heading: 'ICSI – Intracytoplasmatische Spermieninjektion', paras: [
        'Bei der ICSI wird ein einzelnes Spermium mit einer feinen Nadel unter dem Mikroskop direkt in die Eizelle eingebracht. Das Spermium wird so beim Überwinden der Eizellhülle unterstützt.',
        'Die Methode wurde 1992 erstmals beschrieben und 1993 von IVF Prof. Zech in Bregenz angewendet. Die erfolgreiche Befruchtung wird nach 16–18 Stunden anhand des Vorkernstadiums mikroskopisch überprüft.',
      ]},
      { heading: 'IMSI – Morphologisch selektierte Spermieninjektion', paras: [
        'Kern der IMSI ist eine hochauflösende Spezial-Mikroskopie: Spermien werden bei 6.000- bis 12.000-facher Vergrößerung analysiert und nach standardisierten Kriterien ausgewählt. So kann das erfolgversprechendste Spermium für die Befruchtung verwendet werden.',
        'Next Fertility IVF Prof. Zech hat die IMSI entscheidend mitentwickelt und 2005 in Bregenz als weltweit erstes Zentrum standardisiert angewendet. Die Ergebnisse wurden international vielfach publiziert.',
      ]},
    ],
    steps: [
      { title: 'Kontakt & Information', text: 'Kontaktaufnahme, Infoabend oder kostenloses Kurzgespräch.' },
      { title: 'Terminvereinbarung', text: 'Sie erhalten ein Infopaket; Befunde von Mann und Frau werden eingeholt.' },
      { title: 'Erstgespräch', text: 'Anamnese, Aufklärung zu Risiken, Kosten und Dauer, ggf. Ultraschall.' },
      { title: 'Stimulationsphase', text: 'Individuelle Therapie und Vorbereitung auf die Eizellentnahme mit Ultraschallkontrollen.' },
      { title: 'Eizellentnahme', text: 'Kurzer ambulanter Eingriff unter Kurznarkose; parallel Samengewinnung und Auswahl der besten Samenzellen.' },
      { title: 'Befruchtung im Labor', text: 'Die befruchteten Eizellen wachsen über 2–6 Tage zu Blastozysten heran.' },
      { title: 'Embryotransfer', text: 'Der/die Embryo(nen) werden mit einem dünnen Katheter in die Gebärmutter eingebracht.' },
      { title: 'Schwangerschaftsbetreuung', text: 'Weiterbetreuung beim zuweisenden Gynäkologen bis zur Geburt.' },
    ],
    facts: [
      'IVF bei Prof. Zech seit 1985, ICSI seit 1993',
      'IMSI 2005 – weltweit erstes Zentrum',
      'ISO-zertifiziert seit 1997 (weltweit erste IVF-Einheit)',
    ],
    table: {
      caption: 'Überblick der Befruchtungsmethoden',
      head: ['Methode', 'Befruchtung im Labor', 'Erstmals', 'Vergrößerung'],
      rows: [
        ['IUI (Insemination)', 'nein', '~1770', '—'],
        ['IVF', 'ja', '1979', '—'],
        ['ICSI', 'ja', '1992', '200×'],
        ['IMSI', 'ja', '2005', '6.000–12.000×'],
      ],
    },
    faqs: [
      { q: 'Was ist der Unterschied zwischen IVF und ICSI?', a: 'Bei der ICSI wird die Samenzelle im Labor direkt in die Eizelle injiziert. Bei der klassischen IVF werden Spermien nur mit der Eizelle zusammengebracht und müssen ihren Weg selbst finden – ähnlich dem natürlichen Vorgang.' },
      { q: 'Was ist der Unterschied zwischen ICSI und IMSI?', a: 'Die IMSI ist eine Weiterentwicklung der ICSI mit hochauflösender Mikroskopie. Dadurch lassen sich die Spermien genauer beurteilen und die erfolgversprechendsten für die Befruchtung auswählen.' },
    ],
  },

  eizellspende: {
    intro:
      'Manche Paare können mit den eigenen Eizellen nicht schwanger werden. Für sie ist die Eizellspende oft die Möglichkeit auf die ersehnte Schwangerschaft und die Geburt eines gesunden Kindes. Nach Daten der ESHRE wurden allein zwischen 1997 und 2011 in Europa über 43.000 Kinder durch Eizellspende geboren.',
    forWhom: [
      'Reduzierte Eizellreserve oder -qualität (häufig altersbedingt)',
      'Prämature Ovarialinsuffizienz (vorzeitige Wechseljahre)',
      'Mehrfach erfolglose IVF-Therapien',
      'Genetische/chromosomale Gründe, wenn eine PID nicht gewünscht/möglich ist',
      'Nach Operationen an den Eierstöcken oder Chemo-/Strahlentherapie',
      'Gonadendysgenesie (z. B. Swyer-Syndrom)',
    ],
    sections: [
      { heading: 'Kinderwunsch im fortgeschrittenen Alter', paras: [
        'Die Fruchtbarkeit nimmt oft schon ab Mitte 30 ab. Ab etwa dem 40. Lebensjahr sind die Chancen auf eine Schwangerschaft mit eigenen Eizellen meist deutlich reduziert – diese biologische Grenze lässt sich auch mit modernsten Methoden nicht überwinden.',
        'Eine IVF mit gespendeten Eizellen kompensiert faktisch den altersbedingten Fertilitätsabfall: Die Erfolgsaussichten korrelieren mit dem Alter der Spenderin, nicht der Empfängerin.',
      ]},
    ],
    table: {
      caption: 'Schwangerschaftsrate (SSR) und Lebendgeburtenrate (LBR) nach Alter der Frau',
      head: ['Alter', 'SSR', 'LBR'],
      rows: [
        ['20–30', '42 %', '> 37 %'],
        ['31–35', '38 %', '29 %'],
        ['36–39', '31 %', '21 %'],
        ['40', '22 %', '> 13 %'],
        ['42', '17 %', '> 8 %'],
        ['44', '11 %', '> 3 %'],
        ['Eizellspende', '42 %', '—'],
      ],
    },
    steps: [
      { title: 'Kontakt & Erstgespräch', text: 'Kontaktaufnahme und persönliche Beratung; erste Diagnose und Behandlungsempfehlung.' },
      { title: 'Untersuchungen & Aufnahme ins Programm', text: 'Notwendige medizinische Untersuchungen; Aufnahme in das Eizellspende-Programm.' },
      { title: 'Suche nach der Spenderin', text: 'Eine geeignete Spenderin wird sorgfältig zugeordnet.' },
      { title: 'Therapie mit den gespendeten Eizellen', text: 'Befruchtung, Kultivierung und Blastozystenentwicklung im Labor.' },
      { title: 'Vorbereitung der Empfängerin & Transfer', text: 'Die Wunschmutter wird vorbereitet; der Embryo wird in die Gebärmutter übertragen.' },
    ],
    facts: [
      'Österreich erlaubt die Eizellspende seit 2015 (FMedG)',
      'Erfolg korreliert mit dem Alter der Spenderin',
      'Über 43.000 Geburten in Europa (1997–2011, ESHRE)',
    ],
    faqs: [
      { q: 'Was kostet eine Eizellspende?', a: 'Die Kosten bewegen sich in Europa je nach Programm und Leistung in der Regel zwischen 7.000 und 12.000 Euro. Eine individuelle Vorabinformation zu den Behandlungskosten erhalten Sie auf Anfrage.' },
      { q: 'Wie hoch ist die Erfolgschance?', a: 'Eine IVF mit gespendeten Eizellen gleicht den altersbedingten Fertilitätsabfall weitgehend aus. Die Chancen auf eine Lebendgeburt entsprechen dem Alter der (jungen) Spenderin. Individuelle Faktoren können die Chancen beeinflussen.' },
      { q: 'Welche Risiken gibt es?', a: 'Das absolute Risiko ist nach heutigem Wissensstand gering. Einzelne Risiken (z. B. Präeklampsie) sind möglicherweise leicht erhöht. Eine engmaschige, multidisziplinäre Betreuung vor, während und nach der Schwangerschaft minimiert diese Risiken.' },
      { q: 'Anonyme oder nicht-anonyme Spende – was gilt in Österreich?', a: 'In Österreich gilt die nicht-anonyme Spende: Ein so gezeugtes Kind hat ab dem vollendeten 14. Lebensjahr das Recht, Informationen über die Spenderin zu erhalten. Dieses Recht steht ausschließlich dem Kind zu.' },
    ],
    note: 'Rechtlicher Rahmen in Österreich (FMedG): Die Spenderin darf das 30. Lebensjahr noch nicht vollendet haben, es müssen medizinische Gründe vorliegen, die Spende ist für die Spenderin unentgeltlich und erfolgt nicht-anonym.',
  },

  regenbogen: {
    intro:
      'Viele Frauenpaare wünschen sich von Herzen ein gemeinsames Kind. In Österreich steht eine Kinderwunschbehandlung auch Frauenpaaren offen. Mit Samenspende, ggf. Eizellspende oder der ROPA-Methode (gemeinsame Mutterschaft) begleiten wir Sie mit einem erfahrenen Team bei der Familiengründung.',
    forWhom: [
      'Lesbische und gleichgeschlechtliche weibliche Paare mit Kinderwunsch',
      'Paare, die eine gemeinsame Mutterschaft (ROPA) wünschen',
      'Auch Paare aus dem Ausland (Rechtslage im Heimatland vorab klären)',
    ],
    sections: [
      { heading: 'Ihre Möglichkeiten', paras: [
        'Intrauterine Insemination mit Spendersamen (AID) · IVF/ICSI mit Spendersamen · IVF/ICSI mit Spendersamen und Spendereizellen · ROPA (reziproke IVF/ICSI): Eine Partnerin stellt die Eizellen, die andere trägt das Kind aus.',
      ]},
    ],
    steps: [
      { title: 'Erstgespräch', text: 'Wir klären Ihre Fragen und Therapieoptionen und erläutern den Ablauf; erste Voruntersuchungen sind möglich.' },
      { title: 'Vorbereitungen & Notariatsakt', text: 'Gemeinsame Festlegung der Therapie; Erstellung des notwendigen Notariatsakts bei einem österreichischen Notar.' },
      { title: 'Spenderauswahl', text: 'Auswahl des passenden Spenders aus renommierten Samenbanken – oder ein selbst mitgebrachter Spender.' },
      { title: 'Behandlungsstart', text: 'Unser Team aus Ärzt:innen, medizinischem Dienst, Labor und Psychologie begleitet Sie durch die Behandlung.' },
    ],
    facts: [
      'IVF-Fonds steht Frauenpaaren seit 2015 offen',
      'Samenspende in Österreich nicht-anonym (Kind ab 14 auskunftsberechtigt)',
      'Ein Spender darf in Österreich für max. 3 Familien verwendet werden',
    ],
    faqs: [
      { q: 'Können sich auch Paare aus dem Ausland in Österreich behandeln lassen?', a: 'Grundsätzlich ja. Es ist ratsam, sich vorab über die Rechtslage im Heimatland zu informieren (z. B. Anerkennung der Elternschaft). Der Notariatsakt zur Samenspende muss immer im Land der Therapie – also Österreich – erfolgen.' },
      { q: 'Werden die Kosten übernommen?', a: 'Österreichischen Paaren steht eine Förderung durch den IVF-Fonds zu, sofern die Einschlusskriterien erfüllt sind. Seit 2015 gilt dies auch für Frauenpaare.' },
      { q: 'Woher stammt die Samenspende?', a: 'Wir arbeiten mit renommierten Samenbanken zusammen; ausgewählt wird der Spender direkt vom Paar. Nach österreichischem Recht erfolgt die Spende nicht-anonym.' },
    ],
  },

  spermiogramm: {
    intro:
      'Ein Spermiogramm gibt Auskunft über die Qualität der Spermien und damit über die individuelle Fruchtbarkeit des Mannes. Bei Next Fertility IVF Prof. Zech werden Spermiogramme nach neuestem wissenschaftlichem Stand von Embryolog:innen und Androlog:innen erstellt – auch unabhängig von einer geplanten Behandlung.',
    forWhom: [
      'Abklärung bei unerfülltem Kinderwunsch',
      'Vorbereitung auf eine IVF-/ICSI-/IMSI-Therapie',
      'Männer mit persönlichem Interesse an ihrem Fertilitätsstatus',
    ],
    sections: [
      { heading: 'Drei Spermiogramm-Varianten', paras: [
        'I. Spermiogramm basic (WHO): erster Überblick nach international normierten Referenzwerten – Konzentration, Beweglichkeit, Morphologie und pH-Wert.',
        'II. Spermiogramm surrounding: Standard bei Next Fertility – zusätzlich Messung von oxidativem Stress und Peroxidase-positiven Leukozyten. Ergebnis liegt unmittelbar vor.',
        'III. Spermiogramm molecular: umfassende Gesamt-Diagnostik – zusätzlich hochauflösende Morphologie (MSOME), Chromatin-Status, DNA-Fragmentierung und CatSper-Test.',
      ]},
    ],
    steps: [
      { title: 'Samenabgabe', text: 'Gewinnung der Probe (Masturbation) unter geeigneten Bedingungen.' },
      { title: 'Laboranalyse', text: 'Untersuchung der Parameter durch erfahrene Biolog:innen, je nach Variante mit erweiterten Tests.' },
      { title: 'Befund & Beratung', text: 'Der Befund bildet die Grundlage für die individuelle Beratung und Therapieplanung.' },
    ],
    facts: [
      'Spermiogramm basic ca. 180 €, surrounding 250 €, molecular 690 €',
      'Zur gesicherten Diagnose Wiederholung nach 8–12 Wochen empfohlen',
      'Ca. jeder 100. Mann hat einen CatSper-Defekt',
    ],
    table: {
      caption: 'Untersuchte Parameter je Variante',
      head: ['Parameter', 'basic', 'surrounding', 'molecular'],
      rows: [
        ['Konzentration, Motilität, Vitalität, pH', '✓', '✓', '✓'],
        ['Morphologie (Standard)', '✓', '✓', '✓'],
        ['Oxidativer Stress · Leukozyten', '—', '✓', '✓'],
        ['Morphologie (hochauflösend, MSOME)', '—', '—', '✓'],
        ['Chromatin-Status · DNA-Fragmentierung', '—', '—', '✓'],
        ['CatSper', '—', '—', '✓'],
      ],
    },
    faqs: [
      { q: 'Wofür brauche ich ein Spermiogramm?', a: 'Es gibt Auskunft über das männliche Fertilitätspotenzial, kann Ursachen einer männlich bedingten Unfruchtbarkeit aufdecken und bildet die Grundlage für Beratung und Therapieplanung.' },
      { q: 'Was kostet ein Spermiogramm?', a: 'Ein Basisspermiogramm kostet in der Regel ca. 180 €. Die erweiterten Varianten „surrounding" und „molecular" sind mit 250 € bzw. 690 € veranschlagt. Unter Umständen übernimmt die Krankenkasse die Kosten – am besten vorab anfragen.' },
      { q: 'Ist die Samenqualität immer gleich?', a: 'Nein, sie unterliegt natürlichen Schwankungen. Ein einzelnes Spermiogramm ist eine Momentaufnahme; für eine gesicherte Diagnose sollte es nach 8–12 Wochen wiederholt werden.' },
      { q: 'Wie kann ich die Samenqualität verbessern?', a: 'Ein gesunder Lebenswandel hilft: ausgewogene Ernährung, viel Bewegung, Nikotinverzicht. Was dem Körper guttut, tut auch den Spermien gut.' },
    ],
  },

  eizellvorsorge: {
    intro:
      'Die Eizellvorsorge (Social Freezing / Fertilitätsprotektion) ermöglicht es, eigene Eizellen sicher einzufrieren, über längere Zeit zu lagern und damit später schwanger zu werden – besonders wenn die Voraussetzungen durch fortgeschrittenes Alter ungünstiger werden. Die aseptische Vitrifikation durch erfahrene Biolog:innen erzielt hohe Überlebensraten beim Auftauen.',
    forWhom: [
      'Frauen ab Mitte 30 (deutliche Abnahme der Fruchtbarkeit)',
      'Prämature Ovarialinsuffizienz oder familiäre Häufung',
      'Vor geplanten Ovarial-Operationen (z. B. Endometriose, Zysten)',
      'Vor Chemo-/Strahlentherapie (Fertilitätsprotektion)',
      'Vorausschauende Familienplanung („nicht zu lange warten")',
    ],
    steps: [
      { title: 'Vorbereitung', text: 'Beratungsgespräch, gynäkologische Untersuchung, Hormonanalyse und Serologie.' },
      { title: 'Hormonelle Stimulation', text: 'Gezielte Stimulation der Eierstöcke, überwacht per 3D-Ultraschall.' },
      { title: 'Eizellentnahme (Punktion)', text: 'Kurzer Eingriff unter leichter Sedierung durch die Scheide unter Ultraschallsicht.' },
      { title: 'Vitrifikation', text: 'Die Eizellen werden aseptisch tiefgefroren und bei −196 °C im Stickstofftank gelagert.' },
      { title: 'Späterer Einsatz', text: 'Bei Kinderwunsch werden die Eizellen aufgetaut und mit Partner- oder Spendersamen befruchtet.' },
    ],
    facts: [
      'Ideales Alter für die Vorsorge: 20–30 Jahre',
      'Empfohlen: mindestens 10–20 entnommene Eizellen',
      'Auch ab 40 noch fast 80 % Überlebensrate nach dem Auftauen',
    ],
    faqs: [
      { q: 'Wann ist eine Eizellvorsorge sinnvoll?', a: 'Je früher, desto besser – die Eizellqualität und -anzahl nehmen mit dem Alter ab. Ein Fertilitätscheck gibt Aufschluss über Ihre aktuelle ovarielle Reserve.' },
      { q: 'Wie viele Eizellen sollten eingefroren werden?', a: 'Schwangerschafts- und Geburtenraten hängen von Anzahl und Alter ab. In der Regel sollten mindestens 10–20 Eizellen gewonnen werden.' },
      { q: 'Was kostet die Eizellvorsorge?', a: 'Die Kosten besprechen wir individuell im persönlichen Arztgespräch – gemeinsam mit Ablauf, Erfolgschancen und Risiken.' },
    ],
  },

  genetik: {
    intro:
      'Für Paare, die die Voraussetzungen erfüllen, besteht im Rahmen der Kinderwunschbehandlung die Möglichkeit einer genetischen Untersuchung an Eizelle bzw. Embryo vor dem Transfer (PGT-A, PGT-M, PGT-SR). Ziel ist es, die Chancen auf eine intakte Schwangerschaft und die Geburt eines gesunden Kindes individuell zu erhöhen.',
    forWhom: [
      'Individuelle oder familiäre genetische Vorbelastung mit hohem Risiko für schwere Erbkrankheiten',
      'Wiederholte Fehlgeburten (drei oder mehr aufeinanderfolgend)',
      'Mehrere erfolglose IVF-Behandlungen',
    ],
    sections: [
      { heading: 'Genetische Analysemethoden', paras: [
        'Mit einer Prä-Implantations-Diagnostik (PGD/PGS bzw. neu PGT-A, PGT-M, PGT-SR) können vor dem Transfer genetische Störungen festgestellt oder ausgeschlossen werden.',
        'Mit über 20 Jahren Erfahrung im Bereich der Genetik bei Kinderwunschbehandlungen verfügen unsere Zentren über umfangreiche wissenschaftliche und praktische Expertise – geleitet von hohen medizinischen und ethischen Grundsätzen.',
      ]},
    ],
    steps: [
      { title: 'Beratung & Indikationsprüfung', text: 'Indikation, rechtliche Rahmenbedingungen, Ablauf und Risiken werden im persönlichen Arztgespräch geklärt.' },
      { title: 'IVF/ICSI mit Embryokultur', text: 'Gewinnung und Kultivierung der Embryonen bis zum geeigneten Entwicklungsstadium.' },
      { title: 'Genetische Analyse & Transfer', text: 'Untersuchung an Eizelle/Embryo; anschließend Transfer eines geeigneten Embryos.' },
    ],
    facts: [
      'Über 20 Jahre Erfahrung in der Reproduktionsgenetik',
      'Situationsorientierte Beratung nach hohen ethischen Grundsätzen',
    ],
    faqs: [
      { q: 'Wann kann eine genetische Analyse helfen?', a: 'Bei familiärer/individueller genetischer Vorbelastung, nach wiederholten Fehlgeburten (3+) oder mehreren erfolglosen IVF-Behandlungen. Je nach länderspezifischer Gesetzeslage sind weitere Indikationen möglich.' },
    ],
    note: 'Alle Details zu Indikation, rechtlichen Rahmenbedingungen, Ablauf und Risiken werden im persönlichen Arztgespräch geklärt.',
  },

  'emotionale-begleitung': {
    intro:
      'Der Weg durch eine Kinderwunschbehandlung ist körperlich und seelisch herausfordernd. Über unser Angebot der emotionalen Begleitung unterstützen wir Sie und Ihre Partnerin/Ihren Partner psychologisch – therapiebegleitend und im familiären wie sozialen Leben.',
    forWhom: [
      'Paare und Einzelpersonen vor, während und nach der Behandlung',
      'Fragen rund um Eizell- und Samenspende (Aufklärung des Kindes, Bindung)',
      'Belastende Situationen wie Wartezeiten, Fehlgeburten oder akute Krisen',
    ],
    sections: [
      { heading: 'Unser Beratungsangebot', paras: [
        '„Entspannt durch die Behandlung": 4 Sitzungen à 50 Minuten, ca. 14-tägig – Unterstützung an entscheidenden Behandlungsschritten.',
        'Paarberatung: Kommunikation, Entscheidungsfindung, Umgang mit Umfeld und Familie – gestärkt als Paar durch die intensive Zeit.',
        'Einzelberatung: Raum für alle nicht-medizinischen Anliegen – Trauer, Ängste, Sorgen; lösungsorientierter Ansatz.',
        'Telefon-/Webberatung: nach Terminvereinbarung, besonders bei weiter Anreise oder in akuten Krisen.',
      ]},
    ],
    steps: [
      { title: 'Bedarf klären', text: 'Persönliche Bedarfserhebung – auf Wunsch online oder telefonisch.' },
      { title: 'Passendes Format wählen', text: 'Therapiebegleitend, als Paar- oder Einzelberatung oder per Telefon/Web.' },
      { title: 'Begleitung', text: 'Einfühlsame Unterstützung durch spezialisierte Beratung während der gesamten Behandlung.' },
    ],
    facts: [
      'Psychologische Beratung durch spezialisierte Fachkraft',
      'Auf Wunsch online oder telefonisch',
      'Sensibel gegenüber kulturellen und religiösen Besonderheiten',
    ],
    faqs: [
      { q: 'An wen richtet sich die Begleitung?', a: 'An Paare und Einzelpersonen in allen Phasen der Kinderwunschbehandlung – auch bei Fragen zur Eizell-/Samenspende und in akuten Krisensituationen.' },
    ],
  },
};

// Strukturierter Platzhalter für noch nicht ausgearbeitete Behandlungen
// (z. B. Andrologie, Hysteroskopie – neue Seiten ohne Bestandsinhalt auf ivf.at).
export const fallbackContent = (title) => ({
  intro: `Diese Seite zu „${title}" wird als neue Behandlung aufgebaut. Der Inhalt folgt dem einheitlichen Schema aller Behandlungen und wird gemeinsam mit dem Fachteam finalisiert.`,
  forWhom: ['Individuelle Beratung im Erstgespräch', 'Klare Eignungskriterien', 'Persönliche Begleitung'],
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
