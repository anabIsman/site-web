"use client";
import { useEffect, useState } from "react";
const items = [["accueil", "Accueil"], ["a-propos", "À propos"], ["expertises", "Expertises"], ["organisations", "Organisations accompagnées"], ["contact", "Contact"]] as const;
export default function Nav() {
  const [active, setActive] = useState("accueil");
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)), { rootMargin: "-45% 0px -50% 0px" });
    items.forEach(([id]) => { const el = document.getElementById(id); if (el) io.observe(el); });
    const on = () => setSolid(window.scrollY > 24);
    on(); window.addEventListener("scroll", on, { passive: true });
    return () => { io.disconnect(); window.removeEventListener("scroll", on); };
  }, []);
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${solid || open ? "bg-ivory/95 backdrop-blur border-b border-obsidian/10" : ""}`}>
      <nav aria-label="Navigation principale" className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-6 md:px-12">
        <a href="#accueil" className="font-serif text-lg tracking-tight">Rachid H. Atteye</a>
        <ul className="hidden items-center gap-8 lg:flex">
          {items.map(([id, l]) => (
            <li key={id}><a href={`#${id}`} aria-current={active === id ? "true" : undefined}
              className={`link pb-1 text-[13px] ${active === id ? "text-cognac" : "text-obsidian/70 hover:text-obsidian"}`}>{l}</a></li>
          ))}
        </ul>
        <button className="text-sm lg:hidden" aria-expanded={open} aria-controls="menu-mobile" onClick={() => setOpen(!open)}>{open ? "Fermer" : "Menu"}</button>
      </nav>
      {open && (
        <ul id="menu-mobile" className="border-t border-obsidian/10 px-6 pb-6 lg:hidden">
          {items.map(([id, l]) => (<li key={id}><a href={`#${id}`} onClick={() => setOpen(false)} className="block border-b border-obsidian/10 py-4 font-serif text-xl">{l}</a></li>))}
        </ul>
      )}
    </header>
  );
}
