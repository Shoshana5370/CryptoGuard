import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { registerUser } from '../../features/auth/authSlice';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";
import { Mail, Lock, User, AlertCircle } from "lucide-react";
import Logo from '../mainComponents/Logo';
import { Alert, AlertDescription } from '@/styles/ui/alert';
import { Input } from '@/styles/ui/input';
import { Button } from '@/styles/ui/button';
const RegisterForm = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { loading, error, user } = useAppSelector((state) => state.auth);
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const validate = () => {
        const newErrors = {};
        if (!email) {
            newErrors.email = 'Email is required';
        }
        else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = 'Email is invalid';
        }
        if (!name) {
            newErrors.name = 'Name is required';
        }
        if (!password) {
            newErrors.password = 'Password is required';
        }
        else if (password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
        }
        return newErrors;
    };
    useEffect(() => {
        if (!loading && !error && user) {
            navigate('/home');
        }
    }, [loading, error, user, navigate]);
    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        dispatch(registerUser({ email, name, password }));
    };
    return (_jsx("div", { className: "min-h-screen bg-gradient-to-br from-gray-50 to-stone-50 flex items-center justify-center p-4", children: _jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, className: "w-full max-w-md", children: _jsxs("div", { className: "bg-white rounded-2xl shadow-xl border border-gray-100 p-8", children: [_jsxs("div", { className: "text-center mb-8", children: [_jsx("div", { className: "flex justify-center mb-4", children: _jsx(Logo, {}) }), _jsx("h2", { className: "text-2xl font-bold text-gray-900", children: "Create Account" }), _jsx("p", { className: "text-gray-600 mt-2", children: "Join our secure file encryption platform" })] }), error && (_jsxs(Alert, { variant: "destructive", className: "mb-6", children: [_jsx(AlertCircle, { className: "h-4 w-4" }), _jsx(AlertDescription, { children: error.toString() })] })), _jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [_jsxs("div", { className: "space-y-2", children: [_jsxs("div", { className: "relative", children: [_jsx(Mail, { className: "absolute left-3 top-2.5 h-5 w-5 text-gray-400" }), _jsx(Input, { type: "email", placeholder: "Your email", value: email, onChange: (e) => setEmail(e.target.value), className: "pl-10" })] }), errors.email && (_jsx("p", { className: "text-sm text-red-500", children: errors.email }))] }), _jsxs("div", { className: "space-y-2", children: [_jsxs("div", { className: "relative", children: [_jsx(User, { className: "absolute left-3 top-2.5 h-5 w-5 text-gray-400" }), _jsx(Input, { type: "text", placeholder: "Your name", value: name, onChange: (e) => setName(e.target.value), className: "pl-10" })] }), errors.name && (_jsx("p", { className: "text-sm text-red-500", children: errors.name }))] }), _jsxs("div", { className: "space-y-2", children: [_jsxs("div", { className: "relative", children: [_jsx(Lock, { className: "absolute left-3 top-2.5 h-5 w-5 text-gray-400" }), _jsx(Input, { type: "password", placeholder: "Create password", value: password, onChange: (e) => setPassword(e.target.value), className: "pl-10" })] }), errors.password && (_jsx("p", { className: "text-sm text-red-500", children: errors.password }))] }), _jsx(Button, { type: "submit", className: "w-full bg-emerald-700 hover:bg-emerald-800", disabled: loading, children: loading ? 'Creating Account...' : 'Create Account' })] }), _jsx("div", { className: "mt-6 text-center", children: _jsxs("p", { className: "text-gray-600", children: ["Already have an account?", ' ', _jsx(Link, { to: "/auth/login", className: "text-emerald-700 hover:text-emerald-800 font-medium", children: "Sign In" })] }) })] }) }) }));
};
export default RegisterForm;
