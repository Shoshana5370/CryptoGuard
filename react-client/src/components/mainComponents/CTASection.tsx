import { motion } from "framer-motion";
import { Button } from "@/styles/ui/button";

const CTASection = () => {
  return (
    <section className="text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-3xl p-12 text-white"
      >
        <h2 className="text-3xl lg:text-4xl font-bold mb-6">
          Ready to Secure Your Files?
        </h2>
        <p className="text-emerald-100 text-xl mb-8 max-w-2xl mx-auto">
          Join thousands of organizations protecting their sensitive data with enterprise-grade encryption
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg"
            className="bg-white text-emerald-700 hover:bg-emerald-50 shadow-xl text-lg px-8 py-6"
          >
            Start Free Trial
          </Button>
          <Button 
            size="lg"
            variant="outline"
            className="border-2 border-white text-white hover:bg-white hover:text-emerald-700 text-lg px-8 py-6"
          >
            Schedule Demo
          </Button>
        </div>
      </motion.div>
    </section>
  );
};

export default CTASection;
