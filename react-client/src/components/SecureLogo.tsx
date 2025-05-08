// import React from "react";

export default function SecureLogo({ size = "default" }) {
  const sizeClasses :any= {
    small: "w-6 h-6",
    default: "w-10 h-10",
    large: "w-14 h-14"
  };
  
  return (
    <div className={`${sizeClasses[size]} relative`}>
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-lg transform rotate-3"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-amber-300 to-amber-500 rounded-lg transform -rotate-3 opacity-70"></div>
      <div className="absolute inset-0 flex items-center justify-center text-white">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5">
          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
        </svg>
      </div>
    </div>
  );
}