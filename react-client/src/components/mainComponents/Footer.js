import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// import { Link } from "react-router-dom"
// import Logo from "./Logo"
// const Footer = () => {
//     return (<>
//     <div className="container mx-auto px-4 py-12">
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//             <div>
//               <div className="flex items-center gap-2 mb-4">
//                 <Logo/>
//               </div>
//               <p className="text-gray-600">
//                 Secure file encryption for everyone. Protect your digital assets with grade encryption.
//               </p>
//             </div>
//             <div>
//               <h3 className="font-semibold text-gray-900 mb-4">Product</h3>
//               <ul className="space-y-3">
//                 <li><Link to="#features" className="text-gray-600 hover:text-gray-900">Features</Link></li>
//                 <li><Link to="#security" className="text-gray-600 hover:text-gray-900">Security</Link></li>
//                 <li><Link to="#pricing" className="text-gray-600 hover:text-gray-900">Pricing</Link></li>
//                 <li><Link to="#faq" className="text-gray-600 hover:text-gray-900">FAQ</Link></li>
//               </ul>
//             </div>
//             <div>
//               <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
//               <ul className="space-y-3">
//                 <li><Link to="#about" className="text-gray-600 hover:text-gray-900">About</Link></li>
//                 <li><Link to="#blog" className="text-gray-600 hover:text-gray-900">Blog</Link></li>
//                 <li><Link to="#careers" className="text-gray-600 hover:text-gray-900">Careers</Link></li>
//                 <li><Link to="#contact" className="text-gray-600 hover:text-gray-900">Contact</Link></li>
//               </ul>
//             </div>
//             <div>
//               <h3 className="font-semibold text-gray-900 mb-4">Legal</h3>
//               <ul className="space-y-3">
//                 <li><Link to="#privacy" className="text-gray-600 hover:text-gray-900">Privacy Policy</Link></li>
//                 <li><Link to="#terms" className="text-gray-600 hover:text-gray-900">Terms of Service</Link></li>
//                 <li><Link to="#cookies" className="text-gray-600 hover:text-gray-900">Cookie Policy</Link></li>
//                 <li><Link to="#gdpr" className="text-gray-600 hover:text-gray-900">GDPR</Link></li>
//               </ul>
//             </div>
//           </div>
//           <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
//             <p className="text-gray-600 text-sm">
//               © {new Date().getFullYear()} CryptoGuard. All rights reserved.
//             </p>
//             <div className="flex gap-6 mt-4 md:mt-0">
//               <a href="#" className="text-gray-600 hover:text-gray-900">
//                 <span className="sr-only">Twitter</span>
//                 <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
//                   <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
//                 </svg>
//               </a>
//               <a href="#" className="text-gray-600 hover:text-gray-900">
//                 <span className="sr-only">GitHub</span>
//                 <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
//                   <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
//                 </svg>
//               </a>
//             </div>
//           </div>
//         </div>
//     </>)
// }
// export default Footer
import { Link } from "react-router-dom";
import Logo from "./Logo";
const Footer = () => {
    return (_jsx("footer", { className: "bg-gradient-to-b from-gray-50 to-gray-100 border-t border-gray-200", children: _jsxs("div", { className: "container mx-auto px-4 py-16", children: [_jsxs("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-8", children: [_jsxs("div", { className: "md:col-span-1", children: [_jsx("div", { className: "flex items-center gap-2 mb-6", children: _jsx(Logo, {}) }), _jsx("p", { className: "text-gray-600 leading-relaxed mb-6", children: "Secure file encryption for everyone. Protect your digital assets with military-grade encryption." }), _jsxs("div", { className: "flex gap-4", children: [_jsxs("a", { href: "#", className: "text-gray-400 hover:text-emerald-600 transition-colors", children: [_jsx("span", { className: "sr-only", children: "Twitter" }), _jsx("svg", { className: "h-6 w-6", fill: "currentColor", viewBox: "0 0 24 24", children: _jsx("path", { d: "M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" }) })] }), _jsxs("a", { href: "#", className: "text-gray-400 hover:text-emerald-600 transition-colors", children: [_jsx("span", { className: "sr-only", children: "GitHub" }), _jsx("svg", { className: "h-6 w-6", fill: "currentColor", viewBox: "0 0 24 24", children: _jsx("path", { fillRule: "evenodd", d: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z", clipRule: "evenodd" }) })] })] })] }), _jsxs("div", { children: [_jsx("h3", { className: "font-bold text-gray-900 mb-6", children: "Product" }), _jsxs("ul", { className: "space-y-4", children: [_jsx("li", { children: _jsx(Link, { to: "#features", className: "text-gray-600 hover:text-emerald-600 transition-colors", children: "Features" }) }), _jsx("li", { children: _jsx(Link, { to: "#security", className: "text-gray-600 hover:text-emerald-600 transition-colors", children: "Security" }) }), _jsx("li", { children: _jsx(Link, { to: "#pricing", className: "text-gray-600 hover:text-emerald-600 transition-colors", children: "Pricing" }) }), _jsx("li", { children: _jsx(Link, { to: "#faq", className: "text-gray-600 hover:text-emerald-600 transition-colors", children: "FAQ" }) })] })] }), _jsxs("div", { children: [_jsx("h3", { className: "font-bold text-gray-900 mb-6", children: "Company" }), _jsxs("ul", { className: "space-y-4", children: [_jsx("li", { children: _jsx(Link, { to: "#about", className: "text-gray-600 hover:text-emerald-600 transition-colors", children: "About" }) }), _jsx("li", { children: _jsx(Link, { to: "#blog", className: "text-gray-600 hover:text-emerald-600 transition-colors", children: "Blog" }) }), _jsx("li", { children: _jsx(Link, { to: "#careers", className: "text-gray-600 hover:text-emerald-600 transition-colors", children: "Careers" }) }), _jsx("li", { children: _jsx(Link, { to: "#contact", className: "text-gray-600 hover:text-emerald-600 transition-colors", children: "Contact" }) })] })] }), _jsxs("div", { children: [_jsx("h3", { className: "font-bold text-gray-900 mb-6", children: "Legal" }), _jsxs("ul", { className: "space-y-4", children: [_jsx("li", { children: _jsx(Link, { to: "#privacy", className: "text-gray-600 hover:text-emerald-600 transition-colors", children: "Privacy Policy" }) }), _jsx("li", { children: _jsx(Link, { to: "#terms", className: "text-gray-600 hover:text-emerald-600 transition-colors", children: "Terms of Service" }) }), _jsx("li", { children: _jsx(Link, { to: "#cookies", className: "text-gray-600 hover:text-emerald-600 transition-colors", children: "Cookie Policy" }) }), _jsx("li", { children: _jsx(Link, { to: "#gdpr", className: "text-gray-600 hover:text-emerald-600 transition-colors", children: "GDPR" }) })] })] })] }), _jsxs("div", { className: "border-t border-gray-300 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center", children: [_jsxs("p", { className: "text-gray-600 text-sm", children: ["\u00A9 ", new Date().getFullYear(), " CryptoGuard. All rights reserved."] }), _jsxs("div", { className: "flex items-center gap-2 mt-4 md:mt-0", children: [_jsx("span", { className: "text-gray-500 text-sm", children: "Built with" }), _jsx("span", { className: "text-red-500", children: "\u2665" }), _jsx("span", { className: "text-gray-500 text-sm", children: "for security" })] })] })] }) }));
};
export default Footer;
