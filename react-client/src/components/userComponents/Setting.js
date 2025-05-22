import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
//this page is not finished yet
import { useEffect, useState } from "react";
import { Button } from "@/styles/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/styles/ui/card";
import { Switch } from "@radix-ui/react-switch";
import { Bell, Moon, Globe, HardDrive, Lock, Mail, Sliders, Smartphone } from "lucide-react";
const Settings = () => {
    const [settings, setSettings] = useState([
        {
            category: "Preferences",
            icon: Sliders,
            settings: [
                {
                    title: "Dark Mode",
                    description: "Enable dark mode for better viewing in low light",
                    icon: Moon,
                    control: "switch",
                    value: false,
                },
                {
                    title: "Language",
                    description: "Choose your preferred language",
                    icon: Globe,
                    control: "button",
                    value: "English",
                },
            ],
        },
        {
            category: "Notifications",
            icon: Bell,
            settings: [
                {
                    title: "Email Notifications",
                    description: "Receive email notifications for important updates",
                    icon: Mail,
                    control: "switch",
                    value: true,
                },
                {
                    title: "Push Notifications",
                    description: "Receive push notifications on your devices",
                    icon: Smartphone,
                    control: "switch",
                    value: true,
                },
            ],
        },
        {
            category: "Storage",
            icon: HardDrive,
            settings: [
                {
                    title: "Auto-Delete",
                    description: "Automatically delete files after 30 days",
                    icon: Lock,
                    control: "switch",
                    value: false,
                },
            ],
        },
    ]);
    useEffect(() => {
        const darkModeSetting = settings[0].settings.find(s => s.title === "Dark Mode");
        if (darkModeSetting?.value === true) {
            document.documentElement.classList.add("dark");
        }
        else {
            document.documentElement.classList.remove("dark");
        }
    }, [settings]);
    const handleSettingChange = (categoryName, settingItem) => {
        setSettings(prev => prev.map(category => category.category === categoryName
            ? {
                ...category,
                settings: category.settings.map(item => item.title === settingItem.title
                    ? {
                        ...item,
                        value: item.control === "switch"
                            ? !item.value
                            : item.value === "English"
                                ? "Hebrew"
                                : "English",
                    }
                    : item),
            }
            : category));
    };
    return (_jsxs("div", { className: "container mx-auto px-4 py-8 max-w-4xl", children: [_jsxs("div", { className: "mb-8", children: [_jsx("h1", { className: "text-3xl font-bold text-gray-900 dark:text-white", children: "Settings" }), _jsx("p", { className: "text-gray-600 dark:text-gray-300 mt-2", children: "Customize your application preferences" })] }), _jsx("div", { className: "grid gap-8", children: settings.map((category) => (_jsxs(Card, { className: "dark:bg-gray-800", children: [_jsx(CardHeader, { children: _jsxs(CardTitle, { className: "flex items-center gap-2 text-gray-800 dark:text-white", children: [_jsx(category.icon, { className: "w-5 h-5" }), category.category] }) }), _jsx(CardContent, { children: _jsx("div", { className: "space-y-6", children: category.settings.map((setting) => (_jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { className: "flex items-center gap-4", children: [_jsx("div", { className: "p-2 rounded-lg bg-gray-100 dark:bg-gray-700", children: _jsx(setting.icon, { className: "w-5 h-5 text-gray-600 dark:text-white" }) }), _jsxs("div", { children: [_jsx("h3", { className: "font-medium text-gray-800 dark:text-white", children: setting.title }), _jsx("p", { className: "text-sm text-gray-500 dark:text-gray-400", children: setting.description })] })] }), setting.control === "switch" ? (_jsx(Switch, { checked: typeof setting.value === "boolean" ? setting.value : false, onCheckedChange: () => handleSettingChange(category.category, setting), className: "w-11 h-6 bg-gray-300 rounded-full relative focus:outline-none", children: _jsx("span", { className: `block w-5 h-5 bg-white rounded-full shadow transform transition-transform ${setting.value ? "translate-x-5" : "translate-x-0"}` }) })) : (_jsx(Button, { variant: "outline", onClick: () => handleSettingChange(category.category, setting), children: setting.value }))] }, setting.title))) }) })] }, category.category))) })] }));
};
export default Settings;
