
// import { Shield, Lock, Users, FileText, CheckCircle, Star, Sparkles } from 'lucide-react';
// import { motion } from 'framer-motion';

// const LoginInfoPanel = () => {
//   const features = [
//     {
//       icon: Shield,
//       title: "Enterprise-Grade Security",
//       description: "Leverage advanced encryption and multi-layered security protocols to safeguard your most sensitive data assets."
//     },
//     {
//       icon: Lock,
//       title: "End-to-End File Encryption",
//       description: "Employ military-grade AES-256 encryption for all files, ensuring complete confidentiality at rest and in transit."
//     },
//     {
//       icon: Users,
//       title: "Secure Team Collaboration",
//       description: "Utilize granular access controls and secure sharing mechanisms designed for seamless and protected teamwork."
//     },
//     {
//       icon: FileText,
//       title: "Intelligent Document Management",
//       description: "Organize, manage, and access your encrypted files with an intuitive system built for efficiency and security."
//     }
//   ];

//   const testimonials = [
//     {
//       text: "The security architecture is unparalleled. Our data integrity has never been stronger, giving us complete peace of mind.",
//       author: "Dr. Evelyn Reed",
//       role: "Chief Information Security Officer"
//     },
//     {
//       text: "An incredibly intuitive interface paired with formidable encryption. CryptoGuard sets a new standard for secure file management.",
//       author: "Marcus Cole",
//       role: "Cybersecurity Lead, Tech Solutions Inc."
//     }
//   ];

//   const panelVariants = {
//     hidden: { opacity: 0 },
//     visible: { 
//       opacity: 1,
//       transition: { 
//         staggerChildren: 0.1,
//         delayChildren: 0.2,
//         duration: 0.5
//       } 
//     }
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { 
//       opacity: 1, 
//       y: 0,
//       transition: { type: 'spring', stiffness: 100 }
//     }
//   };

//   return (
//     <div className="hidden md:flex flex-col bg-gradient-to-br from-emerald-700 via-teal-700 to-cyan-800 p-10 lg:p-16 items-center justify-center text-white h-full overflow-hidden relative">
//       <motion.div 
//         className="absolute -top-20 -left-20 w-72 h-72 bg-emerald-500/10 rounded-full filter blur-3xl"
//         animate={{ scale: [1, 1.1, 1], rotate: [0, 10, 0] }}
//         transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//       />
//       <motion.div 
//         className="absolute -bottom-20 -right-20 w-80 h-80 bg-cyan-500/10 rounded-full filter blur-3xl"
//         animate={{ scale: [1, 1.2, 1], rotate: [0, -15, 0] }}
//         transition={{ duration: 25, repeat: Infinity, ease: "linear", delay: 5 }}
//       />

//       <motion.div 
//         className="max-w-lg w-full z-10"
//         variants={panelVariants}
//         initial="hidden"
//         animate="visible"
//       >
//         <motion.div variants={itemVariants} className="mb-12 text-center">
//           <div className="flex items-center justify-center gap-3 mb-4">
//             <Sparkles className="w-10 h-10 text-emerald-300" />
//             <h1 className="text-5xl font-bold tracking-tight">
//               CryptoGuard
//             </h1>
//           </div>
//           <p className="text-xl text-emerald-100 leading-relaxed font-light">
//             Next-Generation Platform for Uncompromising File Security & Management.
//           </p>
//         </motion.div>

//         <motion.div className="space-y-8 mb-12" variants={itemVariants}>
//           {features.map((feature, index) => (
//             <motion.div 
//               key={index} 
//               className="flex items-start space-x-5 group"
//               variants={itemVariants}
//             >
//               <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-emerald-500/20 to-teal-500/30 rounded-xl flex items-center justify-center group-hover:from-emerald-500/30 group-hover:to-teal-500/40 transition-all duration-300 border border-emerald-400/30 shadow-lg group-hover:shadow-emerald-400/20">
//                 <feature.icon className="w-7 h-7 text-emerald-200 group-hover:scale-110 transition-transform duration-300" />
//               </div>
//               <div>
//                 <h3 className="font-semibold text-white mb-1.5 text-lg tracking-tight">{feature.title}</h3>
//                 <p className="text-emerald-100 text-sm leading-relaxed font-light">{feature.description}</p>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>

//         <motion.div className="space-y-6 mb-12" variants={itemVariants}>
//           {testimonials.map((testimonial, index) => (
//             <motion.div 
//               key={index} 
//               className="bg-black/20 rounded-xl p-6 backdrop-blur-md border border-white/10 shadow-xl hover:border-white/20 transition-all duration-300"
//               variants={itemVariants}
//             >
//               <div className="flex items-center mb-3">
//                 {[...Array(5)].map((_, i) => (
//                   <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
//                 ))}
//               </div>
//               <p className="text-emerald-50 text-base mb-3 italic leading-relaxed">"{testimonial.text}"</p>
//               <div className="text-xs text-emerald-200 text-right">
//                 <span className="font-medium block">{testimonial.author}</span>
//                 <span className="font-light">{testimonial.role}</span>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>

//         <motion.div variants={itemVariants} className="pt-10 border-t border-emerald-500/30">
//           <div className="flex items-center justify-around text-sm">
//             <div className="flex items-center space-x-2.5">
//               <CheckCircle className="w-5 h-5 text-green-400" />
//               <span className="text-emerald-100 font-medium">AES-256 Bit Encryption</span>
//             </div>
//             <div className="flex items-center space-x-2.5">
//               <Shield className="w-5 h-5 text-green-400" />
//               <span className="text-emerald-100 font-medium">ISO 27001 Compliant</span>
//             </div>
//           </div>
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// };

// export default LoginInfoPanel;
import { Shield, Lock, Users, FileText, CheckCircle, Star, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const LoginInfoPanel = () => {
  const features = [
    {
      icon: Shield,
      title: "Enterprise-Grade Security",
      description: "Leverage advanced encryption and multi-layered security protocols to safeguard your most sensitive data assets."
    },
    {
      icon: Lock,
      title: "End-to-End File Encryption",
      description: "Employ military-grade AES-256 encryption for all files, ensuring complete confidentiality at rest and in transit."
    },
    {
      icon: Users,
      title: "Secure Team Collaboration",
      description: "Utilize granular access controls and secure sharing mechanisms designed for seamless and protected teamwork."
    },
    {
      icon: FileText,
      title: "Intelligent Document Management",
      description: "Organize, manage, and access your encrypted files with an intuitive system built for efficiency and security."
    }
  ];

  const testimonials = [
    {
      text: "The security architecture is unparalleled. Our data integrity has never been stronger, giving us complete peace of mind.",
      author: "Dr. Evelyn Reed",
      role: "Chief Information Security Officer"
    },
    {
      text: "An incredibly intuitive interface paired with formidable encryption. CryptoGuard sets a new standard for secure file management.",
      author: "Marcus Cole",
      role: "Cybersecurity Lead, Tech Solutions Inc."
    }
  ];

  const panelVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2,
        duration: 0.5
      } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  return (
    <div className="hidden md:flex flex-col bg-gradient-to-br from-emerald-100 via-green-100 to-teal-200 p-10 lg:p-16 items-center justify-center text-gray-800 h-full overflow-hidden relative">
      <motion.div 
        className="absolute -top-20 -left-20 w-72 h-72 bg-emerald-400/20 rounded-full filter blur-3xl"
        animate={{ scale: [1, 1.1, 1], rotate: [0, 10, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div 
        className="absolute -bottom-20 -right-20 w-80 h-80 bg-green-400/15 rounded-full filter blur-3xl"
        animate={{ scale: [1, 1.2, 1], rotate: [0, -15, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear", delay: 5 }}
      />

      <motion.div 
        className="max-w-lg w-full z-10"
        variants={panelVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-12 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="w-10 h-10 text-emerald-600" />
            <h1 className="text-5xl font-bold tracking-tight text-gray-800">
              CryptoGuard
            </h1>
          </div>
          <p className="text-xl text-gray-700 leading-relaxed font-light">
            Next-Generation Platform for Uncompromising File Security & Management.
          </p>
        </motion.div>

        <motion.div className="space-y-8 mb-12" variants={itemVariants}>
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="flex items-start space-x-5 group"
              variants={itemVariants}
            >
              <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-emerald-300/30 to-green-300/25 rounded-xl flex items-center justify-center group-hover:from-emerald-400/40 group-hover:to-green-400/35 transition-all duration-300 border border-emerald-300/30 shadow-lg group-hover:shadow-emerald-300/20">
                <feature.icon className="w-7 h-7 text-emerald-700 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1.5 text-lg tracking-tight">{feature.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed font-light">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="space-y-6 mb-12" variants={itemVariants}>
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index} 
              className="bg-white/40 rounded-xl p-6 backdrop-blur-md border border-emerald-200/50 shadow-xl hover:border-emerald-300/60 transition-all duration-300"
              variants={itemVariants}
            >
              <div className="flex items-center mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="text-gray-800 text-base mb-3 italic leading-relaxed">"{testimonial.text}"</p>
              <div className="text-xs text-gray-600 text-right">
                <span className="font-medium block">{testimonial.author}</span>
                <span className="font-light">{testimonial.role}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={itemVariants} className="pt-10 border-t border-emerald-300/30">
          <div className="flex items-center justify-around text-sm">
            <div className="flex items-center space-x-2.5">
              <CheckCircle className="w-5 h-5 text-emerald-600" />
              <span className="text-gray-700 font-medium">AES-256 Bit Encryption</span>
            </div>
            <div className="flex items-center space-x-2.5">
              <Shield className="w-5 h-5 text-emerald-600" />
              <span className="text-gray-700 font-medium">ISO 27001 Compliant</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default LoginInfoPanel;
