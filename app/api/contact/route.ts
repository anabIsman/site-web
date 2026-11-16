import { NextResponse } from "next/server";
export async function POST(req: Request) {
  const b = await req.json().catch(() => null);
  if (!b || typeof b !== "object") return NextResponse.json({ error: "Requête invalide." }, { status: 400 });
  if (b.website) return NextResponse.json({ ok: true }); // anti-spam (honeypot)
  const { nom, email, organisation, message } = b as Record<string, string>;
  if (!nom?.trim() || !message?.trim() || !/^\S+@\S+\.\S+$/.test(email ?? "")) return NextResponse.json({ error: "Veuillez renseigner votre nom, un e-mail valide et un message." }, { status: 422 });
  const hook = process.env.CONTACT_WEBHOOK_URL; // À CONFIGURER (Formspree, Resend, Zapier…)
  if (!hook) return NextResponse.json({ error: "Le formulaire n'est pas encore connecté à une messagerie. Merci d'utiliser l'adresse e-mail indiquée sur cette page." }, { status: 501 });
  const r = await fetch(hook, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ nom, email, organisation, message }) });
  if (!r.ok) return NextResponse.json({ error: "L'envoi a échoué. Veuillez réessayer." }, { status: 502 });
  return NextResponse.json({ ok: true });
}
