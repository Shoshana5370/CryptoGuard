import { Button } from "@/styles/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/styles/ui/card";
import { ArrowRight, Clock, MapPin } from "lucide-react";
import { useAppDispatch } from "@/hooks";
import { openMailDialog } from "@/features/mail/mail";

const Careers = () => {
  const dispatch = useAppDispatch();

  const handleContactClick = () => {
    dispatch(openMailDialog());
  };
  const jobs = [
    {
      title: "Senior Security Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description: "Lead the development of our zero-knowledge encryption systems and security protocols."
    },
    {
      title: "Product Manager - Security",
      department: "Product",
      location: "San Francisco, CA",
      type: "Full-time",
      description: "Drive product strategy for our enterprise security features and compliance tools."
    },
    {
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description: "Build and maintain our secure, scalable infrastructure across multiple cloud regions."
    },
    {
      title: "Customer Success Manager",
      department: "Customer Success",
      location: "New York, NY",
      type: "Full-time",
      description: "Help enterprise customers maximize value from our security platform."
    }
  ];

  const benefits = [
    "Competitive salary and equity",
    "Comprehensive health insurance",
    "Flexible remote work options",
    "Professional development budget",
    "Unlimited PTO policy",
    "Top-tier equipment and tools"
  ];

  return (
    <div className="min-h-screen bg-white">
            {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-emerald-50 via-white to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
              Join Our
              <span className="bg-gradient-to-r from-emerald-600 to-orange-500 bg-clip-text text-transparent"> Mission</span>
            </h1>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              Help us build the future of secure file management. Join a team of passionate security experts making enterprise-grade protection accessible to everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Our Culture
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                We're a remote-first company that values diversity, innovation, and security-first thinking. Our team is distributed across the globe, united by our mission to protect sensitive data.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We believe in giving our team the autonomy to do their best work while providing the support and resources needed to grow professionally.
              </p>
            </div>
            <div className="bg-gradient-to-br from-orange-500 to-rose-500 rounded-3xl p-12 text-white">
              <h3 className="text-3xl font-bold mb-6">Why CryptoGuard?</h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Open Positions
            </h2>
            <p className="text-xl text-gray-600">
              Find your next opportunity with our growing team.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {jobs.map((job, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] group">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl text-gray-900 group-hover:text-emerald-600 transition-colors duration-300">
                        {job.title}
                      </CardTitle>
                      <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                        <span className="bg-emerald-100 text-emerald-600 px-3 py-1 rounded-full font-semibold">
                          {job.department}
                        </span>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {job.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {job.type}
                        </div>
                      </div>
                    </div>
                    <Button className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white px-6 py-2 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                      Apply Now
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-base leading-relaxed">
                    {job.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-emerald-600 to-emerald-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Don't see the right role?
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals. Send us your resume and let us know how you'd like to contribute.
          </p>
          <Button
            onClick={handleContactClick}
            className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Get in Touch
          </Button>
        </div>
      </section>

    </div>
  );
};

export default Careers;
