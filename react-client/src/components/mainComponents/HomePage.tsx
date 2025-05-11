// import  { useState } from "react";
import { motion } from "framer-motion";
// import { Upload, Shield, FileText, Lock, CheckCircle, AlertCircle } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Progress } from "@/components/ui/progress";
import EncryptionVisualizer from "./EncraptionVizualer";
// import SecurityFeatures from "./SecuirtyFeateras";
// import EncryptionSteps from "./EncraptionSteps";
import Logo from "./Logo";
import { Button } from "@/styles/ui/button";
export default function Home() {
  // const [file, setFile] = useState(null);
  // const [password, setPassword] = useState("");
  // const [status, setStatus] = useState("idle"); 
  // const [progress, setProgress] = useState(0);

  // const handleFileChange = (e: any) => {
  //   const selectedFile = e.target.files[0];
  //   setFile(selectedFile);
  //   setStatus("idle");
  // };

  // const handleEncryption = () => {
  //   if (!file || !password) return;
    
  //   setStatus("encrypting");
  //   setProgress(0);
    
  //   // Simulate encryption process
  //   const interval = setInterval(() => {
  //     setProgress((prev) => {
  //       const newProgress = prev + Math.random() * 10;
  //       if (newProgress >= 100) {
  //         clearInterval(interval);
  //         setStatus("success");
  //         return 100;
  //       }
  //       return newProgress;
  //     });
  //   }, 300);
  // };

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
                {/* <Button 
                  size="lg"
                  className="bg-emerald-700 hover:bg-emerald-800 text-white"
                  // onClick={() => document.getElementById('fileUpload').click()}
                  >
                  <Upload className="mr-2 h-5 w-5" />
                  Select File
                </Button> */}
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

        {/* Encryption Interface
        <section className="mb-24">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Shield className="mr-2 h-6 w-6 text-emerald-700" />
                Secure Encryption Portal
              </h2>

              <div className="space-y-6">
                File Upload
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
                      <Button 
                        variant="secondary"
                        // onClick={() => document.getElementById('fileUpload').click()}
                      >
                        Browse Files
                      </Button>
                    </div>
                  ) : (
                    <div className="flex items-center justify-between bg-white p-4 rounded-lg border border-stone-200">
                      <div className="flex items-center">
                        <FileText className="h-8 w-8 mr-3 text-emerald-700" />
                        <div className="text-left">
                          <p className="font-medium text-gray-900">{file.name}</p>
                          <p className="text-sm text-gray-500">
                            {(file.size / 1024 / 1024).toFixed(2)} MB
                          </p>
                        </div>
                      </div>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => setFile(null)}
                      >
                        Change
                      </Button>
                    </div>
                  )}
                </div>

                Password Input
                {file && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Encryption Password
                      </label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                        <Input
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

                    <Button 
                      onClick={handleEncryption}
                      disabled={!password || status === "encrypting"}
                      className="w-full bg-emerald-700 hover:bg-emerald-800 text-white"
                    >
                      {status === "encrypting" ? "Encrypting..." : "Encrypt File"}
                    </Button>
                  </div>
                )}

                Progress & Status
                {status === "encrypting" && (
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Encrypting file...</span>
                      <span>{Math.round(progress)}%</span>
                    </div>
                    <Progress value={progress} className="h-2" />
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
                    <Button className="ml-auto bg-emerald-700 hover:bg-emerald-800">
                      Download
                    </Button>
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
        </section> */}

        {/* Features Section
        <section className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Advanced Security Features</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our encryption system uses cutting-edge technology to ensure your files remain private and secure
            </p>
          </div>     
          <SecurityFeatures />
        </section> */}

        {/* How It Works
        <section className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our advanced encryption process is simple to use yet extremely secure
            </p>
          </div>
          
          <EncryptionSteps />
        </section> */}
      </main>


    </div>
  );
}