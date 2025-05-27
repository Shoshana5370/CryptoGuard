import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
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
    const user = useAppSelector((state) => state.auth.user);
    const { loading, error } = useAppSelector((state) => state.auth);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState({});
    const validate = () => {
        const newErrors = {};
        if (!email) {
            newErrors.email = 'Email is required';
        }
        else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = 'Email is invalid';
        }
        if (!password) {
            newErrors.password = 'Password is required';
        }
        else if (password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
        }
        return newErrors;
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        dispatch(loginUser({ email, password }));
    };
    useEffect(() => {
        if (!loading && !error && user) {
            navigate('/home');
        }
    }, [loading, error, navigate]);
    return (_jsxs("div", { className: "min-h-screen grid grid-cols-1 md:grid-cols-2", children: [_jsx("div", { className: "hidden md:block bg-[url('/illustration.svg')] bg-cover bg-center" }), _jsx("div", { className: "flex items-center justify-center p-4", children: _jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, className: "w-full max-w-md", children: _jsxs("div", { className: "bg-white rounded-2xl shadow-xl border border-gray-100 p-8", children: [_jsxs("div", { className: "text-center mb-8", children: [_jsx("div", { className: "flex justify-center mb-4", children: _jsx(Logo, {}) }), _jsx("h2", { className: "text-2xl font-bold text-gray-900", children: "Welcome Back" }), _jsx("p", { className: "text-gray-600 mt-2", children: "Sign in to access your secure vault" })] }), error && (_jsxs(Alert, { variant: "destructive", className: "mb-6", children: [_jsx(AlertCircle, { className: "h-4 w-4" }), _jsx(AlertDescription, { children: typeof error === 'string' ? error : JSON.stringify(error, null, 2) })] })), _jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [_jsxs("div", { className: "space-y-2", children: [_jsxs("div", { className: "relative", children: [_jsx(Mail, { className: "absolute left-3 top-2.5 h-5 w-5 text-gray-400" }), _jsx(Input, { type: "email", placeholder: "Your email", value: email, onChange: (e) => setEmail(e.target.value), className: "pl-10", autoComplete: "email" })] }), errors.email && (_jsx("p", { className: "text-sm text-red-500", children: errors.email }))] }), _jsxs("div", { className: "space-y-2", children: [_jsxs("div", { className: "relative", children: [_jsx(Lock, { className: "absolute left-3 top-2.5 h-5 w-5 text-gray-400" }), _jsx(Input, { type: showPassword ? 'text' : 'password', placeholder: "Your password", value: password, onChange: (e) => setPassword(e.target.value), className: "pl-10 pr-10" }), _jsx("button", { type: "button", onClick: () => setShowPassword(!showPassword), className: "absolute right-3 top-2.5 text-gray-500 hover:text-gray-700", children: showPassword ? _jsx(EyeOff, { className: "w-5 h-5" }) : _jsx(Eye, { className: "w-5 h-5" }) })] }), _jsx("div", { className: "text-right text-sm text-emerald-700 hover:underline", children: _jsx(Link, { to: "/auth/forgot-password", children: "Forgot password?" }) })] }), errors.password && (_jsx("p", { className: "text-sm text-red-500", children: errors.password })), _jsx(Button, { type: "submit", className: "w-full bg-emerald-700 hover:bg-emerald-800", disabled: loading, children: loading ? _jsx(Loader, { className: "animate-spin h-4 w-4" }) : 'Sign In' })] }), _jsx("div", { className: "mt-6 text-center", children: _jsxs("p", { className: "text-gray-600", children: ["Don't have an account?", ' ', _jsx(Link, { to: "/auth/register", className: "text-emerald-700 hover:text-emerald-800 font-medium", children: "Create Account" })] }) })] }) }) })] }));
};
export default LoginForm;
