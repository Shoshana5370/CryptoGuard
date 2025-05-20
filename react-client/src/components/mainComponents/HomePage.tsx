
import { motion } from "framer-motion";
import EncryptionVisualizer from "./EncraptionVizualer";
import Logo from "./Logo";
import { Button } from "@/styles/ui/button";
import EncryptionSteps from "./EncraptionSteps";
import SecurityFeatures from "./SecuirtyFeateras";
import { Upload } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-stone-50">
      <main className="container mx-auto px-4 py-12 max-w-7xl">
        {/* Hero Section */}
        <section className="flex flex-col md:flex-row items-center justify-between gap-12 mb-24">
          <div className="max-w-xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <Logo />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-6">
                Advanced File Encryption System
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Protect your organization's most sensitive documents with powerful encryption, custom file access, and secure, time-limited sharing.  
              Take full control over who can view, download, or share your data — with complete visibility and security.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg"
                  className="bg-emerald-700 hover:bg-emerald-800 text-white"
                  onClick={() => {}}
                  >
                  <Upload className="mr-2 h-5 w-5" />
                  Select File
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-emerald-700 text-emerald-700 hover:bg-emerald-50">
                  Learn More
                </Button>
              </div>
            </motion.div>
          </div>

          <div className="w-full md:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
            >
              <EncryptionVisualizer />
            </motion.div>
          </div>
        </section>
        <section className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Advanced Security Features</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our encryption system uses cutting-edge technology to ensure your files remain private and secure
            </p>
          </div>     
          <SecurityFeatures />
        </section>
        <section className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our advanced encryption process is simple to use yet extremely secure
            </p>
          </div>
          
          <EncryptionSteps />
        </section>
      </main>


    </div>
  );
}