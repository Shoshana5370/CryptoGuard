import { Award, Globe, Shield, Users } from "lucide-react";
import { Card, CardContent } from "@/styles/ui/card";

const About = () => {

  const stats = [
    { icon: <Users className="h-8 w-8 text-emerald-600" />, number: "10,000+", label: "Organizations Protected" },
    { icon: <Globe className="h-8 w-8 text-orange-500" />, number: "50+", label: "Countries Served" },
    { icon: <Shield className="h-8 w-8 text-rose-500" />, number: "99.99%", label: "Uptime Guarantee" },
    { icon: <Award className="h-8 w-8 text-emerald-600" />, number: "5+", label: "Security Certifications" }
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Co-Founder",
      bio: "Former cybersecurity executive with 15+ years protecting enterprise data."
    },
    {
      name: "Michael Chen",
      role: "CTO & Co-Founder",
      bio: "Cryptography expert and former security researcher at major tech companies."
    },
    {
      name: "Emily Rodriguez",
      role: "VP of Security",
      bio: "Compliance specialist with expertise in international security standards."
    }
  ];
  return (
    <div className="min-h-screen bg-white">      
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-emerald-50 via-white to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
              About
              <span className="bg-gradient-to-r from-emerald-600 to-orange-500 bg-clip-text text-transparent"> CryptoGuard</span>
            </h1>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              We're on a mission to make enterprise-grade security accessible to organizations of all sizes, protecting sensitive data without compromising usability.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                In today's digital world, data breaches and security threats are constant concerns for organizations. We founded CryptoGuard because we believe that powerful security shouldn't be complicated or expensive.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our zero-knowledge architecture ensures that your data remains private and secure, while our intuitive interface makes advanced security features accessible to everyone on your team.
              </p>
            </div>
            <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-3xl p-12 text-white text-center">
              <Shield className="h-24 w-24 mx-auto mb-8" />
              <h3 className="text-3xl font-bold mb-4">Security First</h3>
              <p className="text-emerald-100 text-lg">
                Every decision we make is guided by our commitment to protecting your most sensitive data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Trusted Worldwide
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 transform group-hover:scale-105">
                  <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Meet Our
              <span className="bg-gradient-to-r from-emerald-600 to-orange-500 bg-clip-text text-transparent"> Leadership</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-8 text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-emerald-100 to-orange-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <Users className="h-12 w-12 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-emerald-600 font-semibold mb-4">{member.role}</p>
                  <p className="text-gray-600 leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
