export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#05101b]  text-white px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 mt-20 text-white/80">
          Privacy Policy
        </h1>

        <p className="text-white/80 mb-10">
          This Privacy Policy explains how <strong>Trade001</strong> (“we”, “us”,
          “our”) collects, uses, stores, and protects information provided by
          users (“User”, “Users”) when accessing or using our website, products,
          and services (“Site”). By using our Site, you agree to the practices
          described in this policy.
        </p>

        {/* Section 1 */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-[#7C4DFF]">
            1. Personal Information We Collect
          </h2>

          <p className="text-white/80 mb-4">
            Users may browse our Site anonymously. We collect personal
            information only when Users voluntarily provide it, such as when:
          </p>

          <ul className="list-disc list-inside text-white/70 space-y-1 mb-4">
            <li>Registering an account</li>
            <li>Completing forms</li>
            <li>Subscribing to newsletters</li>
            <li>Requesting services or support</li>
          </ul>

          <p className="text-white/80">
            Users may choose not to provide personal information; however, this
            may limit access to certain features or services.
          </p>
        </section>

        {/* Section 2 */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-[#7C4DFF]">
            2. Cookies and Tracking Technologies
          </h2>

          <p className="text-white/80">
            Trade001 may use cookies and similar technologies to improve user
            experience and analyze Site usage. Users can configure their browser
            to refuse cookies, but some features of the Site may not function
            properly.
          </p>
        </section>

        {/* Section 3 */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-[#7C4DFF]">
            3. How We Use Collected Information
          </h2>

          <ul className="list-disc list-inside text-white/70 space-y-2">
            <li>Improve customer service and support</li>
            <li>Personalize user experience</li>
            <li>Improve our website and services</li>
            <li>Process transactions securely</li>
            <li>Manage promotions, surveys, and Site features</li>
            <li>Send updates, offers, and relevant communications</li>
          </ul>

          <p className="text-white/80 mt-4">
            Users may unsubscribe from marketing communications at any time via
            the link provided in our emails.
          </p>
        </section>

        {/* Section 4 */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-[#7C4DFF]">
            4. Data Protection and Security
          </h2>

          <p className="text-white/80">
            We implement appropriate technical and organizational measures to
            protect User data against unauthorized access, alteration,
            disclosure, or destruction. Sensitive data transmissions are secured
            using SSL encryption and industry-standard security practices.
          </p>
        </section>

        {/* Section 5 */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-[#7C4DFF]">
            5. Children’s Privacy
          </h2>

          <p className="text-white/80">
            Trade001 does not knowingly collect personal information from
            individuals under the age of 18. Our services are intended for
            adults only.
          </p>
        </section>

        {/* Section 6 */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-[#7C4DFF]">
            6. Acceptance of This Policy
          </h2>

          <p className="text-white/80">
            By using our Site, you agree to this Privacy Policy. We may update
            this policy at any time, and continued use of the Site indicates
            acceptance of those changes.
          </p>
        </section>

        {/* Section 7 */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-[#7C4DFF]">
            7. Contact Us
          </h2>

          <p className="text-white/80">
            If you have any questions regarding this Privacy Policy or our data
            practices, please contact us through the official channels provided
            on our Site.
          </p>
        </section>
      </div>
    </main>
  );
}
