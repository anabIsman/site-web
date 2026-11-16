"use client";
import { useState } from "react";
type S = "idle" | "sending" | "ok" | "error";
const f = "mt-1 w-full border-0 border-b border-white/25 bg-transparent px-0 py-3 text-base text-white focus:border-bronze focus:outline-none focus:ring-0";
export default function ContactForm() {
  const [s, setS] = useState<S>("idle");
  const [msg, setMsg] = useState("");
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setS("sending");
    try {
      const r = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(Object.fromEntries(new FormData(form))) });
      const j = await r.json();
      if (!r.ok) throw new Error(j.error);
      setS("ok"); form.reset();
    } catch (err) { setS("error"); setMsg(err instanceof Error ? err.message : "Une erreur est survenue."); }
  }
  if (s === "ok") return (
    <div role="status" className="border-l border-bronze py-2 pl-6">
      <p className="font-serif text-2xl">Message envoyé.</p>
      <p className="mt-2 text-white/70">Merci. Vous recevrez une réponse personnelle prochainement.</p>
    </div>
  );
  return (
    <form onSubmit={submit} className="space-y-7">
      <div className="grid gap-7 md:grid-cols-2">
        <label className="block text-sm text-white/70">Nom complet<input name="nom" required autoComplete="name" className={f} /></label>
        <label className="block text-sm text-white/70">Adresse e-mail<input name="email" type="email" required autoComplete="email" className={f} /></label>
      </div>
      <label className="block text-sm text-white/70">Organisation<input name="organisation" autoComplete="organization" className={f} /></label>
      <label className="block text-sm text-white/70">Votre message<textarea name="message" required rows={4} className={f} /></label>
      <input name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
      <div className="flex flex-wrap items-center gap-6">
        <button disabled={s === "sending"} className="bg-bronze px-8 py-4 text-sm font-medium text-obsidian transition-colors duration-300 hover:bg-ivory disabled:opacity-60">
          {s === "sending" ? "Envoi en cours…" : "Envoyer un message"}
        </button>
        <p role="alert" className="text-sm text-red-300">{s === "error" ? msg : ""}</p>
      </div>
    </form>
  );
}
