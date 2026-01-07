export default function ArbitragePage() {
  return (
    <main className="min-h-screen bg-[#05101b]  text-white px-6 py-16">
      <div className="max-w-4xl mx-auto mt-20">
        <h1 className="text-4xl font-bold mb-6 mt-20 text-white/80">
          Arbitrage Trading
        </h1>

        <p className="text-white/80 mb-10">
          Arbitrage trading is a strategy that seeks to benefit from price
          differences of the same asset across different markets. In the
          cryptocurrency space, this involves identifying pricing
          discrepancies for digital assets such as Bitcoin (BTC), Ethereum
          (ETH), and other cryptocurrencies across multiple exchanges.
        </p>

        {/* What is Arbitrage */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-[#7C4DFF]">
            What Is Arbitrage in the Crypto Market?
          </h2>

          <p className="text-white/80">
            Arbitrage in the crypto market involves buying a digital asset on
            one exchange where the price is lower and selling it on another
            exchange where the price is higher. These price differences can
            occur due to variations in supply and demand, trading volume,
            geographic factors, or exchange fee structures.
          </p>
        </section>

        {/* How it works */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-[#7C4DFF]">
            How Does Crypto Arbitrage Work?
          </h2>

          <p className="text-white/80">
            Cryptocurrency prices are not always identical across exchanges.
            When a price gap appears, arbitrage trading attempts to capture
            that difference by executing coordinated buy and sell orders. All
            associated costs, including trading, withdrawal, and transfer
            fees, must be considered before a trade is executed.
          </p>
        </section>

        {/* Our approach */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-[#7C4DFF]">
            Our Approach to Crypto Arbitrage
          </h2>

          <p className="text-white/80 mb-4">
            At Trade001, we operate a dedicated arbitrage division focused
            exclusively on identifying and executing arbitrage opportunities
            across global cryptocurrency markets.
          </p>

          <ul className="list-disc list-inside text-white/70 space-y-2">
            <li>
              <strong>Global Market Access:</strong> Operational access to a
              wide range of cryptocurrency exchanges worldwide.
            </li>
            <li>
              <strong>AI-Driven Analysis:</strong> Advanced systems monitor
              price data in real time to identify potential opportunities.
            </li>
            <li>
              <strong>Automated Execution:</strong> Trades are executed through
              automated processes to ensure speed and accuracy.
            </li>
          </ul>
        </section>

        {/* Benefits */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-[#7C4DFF] mb-4">
            Benefits of Crypto Arbitrage
          </h2>

          <ul className="list-disc list-inside text-white/70 space-y-2">
            <li>Relies on existing market price differences rather than speculation</li>
            <li>Operates within a global market available 24/7</li>
            <li>Systematic and rule-based execution</li>
          </ul>
        </section>

        {/* Challenges */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-[#7C4DFF]">
            Challenges and Risk Considerations
          </h2>

          <ul className="list-disc list-inside text-white/70 space-y-2">
            <li>
              <strong>Fees:</strong> Trading and transfer fees can impact net
              outcomes if not carefully evaluated.
            </li>
            <li>
              <strong>Speed:</strong> Market inefficiencies may exist only
              briefly, requiring rapid execution.
            </li>
            <li>
              <strong>Regulatory Environment:</strong> Cryptocurrency markets
              are subject to regulatory requirements that vary by jurisdiction.
            </li>
          </ul>
        </section>

        {/* Why choose us */}
        <section className="border-t border-white/10 pt-6">
          <h2 className="text-2xl font-semibold mb-4 text-[#7C4DFF]">
            Why Choose Trade001?
          </h2>

          <p className="text-white/80">
            With a specialized arbitrage team, technology-driven systems, and
            access to global cryptocurrency exchanges, Trade001 provides a
            structured and disciplined approach to arbitrage trading. Our focus
            is on efficiency, transparency, and responsible execution.
          </p>
        </section>
      </div>
    </main>
  );
}
