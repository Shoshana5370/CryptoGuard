// import { useState } from 'react';
// import { useAppDispatch, useAppSelector } from '../../hooks';
// import { loginUser } from '../../features/auth/authSlice';
// import { Link, useNavigate } from 'react-router-dom';

// const LoginForm = () => {
//   const dispatch = useAppDispatch();
//   const navigate = useNavigate();
//   const { loading, error } = useAppSelector((state) => state.auth);
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
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
//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//       return;
//     }
//     try {
//       await dispatch(loginUser({ email, password }));
//       navigate('/share'); // Navigate to the share page after successful login
//     } catch (error) {
//       console.error("Login failed:", error);
//       // Optionally set a login error state here
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
//       <h2 className="text-2xl font-semibold mb-4">Sign In</h2>
//       {error && <p className="text-red-500">{error && (
//         <div>
//           {typeof error === 'string'
//             ? error
//             : JSON.stringify(error, null, 2)}
//         </div>
//       )}</p>}
//       <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
//         <div>
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="border p-2 rounded w-full"
//           />
//           {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
//         </div>
//         <div>
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="border p-2 rounded w-full"
//           />
//           {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
//         </div>
//         <button type="submit" className="bg-blue-500 text-white py-2 rounded" > {loading ? 'Logging...' : 'Sign In'}</button>
//       </form>
//       <p className="mt-4 text-sm">
//         Don't have an account?{' '}
//         <Link to="/auth/register" className="text-blue-500 underline">
//           Sign up
//         </Link>
//       </p>
//     </div>
//   );
// };

// export default LoginForm;
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
    navigate('/home'); // Only after successful login
  }
  };
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
  <div className="hidden md:block bg-[url('/illustration.svg')] bg-cover bg-center" />
  <div className="flex items-center justify-center p-4">
    {/* Login card */}
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
              {/* <div className="relative">
                <Lock className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                <Input
                  type="password"
                  placeholder="Your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10"
                  autoComplete='current-password"'
                /> */}
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
        {/* </div> */}

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
    //  <div className="min-h-screen bg-gradient-to-br from-gray-50 to-stone-50 flex items-center justify-center p-4">
     
    // </div >
    // </div>
  );
};

export default LoginForm;