
import { motion } from "framer-motion";

import Logo from '../mainComponents/Logo';
import { Alert, AlertDescription, } from '@/styles/ui/alert';
import { Input } from '@/styles/ui/input';
import { Button } from '@/styles/ui/button';




// const RegisterForm = () => {
//   const dispatch = useAppDispatch();
//   const navigate = useNavigate();
//   const { loading, error, user } = useAppSelector((state) => state.auth);
//   const [email, setEmail] = useState('');
//   const [name, setName] = useState('');
//   const [password, setPassword] = useState('');
//   const [errors, setErrors] = useState<{ email?: string; name?: string; password?: string }>({});

//   const validate = () => {
//     const newErrors: { email?: string; name?: string; password?: string } = {};
//     if (!email) {
//       newErrors.email = 'Email is required';
//     } else if (!/\S+@\S+\.\S+/.test(email)) {
//       newErrors.email = 'Email is invalid';
//     }
//     if (!name) {
//       newErrors.name = 'Name is required';
//     }
//     if (!password) {
//       newErrors.password = 'Password is required';
//     } else if (password.length < 6) {
//       newErrors.password = 'Password must be at least 6 characters';
//     }
//     return newErrors;
//   };

//   useEffect(() => {
//     if (!loading && !error && user) {
//       navigate('/home');
//     }
//   }, [loading, error, user, navigate]);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     const validationErrors = validate();
//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//       return;
//     }
//     dispatch(registerUser({ email, name, password }));
//   };
//  return (
//     <div className="min-h-screen flex flex-col md:flex-row bg-gradient-to-br from-gray-50 to-stone-100">
//       {/* LoginInfoPanel will be on the left for desktop, hidden on mobile */}
//       <LoginInfoPanel /> 

//       {/* Registration Form on the right for desktop, full width on mobile */}
//       <div className="w-full md:w-1/2 flex items-center justify-center p-4 md:p-12">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.2 }} // Added delay for staggered effect if panel also animates
//           className="w-full max-w-md"
//         >
//           <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-8 md:p-10">
//             <div className="text-center mb-8">
//               <div className="flex justify-center mb-6">
//                 <Logo />
//               </div>
//               <h2 className="text-3xl font-bold text-gray-800">Create Your Account</h2>
//               <p className="text-gray-600 mt-2">Join SecureVault to protect your files.</p>
//             </div>

//             {error && (
//               <Alert variant="destructive" className="mb-6">
//                 <AlertCircle className="h-4 w-4" />
//                 <AlertTitle>Registration Error</AlertTitle>
//                 <AlertDescription>
//                   {error.toString()}
//                 </AlertDescription>
//               </Alert>
//             )}

//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div className="space-y-1">
//                 <div className="relative">
//                   <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
//                   <Input
//                     type="email"
//                     placeholder="Your email address"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     className="pl-12 h-12 text-sm"
//                     aria-label="Email"
//                   />
//                 </div>
//                 {errors.email && (
//                   <p className="text-xs text-red-600 pt-1">{errors.email}</p>
//                 )}
//               </div>

//               <div className="space-y-1">
//                 <div className="relative">
//                   <UserIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
//                   <Input
//                     type="text"
//                     placeholder="Your full name"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                     className="pl-12 h-12 text-sm"
//                     aria-label="Full Name"
//                   />
//                 </div>
//                 {errors.name && (
//                   <p className="text-xs text-red-600 pt-1">{errors.name}</p>
//                 )}
//               </div>

//               <div className="space-y-1">
//                 <div className="relative">
//                   <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
//                   <Input
//                     type="password"
//                     placeholder="Create a strong password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     className="pl-12 h-12 text-sm"
//                     aria-label="Password"
//                   />
//                 </div>
//                 {errors.password && (
//                   <p className="text-xs text-red-600 pt-1">{errors.password}</p>
//                 )}
//                  <p className="text-xs text-gray-500 pt-1">Password is for form validation; actual login uses your OAuth provider (e.g., Google).</p>
//               </div>

//               <Button
//                 type="submit"
//                 className="w-full bg-emerald-700 hover:bg-emerald-800 text-white h-12 text-base transition-all duration-300 transform hover:scale-105"
//                 disabled={loading}
//               >
//                 {loading ? 'Creating Account...' : 'Create Account'}
//               </Button>
//             </form>

//             <div className="mt-8 text-center">
//               <p className="text-sm text-gray-600">
//                 Already have an account?{' '}
//                 <Link
//                   to='auth/login'
//                   className="font-semibold text-emerald-700 hover:text-emerald-800 hover:underline"
//                 >
//                   Sign In
//                 </Link>
//               </p>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
//   // return (
//   //   <div className="min-h-screen bg-gradient-to-br from-gray-50 to-stone-50 flex items-center justify-center p-4">
//   //     <motion.div
//   //       initial={{ opacity: 0, y: 20 }}
//   //       animate={{ opacity: 1, y: 0 }}
//   //       className="w-full max-w-md"
//   //     >
//   //       <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
//   //         <div className="text-center mb-8">
//   //           <div className="flex justify-center mb-4">
//   //             <Logo />
//   //           </div>
//   //           <h2 className="text-2xl font-bold text-gray-900">Create Account</h2>
//   //           <p className="text-gray-600 mt-2">Join our secure file encryption platform</p>
//   //         </div>

//   //         {error && (
//   //           <Alert variant="destructive" className="mb-6">
//   //             <AlertCircle className="h-4 w-4" />
//   //             <AlertDescription>
//   //               {error.toString()}
//   //             </AlertDescription>
//   //           </Alert>
//   //         )}

//   //         <form onSubmit={handleSubmit} className="space-y-6">
//   //           <div className="space-y-2">
//   //             <div className="relative">
//   //               <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
//   //               <Input
//   //                 type="email"
//   //                 placeholder="Your email"
//   //                 value={email}
//   //                 onChange={(e) => setEmail(e.target.value)}
//   //                 className="pl-10"
//   //               />
//   //             </div>
//   //             {errors.email && (
//   //               <p className="text-sm text-red-500">{errors.email}</p>
//   //             )}
//   //           </div>

//   //           <div className="space-y-2">
//   //             <div className="relative">
//   //               <User className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
//   //               <Input
//   //                 type="text"
//   //                 placeholder="Your name"
//   //                 value={name}
//   //                 onChange={(e) => setName(e.target.value)}
//   //                 className="pl-10"
//   //               />
//   //             </div>
//   //             {errors.name && (
//   //               <p className="text-sm text-red-500">{errors.name}</p>
//   //             )}
//   //           </div>

//   //           <div className="space-y-2">
//   //             <div className="relative">
//   //               <Lock className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
//   //               <Input
//   //                 type="password"
//   //                 placeholder="Create password"
//   //                 value={password}
//   //                 onChange={(e) => setPassword(e.target.value)}
//   //                 className="pl-10"
//   //               />
//   //             </div>
//   //             {errors.password && (
//   //               <p className="text-sm text-red-500">{errors.password}</p>
//   //             )}
//   //           </div>

//   //           <Button
//   //             type="submit"
//   //             className="w-full bg-emerald-700 hover:bg-emerald-800"
//   //             disabled={loading}
//   //           >
//   //             {loading ? 'Creating Account...' : 'Create Account'}
//   //           </Button>
//   //         </form>

//   //         <div className="mt-6 text-center">
//   //           <p className="text-gray-600">
//   //             Already have an account?{' '}
//   //             <Link
//   //               to="/auth/login"
//   //               className="text-emerald-700 hover:text-emerald-800 font-medium"
//   //             >
//   //               Sign In
//   //             </Link>
//   //           </p>
//   //         </div>
//   //       </div>
//   //     </motion.div>
//   //   </div>
//   // );
// };

// export default RegisterForm;


import { useEffect, useState } from "react";
import { AlertCircle, Shield, Sparkles, Lock, Eye, EyeOff, Loader, Mail, User } from "lucide-react";
import LoginInfoPanel from "./LoginInfoPanel";
import { Link, useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "@/hooks";
import { registerUser } from "@/features/auth/authSlice";


const RegisterForm = () => {
  const dispatch = useAppDispatch();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const navigate = useNavigate();
  const { loading, error, user } = useAppSelector((state) => state.auth);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    if (!loading && !error && user) {
      navigate('/home');
    }
  }, [loading, error, user, navigate]);
  const handleSubmit = async (e: React.FormEvent) => {
    console.log('came to func');

    e.preventDefault();
    const fieldErrors: { [key: string]: string } = {};

    if (!fullName) {
      fieldErrors.fullName = "Full name is required";
    }

    if (!email) {
      fieldErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      fieldErrors.email = "Email is not valid";
    }

    if (!password) {
      fieldErrors.password = "Password is required";
    } else if (password.length < 6) {
      fieldErrors.password = "Password must be at least 6 characters";
    }

    if (password !== confirm) {
      fieldErrors.confirm = "Passwords do not match";
    }

    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    try {
      dispatch(registerUser({ email, password, name: fullName }));
    } catch (err: any) {

    }
  };

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-emerald-50/30">
        <div className="absolute top-0 left-0 w-full h-full">
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 0.1, scale: 1 }} transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }} className="absolute top-10 left-10 w-32 h-32 bg-emerald-200 rounded-full blur-xl" />
          <motion.div initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 0.08, scale: 1.2 }} transition={{ duration: 15, repeat: Infinity, repeatType: "reverse", delay: 5 }} className="absolute bottom-20 right-20 w-40 h-40 bg-emerald-300 rounded-full blur-2xl" />
          <motion.div initial={{ opacity: 0, x: -100 }} animate={{ opacity: 0.05, x: 100 }} transition={{ duration: 25, repeat: Infinity, repeatType: "reverse", delay: 2 }} className="absolute top-1/2 left-1/4 w-24 h-24 bg-emerald-400 rounded-full blur-xl" />
        </div>
      </div>

      <div className="flex items-center justify-center p-4 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.8, ease: "easeOut" }} className="w-full max-w-md">
          <motion.div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-10 relative overflow-hidden" whileHover={{ y: -2 }} transition={{ duration: 0.3 }}>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 via-emerald-600 to-emerald-700" />
            <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full opacity-20 blur-sm" />

            <div className="text-center mb-10">
              <motion.div className="flex justify-center mb-6" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.2, duration: 0.6 }}>
                <div className="relative">
                  <Logo />
                  <motion.div className="absolute -top-1 -right-1 w-3 h-3" animate={{ rotate: 360 }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }}>
                    <Sparkles className="w-3 h-3 text-emerald-500" />
                  </motion.div>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }}>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-2">Create Account</h2>
                <p className="text-gray-600 flex items-center justify-center gap-2">
                  <Shield className="w-4 h-4 text-emerald-600" />
                  Join to securely manage your files
                </p>
              </motion.div>
            </div>

            {error && (
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="mb-6">
                <Alert variant="destructive" className="border-red-200 bg-red-50/50 backdrop-blur-sm">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription className="text-red-700">{error.toString()}</AlertDescription>
                </Alert>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {[
                { type: "text", name: "fullName", placeholder: "Full name", icon: <User />, value: fullName, setValue: setFullName },
                { type: "email", name: "email", placeholder: "Your email", icon: <Mail />, value: email, setValue: setEmail }
              ].map(({ type, name, placeholder, icon, value, setValue }, idx) => (
                <motion.div className="space-y-2" key={name} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 + idx * 0.1, duration: 0.5 }}>
                  <div className="relative group">
                    <motion.div className={`absolute left-3 top-2.5 transition-colors duration-200 ${focusedField === name ? "text-emerald-600" : "text-gray-400"}`} animate={{ scale: focusedField === name ? 1.1 : 1 }}>
                      {icon}
                    </motion.div>
                    <Input
                      type={type}
                      placeholder={placeholder}
                      value={value}
                      onChange={(e) => setValue(e.target.value)}
                      onFocus={() => setFocusedField(name)}
                      onBlur={() => setFocusedField(null)}
                      className="pl-10 h-12 border-gray-200 focus:border-emerald-500 focus:ring-emerald-500/20 bg-white/50 backdrop-blur-sm hover:bg-white/70 transition-all"
                    />
                  </div>
                  {errors[name] && (
                    <motion.p initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} className="text-sm text-red-500 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors[name]}
                    </motion.p>
                  )}
                </motion.div>
              ))}

              {[
                { name: "password", placeholder: "Password", value: password, setValue: setPassword },
                { name: "confirm", placeholder: "Confirm password", value: confirm, setValue: setConfirm }
              ].map(({ name, placeholder, value, setValue }, idx) => (
                <motion.div className="space-y-2" key={name} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 + idx * 0.1, duration: 0.5 }}>
                  <div className="relative group">
                    <motion.div className={`absolute left-3 top-2.5 transition-colors duration-200 ${focusedField === name ? "text-emerald-600" : "text-gray-400"}`} animate={{ scale: focusedField === name ? 1.1 : 1 }}>
                      <Lock className="h-5 w-5" />
                    </motion.div>
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder={placeholder}
                      value={value}
                      onChange={(e) => setValue(e.target.value)}
                      onFocus={() => setFocusedField(name)}
                      onBlur={() => setFocusedField(null)}
                      className="pl-10 pr-12 h-12 border-gray-200 focus:border-emerald-500 focus:ring-emerald-500/20 bg-white/50 backdrop-blur-sm hover:bg-white/70 transition-all"
                    />
                    <motion.button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-2.5 text-gray-500 hover:text-emerald-600 transition p-1 rounded-full hover:bg-emerald-50" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </motion.button>
                  </div>
                  {errors[name] && (
                    <motion.p initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} className="text-sm text-red-500 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors[name]}
                    </motion.p>
                  )}
                </motion.div>
              ))}

              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.5 }}>
                <Button type="submit" disabled={loading} className="w-full h-12 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all">
                  {loading ? (
                    <motion.div className="flex items-center justify-center gap-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                      <Loader className="animate-spin h-5 w-5" />
                      <span>Creating...</span>
                    </motion.div>
                  ) : (
                    <span>Sign Up</span>
                  )}
                </Button>
              </motion.div>
            </form>

            <motion.div className="mt-8 text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8, duration: 0.5 }}>
              <p className="text-gray-600">
                Already have an account?{" "}
                <Link to="/auth/login" className="text-emerald-700 hover:text-emerald-800 font-semibold hover:underline transition">
                  Sign In
                </Link>
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <div className="hidden md:block relative">
        <LoginInfoPanel />
      </div>
    </div>
  );
}
export default RegisterForm;



