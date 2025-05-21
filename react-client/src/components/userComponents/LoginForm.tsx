
import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { loginUser } from '../../features/auth/authSlice';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";
import { Input } from "@/styles/ui/input";
import { Button } from "@/styles/ui/button";
import { Mail, Lock, AlertCircle, Loader, EyeOff, Eye } from "lucide-react";
import { Alert, AlertDescription } from "@/styles/ui/alert";
import Logo from '../mainComponents/Logo';

const LoginForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { loading, error } = useAppSelector((state) => state.auth);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
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
    const resultAction = await dispatch(loginUser({ email, password }));

  if (loginUser.fulfilled.match(resultAction)) {
    navigate('/home'); 
  }
  };
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
  <div className="hidden md:block bg-[url('/illustration.svg')] bg-cover bg-center" />
  <div className="flex items-center justify-center p-4">
     <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <Logo />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Welcome Back</h2>
            <p className="text-gray-600 mt-2">Sign in to access your secure vault</p>
          </div>

          {error && (
            <Alert variant="destructive" className="mb-6">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                {typeof error === 'string' ? error : JSON.stringify(error, null, 2)}
              </AlertDescription>
            </Alert>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <div className="relative">
                <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                <Input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10"
                  autoComplete="email"
                />
              </div>
              {errors.email && (
                <p className="text-sm text-red-500">{errors.email}</p>
              )}
            </div>

            <div className="space-y-2">
              <div className="relative">
                <Lock className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                <Input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-2.5 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              <div className="text-right text-sm text-emerald-700 hover:underline">
                <Link to="/auth/forgot-password">Forgot password?</Link>
              </div>
            </div>
            {errors.password && (
              <p className="text-sm text-red-500">{errors.password}</p>
            )}

        <Button
          type="submit"
          className="w-full bg-emerald-700 hover:bg-emerald-800"
          disabled={loading}
        >
          {loading ? <Loader className="animate-spin h-4 w-4" /> : 'Sign In'}
        </Button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-gray-600">
          Don't have an account?{' '}
          <Link
            to="/auth/register"
            className="text-emerald-700 hover:text-emerald-800 font-medium"
          >
            Create Account
          </Link>
        </p>
      </div>
    </div>
      </motion.div >
  </div>
</div>
  );
};

export default LoginForm;
//without reCaptcha
// import React, { useState } from 'react';
// import { useAppDispatch, useAppSelector } from '../../hooks';
// import { loginUser } from '../../features/auth/authSlice';
// import { Link, useNavigate } from 'react-router-dom';
// import { motion } from "framer-motion";
// import { Input } from "@/styles/ui/input";
// import { Button } from "@/styles/ui/button";
// import { Mail, Lock, AlertCircle, Loader, EyeOff, Eye } from "lucide-react";
// import { Alert, AlertDescription } from "@/styles/ui/alert";
// import Logo from '../mainComponents/Logo';
// import ReCaptcha from './ReCaptcha'; // ✅ import your custom ReCaptcha

// const LoginForm = () => {
//   const dispatch = useAppDispatch();
//   const navigate = useNavigate();
//   const { loading, error } = useAppSelector((state) => state.auth);

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
