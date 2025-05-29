
import { Cookie, Settings, Shield, BarChart } from "lucide-react";

const Cookies = () => {
  const cookieTypes = [
    {
      icon: <Shield className="h-8 w-8 text-emerald-600" />,
      title: "Essential Cookies",
      description: "Required for the website to function properly",
      examples: ["Authentication tokens", "Security preferences", "Session management"]
    },
    {
      icon: <BarChart className="h-8 w-8 text-orange-500" />,
      title: "Analytics Cookies",
      description: "Help us understand how visitors use our website",
      examples: ["Page views", "User interactions", "Performance metrics"]
    },
    {
      icon: <Settings className="h-8 w-8 text-rose-500" />,
      title: "Functional Cookies",
      description: "Remember your preferences and settings",
      examples: ["Language preferences", "Theme settings", "User preferences"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">

      
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-emerald-50 via-white to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Cookie className="h-16 w-16 text-emerald-600 mx-auto mb-8" />
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
              Cookie
              <span className="bg-gradient-to-r from-emerald-600 to-orange-500 bg-clip-text text-transparent"> Policy</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Learn about how we use cookies to improve your experience on CryptoGuard.
            </p>
            <p className="text-sm text-gray-500">
              Last updated: March 15, 2024
            </p>
          </div>
        </div>
      </section>

      {/* Cookie Types */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Types of Cookies We Use
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {cookieTypes.map((type, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="text-center mb-6">
                  {type.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{type.title}</h3>
                <p className="text-gray-600 mb-6 text-center">{type.description}</p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900 text-sm">Examples:</h4>
                  <ul className="space-y-1">
                    {type.examples.map((example, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cookie Management */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              Managing Your Cookie Preferences
            </h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              You can control and manage cookies in several ways. Most browsers allow you to block or delete cookies through their settings.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Browser Settings</h3>
                <p className="text-gray-600 mb-4">
                  Most web browsers allow you to control cookies through their settings preferences.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Block all cookies</li>
                  <li>• Block third-party cookies</li>
                  <li>• Delete cookies when browser closes</li>
                  <li>• Get notified when cookies are set</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Opt-Out Tools</h3>
                <p className="text-gray-600 mb-4">
                  Use industry-standard opt-out tools to control advertising and analytics cookies.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Network Advertising Initiative</li>
                  <li>• Digital Advertising Alliance</li>
                  <li>• Google Analytics Opt-out</li>
                  <li>• Browser do-not-track settings</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Cookies;
