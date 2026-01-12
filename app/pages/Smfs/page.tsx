export default function SMSFPage() {
  return (
    <main className="min-h-screen bg-linear-to-br from-[#080024] to-[#0c0038] text-white px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 mt-20 text-white/80">
          SMSF
        </h1>

        <p className="text-white/80 mb-10">
          Alors que les actifs numériques tels que Bitcoin continuent de gagner en adoption mondiale,
          de nombreux investisseurs explorent des moyens d'inclure ceux-ci dans leur planification de retraite. En Australie, un Fonds de Retraite Auto-Géré (SMSF)
          offre une structure flexible qui permet un contrôle direct sur les investissements de retraite, y compris les cryptomonnaies.
        </p>

        {/* What is SMSF */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-[#7C4DFF]">
            Qu'est-ce qu'un Fonds de Retraite Auto-Géré (SMSF) ?
          </h2>

          <p className="text-white/80">
            Un SMSF est un fonds de retraite privé où les membres agissent également en tant que fiduciaires, leur donnant la pleine responsabilité des décisions d'investissement et de conformité. Contrairement aux fonds de retraite de détail ou industriels, les SMSF permettent une plus grande flexibilité dans les choix d'investissement, y compris les actifs alternatifs tels que Bitcoin, tout en permettant des arrangements d'assurance personnalisés.
          </p>
        </section>

        {/* Steps */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-6 text-[#7C4DFF]">
            Étapes pour Mettre en Place et Gérer un SMSF pour Bitcoin
          </h2>

          <ol className="list-decimal list-inside text-white/70 space-y-4">
            <li>
              <strong>Choisir un Administrateur SMSF :</strong> Partenaire avec un
              administrateur SMSF qualifié ou comptable pour gérer la mise en place et
              les exigences de conformité continues.
            </li>

            <li>
              <strong>Établir le SMSF :</strong> Votre administrateur préparera
              l'acte de fiducie, les déclarations de fiduciaire, et une stratégie d'investissement qui peut inclure Bitcoin.
            </li>

            <li>
              <strong>Ouvrir un Compte Bancaire SMSF Dédié :</strong> Créer un compte bancaire
              exclusivement pour les transactions SMSF pour assurer la séparation des finances personnelles.
            </li>

            <li>
              <strong>Créer un Compte d'Échange SMSF :</strong> Ouvrir un
              compte d'échange de cryptomonnaie spécifiquement au nom du
              SMSF pour faciliter les investissements conformes en actifs numériques.
            </li>

            <li>
              <strong>Transférer ou Contribuer des Fonds :</strong> Transférer des soldes de retraite existants ou faire de nouvelles contributions dans le compte bancaire SMSF.
            </li>

            <li>
              <strong>Sécuriser les Détentions Bitcoin SMSF :</strong> Mettre en œuvre une stratégie de stockage sécurisé. Tous les portefeuilles, dispositifs matériels, et dépenses connexes doivent être détenus et financés par le SMSF.
            </li>

            <li>
              <strong>Acheter Bitcoin :</strong> Transférer des fonds du compte bancaire SMSF
              vers l'échange et exécuter les achats conformément à la stratégie d'investissement SMSF.
            </li>

            <li>
              <strong>Retirer vers un Portefeuille SMSF :</strong> Déplacer le Bitcoin acheté
              vers un portefeuille sécurisé détenu exclusivement par le SMSF.
            </li>
          </ol>
        </section>

        {/* Timeframe */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-[#7C4DFF]">
            Délai pour la Mise en Place
          </h2>

          <p className="text-white/80">
            La mise en place d'un SMSF implique généralement des étapes simples, dont beaucoup
            peuvent être complétées en ligne. Les étapes individuelles prennent généralement
            entre 20 et 60 minutes, avec le processus complet souvent terminé en plusieurs semaines, selon la documentation et les approbations.
          </p>
        </section>

        {/* Sole Purpose Test */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-[#7C4DFF]">
            Comprendre le Test de l'Objet Unique
          </h2>

          <p className="text-white/80">
            Les SMSF australiens doivent se conformer au test de l'objet unique, qui
            exige que tous les actifs du fonds soient maintenus uniquement pour fournir
            des avantages de retraite aux membres. Cela inclut s'assurer que
            Bitcoin et autres actifs numériques sont détenus séparément des comptes personnels et gérés strictement conformément aux obligations réglementaires.
          </p>
        </section>

        {/* Help */}
        <div className="border-t border-white/10 pt-6">
          <h2 className="text-2xl font-semibold mb-4 text-[#7C4DFF]">
            Besoin d'Aide ?
          </h2>

          <p className="text-white/80">
            Si vous avez des questions sur la mise en place ou la gestion d'un SMSF, ou
            si vous avez besoin de conseils sur les considérations de conformité, notre équipe est
            disponible pour vous assister tout au long du processus.
          </p>
        </div>
      </div>
    </main>
  );
}
