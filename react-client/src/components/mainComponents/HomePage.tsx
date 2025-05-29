import { motion } from "framer-motion";

import EncryptionSteps from "./EncraptionSteps";
import CTASection from "./CTASection";

import HeroSection from "./HeroSection";
import StatsSection from "./StatsSection";
import SecurityFeatures from "./SecurityFeatures";
import TestimonialsSection from "./TestimonialsSection";


const HomePage = () => {
  return (
    <div className="min-h-screen">
      <main className="container mx-auto px-4 py-16 max-w-7xl">
        {/* Hero Section */}
        <HeroSection />

        {/* Stats Section */}
        <StatsSection />

        {/* Security Features Section */}
        <section className="mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full border border-emerald-100 mb-6">
              <span className="text-emerald-700 text-sm font-medium">Security First</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Advanced Security{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-emerald-800 bg-clip-text text-transparent">
                Features
              </span>
            </h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto">
              Our encryption system uses cutting-edge technology to ensure your files remain private and secure
            </p>
          </motion.div>     
          <SecurityFeatures />
        </section>

        {/* How It Works Section */}
        <section className="mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 rounded-full border border-amber-100 mb-6">
              <span className="text-amber-700 text-sm font-medium">Simple Process</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              How It{" "}
              <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                Works
              </span>
            </h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto">
              Our advanced encryption process is simple to use yet extremely secure
            </p>
          </motion.div>
          
          <EncryptionSteps />
        </section>

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* CTA Section */}
        <CTASection />
      </main>
    </div>
  );
};

export default HomePage;