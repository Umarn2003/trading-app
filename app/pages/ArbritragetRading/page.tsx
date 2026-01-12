export default function ArbitragePage() {
  return (
    <main className="min-h-screen bg-linear-to-br from-[#080024] to-[#0c0038] text-white px-6 py-16">
      <div className="max-w-4xl mx-auto mt-20">
        <h1 className="text-4xl font-bold mb-6 mt-20 text-white/80">
          Trading d'Arbitrage
        </h1>

        <p className="text-white/80 mb-10">
          Le trading d'arbitrage est une stratégie qui cherche à bénéficier des différences de prix
          du même actif sur différents marchés. Dans l'espace des cryptomonnaies, cela implique
          d'identifier les écarts de prix pour les actifs numériques tels que Bitcoin (BTC), Ethereum
          (ETH), et autres cryptomonnaies sur plusieurs échanges.
        </p>

        {/* What is Arbitrage */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-[#7C4DFF]">
            Qu'est-ce que l'Arbitrage dans le Marché Crypto ?
          </h2>

          <p className="text-white/80">
            L'arbitrage dans le marché crypto implique d'acheter un actif numérique sur
            un échange où le prix est plus bas et de le vendre sur un autre
            échange où le prix est plus élevé. Ces différences de prix peuvent
            survenir en raison de variations dans l'offre et la demande, le volume de trading,
            les facteurs géographiques, ou les structures de frais d'échange.
          </p>
        </section>

        {/* How it works */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-[#7C4DFF]">
            Comment Fonctionne l'Arbitrage Crypto ?
          </h2>

          <p className="text-white/80">
            Les prix des cryptomonnaies ne sont pas toujours identiques sur les échanges.
            Lorsqu'un écart de prix apparaît, le trading d'arbitrage tente de capturer
            cette différence en exécutant des ordres d'achat et de vente coordonnés. Tous
            les coûts associés, y compris les frais de trading, de retrait, et de transfert,
            doivent être pris en compte avant l'exécution d'un trade.
          </p>
        </section>

        {/* Our approach */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-[#7C4DFF]">
            Notre Approche de l'Arbitrage Crypto
          </h2>

          <p className="text-white/80 mb-4">
            Chez Trade001, nous opérons une division d'arbitrage dédiée exclusivement
            à l'identification et à l'exécution d'opportunités d'arbitrage
            sur les marchés mondiaux des cryptomonnaies.
          </p>

          <ul className="list-disc list-inside text-white/70 space-y-2">
            <li>
              <strong>Accès au Marché Mondial :</strong> Accès opérationnel à une
              large gamme d'échanges de cryptomonnaies dans le monde.
            </li>
            <li>
              <strong>Analyse Alimentée par IA :</strong> Systèmes avancés surveillent
              les données de prix en temps réel pour identifier les opportunités potentielles.
            </li>
            <li>
              <strong>Exécution Automatisée :</strong> Les trades sont exécutés via
              des processus automatisés pour assurer la vitesse et la précision.
            </li>
          </ul>
        </section>

        {/* Benefits */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-[#7C4DFF] mb-4">
            Avantages de l'Arbitrage Crypto
          </h2>

          <ul className="list-disc list-inside text-white/70 space-y-2">
            <li>S'appuie sur les différences de prix existantes du marché plutôt que sur la spéculation</li>
            <li>Opère sur un marché mondial disponible 24/7</li>
            <li>Exécution systématique et basée sur des règles</li>
          </ul>
        </section>

        {/* Challenges */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-[#7C4DFF]">
            Défis et Considérations de Risque
          </h2>

          <ul className="list-disc list-inside text-white/70 space-y-2">
            <li>
              <strong>Frais :</strong> Les frais de trading et de transfert peuvent impacter les
              résultats nets s'ils ne sont pas soigneusement évalués.
            </li>
            <li>
              <strong>Vitesse :</strong> Les inefficacités du marché peuvent exister seulement
              brièvement, nécessitant une exécution rapide.
            </li>
            <li>
              <strong>Environnement Réglementaire :</strong> Les marchés de cryptomonnaies
              sont soumis à des exigences réglementaires qui varient selon la juridiction.
            </li>
          </ul>
        </section>

        <section className="border-t border-white/10 pt-6">
          <h2 className="text-2xl font-semibold mb-4 text-[#7C4DFF]">
            Pourquoi Choisir Trade001 ?
          </h2>

          <p className="text-white/80">
            Avec une équipe d'arbitrage spécialisée, des systèmes technologiques, et
            un accès aux échanges mondiaux de cryptomonnaies, Trade001 offre une
            approche structurée et disciplinée du trading d'arbitrage. Notre focus
            est sur l'efficacité, la transparence, et l'exécution responsable.
          </p>
        </section>
      </div>
    </main>
  );
}
