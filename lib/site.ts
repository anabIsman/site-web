// ⚠️ À COMPLÉTER par Rachid : toute valeur à null masque automatiquement l'élément correspondant.
export const site = {
  name: "Rachid H. Atteye",
  url: null as string | null, // ex. "https://www.exemple.com" (utilisé pour le SEO)
  email: null as string | null,
  linkedin: null as string | null,
  whatsapp: null as string | null, // format international sans « + », ex. "33600000000"
  booking: null as string | null, // lien de prise de rendez-vous (Calendly, etc.)
  reperes: {
    anneesExperience: null as string | null,
    responsabilites: null as string | null,
    missions: null as string | null,
  },
  // Références nominatives : { nom, contexte?, intervention?, resultats?, logo? }
  references: [] as { nom: string; contexte?: string; intervention?: string; resultats?: string; logo?: string }[],
};
export const waLink = (n: string) => `https://wa.me/${n}`;
