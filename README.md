# Rachid H. Atteye — site vitrine (Next.js 15)
npm install && npm run dev   (http://localhost:3000)
npm run build && npm start

## À compléter (aucun contenu fictif n'a été ajouté)
- `lib/site.ts` : e-mail, LinkedIn, WhatsApp, lien de rendez-vous, repères vérifiés, références nominatives (+ logos autorisés dans `public/`). Une valeur vide masque l'élément ou affiche un repère « à compléter ».
- Formulaire : définir la variable d'environnement `CONTACT_WEBHOOK_URL` (Formspree, Resend, Zapier…). Sans elle, l'API répond clairement que le formulaire n'est pas connecté.
- `lib/site.ts` → `url` : domaine final (SEO / Open Graph).
- Section « À propos » : paragraphe « Parcours professionnel » à rédiger avec des éléments vérifiés.
