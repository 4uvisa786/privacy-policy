import React, { useState } from "react";

const TermsAndConditions = () => {
  const [activeSection, setActiveSection] = useState("introduction");

  const sections = [
    { id: "introduction", title: "Privacy Policy Overview" },
    { id: "scope", title: "1. Scope of This Policy" },
    { id: "collection", title: "2. Information We Collect" },
    { id: "usage", title: "3. Use of Information" },
    { id: "sharing", title: "4. Sharing of Information" },
    { id: "thirdparty", title: "5. Third-Party Services & SDKs" },
    { id: "payments", title: "6. Payments" },
    { id: "security", title: "7. Data Security" },
    { id: "deletion", title: "8. Data Retention & Deletion" },
    { id: "rights", title: "9. Your Rights" },
    { id: "cookies", title: "10. Cookies & Analytics" },
    { id: "children", title: "11. Children’s Privacy" },
    { id: "disclaimer", title: "12. No Government Affiliation" },
    { id: "links", title: "13. Third-Party Links" },
    { id: "changes", title: "14. Policy Changes" },
    { id: "contact", title: "15. Contact Us" },
  ];

  const scrollToSection = (id) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12">

        {/* Sidebar */}
        <aside className="md:w-1/4">
          <div className="sticky top-8">
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
              On this page
            </h3>
            <nav className="space-y-1">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`block w-full text-left px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    activeSection === section.id
                      ? "bg-blue-50 text-blue-700"
                      : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                  }`}
                >
                  {section.title}
                </button>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="md:w-3/4 bg-white shadow-sm border border-gray-200 rounded-xl p-8 md:p-12">
          <header className="border-b border-gray-100 pb-8 mb-8">
            <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
              Privacy Policy
            </h1>
            <p className="mt-4 text-sm text-gray-500">
              Effective Date: <span className="font-medium text-gray-700">January 8, 2026</span>
            </p>
          </header>

          <div className="prose prose-blue max-w-none text-gray-600 leading-relaxed">

            <section id="introduction">
              <p>
                At 4U Visas, we respect your privacy and are committed to protecting
                the personal information of our users. This Privacy Policy explains
                how we collect, use, store, share, and protect your information when
                you use our mobile application, website, or related services.
              </p>
              <p>
                By using our app or services, you agree to the collection and use of
                information in accordance with this Privacy Policy.
              </p>
            </section>

            <section id="scope">
              <h2>1. Scope of This Privacy Policy</h2>
              <ul>
                <li>The 4U Visas mobile application</li>
                <li>Our official website</li>
                <li>All visa, attestation, documentation, and travel-related services offered by 4U Visas</li>
              </ul>
            </section>

            <section id="collection">
              <h2>2. Information We Collect</h2>
              <p><strong>Personal Information:</strong> Full name, email address, phone number.</p>
              <p><strong>Sensitive Personal Information (when required):</strong></p>
              <ul>
                <li>CNIC or passport details</li>
                <li>Visa-related documents</li>
                <li>Educational and professional certificates</li>
                <li>CVs and supporting documents</li>
              </ul>
              <p>
                Sensitive data is collected strictly for verification, visa processing,
                and legal compliance purposes.
              </p>
              
            </section>

            <section id="usage">
              <h2>3. How We Use Your Information</h2>
              <ul>
                <li>Visa and attestation processing</li>
                <li>Embassy appointment coordination</li>
                <li>Document verification and legalization</li>
                <li>Communication regarding applications or requests</li>
                <li>Customer support and service updates</li>
                <li>App performance monitoring and improvement</li>
                <li>Legal and regulatory compliance</li>
              </ul>
              <p>
                We do not use your data for unauthorized marketing or profiling.
              </p>
            </section>

            <section id="sharing">
              <h2>4. Sharing of Information</h2>
              <ul>
                <li>Embassies, consulates, or authorized agents</li>
                <li>Government authorities where legally required</li>
                <li>Trusted third-party service providers</li>
              </ul>
              <p><strong>We do NOT sell, rent, or trade personal data.</strong></p>
            </section>

            <section id="thirdparty">
              <h2>5. Third-Party Services & SDKs</h2>
              <ul>
                <li>Currently we are not using but in future if we use then we will inform to user and update privicy policy</li>

              </ul>
            </section>

            <section id="payments">
              <h2>6. Payments</h2>
              <p>
              We do not currently process payments through the app,If payment features are introduced in the future, users will be informed and 
                4U Visas will not store card or UPI details.
              </p>
            </section>

            <section id="security">
              <h2>7. Data Security</h2>
              <p>
                Industry-standard safeguards are implemented, but no system
                can guarantee absolute security.
              </p>
            </section>

            <section id="deletion">
              <h2>8. Data Retention & Deletion</h2>
              <p>
                Data is retained only as required. Users may request deletion
                via Support@4uvisas.com or in-app options.
              </p>
            </section>

            <section id="rights">
              <h2>9. Your Rights</h2>
              <ul>
                <li>Access personal data</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion</li>
              </ul>
            </section>

            <section id="cookies">
              <h2>10. Cookies & Analytics</h2>
              <p>
                Cookies and analytics tools help improve performance and
                user experience.
              </p>
            </section>

            <section id="children">
              <h2>11. Children’s Privacy</h2>
              <p>
                Services are not intended for individuals under 18.
              </p>
            </section>

            <section id="disclaimer">
              <h2>12. No Government Affiliation Disclaimer</h2>
              <p>
                4U Visas is a private consultancy and not affiliated with any
                government or embassy.
              </p>
            </section>

            <section id="links">
              <h2>13. Third-Party Links</h2>
              <p>
                We are not responsible for external websites or their policies.
              </p>
            </section>

            <section id="changes">
              <h2>14. Changes to This Privacy Policy</h2>
              <p>
                Updates may occur and will reflect a revised effective date.
              </p>
            </section>

            <section id="contact">
              <h2>15. Contact Us</h2>
              <p>
                Email: Support@4uvisas.com<br />
                Phone / WhatsApp: +92 339 5555 804
              </p>
            </section>

          </div>
        </main>
      </div>
    </div>
  );
};

export default TermsAndConditions;
