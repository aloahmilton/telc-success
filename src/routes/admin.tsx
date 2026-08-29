import { createFileRoute, Link } from "@tanstack/react-router";
import {
  AlertCircle,
  Award,
  BarChart3,
  BookOpen,
  Building2,
  Check,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock,
  Download,
  Edit,
  ExternalLink,
  Eye,
  FileCheck,
  FileText,
  Filter,
  Globe,
  GraduationCap,
  HelpCircle,
  Key,
  Layers,
  LayoutDashboard,
  Lock,
  LogOut,
  Mail,
  Menu,
  MessageSquare,
  Plus,
  RefreshCw,
  Search,
  Send,
  Settings,
  ShieldAlert,
  ShieldCheck,
  Trash2,
  UserCheck,
  Users,
  X,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";

import { adminLoginAction } from "@/lib/actions";
import { fetchAllAdminData, dbCreateExam, dbDeleteExam, dbCreateCertificate } from "@/lib/adminDataService";
import { LANGS, useLang, type Lang } from "@/lib/i18n";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Admin Portal | telc Sprachprüfungen" },
      {
        name: "description",
        content: "Interne Verwaltungsplattform für telc Sprachprüfungen, Lehrmaterialien, Trainings und Prüfungszentren.",
      },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: AdminDashboard,
});

// RoundFlag SVG Helper matching Frontend Header UI
function RoundFlag({ code, className = "h-4.5 w-4.5" }: { code: string; className?: string }) {
  if (code === "de") {
    return (
      <svg className={`rounded-full shadow-sm shrink-0 object-cover ${className}`} viewBox="0 0 512 512">
        <rect y="0" width="512" height="170.66" fill="#000000" />
        <rect y="170.66" width="512" height="170.66" fill="#DD0000" />
        <rect y="341.33" width="512" height="170.66" fill="#FFCE00" />
      </svg>
    );
  }
  if (code === "en") {
    return (
      <svg className={`rounded-full shadow-sm shrink-0 object-cover ${className}`} viewBox="0 0 512 512">
        <rect width="512" height="512" fill="#012169" />
        <path d="M0 0l512 512M512 0L0 512" stroke="#fff" strokeWidth="60" />
        <path d="M0 0l512 512M512 0L0 512" stroke="#C8102E" strokeWidth="40" />
        <path d="M256 0v512M0 256h512" stroke="#fff" strokeWidth="100" />
        <path d="M256 0v512M0 256h512" stroke="#C8102E" strokeWidth="60" />
      </svg>
    );
  }
  if (code === "es") {
    return (
      <svg className={`rounded-full shadow-sm shrink-0 object-cover ${className}`} viewBox="0 0 512 512">
        <rect width="512" height="128" fill="#AA151B" />
        <rect y="128" width="512" height="256" fill="#F1BF00" />
        <rect y="384" width="512" height="128" fill="#AA151B" />
      </svg>
    );
  }
  if (code === "tr") {
    return (
      <svg className={`rounded-full shadow-sm shrink-0 object-cover ${className}`} viewBox="0 0 512 512">
        <rect width="512" height="512" fill="#E30A17" />
        <circle cx="200" cy="256" r="120" fill="#ffffff" />
        <circle cx="230" cy="256" r="96" fill="#E30A17" />
        <polygon fill="#ffffff" points="320,256 345,264 330,240 340,272 320,250" />
      </svg>
    );
  }
  return null;
}

type TabGroup =
  | "overview"
  | "exams"
  | "materials"
  | "training"
  | "news"
  | "centers"
  | "partners"
  | "certificates"
  | "inquiries"
  | "settings";

// Translation Dictionary for Admin Dashboard
const adminDict: Record<
  Lang,
  {
    welcomeTitle: string;
    welcomeSub: string;
    loginTitle: string;
    loginSub: string;
    demoCredentialsNote: string;
    fillDemoBtn: string;
    searchPlaceholder: string;
    newExamBtn: string;
    issueCertBtn: string;
    newCenterBtn: string;
    newMaterialBtn: string;
    newTrainingBtn: string;
    newNewsBtn: string;
    newPartnerBtn: string;
    groupOverview: string;
    groupContent: string;
    groupNetwork: string;
    groupSupport: string;
    groupSystem: string;
    tabOverview: string;
    tabExams: string;
    tabMaterials: string;
    tabTraining: string;
    tabNews: string;
    tabCenters: string;
    tabPartners: string;
    tabCertificates: string;
    tabInquiries: string;
    tabSettings: string;
    statsCenters: string;
    statsExams: string;
    statsCerts: string;
    statsInquiries: string;
    actions: string;
    status: string;
    save: string;
    cancel: string;
    delete: string;
    edit: string;
    view: string;
    logout: string;
    backToWebsite: string;
  }
> = {
  de: {
    welcomeTitle: "Willkommen im telc Portal",
    welcomeSub: "Zentrale Verwaltung für Prüfungen, Zertifikate, Testzentren und Lehrwerke.",
    loginTitle: "telc.admin Login",
    loginSub: "Interne Verwaltung für Prüfungen, Zertifikate & Zentren",
    demoCredentialsNote: "Zugangsdaten für Administrator-Zugriff",
    fillDemoBtn: "Zugangsdaten ausfüllen",
    searchPlaceholder: "Suchen in telc Portal...",
    newExamBtn: "Neue Prüfung erstellen",
    issueCertBtn: "Zertifikat ausstellen",
    newCenterBtn: "Neues Zentrum registrieren",
    newMaterialBtn: "Neues Lehrwerk anlegen",
    newTrainingBtn: "Neues Seminar anlegen",
    newNewsBtn: "Neue News erstellen",
    newPartnerBtn: "Neues Siegel / Partner",
    groupOverview: "ÜBERSICHT",
    groupContent: "INHALTSVERWALTUNG",
    groupNetwork: "NETZWERK & ZERTIFIKATE",
    groupSupport: "ANFRAGEN & SUPPORT",
    groupSystem: "SYSTEM",
    tabOverview: "Dashboard Overview",
    tabExams: "Sprachprüfungen (A1-C2)",
    tabMaterials: "Lehrmaterialien",
    tabTraining: "Trainingsangebote",
    tabNews: "News & Aktuelles",
    tabCenters: "Prüfungszentren",
    tabPartners: "Partner & Siegel",
    tabCertificates: "Zertifikats-Verwaltung",
    tabInquiries: "Support & Anfragen",
    tabSettings: "Einstellungen & Rechte",
    statsCenters: "Prüfungszentren",
    statsExams: "Sprachprüfungen",
    statsCerts: "Zertifikate",
    statsInquiries: "Offene Anfragen",
    actions: "Aktionen",
    status: "Status",
    save: "Speichern",
    cancel: "Abbrechen",
    delete: "Löschen",
    edit: "Bearbeiten",
    view: "Anzeigen",
    logout: "Abmelden",
    backToWebsite: "Zur Website",
  },
  en: {
    welcomeTitle: "Welcome to the telc Portal",
    welcomeSub: "Central management for exams, certificates, test centers, and course materials.",
    loginTitle: "telc.admin Login",
    loginSub: "Internal management portal for exams, certificates & centers",
    demoCredentialsNote: "Administrator Access Credentials",
    fillDemoBtn: "Auto-fill Credentials",
    searchPlaceholder: "Search telc Portal...",
    newExamBtn: "Create New Exam",
    issueCertBtn: "Issue Certificate",
    newCenterBtn: "Register Test Center",
    newMaterialBtn: "Add Course Material",
    newTrainingBtn: "Add Seminar",
    newNewsBtn: "Create Announcement",
    newPartnerBtn: "Add Partner / Seal",
    groupOverview: "OVERVIEW",
    groupContent: "CONTENT MANAGEMENT",
    groupNetwork: "NETWORK & CERTIFICATES",
    groupSupport: "INQUIRIES & SUPPORT",
    groupSystem: "SYSTEM",
    tabOverview: "Dashboard Overview",
    tabExams: "Language Exams (A1-C2)",
    tabMaterials: "Course Materials",
    tabTraining: "Training Offers",
    tabNews: "News & Updates",
    tabCenters: "Test Centers",
    tabPartners: "Partners & Seals",
    tabCertificates: "Certificate Records",
    tabInquiries: "Support & Inquiries",
    tabSettings: "Settings & Access",
    statsCenters: "Test Centers",
    statsExams: "Language Exams",
    statsCerts: "Certificates",
    statsInquiries: "Open Inquiries",
    actions: "Actions",
    status: "Status",
    save: "Save Changes",
    cancel: "Cancel",
    delete: "Delete",
    edit: "Edit",
    view: "View",
    logout: "Logout",
    backToWebsite: "Back to Website",
  },
  es: {
    welcomeTitle: "Bienvenido al Portal telc",
    welcomeSub: "Gestión central de exámenes, certificados, centros e itinerarios formativos.",
    loginTitle: "Acceso telc.admin",
    loginSub: "Plataforma interna de administración para exámenes y certificados",
    demoCredentialsNote: "Credenciales de Acceso Administrador",
    fillDemoBtn: "Rellenar Datos Demo",
    searchPlaceholder: "Buscar en portal telc...",
    newExamBtn: "Crear Nuevo Examen",
    issueCertBtn: "Emitir Certificado",
    newCenterBtn: "Registrar Centro",
    newMaterialBtn: "Añadir Material",
    newTrainingBtn: "Añadir Formación",
    newNewsBtn: "Crear Noticia",
    newPartnerBtn: "Añadir Sello / socio",
    groupOverview: "VISIÓN GENERAL",
    groupContent: "GESTIÓN DE CONTENIDOS",
    groupNetwork: "RED Y CERTIFICADOS",
    groupSupport: "CONSULTAS Y SOPORTE",
    groupSystem: "SISTEMA",
    tabOverview: "Panel Principal",
    tabExams: "Exámenes de Idiomas (A1-C2)",
    tabMaterials: "Materiales Didácticos",
    tabTraining: "Oferta Formativa",
    tabNews: "Noticias y Novedades",
    tabCenters: "Centros de Examen",
    tabPartners: "Socios y Sellos",
    tabCertificates: "Gestión de Certificados",
    tabInquiries: "Soporte y Consultas",
    tabSettings: "Configuración y Permisos",
    statsCenters: "Centros de Examen",
    statsExams: "Exámenes de Idiomas",
    statsCerts: "Certificados",
    statsInquiries: "Consultas Abiertas",
    actions: "Acciones",
    status: "Estado",
    save: "Guardar",
    cancel: "Cancelar",
    delete: "Eliminar",
    edit: "Editar",
    view: "Ver",
    logout: "Cerrar Sesión",
    backToWebsite: "Volver a la web",
  },
  tr: {
    welcomeTitle: "telc Portala Hoş Geldiniz",
    welcomeSub: "Sınavlar, sertifikalar, test merkezleri ve materyaller için merkezi yönetim.",
    loginTitle: "telc.admin Girişi",
    loginSub: "Sınavlar, sertifikalar ve merkezler için dahili yönetim portalı",
    demoCredentialsNote: "Yönetici Erişim Bilgileri",
    fillDemoBtn: "Bilgileri Otomatik Doldur",
    searchPlaceholder: "telc Portalda Ara...",
    newExamBtn: "Yeni Sınav Oluştur",
    issueCertBtn: "Sertifika Düzenle",
    newCenterBtn: "Yeni Merkez Kaydet",
    newMaterialBtn: "Materyal Ekle",
    newTrainingBtn: "Eğitim Semineri Ekle",
    newNewsBtn: "Duyuru Oluştur",
    newPartnerBtn: "Partner / Mühür Ekle",
    groupOverview: "GENEL BAKIŞ",
    groupContent: "İÇERİK YÖNETİMİ",
    groupNetwork: "AĞ VE SERTİFİKALAR",
    groupSupport: "DESTEK VE TALEPLER",
    groupSystem: "SİSTEM",
    tabOverview: "Gösterge Paneli",
    tabExams: "Dil Sınavları (A1-C2)",
    tabMaterials: "Ders Materyalleri",
    tabTraining: "Eğitim Seminerleri",
    tabNews: "Haberler ve Duyurular",
    tabCenters: "Sınav Merkezleri",
    tabPartners: "Partnerler ve Mühürler",
    tabCertificates: "Sertifika Kayıtları",
    tabInquiries: "Destek ve Talepler",
    tabSettings: "Ayarlar ve Yetkiler",
    statsCenters: "Sınav Merkezleri",
    statsExams: "Dil Sınavları",
    statsCerts: "Sertifikalar",
    statsInquiries: "Açık Talepler",
    actions: "İşlemler",
    status: "Durum",
    save: "Kaydet",
    cancel: "İptal",
    delete: "Sil",
    edit: "Düzenle",
    view: "Görüntüle",
    logout: "Çıkış Yap",
    backToWebsite: "Web Sitesine Dön",
  },
};

// Data Interfaces
interface ExamItem {
  id: string;
  title: string;
  level: string;
  target: string;
  candidates: string;
  status: "Aktiv" | "In Überarbeitung" | "Archiviert";
}

interface MaterialItem {
  id: string;
  title: string;
  category: "Lehrbuch" | "Testheft" | "Übungsbuch" | "Download" | "Didaktik";
  level: string;
  price: string;
  isbn: string;
  status: "Aktiv" | "Ausverkauft";
}

interface TrainingItem {
  id: string;
  title: string;
  target: string;
  format: "Präsenz" | "Online Webinar" | "Hybrid";
  date: string;
  seats: string;
  status: "Buchbar" | "Ausgebucht";
}

interface NewsItem {
  id: string;
  title: string;
  category: string;
  date: string;
  status: "Veröffentlicht" | "Entwurf";
}

interface CenterItem {
  id: string;
  name: string;
  city: string;
  address: string;
  phone: string;
  email: string;
  levels: string[];
  isCertified: boolean;
  status: "Aktiv" | "Wartung";
}

interface PartnerItem {
  id: string;
  name: string;
  type: "Akkreditierung" | "Kooperation" | "Siegel";
  issuer: string;
  verified: boolean;
}

interface CertificateItem {
  id: string;
  code: string;
  candidateName: string;
  examTitle: string;
  level: string;
  issueDate: string;
  overallScore: string;
  status: "Gültig" | "Ungültig" | "In Prüfung";
}

interface InquiryItem {
  id: string;
  sender: string;
  email: string;
  phone?: string;
  type: "Kontaktanfrage" | "Kandidaten-Support" | "Zertifikatsprüfung" | "Prüfungsanmeldung";
  subject: string;
  message: string;
  date: string;
  status: "Offen" | "In Bearbeitung" | "Erledigt";
}

function AdminDashboard() {
  const { lang, setLang } = useLang();
  const t = adminDict[lang] || adminDict.de;
  const activeLang = LANGS.find((l) => l.code === lang) || LANGS[0];

  // Header Language Switcher Dropdown State
  const [langOpen, setLangOpen] = useState(false);
  const langDropdownRef = useRef<HTMLDivElement>(null);

  // Close language dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (langDropdownRef.current && !langDropdownRef.current.contains(event.target as Node)) {
        setLangOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Authentication State with Seeded Credentials
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [loginEmail, setLoginEmail] = useState("telcsuccess@gmail.com");
  const [loginPassword, setLoginPassword] = useState("princessmabus1");
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    name: "Super Administrator",
    role: "Superadmin",
    email: "telcsuccess@gmail.com",
  });

  // Navigation & View State
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<TabGroup>("overview");
  const [searchQuery, setSearchQuery] = useState("");
  const [levelFilter, setLevelFilter] = useState("ALL");

  // Seed Default Data Sets
  const defaultExams: ExamItem[] = [
    { id: "TELC-A1", title: "telc Deutsch A1 (Start Deutsch 1)", level: "A1", target: "Allgemein", candidates: "12.450", status: "Aktiv" },
    { id: "TELC-A2", title: "telc Deutsch A2 (Start Deutsch 2)", level: "A2", target: "Allgemein", candidates: "18.300", status: "Aktiv" },
    { id: "TELC-B1", title: "telc Deutsch B1 (Zertifikat Deutsch)", level: "B1", target: "Allgemein / BAMF", candidates: "48.200", status: "Aktiv" },
    { id: "TELC-B2", title: "telc Deutsch B2", level: "B2", target: "Beruf & Studium", candidates: "32.100", status: "Aktiv" },
    { id: "TELC-C1-MED", title: "telc Deutsch C1 Medizin", level: "C1", target: "Ärztinnen & Ärzte", candidates: "8.900", status: "Aktiv" },
    { id: "TELC-C2", title: "telc Deutsch C2", level: "C2", target: "Hochschule & Forschung", candidates: "3.400", status: "In Überarbeitung" },
  ];

  const defaultMaterials: MaterialItem[] = [
    { id: "MAT-01", title: "Einfach zum Studium! Deutsch C1 Hochschule", category: "Lehrbuch", level: "C1", price: "24,90 €", isbn: "978-3-946414-22-2", status: "Aktiv" },
    { id: "MAT-02", title: "telc Deutsch B2 Modelltest 1 (Übungstest)", category: "Testheft", level: "B2", price: "12,50 €", isbn: "978-3-946414-05-5", status: "Aktiv" },
    { id: "MAT-03", title: "Digitales Audioset & Transkripte B1", category: "Download", level: "B1", price: "Kostenlos", isbn: "N/A - Digital", status: "Aktiv" },
    { id: "MAT-04", title: "Fachsprache Pflege B1-B2 Zusatzheft", category: "Übungsbuch", level: "B2", price: "18,90 €", isbn: "978-3-946414-88-1", status: "Aktiv" },
  ];

  const defaultTrainings: TrainingItem[] = [
    { id: "TRN-101", title: "telc Prüferqualifizierung Deutsch B1-B2", target: "Lehrkräfte & Prüfer", format: "Online Webinar", date: "2026-09-12", seats: "14 / 20 Frei", status: "Buchbar" },
    { id: "TRN-102", title: "Methodik & Didaktik in BAMF Integrationskursen", target: "DaF/DaZ Dozenten", format: "Präsenz", date: "2026-09-25", seats: "0 / 25 (Voll)", status: "Ausgebucht" },
    { id: "TRN-103", title: "Bewertung des schriftlichen Ausdrucks C1", target: "Lizenzierte Prüfer", format: "Hybrid", date: "2026-10-05", seats: "8 / 15 Frei", status: "Buchbar" },
  ];

  const defaultNews: NewsItem[] = [
    { id: "NEWS-1", title: "Neue telc Prüfungsordnung 2026 veröffentlicht", category: "Prüfungen", date: "2026-08-01", status: "Veröffentlicht" },
    { id: "NEWS-2", title: "Erweiterung des Prüfungszentren-Netzwerks in Süddeutschland", category: "Netzwerk", date: "2026-07-20", status: "Veröffentlicht" },
    { id: "NEWS-3", title: "Digitales Übungsmaterial für B2 Berufsdeutsch verfügbar", category: "Lehrmaterialien", date: "2026-07-15", status: "Entwurf" },
  ];

  const defaultCenters: CenterItem[] = [
    { id: "CTR-001", name: "telc Hauptprüfungszentrum Frankfurt", city: "Frankfurt am Main", address: "Bleichstraße 1", phone: "+49 69 956244-0", email: "frankfurt@telc.net", levels: ["A1", "A2", "B1", "B2", "C1", "C2"], isCertified: true, status: "Aktiv" },
    { id: "CTR-002", name: "Sprachakademie Berlin Mitte", city: "Berlin", address: "Alexanderplatz 7", phone: "+49 30 240011-0", email: "berlin@telc.net", levels: ["A1", "B1", "B2", "C1"], isCertified: true, status: "Aktiv" },
    { id: "CTR-003", name: "Zertifiziertes Prüfungszentrum München", city: "München", address: "Sonnenstraße 14", phone: "+49 89 551230-0", email: "muenchen@telc.net", levels: ["A2", "B1", "B2"], isCertified: true, status: "Aktiv" },
    { id: "CTR-004", name: "Hanseatisches Kolleg Hamburg", city: "Hamburg", address: "Mönckebergstraße 20", phone: "+49 40 334410-0", email: "hamburg@telc.net", levels: ["B1", "B2", "C1"], isCertified: false, status: "Aktiv" },
    { id: "CTR-005", name: "Rhein-Ruhr Weiterbildung Köln", city: "Köln", address: "Neumarkt 12", phone: "+49 221 98765-0", email: "koeln@telc.net", levels: ["A1", "A2", "B1"], isCertified: true, status: "Wartung" },
  ];

  const defaultPartners: PartnerItem[] = [
    { id: "PTR-01", name: "BAMF Bundesamt für Migration", type: "Akkreditierung", issuer: "Bundesrepublik Deutschland", verified: true },
    { id: "PTR-02", name: "ALTE Association of Language Testers in Europe", type: "Siegel", issuer: "ALTE Council", verified: true },
    { id: "PTR-03", name: "HRK Hochschulrektorenkonferenz", type: "Kooperation", issuer: "Deutschland", verified: true },
  ];

  const defaultCertificates: CertificateItem[] = [
    { id: "CERT-901", code: "TELC-2026-B2-88412", candidateName: "Mustermann, Anna", examTitle: "telc Deutsch B2", level: "B2", issueDate: "2026-01-15", overallScore: "Sehr gut (288 / 300)", status: "Gültig" },
    { id: "CERT-902", code: "TELC-2026-C1-44129", candidateName: "Yilmaz, Mehmet", examTitle: "telc Deutsch C1 Hochschule", level: "C1", issueDate: "2026-02-02", overallScore: "Gut (264 / 300)", status: "Gültig" },
    { id: "CERT-903", code: "TELC-2025-B1-10492", candidateName: "Kowalski, Jan", examTitle: "telc Deutsch B1 (Zertifikat Deutsch)", level: "B1", issueDate: "2025-11-20", overallScore: "Befriedigend (220 / 300)", status: "Gültig" },
    { id: "CERT-904", code: "TELC-2025-A2-00911", candidateName: "Schmidt, Lukas", examTitle: "telc Deutsch A2", level: "A2", issueDate: "2025-08-10", overallScore: "Ungültig erklärt", status: "Ungültig" },
  ];

  const defaultInquiries: InquiryItem[] = [
    { id: "INQ-101", sender: "Dr. Thomas Weber", email: "tweber@klinikum-ffm.de", phone: "+49 69 123456", type: "Kontaktanfrage", subject: "Prüfungstermine C1 Medizin für Klinikpersonal", message: "Guten Tag, wir möchten gerne 15 Ärztinnen für die C1 Medizin Prüfung im Mai anmelden.", date: "2026-08-28", status: "Offen" },
    { id: "INQ-102", sender: "Elena Rostova", email: "elena.rostova@email.de", phone: "+49 170 998877", type: "Kandidaten-Support", subject: "Zertifikat Nachbestellung", message: "Ich habe mein B2 Zertifikat aus 2024 verloren. Wie erhalte ich ein Ersatzdokument?", date: "2026-08-27", status: "In Bearbeitung" },
    { id: "INQ-103", sender: "Volkshochschule Stuttgart", email: "info@vhs-stuttgart.de", type: "Prüfungsanmeldung", subject: "Partnertestzentrum Registrierung", message: "Wir bitten um Überprüfung unserer Unterlagen für die telc Lizenzierung.", date: "2026-08-25", status: "Erledigt" },
  ];

  // Persistent State Initializers
  const [exams, setExams] = useState<ExamItem[]>(() => {
    if (typeof window !== "undefined") {
      const s = localStorage.getItem("telc_admin_exams");
      if (s) { try { return JSON.parse(s); } catch {} }
    }
    return defaultExams;
  });

  const [materials, setMaterials] = useState<MaterialItem[]>(() => {
    if (typeof window !== "undefined") {
      const s = localStorage.getItem("telc_admin_materials");
      if (s) { try { return JSON.parse(s); } catch {} }
    }
    return defaultMaterials;
  });

  const [trainings, setTrainings] = useState<TrainingItem[]>(() => {
    if (typeof window !== "undefined") {
      const s = localStorage.getItem("telc_admin_trainings");
      if (s) { try { return JSON.parse(s); } catch {} }
    }
    return defaultTrainings;
  });

  const [newsList, setNewsList] = useState<NewsItem[]>(() => {
    if (typeof window !== "undefined") {
      const s = localStorage.getItem("telc_admin_news");
      if (s) { try { return JSON.parse(s); } catch {} }
    }
    return defaultNews;
  });

  const [centers, setCenters] = useState<CenterItem[]>(() => {
    if (typeof window !== "undefined") {
      const s = localStorage.getItem("telc_admin_centers");
      if (s) { try { return JSON.parse(s); } catch {} }
    }
    return defaultCenters;
  });

  const [partners, setPartners] = useState<PartnerItem[]>(() => {
    if (typeof window !== "undefined") {
      const s = localStorage.getItem("telc_admin_partners");
      if (s) { try { return JSON.parse(s); } catch {} }
    }
    return defaultPartners;
  });

  const [certificates, setCertificates] = useState<CertificateItem[]>(() => {
    if (typeof window !== "undefined") {
      const s = localStorage.getItem("telc_admin_certs");
      if (s) { try { return JSON.parse(s); } catch {} }
    }
    return defaultCertificates;
  });

  const [inquiries, setInquiries] = useState<InquiryItem[]>(() => {
    if (typeof window !== "undefined") {
      const s = localStorage.getItem("telc_admin_inquiries");
      if (s) { try { return JSON.parse(s); } catch {} }
    }
    return defaultInquiries;
  });

  // Sync to localStorage
  useEffect(() => { localStorage.setItem("telc_admin_exams", JSON.stringify(exams)); }, [exams]);
  useEffect(() => { localStorage.setItem("telc_admin_materials", JSON.stringify(materials)); }, [materials]);
  useEffect(() => { localStorage.setItem("telc_admin_trainings", JSON.stringify(trainings)); }, [trainings]);
  useEffect(() => { localStorage.setItem("telc_admin_news", JSON.stringify(newsList)); }, [newsList]);
  useEffect(() => { localStorage.setItem("telc_admin_centers", JSON.stringify(centers)); }, [centers]);
  useEffect(() => { localStorage.setItem("telc_admin_partners", JSON.stringify(partners)); }, [partners]);
  useEffect(() => { localStorage.setItem("telc_admin_certs", JSON.stringify(certificates)); }, [certificates]);
  useEffect(() => { localStorage.setItem("telc_admin_inquiries", JSON.stringify(inquiries)); }, [inquiries]);

  // Reset to default seed data
  const handleResetSeedData = () => {
    if (window.confirm("Möchten Sie alle Daten auf die telc Standard-Musterdaten zurücksetzen?")) {
      setExams(defaultExams);
      setMaterials(defaultMaterials);
      setTrainings(defaultTrainings);
      setNewsList(defaultNews);
      setCenters(defaultCenters);
      setPartners(defaultPartners);
      setCertificates(defaultCertificates);
      setInquiries(defaultInquiries);
      localStorage.removeItem("telc_admin_exams");
      localStorage.removeItem("telc_admin_materials");
      localStorage.removeItem("telc_admin_trainings");
      localStorage.removeItem("telc_admin_news");
      localStorage.removeItem("telc_admin_centers");
      localStorage.removeItem("telc_admin_partners");
      localStorage.removeItem("telc_admin_certs");
      localStorage.removeItem("telc_admin_inquiries");
      toast.success("Alle Daten auf telc Standardwerte zurückgesetzt!");
    }
  };

  // Modal Dialog Form States
  const [isExamModalOpen, setIsExamModalOpen] = useState(false);
  const [editingExam, setEditingExam] = useState<ExamItem | null>(null);
  const [examForm, setExamForm] = useState<{
    title: string;
    level: string;
    target: string;
    candidates: string;
    status: ExamItem["status"];
  }>({ title: "", level: "B1", target: "", candidates: "1.000", status: "Aktiv" });

  const [isMaterialModalOpen, setIsMaterialModalOpen] = useState(false);
  const [editingMaterial, setEditingMaterial] = useState<MaterialItem | null>(null);
  const [materialForm, setMaterialForm] = useState<{
    title: string;
    category: MaterialItem["category"];
    level: string;
    price: string;
    isbn: string;
  }>({ title: "", category: "Lehrbuch", level: "B2", price: "19,90 €", isbn: "978-3-946414-00-0" });

  const [isTrainingModalOpen, setIsTrainingModalOpen] = useState(false);
  const [editingTraining, setEditingTraining] = useState<TrainingItem | null>(null);
  const [trainingForm, setTrainingForm] = useState<{
    title: string;
    target: string;
    format: TrainingItem["format"];
    date: string;
    seats: string;
  }>({ title: "", target: "Lehrkräfte", format: "Online Webinar", date: "2026-10-15", seats: "15 Frei" });

  const [isCenterModalOpen, setIsCenterModalOpen] = useState(false);
  const [editingCenter, setEditingCenter] = useState<CenterItem | null>(null);
  const [centerForm, setCenterForm] = useState({ name: "", city: "", address: "", phone: "", email: "", isCertified: true });

  const [isPartnerModalOpen, setIsPartnerModalOpen] = useState(false);
  const [partnerForm, setPartnerForm] = useState<{
    name: string;
    type: PartnerItem["type"];
    issuer: string;
    verified: boolean;
  }>({ name: "", type: "Siegel", issuer: "telc gGmbH", verified: true });

  const [isCertModalOpen, setIsCertModalOpen] = useState(false);
  const [certForm, setCertForm] = useState({ candidateName: "", examTitle: "telc Deutsch B2", level: "B2", overallScore: "Sehr gut (290 / 300)" });

  const [viewingCert, setViewingCert] = useState<CertificateItem | null>(null);
  const [viewingInquiry, setViewingInquiry] = useState<InquiryItem | null>(null);

  // Auto restore auth session & fetch DB data
  useEffect(() => {
    const savedAuth = sessionStorage.getItem("telc_admin_auth");
    const savedUser = sessionStorage.getItem("telc_admin_user");
    if (savedAuth === "true" && savedUser) {
      setIsAuthenticated(true);
      try {
        setCurrentUser(JSON.parse(savedUser));
      } catch {
        /* ignore */
      }
    }

    // Connect to live MongoDB Data Pipeline
    fetchAllAdminData().then((res) => {
      if (res.success) {
        if (res.exams.length) setExams(res.exams);
        if (res.materials.length) setMaterials(res.materials);
        if (res.trainings.length) setTrainings(res.trainings);
        if (res.newsList.length) setNewsList(res.newsList);
        if (res.centers.length) setCenters(res.centers);
        if (res.partners.length) setPartners(res.partners);
        if (res.certificates.length) setCertificates(res.certificates);
        if (res.inquiries.length) setInquiries(res.inquiries);
      }
    });
  }, []);

  // Handle Login
  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError("");
    setIsLoggingIn(true);

    const res = await adminLoginAction(loginEmail, loginPassword);
    setIsLoggingIn(false);

    if (res.success && res.user) {
      const userObj = {
        name: res.user.name || "Super Administrator",
        role: res.user.role || "Superadmin",
        email: res.user.email || loginEmail,
      };
      setIsAuthenticated(true);
      setCurrentUser(userObj);
      sessionStorage.setItem("telc_admin_auth", "true");
      sessionStorage.setItem("telc_admin_user", JSON.stringify(userObj));
      toast.success(`Willkommen zurück! Angemeldet als ${userObj.email}`);
    } else {
      setLoginError(res.error || "Anmeldung fehlgeschlagen.");
      toast.error("Anmeldung fehlgeschlagen");
    }
  };

  // Handle Logout
  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem("telc_admin_auth");
    sessionStorage.removeItem("telc_admin_user");
    toast.info("Erfolgreich abgemeldet.");
  };

  // -------------------------------------------------------------
  // CRUD HANDLERS
  // -------------------------------------------------------------
  // 1. EXAM CRUD
  const handleSaveExam = (e: React.FormEvent) => {
    e.preventDefault();
    if (!examForm.title.trim()) {
      toast.error("Bitte geben Sie eine Prüfungsbezeichnung ein.");
      return;
    }
    if (editingExam) {
      setExams(exams.map((ex) => (ex.id === editingExam.id ? { ...ex, ...examForm } : ex)));
      toast.success(`Prüfung ${editingExam.id} aktualisiert.`);
    } else {
      const newId = `TELC-${examForm.level}-${Math.floor(100 + Math.random() * 900)}`;
      const newExam = { id: newId, ...examForm };
      setExams([newExam, ...exams]);
      dbCreateExam(newExam);
      toast.success(`Neue Prüfung ${newId} erstellt!`);
    }
    setIsExamModalOpen(false);
    setEditingExam(null);
  };

  const handleDeleteExam = (id: string) => {
    if (window.confirm(`Prüfung ${id} wirklich löschen?`)) {
      setExams(exams.filter((ex) => ex.id !== id));
      dbDeleteExam(id);
      toast.success(`Prüfung ${id} gelöscht.`);
    }
  };

  // 2. MATERIAL CRUD
  const handleSaveMaterial = (e: React.FormEvent) => {
    e.preventDefault();
    if (!materialForm.title.trim()) return;
    if (editingMaterial) {
      setMaterials(materials.map((m) => (m.id === editingMaterial.id ? { ...m, ...materialForm } : m)));
      toast.success(`Lehrwerk ${editingMaterial.id} aktualisiert.`);
    } else {
      const newId = `MAT-${Math.floor(10 + Math.random() * 90)}`;
      setMaterials([{ id: newId, ...materialForm, status: "Aktiv" }, ...materials]);
      toast.success(`Neues Lehrwerk ${newId} hinzugefügt!`);
    }
    setIsMaterialModalOpen(false);
    setEditingMaterial(null);
  };

  const handleDeleteMaterial = (id: string) => {
    if (window.confirm(`Material ${id} wirklich löschen?`)) {
      setMaterials(materials.filter((m) => m.id !== id));
      toast.success(`Material ${id} gelöscht.`);
    }
  };

  // 3. TRAINING CRUD
  const handleSaveTraining = (e: React.FormEvent) => {
    e.preventDefault();
    if (!trainingForm.title.trim()) return;
    if (editingTraining) {
      setTrainings(trainings.map((tItem) => (tItem.id === editingTraining.id ? { ...tItem, ...trainingForm } : tItem)));
      toast.success(`Seminar ${editingTraining.id} aktualisiert.`);
    } else {
      const newId = `TRN-${Math.floor(100 + Math.random() * 900)}`;
      setTrainings([{ id: newId, ...trainingForm, status: "Buchbar" }, ...trainings]);
      toast.success(`Neues Seminar ${newId} angelegt!`);
    }
    setIsTrainingModalOpen(false);
    setEditingTraining(null);
  };

  const handleDeleteTraining = (id: string) => {
    if (window.confirm(`Seminar ${id} löschen?`)) {
      setTrainings(trainings.filter((tItem) => tItem.id !== id));
      toast.success(`Seminar ${id} gelöscht.`);
    }
  };

  // 4. CENTER CRUD
  const handleSaveCenter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!centerForm.name.trim() || !centerForm.city.trim()) {
      toast.error("Name und Stadt sind Pflichtfelder.");
      return;
    }
    if (editingCenter) {
      setCenters(centers.map((c) => (c.id === editingCenter.id ? { ...c, ...centerForm } : c)));
      toast.success(`Prüfungszentrum ${editingCenter.id} aktualisiert.`);
    } else {
      const newId = `CTR-00${centers.length + 1}`;
      setCenters([{ id: newId, ...centerForm, levels: ["A1", "A2", "B1", "B2"], status: "Aktiv" }, ...centers]);
      toast.success(`Prüfungszentrum ${centerForm.name} registriert!`);
    }
    setIsCenterModalOpen(false);
    setEditingCenter(null);
  };

  const handleToggleCenterCertified = (id: string) => {
    setCenters(
      centers.map((c) => {
        if (c.id === id) {
          const updated = !c.isCertified;
          toast.info(`${c.name} Status: ${updated ? "Zertifiziert" : "Standard"}`);
          return { ...c, isCertified: updated };
        }
        return c;
      })
    );
  };

  const handleDeleteCenter = (id: string) => {
    if (window.confirm(`Prüfungszentrum ${id} wirklich entfernen?`)) {
      setCenters(centers.filter((c) => c.id !== id));
      toast.success(`Prüfungszentrum ${id} entfernt.`);
    }
  };

  // 5. PARTNER CRUD
  const handleSavePartner = (e: React.FormEvent) => {
    e.preventDefault();
    if (!partnerForm.name.trim()) return;
    const newId = `PTR-0${partners.length + 1}`;
    setPartners([{ id: newId, ...partnerForm }, ...partners]);
    setIsPartnerModalOpen(false);
    toast.success(`Partner / Siegel ${partnerForm.name} hinzugefügt!`);
  };

  const handleDeletePartner = (id: string) => {
    if (window.confirm(`Partner ${id} entfernen?`)) {
      setPartners(partners.filter((p) => p.id !== id));
      toast.success(`Partner ${id} entfernt.`);
    }
  };

  // 6. CERTIFICATE CRUD
  const handleIssueCertificate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!certForm.candidateName.trim()) {
      toast.error("Bitte Namen des Kandidaten angeben.");
      return;
    }
    const randomCode = `TELC-2026-${certForm.level}-${Math.floor(10000 + Math.random() * 90000)}`;
    const newCert: CertificateItem = {
      id: `CERT-${Date.now().toString().slice(-4)}`,
      code: randomCode,
      candidateName: certForm.candidateName,
      examTitle: certForm.examTitle,
      level: certForm.level,
      issueDate: new Date().toISOString().slice(0, 10),
      overallScore: certForm.overallScore,
      status: "Gültig",
    };
    setCertificates([newCert, ...certificates]);
    setIsCertModalOpen(false);
    toast.success(`Zertifikat ${randomCode} erfolgreich ausgestellt!`);
  };

  const handleToggleCertStatus = (id: string) => {
    setCertificates(
      certificates.map((cert) => {
        if (cert.id === id) {
          const nextStatus = cert.status === "Gültig" ? "Ungültig" : "Gültig";
          toast.info(`Zertifikat ${cert.code} Status: ${nextStatus}`);
          return { ...cert, status: nextStatus };
        }
        return cert;
      })
    );
  };

  // 7. INQUIRIES ACTIONS
  const handleUpdateInquiryStatus = (id: string, newStatus: InquiryItem["status"]) => {
    setInquiries(
      inquiries.map((inq) => {
        if (inq.id === id) {
          toast.success(`Anfrage ${id} Status: ${newStatus}`);
          return { ...inq, status: newStatus };
        }
        return inq;
      })
    );
  };

  // Sidebar Groups
  interface NavItem {
    id: TabGroup;
    label: string;
    icon: any;
    badge?: string;
  }

  const navGroups: Array<{ title: string; items: NavItem[] }> = [
    {
      title: t.groupOverview,
      items: [{ id: "overview" as TabGroup, label: t.tabOverview, icon: LayoutDashboard }],
    },
    {
      title: t.groupContent,
      items: [
        { id: "exams" as TabGroup, label: t.tabExams, icon: FileText, badge: exams.length.toString() },
        { id: "materials" as TabGroup, label: t.tabMaterials, icon: BookOpen, badge: materials.length.toString() },
        { id: "training" as TabGroup, label: t.tabTraining, icon: GraduationCap, badge: trainings.length.toString() },
        { id: "news" as TabGroup, label: t.tabNews, icon: Layers, badge: newsList.length.toString() },
      ],
    },
    {
      title: t.groupNetwork,
      items: [
        { id: "centers" as TabGroup, label: t.tabCenters, icon: Building2, badge: centers.length.toString() },
        { id: "partners" as TabGroup, label: t.tabPartners, icon: Award, badge: partners.length.toString() },
        { id: "certificates" as TabGroup, label: t.tabCertificates, icon: FileCheck, badge: certificates.length.toString() },
      ],
    },
    {
      title: t.groupSupport,
      items: [
        {
          id: "inquiries" as TabGroup,
          label: t.tabInquiries,
          icon: MessageSquare,
          badge: inquiries.filter((i) => i.status === "Offen").length.toString(),
        },
      ],
    },
    {
      title: t.groupSystem,
      items: [{ id: "settings" as TabGroup, label: t.tabSettings, icon: Settings }],
    },
  ];

  // -------------------------------------------------------------
  // RENDER: LOGIN PORTAL (if not authenticated)
  // -------------------------------------------------------------
  if (!isAuthenticated) {
    return (
      <div className="flex min-h-screen w-full items-center justify-center bg-[#0f172a] px-4 py-12 font-sans relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-primary/20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />

        <div className="w-full max-w-md space-y-8 rounded-2xl border border-white/10 bg-[#1e293b]/90 p-8 shadow-2xl backdrop-blur-xl relative z-10">
          {/* Header & Logo */}
          <div className="text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-primary text-white font-black text-2xl shadow-lg shadow-primary/30">
              t
            </div>
            <h2 className="mt-4 text-2xl font-black tracking-tight text-white">{t.loginTitle}</h2>
            <p className="mt-1 text-xs text-slate-400">{t.loginSub}</p>
          </div>

          {/* Security Badge */}
          <div className="flex items-center justify-center gap-2 rounded-lg bg-emerald-500/10 py-2 px-3 text-[0.6875rem] font-bold text-emerald-400 border border-emerald-500/20">
            <ShieldCheck className="h-4 w-4 shrink-0" />
            <span>256-Bit SSL Encrypted Admin Portal</span>
          </div>

          {loginError && (
            <div className="flex items-center gap-2 rounded-lg bg-red-500/10 p-3 text-xs text-red-400 border border-red-500/20">
              <AlertCircle className="h-4 w-4 shrink-0" />
              <span>{loginError}</span>
            </div>
          )}

          <form onSubmit={handleLoginSubmit} className="space-y-5">
            <div>
              <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-300 mb-1.5">
                E-Mail-Adresse
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                <input
                  type="email"
                  required
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  placeholder="telcsuccess@gmail.com"
                  className="w-full rounded-xl border border-slate-700 bg-slate-900/60 py-2.5 pl-10 pr-4 text-xs font-semibold text-white placeholder-slate-500 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-300 mb-1.5">
                Passwort
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full rounded-xl border border-slate-700 bg-slate-900/60 py-2.5 pl-10 pr-10 text-xs font-semibold text-white placeholder-slate-500 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-xs text-slate-400 hover:text-white"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            {/* Seeded Credentials Helper */}
            <div className="rounded-xl border border-primary/20 bg-primary/5 p-3 text-xs text-slate-300">
              <div className="flex items-center justify-between">
                <span className="font-bold text-primary">{t.demoCredentialsNote}</span>
                <button
                  type="button"
                  onClick={() => {
                    setLoginEmail("telcsuccess@gmail.com");
                    setLoginPassword("princessmabus1");
                    toast.info("Admin-Zugangsdaten eingesetzt!");
                  }}
                  className="text-[0.6875rem] font-extrabold text-primary underline hover:text-white"
                >
                  {t.fillDemoBtn}
                </button>
              </div>
              <p className="mt-1 text-[0.6875rem] text-slate-400">
                Email: <code className="text-white font-bold">telcsuccess@gmail.com</code> | Pass: <code className="text-white font-bold">princessmabus1</code>
              </p>
            </div>

            <button
              type="submit"
              disabled={isLoggingIn}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-3 text-xs font-black text-white shadow-lg shadow-primary/30 hover:bg-primary-deep transition-all disabled:opacity-50"
            >
              {isLoggingIn ? (
                <>
                  <RefreshCw className="h-4 w-4 animate-spin" />
                  <span>Anmelden...</span>
                </>
              ) : (
                <>
                  <Key className="h-4 w-4" />
                  <span>In telc Admin-Portal einloggen</span>
                </>
              )}
            </button>
          </form>

          <div className="border-t border-slate-800 pt-4 text-center">
            <Link to="/" className="text-xs font-semibold text-slate-400 hover:text-white transition-colors">
              ← {t.backToWebsite}
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // RENDER: ADMIN DASHBOARD (when authenticated)
  // -------------------------------------------------------------
  return (
    <div className="flex h-screen w-full overflow-hidden bg-[#f8fafc] text-foreground font-sans">
      {/* 1. SIDEBAR (Collapsible & Grouped) */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 flex flex-col border-r border-slate-800 bg-[#0f172a] text-white transition-all duration-300 md:static ${
          sidebarCollapsed ? "w-20" : "w-64"
        } ${mobileSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >
        {/* Sidebar Header */}
        <div className="flex h-16 items-center justify-between border-b border-white/10 px-4">
          <Link to="/admin" className="flex items-center gap-2 overflow-hidden">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary font-black text-white text-lg shadow-md shadow-primary/30">
              t
            </div>
            {!sidebarCollapsed && (
              <div className="flex flex-col">
                <span className="text-lg font-black tracking-tight text-white leading-none">
                  telc<span className="text-primary">.</span>admin
                </span>
                <span className="text-[0.625rem] text-slate-400 font-semibold tracking-wider uppercase">
                  Management Portal
                </span>
              </div>
            )}
          </Link>

          <button
            type="button"
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            className="hidden rounded p-1 text-slate-400 hover:bg-white/10 hover:text-white md:block"
            title={sidebarCollapsed ? "Sidebar ausklappen" : "Sidebar einklappen"}
          >
            {sidebarCollapsed ? <ChevronRight className="h-5 w-5" /> : <ChevronLeft className="h-5 w-5" />}
          </button>
        </div>

        {/* Sidebar Navigation Items Grouped */}
        <div className="flex-1 overflow-y-auto px-3 py-4 space-y-6">
          {navGroups.map((group) => (
            <div key={group.title}>
              {!sidebarCollapsed && (
                <p className="px-3 pb-2 text-[0.625rem] font-extrabold uppercase tracking-wider text-slate-400">
                  {group.title}
                </p>
              )}
              <div className="space-y-1">
                {group.items.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeTab === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => {
                        setActiveTab(item.id);
                        setMobileSidebarOpen(false);
                      }}
                      className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-xs font-bold transition-all ${
                        isActive
                          ? "bg-primary text-white shadow-lg shadow-primary/20"
                          : "text-slate-300 hover:bg-white/10 hover:text-white"
                      }`}
                      title={sidebarCollapsed ? item.label : undefined}
                    >
                      <Icon className="h-4 w-4 shrink-0" />
                      {!sidebarCollapsed && (
                        <span className="flex-1 text-left truncate">{item.label}</span>
                      )}
                      {!sidebarCollapsed && item.badge && (
                        <span
                          className={`rounded px-1.5 py-0.5 text-[0.625rem] font-extrabold ${
                            isActive ? "bg-white/20 text-white" : "bg-slate-800 text-slate-300"
                          }`}
                        >
                          {item.badge}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Sidebar Footer & Logout */}
        <div className="border-t border-white/10 p-3 space-y-2">
          {!sidebarCollapsed && (
            <div className="flex items-center gap-2 rounded-lg bg-white/5 p-2.5">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary font-bold text-xs text-white">
                SA
              </div>
              <div className="flex-1 truncate text-left">
                <p className="text-xs font-bold text-white truncate">{currentUser.name}</p>
                <p className="text-[0.625rem] text-slate-400 truncate">{currentUser.email}</p>
              </div>
            </div>
          )}
          <button
            type="button"
            onClick={handleLogout}
            className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-xs font-bold text-red-400 hover:bg-red-500/10 hover:text-red-300 transition-colors"
          >
            <LogOut className="h-4 w-4 shrink-0" />
            {!sidebarCollapsed && <span>{t.logout}</span>}
          </button>
        </div>
      </aside>

      {/* 2. MAIN CONTENT AREA */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Top Header Bar */}
        <header className="flex h-16 shrink-0 items-center justify-between border-b border-border bg-card px-4 md:px-8 shadow-sm">
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
              className="rounded-lg p-2 text-foreground hover:bg-secondary md:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>

            {/* Global Search Input */}
            <div className="relative hidden w-72 sm:block">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder={t.searchPlaceholder}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-xl border border-border bg-secondary/50 py-1.5 pl-9 pr-4 text-xs font-medium text-foreground focus:border-primary focus:bg-card focus:outline-none"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            {/* Quick Link to Public Site */}
            <Link
              to="/"
              target="_blank"
              className="hidden items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground md:flex"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              <span>{t.backToWebsite}</span>
            </Link>

            {/* Language Switcher Badge with Round Flag (Matching Frontend Header UI) */}
            <div className="relative" ref={langDropdownRef}>
              <button
                type="button"
                onClick={() => setLangOpen((v) => !v)}
                className="flex items-center gap-1.5 rounded-xl border border-border bg-secondary/50 px-2.5 py-1 text-xs font-bold text-foreground transition-colors hover:text-primary hover:bg-secondary"
              >
                <RoundFlag code={activeLang.code} className="h-4.5 w-4.5" />
                <span className="uppercase text-[0.75rem] font-extrabold">{activeLang.code}</span>
              </button>

              {langOpen && (
                <ul className="absolute right-0 top-10 z-50 w-36 overflow-hidden rounded-xl border border-border bg-popover py-1 shadow-xl">
                  {LANGS.map((l) => (
                    <li key={l.code}>
                      <button
                        type="button"
                        onClick={() => {
                          setLang(l.code);
                          setLangOpen(false);
                          toast.info(`Sprache geändert zu: ${l.label}`);
                        }}
                        className={`flex w-full items-center gap-2.5 px-3 py-2 text-left text-xs font-semibold hover:bg-secondary transition-colors ${
                          l.code === lang ? "bg-secondary/60 text-primary font-bold" : "text-foreground"
                        }`}
                      >
                        <RoundFlag code={l.code} className="h-4.5 w-4.5" />
                        <span>{l.label}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Admin Profile Badge */}
            <div className="flex items-center gap-3 border-l border-border pl-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-white font-black text-xs shadow-sm">
                SA
              </div>
              <div className="hidden flex-col text-left md:flex">
                <span className="text-xs font-extrabold text-foreground">{currentUser.name}</span>
                <span className="text-[0.625rem] font-bold text-emerald-600 dark:text-emerald-400">● Admin Online</span>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Main View Container */}
        <main className="flex-1 overflow-y-auto p-4 md:p-8">
          {/* TAB 1: OVERVIEW DASHBOARD */}
          {activeTab === "overview" && (
            <div className="space-y-8">
              {/* Header Banner */}
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between rounded-2xl bg-slate-900 p-6 text-white shadow-xl relative overflow-hidden">
                <div className="space-y-1 z-10">
                  <span className="rounded-md bg-primary/20 px-2.5 py-1 text-[0.6875rem] font-black text-primary border border-primary/30">
                    telc Management System 2026
                  </span>
                  <h1 className="text-2xl font-black tracking-tight text-white">
                    {t.welcomeTitle}, {currentUser.name}
                  </h1>
                  <p className="text-xs text-slate-300 max-w-xl">{t.welcomeSub}</p>
                </div>
                <div className="flex flex-wrap gap-2 z-10">
                  <button
                    type="button"
                    onClick={() => {
                      setEditingExam(null);
                      setExamForm({ title: "", level: "B1", target: "Allgemein", candidates: "1.000", status: "Aktiv" });
                      setIsExamModalOpen(true);
                    }}
                    className="inline-flex items-center gap-1.5 rounded-xl bg-primary px-4 py-2.5 text-xs font-extrabold text-white shadow-lg shadow-primary/30 hover:bg-primary-deep transition-all"
                  >
                    <Plus className="h-4 w-4" />
                    <span>{t.newExamBtn}</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsCertModalOpen(true)}
                    className="inline-flex items-center gap-1.5 rounded-xl bg-white/10 border border-white/20 px-4 py-2.5 text-xs font-extrabold text-white hover:bg-white/20 transition-all"
                  >
                    <Award className="h-4 w-4 text-amber-400" />
                    <span>{t.issueCertBtn}</span>
                  </button>
                </div>
              </div>

              {/* Stat Cards Grid */}
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div className="rounded-2xl border border-border bg-card p-5 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between">
                    <span className="text-[0.6875rem] font-extrabold uppercase tracking-wider text-muted-foreground">
                      {t.statsCenters}
                    </span>
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Building2 className="h-5 w-5" />
                    </div>
                  </div>
                  <p className="mt-2 text-3xl font-black text-foreground">{centers.length} Partner</p>
                  <p className="mt-1 text-xs font-semibold text-emerald-600">● 3.000+ weltweit online</p>
                </div>

                <div className="rounded-2xl border border-border bg-card p-5 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between">
                    <span className="text-[0.6875rem] font-extrabold uppercase tracking-wider text-muted-foreground">
                      {t.statsExams}
                    </span>
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600">
                      <FileText className="h-5 w-5" />
                    </div>
                  </div>
                  <p className="mt-2 text-3xl font-black text-foreground">{exams.length} Formate</p>
                  <p className="mt-1 text-xs font-semibold text-muted-foreground">Niveaustufen A1 bis C2</p>
                </div>

                <div className="rounded-2xl border border-border bg-card p-5 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between">
                    <span className="text-[0.6875rem] font-extrabold uppercase tracking-wider text-muted-foreground">
                      {t.statsCerts}
                    </span>
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600">
                      <Award className="h-5 w-5" />
                    </div>
                  </div>
                  <p className="mt-2 text-3xl font-black text-foreground">{certificates.length} Verifiziert</p>
                  <p className="mt-1 text-xs font-semibold text-emerald-600">Echtheitsprüfung aktiv</p>
                </div>

                <div className="rounded-2xl border border-border bg-card p-5 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between">
                    <span className="text-[0.6875rem] font-extrabold uppercase tracking-wider text-muted-foreground">
                      {t.statsInquiries}
                    </span>
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-red-500/10 text-red-600">
                      <MessageSquare className="h-5 w-5" />
                    </div>
                  </div>
                  <p className="mt-2 text-3xl font-black text-foreground">
                    {inquiries.filter((i) => i.status === "Offen").length} neu
                  </p>
                  <p className="mt-1 text-xs font-semibold text-muted-foreground">Kandidaten & Zentren</p>
                </div>
              </div>

              {/* News & Activity Panel */}
              <div className="grid gap-8 lg:grid-cols-12">
                <div className="rounded-2xl border border-border bg-card p-6 shadow-sm lg:col-span-8">
                  <div className="mb-4 flex items-center justify-between border-b border-border pb-3">
                    <h2 className="text-base font-black text-foreground">Aktuelle News & Meldungen</h2>
                    <button
                      type="button"
                      onClick={() => setActiveTab("news")}
                      className="text-xs font-bold text-primary hover:underline"
                    >
                      Alle verwalten ({newsList.length})
                    </button>
                  </div>
                  <div className="divide-y divide-border">
                    {newsList.map((n) => (
                      <div key={n.id} className="flex items-center justify-between py-3">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="rounded-md bg-primary/10 px-2 py-0.5 text-[0.625rem] font-extrabold text-primary">
                              {n.category}
                            </span>
                            <span className="text-[0.625rem] font-medium text-muted-foreground">{n.date}</span>
                          </div>
                          <p className="text-xs font-bold text-foreground">{n.title}</p>
                        </div>
                        <span
                          className={`rounded-full px-2.5 py-0.5 text-[0.625rem] font-extrabold ${
                            n.status === "Veröffentlicht"
                              ? "bg-emerald-500/10 text-emerald-600"
                              : "bg-amber-500/10 text-amber-600"
                          }`}
                        >
                          {n.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl border border-border bg-card p-6 shadow-sm lg:col-span-4">
                  <h2 className="mb-4 border-b border-border pb-3 text-base font-black text-foreground">
                    Systemstatus & API
                  </h2>
                  <div className="space-y-3 text-xs">
                    <div className="flex items-center justify-between rounded-xl bg-emerald-500/10 p-3.5 text-emerald-700 dark:text-emerald-400 font-semibold border border-emerald-500/20">
                      <span className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4" /> Globales Netzwerk
                      </span>
                      <span className="font-extrabold">3.000+ Online</span>
                    </div>
                    <div className="flex items-center justify-between rounded-xl bg-blue-500/10 p-3.5 text-blue-700 dark:text-blue-400 font-semibold border border-blue-500/20">
                      <span className="flex items-center gap-2">
                        <Globe className="h-4 w-4" /> Zertifikatsvalidierung
                      </span>
                      <span className="font-extrabold">100% Bereit</span>
                    </div>
                    <div className="flex items-center justify-between rounded-xl bg-amber-500/10 p-3.5 text-amber-700 dark:text-amber-400 font-semibold border border-amber-500/20">
                      <span className="flex items-center gap-2">
                        <Clock className="h-4 w-4" /> Auswertungssystem
                      </span>
                      <span className="font-extrabold">1.500 / Tag</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: SPRACHPRÜFUNGEN TAB (CRUD) */}
          {activeTab === "exams" && (
            <div className="space-y-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h1 className="text-xl font-black text-foreground">{t.tabExams}</h1>
                  <p className="text-xs text-muted-foreground">
                    Verwaltung aller telc Prüfungsformate, Niveaustufen und Zielgruppen.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setEditingExam(null);
                    setExamForm({ title: "", level: "B1", target: "Allgemein", candidates: "1.000", status: "Aktiv" });
                    setIsExamModalOpen(true);
                  }}
                  className="inline-flex items-center gap-1.5 rounded-xl bg-primary px-4 py-2.5 text-xs font-extrabold text-white shadow-md hover:bg-primary-deep transition-all"
                >
                  <Plus className="h-4 w-4" />
                  <span>{t.newExamBtn}</span>
                </button>
              </div>

              {/* Level Filter */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold text-muted-foreground mr-1">Filter nach Niveau:</span>
                {["ALL", "A1", "A2", "B1", "B2", "C1", "C2"].map((lvl) => (
                  <button
                    key={lvl}
                    type="button"
                    onClick={() => setLevelFilter(lvl)}
                    className={`rounded-lg px-3 py-1 text-xs font-extrabold transition-all ${
                      levelFilter === lvl
                        ? "bg-primary text-white shadow-sm"
                        : "bg-card border border-border text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {lvl === "ALL" ? "Alle Niveaus" : lvl}
                  </button>
                ))}
              </div>

              {/* Table */}
              <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
                <table className="w-full text-left text-xs">
                  <thead className="border-b border-border bg-secondary/50 text-[0.6875rem] font-extrabold uppercase tracking-wider text-muted-foreground">
                    <tr>
                      <th className="px-4 py-3.5">Code / ID</th>
                      <th className="px-4 py-3.5">Prüfungsbezeichnung</th>
                      <th className="px-4 py-3.5">Niveau</th>
                      <th className="px-4 py-3.5">Zielgruppe</th>
                      <th className="px-4 py-3.5">Kandidaten / Jahr</th>
                      <th className="px-4 py-3.5">{t.status}</th>
                      <th className="px-4 py-3.5 text-right">{t.actions}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {exams
                      .filter((ex) => {
                        const matchesSearch = ex.title.toLowerCase().includes(searchQuery.toLowerCase()) || ex.id.toLowerCase().includes(searchQuery.toLowerCase());
                        const matchesLevel = levelFilter === "ALL" || ex.level === levelFilter;
                        return matchesSearch && matchesLevel;
                      })
                      .map((exam) => (
                        <tr key={exam.id} className="hover:bg-secondary/30 transition-colors">
                          <td className="px-4 py-3.5 font-black text-primary">{exam.id}</td>
                          <td className="px-4 py-3.5 font-bold text-foreground">{exam.title}</td>
                          <td className="px-4 py-3.5">
                            <span className="rounded-md bg-primary/10 px-2 py-0.5 font-black text-primary">
                              {exam.level}
                            </span>
                          </td>
                          <td className="px-4 py-3.5 text-muted-foreground">{exam.target}</td>
                          <td className="px-4 py-3.5 font-semibold text-foreground">{exam.candidates}</td>
                          <td className="px-4 py-3.5">
                            <span
                              className={`rounded-full px-2.5 py-0.5 text-[0.6875rem] font-black ${
                                exam.status === "Aktiv"
                                  ? "bg-emerald-500/10 text-emerald-600"
                                  : "bg-amber-500/10 text-amber-600"
                              }`}
                            >
                              {exam.status}
                            </span>
                          </td>
                          <td className="px-4 py-3.5 text-right">
                            <div className="flex items-center justify-end gap-2">
                              <button
                                type="button"
                                onClick={() => {
                                  setEditingExam(exam);
                                  setExamForm({ title: exam.title, level: exam.level, target: exam.target, candidates: exam.candidates, status: exam.status });
                                  setIsExamModalOpen(true);
                                }}
                                className="p-1.5 rounded-lg text-muted-foreground hover:bg-secondary hover:text-primary transition-colors"
                              >
                                <Edit className="h-4 w-4" />
                              </button>
                              <button
                                type="button"
                                onClick={() => handleDeleteExam(exam.id)}
                                className="p-1.5 rounded-lg text-muted-foreground hover:bg-red-500/10 hover:text-red-500 transition-colors"
                              >
                                <Trash2 className="h-4 w-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 3: LEHRMATERIALIEN TAB (CRUD) */}
          {activeTab === "materials" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-xl font-black text-foreground">{t.tabMaterials}</h1>
                  <p className="text-xs text-muted-foreground">Katalog für Lehrwerke, Testhefte und Downloads.</p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setEditingMaterial(null);
                    setMaterialForm({ title: "", category: "Lehrbuch", level: "B2", price: "19,90 €", isbn: "978-3-946414-00-0" });
                    setIsMaterialModalOpen(true);
                  }}
                  className="inline-flex items-center gap-1.5 rounded-xl bg-primary px-4 py-2.5 text-xs font-extrabold text-white shadow-md hover:bg-primary-deep transition-all"
                >
                  <Plus className="h-4 w-4" />
                  <span>{t.newMaterialBtn}</span>
                </button>
              </div>

              <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
                <table className="w-full text-left text-xs">
                  <thead className="border-b border-border bg-secondary/50 text-[0.6875rem] font-extrabold uppercase tracking-wider text-muted-foreground">
                    <tr>
                      <th className="px-4 py-3.5">ID</th>
                      <th className="px-4 py-3.5">Titel</th>
                      <th className="px-4 py-3.5">Kategorie</th>
                      <th className="px-4 py-3.5">Niveau</th>
                      <th className="px-4 py-3.5">Preis</th>
                      <th className="px-4 py-3.5">ISBN / Ref</th>
                      <th className="px-4 py-3.5 text-right">{t.actions}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {materials
                      .filter((m) => m.title.toLowerCase().includes(searchQuery.toLowerCase()))
                      .map((mat) => (
                        <tr key={mat.id} className="hover:bg-secondary/30 transition-colors">
                          <td className="px-4 py-3.5 font-black text-primary">{mat.id}</td>
                          <td className="px-4 py-3.5 font-bold text-foreground">{mat.title}</td>
                          <td className="px-4 py-3.5">
                            <span className="rounded bg-primary/10 px-2 py-0.5 font-extrabold text-primary">
                              {mat.category}
                            </span>
                          </td>
                          <td className="px-4 py-3.5 font-bold text-foreground">{mat.level}</td>
                          <td className="px-4 py-3.5 font-black text-foreground">{mat.price}</td>
                          <td className="px-4 py-3.5 text-muted-foreground">{mat.isbn}</td>
                          <td className="px-4 py-3.5 text-right">
                            <div className="flex items-center justify-end gap-2">
                              <button
                                type="button"
                                onClick={() => {
                                  setEditingMaterial(mat);
                                  setMaterialForm({ title: mat.title, category: mat.category, level: mat.level, price: mat.price, isbn: mat.isbn });
                                  setIsMaterialModalOpen(true);
                                }}
                                className="p-1.5 rounded-lg text-muted-foreground hover:bg-secondary hover:text-primary transition-colors"
                              >
                                <Edit className="h-4 w-4" />
                              </button>
                              <button
                                type="button"
                                onClick={() => handleDeleteMaterial(mat.id)}
                                className="p-1.5 rounded-lg text-muted-foreground hover:bg-red-500/10 hover:text-red-500 transition-colors"
                              >
                                <Trash2 className="h-4 w-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 4: TRAININGSANGEBOTE TAB (CRUD) */}
          {activeTab === "training" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-xl font-black text-foreground">{t.tabTraining}</h1>
                  <p className="text-xs text-muted-foreground">Qualifizierungen und Seminare für Prüfer & Lehrkräfte.</p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setEditingTraining(null);
                    setTrainingForm({ title: "", target: "Lehrkräfte", format: "Online Webinar", date: "2026-10-15", seats: "15 Frei" });
                    setIsTrainingModalOpen(true);
                  }}
                  className="inline-flex items-center gap-1.5 rounded-xl bg-primary px-4 py-2.5 text-xs font-extrabold text-white shadow-md hover:bg-primary-deep transition-all"
                >
                  <Plus className="h-4 w-4" />
                  <span>{t.newTrainingBtn}</span>
                </button>
              </div>

              <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
                <table className="w-full text-left text-xs">
                  <thead className="border-b border-border bg-secondary/50 text-[0.6875rem] font-extrabold uppercase tracking-wider text-muted-foreground">
                    <tr>
                      <th className="px-4 py-3.5">ID</th>
                      <th className="px-4 py-3.5">Seminarbezeichnung</th>
                      <th className="px-4 py-3.5">Zielgruppe</th>
                      <th className="px-4 py-3.5">Format</th>
                      <th className="px-4 py-3.5">Datum</th>
                      <th className="px-4 py-3.5">Plätze</th>
                      <th className="px-4 py-3.5 text-right">{t.actions}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {trainings.map((trn) => (
                      <tr key={trn.id} className="hover:bg-secondary/30 transition-colors">
                        <td className="px-4 py-3.5 font-black text-primary">{trn.id}</td>
                        <td className="px-4 py-3.5 font-bold text-foreground">{trn.title}</td>
                        <td className="px-4 py-3.5 text-muted-foreground">{trn.target}</td>
                        <td className="px-4 py-3.5">
                          <span className="rounded bg-secondary px-2 py-0.5 font-bold text-foreground">
                            {trn.format}
                          </span>
                        </td>
                        <td className="px-4 py-3.5 font-medium text-foreground">{trn.date}</td>
                        <td className="px-4 py-3.5 font-semibold text-emerald-600">{trn.seats}</td>
                        <td className="px-4 py-3.5 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <button
                              type="button"
                              onClick={() => {
                                setEditingTraining(trn);
                                setTrainingForm({ title: trn.title, target: trn.target, format: trn.format, date: trn.date, seats: trn.seats });
                                setIsTrainingModalOpen(true);
                              }}
                              className="p-1.5 rounded-lg text-muted-foreground hover:bg-secondary hover:text-primary transition-colors"
                            >
                              <Edit className="h-4 w-4" />
                            </button>
                            <button
                              type="button"
                              onClick={() => handleDeleteTraining(trn.id)}
                              className="p-1.5 rounded-lg text-muted-foreground hover:bg-red-500/10 hover:text-red-500 transition-colors"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 5: AKTUELLES & NEWS TAB (CRUD) */}
          {activeTab === "news" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-xl font-black text-foreground">{t.tabNews}</h1>
                  <p className="text-xs text-muted-foreground">Aktuelle Pressemitteilungen und Ankündigungen.</p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    const newArticle: NewsItem = {
                      id: `NEWS-${newsList.length + 1}`,
                      title: "Neue Pressemitteilung " + (newsList.length + 1),
                      category: "Allgemein",
                      date: new Date().toISOString().slice(0, 10),
                      status: "Veröffentlicht",
                    };
                    setNewsList([newArticle, ...newsList]);
                    toast.success("Pressemitteilung hinzugefügt.");
                  }}
                  className="inline-flex items-center gap-1.5 rounded-xl bg-primary px-4 py-2.5 text-xs font-extrabold text-white shadow-md hover:bg-primary-deep transition-all"
                >
                  <Plus className="h-4 w-4" />
                  <span>{t.newNewsBtn}</span>
                </button>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {newsList.map((item) => (
                  <div key={item.id} className="rounded-2xl border border-border bg-card p-5 shadow-sm space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="rounded-md bg-primary/10 px-2 py-0.5 text-[0.625rem] font-extrabold text-primary">
                        {item.category}
                      </span>
                      <span className="text-[0.625rem] text-muted-foreground font-medium">{item.date}</span>
                    </div>
                    <h3 className="text-sm font-bold text-foreground">{item.title}</h3>
                    <div className="flex items-center justify-between border-t border-border pt-3">
                      <span className="rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[0.625rem] font-bold text-emerald-600">
                        {item.status}
                      </span>
                      <button
                        type="button"
                        onClick={() => {
                          setNewsList(newsList.filter((n) => n.id !== item.id));
                          toast.success("Eintrag gelöscht.");
                        }}
                        className="text-xs text-red-500 hover:underline font-bold"
                      >
                        {t.delete}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 6: PRÜFUNGSZENTREN TAB (CRUD) */}
          {activeTab === "centers" && (
            <div className="space-y-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h1 className="text-xl font-black text-foreground">{t.tabCenters}</h1>
                  <p className="text-xs text-muted-foreground">
                    Verwaltung von lizenzierten telc Testzentren, Standorten und Zertifizierungen.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setEditingCenter(null);
                    setCenterForm({ name: "", city: "", address: "", phone: "", email: "", isCertified: true });
                    setIsCenterModalOpen(true);
                  }}
                  className="inline-flex items-center gap-1.5 rounded-xl bg-primary px-4 py-2.5 text-xs font-extrabold text-white shadow-md hover:bg-primary-deep transition-all"
                >
                  <Plus className="h-4 w-4" />
                  <span>{t.newCenterBtn}</span>
                </button>
              </div>

              <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
                <table className="w-full text-left text-xs">
                  <thead className="border-b border-border bg-secondary/50 text-[0.6875rem] font-extrabold uppercase tracking-wider text-muted-foreground">
                    <tr>
                      <th className="px-4 py-3.5">ID</th>
                      <th className="px-4 py-3.5">Name des Zentrums</th>
                      <th className="px-4 py-3.5">Stadt / Adresse</th>
                      <th className="px-4 py-3.5">Kontakt</th>
                      <th className="px-4 py-3.5">Lizenz-Status</th>
                      <th className="px-4 py-3.5 text-right">{t.actions}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {centers
                      .filter((c) => c.name.toLowerCase().includes(searchQuery.toLowerCase()) || c.city.toLowerCase().includes(searchQuery.toLowerCase()))
                      .map((center) => (
                        <tr key={center.id} className="hover:bg-secondary/30 transition-colors">
                          <td className="px-4 py-3.5 font-black text-primary">{center.id}</td>
                          <td className="px-4 py-3.5">
                            <p className="font-bold text-foreground">{center.name}</p>
                            <div className="flex gap-1 mt-1">
                              {center.levels.map((l) => (
                                <span key={l} className="rounded bg-secondary px-1.5 py-0.5 text-[0.625rem] font-bold text-muted-foreground">
                                  {l}
                                </span>
                              ))}
                            </div>
                          </td>
                          <td className="px-4 py-3.5">
                            <p className="font-bold text-foreground">{center.city}</p>
                            <p className="text-muted-foreground text-[0.6875rem]">{center.address}</p>
                          </td>
                          <td className="px-4 py-3.5">
                            <p className="font-medium text-foreground">{center.phone}</p>
                            <p className="text-muted-foreground text-[0.6875rem]">{center.email}</p>
                          </td>
                          <td className="px-4 py-3.5">
                            <button
                              type="button"
                              onClick={() => handleToggleCenterCertified(center.id)}
                              className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-[0.6875rem] font-extrabold transition-all ${
                                center.isCertified
                                  ? "bg-emerald-500/10 text-emerald-600 border border-emerald-500/20"
                                  : "bg-slate-200 text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                              }`}
                            >
                              <Award className="h-3.5 w-3.5" />
                              <span>{center.isCertified ? "Zertifiziert" : "Standard"}</span>
                            </button>
                          </td>
                          <td className="px-4 py-3.5 text-right">
                            <div className="flex items-center justify-end gap-2">
                              <button
                                type="button"
                                onClick={() => {
                                  setEditingCenter(center);
                                  setCenterForm({ name: center.name, city: center.city, address: center.address, phone: center.phone, email: center.email, isCertified: center.isCertified });
                                  setIsCenterModalOpen(true);
                                }}
                                className="p-1.5 rounded-lg text-muted-foreground hover:bg-secondary hover:text-primary transition-colors"
                              >
                                <Edit className="h-4 w-4" />
                              </button>
                              <button
                                type="button"
                                onClick={() => handleDeleteCenter(center.id)}
                                className="p-1.5 rounded-lg text-muted-foreground hover:bg-red-500/10 hover:text-red-500 transition-colors"
                              >
                                <Trash2 className="h-4 w-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 7: PARTNER & SIEGEL TAB (CRUD) */}
          {activeTab === "partners" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-xl font-black text-foreground">{t.tabPartners}</h1>
                  <p className="text-xs text-muted-foreground">Akkreditierungen, Siegel und Institutionen-Partnerschaften.</p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsPartnerModalOpen(true)}
                  className="inline-flex items-center gap-1.5 rounded-xl bg-primary px-4 py-2.5 text-xs font-extrabold text-white shadow-md hover:bg-primary-deep transition-all"
                >
                  <Plus className="h-4 w-4" />
                  <span>{t.newPartnerBtn}</span>
                </button>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {partners.map((ptr) => (
                  <div key={ptr.id} className="rounded-2xl border border-border bg-card p-5 shadow-sm space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="rounded bg-primary/10 px-2 py-0.5 text-[0.625rem] font-bold text-primary">
                        {ptr.type}
                      </span>
                      <span className="text-[0.6875rem] font-black text-emerald-600">● Verifiziert</span>
                    </div>
                    <h3 className="text-sm font-bold text-foreground">{ptr.name}</h3>
                    <p className="text-xs text-muted-foreground">Aussteller: {ptr.issuer}</p>
                    <div className="flex justify-end border-t border-border pt-3">
                      <button
                        type="button"
                        onClick={() => handleDeletePartner(ptr.id)}
                        className="text-xs font-bold text-red-500 hover:underline"
                      >
                        {t.delete}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 8: ZERTIFIKATE TAB (CRUD & Validation) */}
          {activeTab === "certificates" && (
            <div className="space-y-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h1 className="text-xl font-black text-foreground">{t.tabCertificates}</h1>
                  <p className="text-xs text-muted-foreground">
                    Echtheitsprüfung, Zertifikats-Erzeugung und Validierungsdatenbank.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsCertModalOpen(true)}
                  className="inline-flex items-center gap-1.5 rounded-xl bg-primary px-4 py-2.5 text-xs font-extrabold text-white shadow-md hover:bg-primary-deep transition-all"
                >
                  <Award className="h-4 w-4" />
                  <span>{t.issueCertBtn}</span>
                </button>
              </div>

              <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
                <table className="w-full text-left text-xs">
                  <thead className="border-b border-border bg-secondary/50 text-[0.6875rem] font-extrabold uppercase tracking-wider text-muted-foreground">
                    <tr>
                      <th className="px-4 py-3.5">Zertifikats-Code</th>
                      <th className="px-4 py-3.5">Kandidat/in</th>
                      <th className="px-4 py-3.5">Prüfung & Niveau</th>
                      <th className="px-4 py-3.5">Ausstellungsdatum</th>
                      <th className="px-4 py-3.5">Ergebnis</th>
                      <th className="px-4 py-3.5">{t.status}</th>
                      <th className="px-4 py-3.5 text-right">{t.actions}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {certificates
                      .filter((c) => c.code.toLowerCase().includes(searchQuery.toLowerCase()) || c.candidateName.toLowerCase().includes(searchQuery.toLowerCase()))
                      .map((cert) => (
                        <tr key={cert.id} className="hover:bg-secondary/30 transition-colors">
                          <td className="px-4 py-3.5 font-black text-primary tracking-wider">{cert.code}</td>
                          <td className="px-4 py-3.5 font-bold text-foreground">{cert.candidateName}</td>
                          <td className="px-4 py-3.5">
                            <span className="font-semibold text-foreground">{cert.examTitle}</span>
                            <span className="ml-2 rounded bg-primary/10 px-1.5 py-0.5 font-black text-primary text-[0.625rem]">
                              {cert.level}
                            </span>
                          </td>
                          <td className="px-4 py-3.5 text-muted-foreground font-medium">{cert.issueDate}</td>
                          <td className="px-4 py-3.5 font-semibold text-foreground">{cert.overallScore}</td>
                          <td className="px-4 py-3.5">
                            <button
                              type="button"
                              onClick={() => handleToggleCertStatus(cert.id)}
                              className={`rounded-full px-2.5 py-0.5 text-[0.6875rem] font-black cursor-pointer transition-transform active:scale-95 ${
                                cert.status === "Gültig"
                                  ? "bg-emerald-500/10 text-emerald-600"
                                  : "bg-red-500/10 text-red-600"
                              }`}
                            >
                              {cert.status}
                            </button>
                          </td>
                          <td className="px-4 py-3.5 text-right">
                            <button
                              type="button"
                              onClick={() => setViewingCert(cert)}
                              className="p-1.5 rounded-lg text-muted-foreground hover:bg-secondary hover:text-primary transition-colors"
                            >
                              <Eye className="h-4 w-4" />
                            </button>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 9: SUPPORT & ANFRAGEN TAB */}
          {activeTab === "inquiries" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-xl font-black text-foreground">{t.tabInquiries}</h1>
                  <p className="text-xs text-muted-foreground">Eingegangene Anfragen von Kandidaten und Institutionen.</p>
                </div>
              </div>

              <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
                <table className="w-full text-left text-xs">
                  <thead className="border-b border-border bg-secondary/50 text-[0.6875rem] font-extrabold uppercase tracking-wider text-muted-foreground">
                    <tr>
                      <th className="px-4 py-3.5">ID</th>
                      <th className="px-4 py-3.5">Absender / Kontakt</th>
                      <th className="px-4 py-3.5">Betreff & Typ</th>
                      <th className="px-4 py-3.5">Datum</th>
                      <th className="px-4 py-3.5">{t.status}</th>
                      <th className="px-4 py-3.5 text-right">{t.actions}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {inquiries.map((inq) => (
                      <tr key={inq.id} className="hover:bg-secondary/30 transition-colors">
                        <td className="px-4 py-3.5 font-black text-primary">{inq.id}</td>
                        <td className="px-4 py-3.5">
                          <p className="font-bold text-foreground">{inq.sender}</p>
                          <p className="text-[0.6875rem] text-muted-foreground">{inq.email}</p>
                        </td>
                        <td className="px-4 py-3.5">
                          <p className="font-bold text-foreground">{inq.subject}</p>
                          <span className="rounded bg-secondary px-1.5 py-0.5 text-[0.625rem] font-bold text-muted-foreground">
                            {inq.type}
                          </span>
                        </td>
                        <td className="px-4 py-3.5 font-medium text-muted-foreground">{inq.date}</td>
                        <td className="px-4 py-3.5">
                          <select
                            value={inq.status}
                            onChange={(e) => handleUpdateInquiryStatus(inq.id, e.target.value as InquiryItem["status"])}
                            className="rounded-lg border border-border bg-background px-2.5 py-1 text-[0.6875rem] font-extrabold text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                          >
                            <option value="Offen">Offen</option>
                            <option value="In Bearbeitung">In Bearbeitung</option>
                            <option value="Erledigt">Erledigt</option>
                          </select>
                        </td>
                        <td className="px-4 py-3.5 text-right">
                          <button
                            type="button"
                            onClick={() => setViewingInquiry(inq)}
                            className="p-1.5 rounded-lg text-muted-foreground hover:bg-secondary hover:text-primary transition-colors"
                          >
                            <Eye className="h-4 w-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 10: SYSTEM EINSTELLUNGEN */}
          {activeTab === "settings" && (
            <div className="space-y-6 max-w-4xl">
              <div>
                <h1 className="text-xl font-black text-foreground">{t.tabSettings}</h1>
                <p className="text-xs text-muted-foreground">
                  Konfiguration des Administrator-Zugangs, Serververbindungen und Daten-Sicherung.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm space-y-6">
                <h2 className="text-base font-bold text-foreground border-b border-border pb-3">
                  Seeded Administrator Account
                </h2>
                <div className="flex items-center justify-between rounded-xl bg-secondary/50 p-4 border border-border">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary font-black text-white text-sm">
                      SA
                    </div>
                    <div>
                      <p className="text-xs font-black text-foreground">{currentUser.name}</p>
                      <p className="text-[0.6875rem] font-bold text-primary">{currentUser.email}</p>
                    </div>
                  </div>
                  <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-[0.6875rem] font-bold text-emerald-600">
                    Seeded Admin
                  </span>
                </div>

                <div className="space-y-4 pt-4 border-t border-border">
                  <h2 className="text-base font-bold text-foreground">System-Backup & Export</h2>
                  <p className="text-xs text-muted-foreground">
                    Laden Sie einen aktuellen Datenspeicher-Export (Prüfungen, Testzentren, Zertifikate, Partner) als JSON herunter.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      const backupData = JSON.stringify({ exams, materials, trainings, newsList, centers, partners, certificates, inquiries }, null, 2);
                      const blob = new Blob([backupData], { type: "application/json" });
                      const url = URL.createObjectURL(blob);
                      const a = document.createElement("a");
                      a.href = url;
                      a.download = `telc-admin-backup-${new Date().toISOString().slice(0, 10)}.json`;
                      a.click();
                      toast.success("Datenbank-Export erfolgreich heruntergeladen!");
                    }}
                    className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-xs font-bold text-white shadow-md hover:bg-primary-deep transition-all"
                  >
                    <Download className="h-4 w-4" />
                    <span>System-Backup als JSON herunterladen</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleResetSeedData}
                    className="inline-flex items-center gap-2 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-2.5 text-xs font-bold text-red-500 hover:bg-red-500/20 transition-all ml-3"
                  >
                    <RefreshCw className="h-4 w-4" />
                    <span>Daten auf Standard-Musterwerte zurücksetzen</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* MODAL DIALOGS */}
      {/* ------------------------------------------------------------- */}

      {/* EXAM MODAL */}
      {isExamModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="w-full max-w-lg rounded-2xl border border-border bg-card p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-border pb-3">
              <h3 className="text-base font-black text-foreground">
                {editingExam ? `Prüfung bearbeiten (${editingExam.id})` : "Neue Sprachprüfung anlegen"}
              </h3>
              <button type="button" onClick={() => setIsExamModalOpen(false)} className="text-muted-foreground hover:text-foreground">
                <X className="h-5 w-5" />
              </button>
            </div>
            <form onSubmit={handleSaveExam} className="space-y-4 text-xs">
              <div>
                <label className="block font-bold text-foreground mb-1">Prüfungsbezeichnung</label>
                <input
                  type="text"
                  required
                  value={examForm.title}
                  onChange={(e) => setExamForm({ ...examForm, title: e.target.value })}
                  placeholder="z.B. telc Deutsch B2 Beruf"
                  className="w-full rounded-xl border border-border bg-background p-2.5 font-medium text-foreground focus:border-primary focus:outline-none"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-foreground mb-1">Niveaustufe (GER)</label>
                  <select
                    value={examForm.level}
                    onChange={(e) => setExamForm({ ...examForm, level: e.target.value })}
                    className="w-full rounded-xl border border-border bg-background p-2.5 font-bold text-foreground focus:border-primary focus:outline-none"
                  >
                    {["A1", "A2", "B1", "B2", "C1", "C2"].map((l) => (
                      <option key={l} value={l}>
                        {l}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block font-bold text-foreground mb-1">Status</label>
                  <select
                    value={examForm.status}
                    onChange={(e) => setExamForm({ ...examForm, status: e.target.value as ExamItem["status"] })}
                    className="w-full rounded-xl border border-border bg-background p-2.5 font-bold text-foreground focus:border-primary focus:outline-none"
                  >
                    <option value="Aktiv">Aktiv</option>
                    <option value="In Überarbeitung">In Überarbeitung</option>
                    <option value="Archiviert">Archiviert</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block font-bold text-foreground mb-1">Zielgruppe / Fokus</label>
                <input
                  type="text"
                  value={examForm.target}
                  onChange={(e) => setExamForm({ ...examForm, target: e.target.value })}
                  placeholder="z.B. Allgemein, Pflege, BAMF Integrationskurs"
                  className="w-full rounded-xl border border-border bg-background p-2.5 font-medium text-foreground focus:border-primary focus:outline-none"
                />
              </div>
              <div className="flex justify-end gap-2 pt-3 border-t border-border">
                <button
                  type="button"
                  onClick={() => setIsExamModalOpen(false)}
                  className="rounded-xl border border-border bg-secondary px-4 py-2 font-bold text-foreground hover:bg-muted"
                >
                  {t.cancel}
                </button>
                <button
                  type="submit"
                  className="rounded-xl bg-primary px-4 py-2 font-bold text-white shadow-md hover:bg-primary-deep"
                >
                  {t.save}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MATERIAL MODAL */}
      {isMaterialModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="w-full max-w-lg rounded-2xl border border-border bg-card p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-border pb-3">
              <h3 className="text-base font-black text-foreground">Lehrwerk / Material anlegen</h3>
              <button type="button" onClick={() => setIsMaterialModalOpen(false)} className="text-muted-foreground hover:text-foreground">
                <X className="h-5 w-5" />
              </button>
            </div>
            <form onSubmit={handleSaveMaterial} className="space-y-4 text-xs">
              <div>
                <label className="block font-bold text-foreground mb-1">Titel</label>
                <input
                  type="text"
                  required
                  value={materialForm.title}
                  onChange={(e) => setMaterialForm({ ...materialForm, title: e.target.value })}
                  className="w-full rounded-xl border border-border bg-background p-2.5 font-medium text-foreground focus:border-primary focus:outline-none"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-foreground mb-1">Kategorie</label>
                  <select
                    value={materialForm.category}
                    onChange={(e) => setMaterialForm({ ...materialForm, category: e.target.value as MaterialItem["category"] })}
                    className="w-full rounded-xl border border-border bg-background p-2.5 font-bold text-foreground focus:border-primary focus:outline-none"
                  >
                    <option value="Lehrbuch">Lehrbuch</option>
                    <option value="Testheft">Testheft</option>
                    <option value="Übungsbuch">Übungsbuch</option>
                    <option value="Download">Download</option>
                    <option value="Didaktik">Didaktik</option>
                  </select>
                </div>
                <div>
                  <label className="block font-bold text-foreground mb-1">Preis</label>
                  <input
                    type="text"
                    value={materialForm.price}
                    onChange={(e) => setMaterialForm({ ...materialForm, price: e.target.value })}
                    className="w-full rounded-xl border border-border bg-background p-2.5 font-medium text-foreground focus:border-primary focus:outline-none"
                  />
                </div>
              </div>
              <div className="flex justify-end gap-2 pt-3 border-t border-border">
                <button type="button" onClick={() => setIsMaterialModalOpen(false)} className="rounded-xl border border-border bg-secondary px-4 py-2 font-bold text-foreground">
                  {t.cancel}
                </button>
                <button type="submit" className="rounded-xl bg-primary px-4 py-2 font-bold text-white shadow-md">
                  {t.save}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* TRAINING MODAL */}
      {isTrainingModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="w-full max-w-lg rounded-2xl border border-border bg-card p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-border pb-3">
              <h3 className="text-base font-black text-foreground">Seminar / Schulung anlegen</h3>
              <button type="button" onClick={() => setIsTrainingModalOpen(false)} className="text-muted-foreground hover:text-foreground">
                <X className="h-5 w-5" />
              </button>
            </div>
            <form onSubmit={handleSaveTraining} className="space-y-4 text-xs">
              <div>
                <label className="block font-bold text-foreground mb-1">Seminarbezeichnung</label>
                <input
                  type="text"
                  required
                  value={trainingForm.title}
                  onChange={(e) => setTrainingForm({ ...trainingForm, title: e.target.value })}
                  className="w-full rounded-xl border border-border bg-background p-2.5 font-medium text-foreground focus:border-primary focus:outline-none"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-foreground mb-1">Format</label>
                  <select
                    value={trainingForm.format}
                    onChange={(e) => setTrainingForm({ ...trainingForm, format: e.target.value as TrainingItem["format"] })}
                    className="w-full rounded-xl border border-border bg-background p-2.5 font-bold text-foreground focus:border-primary focus:outline-none"
                  >
                    <option value="Online Webinar">Online Webinar</option>
                    <option value="Präsenz">Präsenz</option>
                    <option value="Hybrid">Hybrid</option>
                  </select>
                </div>
                <div>
                  <label className="block font-bold text-foreground mb-1">Datum</label>
                  <input
                    type="date"
                    value={trainingForm.date}
                    onChange={(e) => setTrainingForm({ ...trainingForm, date: e.target.value })}
                    className="w-full rounded-xl border border-border bg-background p-2.5 font-medium text-foreground focus:border-primary focus:outline-none"
                  />
                </div>
              </div>
              <div className="flex justify-end gap-2 pt-3 border-t border-border">
                <button type="button" onClick={() => setIsTrainingModalOpen(false)} className="rounded-xl border border-border bg-secondary px-4 py-2 font-bold text-foreground">
                  {t.cancel}
                </button>
                <button type="submit" className="rounded-xl bg-primary px-4 py-2 font-bold text-white shadow-md">
                  {t.save}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* CENTER MODAL */}
      {isCenterModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="w-full max-w-lg rounded-2xl border border-border bg-card p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-border pb-3">
              <h3 className="text-base font-black text-foreground">
                {editingCenter ? `Prüfungszentrum bearbeiten (${editingCenter.id})` : "Neues Prüfungszentrum registrieren"}
              </h3>
              <button type="button" onClick={() => setIsCenterModalOpen(false)} className="text-muted-foreground hover:text-foreground">
                <X className="h-5 w-5" />
              </button>
            </div>
            <form onSubmit={handleSaveCenter} className="space-y-4 text-xs">
              <div>
                <label className="block font-bold text-foreground mb-1">Name des Zentrums</label>
                <input
                  type="text"
                  required
                  value={centerForm.name}
                  onChange={(e) => setCenterForm({ ...centerForm, name: e.target.value })}
                  placeholder="z.B. telc Partnerakademie Hamburg"
                  className="w-full rounded-xl border border-border bg-background p-2.5 font-medium text-foreground focus:border-primary focus:outline-none"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-foreground mb-1">Stadt</label>
                  <input
                    type="text"
                    required
                    value={centerForm.city}
                    onChange={(e) => setCenterForm({ ...centerForm, city: e.target.value })}
                    placeholder="z.B. Hamburg"
                    className="w-full rounded-xl border border-border bg-background p-2.5 font-medium text-foreground focus:border-primary focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block font-bold text-foreground mb-1">Telefon</label>
                  <input
                    type="text"
                    value={centerForm.phone}
                    onChange={(e) => setCenterForm({ ...centerForm, phone: e.target.value })}
                    placeholder="+49 40 123456"
                    className="w-full rounded-xl border border-border bg-background p-2.5 font-medium text-foreground focus:border-primary focus:outline-none"
                  />
                </div>
              </div>
              <div>
                <label className="block font-bold text-foreground mb-1">Adresse</label>
                <input
                  type="text"
                  value={centerForm.address}
                  onChange={(e) => setCenterForm({ ...centerForm, address: e.target.value })}
                  placeholder="Straße & Hausnummer"
                  className="w-full rounded-xl border border-border bg-background p-2.5 font-medium text-foreground focus:border-primary focus:outline-none"
                />
              </div>
              <div>
                <label className="block font-bold text-foreground mb-1">E-Mail</label>
                <input
                  type="email"
                  value={centerForm.email}
                  onChange={(e) => setCenterForm({ ...centerForm, email: e.target.value })}
                  placeholder="kontakt@zentrum.de"
                  className="w-full rounded-xl border border-border bg-background p-2.5 font-medium text-foreground focus:border-primary focus:outline-none"
                />
              </div>
              <div className="flex items-center gap-2 pt-2">
                <input
                  type="checkbox"
                  id="certifiedCheck"
                  checked={centerForm.isCertified}
                  onChange={(e) => setCenterForm({ ...centerForm, isCertified: e.target.checked })}
                  className="h-4 w-4 rounded border-border text-primary focus:ring-primary"
                />
                <label htmlFor="certifiedCheck" className="font-bold text-foreground">
                  Zertifiziertes telc Partnerzentrum Badge verleihen
                </label>
              </div>
              <div className="flex justify-end gap-2 pt-3 border-t border-border">
                <button type="button" onClick={() => setIsCenterModalOpen(false)} className="rounded-xl border border-border bg-secondary px-4 py-2 font-bold text-foreground">
                  {t.cancel}
                </button>
                <button type="submit" className="rounded-xl bg-primary px-4 py-2 font-bold text-white shadow-md">
                  {t.save}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* PARTNER MODAL */}
      {isPartnerModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="w-full max-w-lg rounded-2xl border border-border bg-card p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-border pb-3">
              <h3 className="text-base font-black text-foreground">Neues Partner-Siegel anlegen</h3>
              <button type="button" onClick={() => setIsPartnerModalOpen(false)} className="text-muted-foreground hover:text-foreground">
                <X className="h-5 w-5" />
              </button>
            </div>
            <form onSubmit={handleSavePartner} className="space-y-4 text-xs">
              <div>
                <label className="block font-bold text-foreground mb-1">Name des Siegel-Inhabers / Partners</label>
                <input
                  type="text"
                  required
                  value={partnerForm.name}
                  onChange={(e) => setPartnerForm({ ...partnerForm, name: e.target.value })}
                  placeholder="z.B. Goethe-Institut e.V."
                  className="w-full rounded-xl border border-border bg-background p-2.5 font-medium text-foreground focus:border-primary focus:outline-none"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-foreground mb-1">Typ</label>
                  <select
                    value={partnerForm.type}
                    onChange={(e) => setPartnerForm({ ...partnerForm, type: e.target.value as PartnerItem["type"] })}
                    className="w-full rounded-xl border border-border bg-background p-2.5 font-bold text-foreground focus:border-primary focus:outline-none"
                  >
                    <option value="Siegel">Siegel</option>
                    <option value="Akkreditierung">Akkreditierung</option>
                    <option value="Kooperation">Kooperation</option>
                  </select>
                </div>
                <div>
                  <label className="block font-bold text-foreground mb-1">Aussteller</label>
                  <input
                    type="text"
                    value={partnerForm.issuer}
                    onChange={(e) => setPartnerForm({ ...partnerForm, issuer: e.target.value })}
                    className="w-full rounded-xl border border-border bg-background p-2.5 font-medium text-foreground focus:border-primary focus:outline-none"
                  />
                </div>
              </div>
              <div className="flex justify-end gap-2 pt-3 border-t border-border">
                <button type="button" onClick={() => setIsPartnerModalOpen(false)} className="rounded-xl border border-border bg-secondary px-4 py-2 font-bold text-foreground">
                  {t.cancel}
                </button>
                <button type="submit" className="rounded-xl bg-primary px-4 py-2 font-bold text-white shadow-md">
                  {t.save}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ISSUE CERTIFICATE MODAL */}
      {isCertModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="w-full max-w-lg rounded-2xl border border-border bg-card p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-border pb-3">
              <h3 className="text-base font-black text-foreground">Offizielles telc Zertifikat ausstellen</h3>
              <button type="button" onClick={() => setIsCertModalOpen(false)} className="text-muted-foreground hover:text-foreground">
                <X className="h-5 w-5" />
              </button>
            </div>
            <form onSubmit={handleIssueCertificate} className="space-y-4 text-xs">
              <div>
                <label className="block font-bold text-foreground mb-1">Name des Kandidaten / der Kandidatin</label>
                <input
                  type="text"
                  required
                  value={certForm.candidateName}
                  onChange={(e) => setCertForm({ ...certForm, candidateName: e.target.value })}
                  placeholder="Nachname, Vorname"
                  className="w-full rounded-xl border border-border bg-background p-2.5 font-medium text-foreground focus:border-primary focus:outline-none"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-foreground mb-1">Prüfungsbezeichnung</label>
                  <input
                    type="text"
                    required
                    value={certForm.examTitle}
                    onChange={(e) => setCertForm({ ...certForm, examTitle: e.target.value })}
                    placeholder="telc Deutsch B2"
                    className="w-full rounded-xl border border-border bg-background p-2.5 font-medium text-foreground focus:border-primary focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block font-bold text-foreground mb-1">Niveau</label>
                  <select
                    value={certForm.level}
                    onChange={(e) => setCertForm({ ...certForm, level: e.target.value })}
                    className="w-full rounded-xl border border-border bg-background p-2.5 font-bold text-foreground focus:border-primary focus:outline-none"
                  >
                    {["A1", "A2", "B1", "B2", "C1", "C2"].map((l) => (
                      <option key={l} value={l}>
                        {l}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <label className="block font-bold text-foreground mb-1">Bewertung / Gesamtpunktzahl</label>
                <input
                  type="text"
                  value={certForm.overallScore}
                  onChange={(e) => setCertForm({ ...certForm, overallScore: e.target.value })}
                  placeholder="Sehr gut (288 / 300 Punkte)"
                  className="w-full rounded-xl border border-border bg-background p-2.5 font-medium text-foreground focus:border-primary focus:outline-none"
                />
              </div>
              <div className="flex justify-end gap-2 pt-3 border-t border-border">
                <button type="button" onClick={() => setIsCertModalOpen(false)} className="rounded-xl border border-border bg-secondary px-4 py-2 font-bold text-foreground">
                  {t.cancel}
                </button>
                <button type="submit" className="rounded-xl bg-primary px-4 py-2 font-bold text-white shadow-md">
                  {t.issueCertBtn}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* VIEW CERTIFICATE MODAL */}
      {viewingCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="w-full max-w-lg rounded-2xl border border-border bg-card p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-border pb-3">
              <h3 className="text-base font-black text-foreground">Zertifikats-Details & Echtheitsnachweis</h3>
              <button type="button" onClick={() => setViewingCert(null)} className="text-muted-foreground hover:text-foreground">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="rounded-2xl border-2 border-primary/20 bg-primary/5 p-6 space-y-4 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white font-black text-xl shadow-lg shadow-primary/30">
                t
              </div>
              <div>
                <p className="text-[0.6875rem] font-bold text-primary uppercase tracking-widest">Offizielles telc Zertifikat</p>
                <h4 className="text-lg font-black text-foreground mt-1">{viewingCert.candidateName}</h4>
                <p className="text-xs font-bold text-muted-foreground">{viewingCert.examTitle} ({viewingCert.level})</p>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs border-t border-border pt-4 text-left">
                <div>
                  <span className="text-muted-foreground block text-[0.625rem]">Zertifikats-Code:</span>
                  <span className="font-black text-primary">{viewingCert.code}</span>
                </div>
                <div>
                  <span className="text-muted-foreground block text-[0.625rem]">Ausstellungsdatum:</span>
                  <span className="font-bold text-foreground">{viewingCert.issueDate}</span>
                </div>
                <div>
                  <span className="text-muted-foreground block text-[0.625rem]">Ergebnis:</span>
                  <span className="font-bold text-foreground">{viewingCert.overallScore}</span>
                </div>
                <div>
                  <span className="text-muted-foreground block text-[0.625rem]">Validitäts-Status:</span>
                  <span className={`font-black ${viewingCert.status === "Gültig" ? "text-emerald-600" : "text-red-500"}`}>
                    {viewingCert.status}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex justify-end pt-2">
              <button type="button" onClick={() => setViewingCert(null)} className="rounded-xl bg-secondary px-4 py-2 text-xs font-bold text-foreground">
                Schließen
              </button>
            </div>
          </div>
        </div>
      )}

      {/* VIEW INQUIRY MODAL */}
      {viewingInquiry && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="w-full max-w-lg rounded-2xl border border-border bg-card p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-border pb-3">
              <h3 className="text-base font-black text-foreground">Anfrage {viewingInquiry.id}</h3>
              <button type="button" onClick={() => setViewingInquiry(null)} className="text-muted-foreground hover:text-foreground">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="space-y-3 text-xs">
              <div className="grid grid-cols-2 gap-2 bg-secondary/50 p-3 rounded-xl">
                <div>
                  <span className="text-muted-foreground block text-[0.625rem]">Absender:</span>
                  <span className="font-bold text-foreground">{viewingInquiry.sender}</span>
                </div>
                <div>
                  <span className="text-muted-foreground block text-[0.625rem]">E-Mail:</span>
                  <span className="font-bold text-foreground">{viewingInquiry.email}</span>
                </div>
                {viewingInquiry.phone && (
                  <div>
                    <span className="text-muted-foreground block text-[0.625rem]">Telefon:</span>
                    <span className="font-bold text-foreground">{viewingInquiry.phone}</span>
                  </div>
                )}
                <div>
                  <span className="text-muted-foreground block text-[0.625rem]">Datum:</span>
                  <span className="font-bold text-foreground">{viewingInquiry.date}</span>
                </div>
              </div>

              <div>
                <span className="text-muted-foreground block text-[0.625rem] mb-1">Nachricht:</span>
                <p className="rounded-xl border border-border p-3.5 leading-relaxed bg-background text-foreground font-medium">
                  {viewingInquiry.message}
                </p>
              </div>
            </div>
            <div className="flex justify-end pt-2">
              <button type="button" onClick={() => setViewingInquiry(null)} className="rounded-xl bg-secondary px-4 py-2 text-xs font-bold text-foreground">
                Schließen
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
