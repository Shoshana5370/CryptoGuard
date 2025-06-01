import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from "@/styles/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/styles/ui/card";
import { CheckCircle, Star } from "lucide-react";
const Pricing = () => {
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
    return (_jsxs("div", { className: "min-h-screen bg-white", children: [_jsx("section", { className: "py-24 bg-gradient-to-br from-emerald-50 via-white to-orange-50", children: _jsx("div", { className: "container mx-auto px-4", children: _jsxs("div", { className: "text-center max-w-4xl mx-auto", children: [_jsxs("h1", { className: "text-5xl md:text-6xl font-bold text-gray-900 mb-8", children: ["Simple, Transparent", _jsx("span", { className: "bg-gradient-to-r from-emerald-600 to-orange-500 bg-clip-text text-transparent", children: " Pricing" })] }), _jsx("p", { className: "text-xl text-gray-600 mb-12 leading-relaxed", children: "Choose the perfect plan for your organization. All plans include our core security features with no hidden fees." })] }) }) }), _jsx("section", { className: "py-24", children: _jsx("div", { className: "container mx-auto px-4", children: _jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto", children: plans.map((plan, index) => (_jsxs(Card, { className: `relative border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 ${plan.popular ? 'ring-2 ring-orange-500' : ''}`, children: [plan.popular && (_jsx("div", { className: "absolute -top-4 left-1/2 transform -translate-x-1/2", children: _jsxs("span", { className: "bg-gradient-to-r from-orange-500 to-rose-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2", children: [_jsx(Star, { className: "h-4 w-4 fill-current" }), "Most Popular"] }) })), _jsxs(CardHeader, { className: "text-center pb-8 pt-8", children: [_jsx(CardTitle, { className: "text-2xl text-gray-900 mb-2", children: plan.name }), _jsxs("div", { className: "mb-4", children: [_jsx("span", { className: "text-4xl font-bold text-gray-900", children: plan.price }), _jsx("span", { className: "text-gray-600", children: plan.period })] }), _jsx(CardDescription, { className: "text-gray-600", children: plan.description })] }), _jsxs(CardContent, { className: "pt-0", children: [_jsx("ul", { className: "space-y-4 mb-8", children: plan.features.map((feature, idx) => (_jsxs("li", { className: "flex items-center gap-3", children: [_jsx(CheckCircle, { className: `h-5 w-5 text-${plan.color}-500 flex-shrink-0` }), _jsx("span", { className: "text-gray-600", children: feature })] }, idx))) }), _jsx(Button, { className: `w-full ${plan.popular
                                                ? 'bg-gradient-to-r from-orange-500 to-rose-500 hover:from-orange-600 hover:to-rose-600'
                                                : 'bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800'} text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300`, children: plan.name === "Enterprise" ? "Contact Sales" : "Start Free Trial" })] })] }, index))) }) }) }), _jsx("section", { className: "py-24 bg-gradient-to-br from-gray-50 to-white", children: _jsx("div", { className: "container mx-auto px-4", children: _jsxs("div", { className: "text-center max-w-4xl mx-auto", children: [_jsx("h2", { className: "text-4xl font-bold text-gray-900 mb-12", children: "Frequently Asked Questions" }), _jsxs("div", { className: "space-y-8 text-left", children: [_jsxs("div", { children: [_jsx("h3", { className: "text-xl font-semibold text-gray-900 mb-2", children: "Can I change plans anytime?" }), _jsx("p", { className: "text-gray-600", children: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately." })] }), _jsxs("div", { children: [_jsx("h3", { className: "text-xl font-semibold text-gray-900 mb-2", children: "Is there a free trial?" }), _jsx("p", { className: "text-gray-600", children: "Yes, all plans come with a 14-day free trial. No credit card required." })] }), _jsxs("div", { children: [_jsx("h3", { className: "text-xl font-semibold text-gray-900 mb-2", children: "What happens to my data if I cancel?" }), _jsx("p", { className: "text-gray-600", children: "You can export all your data anytime. After cancellation, data is retained for 30 days before deletion." })] })] })] }) }) })] }));
};
export default Pricing;
