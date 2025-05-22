import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
{ /* <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="gap-2">
                  {user?.name || 'Account'}
                  <ChevronDown className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem onClick={() => navigate('/profile')}>
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate('/settings')}>
                  Settings
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleLogout} className="text-red-600">
                  <LogOut className="w-4 h-4 mr-2" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Button
              onClick={() => navigate('/files/upload')}
              className="bg-emerald-600 hover:bg-emerald-700">
              Upload File
            </Button>
          </div>

          {/* Mobile menu button */
}
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown, LogOut, } from "lucide-react";
import Logo from "./Logo";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { logout } from "@/features/auth/authSlice";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/styles/ui/dropdown-menu";
import { Button } from "@/styles/ui/button";
const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { user } = useAppSelector(state => state.auth);
    const navigation = [
        { name: 'Home', href: '/' },
        { name: 'Files', href: '/files' },
        { name: 'Shares', href: '/shares' },
        { name: 'Pricing', href: '#pricing' },
    ];
    const handleLogout = () => {
        dispatch(logout());
        navigate('/');
    };
    return (_jsx("div", { className: "container mx-auto px-4", children: _jsxs("div", { className: "flex items-center justify-between h-16", children: [_jsx(Link, { to: "/", className: "flex items-center gap-2", children: _jsx(Logo, {}) }), _jsx("nav", { className: "hidden md:flex items-center gap-6", children: navigation.map((item) => (_jsx(Link, { to: item.href, className: `text-gray-600 hover:text-gray-900 transition-colors ${location.pathname === item.href ? 'text-emerald-600 font-medium' : ''}`, children: item.name }, item.name))) }), _jsx("div", { className: "hidden md:flex items-center gap-4", children: user ? (_jsxs(_Fragment, { children: [_jsxs(DropdownMenu, { children: [_jsx(DropdownMenuTrigger, { asChild: true, children: _jsxs(Button, { variant: "ghost", className: "gap-2", children: [user.name, _jsx(ChevronDown, { className: "w-4 h-4" })] }) }), _jsxs(DropdownMenuContent, { align: "end", className: "w-48", children: [_jsx(DropdownMenuItem, { onClick: () => navigate('/profile'), children: "Profile" }), _jsx(DropdownMenuItem, { onClick: () => navigate('settings'), children: "Settings" }), _jsxs(DropdownMenuItem, { onClick: handleLogout, className: "text-red-600", children: [_jsx(LogOut, { className: "w-4 h-4 mr-2" }), "Logout"] })] })] }), _jsx(Button, { onClick: () => navigate('/files/upload'), className: "bg-emerald-600 hover:bg-emerald-700", children: "Upload File" })] })) : (_jsxs(_Fragment, { children: [_jsx(Button, { onClick: () => navigate('/auth/login'), className: "bg-emerald-600 hover:bg-emerald-700", children: "Sign In" }), _jsx(Button, { onClick: () => navigate('/auth/register'), className: "bg-emerald-600 hover:bg-emerald-700", children: "Sign Up" })] })) }), _jsx("button", { className: "md:hidden p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100", onClick: () => setIsMenuOpen(!isMenuOpen), children: isMenuOpen ? _jsx(X, { className: "w-6 h-6" }) : _jsx(Menu, { className: "w-6 h-6" }) }), isMenuOpen && (_jsx("div", { className: "md:hidden absolute top-16 left-0 w-full bg-white shadow-md border-t border-gray-100 px-4 py-4 z-50", children: _jsxs("nav", { className: "flex flex-col gap-4", children: [navigation.map((item) => (_jsx(Link, { to: item.href, className: `text-gray-600 hover:text-gray-900 transition-colors ${location.pathname === item.href ? 'text-emerald-600 font-medium' : ''}`, onClick: () => setIsMenuOpen(false), children: item.name }, item.name))), _jsx(Button, { onClick: () => {
                                    navigate('/files/upload');
                                    setIsMenuOpen(false);
                                }, className: "bg-emerald-600 hover:bg-emerald-700 mt-2", children: "Upload File" }), user ? (_jsxs(_Fragment, { children: [_jsx(Button, { onClick: () => {
                                            navigate('/profile');
                                            setIsMenuOpen(false);
                                        }, variant: "ghost", children: "Profile" }), _jsx(Button, { onClick: () => {
                                            navigate('/settings');
                                            setIsMenuOpen(false);
                                        }, variant: "ghost", children: "Setting" }), _jsxs(Button, { onClick: () => {
                                            handleLogout();
                                            setIsMenuOpen(false);
                                        }, variant: "destructive", children: [_jsx(LogOut, { className: "w-4 h-4 mr-2" }), "Logout"] })] })) : (_jsxs(_Fragment, { children: [_jsx(Button, { onClick: () => {
                                            navigate('/auth/login');
                                            setIsMenuOpen(false);
                                        }, className: "bg-emerald-600 hover:bg-emerald-700", children: "Sign In" }), _jsx(Button, { onClick: () => {
                                            navigate('/auth/register');
                                            setIsMenuOpen(false);
                                        }, className: "bg-emerald-600 hover:bg-emerald-700", children: "Sign Up" })] }))] }) }))] }) }));
};
export default Header;
