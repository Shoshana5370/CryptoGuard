import { Link } from "react-router-dom";
import { Twitter, Github } from "lucide-react";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-50 to-gray-100 border-t border-gray-200">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <Logo />
            </div>
            <p className="text-gray-600 leading-relaxed mb-6">
              Secure file encryption for everyone. Protect your digital assets with military-grade encryption.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-emerald-600 transition-colors">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-600 transition-colors">
                <span className="sr-only">GitHub</span>
                <Github className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 mb-6">Product</h3>
            <ul className="space-y-4">
              <li><Link to="/features" className="text-gray-600 hover:text-emerald-600 transition-colors">Features</Link></li>
              <li><Link to="/security" className="text-gray-600 hover:text-emerald-600 transition-colors">Security</Link></li>
              <li><Link to="/pricing" className="text-gray-600 hover:text-emerald-600 transition-colors">Pricing</Link></li>
              <li><Link to="/faq" className="text-gray-600 hover:text-emerald-600 transition-colors">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 mb-6">Company</h3>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-gray-600 hover:text-emerald-600 transition-colors">About</Link></li>
              <li><Link to="/blog" className="text-gray-600 hover:text-emerald-600 transition-colors">Blog</Link></li>
              <li><Link to="/careers" className="text-gray-600 hover:text-emerald-600 transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-emerald-600 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 mb-6">Legal</h3>
            <ul className="space-y-4">
              <li><Link to="/privacy" className="text-gray-600 hover:text-emerald-600 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-600 hover:text-emerald-600 transition-colors">Terms of Service</Link></li>
              <li><Link to="/cookies" className="text-gray-600 hover:text-emerald-600 transition-colors">Cookie Policy</Link></li>
              <li><Link to="/gdpr" className="text-gray-600 hover:text-emerald-600 transition-colors">GDPR</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-300 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} CryptoGuard. All rights reserved.
          </p>
          <div className="flex items-center gap-2 mt-4 md:mt-0">
            <span className="text-gray-500 text-sm">Built with</span>
            <span className="text-red-500">♥</span>
            <span className="text-gray-500 text-sm">for security</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;