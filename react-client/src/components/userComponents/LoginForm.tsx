

// const LoginForm = () => {
//   const dispatch = useAppDispatch();
//   const navigate = useNavigate();
//   const { loading, error } = useAppSelector((state) => state.auth);

import { loginUser } from "@/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from '../mainComponents/Logo';
import { AlertCircle, Mail, Shield, Sparkles, Lock, Eye, EyeOff, Loader } from "lucide-react";
import { Alert, AlertDescription } from "@/styles/ui/alert";
import { Input } from "@/styles/ui/input";
import { Button } from "@/styles/ui/button";
import LoginInfoPanel from "./LoginInfoPanel";
import { useToast } from "@/styles/hooks/use-toast";

//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const [captchaToken, setCaptchaToken] = useState<string | null>(null);
//   const [errors, setErrors] = useState<{ email?: string; password?: string; captcha?: string }>({});


//   const validate = () => {
//     const newErrors: { email?: string; password?: string } = {};
//     if (!email) {
//       newErrors.email = 'Email is required';
//     } else if (!/\S+@\S+\.\S+/.test(email)) {
//       newErrors.email = 'Email is invalid';
//     }
//     if (!password) {
//       newErrors.password = 'Password is required';
//     } else if (password.length < 6) {
//       newErrors.password = 'Password must be at least 6 characters';
//     }
//     return newErrors;
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     const validationErrors = validate();

//     if (!captchaToken) {
//       setErrors((prev) => ({ ...prev, captcha: 'Captcha is required' }));
//     }

//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//       return;
//     }

//     const resultAction = await dispatch(loginUser({ email, password , captchaToken: captchaToken || '' }));
//     if (loginUser.fulfilled.match(resultAction)) {
//       navigate('/home');
//     }
//   };

//   return (
//     <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
//       <div className="hidden md:block bg-[url('/illustration.svg')] bg-cover bg-center" />
//       <div className="flex items-center justify-center p-4">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="w-full max-w-md"
//         >
//           <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
//             <div className="text-center mb-8">
//               <div className="flex justify-center mb-4">
//                 <Logo />
//               </div>
//               <h2 className="text-2xl font-bold text-gray-900">Welcome Back</h2>
//               <p className="text-gray-600 mt-2">Sign in to access your secure vault</p>
//             </div>

//             {error && (
//               <Alert variant="destructive" className="mb-6">
//                 <AlertCircle className="h-4 w-4" />
//                 <AlertDescription>
//                   {typeof error === 'string' ? error : JSON.stringify(error, null, 2)}
//                 </AlertDescription>
//               </Alert>
//             )}

//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div className="space-y-2">
//                 <div className="relative">
//                   <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
//                   <Input
//                     type="email"
//                     placeholder="Your email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     className="pl-10"
//                     autoComplete="email"
//                   />
//                 </div>
//                 {errors.email && (
//                   <p className="text-sm text-red-500">{errors.email}</p>
//                 )}
//               </div>

//               <div className="space-y-2">
//                 <div className="relative">
//                   <Lock className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
//                   <Input
//                     type={showPassword ? 'text' : 'password'}
//                     placeholder="Your password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     className="pl-10 pr-10"
//                   />
//                   <button
//                     type="button"
//                     onClick={() => setShowPassword(!showPassword)}
//                     className="absolute right-3 top-2.5 text-gray-500 hover:text-gray-700"
//                   >
//                     {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
//                   </button>
//                 </div>
//                 <div className="text-right text-sm text-emerald-700 hover:underline">
//                   <Link to="/auth/forgot-password">Forgot password?</Link>
//                 </div>
//               </div>
//               {errors.password && (
//                 <p className="text-sm text-red-500">{errors.password}</p>
//               )}

//               <ReCaptcha onVerify={(token) => setCaptchaToken(token)} />
//               {errors.captcha && (
//                 <p className="text-sm text-red-500">{errors.captcha}</p>
//               )}

//               <Button
//                 type="submit"
//                 className="w-full bg-emerald-700 hover:bg-emerald-800"
//                 disabled={loading}
//               >
//                 {loading ? <Loader className="animate-spin h-4 w-4" /> : 'Sign In'}
//               </Button>
//             </form>

//             <div className="mt-6 text-center">
//               <p className="text-gray-600">
//                 Don't have an account?{' '}
//                 <Link
//                   to="/auth/register"
//                   className="text-emerald-700 hover:text-emerald-800 font-medium"
//                 >
//                   Create Account
//                 </Link>
//               </p>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default LoginForm;




const LoginForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { user, loginLoading, loginError } = useAppSelector((state) => state.auth);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const validate = () => {
    const newErrors: { email?: string; password?: string } = {};
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    dispatch(loginUser({ email, password }));
  };

 useEffect(() => {
    if (!loginLoading && user) {
      toast({
        title: "Login Successful",
        description: `Welcome back, ${user.name || "user"}!`,
      });
      navigate("/home");
    }
    if (!loginLoading && loginError) {
      toast({
        title: "Login Failed",
        description: loginError,
      });
    }
  }, [loginLoading, loginError, user, navigate, toast]);

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
                <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-2">Welcome Back</h2>
                <p className="text-gray-600 flex items-center justify-center gap-2">
                  <Shield className="w-4 h-4 text-emerald-600" />
                  Sign in to access your secure vault
                </p>
              </motion.div>
            </div>

            {loginError && (
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="mb-6">
                <Alert variant="destructive" className="border-red-200 bg-red-50/50 backdrop-blur-sm">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription className="text-red-700">
                    {loginError}
                  </AlertDescription>
                </Alert>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div className="space-y-2" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4, duration: 0.5 }}>
                <div className="relative group">
                  <motion.div className={`absolute left-3 top-2.5 transition-colors duration-200 ${focusedField === 'email' ? 'text-emerald-600' : 'text-gray-400'}`} animate={{ scale: focusedField === 'email' ? 1.1 : 1 }}>
                    <Mail className="h-5 w-5" />
                  </motion.div>
                  <Input
                    type="email"
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    className="pl-10 h-12 border-gray-200 focus:border-emerald-500 focus:ring-emerald-500/20 bg-white/50 backdrop-blur-sm hover:bg-white/70 transition-all"
                    autoComplete="email"
                  />
                </div>
                {errors.email && (
                  <motion.p initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} className="text-sm text-red-500 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.email}
                  </motion.p>
                )}
              </motion.div>

              <motion.div className="space-y-2" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5, duration: 0.5 }}>
                <div className="relative group">
                  <motion.div className={`absolute left-3 top-2.5 transition-colors duration-200 ${focusedField === 'password' ? 'text-emerald-600' : 'text-gray-400'}`} animate={{ scale: focusedField === 'password' ? 1.1 : 1 }}>
                    <Lock className="h-5 w-5" />
                  </motion.div>
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onFocus={() => setFocusedField('password')}
                    onBlur={() => setFocusedField(null)}
                    className="pl-10 pr-12 h-12 border-gray-200 focus:border-emerald-500 focus:ring-emerald-500/20 bg-white/50 backdrop-blur-sm hover:bg-white/70 transition-all"
                  />
                  <motion.button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-2.5 text-gray-500 hover:text-emerald-600 transition p-1 rounded-full hover:bg-emerald-50" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </motion.button>
                </div>
                <div className="text-right">
                  <Link to="/auth/forgot-password" className="text-sm text-emerald-700 hover:text-emerald-800 hover:underline transition">Forgot password?</Link>
                </div>
                {errors.password && (
                  <motion.p initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} className="text-sm text-red-500 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.password}
                  </motion.p>
                )}
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.5 }}>
                <Button type="submit" disabled={loginLoading} className="w-full h-12 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all">
                  {loginLoading ? (
                    <motion.div className="flex items-center justify-center gap-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                      <Loader className="animate-spin h-5 w-5" />
                      <span>Signing in...</span>
                    </motion.div>
                  ) : (
                    <span>Sign In</span>
                  )}
                </Button>
              </motion.div>
            </form>

            <motion.div className="mt-8 text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7, duration: 0.5 }}>
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white text-gray-500">or</span>
                </div>
              </div>
              <p className="text-gray-600 mt-4">
                Don't have an account?{" "}
                <Link to="/auth/register" className="text-emerald-700 hover:text-emerald-800 font-semibold hover:underline transition">
                  Create Account
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
};

export default LoginForm;
