












import  { useState } from "react";
import { motion } from "framer-motion";
import { Upload, Shield, FileText, Lock, CheckCircle, AlertCircle } from "lucide-react";

import EncryptionVisualizer from './EncraptionVizualer';
import SecurityFeatures from './SecuirtyFeateras';
import EncryptionSteps from './EncraptionSteps';
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Progress } from "@/components/ui/progress";
// import EncryptionVisualizer from "../components/EncryptionVisualizer";
// import SecureLogo from "./SecureLogo";
// import EncryptionSteps from "../components/EncryptionSteps";
// import SecurityFeatures from "../components/SecurityFeatures";

const  HomePage = () => {
  const [file, setFile] = useState(null);
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("idle"); // idle, encrypting, success, error
  const [progress, setProgress] = useState(0);

  const handleFileChange = (e:any) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setStatus("idle");
  };

  const handleEncryption = () => {
    if (!file || !password) return;
    
    setStatus("encrypting");
    setProgress(0);
    
    // Simulate encryption process
    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + Math.random() * 10;
        if (newProgress >= 100) {
          clearInterval(interval);
          setStatus("success");
          return 100;
        }
        return newProgress;
      });
    }, 300);
  };

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
                <SecureLogo/>
                <h2 className="text-xl font-medium text-emerald-700">CryptoGuard</h2>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-6">
                Advanced File Encryption System
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Protect your sensitive documents with military-grade encryption technology. 
                Our secure, elegant solution guarantees your files remain private and accessible only to you.
              </p>
              <div className="flex flex-wrap gap-4">
                <button 
                  // size="lg"
                  className="bg-emerald-700 hover:bg-emerald-800 text-white"
                  // onClick={() => document.getElementById('fileUpload').click()}
                >
                  <Upload className="mr-2 h-5 w-5" />
                  Select File
                </button>
                <button 
                  // size="lg"
                  // variant="outline"
                  className="border-emerald-700 text-emerald-700 hover:bg-emerald-50"
                >
                  Learn More
                </button>
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

        {/* Encryption Interface */}
        <section className="mb-24">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Shield className="mr-2 h-6 w-6 text-emerald-700" />
                Secure Encryption Portal
              </h2>

              <div className="space-y-6">
                {/* File Upload */}
                <div className="bg-stone-50 border-2 border-dashed border-stone-200 rounded-xl p-8 text-center">
                  <input
                    id="fileUpload"
                    type="file"
                    className="hidden"
                    onChange={handleFileChange}
                  />
                  
                  {!file ? (
                    <div>
                      <FileText className="h-12 w-12 mx-auto mb-4 text-stone-400" />
                      <p className="text-stone-600 mb-4">Drag and drop your file here or</p>
                      <button 
                        // variant="secondary"
                        // onClick={() => document.getElementById('fileUpload').click()}
                      >
                        Browse Files
                      </button>
                    </div>
                  ) : (
                    <div className="flex items-center justify-between bg-white p-4 rounded-lg border border-stone-200">
                      <div className="flex items-center">
                        <FileText className="h-8 w-8 mr-3 text-emerald-700" />
                        <div className="text-left">
                          <p className="font-medium text-gray-900">{file}</p>
                          <p className="text-sm text-gray-500">
                            {(file / 1024 / 1024).toFixed(2)} MB
                          </p>
                        </div>
                      </div>
                      <button 
                        // variant="outline" 
                        // size="sm"
                        onClick={() => setFile(null)}
                      >
                        Change
                      </button>
                    </div>
                  )}
                </div>

                {/* Password Input */}
                {file && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Encryption Password
                      </label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                        <input
                          type="password"
                          placeholder="Enter a strong password"
                          className="pl-10 border-gray-300"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                      <p className="mt-1 text-sm text-gray-500">
                        Use a strong, unique password that you'll remember
                      </p>
                    </div>

                    <button 
                      onClick={handleEncryption}
                      disabled={!password || status === "encrypting"}
                      className="w-full bg-emerald-700 hover:bg-emerald-800 text-white"
                    >
                      {status === "encrypting" ? "Encrypting..." : "Encrypt File"}
                    </button>
                  </div>
                )}

                {/* Progress & Status */}
                {status === "encrypting" && (
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Encrypting file...</span>
                      <span>{Math.round(progress)}%</span>
                    </div>
                    <progress value={progress} className="h-2" />
                  </div>
                )}

                {status === "success" && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }} 
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-emerald-50 text-emerald-800 p-4 rounded-lg flex items-center"
                  >
                    <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Encryption Successful</p>
                      <p className="text-sm">Your file has been securely encrypted and is ready to download</p>
                    </div>
                    <button className="ml-auto bg-emerald-700 hover:bg-emerald-800">
                      Download
                    </button>
                  </motion.div>
                )}

                {status === "error" && (
                  <div className="bg-red-50 text-red-800 p-4 rounded-lg flex items-center">
                    <AlertCircle className="h-5 w-5 mr-2 flex-shrink-0" />
                    <p>An error occurred during encryption. Please try again.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Advanced Security Features</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our encryption system uses cutting-edge technology to ensure your files remain private and secure
            </p>
          </div>
          
          <SecurityFeatures />
        </section>

        {/* How It Works */}
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

      <footer className="bg-gray-50 border-t border-gray-200 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-6 md:mb-0">
              <SecureLogo size="small" />
              <span className="ml-2 text-gray-700 font-medium">CryptoGuard</span>
            </div>
            <div className="text-gray-500 text-sm">
              © {new Date().getFullYear()} CryptoGuard. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default HomePage;



// import React from 'react';

// function HomePage() {
//   return (
//     <div className="bg-blue-50 min-h-screen flex flex-col font-sans text-gray-800">
//       <header className="bg-white shadow-sm py-4 px-8 border-b border-gray-200">
//         <div className="container mx-auto flex justify-between items-center">
//           <a href="/" className="text-lg font-semibold tracking-tight text-indigo-700">
//             <span className="text-blue-600">Cipher</span>Guard
//           </a>
//           <nav className="hidden md:block">
//             <ul className="flex space-x-6 text-sm font-medium">
//               <li><a href="#overview" className="hover:text-indigo-700 transition duration-200">סקירה כללית</a></li>
//               <li><a href="#features" className="hover:text-indigo-700 transition duration-200">תכונות</a></li>
//               <li><a href="#pricing" className="hover:text-indigo-700 transition duration-200">תמחור</a></li>
//               <li><button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2.5 px-5 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 transition duration-200">התחלה מהירה</button></li>
//             </ul>
//           </nav>
//           <div className="md:hidden">
//             {/* Mobile Menu Icon */}
//             <button className="text-gray-500 hover:text-indigo-700 focus:outline-none">
//               <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
//                 <path fillRule="evenodd" clipRule="evenodd" d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-5h18V6H3v2z" />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </header>

//       <main className="container mx-auto py-20 px-8 flex-grow">
//         <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//           <div className="space-y-8">
//             <h1 className="text-4xl font-extrabold tracking-tight leading-tight text-gray-900">
//               הצפנה פשוטה, אבטחה מקסימלית.
//             </h1>
//             <p className="text-xl text-gray-700 leading-relaxed">
//               מערכת הצפנת קבצים אינטואיטיבית ומתקדמת, המעניקה לך שליטה מלאה על אבטחת המידע שלך. עיצוב נקי וקל לשימוש ללא פשרות על עוצמת ההצפנה.
//             </p>
//             <div className="flex space-x-6">
//               <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3.5 px-7 rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition duration-200">
//                 נסה עכשיו בחינם
//               </button>
//               <a href="#tour" className="inline-flex items-center text-indigo-700 hover:text-indigo-900 font-medium transition duration-200">
//                 סיור במערכת
//                 <svg className="ml-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
//               </a>
//             </div>
//           </div>
//           <div className="relative">
//             <div className="absolute inset-0 bg-blue-100 rounded-xl blur-xl opacity-30 transform rotate-2"></div>
//             <img
//               src="https://via.placeholder.com/600x400/D1E9FF/81A8D1?Text=Intuitive+Security"
//               alt="Intuitive Security Interface"
//               className="rounded-xl shadow-2xl relative"
//             />
//           </div>
//         </section>

//         <section className="py-24">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">
//               תכונות עיקריות
//             </h2>
//             <p className="text-lg text-gray-600 leading-relaxed">
//               הכירו את הפיצ'רים המתקדמים שהופכים את הצפנת הקבצים לפשוטה ובטוחה.
//             </p>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
//             <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition duration-200 border border-gray-200">
//               <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mb-5">
//                 <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
//               </div>
//               <h3 className="text-xl font-semibold text-gray-800 mb-3">הצפנה מקצה לקצה</h3>
//               <p className="text-gray-600">הקבצים שלך מוצפנים מהרגע שהם עוזבים את המכשיר שלך ועד שהם מגיעים ליעדם.</p>
//             </div>
//             <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition duration-200 border border-gray-200">
//               <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mb-5">
//                 <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3m-9-3h3m-1 16h-3a2 2 0 01-2-2V7a2 2 0 012-2h9a2 2 0 012 2v10a2 2 0 01-2 2h-3m-1-5v8m-3-6h3" /></svg>
//               </div>
//               <h3 className="text-xl font-semibold text-gray-800 mb-3">ניהול מפתחות פשוט</h3>
//               <p className="text-gray-600">תהליך ניהול מפתחות הצפנה אינטואיטיבי וידידותי למשתמש.</p>
//             </div>
//             <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition duration-200 border border-gray-200">
//               <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mb-5">
//                 <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7v12m10-9v2m-8-4h14m-7 9h2m-2-9l-2 2m-2-2l2 2" /></svg>
//               </div>
//               <h3 className="text-xl font-semibold text-gray-800 mb-3">שיתוף מאובטח</h3>
//               <p className="text-gray-600">שתף קבצים מוצפנים בצורה בטוחה עם משתמשים אחרים.</p>
//             </div>
//           </div>
//         </section>
//       </main>

//       <footer className="bg-gray-100 py-12 px-8 border-t border-gray-200">
//         <div className="container mx-auto text-center text-gray-600">
//           <p className="mb-2">הצפנת קבצים מתקדמת ופשוטה.</p>
//           <p>&copy; {new Date().getFullYear()} CipherGuard. חוויית אבטחה חכמה.</p>
//         </div>
//       </footer>
//     </div>
//   );
// }

// export default HomePage;


import React from 'react';
import SecureLogo from "./SecureLogo";

