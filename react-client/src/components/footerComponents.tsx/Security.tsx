import { Shield, Lock, Eye, Key, CheckCircle, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/styles/ui/card";

const Security = () => {
  const securityFeatures = [
    {
      icon: <Shield className="h-8 w-8 text-emerald-600" />,
      title: "Zero-Knowledge Architecture",
      description: "Your data is encrypted before it leaves your device. We never have access to your encryption keys or decrypted data."
    },
    {
      icon: <Lock className="h-8 w-8 text-orange-500" />,
      title: "AES-256 Encryption",
      description: "Military-grade encryption that would take billions of years to crack with current technology."
    },
    {
      icon: <Eye className="h-8 w-8 text-rose-500" />,
      title: "Real-Time Monitoring",
      description: "24/7 security monitoring with instant alerts for any suspicious activities or unauthorized access attempts."
    },
    {
      icon: <Key className="h-8 w-8 text-emerald-600" />,
      title: "Multi-Factor Authentication",
      description: "Multiple layers of authentication including biometrics, hardware tokens, and SMS verification."
    }
  ];

  return (
    <div className="min-h-screen bg-white">

      
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-8">
              <Shield className="h-16 w-16 text-emerald-400 mx-auto mb-6" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-8">
              Enterprise-Grade
              <span className="bg-gradient-to-r from-emerald-400 to-orange-400 bg-clip-text text-transparent"> Security</span>
            </h1>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Protecting your most sensitive data with zero-knowledge architecture and military-grade encryption that even we can't break.
            </p>
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {securityFeatures.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                <CardHeader className="pb-4">
                  <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl text-gray-900 group-hover:text-emerald-600 transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Security Promise */}
      <section className="py-24 bg-gradient-to-br from-emerald-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <AlertTriangle className="h-16 w-16 text-orange-500 mx-auto mb-8" />
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              Our Security Promise
            </h2>
            <div className="space-y-6 text-lg text-gray-600">
              <div className="flex items-center gap-4 justify-center">
                <CheckCircle className="h-6 w-6 text-emerald-500 flex-shrink-0" />
                <span>We cannot access your data even if we wanted to</span>
              </div>
              <div className="flex items-center gap-4 justify-center">
                <CheckCircle className="h-6 w-6 text-emerald-500 flex-shrink-0" />
                <span>Your encryption keys are generated and stored locally</span>
              </div>
              <div className="flex items-center gap-4 justify-center">
                <CheckCircle className="h-6 w-6 text-emerald-500 flex-shrink-0" />
                <span>Regular security audits by independent third parties</span>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Security;
