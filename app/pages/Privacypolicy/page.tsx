export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-linear-to-br from-[#080024] to-[#0c0038] text-white px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 mt-20 text-white/80">
          Politique de Confidentialité
        </h1>

        <p className="text-white/80 mb-10">
          Cette Politique de Confidentialité explique comment <strong>Trade001</strong> (« nous », « notre »,
          « nos ») collecte, utilise, stocke et protège les informations fournies par
          les utilisateurs (« Utilisateur », « Utilisateurs ») lors de l'accès ou de l'utilisation de notre site web, produits,
          et services (« Site »). En utilisant notre Site, vous acceptez les pratiques
          décrites dans cette politique.
        </p>

        {/* Section 1 */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-[#7C4DFF]">
            1. Informations Personnelles que Nous Collectons
          </h2>

          <p className="text-white/80 mb-4">
            Les utilisateurs peuvent naviguer sur notre Site de manière anonyme. Nous collectons des informations personnelles
            uniquement lorsque les Utilisateurs les fournissent volontairement, par exemple lors de :
          </p>

          <ul className="list-disc list-inside text-white/70 space-y-1 mb-4">
            <li>L'inscription d'un compte</li>
            <li>La complétion de formulaires</li>
            <li>L'abonnement à des newsletters</li>
            <li>La demande de services ou de support</li>
          </ul>

          <p className="text-white/80">
            Les utilisateurs peuvent choisir de ne pas fournir d'informations personnelles ; cependant, cela
            peut limiter l'accès à certaines fonctionnalités ou services.
          </p>
        </section>

        {/* Section 2 */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-[#7C4DFF]">
            2. Cookies et Technologies de Suivi
          </h2>

          <p className="text-white/80">
            Trade001 peut utiliser des cookies et des technologies similaires pour améliorer l'expérience utilisateur
            et analyser l'utilisation du Site. Les utilisateurs peuvent configurer leur navigateur
            pour refuser les cookies, mais certaines fonctionnalités du Site peuvent ne pas fonctionner
            correctement.
          </p>
        </section>

        {/* Section 3 */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-[#7C4DFF]">
            3. Comment Nous Utilisons les Informations Collectées
          </h2>

          <ul className="list-disc list-inside text-white/70 space-y-2">
            <li>Améliorer le service client et le support</li>
            <li>Personnaliser l'expérience utilisateur</li>
            <li>Améliorer notre site web et nos services</li>
            <li>Traiter les transactions en toute sécurité</li>
            <li>Gérer les promotions, enquêtes et fonctionnalités du Site</li>
            <li>Envoyer des mises à jour, offres et communications pertinentes</li>
          </ul>

          <p className="text-white/80 mt-4">
            Les utilisateurs peuvent se désabonner des communications marketing à tout moment via
            le lien fourni dans nos emails.
          </p>
        </section>

        {/* Section 4 */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-[#7C4DFF]">
            4. Protection et Sécurité des Données
          </h2>

          <p className="text-white/80">
            Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour
            protéger les données des Utilisateurs contre l'accès non autorisé, l'altération,
            la divulgation ou la destruction. Les transmissions de données sensibles sont sécurisées
            à l'aide du cryptage SSL et des pratiques de sécurité standard de l'industrie.
          </p>
        </section>

        {/* Section 5 */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-[#7C4DFF]">
            5. Confidentialité des Enfants
          </h2>

          <p className="text-white/80">
            Trade001 ne collecte pas sciemment d'informations personnelles auprès
            d'individus de moins de 18 ans. Nos services sont destinés aux adultes uniquement.
          </p>
        </section>

        {/* Section 6 */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-[#7C4DFF]">
            6. Acceptation de Cette Politique
          </h2>

          <p className="text-white/80">
            En utilisant notre Site, vous acceptez cette Politique de Confidentialité. Nous pouvons mettre à jour
            cette politique à tout moment, et l'utilisation continue du Site indique
            l'acceptation de ces changements.
          </p>
        </section>

        {/* Section 7 */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-[#7C4DFF]">
            7. Contactez-Nous
          </h2>

          <p className="text-white/80">
            Si vous avez des questions concernant cette Politique de Confidentialité ou nos pratiques de données,
            veuillez nous contacter via les canaux officiels fournis sur notre Site.
          </p>
        </section>
      </div>
    </main>
  );
}
