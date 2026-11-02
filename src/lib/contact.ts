export type ContactPayload = {
  name: string;
  email: string;
  message: string;
};

export type ContactResult =
  | { ok: true }
  | { ok: false; reason: "not-configured" | "failed" };

/**
 * Email delivery is intentionally not wired up yet.
 * Plug in EmailJS, Resend, a Next.js route handler, etc. here and return
 * `{ ok: true }` on success — the form UI already handles every state.
 */
export async function sendMessage(
  _payload: ContactPayload,
): Promise<ContactResult> {
  return { ok: false, reason: "not-configured" };
}
