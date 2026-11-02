"use client";

import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";
import Pill from "@/components/ui/Pill";
import { sendMessage } from "@/lib/contact";

type Status = "idle" | "sending" | "sent" | "failed" | "not-configured";

const field =
  "mt-2 w-full border-0 border-b border-ink/30 bg-transparent px-0 py-3 text-base text-ink placeholder:text-muted/70 focus:border-terra focus:outline-none focus:ring-0";
const label = "block font-mono text-[10px] uppercase tracking-[0.25em] text-ink/70";

const messages: Record<Exclude<Status, "idle" | "sending">, { text: string; tone: string }> = {
  sent: { text: "Message sent — thank you!", tone: "text-sage" },
  failed: { text: "Something went wrong. Please try again.", tone: "text-terra-ink" },
  "not-configured": {
    text: "The contact form isn’t connected yet — please reach out through the links on the right.",
    tone: "text-muted",
  },
};

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot: real visitors never fill this in.
    if (data.get("company")) return;

    setStatus("sending");
    try {
      const result = await sendMessage({
        name: String(data.get("name") ?? ""),
        email: String(data.get("email") ?? ""),
        message: String(data.get("message") ?? ""),
      });
      if (result.ok) {
        form.reset();
        setStatus("sent");
      } else {
        setStatus(result.reason === "not-configured" ? "not-configured" : "failed");
      }
    } catch {
      setStatus("failed");
    }
  }

  const msg = status in messages ? messages[status as keyof typeof messages] : null;

  return (
    <form onSubmit={onSubmit} className="space-y-8" noValidate={false}>
      <div>
        <label htmlFor="name" className={label}>
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          placeholder="Your name"
          className={field}
          suppressHydrationWarning
        />
      </div>
      <div>
        <label htmlFor="email" className={label}>
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="you@example.com"
          className={field}
          suppressHydrationWarning
        />
      </div>
      <div>
        <label htmlFor="message" className={label}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          placeholder="Tell me about your project"
          className={`${field} resize-none`}
          suppressHydrationWarning
        />
      </div>

      {/* honeypot */}
      <div className="hidden" aria-hidden="true">
        <label>
          Company
          <input type="text" name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <Pill type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Send message"} <Send size={14} aria-hidden="true" />
      </Pill>

      <p role="status" aria-live="polite" className={`min-h-6 text-sm ${msg?.tone ?? ""}`}>
        {msg?.text}
      </p>
    </form>
  );
}
