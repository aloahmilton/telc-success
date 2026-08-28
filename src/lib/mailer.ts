import nodemailer from "nodemailer";

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

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: {
      user,
      pass,
    },
  });
}

const adminEmail = process.env["ADMIN_EMAIL"] || process.env["SMTP_USER"] || "info@telcsuccess.org";

/**
 * Send automated email notification for new Contact Form Inquiries
 */
export async function sendContactNotification(data: {
  name: string;
  email: string;
  topic: string;
  message: string;
}) {
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
    console.log("Simulierte E-Mail-Benachrichtigung an Admin:", { to: adminEmail, subject, data });
    return;
  }

  try {
    await transporter.sendMail({
      from: `"telc System" <${process.env["SMTP_USER"]}>`,
      to: adminEmail,
      replyTo: data.email,
      subject,
      html: htmlContent,
    });
    console.log("✅ Admin-Benachrichtigung via Google SMTP gesendet an:", adminEmail);
  } catch (error) {
    console.error("❌ Fehler beim Senden der E-Mail via Google SMTP:", error);
  }
}

/**
 * Send automated email notification for candidate B2 registrations & service requests
 */
export async function sendCandidateSupportNotification(data: {
  candidateName: string;
  email: string;
  phone?: string;
  targetExam?: string;
  requestedServices?: string[];
  notes?: string;
}) {
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
    console.log("Simulierte B2 Anmelde-E-Mail an Admin:", { to: adminEmail, subject, data });
    return;
  }

  try {
    await transporter.sendMail({
      from: `"telc B2 Support" <${process.env["SMTP_USER"]}>`,
      to: adminEmail,
      replyTo: data.email,
      subject,
      html: htmlContent,
    });
    console.log("✅ B2 Anmelde-Benachrichtigung via Google SMTP gesendet an:", adminEmail);
  } catch (error) {
    console.error("❌ Fehler beim Senden der E-Mail via Google SMTP:", error);
  }
}
