import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// // import { motion } from "framer-motion";
// // import EncryptionVisualizer from "./EncraptionVizualer";
// // import Logo from "./Logo";
// // import { Button } from "@/styles/ui/button";
// // import EncryptionSteps from "./EncraptionSteps";
// // import SecurityFeatures from "./SecuirtyFeateras";
// // import { Upload } from "lucide-react"
// // const Home=() =>{
// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-stone-50">
// //       <main className="container mx-auto px-4 py-12 max-w-7xl">
// //         <section className="flex flex-col md:flex-row items-center justify-between gap-12 mb-24">
// //           <div className="max-w-xl">
// //             <motion.div 
// //               initial={{ opacity: 0, y: 20 }} 
// //               animate={{ opacity: 1, y: 0 }}
// //               transition={{ delay: 0.2 }}
// //               className="mb-6"
// //             >
// //               <div className="flex items-center gap-3 mb-4">
// //                 <Logo />
// //               </div>
// //               <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-6">
// //                 Advanced File Encryption System
// //               </h1>
// //               <p className="text-gray-600 text-lg leading-relaxed mb-8">
// //               Protect your organization's most sensitive documents with powerful encryption, custom file access, and secure, time-limited sharing.  
// //               Take full control over who can view, download, or share your data — with complete visibility and security.
// //               </p>
// //               <div className="flex flex-wrap gap-4">
// //                 <Button 
// //                   size="lg"
// //                   className="bg-emerald-700 hover:bg-emerald-800 text-white"
// //                   onClick={() => {}}
// //                   >
// //                   <Upload className="mr-2 h-5 w-5" />
// //                   Select File
// //                 </Button>
// //                 <Button 
// //                   size="lg"
// //                   variant="outline"
// //                   className="border-emerald-700 text-emerald-700 hover:bg-emerald-50">
// //                   Learn More
// //                 </Button>
// //               </div>
// //             </motion.div>
// //           </div>
// //           <div className="w-full md:w-1/2">
// //             <motion.div
// //               initial={{ opacity: 0, scale: 0.9 }}
// //               animate={{ opacity: 1, scale: 1 }}
// //               transition={{ delay: 0.4 }}
// //             >
// //               <EncryptionVisualizer />
// //             </motion.div>
// //           </div>
// //         </section>
// //         <section className="mb-24">
// //           <div className="text-center mb-12">
// //             <h2 className="text-3xl font-bold text-gray-900 mb-4">Advanced Security Features</h2>
// //             <p className="text-gray-600 max-w-2xl mx-auto">
// //               Our encryption system uses cutting-edge technology to ensure your files remain private and secure
// //             </p>
// //           </div>     
// //           <SecurityFeatures />
// //         </section>
// //         <section className="mb-24">
// //           <div className="text-center mb-12">
// //             <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
// //             <p className="text-gray-600 max-w-2xl mx-auto">
// //               Our advanced encryption process is simple to use yet extremely secure
// //             </p>
// //           </div>
// //           <EncryptionSteps />
// //         </section>
// //       </main>
// //     </div>
// //   );
// // }
// // export default Home;
// import { Button } from "@/styles/ui/button";
// import { motion } from "framer-motion";
// import { Upload, ArrowRight } from "lucide-react";
// import EncryptionVisualizer from "./EncraptionVizualer";
// import SecurityFeatures from "./SecuirtyFeateras";
// import EncryptionSteps from "./EncraptionSteps";
// const Home = () => {
//   return (
//     <div className="min-h-screen">
//       <main className="container mx-auto px-4 py-16 max-w-7xl">
//         {/* Hero Section */}
//         <section className="flex flex-col lg:flex-row items-center justify-between gap-16 mb-32">
//           <div className="max-w-2xl lg:w-1/2">
//             <motion.div 
//               initial={{ opacity: 0, y: 30 }} 
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.2, duration: 0.8 }}
//               className="mb-8"
//             >
//               <div className="flex items-center gap-3 mb-6">
//                 <div className="flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full border border-emerald-100">
//                   <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
//                   <span className="text-emerald-700 text-sm font-medium">Enterprise Security</span>
//                 </div>
//               </div>
//               <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-6 leading-tight">
//                 Advanced File{" "}
//                 <span className="bg-gradient-to-r from-emerald-600 to-emerald-800 bg-clip-text text-transparent">
//                   Encryption
//                 </span>{" "}
//                 System
//               </h1>
//               <p className="text-gray-600 text-xl leading-relaxed mb-10 max-w-xl">
//                 Protect your organization's most sensitive documents with powerful encryption, custom file access, and secure, time-limited sharing. Take full control over who can view, download, or share your data — with complete visibility and security.
//               </p>
//               <div className="flex flex-col sm:flex-row gap-4">
//                 <Button 
//                   size="lg"
//                   className="bg-emerald-600 hover:bg-emerald-700 text-white shadow-xl shadow-emerald-600/25 hover:shadow-2xl hover:shadow-emerald-600/30 transition-all duration-300 text-lg px-8 py-6 group"
//                   onClick={() => {}}
//                 >
//                   <Upload className="mr-3 h-5 w-5 group-hover:scale-110 transition-transform" />
//                   Select File
//                   <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
//                 </Button>
//                 <Button 
//                   size="lg"
//                   variant="outline"
//                   className="border-2 border-emerald-200 text-emerald-700 hover:bg-emerald-50 hover:border-emerald-300 transition-all duration-300 text-lg px-8 py-6"
//                 >
//                   Learn More
//                 </Button>
//               </div>
//             </motion.div>
//           </div>
//           <div className="w-full lg:w-1/2">
//             <motion.div
//               initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
//               animate={{ opacity: 1, scale: 1, rotateY: 0 }}
//               transition={{ delay: 0.4, duration: 1 }}
//               className="relative"
//             >
//               <div className="absolute -inset-4 bg-gradient-to-r from-emerald-200/30 to-amber-200/30 rounded-3xl blur-2xl"></div>
//               <div className="relative">
//                 <EncryptionVisualizer />
//               </div>
//             </motion.div>
//           </div>
//         </section>
//         {/* Security Features Section */}
//         <section className="mb-32">
//           <motion.div 
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="text-center mb-16"
//           >
//             <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full border border-emerald-100 mb-6">
//               <span className="text-emerald-700 text-sm font-medium">Security First</span>
//             </div>
//             <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
//               Advanced Security{" "}
//               <span className="bg-gradient-to-r from-emerald-600 to-emerald-800 bg-clip-text text-transparent">
//                 Features
//               </span>
//             </h2>
//             <p className="text-gray-600 text-xl max-w-3xl mx-auto">
//               Our encryption system uses cutting-edge technology to ensure your files remain private and secure
//             </p>
//           </motion.div>     
//           <SecurityFeatures />
//         </section>
//         {/* How It Works Section */}
//         <section className="mb-32">
//           <motion.div 
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="text-center mb-16"
//           >
//             <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 rounded-full border border-amber-100 mb-6">
//               <span className="text-amber-700 text-sm font-medium">Simple Process</span>
//             </div>
//             <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
//               How It{" "}
//               <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
//                 Works
//               </span>
//             </h2>
//             <p className="text-gray-600 text-xl max-w-3xl mx-auto">
//               Our advanced encryption process is simple to use yet extremely secure
//             </p>
//           </motion.div>
//           <EncryptionSteps />
//         </section>
//       </main>
//     </div>
//   );
// };
// export default Home;
import { motion } from "framer-motion";
import EncryptionVisualizer from "./EncraptionVizualer";
import { Upload, ArrowRight, Users, Shield, Star, CheckCircle } from "lucide-react";
import { Button } from "@/styles/ui/button";
import SecurityFeatures from "./SecuirtyFeateras";
import EncryptionSteps from "./EncraptionSteps";
const HomePage = () => {
    const stats = [
        { value: "10M+", label: "Files Encrypted", icon: Shield },
        { value: "50K+", label: "Active Users", icon: Users },
        { value: "99.9%", label: "Uptime", icon: CheckCircle },
        { value: "5-Star", label: "Security Rating", icon: Star }
    ];
    const testimonials = [
        {
            name: "Sarah Chen",
            role: "CTO, TechCorp",
            content: "CryptoGuard has revolutionized how we handle sensitive documents. The security features are enterprise-grade.",
            avatar: "SC"
        },
        {
            name: "Michael Rodriguez",
            role: "Security Manager",
            content: "Finally, a file encryption solution that's both secure and user-friendly. Our team adopted it immediately.",
            avatar: "MR"
        },
        {
            name: "Dr. Emily Watson",
            role: "Research Director",
            content: "The audit trails and access controls give us complete visibility over our research data sharing.",
            avatar: "EW"
        }
    ];
    return (_jsx("div", { className: "min-h-screen", children: _jsxs("main", { className: "container mx-auto px-4 py-16 max-w-7xl", children: [_jsxs("section", { className: "flex flex-col lg:flex-row items-center justify-between gap-16 mb-32", children: [_jsx("div", { className: "max-w-2xl lg:w-1/2", children: _jsxs(motion.div, { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.2, duration: 0.8 }, className: "mb-8", children: [_jsx("div", { className: "flex items-center gap-3 mb-6", children: _jsxs("div", { className: "flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full border border-emerald-100", children: [_jsx("div", { className: "w-2 h-2 bg-emerald-500 rounded-full animate-pulse" }), _jsx("span", { className: "text-emerald-700 text-sm font-medium", children: "Enterprise Security" })] }) }), _jsxs("h1", { className: "text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-6 leading-tight", children: ["Advanced File", " ", _jsx("span", { className: "bg-gradient-to-r from-emerald-600 to-emerald-800 bg-clip-text text-transparent", children: "Encryption" }), " ", "System"] }), _jsx("p", { className: "text-gray-600 text-xl leading-relaxed mb-10 max-w-xl", children: "Protect your organization's most sensitive documents with powerful encryption, custom file access, and secure, time-limited sharing. Take full control over who can view, download, or share your data \u2014 with complete visibility and security." }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-4", children: [_jsxs(Button, { size: "lg", className: "bg-emerald-600 hover:bg-emerald-700 text-white shadow-xl shadow-emerald-600/25 hover:shadow-2xl hover:shadow-emerald-600/30 transition-all duration-300 text-lg px-8 py-6 group", onClick: () => { }, children: [_jsx(Upload, { className: "mr-3 h-5 w-5 group-hover:scale-110 transition-transform" }), "Select File", _jsx(ArrowRight, { className: "ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" })] }), _jsx(Button, { size: "lg", variant: "outline", className: "border-2 border-emerald-200 text-emerald-700 hover:bg-emerald-50 hover:border-emerald-300 transition-all duration-300 text-lg px-8 py-6", children: "Learn More" })] })] }) }), _jsx("div", { className: "w-full lg:w-1/2", children: _jsxs(motion.div, { initial: { opacity: 0, scale: 0.9, rotateY: -15 }, animate: { opacity: 1, scale: 1, rotateY: 0 }, transition: { delay: 0.4, duration: 1 }, className: "relative", children: [_jsx("div", { className: "absolute -inset-4 bg-gradient-to-r from-emerald-200/30 to-amber-200/30 rounded-3xl blur-2xl" }), _jsx("div", { className: "relative", children: _jsx(EncryptionVisualizer, {}) })] }) })] }), _jsx("section", { className: "mb-32", children: _jsx(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 }, className: "grid grid-cols-2 lg:grid-cols-4 gap-8", children: stats.map((stat, index) => (_jsxs("div", { className: "text-center", children: [_jsx("div", { className: "flex justify-center mb-4", children: _jsx("div", { className: "w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center", children: _jsx(stat.icon, { className: "w-6 h-6 text-emerald-600" }) }) }), _jsx("div", { className: "text-3xl font-bold text-gray-900 mb-2", children: stat.value }), _jsx("div", { className: "text-gray-600", children: stat.label })] }, index))) }) }), _jsxs("section", { className: "mb-32", children: [_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 }, className: "text-center mb-16", children: [_jsx("div", { className: "inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full border border-emerald-100 mb-6", children: _jsx("span", { className: "text-emerald-700 text-sm font-medium", children: "Security First" }) }), _jsxs("h2", { className: "text-4xl lg:text-5xl font-bold text-gray-900 mb-6", children: ["Advanced Security", " ", _jsx("span", { className: "bg-gradient-to-r from-emerald-600 to-emerald-800 bg-clip-text text-transparent", children: "Features" })] }), _jsx("p", { className: "text-gray-600 text-xl max-w-3xl mx-auto", children: "Our encryption system uses cutting-edge technology to ensure your files remain private and secure" })] }), _jsx(SecurityFeatures, {})] }), _jsxs("section", { className: "mb-32", children: [_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 }, className: "text-center mb-16", children: [_jsx("div", { className: "inline-flex items-center gap-2 px-4 py-2 bg-amber-50 rounded-full border border-amber-100 mb-6", children: _jsx("span", { className: "text-amber-700 text-sm font-medium", children: "Simple Process" }) }), _jsxs("h2", { className: "text-4xl lg:text-5xl font-bold text-gray-900 mb-6", children: ["How It", " ", _jsx("span", { className: "bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent", children: "Works" })] }), _jsx("p", { className: "text-gray-600 text-xl max-w-3xl mx-auto", children: "Our advanced encryption process is simple to use yet extremely secure" })] }), _jsx(EncryptionSteps, {})] }), _jsxs("section", { className: "mb-32", children: [_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 }, className: "text-center mb-16", children: [_jsx("div", { className: "inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full border border-blue-100 mb-6", children: _jsx("span", { className: "text-blue-700 text-sm font-medium", children: "Trusted by Teams" }) }), _jsxs("h2", { className: "text-4xl lg:text-5xl font-bold text-gray-900 mb-6", children: ["What Our", " ", _jsx("span", { className: "bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent", children: "Users Say" })] })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: testimonials.map((testimonial, index) => (_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { delay: index * 0.1, duration: 0.6 }, viewport: { once: true }, className: "bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300", children: [_jsxs("div", { className: "flex items-center gap-4 mb-6", children: [_jsx("div", { className: "w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center", children: _jsx("span", { className: "text-emerald-700 font-semibold text-sm", children: testimonial.avatar }) }), _jsxs("div", { children: [_jsx("h4", { className: "font-semibold text-gray-900", children: testimonial.name }), _jsx("p", { className: "text-gray-600 text-sm", children: testimonial.role })] })] }), _jsxs("p", { className: "text-gray-700 leading-relaxed", children: ["\"", testimonial.content, "\""] })] }, index))) })] }), _jsx("section", { className: "text-center", children: _jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 }, className: "bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-3xl p-12 text-white", children: [_jsx("h2", { className: "text-3xl lg:text-4xl font-bold mb-6", children: "Ready to Secure Your Files?" }), _jsx("p", { className: "text-emerald-100 text-xl mb-8 max-w-2xl mx-auto", children: "Join thousands of organizations protecting their sensitive data with enterprise-grade encryption" }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [_jsx(Button, { size: "lg", className: "bg-white text-emerald-700 hover:bg-emerald-50 shadow-xl text-lg px-8 py-6", children: "Start Free Trial" }), _jsx(Button, { size: "lg", variant: "outline", className: "border-2 border-white text-white hover:bg-white hover:text-emerald-700 text-lg px-8 py-6", children: "Schedule Demo" })] })] }) })] }) }));
};
export default HomePage;
