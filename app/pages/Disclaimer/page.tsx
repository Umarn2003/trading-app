export default function DisclaimerPage() {
  return (
    <main className="min-h-screen bg-linear-to-br from-[#080024] to-[#0c0038]  text-white px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 mt-20 text-white/80">
          Avertissement
        </h1>

        <p className="text-white/80 mb-10">
          Cet avertissement est fourni par <strong>Trade001</strong> pour informer
          les utilisateurs des risques associés au trading d'instruments financiers. En
          accédant ou en utilisant notre plateforme, vous reconnaissez et acceptez les risques
          décrits ci-dessous.
        </p>

        {/* Risk Warning */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-[#7C4DFF]">
            Avertissement de Risque
          </h2>

          <p className="text-white/80">
            Le trading d'instruments financiers, y compris les cryptomonnaies, CFD,
            et autres instruments avec ou sans effet de levier, implique un niveau élevé
            de risque et peut ne pas convenir à tous les investisseurs. La valeur
            des investissements peut fluctuer, et vous pouvez perdre une partie ou la totalité de votre
            capital investi. Vous devriez soigneusement considérer votre situation financière,
            votre tolérance au risque, et vos objectifs d'investissement avant
            de vous engager dans toute activité de trading.
          </p>
        </section>

        {/* Risk Disclosure */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-[#7C4DFF]">
            Divulgation des Risques
          </h2>

          <p className="text-white/80">
            Le trading avec effet de levier ou marge est spéculatif et comporte un
            risque significatif de perte financière. Les pertes peuvent survenir rapidement, et
            seuls les fonds désignés pour des investissements à haut risque devraient être utilisés. Vous
            devriez déterminer si ce type de trading est approprié en fonction
            de vos ressources financières et de votre tolérance au risque.
          </p>
        </section>

        {/* Exchange Rate Risk */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-[#7C4DFF]">
            Risque de Taux de Change
          </h2>

          <p className="text-white/80">
            Les marchés des cryptomonnaies et des changes étrangers sont hautement volatils et
            sujets à des mouvements de prix imprévisibles. Des changements soudains dans
            les taux de change peuvent entraîner des gains ou pertes rapides et rendre les tendances du marché
            difficiles à prévoir.
          </p>
        </section>

        {/* Event Risk */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-[#7C4DFF]">
            Risque d'Événement
          </h2>

          <p className="text-white/80">
            Les prix du marché peuvent être affectés par des événements imprévus tels que
            des changements réglementaires, des annonces économiques, ou des développements géopolitiques.
            Ces événements peuvent entraîner des conditions de marché extrêmes
            et une exposition accrue au risque.
          </p>
        </section>

        {/* Operational Risk */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-[#7C4DFF]">
            Risque Opérationnel
          </h2>

          <p className="text-white/80">
            Bien que nous nous efforcions de maintenir un accès ininterrompu à notre plateforme,
            des risques opérationnels tels que des pannes techniques, des interruptions de système,
            des problèmes de connectivité, des erreurs logicielles, ou des menaces cybernétiques peuvent survenir.
            Ces problèmes peuvent affecter l'exécution des ordres et la disponibilité des services.
          </p>
        </section>

        {/* Margin & Leverage Risk */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-[#7C4DFF]">
            Risque de Marge et de Levier
          </h2>

          <p className="text-white/80">
            Le trading à marge augmente à la fois les gains potentiels et les pertes. Même un
            petit mouvement du marché peut entraîner un impact financier significatif,
            et dans des cas extrêmes, l'intégralité du dépôt de marge peut être perdue. Les utilisateurs
            devraient pleinement comprendre les risques du levier avant de s'engager dans le trading à marge.
          </p>
        </section>

        {/* No Guarantee */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-[#7C4DFF]">
            Aucune Garantie
          </h2>

          <p className="text-white/80">
            Il n'y a aucune garantie dans le trading. Les performances passées n'indiquent pas
            les résultats futurs, et aucune stratégie ou système de trading ne peut
            assurer une rentabilité constante. Toutes les décisions de trading et
            leurs résultats sont la seule responsabilité de l'Utilisateur.
          </p>
        </section>

        {/* Closing */}
        <div className="border-t border-white/10 pt-6 text-[#7C4DFF]">
          <p className="text-white/80">
            Cet avertissement ne couvre pas tous les risques associés au trading
            d'instruments financiers. En utilisant notre plateforme, vous reconnaissez et
            acceptez tous les risques inhérents au trading. Si vous avez des préoccupations ou avez besoin
            de conseils professionnels, consultez un conseiller financier qualifié
            avant de procéder.
          </p>

          <p className="text-white/80 mt-4">
            Pour toute question concernant cet avertissement, veuillez nous contacter
            via les canaux de communication officiels fournis sur le Site.
          </p>
        </div>
      </div>
    </main>
  );
}
