import { Button } from "../../styles/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "../../styles/ui/dropdown-menu";
import  { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown,  } from "lucide-react";
import Logo from "./Logo";
const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const navigation = [
        { name: 'Home', href: '/' },
        { name: 'Files', href: '/files' },
        { name: 'Features', href: '#features' },
        { name: 'Pricing', href: '#pricing' },
    ];
    return (
        <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2">
                     <Logo/>
                </Link>
                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-6">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            to={item.href}
                            className={`text-gray-600 hover:text-gray-900 transition-colors ${location.pathname === item.href ? 'text-emerald-600 font-medium' : ''
                                }`}
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                {/* Desktop Action Buttons */}
                <div className="hidden md:flex items-center gap-4">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="gap-2">
                                Account
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
                        </DropdownMenuContent>
                    </DropdownMenu>

                    <Button
                        onClick={() => navigate('/files/upload')}
                        className="bg-emerald-600 hover:bg-emerald-700">
                        Upload File
                    </Button>
                </div>

                {/* Mobile menu button */}
                <button
                    className="md:hidden p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? (
                        <X className="w-6 h-6" />
                    ) : (
                        <Menu className="w-6 h-6" />
                    )}
                </button>
            </div>
            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="md:hidden py-4 border-t border-gray-100">
                    <nav className="flex flex-col gap-4">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                to={item.href}
                                className={`text-gray-600 hover:text-gray-900 transition-colors ${location.pathname === item.href ? 'text-emerald-600 font-medium' : ''
                                    }`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Button
                            onClick={() => {
                                navigate('/files/upload');
                                setIsMenuOpen(false);
                            }}
                            className="bg-emerald-600 hover:bg-emerald-700 mt-2"
                        >
                            Upload File
                        </Button>
                    </nav>
                </div>
            )}
        </div>
    )
}
export default Header;
