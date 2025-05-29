
import { Shield, Eye, Download, Trash2, Lock, CheckCircle } from "lucide-react";

const GDPR = () => {
  const rights = [
    {
      icon: <Eye className="h-8 w-8 text-emerald-600" />,
      title: "Right to Access",
      description: "You can request a copy of all personal data we hold about you."
    },
    {
      icon: <Download className="h-8 w-8 text-orange-500" />,
      title: "Right to Portability",
      description: "You can request your data in a structured, machine-readable format."
    },
    {
      icon: <Trash2 className="h-8 w-8 text-rose-500" />,
      title: "Right to Erasure",
      description: "You can request that we delete your personal data under certain conditions."
    },
    {
      icon: <Lock className="h-8 w-8 text-emerald-600" />,
      title: "Right to Rectification",
      description: "You can request that we correct inaccurate or incomplete personal data."
    }
  ];

  const protections = [
    "Data is encrypted at rest and in transit",
    "Regular security audits and penetration testing",
    "Access controls and authentication systems",
    "Data minimization and purpose limitation",
    "Privacy by design and by default",
    "Data protection impact assessments"
  ];

  return (
    <div className="min-h-screen bg-white">

      
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-emerald-50 via-white to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Shield className="h-16 w-16 text-emerald-600 mx-auto mb-8" />
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
              GDPR
              <span className="bg-gradient-to-r from-emerald-600 to-orange-500 bg-clip-text text-transparent"> Compliance</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              CryptoGuard is fully compliant with the General Data Protection Regulation (GDPR). Learn about your rights and how we protect your data.
            </p>
            <p className="text-sm text-gray-500">
              Last updated: March 15, 2024
            </p>
          </div>
        </div>
      </section>

      {/* Your Rights */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Your GDPR Rights
            </h2>
            <p className="text-xl text-gray-600">
              Under GDPR, you have several rights regarding your personal data.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {rights.map((right, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center">
                    {right.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{right.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{right.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Protection */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                How We Protect Your Data
              </h2>
              <p className="text-xl text-gray-600">
                We implement comprehensive technical and organizational measures to ensure GDPR compliance.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {protections.map((protection, index) => (
                <div key={index} className="flex items-center gap-4 bg-white rounded-xl p-6 shadow-sm">
                  <CheckCircle className="h-6 w-6 text-emerald-500 flex-shrink-0" />
                  <span className="text-gray-700">{protection}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact DPO */}
      <section className="py-24 bg-gradient-to-br from-emerald-600 to-emerald-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Exercise Your Rights
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
            To exercise any of your GDPR rights or if you have questions about our data processing, contact our Data Protection Officer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              Contact DPO
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-emerald-600 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300">
              Request My Data
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GDPR;
