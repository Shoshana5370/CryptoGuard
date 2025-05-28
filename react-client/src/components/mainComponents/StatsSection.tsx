import { motion } from "framer-motion";
import { Users, Shield, Star, CheckCircle } from "lucide-react";

const StatsSection = () => {
  const stats = [
    { value: "10M+", label: "Files Encrypted", icon: Shield },
    { value: "50K+", label: "Active Users", icon: Users },
    { value: "99.9%", label: "Uptime", icon: CheckCircle },
    { value: "5-Star", label: "Security Rating", icon: Star }
  ];

  return (
    <section className="mb-32">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                <stat.icon className="w-6 h-6 text-emerald-600" />
              </div>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
            <div className="text-gray-600">{stat.label}</div>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default StatsSection;
