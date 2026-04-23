import type { APIRoute } from "astro";
import { Resend } from "resend";

// Mark as SSR — only this route runs server-side; pages stay static.
export const prerender = false;

// Pin to Frankfurt for EU data residency.
export const config = { regions: ["fra1"] };

/** Friendly human labels for known form field names. */
const LABELS: Record<string, string> = {
  Name: "Name",
  "E-Mail": "E-Mail",
  Telefon: "Telefon",
  Name_des_Kindes: "Name des Kindes",
  Geburtsdatum: "Geburtsdatum",
  Eintritt: "Gewünschter Eintritt",
  Nachricht: "Nachricht",
  Anrede: "Anrede",
  Vorname: "Vorname",
  Nachname: "Nachname",
  Strasse: "Straße und Hausnummer",
  PLZ: "Postleitzahl",
  Ort: "Ort",
  IBAN: "IBAN",
  BIC: "BIC",
  Betrag: "Betrag (€)",
  Spendenart: "Art der Spende",
  Spendenquittung: "Spendenquittung erwünscht",
};

/** Form registry: which subjects & sender names per form type. */
const FORMS = {
  kennenlernen: {
    subject: "Neue Kennenlern-Anfrage",
    from: "KIDS Website <website@kids-bonn.de>",
  },
  spenden: {
    subject: "Neue Spendenanfrage",
    from: "KIDS Website <website@kids-bonn.de>",
  },
  kontakt: {
    subject: "Neue Kontaktanfrage",
    from: "KIDS Website <website@kids-bonn.de>",
  },
} as const;

type FormType = keyof typeof FORMS;

const escapeHtml = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const renderText = (entries: [string, string][]) =>
  entries.map(([k, v]) => `${LABELS[k] ?? k}: ${v}`).join("\n");

const renderHtml = (entries: [string, string][]) => `
  <table style="border-collapse:collapse;font-family:sans-serif;font-size:14px;">
    ${entries
      .map(
        ([k, v]) => `
      <tr>
        <td style="padding:6px 12px 6px 0;color:#6a6357;vertical-align:top;">
          ${escapeHtml(LABELS[k] ?? k)}
        </td>
        <td style="padding:6px 0;color:#3a342c;vertical-align:top;">
          ${escapeHtml(v).replace(/\n/g, "<br>")}
        </td>
      </tr>`
      )
      .join("")}
  </table>`;

export const POST: APIRoute = async ({ request, redirect }) => {
  const resendKey = import.meta.env.RESEND_API_KEY;
  const mailTo = import.meta.env.MAIL_TO ?? "kita@kids-bonn.de";

  let data: FormData;
  try {
    data = await request.formData();
  } catch {
    return new Response("Invalid payload", { status: 400 });
  }

  // Honeypot: a hidden field real users never fill. Bots do.
  if (data.get("website")) {
    // Pretend success to silent-drop the bot.
    return redirect("/danke", 303);
  }

  // Consent: if the form included a Datenschutz-Checkbox, it must be checked.
  // (Forms using only a consent note instead of a checkbox simply don't send the field.)
  const datenschutz = data.get("Datenschutz");
  if (datenschutz !== null && !datenschutz) {
    return new Response("Datenschutz-Einwilligung fehlt.", { status: 400 });
  }

  // Which form is this?
  const formType = String(data.get("_form") ?? "");
  if (!(formType in FORMS)) {
    return new Response("Unbekannter Formulartyp.", { status: 400 });
  }
  const form = FORMS[formType as FormType];

  // Collect all public fields (skip keys starting with "_", and the honeypot).
  const entries: [string, string][] = [];
  for (const [key, value] of data.entries()) {
    if (key.startsWith("_") || key === "website" || key === "Datenschutz") continue;
    const str = typeof value === "string" ? value.trim() : "";
    if (str) entries.push([key, str]);
  }

  // If someone submits an entirely empty form — reject.
  if (entries.length === 0) {
    return new Response("Leeres Formular.", { status: 400 });
  }

  // Reply-To: if the form has an E-Mail field, let Vorstand reply directly.
  const replyTo = String(data.get("E-Mail") ?? "").trim() || undefined;

  // Send via Resend.
  if (!resendKey) {
    // In dev without a key we log to server and still redirect,
    // so the flow stays testable locally.
    console.warn("[submit] RESEND_API_KEY missing — dropping payload:", entries);
    return redirect("/danke", 303);
  }

  const resend = new Resend(resendKey);

  try {
    await resend.emails.send({
      from: form.from,
      to: mailTo,
      replyTo,
      subject: `${form.subject} — ${entries[0]?.[1] ?? "unbekannt"}`,
      text: renderText(entries),
      html: renderHtml(entries),
    });
  } catch (err) {
    console.error("[submit] Resend error", err);
    return new Response(
      "Da ist leider etwas schiefgelaufen. Bitte per Mail an kita@kids-bonn.de.",
      { status: 502 }
    );
  }

  return redirect("/danke", 303);
};

// Optional: reject GETs with a polite 405.
export const GET: APIRoute = () =>
  new Response("Nur POST erlaubt.", { status: 405 });
