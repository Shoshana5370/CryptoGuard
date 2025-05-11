
// import { useState } from 'react';
// import { useAppDispatch, useAppSelector } from '../../hooks';
// import { registerUser } from '../../features/auth/authSlice';
// import { Link } from 'react-router-dom';

// const RegisterForm = () => {
//   const dispatch = useAppDispatch();
//   const { loading, error } = useAppSelector((state) => state.auth);
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

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     const validationErrors = validate();
//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//       return;
//     }
//     dispatch(registerUser({ email, name, password }));
//   };

//   return (
//     <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
//       <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
//       {error && <p className="text-red-500">{error.toString()}</p>}
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
//             type="text"
//             placeholder="Name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             className="border p-2 rounded w-full"
//           />
//           {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
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
//         <button type="submit" className="bg-green-500 text-white px-4 py-2" disabled={loading}>
//           {loading ? 'Registering...' : 'Sign Up'} 
//         </button>
//       </form>

//       <p className="mt-4 text-sm">
//         Already have an account?{' '}
//         <Link to="/auth/login" className="text-blue-500 underline">
//           Sign in
//         </Link>
//       </p>
//     </div>
//   );
// };

// export default RegisterForm;




import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { registerUser } from '../../features/auth/authSlice';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { Mail, Lock, User, AlertCircle } from "lucide-react";
import Logo from '../mainComponents/Logo';
import { Alert, AlertDescription } from '@/styles/ui/alert';
import { Input } from '@/styles/ui/input';
import { Button } from '@/styles/ui/button';



const RegisterForm = () => {
  const dispatch = useAppDispatch();
  const { loading, error } = useAppSelector((state) => state.auth);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ email?: string; name?: string; password?: string }>({});

  const validate = () => {
        const newErrors: { email?: string; name?: string; password?: string } = {};
        if (!email) {
          newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
          newErrors.email = 'Email is invalid';
        }
        if (!name) {
          newErrors.name = 'Name is required';
        }
        if (!password) {
          newErrors.password = 'Password is required';
        } else if (password.length < 6) {
          newErrors.password = 'Password must be at least 6 characters';
        }
        return newErrors;
      };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    dispatch(registerUser({ email, name, password }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-stone-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <Logo/>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Create Account</h2>
            <p className="text-gray-600 mt-2">Join our secure file encryption platform</p>
          </div>

          {error && (
            <Alert variant="destructive" className="mb-6">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                {error.toString()}
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
                />
              </div>
              {errors.email && (
                <p className="text-sm text-red-500">{errors.email}</p>
              )}
            </div>

            <div className="space-y-2">
              <div className="relative">
                <User className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="pl-10"
                />
              </div>
              {errors.name && (
                <p className="text-sm text-red-500">{errors.name}</p>
              )}
            </div>

            <div className="space-y-2">
              <div className="relative">
                <Lock className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                <Input
                  type="password"
                  placeholder="Create password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10"
                />
              </div>
              {errors.password && (
                <p className="text-sm text-red-500">{errors.password}</p>
              )}
            </div>

            <Button
              type="submit"
              className="w-full bg-emerald-700 hover:bg-emerald-800"
              disabled={loading}
            >
              {loading ? 'Creating Account...' : 'Create Account'}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Already have an account?{' '}
              <Link
                to="/auth/login"
                className="text-emerald-700 hover:text-emerald-800 font-medium"
              >
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default RegisterForm;



