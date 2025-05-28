import { Shield } from "lucide-react";

const Logo = () => {
  return (
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-xl flex items-center justify-center shadow-lg">
        <Shield className="w-6 h-6 text-white" />
      </div>
      <span className="text-xl font-bold bg-gradient-to-r from-emerald-700 to-emerald-900 bg-clip-text text-transparent">
        CryptoGuard
      </span>
    </div>
  );
};

export default Logo;