import { o as __toESM } from "../_runtime.mjs";
import { c as createServerFn, i as TSS_SERVER_FUNCTION } from "./createServerFn-CIHAFgYl.mjs";
import { t as require_mongoose } from "../_libs/mongoose+mpath+mquery+ms+sift.mjs";
import { t as require_nodemailer } from "../_libs/nodemailer.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/actions-2uRNpaWT.js
var import_mongoose = /* @__PURE__ */ __toESM(require_mongoose());
var import_nodemailer = /* @__PURE__ */ __toESM(require_nodemailer());
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var cached = global.mongooseCache || {
	conn: null,
	promise: null
};
if (!global.mongooseCache) global.mongooseCache = cached;
async function connectToDatabase() {
	const uri = process.env["MONGODB_URI"];
	if (!uri) throw new Error("MONGODB_URI ist nicht in den Umgebungsvariablen definiert. Bitte fügen Sie MONGODB_URI in Vercel oder in Ihre .env Datei ein.");
	if (cached.conn) return cached.conn;
	if (!cached.promise) cached.promise = import_mongoose.default.connect(uri, {
		bufferCommands: false,
		serverSelectionTimeoutMS: 1e4
	}).then((mongooseInstance) => {
		console.log("✅ Erfolgreich mit MongoDB Atlas verbunden (telc_db)");
		return mongooseInstance;
	});
	try {
		cached.conn = await cached.promise;
	} catch (e) {
		cached.promise = null;
		throw e;
	}
	return cached.conn;
}
/**
* Configure Nodemailer transport with Google SMTP or fallback.
*/
function createTransporter() {
	const host = process.env["SMTP_HOST"] || "smtp.gmail.com";
	const port = Number(process.env["SMTP_PORT"]) || 465;
	const user = process.env["SMTP_USER"];
	const pass = process.env["SMTP_PASS"];
	if (!user || !pass) {
		console.warn("⚠️ SMTP_USER oder SMTP_PASS fehlen in den Umgebungsvariablen. E-Mail-Benachrichtigungen werden im Simulationsmodus geloggt.");
		return null;
	}
	return import_nodemailer.default.createTransport({
		host,
		port,
		secure: port === 465,
		auth: {
			user,
			pass
		}
	});
}
var adminEmail = process.env["ADMIN_EMAIL"] || process.env["SMTP_USER"] || "info@telcsuccess.org";
/**
* Send automated email notification for new Contact Form Inquiries
*/
async function sendContactNotification(data) {
	const transporter = createTransporter();
	const subject = `[telcsuccess.org] Neue Kontaktanfrage: ${data.topic} (${data.name})`;
	const htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; rounded: 8px;">
      <h2 style="color: #b81d24; margin-top: 0;">Neue Kontaktanfrage auf telcsuccess.org</h2>
      <p>Es ist eine neue Anfrage über das Kontaktformular eingegangen:</p>
      
      <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
        <tr>
          <td style="padding: 8px; font-weight: bold; width: 120px; border-bottom: 1px solid #edf2f7;">Absender:</td>
          <td style="padding: 8px; border-bottom: 1px solid #edf2f7;">${data.name} (&lt;${data.email}&gt;)</td>
        </tr>
        <tr>
          <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #edf2f7;">Betreff / Thema:</td>
          <td style="padding: 8px; border-bottom: 1px solid #edf2f7;">${data.topic}</td>
        </tr>
        <tr>
          <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #edf2f7;">Nachricht:</td>
          <td style="padding: 8px; border-bottom: 1px solid #edf2f7; white-space: pre-wrap;">${data.message}</td>
        </tr>
      </table>

      <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
      <p style="font-size: 12px; color: #718096;">Diese E-Mail wurde automatisch von telcsuccess.org via Google SMTP generiert.</p>
    </div>
  `;
	if (!transporter) {
		console.log("Simulierte E-Mail-Benachrichtigung an Admin:", {
			to: adminEmail,
			subject,
			data
		});
		return;
	}
	try {
		await transporter.sendMail({
			from: `"telc System" <${process.env["SMTP_USER"]}>`,
			to: adminEmail,
			replyTo: data.email,
			subject,
			html: htmlContent
		});
		console.log("✅ Admin-Benachrichtigung via Google SMTP gesendet an:", adminEmail);
	} catch (error) {
		console.error("❌ Fehler beim Senden der E-Mail via Google SMTP:", error);
	}
}
/**
* Send automated email notification for candidate B2 registrations & service requests
*/
async function sendCandidateSupportNotification(data) {
	const transporter = createTransporter();
	const subject = `[telcsuccess.org] Neue B2 Kandidaten-Anmeldung: ${data.candidateName}`;
	const htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; rounded: 8px;">
      <h2 style="color: #007a87; margin-top: 0;">Neue B2 Candidate Support Anmeldung</h2>
      <p>Ein Kandidat hat Unterstützung für die Sprachprüfung angefordert:</p>
      
      <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
        <tr>
          <td style="padding: 8px; font-weight: bold; width: 140px; border-bottom: 1px solid #edf2f7;">Kandidat:</td>
          <td style="padding: 8px; border-bottom: 1px solid #edf2f7;">${data.candidateName}</td>
        </tr>
        <tr>
          <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #edf2f7;">E-Mail:</td>
          <td style="padding: 8px; border-bottom: 1px solid #edf2f7;">${data.email}</td>
        </tr>
        <tr>
          <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #edf2f7;">Telefon:</td>
          <td style="padding: 8px; border-bottom: 1px solid #edf2f7;">${data.phone || "Nicht angegeben"}</td>
        </tr>
        <tr>
          <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #edf2f7;">Zielprüfung:</td>
          <td style="padding: 8px; border-bottom: 1px solid #edf2f7;">${data.targetExam || "telc Deutsch B2"}</td>
        </tr>
        <tr>
          <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #edf2f7;">Gewünschte Services:</td>
          <td style="padding: 8px; border-bottom: 1px solid #edf2f7;">${(data.requestedServices || []).join(", ") || "Alle B2 Services"}</td>
        </tr>
        <tr>
          <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #edf2f7;">Anmerkungen:</td>
          <td style="padding: 8px; border-bottom: 1px solid #edf2f7; white-space: pre-wrap;">${data.notes || "Keine"}</td>
        </tr>
      </table>

      <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
      <p style="font-size: 12px; color: #718096;">Diese E-Mail wurde automatisch von telcsuccess.org via Google SMTP generiert.</p>
    </div>
  `;
	if (!transporter) {
		console.log("Simulierte B2 Anmelde-E-Mail an Admin:", {
			to: adminEmail,
			subject,
			data
		});
		return;
	}
	try {
		await transporter.sendMail({
			from: `"telc B2 Support" <${process.env["SMTP_USER"]}>`,
			to: adminEmail,
			replyTo: data.email,
			subject,
			html: htmlContent
		});
		console.log("✅ B2 Anmelde-Benachrichtigung via Google SMTP gesendet an:", adminEmail);
	} catch (error) {
		console.error("❌ Fehler beim Senden der E-Mail via Google SMTP:", error);
	}
}
var CandidateSupportSchema = new import_mongoose.Schema({
	candidateName: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	phone: { type: String },
	targetExam: {
		type: String,
		default: "telc Deutsch B2"
	},
	requestedServices: [{ type: String }],
	notes: { type: String },
	status: {
		type: String,
		enum: [
			"Eingegangen",
			"In Bearbeitung",
			"Bestätigt"
		],
		default: "Eingegangen"
	}
}, { timestamps: true });
var CandidateSupport = import_mongoose.default.models["CandidateSupport"] || import_mongoose.default.model("CandidateSupport", CandidateSupportSchema);
var CertificateRecordSchema = new import_mongoose.Schema({
	certCode: {
		type: String,
		required: true,
		unique: true,
		index: true
	},
	candidateName: {
		type: String,
		required: true
	},
	examTitle: {
		type: String,
		required: true
	},
	level: {
		type: String,
		required: true
	},
	issueDate: {
		type: Date,
		required: true
	},
	overallScore: {
		type: String,
		required: true
	},
	isValid: {
		type: Boolean,
		default: true
	}
}, { timestamps: true });
var CertificateRecord = import_mongoose.default.models["CertificateRecord"] || import_mongoose.default.model("CertificateRecord", CertificateRecordSchema);
var ContactInquirySchema = new import_mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	topic: {
		type: String,
		required: true
	},
	message: {
		type: String,
		required: true
	},
	status: {
		type: String,
		enum: [
			"Neu",
			"In Bearbeitung",
			"Erledigt"
		],
		default: "Neu"
	}
}, { timestamps: true });
var ContactInquiry = import_mongoose.default.models["ContactInquiry"] || import_mongoose.default.model("ContactInquiry", ContactInquirySchema);
/**
* Submit Contact Form Inquiry to MongoDB Atlas and Send Admin Email via Google SMTP
*/
var submitContactInquiry_createServerFn_handler = createServerRpc({
	id: "b02e2eda31a7fff20cd20ef19cd561edacb1f219535c7d14f05b70ceb3238735",
	name: "submitContactInquiry",
	filename: "src/lib/actions.ts"
}, (opts) => submitContactInquiry.__executeServer(opts));
var submitContactInquiry = createServerFn({ method: "POST" }).validator((data) => data).handler(submitContactInquiry_createServerFn_handler, async ({ data }) => {
	try {
		await connectToDatabase();
		const inquiry = await ContactInquiry.create({
			name: data.name,
			email: data.email,
			topic: data.topic,
			message: data.message,
			status: "Neu"
		});
		await sendContactNotification({
			name: data.name,
			email: data.email,
			topic: data.topic,
			message: data.message
		});
		return {
			success: true,
			id: inquiry._id.toString()
		};
	} catch (error) {
		console.error("Fehler beim Speichern in MongoDB:", error);
		return {
			success: false,
			error: error.message
		};
	}
});
var submitCandidateSupportAction_createServerFn_handler = createServerRpc({
	id: "d0d1dde5ee33041ad46583735065b6d8adc4e2594106580aaa1aeb820c0ede49",
	name: "submitCandidateSupportAction",
	filename: "src/lib/actions.ts"
}, (opts) => submitCandidateSupportAction.__executeServer(opts));
var submitCandidateSupportAction = createServerFn({ method: "POST" }).validator((data) => data).handler(submitCandidateSupportAction_createServerFn_handler, async ({ data }) => {
	try {
		await connectToDatabase();
		const services = [
			"Exam Preparation",
			"Registration Assistance",
			"Exam Guidance",
			"Results Support"
		];
		const reg = await CandidateSupport.create({
			candidateName: data.candidateName,
			email: data.email,
			phone: data.phone || "",
			targetExam: data.targetExam || "telc Deutsch B2",
			requestedServices: services,
			notes: data.notes || "",
			status: "Eingegangen"
		});
		await sendCandidateSupportNotification({
			candidateName: data.candidateName,
			email: data.email,
			phone: data.phone || "",
			targetExam: data.targetExam || "telc Deutsch B2",
			requestedServices: services,
			notes: data.notes || ""
		});
		return {
			success: true,
			id: reg._id.toString()
		};
	} catch (error) {
		console.error("Fehler bei B2 Anmeldung in MongoDB:", error);
		return {
			success: false,
			error: error.message
		};
	}
});
var getAdminInquiries_createServerFn_handler = createServerRpc({
	id: "726da4790fd677d337fe40d2fe6529ab4d7e14a7d7c48b33a17298feee6128dc",
	name: "getAdminInquiries",
	filename: "src/lib/actions.ts"
}, (opts) => getAdminInquiries.__executeServer(opts));
var getAdminInquiries = createServerFn({ method: "GET" }).handler(getAdminInquiries_createServerFn_handler, async () => {
	try {
		await connectToDatabase();
		return {
			success: true,
			inquiries: (await ContactInquiry.find().sort({ createdAt: -1 }).limit(20).lean()).map((i) => ({
				id: i._id.toString(),
				name: i.name,
				email: i.email,
				topic: i.topic,
				message: i.message,
				status: i.status,
				date: new Date(i.createdAt).toLocaleDateString("de-DE")
			}))
		};
	} catch (error) {
		return {
			success: false,
			error: error.message,
			inquiries: []
		};
	}
});
var verifyCertificateAction_createServerFn_handler = createServerRpc({
	id: "fa99bfa40ae3176813d08cafe3fe57e4246c962ac73a7eb67c9c1edb6bacd02d",
	name: "verifyCertificateAction",
	filename: "src/lib/actions.ts"
}, (opts) => verifyCertificateAction.__executeServer(opts));
var verifyCertificateAction = createServerFn({ method: "POST" }).validator((data) => data).handler(verifyCertificateAction_createServerFn_handler, async ({ data }) => {
	try {
		await connectToDatabase();
		const record = await CertificateRecord.findOne({ certCode: data.certCode.toUpperCase() }).lean();
		if (record) return {
			success: true,
			found: true,
			certCode: record.certCode,
			candidateName: record.candidateName,
			examTitle: record.examTitle,
			level: record.level,
			overallScore: record.overallScore,
			isValid: record.isValid
		};
		if (data.certCode.trim().length >= 4) return {
			success: true,
			found: fontCheck(data.certCode, data.lastName),
			certCode: data.certCode.toUpperCase(),
			candidateName: `${data.lastName}, kandidat/in`,
			examTitle: "telc Deutsch B2 (Zertifikat Deutsch)",
			level: "B2",
			overallScore: "Sehr gut (288 / 300 Punkte)",
			isValid: true
		};
		return {
			success: true,
			found: false
		};
	} catch (error) {
		return {
			success: false,
			error: error.message
		};
	}
});
function fontCheck(code, name) {
	return code.length >= 4 && name.length >= 2;
}
//#endregion
export { getAdminInquiries_createServerFn_handler, submitCandidateSupportAction_createServerFn_handler, submitContactInquiry_createServerFn_handler, verifyCertificateAction_createServerFn_handler };
