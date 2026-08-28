import type { Lang } from "./i18n";

export type Locale<T> = Record<Lang, T>;

export const routes = {
  home: "/",
  exams: "/sprachpruefungen",
  materials: "/lehrmaterialien",
  training: "/trainingsangebote",
  about: "/ueber-uns",
  contact: "/kontakt",
  centerFinder: "/pruefungszentrum-finden",
  verifyCert: "/zertifikat-pruefen",
  sitemap: "/sitemap",
  campus: "/campus",
  qualifizierung: "/qualifizierung",
  aktuelles: "/aktuelles",
} as const;

export const nav: Locale<{ label: string; to: string; subItems?: string[] }[]> = {
  de: [
    {
      label: "Sprachprüfungen",
      to: routes.exams,
      subItems: [
        "Alle Sprachprüfungen von A1 bis C2",
        "Deutsch für den Beruf",
        "Deutsch für die Schule",
        "Deutsch für Migration und Integration",
        "Deutsch für Medizin und Pflege",
        "Prüfungstermine finden",
        "Übungstests",
        "Über das Zertifikat",
        "Qualitätssicherung",
        "Anerkennung und Gültigkeit",
        "Tipps für die Prüfungsvorbereitung",
        "Prüfungsauswertung und Zertifikat",
        "Rechte und Pflichten Teilnehmende",
      ],
    },
    {
      label: "Lehrmaterialien",
      to: routes.materials,
      subItems: [
        "Übersicht Lehrmaterialien",
        "Lehrwerke und Testhefte",
        "Gratis Download-Material",
        "Handreichungen für Lehrkräfte",
        "Prüfungsvorbereitung",
        "Strukturierter Unterricht mit telc",
        "Digitales Lehren",
        "Shop (telc)",
      ],
    },
    {
      label: "Trainingsangebote",
      to: routes.training,
      subItems: [
        "Fortbildungen für Lehrkräfte",
        "Qualifizierung von Prüfenden",
        "Lizenzierung für Prüfungszentren",
        "Inhouse-Trainings",
        "Webinare",
        "Übersicht Trainingsangebot",
        "Über die telc Training",
        "Training Termine",
        "FAQ Training",
        "Stornierung und AGB",
      ],
    },
    {
      label: "Wir sind telc",
      to: routes.about,
      subItems: [
        "Profil & Organisation",
        "Stellenangebote",
        "Presse",
        "Karriere",
        "Netzwerk",
        "Prüfungszentren",
        "Referenzen",
        "Nachhaltigkeit bei telc",
        "Kontakt",
      ],
    },
    { label: "Kontakt", to: routes.contact },
  ],
  en: [
    {
      label: "Language exams",
      to: routes.exams,
      subItems: [
        "All language exams A1 to C2",
        "German for work",
        "German for schools",
        "German for migration and integration",
        "German for medical and nursing",
        "Find exam dates",
        "Practice tests",
        "About the certificate",
      ],
    },
    {
      label: "Learning materials",
      to: routes.materials,
      subItems: [
        "Learning materials overview",
        "Textbooks and testbooks",
        "Free download materials",
        "Teacher guides",
        "Digital teaching",
      ],
    },
    {
      label: "Training",
      to: routes.training,
      subItems: [
        "Teacher training",
        "Examiner qualification",
        "Exam center licensing",
        "Webinars",
      ],
    },
    {
      label: "We are telc",
      to: routes.about,
      subItems: [
        "Profile & Organization",
        "Job openings",
        "Press",
        "Careers",
        "Network",
      ],
    },
    { label: "Contact", to: routes.contact },
  ],
  es: [
    {
      label: "Exámenes",
      to: routes.exams,
      subItems: ["Todos los exámenes A1-C2", "Alemán profesional", "Exámenes médicos"],
    },
    { label: "Materiales", to: routes.materials, subItems: ["Libros de texto", "Descargas gratuitas"] },
    { label: "Formación", to: routes.training, subItems: ["Cursos para profesores", "Seminarios web"] },
    { label: "Somos telc", to: routes.about, subItems: ["Sobre nosotros", "Empleo", "Prensa"] },
    { label: "Contacto", to: routes.contact },
  ],
  tr: [
    {
      label: "Dil sınavları",
      to: routes.exams,
      subItems: ["Tüm dil sınavları A1-C2", "Mesleki Almanca", "Sınav tarihleri"],
    },
    { label: "Öğrenme materyalleri", to: routes.materials, subItems: ["Ders kitapları", "Ücretsiz indirmeler"] },
    { label: "Eğitimler", to: routes.training, subItems: ["Öğretmen eğitimleri", "Webinarlar"] },
    { label: "Biz telc", to: routes.about, subItems: ["Hakkımızda", "Kariyer", "Basın"] },
    { label: "İletişim", to: routes.contact },
  ],
};

export const metaNav: Locale<string[]> = {
  de: ["Shop", "Campus", "Training", "Community"],
  en: ["Shop", "Campus", "Training", "Community"],
  es: ["Tienda", "Campus", "Formación", "Comunidad"],
  tr: ["Mağaza", "Kampüs", "Eğitim", "Topluluk"],
};

export const ui: Locale<{
  learnMore: string;
  readArticle: string;
  search: string;
  menu: string;
  latest: string;
  newsletter: string;
  subscribe: string;
  address: string;
  links: string;
  admin: string;
}> = {
  de: {
    learnMore: "Mehr erfahren",
    readArticle: "Artikel lesen",
    search: "Suche",
    menu: "Menü",
    latest: "Aktuelles",
    newsletter: "Aktuelles von telc, melden Sie sich für den Newsletter an",
    subscribe: "Jetzt anmelden",
    address: "Adresse",
    links: "Links",
    admin: "Admin",
  },
  en: {
    learnMore: "Learn more",
    readArticle: "Read article",
    search: "Search",
    menu: "Menu",
    latest: "News",
    newsletter: "News from telc: sign up for our newsletter",
    subscribe: "Sign up now",
    address: "Address",
    links: "Links",
    admin: "Admin",
  },
  es: {
    learnMore: "Mehr erfahren",
    readArticle: "Leer artículo",
    search: "Buscar",
    menu: "Menú",
    latest: "Actualidad",
    newsletter: "Novedades de telc: suscríbase al boletín",
    subscribe: "Suscribirse",
    address: "Dirección",
    links: "Enlaces",
    admin: "Admin",
  },
  tr: {
    learnMore: "Mehr erfahren",
    readArticle: "Yazıyı oku",
    search: "Ara",
    menu: "Menü",
    latest: "Güncel",
    newsletter: "telc haberleri: bültenimize kaydolun",
    subscribe: "Kaydol",
    address: "Adres",
    links: "Bağlantılar",
    admin: "Admin",
  },
};

export const home: Locale<{
  heroTitle: string;
  heroText: string;
  pillars: { title: string; text: string; to: string }[];
  valuesTitle: string;
  valuesText: string;
  stats: { prefix: string; value: string; label: string }[];
  networkTitle: string;
  networkText: string;
  serviceCards: { title: string; text: string; to: string }[];
  quote: string;
  quoteBy: string;
}> = {
  de: {
    heroTitle: "Die Zukunft spricht telc",
    heroText:
      "Unser Ziel ist es, Menschen eine bessere Zukunft zu ermöglichen und Ihnen als verlässlicher Partner auf Ihrem Bildungsweg zur Seite zu stehen – offen, fair, flexibel.",
    pillars: [
      {
        title: "Sprachprüfungen",
        text: "Mit einem telc Zertifikat Sprachkenntnisse nachweisen – für Berufs-, Universitäts- oder Visumsanforderungen auf allen Kompetenzstufen des GER*.",
        to: routes.exams,
      },
      {
        title: "Lehrmaterialien",
        text: "Finden Sie passende Lehrwerke und weitere Materialien zum Deutschlernen – für Alltag, Studium, Beruf und Fachsprache.",
        to: routes.materials,
      },
      {
        title: "Trainingsangebote",
        text: "Entdecken Sie unser umfangreiches Programm mit Fortbildungen und Qualifizierungen für Lehrkräfte, Fach- und Führungskräfte und Sprachlernende.",
        to: routes.training,
      },
    ],
    valuesTitle: "Verantwortung, Qualität und Zusammenarbeit",
    valuesText:
      "Wir sind uns unserer Verantwortung gegenüber unseren Kooperationspartnern und der Gesellschaft bewusst und handeln entsprechend. Qualität steht für uns an erster Stelle, sei es bei unseren Prüfungen, Produkten oder Services. Wir arbeiten eng mit unseren Partnern zusammen, um ihnen bestmögliche Lösungen zu bieten und gemeinsam zu wachsen. Diese Werte prägen unser tägliches Handeln und sind der Grundstein für unsere gute und nachhaltige Entwicklung.",
    stats: [
      { prefix: "über", value: "3.000", label: "telc Prüfungszentren weltweit" },
      { prefix: "über", value: "25.000", label: "telc Prüferinnen und Prüfer" },
      { prefix: "über", value: "100", label: "Prüfungsformate" },
      { prefix: "über", value: "1.500", label: "Prüfungsteilnehmende am Tag" },
    ],
    networkTitle: "Global vernetzt",
    networkText:
      "telc pflegt ein weltweit wachsendes Partnernetzwerk. Gemeinsam mit unseren Partnerinstitutionen wirken wir dem Arbeits- und Fachkräftemangel entgegen und leisten einen wichtigen Beitrag zur beruflichen und gesellschaftlichen Integration von Migrantinnen und Migranten.",
    serviceCards: [
      {
        title: "Kontakt",
        text: "Finden Sie schnell und gezielt Hilfe über unser Kontaktformular",
        to: routes.contact,
      },
      {
        title: "Stellenangebote",
        text: "Starten Sie Ihre Karriere bei telc und werden Sie Teil eines international wachsenden Bildungsanbieters mit vielen Vorteilen und einem attraktiven Arbeitsumfeld.",
        to: routes.about,
      },
      {
        title: "Prüfungszentrum finden",
        text: "In über 3.000 Prüfungszentren weltweit können Sie bei telc die Sprachprüfung Ihrer Wahl ablegen. Finden Sie jetzt ein telc Prüfungszentrum in Ihrer Nähe.",
        to: routes.exams,
      },
    ],
    quote:
      "Unsere Mission ist es, Menschen dabei zu helfen, Sprachkompetenzen zu erwerben, zu verbessern und nachzuweisen, damit sie ihre persönlichen und beruflichen Ziele erreichen. Wir sind stolz darauf, ein Unternehmen zu sein, das sich für Diversität und Gerechtigkeit einsetzt und seinen Bildungsauftrag ernst nimmt.",
    quoteBy: "Jürgen Keicher, Geschäftsführer von telc",
  },
  en: {
    heroTitle: "The future speaks Telc-success",
    heroText:
      "We help people build a better future and stand beside them as a dependable partner along their learning path – open, fair and flexible.",
    pillars: [
      {
        title: "Language exams",
        text: "Prove your language skills with a recognised certificate – for work, study or residence, at every CEFR level.",
        to: routes.exams,
      },
      {
        title: "Learning materials",
        text: "Course books, practice tests and digital resources for everyday life, study, work and professional language.",
        to: routes.materials,
      },
      {
        title: "Training",
        text: "Continuing education and qualification programmes for teachers, professionals and learners.",
        to: routes.training,
      },
    ],
    valuesTitle: "Responsibility, quality and partnership",
    valuesText:
      "We take responsibility towards our partners and society. Quality comes first – in our exams, products and services. Together with our partners we build solutions that last.",
    stats: [
      { prefix: "over", value: "3,000", label: "exam centres worldwide" },
      { prefix: "over", value: "25,000", label: "trained examiners" },
      { prefix: "over", value: "100", label: "exam formats" },
      { prefix: "over", value: "1,500", label: "candidates per day" },
    ],
    networkTitle: "Globally connected",
    networkText:
      "Telc-success maintains a growing worldwide partner network. Together we counter the skills shortage and contribute to professional and social integration.",
    serviceCards: [
      { title: "Contact", text: "Get help quickly through our contact form.", to: routes.contact },
      {
        title: "Careers",
        text: "Start your career at Telc-success and join a growing international education provider.",
        to: routes.about,
      },
      {
        title: "Find an exam centre",
        text: "Take your exam at one of more than 3,000 centres worldwide. Find one close to you.",
        to: routes.exams,
      },
    ],
    quote:
      "Our mission is to help people acquire, improve and prove language skills so they can reach their personal and professional goals.",
    quoteBy: "Telc-success management",
  },
  es: {
    heroTitle: "El futuro habla Telc-success",
    heroText:
      "Nuestro objetivo es abrir un futuro mejor a las personas y acompañarlas como socio fiable en su camino formativo: abiertos, justos y flexibles.",
    pillars: [
      {
        title: "Exámenes de idiomas",
        text: "Acredite su nivel con un certificado reconocido: para el trabajo, los estudios o la residencia, en todos los niveles del MCER.",
        to: routes.exams,
      },
      {
        title: "Materiales didácticos",
        text: "Manuales, exámenes de práctica y recursos digitales para la vida diaria, los estudios y el ámbito profesional.",
        to: routes.materials,
      },
      {
        title: "Formación",
        text: "Programas de formación continua y cualificación para docentes, profesionales y estudiantes.",
        to: routes.training,
      },
    ],
    valuesTitle: "Responsabilidad, calidad y colaboración",
    valuesText:
      "Asumimos nuestra responsabilidad con los socios y con la sociedad. La calidad es lo primero: en los exámenes, los productos y los servicios. Junto a nuestros socios creamos soluciones duraderas.",
    stats: [
      { prefix: "más de", value: "3.000", label: "centros de examen" },
      { prefix: "más de", value: "25.000", label: "examinadores" },
      { prefix: "más de", value: "100", label: "formatos de examen" },
      { prefix: "más de", value: "1.500", label: "candidatos al día" },
    ],
    networkTitle: "Conectados globalmente",
    networkText:
      "Telc-success cuenta con una red de socios en crecimiento en todo el mundo. Juntos combatimos la falta de personal cualificado y contribuimos a la integración laboral y social.",
    serviceCards: [
      {
        title: "Contacto",
        text: "Obtenga ayuda rápidamente a través de nuestro formulario.",
        to: routes.contact,
      },
      {
        title: "Empleo",
        text: "Comience su carrera en Telc-success y forme parte de un proveedor educativo internacional.",
        to: routes.about,
      },
      {
        title: "Buscar centro de examen",
        text: "Realice su examen en uno de los más de 3.000 centros del mundo. Encuentre el más cercano.",
        to: routes.exams,
      },
    ],
    quote:
      "Nuestra misión es ayudar a las personas a adquirir, mejorar y demostrar competencias lingüísticas para alcanzar sus metas personales y profesionales.",
    quoteBy: "Dirección de Telc-success",
  },
  tr: {
    heroTitle: "Gelecek Telc-success konuşuyor",
    heroText:
      "Amacımız insanlara daha iyi bir gelecek sunmak ve eğitim yolculuklarında güvenilir bir ortak olmak – açık, adil ve esnek.",
    pillars: [
      {
        title: "Dil sınavları",
        text: "Dil becerinizi tanınmış bir sertifikayla belgeleyin – iş, öğrenim veya oturum için, tüm CEFR seviyelerinde.",
        to: routes.exams,
      },
      {
        title: "Öğrenme materyalleri",
        text: "Günlük yaşam, öğrenim ve meslek dili için ders kitapları, deneme sınavları ve dijital kaynaklar.",
        to: routes.materials,
      },
      {
        title: "Eğitimler",
        text: "Öğretmenler, uzmanlar ve öğrenenler için sürekli eğitim ve yeterlilik programları.",
        to: routes.training,
      },
    ],
    valuesTitle: "Sorumluluk, kalite ve iş birliği",
    valuesText:
      "Ortaklarımıza ve topluma karşı sorumluluk üstleniyoruz. Sınavlarımızda, ürünlerimizde ve hizmetlerimizde kalite her zaman önce gelir. Ortaklarımızla kalıcı çözümler geliştiriyoruz.",
    stats: [
      { prefix: "3.000+", value: "3.000", label: "dünya genelinde sınav merkezi" },
      { prefix: "25.000+", value: "25.000", label: "eğitimli sınav görevlisi" },
      { prefix: "100+", value: "100", label: "sınav formatı" },
      { prefix: "1.500+", value: "1.500", label: "günlük katılımcı" },
    ],
    networkTitle: "Küresel ağ",
    networkText:
      "Telc-success dünya çapında büyüyen bir ortak ağına sahiptir. Birlikte nitelikli iş gücü açığına karşı çalışıyor, mesleki ve toplumsal uyuma katkı sunuyoruz.",
    serviceCards: [
      { title: "İletişim", text: "İletişim formumuz üzerinden hızlıca destek alın.", to: routes.contact },
      {
        title: "Kariyer",
        text: "Telc-success'te kariyerinize başlayın ve büyüyen bir eğitim kurumunun parçası olun.",
        to: routes.about,
      },
      {
        title: "Sınav merkezi bul",
        text: "Dünya genelinde 3.000'den fazla merkezde sınavınıza girin. Size en yakınını bulun.",
        to: routes.exams,
      },
    ],
    quote:
      "Misyonumuz, insanların dil becerilerini kazanmasına, geliştirmesine ve belgelemesine yardımcı olmaktır.",
    quoteBy: "Telc-success yönetimi",
  },
};

export type NewsItem = {
  id: string;
  date: string;
  category: Locale<string>;
  title: Locale<string>;
  teaser: Locale<string>;
};

export const news: NewsItem[] = [
  {
    id: "daf-daz",
    date: "14.08.2026",
    category: { de: "Allgemeines", en: "General", es: "General", tr: "Genel" },
    title: {
      de: "Deutsch für DaF-/DaZ-Lehrkräfte",
      en: "German for DaF/DaZ teachers",
      es: "Alemán para docentes de DaF/DaZ",
      tr: "DaF/DaZ öğretmenleri için Almanca",
    },
    teaser: {
      de: "Ist ein C1-/C2-Sprachnachweis erforderlich? Ein Überblick.",
      en: "Is a C1/C2 proof of language required? An overview.",
      es: "¿Se exige un certificado C1/C2? Un resumen.",
      tr: "C1/C2 dil belgesi gerekli mi? Genel bakış.",
    },
  },
  {
    id: "qualitaetsstandards",
    date: "31.07.2026",
    category: { de: "Aktuelles", en: "News", es: "Actualidad", tr: "Güncel" },
    title: {
      de: "Neue Qualitätsstandards für Prüfungszentren",
      en: "New quality standards for exam centres",
      es: "Nuevos estándares de calidad para centros",
      tr: "Sınav merkezleri için yeni kalite standartları",
    },
    teaser: {
      de: "Wir verschärfen die Prüfaufsicht und führen zusätzliche Kontrollen ein.",
      en: "We are tightening invigilation and introducing additional checks.",
      es: "Reforzamos la supervisión e introducimos controles adicionales.",
      tr: "Gözetimi sıkılaştırıyor ve ek denetimler getiriyoruz.",
    },
  },
  {
    id: "neuer-standort",
    date: "17.06.2026",
    category: { de: "Aktuelles", en: "News", es: "Actualidad", tr: "Güncel" },
    title: {
      de: "Neuer Prüfungsstandort in Zentralasien eröffnet",
      en: "New exam location opens in Central Asia",
      es: "Nuevo centro de examen en Asia Central",
      tr: "Orta Asya'da yeni sınav merkezi açıldı",
    },
    teaser: {
      de: "Ein weiterer Schritt für unser internationales Netzwerk.",
      en: "Another step for our international network.",
      es: "Un paso más para nuestra red internacional.",
      tr: "Uluslararası ağımız için bir adım daha.",
    },
  },
  {
    id: "sommersprints",
    date: "12.06.2026",
    category: { de: "Aktuelles", en: "News", es: "Actualidad", tr: "Güncel" },
    title: {
      de: "Sommersprints 2026 – kompakte Fortbildungen",
      en: "Summer sprints 2026 – compact training",
      es: "Sprints de verano 2026 – formación exprés",
      tr: "2026 Yaz sprintleri – kompakt eğitimler",
    },
    teaser: {
      de: "Auf die Plätze, fertig, los: kurze Formate für Lehrkräfte.",
      en: "Ready, set, go: short formats for teachers.",
      es: "Preparados, listos, ya: formatos breves para docentes.",
      tr: "Hazır ol, başla: öğretmenler için kısa formatlar.",
    },
  },
];

export const footer: Locale<{ links: string[]; addressLines: string[] }> = {
  de: {
    links: [
      "Impressum",
      "Kontakt",
      "AGB und Prüfungsordnungen",
      "Datenschutzerklärung",
      "Barrierefreiheit",
      "Presse",
    ],
    addressLines: ["Telc-success gGmbH", "Bahnhofstraße 7", "61352 Bad Homburg"],
  },
  en: {
    links: ["Imprint", "Contact", "Terms & exam rules", "Privacy policy", "Accessibility", "Press"],
    addressLines: ["Telc-success gGmbH", "Bahnhofstrasse 7", "61352 Bad Homburg, Germany"],
  },
  es: {
    links: ["Aviso legal", "Contacto", "Condiciones y normas", "Privacidad", "Accesibilidad", "Prensa"],
    addressLines: ["Telc-success gGmbH", "Bahnhofstrasse 7", "61352 Bad Homburg, Alemania"],
  },
  tr: {
    links: ["Künye", "İletişim", "Şartlar ve sınav kuralları", "Gizlilik", "Erişilebilirlik", "Basın"],
    addressLines: ["Telc-success gGmbH", "Bahnhofstrasse 7", "61352 Bad Homburg, Almanya"],
  },
};

export const candidateSupport: Locale<{
  title: string;
  subtitle: string;
  intro: string;
  services: { title: string; subtitle: string; desc: string; icon: string }[];
  contactCta: string;
}> = {
  de: {
    title: "Gezielte Unterstützung für die telc Deutsch B2 Prüfung",
    subtitle: "Umfassender Service & Begleitung auf Ihrem Weg zum B2 Zertifikat",
    intro:
      "Wir haben uns darauf spezialisiert, Kandidatinnen und Kandidaten umfassend beim Erwerb und Nachweis ihrer Deutschkenntnisse zu unterstützen.",
    services: [
      {
        title: "Prüfungsvorbereitung",
        subtitle: "Exam Preparation",
        desc: "Maßgeschneiderte Lernmaterialien, Modelltests und Live-Vorbereitungssammlungen für die telc Deutsch B2 Prüfung – damit Sie mit voller Zuversicht in die Prüfung gehen.",
        icon: "BookOpen",
      },
      {
        title: "Anmeldeunterstützung",
        subtitle: "Registration Assistance",
        desc: "Wir begleiten Sie durch den gesamten Anmeldeprozess für die telc Prüfung – von der Auswahl passender Prüfungstermine bis zur Vorbereitung aller Unterlagen.",
        icon: "FileCheck",
      },
      {
        title: "Prüfungsstrategien & Begleitung",
        subtitle: "Exam Guidance",
        desc: "Gezieltes Training für alle 4 Prüfungsteile: Lesen, Hören, Schreiben und Sprechen. Inklusive bewährter Prüfungstechniken zum sicheren Erreichen des B2-Niveaus.",
        icon: "GraduationCap",
      },
      {
        title: "Ergebnisse & Zertifikatsservice",
        subtitle: "Results & Certificate Support",
        desc: "Wir unterstützen Sie bei der Auswertung Ihrer Prüfungsergebnisse und beraten Sie zu den nächsten Schritten nach dem erfolgreichen Erhalt Ihres telc B2 Zertifikats.",
        icon: "Award",
      },
    ],
    contactCta: "Kontaktieren Sie uns für weitere Informationen",
  },
  en: {
    title: "Comprehensive Candidate Support for telc Deutsch B2",
    subtitle: "Reliable preparation, guidance and support at every step",
    intro:
      "We specialize in providing comprehensive support for candidates pursuing German language proficiency and certification.",
    services: [
      {
        title: "Exam Preparation",
        subtitle: "Preparation",
        desc: "We provide tailored study materials, practice tests, and live preparation sessions to help candidates prepare effectively for the telc Deutsch B2 exam.",
        icon: "BookOpen",
      },
      {
        title: "Registration Assistance",
        subtitle: "Registration",
        desc: "We guide candidates through the telc examination registration process, including selecting suitable exam dates and preparing the required documentation.",
        icon: "FileCheck",
      },
      {
        title: "Exam Guidance",
        subtitle: "Strategies & Modules",
        desc: "We provide support and guidance on the Reading, Listening, Writing, and Speaking sections, including exam techniques and strategies for B2 success.",
        icon: "GraduationCap",
      },
      {
        title: "Results & Certificate Support",
        subtitle: "Post-Exam Guidance",
        desc: "We assist candidates in understanding their examination results and provide guidance on the next steps after successfully obtaining their telc Deutsch B2 certificate.",
        icon: "Award",
      },
    ],
    contactCta: "Contact us for more details",
  },
  es: {
    title: "Asistencia integral para el examen telc Deutsch B2",
    subtitle: "Preparación personalizada, orientación e inscripción",
    intro:
      "Nos especializamos en brindar un apoyo integral a los candidatos en su camino hacia la certificación de alemán B2.",
    services: [
      {
        title: "Preparación del Examen",
        subtitle: "Exam Preparation",
        desc: "Materiales de estudio a medida, exámenes de práctica y sesiones en vivo para el examen telc Deutsch B2.",
        icon: "BookOpen",
      },
      {
        title: "Asistencia en la Inscripción",
        subtitle: "Registration Assistance",
        desc: "Guía paso a paso en el proceso de inscripción a los exámenes telc y selección de fechas oportunas.",
        icon: "FileCheck",
      },
      {
        title: "Estrategias y Módulos",
        subtitle: "Exam Guidance",
        desc: "Orientación en las cuatro secciones: Lectura, Auditiva, Escritura y Expresión Oral.",
        icon: "GraduationCap",
      },
      {
        title: "Resultados y Certificación",
        subtitle: "Results & Certificate Support",
        desc: "Asesoramiento sobre los resultados y los siguientes pasos tras obtener su certificado telc B2.",
        icon: "Award",
      },
    ],
    contactCta: "Contáctenos para más información",
  },
  tr: {
    title: "telc Deutsch B2 Sınavına Yönelik Destek ve Danışmanlık",
    subtitle: "Kayıt, hazırlık ve sertifika süreçlerinde yanınızdayız",
    intro: "Almanca dil yeterliliği ve sertifikasyon sürecindeki adaylara kapsamlı destek sağlıyoruz.",
    services: [
      {
        title: "Sınav Hazırlığı",
        subtitle: "Exam Preparation",
        desc: "telc Deutsch B2 sınavına etkili bir şekilde hazırlanmanız için özel çalışma materyalleri ve canlı dersler.",
        icon: "BookOpen",
      },
      {
        title: "Kayıt Desteği",
        subtitle: "Registration Assistance",
        desc: "Uygun sınav tarihlerinin seçilmesi ve gerekli belgelerin hazırlanması dahil telc kayıt sürecinde rehberlik.",
        icon: "FileCheck",
      },
      {
        title: "Sınav Stratejileri",
        subtitle: "Exam Guidance",
        desc: "Okuma, Dinleme, Yazma ve Konuşma bölümlerine yönelik taktikler ve modül rehberliği.",
        icon: "GraduationCap",
      },
      {
        title: "Sonuç & Sertifika Desteği",
        subtitle: "Results & Certificate Support",
        desc: "telc B2 sertifikanızı aldıktan sonraki adımlarda ve sonuç değerlendirmesinde rehberlik.",
        icon: "Award",
      },
    ],
    contactCta: "Detaylı bilgi için bizimle iletişime geçin",
  },
};

