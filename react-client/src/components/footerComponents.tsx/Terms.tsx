
import { FileText, Shield, Users, AlertTriangle } from "lucide-react";

const Terms = () => {
  const sections = [
    {
      icon: <FileText className="h-8 w-8 text-emerald-600" />,
      title: "Terms of Service",
      content: "By using CryptoGuard, you agree to these terms and conditions. These terms govern your use of our secure file management platform and services."
    },
    {
      icon: <Shield className="h-8 w-8 text-orange-500" />,
      title: "Acceptable Use",
      content: "You may only use CryptoGuard for lawful purposes. You agree not to use our service to store, share, or transmit illegal content or to violate any applicable laws."
    },
    {
      icon: <Users className="h-8 w-8 text-rose-500" />,
      title: "Account Responsibilities",
      content: "You are responsible for maintaining the security of your account credentials and for all activities that occur under your account."
    },
    {
      icon: <AlertTriangle className="h-8 w-8 text-emerald-600" />,
      title: "Service Availability",
      content: "While we strive for 99.99% uptime, we cannot guarantee uninterrupted service. We reserve the right to modify or discontinue features with notice."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-emerald-50 via-white to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
              Terms of
              <span className="bg-gradient-to-r from-emerald-600 to-orange-500 bg-clip-text text-transparent"> Service</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              These terms govern your use of CryptoGuard's secure file management platform and services.
            </p>
            <p className="text-sm text-gray-500">
              Last updated: March 15, 2024
            </p>
          </div>
        </div>
      </section>

      {/* Terms Sections */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-16">
            {sections.map((section, index) => (
              <div key={index} className="flex gap-8 items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center">
                  {section.icon}
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">{section.title}</h2>
                  <p className="text-gray-600 leading-relaxed text-lg">{section.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Notice */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Legal Questions?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Contact our legal team if you have questions about these terms of service.
            </p>
            <button className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              Contact Legal Team
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;
