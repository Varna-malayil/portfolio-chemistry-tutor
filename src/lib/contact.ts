import { portfolio } from "@/data/portfolio";
import type { ContactFormValues } from "@/types/portfolio";

export type ContactResult =
  /** The message was posted to a configured backend/email service. */
  | { status: "sent" }
  /** No service is configured: the visitor's email app was opened with a draft. */
  | { status: "draft-opened" };

/**
 * INTEGRATION POINT for a real email service.
 *
 * Set NEXT_PUBLIC_CONTACT_ENDPOINT to a URL that accepts a JSON POST
 * (`{ name, email, message }`) — e.g. a Next.js route handler, Formspree, or
 * Resend behind your own API. Until then, nothing is sent from this site: the
 * form opens the visitor's email app with a prepared draft addressed to Vaishnav.
 */
export async function submitContactMessage(values: ContactFormValues): Promise<ContactResult> {
  const endpoint = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT;

  if (endpoint) {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    if (!response.ok) {
      throw new Error(`Contact endpoint responded with ${response.status}`);
    }
    return { status: "sent" };
  }

  const subject = `Message from ${values.name} via portfolio`;
  const body = `${values.message}\n\n— ${values.name} (${values.email})`;
  window.location.href = `mailto:${portfolio.contact.email}?subject=${encodeURIComponent(
    subject,
  )}&body=${encodeURIComponent(body)}`;
  return { status: "draft-opened" };
}
