import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Shield } from "lucide-react";
const Logo = () => {
    return (_jsxs("div", { className: "flex items-center gap-3", children: [_jsx("div", { className: "w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-xl flex items-center justify-center shadow-lg", children: _jsx(Shield, { className: "w-6 h-6 text-white" }) }), _jsx("span", { className: "text-xl font-bold bg-gradient-to-r from-emerald-700 to-emerald-900 bg-clip-text text-transparent", children: "CryptoGuard" })] }));
};
export default Logo;
