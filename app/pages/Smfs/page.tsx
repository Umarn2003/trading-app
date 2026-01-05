export default function SMSFPage() {
  return (
    <main className="min-h-screen bg-[#05101b]  text-white px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 mt-20 text-white/80">
          SMSF
        </h1>

        <p className="text-white/80 mb-10">
          As digital assets such as Bitcoin continue to gain global adoption,
          many investors are exploring ways to include them in their retirement
          planning. In Australia, a Self-Managed Superannuation Fund (SMSF)
          provides a flexible structure that allows direct control over
          superannuation investments, including cryptocurrencies.
        </p>

        {/* What is SMSF */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-blue-800">
            What Is a Self-Managed Superannuation Fund (SMSF)?
          </h2>

          <p className="text-white/80">
            An SMSF is a private superannuation fund where the members also act
            as trustees, giving them full responsibility for investment
            decisions and compliance. Unlike retail or industry super funds,
            SMSFs allow greater flexibility in investment choices, including
            alternative assets such as Bitcoin, while also allowing customized
            insurance arrangements.
          </p>
        </section>

        {/* Steps */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-6 text-blue-800">
            Steps to Set Up and Manage an SMSF for Bitcoin
          </h2>

          <ol className="list-decimal list-inside text-white/70 space-y-4">
            <li>
              <strong>Choose an SMSF Administrator:</strong> Partner with a
              qualified SMSF administrator or accountant to manage setup and
              ongoing compliance requirements.
            </li>

            <li>
              <strong>Establish the SMSF:</strong> Your administrator will
              prepare the trust deed, trustee declarations, and an investment
              strategy that may include Bitcoin.
            </li>

            <li>
              <strong>Open a Dedicated SMSF Bank Account:</strong> Create a bank
              account solely for SMSF transactions to ensure separation from
              personal finances.
            </li>

            <li>
              <strong>Create an SMSF Exchange Account:</strong> Open a
              cryptocurrency exchange account specifically in the name of the
              SMSF to facilitate compliant digital asset investments.
            </li>

            <li>
              <strong>Transfer or Contribute Funds:</strong> Roll over existing
              superannuation balances or make new contributions into the SMSF
              bank account.
            </li>

            <li>
              <strong>Secure SMSF Bitcoin Holdings:</strong> Implement a secure
              storage strategy. All wallets, hardware devices, and related
              expenses must be owned and funded by the SMSF.
            </li>

            <li>
              <strong>Purchase Bitcoin:</strong> Transfer funds from the SMSF
              bank account to the exchange and execute purchases in accordance
              with the SMSF investment strategy.
            </li>

            <li>
              <strong>Withdraw to an SMSF Wallet:</strong> Move purchased Bitcoin
              to a secure wallet held exclusively by the SMSF.
            </li>
          </ol>
        </section>

        {/* Timeframe */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-blue-800">
            Timeframe for Setup
          </h2>

          <p className="text-white/80">
            Setting up an SMSF generally involves straightforward steps, many
            of which can be completed online. Individual steps typically take
            between 20 and 60 minutes, with the full setup process often
            completed within several weeks, depending on documentation and
            approvals.
          </p>
        </section>

        {/* Sole Purpose Test */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-blue-800">
            Understanding the Sole Purpose Test
          </h2>

          <p className="text-white/80">
            Australian SMSFs must comply with the sole purpose test, which
            requires that all fund assets are maintained solely to provide
            retirement benefits to members. This includes ensuring that
            Bitcoin and other digital assets are held separately from personal
            accounts and managed strictly in accordance with regulatory
            obligations.
          </p>
        </section>

        {/* Help */}
        <div className="border-t border-white/10 pt-6">
          <h2 className="text-2xl font-semibold mb-4 text-blue-800">
            Need Help?
          </h2>

          <p className="text-white/80">
            If you have questions about setting up or managing an SMSF, or
            require guidance on compliance considerations, our team is
            available to assist you through the process.
          </p>
        </div>
      </div>
    </main>
  );
}
