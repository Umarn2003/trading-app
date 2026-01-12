"use client";
export default function KYCPage() {
  return (
    <main className="min-h-screen bg-linear-to-br from-[#080024] to-[#0c0038] text-white px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 mt-20 text-white/80">
          Politique KYC
        </h1>

        <p className="text-white/80 mb-10">
          Pour protéger nos utilisateurs et nous conformer aux réglementations, Trade001 collecte et
          vérifie les informations des clients lors du processus d'inscription. Cela
          garantit la sécurité et l'intégrité de notre plateforme.
        </p>

        {/* Section 1 */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-[#7C4DFF]">
            1. Identification du Client
          </h2>

          <p className="text-white/80 mb-4">
            Nous exigeons que les clients fournissent des informations personnelles exactes et vérifiables, incluant :
          </p>

          <ul className="list-disc list-inside text-white/70 space-y-1 mb-4">
            <li>Nom complet</li>
            <li>Adresse permanente</li>
            <li>Date de naissance</li>
            <li>Profession ou activité commerciale</li>
            <li>Document d'identification officiel (passeport, carte d'identité nationale ou permis de conduire)</li>
            <li>Preuve d'adresse (facture d'utilité, avis fiscal ou relevé bancaire)</li>
          </ul>

          <p className="text-white/80 mb-2">
            Pour les clients professionnels, nous exigeons également :
          </p>

          <ul className="list-disc list-inside text-white/70 space-y-1">
            <li>Certificat d'incorporation</li>
            <li>Statuts de la société</li>
            <li>Résolution du conseil (autorisant les transactions)</li>
            <li>Registre des directeurs et actionnaires</li>
          </ul>

          <p className="text-white/80 mt-4">
            Nous vérifions toutes les informations par le biais de sources fiables pour prévenir la fraude
            et les crimes financiers.
          </p>
        </section>

        {/* Section 2 */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-[#7C4DFF]">
            2. Critères d'Acceptation des Clients
          </h2>

          <p className="text-white/80 mb-4">
            Avant d'accepter un client, nous évaluons son profil de risque basé sur
            plusieurs facteurs :
          </p>

          <ul className="list-disc list-inside text-white/70 space-y-1 mb-4">
            <li>Pays d'origine</li>
            <li>Activités commerciales</li>
            <li>Exposition politique</li>
            <li>Indicateurs à haut risque</li>
          </ul>

          <p className="text-white/80 mb-4">
            Nous n'acceptons pas les clients de pays sous sanctions ou impliqués
            dans des activités suspectes.
          </p>

          <p className="text-white/80 font-semibold mb-2">Nous n'acceptons pas :</p>

          <ul className="list-disc list-inside text-white/70 space-y-1">
            <li>Comptes anonymes</li>
            <li>Banques fictives</li>
            <li>Citoyens américains</li>
            <li>Clients de pays sanctionnés</li>
          </ul>
        </section>

        {/* Section 3 */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-[#7C4DFF]">
            3. Surveillance Continue et Conformité
          </h2>

          <p className="text-white/80 mb-4">
            Nous surveillons continuellement les transactions de nos clients pour détecter toute
            activité inhabituelle ou suspecte. Toute transaction qui s'écarte du
            comportement typique du client peut être signalée pour examen.
          </p>

          <p className="text-white/80 mb-4">
            Si vous ne fournissez pas les documents requis ou refusez de vous conformer
            à notre processus KYC, nous pouvons :
          </p>

          <ul className="list-disc list-inside text-white/70 space-y-1">
            <li>Refuser ou mettre fin à la relation commerciale</li>
            <li>Signaler l'activité suspecte aux autorités appropriées</li>
          </ul>
        </section>

        {/* Section 4 */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-[#7C4DFF]">
            4. Vérification par Tiers
          </h2>

          <p className="text-white/80">
            Nous pouvons collaborer avec des agences tierces pour la vérification des clients,
            à condition qu'elles adhèrent aux normes de conformité. Dans de tels
            cas, des copies certifiées des documents originaux seront requises.
          </p>
        </section>

        <div className="border-t border-white/10 pt-6">
          <h3 className="text-xl font-semibold mb-2 text-[#7C4DFF]">
            Transparence et Sécurité chez Trade001
          </h3>

          <p className="text-white/80">
            Chez Trade001, nous nous engageons à assurer la sécurité financière de
            tous nos utilisateurs. En adhérant aux normes internationales KYC et AML, nous
            fournissons une plateforme transparente et digne de confiance.
          </p>

          <p className="text-white/80 mt-4 font-semibold">
            Restez conforme. Restez en sécurité.
          </p>
        </div>
      </div>
    </main>
  );
}
