"use client";
export default function KYCPage() {
  return (
    <main className="min-h-screen bg-[#04043d]  text-white px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 mt-20 text-white/80">
          KYC Policy
        </h1>

        <p className="text-white/80 mb-10">
          To protect our users and comply with regulations, Trade001 collects and
          verifies customer information during the registration process. This
          ensures the security and integrity of our platform.
        </p>

        {/* Section 1 */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-blue-800">
            1. Customer Identification
          </h2>

          <p className="text-white/80 mb-4">
            We require customers to provide accurate and verifiable personal
            information, including:
          </p>

          <ul className="list-disc list-inside text-white/70 space-y-1 mb-4">
            <li>Full name</li>
            <li>Permanent address</li>
            <li>Date of birth</li>
            <li>Profession or commercial activity</li>
            <li>Official identification document (passport, national identity card or driving licence)</li>
            <li>Proof of address (utility bill, tax notice or bank statement)</li>
          </ul>

          <p className="text-white/80 mb-2">
            For business customers, we also require:
          </p>

          <ul className="list-disc list-inside text-white/70 space-y-1">
            <li>Certificate of Incorporation</li>
            <li>Company statutes</li>
            <li>Council resolution (authorizing the transactions)</li>
            <li>Register of Directors and Shareholders</li>
          </ul>

          <p className="text-white/80 mt-4">
            We verify all information through reliable sources to prevent fraud
            and financial crimes.
          </p>
        </section>

        {/* Section 2 */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-blue-800">
            2. Customer Acceptance Criteria
          </h2>

          <p className="text-white/80 mb-4">
            Before accepting a client, we assess their risk profile based on
            several factors:
          </p>

          <ul className="list-disc list-inside text-white/70 space-y-1 mb-4">
            <li>Country of origin</li>
            <li>Commercial activities</li>
            <li>Political exposure</li>
            <li>High-risk indicators</li>
          </ul>

          <p className="text-white/80 mb-4">
            We do not accept clients from countries under sanctions or involved
            in suspicious activities.
          </p>

          <p className="text-white/80 font-semibold mb-2">We do not accept:</p>

          <ul className="list-disc list-inside text-white/70 space-y-1">
            <li>Anonymous accounts</li>
            <li>Fictitious banks</li>
            <li>American citizens</li>
            <li>Customers from sanctioned countries</li>
          </ul>
        </section>

        {/* Section 3 */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-blue-800">
            3. Ongoing Monitoring and Compliance
          </h2>

          <p className="text-white/80 mb-4">
            We continuously monitor our clients’ transactions to detect any
            unusual or suspicious activity. Any transaction that deviates from
            typical client behavior may be flagged for review.
          </p>

          <p className="text-white/80 mb-4">
            If you fail to provide the required documents or refuse to comply
            with our KYC process, we may:
          </p>

          <ul className="list-disc list-inside text-white/70 space-y-1">
            <li>Refuse or terminate the business relationship</li>
            <li>Report suspicious activity to the appropriate authorities</li>
          </ul>
        </section>

        {/* Section 4 */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-blue-800">
            4. Third-Party Verification
          </h2>

          <p className="text-white/80">
            We may collaborate with third-party agencies for customer
            verification, provided they adhere to compliance standards. In such
            cases, certified copies of the original documents will be required.
          </p>
        </section>

        <div className="border-t border-white/10 pt-6">
          <h3 className="text-xl font-semibold mb-2 text-blue-800">
            Transparency & Security at Trade001
          </h3>

          <p className="text-white/80">
            At Trade001, we are committed to ensuring the financial security of
            all our users. By adhering to international KYC and AML standards, we
            provide a transparent and trustworthy platform.
          </p>

          <p className="text-white/80 mt-4 font-semibold">
            Stay compliant. Stay safe.
          </p>
        </div>
      </div>
    </main>
  );
}
