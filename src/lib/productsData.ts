export interface ProductItem {
  id: string;
  title: string;
  subtitle: string;
  category: "Lehrbuch" | "Testheft" | "Übungsbuch" | "Download" | "Didaktik";
  level: "A1" | "A2" | "B1" | "B2" | "C1" | "C2" | "A1-B1" | "B1-B2" | "B2-C1" | "Alle Stufen";
  price: string;
  badge: string;
  isbn: string;
  pages: number;
  publisher: string;
  desc: string;
  fullDescription: string;
  features: string[];
  targetAudience: string;
}

const levels: Array<ProductItem["level"]> = ["A1", "A2", "B1", "B2", "C1", "C2", "A1-B1", "B1-B2", "B2-C1", "Alle Stufen"];
const categories: Array<ProductItem["category"]> = ["Lehrbuch", "Testheft", "Übungsbuch", "Download", "Didaktik"];

// Generate 126 realistic, rich telc educational products
export const productsData: ProductItem[] = [
  // Highlighted Core Products
  {
    id: "telc-p-1",
    title: "Einfach zum Studium! Deutsch C1 Hochschule",
    subtitle: "Lehr- und Arbeitsbuch mit integrierten Audios",
    category: "Lehrbuch",
    level: "C1",
    price: "24,90 €",
    badge: "Bestseller",
    isbn: "978-3-946447-12-0",
    pages: 248,
    publisher: "telc gGmbH Edition",
    desc: "Kompressives Lehrwerk zur gezielten Vorbereitung auf telc Deutsch C1 Hochschule.",
    fullDescription: "Einfach zum Studium! Deutsch C1 Hochschule bereitet Studienbewerberinnen und -bewerber intensiv auf die sprachlichen Anforderungen an deutschen Hochschulen vor. Das Buch deckt alle prüfungsrelevanten Themen ab, vermittelt akademische Wortfelder und beinhaltet authentische Hör- und Lesetexte.",
    features: [
      "Integrierte MP3-Audios und Transkripte",
      "Gezieltes Training des wissenschaftlichen Schreibens",
      "Strategien für die mündliche C1 Prüfung",
      "Lösungsschlüssel für alle Übungen enthalten"
    ],
    targetAudience: "Studienbewerber, Studierende, C1-Lernende und Lehrkräfte an Universitäten."
  },
  {
    id: "telc-p-2",
    title: "telc Deutsch B1/B2 Pflege - Original Übungstest 1",
    subtitle: "Modelltest mit Audios und Bewertungskriterien",
    category: "Testheft",
    level: "B1-B2",
    price: "12,50 €",
    badge: "Original Modelltest",
    isbn: "978-3-946447-45-8",
    pages: 96,
    publisher: "telc gGmbH Edition",
    desc: "Originaler telc Modelltest für Pflegekräfte mit Lösungsschlüssel und Hörtexten.",
    fullDescription: "Dieser originale telc Übungstest dient der optimalen Vorbereitung auf die Prüfung telc Deutsch B1-B2 Pflege. Er enthält ein komplettes Testset mit Hörverstehen, Leseverstehen, schriftlichem Ausdruck und mündlicher Prüfung unter realistischen Bedingungen.",
    features: [
      "Originalgetreues Testformat der telc gGmbH",
      "Authentische Pflege-Fallbeispiele & Anamnesebögen",
      "Bewertungskriterien für die mündliche Prüfung",
      "Inklusive Audiodownload für den Hörteil"
    ],
    targetAudience: "Pflegekräfte, medizinische Fachkräfte, Fachsprachenzentren."
  },
  {
    id: "telc-p-3",
    title: "Mit Erfolg zu telc Deutsch B2",
    subtitle: "Gezieltes Prüfungstraining Wortschatz & Grammatik",
    category: "Übungsbuch",
    level: "B2",
    price: "19,80 €",
    badge: "Neuerscheinung",
    isbn: "978-3-946447-88-5",
    pages: 180,
    publisher: "telc gGmbH Edition",
    desc: "Intensives Training aller Prüfungsteile: Lesen, Hören, Schreiben und Sprechen.",
    fullDescription: "Mit Erfolg zu telc Deutsch B2 bietet ein strukturiertes Schritt-für-Schritt-Training für die telc B2 Prüfung. Es vermittelt prüfungsrelevante Grammatikstrukturen, typische Redemittel für die mündliche Prüfung sowie Tipps zur Vermeidung häufiger Fehler.",
    features: [
      "Umfassende Wortschatzlisten nach B2 Themen",
      "Schreibschablonen für Briefe und Beschwerden",
      "Prüfungstipps von erfahrenen telc Prüfern",
      "Online-Übungsmaterialien inklusive"
    ],
    targetAudience: "B2-Kandidaten, Berufstätige, Kursteilnehmer."
  },
  {
    id: "telc-p-4",
    title: "Handreichung für Lehrkräfte: Deutsch Integration",
    subtitle: "Didaktischer Leitfaden für Integrationskurse",
    category: "Download",
    level: "A1-B1",
    price: "Kostenlos",
    badge: "Gratis PDF",
    isbn: "978-3-946447-00-7",
    pages: 64,
    publisher: "telc gGmbH Edition",
    desc: "Didaktische Hinweise und Methodentipps für den Unterricht in Integrationskursen.",
    fullDescription: "Dieser kostenlose didaktische Leitfaden richtet sich an Lehrkräfte in Integrationskursen. Er bietet praxisnahe Methoden zur Vorbereitung auf den Deutsch-Test für Zuwanderer (DTZ) A2-B1 sowie praktische Kopiervorlagen.",
    features: [
      "Sofort herunterladbare PDF-Datei",
      "Methodische Tipps zur Binnendifferenzierung",
      "Kopiervorlagen für Partner- und Gruppenarbeiten",
      "Leitfaden zur Bewertung des schriftlichen Ausdrucks"
    ],
    targetAudience: "DaF/DaZ-Lehrkräfte, Sprachschulen, Träger von Integrationskursen."
  },
  // Dynamically generate the remaining 122 products to complete all 126 items
  ...Array.from({ length: 122 }).map((_, idx) => {
    const pId = idx + 5;
    const level = levels[idx % levels.length];
    const category = categories[idx % categories.length];
    const priceVal = category === "Download" ? "Kostenlos" : `${(10 + (idx % 18) * 1.5).toFixed(2).replace(".", ",")} €`;
    const isBestseller = idx % 5 === 0;

    const titles = [
      `telc Deutsch ${level} Praxisbuch Band ${pId}`,
      `Einfach Weiter! Deutsch ${level} Kompakt`,
      `telc ${level} Prüfungstraining & Modelltest ${((idx % 3) + 1)}`,
      `Fachsprache Deutsch ${level} für Medizin & Pflege`,
      `Grammatik & Wortschatz Intensiv ${level}`,
      `Deutscher Sprachtest ${level} Trainingsprogramm`,
      `telc Deutsch ${level} Beruf & Kommunikation`,
      `Handbuch Prüferqualifizierung ${level}`,
    ];

    const titleStr = titles[idx % titles.length] + ` (Ausgabe ${2024 + (idx % 3)})`;

    return {
      id: `telc-p-${pId}`,
      title: titleStr,
      subtitle: `Offizielle telc Studienausgabe für Sprachniveau ${level}`,
      category,
      level,
      price: priceVal,
      badge: category === "Download" ? "Gratis PDF" : isBestseller ? "Empfehlung" : `Niveau ${level}`,
      isbn: `978-3-946447-${(100 + idx).toString().padStart(3, "0")}`,
      pages: 80 + (idx % 15) * 12,
      publisher: "telc gGmbH Edition",
      desc: `Offizielles telc Unterrichts- und Vorbereitungsmaterial für das Sprachniveau ${level}. Ideal für Prüflinge und Lehrkräfte.`,
      fullDescription: `Dieses Lehr- und Übungswerk (${titleStr}) wurde speziell entwickelt, um Lernende zielgerichtet auf das Sprachniveau ${level} vorzubereiten. Es kombiniert praxisnahe Übungen, authentische Sprachsituationen und originalgetreue Prüfungsaufgaben.`,
      features: [
        `Ausführliche Vorbereitung auf Niveau ${level}`,
        "Originale telc Aufgabenstruktur & Zeitangaben",
        "Audios und digitale Ergänzungsmaterialien",
        "Vollständiger Lösungs- und Bewertungsschlüssel"
      ],
      targetAudience: `Lernende des Niveaus ${level}, Lehrkräfte, Prüfungszentren und Bildungseinrichtungen.`
    };
  })
];
