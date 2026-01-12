import React, { useState } from "react";

const TermsAndConditions = () => {
  const [activeSection, setActiveSection] = useState("introduction");

  const sections = [
    { id: "introduction", title: "1. Introduction" },
    { id: "usage", title: "2. Use of Our Services" },
    { id: "accounts", title: "3. User Accounts" },
    { id: "ip", title: "4. Intellectual Property" },
    { id: "liability", title: "5. Limitation of Liability" },
    { id: "termination", title: "6. Termination" },
    { id: "changes", title: "7. Changes to Terms" },
    { id: "contact", title: "8. Contact Information" },
  ];

  const scrollToSection = (id) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12">
        
        {/* Sidebar Navigation - Sticky for easy access */}
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

        {/* Main Content Card */}
        <main className="md:w-3/4 bg-white shadow-sm border border-gray-200 rounded-xl p-8 md:p-12">
          <header className="border-b border-gray-100 pb-8 mb-8">
            <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
              Terms & Conditions
            </h1>
            <p className="mt-4 text-sm text-gray-500">
              Last updated: <span className="font-medium text-gray-700">January 12, 2026</span>
            </p>
          </header>

          <div className="prose prose-blue max-w-none text-gray-600 leading-relaxed">
            <section id="introduction" className="mb-10">
              <h2 className="text-xl font-bold text-gray-800 mb-3">1. Introduction</h2>
              <p>
                Welcome to our website. By accessing or using our services, you agree
                to be bound by these Terms and Conditions. If you do not agree with any
                part of these terms, please do not use our website.
              </p>
            </section>

            <section id="usage" className="mb-10">
              <h2 className="text-xl font-bold text-gray-800 mb-3">2. Use of Our Services</h2>
              <p>
                You agree to use this website only for lawful purposes and in a way
                that does not infringe the rights of others or restrict their use of
                the website. Any misuse may result in termination of access.
              </p>
            </section>

            <section id="accounts" className="mb-10">
              <h2 className="text-xl font-bold text-gray-800 mb-3">3. User Accounts</h2>
              <p>
                If you create an account on our website, you are responsible for
                maintaining the confidentiality of your account credentials and all
                activities that occur under your account.
              </p>
            </section>

            <section id="ip" className="mb-10">
              <h2 className="text-xl font-bold text-gray-800 mb-3">4. Intellectual Property</h2>
              <p>
                All content, logos, designs, and materials on this website are the
                intellectual property of the company and may not be copied,
                reproduced, or distributed without prior written permission.
              </p>
            </section>

            <section id="liability" className="mb-10">
              <h2 className="text-xl font-bold text-gray-800 mb-3">5. Limitation of Liability</h2>
              <p className="bg-amber-50 border-l-4 border-amber-400 p-4 italic">
                We are not responsible for any direct, indirect, or incidental damages
                resulting from the use or inability to use our services, including
                loss of data or profits.
              </p>
            </section>

            <section id="termination" className="mb-10">
              <h2 className="text-xl font-bold text-gray-800 mb-3">6. Termination</h2>
              <p>
                We reserve the right to suspend or terminate your access to the
                website at any time without prior notice if you violate these Terms
                and Conditions.
              </p>
            </section>

            <section id="changes" className="mb-10">
              <h2 className="text-xl font-bold text-gray-800 mb-3">7. Changes to Terms</h2>
              <p>
                We may update these Terms and Conditions from time to time. Continued
                use of the website after changes are posted constitutes acceptance of
                the updated terms.
              </p>
            </section>

            <section id="contact" className="mb-10">
              <h2 className="text-xl font-bold text-gray-800 mb-3">8. Contact Information</h2>
              <p>
                If you have any questions about these Terms and Conditions, please
                contact us through the information provided on our website.
              </p>
            </section>
          </div>

          <footer className="mt-12 pt-8 border-t border-gray-100">
            <p className="text-xs text-gray-400 text-center uppercase tracking-widest">
              Legal Disclaimer: These terms do not constitute legal advice.
            </p>
          </footer>
        </main>
      </div>
    </div>
  );
};

export default TermsAndConditions;