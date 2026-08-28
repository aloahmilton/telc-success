import { connectToDatabase } from "./db";
import { CertificateRecord } from "../models/CertificateRecord";
import { ExamCenter } from "../models/ExamCenter";

const initialCenters = [
  {
    name: "vhs Frankfurt am Main - Sonnemannstraße",
    city: "Frankfurt am Main",
    zip: "60314",
    address: "Sonnemannstraße 13",
    phone: "+49 (0)69 212 38000",
    email: "vhs@frankfurt.de",
    website: "www.vhs.frankfurt.de",
    nextExams: ["telc Deutsch B1 (12.09.2026)", "telc Deutsch B2 (24.09.2026)", "telc C1 Medizin (05.10.2026)"],
    accredited: true,
  },
  {
    name: "telc Training & Prüfungszentrum Bad Homburg",
    city: "Bad Homburg",
    zip: "61352",
    address: "Basler Straße 7",
    phone: "+49 (0)6172 4567-0",
    email: "pruefungen@telc.net",
    website: "www.telc.net",
    nextExams: ["telc Deutsch A1–C2 (Wöchentlich)", "telc C1 Hochschule (18.09.2026)"],
    accredited: true,
  },
  {
    name: "Volkshochschule Berlin Mitte",
    city: "Berlin",
    zip: "10178",
    address: "Linienstraße 162",
    phone: "+49 (0)30 9018 37411",
    email: "vhs@berlin-mitte.de",
    website: "www.vhs-berlin.de",
    nextExams: ["telc Deutsch B1/B2 Pflege (15.09.2026)", "telc B2 (28.09.2026)"],
    accredited: true,
  },
  {
    name: "Münchner Volkshochschule (MVHS)",
    city: "München",
    zip: "80331",
    address: "Einsteinstraße 28",
    phone: "+49 (0)89 48006-0",
    email: "info@mvhs.de",
    website: "www.mvhs.de",
    nextExams: ["telc Deutsch A2 (10.09.2026)", "telc Deutsch C1 Hochschule (20.09.2026)"],
    accredited: true,
  },
];

const initialCertificates = [
  {
    certCode: "TELC-2026-89412",
    candidateName: "Mustermann, Anna",
    examTitle: "telc Deutsch B2 (Zertifikat Deutsch)",
    level: "B2",
    issueDate: new Date("2026-06-15"),
    overallScore: "Sehr gut (288 / 300 Punkte)",
    isValid: true,
  },
  {
    certCode: "TELC-2026-99102",
    candidateName: "Schmidt, Michael",
    examTitle: "telc Deutsch C1 Medizin",
    level: "C1",
    issueDate: new Date("2026-07-20"),
    overallScore: "Gut (264 / 300 Punkte)",
    isValid: true,
  },
];

async function seedDatabase() {
  try {
    console.log("Verbinde mit MongoDB Atlas...");
    await connectToDatabase();

    console.log("Befülle Prüfungszentren...");
    await ExamCenter.deleteMany({});
    await ExamCenter.insertMany(initialCenters);

    console.log("Befülle Zertifikate...");
    await CertificateRecord.deleteMany({});
    await CertificateRecord.insertMany(initialCertificates);

    console.log("✅ MongoDB Atlas erfolgreich befüllt!");
    process.exit(0);
  } catch (error) {
    console.error("Fehler beim Befüllen:", error);
    process.exit(1);
  }
}

seedDatabase();
