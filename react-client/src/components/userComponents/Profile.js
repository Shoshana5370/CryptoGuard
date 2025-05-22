import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
//this page not finished yet
import { useAppSelector } from "@/hooks";
import { Alert, AlertDescription } from "@/styles/ui/alert";
import { Button } from "@/styles/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/styles/ui/card";
import { Input } from "@/styles/ui/input";
import { Label } from "@/styles/ui/label";
import { User, Key, Shield } from "lucide-react";
import { useState } from "react";
const Profile = () => {
    const { user } = useAppSelector((state) => state.auth);
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        name: user?.name || '',
        email: user?.email || '',
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
    });
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');
        try {
            setSuccess('Profile updated successfully!');
            setIsEditing(false);
        }
        catch (err) {
            setError(err.message || 'Failed to update profile');
        }
    };
    return (_jsxs("div", { className: "container mx-auto px-4 py-8 max-w-4xl", children: [_jsxs("div", { className: "mb-8", children: [_jsx("h1", { className: "text-3xl font-bold text-gray-900", children: "Profile Settings" }), _jsx("p", { className: "text-gray-600 mt-2", children: "Manage your account settings and security preferences" })] }), success && (_jsx(Alert, { className: "mb-6 bg-green-50 text-green-700", children: _jsx(AlertDescription, { children: success }) })), error && (_jsx(Alert, { variant: "destructive", className: "mb-6", children: _jsx(AlertDescription, { children: error }) })), _jsxs("div", { className: "grid gap-8", children: [_jsxs(Card, { children: [_jsx(CardHeader, { children: _jsxs(CardTitle, { className: "flex items-center gap-2", children: [_jsx(User, { className: "w-5 h-5" }), "Profile Information"] }) }), _jsx(CardContent, { children: _jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [_jsxs("div", { className: "grid gap-4", children: [_jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "name", children: "Full Name" }), _jsx(Input, { id: "name", name: "name", value: formData.name, onChange: handleInputChange, disabled: !isEditing })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "email", children: "Email Address" }), _jsx(Input, { id: "email", name: "email", type: "email", value: formData.email, onChange: handleInputChange, disabled: !isEditing })] })] }), _jsx("div", { className: "flex justify-end gap-4", children: !isEditing ? (_jsx(Button, { type: "button", onClick: () => setIsEditing(true), className: "bg-emerald-600 hover:bg-emerald-700", children: "Edit Profile" })) : (_jsxs(_Fragment, { children: [_jsx(Button, { type: "button", variant: "outline", onClick: () => setIsEditing(false), children: "Cancel" }), _jsx(Button, { type: "submit", className: "bg-emerald-600 hover:bg-emerald-700", children: "Save Changes" })] })) })] }) })] }), _jsxs(Card, { children: [_jsx(CardHeader, { children: _jsxs(CardTitle, { className: "flex items-center gap-2", children: [_jsx(Key, { className: "w-5 h-5" }), "Change Password"] }) }), _jsx(CardContent, { children: _jsxs("form", { className: "space-y-6", onSubmit: (e) => e.preventDefault(), children: [_jsxs("div", { className: "grid gap-4", children: [_jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "currentPassword", children: "Current Password" }), _jsx(Input, { id: "currentPassword", name: "currentPassword", type: "password", value: formData.currentPassword, onChange: handleInputChange })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "newPassword", children: "New Password" }), _jsx(Input, { id: "newPassword", name: "newPassword", type: "password", value: formData.newPassword, onChange: handleInputChange })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "confirmPassword", children: "Confirm New Password" }), _jsx(Input, { id: "confirmPassword", name: "confirmPassword", type: "password", value: formData.confirmPassword, onChange: handleInputChange })] })] }), _jsx("div", { className: "flex justify-end", children: _jsx(Button, { type: "submit", className: "bg-emerald-600 hover:bg-emerald-700", children: "Update Password" }) })] }) })] }), _jsxs(Card, { children: [_jsx(CardHeader, { children: _jsxs(CardTitle, { className: "flex items-center gap-2", children: [_jsx(Shield, { className: "w-5 h-5" }), "Security Settings"] }) }), _jsx(CardContent, { children: _jsxs("div", { className: "space-y-6", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { children: [_jsx("h3", { className: "font-medium", children: "Two-Factor Authentication" }), _jsx("p", { className: "text-sm text-gray-500", children: "Add an extra layer of security to your account" })] }), _jsx(Button, { variant: "outline", children: "Enable" })] }), _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { children: [_jsx("h3", { className: "font-medium", children: "Active Sessions" }), _jsx("p", { className: "text-sm text-gray-500", children: "Manage your active sessions across devices" })] }), _jsx(Button, { variant: "outline", children: "Manage" })] }), _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { children: [_jsx("h3", { className: "font-medium", children: "Login History" }), _jsx("p", { className: "text-sm text-gray-500", children: "View your recent login activity" })] }), _jsx(Button, { variant: "outline", children: "View History" })] })] }) })] })] })] }));
};
export default Profile;
