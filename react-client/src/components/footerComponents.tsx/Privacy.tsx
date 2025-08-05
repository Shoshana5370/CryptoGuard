import { Shield, Eye, Lock, Database } from "lucide-react";
import { useAppDispatch } from "@/hooks";
import { openMailDialog } from "@/features/mail/mail";

const Privacy = () => {
  const dispatch = useAppDispatch();

  const handleContactClick = () => {
    dispatch(openMailDialog());
  };
  const sections = [
    {
      icon: <Shield className="h-8 w-8 text-emerald-600" />,
      title: "Information We Collect",
      content: [
        "Account information (name, email, company)",
        "Usage data and analytics",
        "Technical information (IP address, browser type)",
        "File metadata (not file contents)"
      ]
    },
    {
      icon: <Eye className="h-8 w-8 text-orange-500" />,
      title: "How We Use Your Information",
      content: [
        "Provide and improve our services",
        "Communicate with you about your account",
        "Ensure security and prevent fraud",
        "Comply with legal obligations"
      ]
    },
    {
      icon: <Lock className="h-8 w-8 text-rose-500" />,
      title: "Data Protection",
      content: [
        "End-to-end encryption for all files",
        "Zero-knowledge architecture",
        "Regular security audits",
        "SOC 2 and ISO 27001 compliance"
      ]
    },
    {
      icon: <Database className="h-8 w-8 text-emerald-600" />,
      title: "Data Retention",
      content: [
        "Account data retained while account is active",
        "File data encrypted and stored securely",
        "Deleted data is permanently removed",
        "30-day grace period after account deletion"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-emerald-50 via-white to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
              Privacy
              <span className="bg-gradient-to-r from-emerald-600 to-orange-500 bg-clip-text text-transparent"> Policy</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Your privacy is fundamental to everything we do. Learn how we protect and handle your information.
            </p>
            <p className="text-sm text-gray-500">
              Last updated: March 15, 2024
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Sections */}
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
                  <ul className="space-y-3">
                    {section.content.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Questions About Your Privacy?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Contact our privacy team if you have any questions about how we handle your data.
            </p>
            <button 
              onClick={handleContactClick}
              className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              Contact Privacy Team
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Privacy;
