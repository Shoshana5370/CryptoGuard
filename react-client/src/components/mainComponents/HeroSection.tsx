import { motion } from "framer-motion";

import { Button } from "@/styles/ui/button";
import EncryptionVisualizer from "./EncraptionVizualer";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between gap-16 mb-32">
      <div className="max-w-2xl lg:w-1/2">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full border border-emerald-100">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
              <span className="text-emerald-700 text-sm font-medium">Enterprise Security</span>
            </div>
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-6 leading-tight">
            Advanced File{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-emerald-800 bg-clip-text text-transparent">
              Encryption
            </span>{" "}
            System
          </h1>
          
          <p className="text-gray-600 text-xl leading-relaxed mb-10 max-w-xl">
            Protect your organization's most sensitive documents with powerful encryption, custom file access, and secure, time-limited sharing. Take full control over who can view, download, or share your data — with complete visibility and security.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
    
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-emerald-200 text-emerald-700 hover:bg-emerald-50 hover:border-emerald-300 transition-all duration-300 text-lg px-8 py-6"
                onClick={() => {navigate('/auth/login')}}
            >
              Get Start!
            </Button>
          </div>
        </motion.div>
      </div>

      <div className="w-full lg:w-1/2">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-gradient-to-r from-emerald-200/30 to-amber-200/30 rounded-3xl blur-2xl"></div>
          <div className="relative">
            <EncryptionVisualizer />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
