
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/styles/ui/card";
import { Button } from "@/styles/ui/button";

const Contact = () => {
  const contactMethods = [
    {
      icon: <Mail className="h-8 w-8 text-emerald-600" />,
      title: "Email Support",
      description: "Get help from our support team",
      contact: "support@cryptoguard.com",
      availability: "24/7 response"
    },
    {
      icon: <Phone className="h-8 w-8 text-orange-500" />,
      title: "Phone Support",
      description: "Speak directly with our experts",
      contact: "+1 (555) 123-4567",
      availability: "Mon-Fri, 9AM-6PM EST"
    },
    {
      icon: <MapPin className="h-8 w-8 text-rose-500" />,
      title: "Office Location",
      description: "Visit our headquarters",
      contact: "123 Security St, San Francisco, CA",
      availability: "By appointment only"
    }
  ];

  return (
    <div className="min-h-screen bg-white">

      
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-emerald-50 via-white to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
              Get In
              <span className="bg-gradient-to-r from-emerald-600 to-orange-500 bg-clip-text text-transparent"> Touch</span>
            </h1>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              Have questions about CryptoGuard? Our security experts are here to help you protect your organization's sensitive data.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group text-center">
                <CardHeader className="pb-4">
                  <div className="flex justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    {method.icon}
                  </div>
                  <CardTitle className="text-xl text-gray-900 group-hover:text-emerald-600 transition-colors duration-300">
                    {method.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {method.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold text-gray-900 mb-2">{method.contact}</p>
                  <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                    <Clock className="h-4 w-4" />
                    {method.availability}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h2>
              <p className="text-xl text-gray-600">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
            </div>

            <Card className="border-0 shadow-xl">
              <CardContent className="p-12">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300"
                      placeholder="Enter your company name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Subject
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300">
                      <option>General Inquiry</option>
                      <option>Sales Question</option>
                      <option>Technical Support</option>
                      <option>Partnership</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Message
                    </label>
                    <textarea
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300"
                      placeholder="Tell us how we can help you..."
                    ></textarea>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;
