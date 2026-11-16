import Image from "next/image";
import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { site, waLink } from "@/lib/site";

const expertises = [
  { n: "I", t: "Conseil stratégique", d: "Éclairer les réflexions stratégiques, structurer la prise de décision et conduire les transformations.", e: "Contextes complexes, arbitrages difficiles, priorités à clarifier.", v: "Une vision claire et des décisions assumées, traduites en projets concrets." },
  { n: "II", t: "Communication", d: "Concevoir des stratégies de communication au service des objectifs institutionnels et organisationnels.", e: "Message à clarifier, parties prenantes à convaincre, cohérence à construire.", v: "Une parole alignée avec la stratégie, qui renforce la crédibilité et l'influence." },
  { n: "III", t: "Formation", d: "Développer les compétences et renforcer les capacités grâce à des formations adaptées aux enjeux contemporains.", e: "Montée en compétences, appropriation des nouveaux usages, conduite du changement.", v: "Des équipes plus autonomes, capables de porter durablement la transformation." },
  { n: "IV", t: "Intelligence artificielle appliquée", d: "Accompagner l'intégration responsable et performante de l'intelligence artificielle.", e: "Où et comment intégrer l'IA, avec quelles garanties, au service de quels objectifs.", v: "Une IA au service de la performance et de l'humain, créatrice de valeur durable." },
];
const organisations = ["Institutions publiques", "Organisations internationales", "Entreprises privées", "Programmes de développement", "Établissements de formation"];
const Rule = () => <span aria-hidden className="block h-px w-16 bg-bronze" />;

export default function Page() {
  const r = site.reperes;
  const reperes = [["Années d'expérience", r.anneesExperience], ["Principales responsabilités", r.responsabilites], ["Missions significatives", r.missions]].filter(([, v]) => v) as string[][];
  return (
    <>
      <a href="#contenu" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-obsidian focus:p-3 focus:text-white">Aller au contenu</a>
      <Nav />
      <main id="contenu">
        {/* ACCUEIL */}
        <section id="accueil" className="relative flex min-h-[100svh] items-end overflow-hidden px-6 pb-16 pt-32 md:px-12 md:pb-24">
          <div className="mx-auto grid w-full max-w-[1440px] gap-12 lg:grid-cols-12">
            <div className="lg:col-span-9">
              <Reveal>
                <p className="font-serif text-xl md:text-2xl">Rachid H. Atteye</p>
                <p className="mt-2 text-sm text-smoke">Consultant stratégique · Expert en IA appliquée · Conseiller exécutif</p>
              </Reveal>
              <Reveal delay={0.1}>
                <h1 className="mt-10 font-serif text-[2.6rem] leading-[1.04] tracking-tight xs:text-5xl md:text-7xl xl:text-[5.75rem]">
                  Transformer les défis complexes en opportunités de croissance et d&apos;impact.
                </h1>
              </Reveal>
            </div>
            <Reveal delay={0.25} className="lg:col-span-3 lg:col-start-10 lg:self-end lg:border-t lg:border-bronze lg:pt-8">
              <p className="text-base leading-relaxed text-obsidian/80">
                J&apos;accompagne les organisations, institutions et décideurs dans leurs projets de transformation, de communication, de développement des compétences et d&apos;intégration de l&apos;intelligence artificielle.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
                <a href={site.booking ?? "#contact"} className="bg-obsidian px-7 py-4 text-sm text-ivory transition-colors duration-300 hover:bg-cognac">Prendre rendez-vous</a>
                <a href="#contact" className="link pb-1 text-sm">Me contacter</a>
              </div>
              {!site.booking && <p className="todo mt-4 inline-block">Lien de rendez-vous à compléter (lib/site.ts)</p>}
            </Reveal>
          </div>
        </section>

        {/* REPÈRES */}
        <section aria-labelledby="reperes" className="border-y border-obsidian/10 px-6 py-14 md:px-12">
          <div className="mx-auto grid max-w-[1440px] gap-8 lg:grid-cols-12">
            <h2 id="reperes" className="font-serif text-2xl lg:col-span-3">Repères</h2>
            <dl className="grid gap-x-10 gap-y-6 sm:grid-cols-2 lg:col-span-9 lg:grid-cols-3">
              <div className="sm:col-span-2 lg:col-span-3 lg:flex lg:gap-10">
                <dt className="text-sm text-smoke lg:w-48 lg:shrink-0">Domaines d&apos;intervention</dt>
                <dd className="font-serif text-lg">Stratégie · Communication · Formation · Intelligence artificielle appliquée</dd>
              </div>
              {reperes.map(([k, v]) => (<div key={k}><dt className="text-sm text-smoke">{k}</dt><dd className="mt-1 text-lg">{v}</dd></div>))}
            </dl>
          </div>
        </section>

        {/* À PROPOS */}
        <section id="a-propos" className="bg-white px-6 py-24 md:px-12 md:py-40">
          <div className="mx-auto grid max-w-[1440px] gap-14 lg:grid-cols-12">
            <Reveal className="lg:col-span-6 lg:pr-10">
              <Rule />
              <h2 className="mt-8 font-serif text-4xl leading-tight md:text-6xl">Une approche fondée sur la stratégie, l&apos;innovation et l&apos;impact.</h2>
              <div className="mt-10 max-w-xl space-y-5 font-serif text-lg leading-8 text-obsidian/85">
                <p>Les organisations ne manquent pas d&apos;idées. Elles manquent souvent de recul, de cap et de continuité entre la décision et l&apos;action. Mon rôle est de comprendre l&apos;enjeu réel derrière chaque situation, puis d&apos;aider les dirigeants à le transformer en projet concret.</p>
                <p>Je conçois le conseil comme un accompagnement exigeant et sur mesure : écouter, clarifier, proposer une vision, puis rester aux côtés de ceux qui la portent. La relation avec les organisations se construit sur la confiance, la rigueur et la franchise.</p>
                <p>L&apos;innovation et l&apos;intelligence artificielle n&apos;ont de sens que si elles servent la performance collective et restent au service de l&apos;humain. Mon approche : intégrer l&apos;IA de façon responsable, en renforçant les compétences de ceux qui l&apos;utiliseront.</p>
              </div>
              <p className="mt-8 text-sm text-smoke">Parcours professionnel : <span className="todo">à compléter par Rachid (éléments vérifiés uniquement)</span></p>
            </Reveal>
            <Reveal delay={0.15} className="relative lg:col-span-6">
              <div className="relative aspect-square overflow-hidden md:aspect-[4/3]">
                <Image src="/rachid.jpg" alt="Rachid H. Atteye en extérieur, face à un paysage de collines et de mer" fill priority={false} sizes="(min-width:1024px) 50vw, 100vw" className="object-cover object-[80%_40%]" />
                <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-obsidian/35 via-transparent to-transparent" />
              </div>
              <span aria-hidden className="absolute -left-4 -top-4 hidden h-24 w-24 border-l border-t border-bronze lg:block" />
              <span aria-hidden className="absolute -bottom-4 -right-4 hidden h-24 w-24 border-b border-r border-bronze lg:block" />
              <p className="mt-6 max-w-sm font-serif text-xl italic text-obsidian/80 lg:absolute lg:-left-24 lg:bottom-10 lg:mt-0 lg:bg-white lg:p-6 lg:shadow-none">Comprendre avant de recommander.</p>
            </Reveal>
          </div>
        </section>

        {/* EXPERTISES */}
        <section id="expertises" className="px-6 py-24 md:px-12 md:py-40">
          <div className="mx-auto max-w-[1440px]">
            <Reveal className="max-w-3xl">
              <h2 className="font-serif text-4xl leading-tight md:text-6xl">Quatre domaines pour une même exigence : créer de la valeur.</h2>
            </Reveal>
            <ol className="mt-16 border-t border-obsidian/20">
              {expertises.map((x, i) => (
                <li key={x.n} className="group border-b border-obsidian/20">
                  <Reveal className={`grid gap-6 py-10 transition-colors duration-500 md:py-14 lg:grid-cols-12 ${i % 2 ? "lg:[&>div:nth-child(3)]:order-none" : ""}`}>
                    <p className="font-serif text-4xl text-bronze lg:col-span-2 md:text-5xl">{x.n}</p>
                    <div className="lg:col-span-4">
                      <h3 className="font-serif text-3xl transition-colors duration-300 group-hover:text-cognac md:text-4xl">{x.t}</h3>
                      <p className="mt-4 leading-relaxed text-obsidian/80">{x.d}</p>
                    </div>
                    <div className={`lg:col-span-3 ${i % 2 ? "lg:col-start-8" : "lg:col-start-7"}`}>
                      <p className="text-sm text-smoke">Les enjeux</p>
                      <p className="mt-2 leading-relaxed">{x.e}</p>
                    </div>
                    <div className="lg:col-span-3 lg:col-start-10 lg:border-l lg:border-bronze lg:pl-6">
                      <p className="text-sm text-smoke">La valeur pour l&apos;organisation</p>
                      <p className="mt-2 leading-relaxed">{x.v}</p>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* RÉFÉRENCES */}
        <section id="organisations" className="bg-white px-6 py-24 md:px-12 md:py-36">
          <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <Rule />
              <h2 className="mt-8 font-serif text-4xl leading-tight md:text-5xl">Des expertises au service de multiples organisations.</h2>
            </Reveal>
            <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7">
              {site.references.length > 0 ? (
                <ul className="grid gap-px bg-obsidian/10 sm:grid-cols-2">
                  {site.references.map((o) => (
                    <li key={o.nom} className="bg-white p-6">
                      {o.logo && <Image src={o.logo} alt={o.nom} width={140} height={48} className="mb-4 h-10 w-auto object-contain" />}
                      <p className="font-serif text-xl">{o.nom}</p>
                      {o.contexte && <p className="mt-2 text-sm text-smoke">{o.contexte}</p>}
                      {o.intervention && <p className="mt-2 text-sm">{o.intervention}</p>}
                      {o.resultats && <p className="mt-2 text-sm">{o.resultats}</p>}
                    </li>
                  ))}
                </ul>
              ) : (
                <>
                  <p className="text-sm text-smoke">Catégories d&apos;organisations accompagnées</p>
                  <ul className="mt-4 border-t border-obsidian/20">
                    {organisations.map((o) => (<li key={o} className="border-b border-obsidian/20 py-5 font-serif text-xl md:text-2xl">{o}</li>))}
                  </ul>
                  <p className="mt-6"><span className="todo">Références nominatives et logos à compléter (lib/site.ts), uniquement avec accord.</span></p>
                </>
              )}
            </Reveal>
          </div>
        </section>

        {/* VISION */}
        <section aria-labelledby="vision" className="on-dark bg-obsidian px-6 py-32 text-ivory md:px-12 md:py-52">
          <div className="mx-auto max-w-[1440px]">
            <Reveal>
              <h2 id="vision" className="sr-only">Vision</h2>
              <blockquote className="max-w-5xl font-serif text-4xl leading-[1.15] md:text-6xl xl:text-7xl">
                <p>« La technologie ouvre des possibilités.</p>
                <p className="mt-2 text-bronze">Le leadership transforme durablement les organisations. »</p>
              </blockquote>
              <span aria-hidden className="mt-14 block h-px w-24 bg-bronze" />
            </Reveal>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="on-dark bg-obsidian px-6 pb-24 text-white md:px-12 md:pb-36">
          <div className="mx-auto grid max-w-[1440px] gap-14 border-t border-white/15 pt-20 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <h2 className="font-serif text-4xl leading-tight md:text-6xl">Échangeons sur vos enjeux.</h2>
              <p className="mt-8 max-w-md leading-relaxed text-white/75">Que vous souhaitiez engager une transformation stratégique, développer les compétences de vos équipes, structurer votre communication ou intégrer l&apos;intelligence artificielle dans vos activités, je serais ravi d&apos;échanger avec vous.</p>
              <ul className="mt-10 space-y-3">
                {site.email ? <li><a className="link" href={`mailto:${site.email}`}>{site.email}</a></li> : <li><span className="todo !text-white/60">Adresse e-mail à compléter</span></li>}
                {site.whatsapp ? <li><a className="link" href={waLink(site.whatsapp)} rel="noopener noreferrer" target="_blank">WhatsApp</a></li> : <li><span className="todo !text-white/60">WhatsApp à compléter</span></li>}
                {site.linkedin ? <li><a className="link" href={site.linkedin} rel="noopener noreferrer" target="_blank">LinkedIn</a></li> : <li><span className="todo !text-white/60">LinkedIn à compléter</span></li>}
              </ul>
            </Reveal>
            <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7"><ContactForm /></Reveal>
          </div>
        </section>
      </main>

      <footer className="on-dark border-t border-white/10 bg-obsidian px-6 py-8 text-sm text-white/60 md:px-12">
        <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-4">
          <p className="font-serif text-white">Rachid H. Atteye</p>
          <p className="flex gap-6">
            {site.linkedin && <a className="link" href={site.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>}
            {site.email && <a className="link" href={`mailto:${site.email}`}>E-mail</a>}
          </p>
          <p>© {new Date().getFullYear()} Rachid H. Atteye. Tous droits réservés.</p>
        </div>
      </footer>
    </>
  );
}
