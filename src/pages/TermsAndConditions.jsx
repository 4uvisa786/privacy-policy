import React, { useState } from "react";

const TermsAndConditions = () => {
  const [activeSection, setActiveSection] = useState("introduction");

  const sections = [
    { id: "introduction", title: "1. Privacy Overview" },
    { id: "usage", title: "2. Information We Collect" },
    { id: "accounts", title: "3. How We Use Information" },
    { id: "ip", title: "4. Data Sharing & Third Parties" },
    { id: "liability", title: "5. Data Security" },
    { id: "termination", title: "6. Data Retention & Deletion" },
    { id: "changes", title: "7. Policy Updates" },
    { id: "contact", title: "8. Contact Details" },
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

            <section id="introduction" className="mb-10">
              <h2 className="text-xl font-bold text-gray-800 mb-3">
                1. Privacy Overview
              </h2>
              <p>
                4U Visas values your privacy and handles personal information responsibly.
                This Privacy Policy explains how data is collected, processed, and protected
                when you use our mobile application, website, or related services.
              </p>
            </section>

            <section id="usage" className="mb-10">
              <h2 className="text-xl font-bold text-gray-800 mb-3">
                2. Information We Collect
              </h2>
              <p>
                We may collect personal details such as name, phone number, and email address.
                For visa-related services, sensitive information like passport or identification
                documents may be required strictly for verification and legal processing.
              </p>
            </section>

            <section id="accounts" className="mb-10">
              <h2 className="text-xl font-bold text-gray-800 mb-3">
                3. How We Use Information
              </h2>
              <p>
                Collected data is used solely for providing visa assistance, document verification,
                appointment coordination, customer support, and compliance with applicable laws.
                User data is never used for unauthorized marketing activities.
              </p>
            </section>

            <section id="ip" className="mb-10">
              <h2 className="text-xl font-bold text-gray-800 mb-3">
                4. Data Sharing & Third Parties
              </h2>
              <p>
                Information may be shared with embassies, government authorities, or trusted
                service partners only when required to deliver services. We do not sell or trade
                personal data under any circumstances.
              </p>
            </section>

            <section id="liability" className="mb-10">
              <h2 className="text-xl font-bold text-gray-800 mb-3">
                5. Data Security
              </h2>
              <p className="bg-amber-50 border-l-4 border-amber-400 p-4 italic">
                Appropriate technical and organizational safeguards are implemented to protect
                data. While we take strong precautions, absolute security cannot be guaranteed.
              </p>
            </section>

            <section id="termination" className="mb-10">
              <h2 className="text-xl font-bold text-gray-800 mb-3">
                6. Data Retention & Deletion
              </h2>
              <p>
                Personal data is retained only for the duration necessary to fulfill services
                and legal obligations. Users may request account and data deletion by contacting
                Support@4uvisas.com. Requests are processed within a reasonable timeframe.
              </p>
            </section>

            <section id="changes" className="mb-10">
              <h2 className="text-xl font-bold text-gray-800 mb-3">
                7. Policy Updates
              </h2>
              <p>
                This Privacy Policy may be updated periodically. Any revisions will be reflected
                with a new effective date. Continued use of the app implies acceptance of changes.
              </p>
            </section>

            <section id="contact" className="mb-10">
              <h2 className="text-xl font-bold text-gray-800 mb-3">
                8. Contact Details
              </h2>
              <p>
                For privacy-related questions or data requests, please contact:
                <br />
                Email: Support@4uvisas.com
                <br />
                Phone / WhatsApp: +92 339 5555 804
              </p>
            </section>

          </div>

          <footer className="mt-12 pt-8 border-t border-gray-100">
            <p className="text-xs text-gray-400 text-center uppercase tracking-widest">
              This Privacy Policy is designed to comply with Google Play data safety requirements.
            </p>
          </footer>
        </main>
      </div>
    </div>
  );
};

export default TermsAndConditions;
