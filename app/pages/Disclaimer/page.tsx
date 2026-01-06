export default function DisclaimerPage() {
  return (
    <main className="min-h-screen bg-[#05101b]  text-white px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 mt-20 text-white/80">
          Disclaimer
        </h1>

        <p className="text-white/80 mb-10">
          This disclaimer is provided by <strong>Trade001</strong> to inform
          users of the risks associated with trading financial instruments. By
          accessing or using our platform, you acknowledge and accept the risks
          outlined below.
        </p>

        {/* Risk Warning */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-blue-500">
            Risk Warning
          </h2>

          <p className="text-white/80">
            Trading financial instruments, including cryptocurrencies, CFDs,
            and other leveraged or unleveraged instruments, involves a high
            level of risk and may not be suitable for all investors. The value
            of investments can fluctuate, and you may lose some or all of your
            invested capital. You should carefully consider your financial
            situation, risk tolerance, and investment objectives before
            engaging in any trading activity.
          </p>
        </section>

        {/* Risk Disclosure */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-blue-500">
            Risk Disclosure
          </h2>

          <p className="text-white/80">
            Trading with leverage or margin is speculative and carries a
            significant risk of financial loss. Losses may occur rapidly, and
            only funds designated for high-risk investments should be used. You
            should determine whether this type of trading is appropriate based
            on your financial resources and risk tolerance.
          </p>
        </section>

        {/* Exchange Rate Risk */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-blue-500">
            Exchange Rate Risk
          </h2>

          <p className="text-white/80">
            Cryptocurrency and foreign exchange markets are highly volatile and
            subject to unpredictable price movements. Sudden changes in
            exchange rates may result in rapid gains or losses and make market
            trends difficult to predict.
          </p>
        </section>

        {/* Event Risk */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-blue-500">
            Event Risk
          </h2>

          <p className="text-white/80">
            Market prices may be affected by unforeseen events such as
            regulatory changes, economic announcements, or geopolitical
            developments. These events can lead to extreme market conditions
            and increased risk exposure.
          </p>
        </section>

        {/* Operational Risk */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-blue-500">
            Operational Risk
          </h2>

          <p className="text-white/80">
            While we strive to maintain uninterrupted access to our platform,
            operational risks such as technical failures, system outages,
            connectivity issues, software errors, or cyber threats may occur.
            These issues may affect order execution and service availability.
          </p>
        </section>

        {/* Margin & Leverage Risk */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-blue-500">
            Margin and Leverage Risk
          </h2>

          <p className="text-white/80">
            Margin trading increases both potential gains and losses. Even a
            small market movement can result in significant financial impact,
            and in extreme cases, the entire margin deposit may be lost. Users
            should fully understand leverage risks before engaging in margin
            trading.
          </p>
        </section>

        {/* No Guarantee */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-blue-500">
            No Guarantee of Profit
          </h2>

          <p className="text-white/80">
            There are no guarantees in trading. Past performance does not
            indicate future results, and no trading strategy or system can
            ensure consistent profitability. All trading decisions and
            outcomes are the sole responsibility of the User.
          </p>
        </section>

        {/* Closing */}
        <div className="border-t border-white/10 pt-6 text-blue-500">
          <p className="text-white/80">
            This disclaimer does not cover all risks associated with trading
            financial instruments. By using our platform, you acknowledge and
            accept all inherent trading risks. If you have concerns or require
            professional guidance, consult a qualified financial advisor
            before proceeding.
          </p>

          <p className="text-white/80 mt-4">
            For any questions regarding this disclaimer, please contact us
            through the official communication channels provided on the Site.
          </p>
        </div>
      </div>
    </main>
  );
}
