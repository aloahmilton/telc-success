import { connectToDatabase } from "@/lib/db";
import { AdminUser } from "@/models/AdminUser";
import { CertificateRecord } from "@/models/CertificateRecord";
import { ContactInquiry } from "@/models/ContactInquiry";
import { Exam } from "@/models/Exam";
import { ExamCenter } from "@/models/ExamCenter";
import { Material } from "@/models/Material";
import { NewsItemModel } from "@/models/NewsItemModel";
import { PartnerSeal } from "@/models/PartnerSeal";
import { Training } from "@/models/Training";

export const INITIAL_EXAMS = [
  { code: "TELC-A1", title: "telc Deutsch A1 (Start Deutsch 1)", level: "A1", target: "Allgemein", candidates: "12.450", status: "Aktiv" as const },
  { code: "TELC-A2", title: "telc Deutsch A2 (Start Deutsch 2)", level: "A2", target: "Allgemein", candidates: "18.300", status: "Aktiv" as const },
  { code: "TELC-B1", title: "telc Deutsch B1 (Zertifikat Deutsch)", level: "B1", target: "Allgemein / BAMF", candidates: "48.200", status: "Aktiv" as const },
  { code: "TELC-B2", title: "telc Deutsch B2", level: "B2", target: "Beruf & Studium", candidates: "32.100", status: "Aktiv" as const },
  { code: "TELC-C1-MED", title: "telc Deutsch C1 Medizin", level: "C1", target: "Ärztinnen & Ärzte", candidates: "8.900", status: "Aktiv" as const },
  { code: "TELC-C2", title: "telc Deutsch C2", level: "C2", target: "Hochschule & Forschung", candidates: "3.400", status: "In Überarbeitung" as const },
];

export const INITIAL_MATERIALS = [
  { code: "MAT-01", title: "Einfach zum Studium! Deutsch C1 Hochschule", category: "Lehrbuch" as const, level: "C1", price: "24,90 €", isbn: "978-3-946414-22-2", status: "Aktiv" },
  { code: "MAT-02", title: "telc Deutsch B2 Modelltest 1 (Übungstest)", category: "Testheft" as const, level: "B2", price: "12,50 €", isbn: "978-3-946414-05-5", status: "Aktiv" },
  { code: "MAT-03", title: "Digitales Audioset & Transkripte B1", category: "Download" as const, level: "B1", price: "Kostenlos", isbn: "N/A - Digital", status: "Aktiv" },
  { code: "MAT-04", title: "Fachsprache Pflege B1-B2 Zusatzheft", category: "Übungsbuch" as const, level: "B2", price: "18,90 €", isbn: "978-3-946414-88-1", status: "Aktiv" },
];

export const INITIAL_TRAININGS = [
  { code: "TRN-101", title: "telc Prüferqualifizierung Deutsch B1-B2", target: "Lehrkräfte & Prüfer", format: "Online Webinar" as const, date: "2026-09-12", seats: "14 / 20 Frei", status: "Buchbar" },
  { code: "TRN-102", title: "Methodik & Didaktik in BAMF Integrationskursen", target: "DaF/DaZ Dozenten", format: "Präsenz" as const, date: "2026-09-25", seats: "0 / 25 (Voll)", status: "Ausgebucht" },
  { code: "TRN-103", title: "Bewertung des schriftlichen Ausdrucks C1", target: "Lizenzierte Prüfer", format: "Hybrid" as const, date: "2026-10-05", seats: "8 / 15 Frei", status: "Buchbar" },
];

export const INITIAL_NEWS = [
  { code: "NEWS-1", title: "Neue telc Prüfungsordnung 2026 veröffentlicht", category: "Prüfungen", date: "2026-08-01", status: "Veröffentlicht" as const },
  { code: "NEWS-2", title: "Erweiterung des Prüfungszentren-Netzwerks in Süddeutschland", category: "Netzwerk", date: "2026-07-20", status: "Veröffentlicht" as const },
  { code: "NEWS-3", title: "Digitales Übungsmaterial für B2 Berufsdeutsch verfügbar", category: "Lehrmaterialien", date: "2026-07-15", status: "Entwurf" as const },
];

export const INITIAL_CENTERS = [
  { name: "telc Hauptprüfungszentrum Frankfurt", city: "Frankfurt am Main", zip: "60313", address: "Bleichstraße 1", phone: "+49 69 956244-0", email: "frankfurt@telc.net", website: "https://www.telc.net", nextExams: ["A1", "A2", "B1", "B2", "C1", "C2"], accredited: true },
  { name: "Sprachakademie Berlin Mitte", city: "Berlin", zip: "10178", address: "Alexanderplatz 7", phone: "+49 30 240011-0", email: "berlin@telc.net", website: "https://berlin.telc.net", nextExams: ["A1", "B1", "B2", "C1"], accredited: true },
  { name: "Zertifiziertes Prüfungszentrum München", city: "München", zip: "80331", address: "Sonnenstraße 14", phone: "+49 89 551230-0", email: "muenchen@telc.net", website: "https://muenchen.telc.net", nextExams: ["A2", "B1", "B2"], accredited: true },
  { name: "Hanseatisches Kolleg Hamburg", city: "Hamburg", zip: "20095", address: "Mönckebergstraße 20", phone: "+49 40 334410-0", email: "hamburg@telc.net", website: "https://hamburg.telc.net", nextExams: ["B1", "B2", "C1"], accredited: false },
];

export const INITIAL_PARTNERS = [
  { code: "PTR-01", name: "BAMF Bundesamt für Migration", type: "Akkreditierung" as const, issuer: "Bundesrepublik Deutschland", verified: true },
  { code: "PTR-02", name: "ALTE Association of Language Testers in Europe", type: "Siegel" as const, issuer: "ALTE Council", verified: true },
  { code: "PTR-03", name: "HRK Hochschulrektorenkonferenz", type: "Kooperation" as const, issuer: "Deutschland", verified: true },
];

export const INITIAL_CERTS = [
  { certCode: "TELC-2026-B2-88412", candidateName: "Mustermann, Anna", examTitle: "telc Deutsch B2", level: "B2", issueDate: new Date("2026-01-15"), overallScore: "Sehr gut (288 / 300)", isValid: true },
  { certCode: "TELC-2026-C1-44129", candidateName: "Yilmaz, Mehmet", examTitle: "telc Deutsch C1 Hochschule", level: "C1", issueDate: new Date("2026-02-02"), overallScore: "Gut (264 / 300)", isValid: true },
  { certCode: "TELC-2025-B1-10492", candidateName: "Kowalski, Jan", examTitle: "telc Deutsch B1 (Zertifikat Deutsch)", level: "B1", issueDate: new Date("2025-11-20"), overallScore: "Befriedigend (220 / 300)", isValid: true },
  { certCode: "TELC-2025-A2-00911", candidateName: "Schmidt, Lukas", examTitle: "telc Deutsch A2", level: "A2", issueDate: new Date("2025-08-10"), overallScore: "Ungültig erklärt", isValid: false },
];

export const INITIAL_INQUIRIES = [
  { name: "Dr. Thomas Weber", email: "tweber@klinikum-ffm.de", topic: "Kontaktanfrage", message: "Guten Tag, wir möchten gerne 15 Ärztinnen für die C1 Medizin Prüfung im Mai anmelden.", status: "Neu" as const },
  { name: "Elena Rostova", email: "elena.rostova@email.de", topic: "Kandidaten-Support", message: "Ich habe mein B2 Zertifikat aus 2024 verloren. Wie erhalte ich ein Ersatzdokument?", status: "In Bearbeitung" as const },
  { name: "Volkshochschule Stuttgart", email: "info@vhs-stuttgart.de", topic: "Prüfungsanmeldung", message: "Wir bitten um Überprüfung unserer Unterlagen für die telc Lizenzierung.", status: "Erledigt" as const },
];

export async function seedDatabaseIfEmpty() {
  try {
    await connectToDatabase();

    // 1. Seed Primary Admin User
    const seededEmail = "telcsuccess@gmail.com";
    const existingAdmin = await AdminUser.findOne({ email: seededEmail });
    if (!existingAdmin) {
      await AdminUser.create({
        email: seededEmail,
        passwordHash: "princessmabus1", // Seeded primary credential
        name: "Super Administrator",
        role: "Superadmin",
      });
      console.log(`✅ Seeded primary admin user: ${seededEmail}`);
    }

    // 2. Seed Exams
    const examCount = await Exam.countDocuments();
    if (examCount === 0) {
      await Exam.insertMany(INITIAL_EXAMS);
      console.log("✅ Seeded initial Exam catalog to MongoDB");
    }

    // 3. Seed Materials
    const matCount = await Material.countDocuments();
    if (matCount === 0) {
      await Material.insertMany(INITIAL_MATERIALS);
      console.log("✅ Seeded initial Materials to MongoDB");
    }

    // 4. Seed Trainings
    const trnCount = await Training.countDocuments();
    if (trnCount === 0) {
      await Training.insertMany(INITIAL_TRAININGS);
      console.log("✅ Seeded initial Trainings to MongoDB");
    }

    // 5. Seed News
    const newsCount = await NewsItemModel.countDocuments();
    if (newsCount === 0) {
      await NewsItemModel.insertMany(INITIAL_NEWS);
      console.log("✅ Seeded initial News items to MongoDB");
    }

    // 6. Seed Centers
    const centerCount = await ExamCenter.countDocuments();
    if (centerCount === 0) {
      await ExamCenter.insertMany(INITIAL_CENTERS);
      console.log("✅ Seeded initial ExamCenters to MongoDB");
    }

    // 7. Seed Partners
    const partnerCount = await PartnerSeal.countDocuments();
    if (partnerCount === 0) {
      await PartnerSeal.insertMany(INITIAL_PARTNERS);
      console.log("✅ Seeded initial PartnerSeals to MongoDB");
    }

    // 8. Seed Certificates
    const certCount = await CertificateRecord.countDocuments();
    if (certCount === 0) {
      await CertificateRecord.insertMany(INITIAL_CERTS);
      console.log("✅ Seeded initial CertificateRecords to MongoDB");
    }

    // 9. Seed Inquiries
    const inqCount = await ContactInquiry.countDocuments();
    if (inqCount === 0) {
      await ContactInquiry.insertMany(INITIAL_INQUIRIES);
      console.log("✅ Seeded initial ContactInquiries to MongoDB");
    }
  } catch (err) {
    console.warn("MongoDB Seed Note (using fallback data if DB offline):", err);
  }
}
