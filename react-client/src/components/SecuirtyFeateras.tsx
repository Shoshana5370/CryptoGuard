// import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Lock, RefreshCw, EyeOff, Fingerprint, Layers } from "lucide-react";

export default function SecurityFeatures() {
  const features = [
    {
      icon: ShieldCheck,
      title: "Military-Grade Encryption",
      description: "Using AES-256 encryption, the same standard used by governments to protect classified information.",
      color: "text-emerald-700 bg-emerald-50"
    },
    {
      icon: Lock,
      title: "Password Protection",
      description: "Your files are protected with your unique password that never leaves your device.",
      color: "text-amber-700 bg-amber-50"
    },
    {
      icon: RefreshCw,
      title: "Secure Algorithms",
      description: "Our system uses the most advanced cryptographic algorithms available today.",
      color: "text-rose-700 bg-rose-50"
    },
    {
      icon: EyeOff,
      title: "Zero Knowledge",
      description: "We never store your encryption keys or have access to your unencrypted files.",
      color: "text-purple-700 bg-purple-50"
    },
    {
      icon: Fingerprint,
      title: "Unique Signature",
      description: "Each encrypted file has a unique digital signature for added security.",
      color: "text-teal-700 bg-teal-50"
    },
    {
      icon: Layers,
      title: "Multiple Security Layers",
      description: "Various security measures work together to provide comprehensive protection.",
      color: "text-amber-700 bg-amber-50"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {features.map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
        >
          <div className={`w-12 h-12 rounded-xl ${feature.color} flex items-center justify-center mb-4`}>
            <feature.icon className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
          <p className="text-gray-600">{feature.description}</p>
        </motion.div>
      ))}
    </div>
  );
}