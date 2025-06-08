
import { Button } from "@/styles/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/styles/ui/card";
import { CheckCircle, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Pricing = () => {
  const navigate=useNavigate();
  const plans = [
    {
      name: "Starter",
      price: "$9",
      period: "/month",
      description: "Perfect for small teams getting started with secure file management",
      features: [
        "Up to 5 users",
        "100GB secure storage",
        "Basic encryption",
        "Email support",
        "Mobile apps"
      ],
      popular: false,
      color: "emerald"
    },
    {
      name: "Professional",
      price: "$29",
      period: "/month",
      description: "Advanced features for growing organizations",
      features: [
        "Up to 50 users",
        "1TB secure storage",
        "Military-grade encryption",
        "Role-based access control",
        "Priority support",
        "Advanced audit logs",
        "API access"
      ],
      popular: true,
      color: "orange"
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "Tailored solutions for large organizations",
      features: [
        "Unlimited users",
        "Unlimited storage",
        "Custom encryption",
        "Dedicated support",
        "On-premise deployment",
        "Custom integrations",
        "SLA guarantee"
      ],
      popular: false,
      color: "rose"
    }
  ];

  return (
    <div className="min-h-screen bg-white">

      
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-emerald-50 via-white to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
              Simple, Transparent
              <span className="bg-gradient-to-r from-emerald-600 to-orange-500 bg-clip-text text-transparent"> Pricing</span>
            </h1>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              Choose the perfect plan for your organization. All plans include our core security features with no hidden fees.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card key={index} className={`relative border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 ${plan.popular ? 'ring-2 ring-orange-500' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-orange-500 to-rose-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                      <Star className="h-4 w-4 fill-current" />
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader className="text-center pb-8 pt-8">
                  <CardTitle className="text-2xl text-gray-900 mb-2">{plan.name}</CardTitle>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600">{plan.period}</span>
                  </div>
                  <CardDescription className="text-gray-600">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <CheckCircle className={`h-5 w-5 text-${plan.color}-500 flex-shrink-0`} />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${plan.popular 
                      ? 'bg-gradient-to-r from-orange-500 to-rose-500 hover:from-orange-600 hover:to-rose-600' 
                      : 'bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800'
                    } text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300`}
                    onClick={()=>navigate('/auth/login')}
                  >
                    {plan.name === "Enterprise" ? "Contact Sales" : "Start Free Trial"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12">
              Frequently Asked Questions
            </h2>
            <div className="space-y-8 text-left">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Can I change plans anytime?</h3>
                <p className="text-gray-600">Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Is there a free trial?</h3>
                <p className="text-gray-600">Yes, all plans come with a 14-day free trial. No credit card required.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">What happens to my data if I cancel?</h3>
                <p className="text-gray-600">You can export all your data anytime. After cancellation, data is retained for 30 days before deletion.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Pricing;
