// src/components/RegisterForm.tsx
// import React, { useState } from 'react';


// const RegisterForm: React.FC = () => {
//   const dispatch = useAppDispatch();
//   const { loading, error } = useAppSelector((state) => state.auth);
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [name, setName] = useState('');

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     dispatch(registerUser({ email, password, name }));
//   };

//   return (
//     <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4">
//       <h2 className="text-2xl font-bold mb-4">Register</h2>
//       {error && <p className="text-red-500">{error}</p>}
//       <div className="mb-4">
//         <label className="block mb-1">Name</label>
//         <input
//           type="text"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           className="w-full border px-3 py-2"
//           required
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block mb-1">Email</label>
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           className="w-full border px-3 py-2"
//           required
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block mb-1">Password</label>
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           className="w-full border px-3 py-2"
//           required
//         />
//       </div>
//       <button type="submit" className="bg-green-500 text-white px-4 py-2" disabled={loading}>
//         {loading ? 'Registering...' : 'Register'}
//       </button>
//     </form>
//   );
// };

// export default RegisterForm;




import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';
import { registerUser } from '../features/auth/authSlice';
import { Link } from 'react-router-dom';

const RegisterForm = () => {
  const dispatch = useAppDispatch();
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
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-2 rounded w-full"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>
        <div>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border p-2 rounded w-full"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border p-2 rounded w-full"
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
        </div>
        <button type="submit" className="bg-green-500 text-white py-2 rounded">
          Register
        </button>
      </form>
      <p className="mt-4 text-sm">
        Already have an account?{' '}
        <Link to="/auth/login" className="text-blue-500 underline">
          Sign in
        </Link>
      </p>
    </div>
  );
};

export default RegisterForm;
