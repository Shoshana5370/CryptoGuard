
import  { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown, LogOut,  } from "lucide-react";
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
        { name: 'Features', href: '#features' },
        { name: 'Pricing', href: '#pricing' },
    ];
    const handleLogout = () => {
        dispatch(logout());
        navigate('/');
      };
    return (
        // <div className="container mx-auto px-4">
        //     <div className="flex items-center justify-between h-16">
        //         {/* Logo */}
        //         <Link to="/" className="flex items-center gap-2">
        //              <Logo/>
        //         </Link>
        //         {/* Desktop Navigation */}
        //         <nav className="hidden md:flex items-center gap-6">
        //             {navigation.map((item) => (
        //                 <Link
        //                     key={item.name}
        //                     to={item.href}
        //                     className={`text-gray-600 hover:text-gray-900 transition-colors ${location.pathname === item.href ? 'text-emerald-600 font-medium' : ''
        //                         }`}
        //                 >
        //                     {item.name}
        //                 </Link>
        //             ))}
        //         </nav>

        //         {/* Desktop Action Buttons */}
        //         <div className="hidden md:flex items-center gap-4">
        //             <DropdownMenu>
        //                 <DropdownMenuTrigger asChild>
        //                     <Button variant="ghost" className="gap-2">
        //                         Account
        //                         <ChevronDown className="w-4 h-4" />
        //                     </Button>
        //                 </DropdownMenuTrigger>
        //                 <DropdownMenuContent align="end" className="w-48">
        //                     <DropdownMenuItem onClick={() => navigate('/profile')}>
        //                         Profile
        //                     </DropdownMenuItem>
        //                     <DropdownMenuItem onClick={() => navigate('/settings')}>
        //                         Settings
        //                     </DropdownMenuItem>
        //                 </DropdownMenuContent>
        //             </DropdownMenu>

        //             <Button
        //                 onClick={() => navigate('/files/upload')}
        //                 className="bg-emerald-600 hover:bg-emerald-700">
        //                 Upload File
        //             </Button>
        //         </div>

        //         {/* Mobile menu button */}
        //         <button
        //             className="md:hidden p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100"
        //             onClick={() => setIsMenuOpen(!isMenuOpen)}
        //         >
        //             {isMenuOpen ? (
        //                 <X className="w-6 h-6" />
        //             ) : (
        //                 <Menu className="w-6 h-6" />
        //             )}
        //         </button>
        //     </div>
        //     {/* Mobile Navigation */}
        //     {isMenuOpen && (
        //         <div className="md:hidden py-4 border-t border-gray-100">
        //             <nav className="flex flex-col gap-4">
        //                 {navigation.map((item) => (
        //                     <Link
        //                         key={item.name}
        //                         to={item.href}
        //                         className={`text-gray-600 hover:text-gray-900 transition-colors ${location.pathname === item.href ? 'text-emerald-600 font-medium' : ''
        //                             }`}
        //                         onClick={() => setIsMenuOpen(false)}
        //                     >
        //                         {item.name}
        //                     </Link>
        //                 ))}
        //                 <Button
        //                     onClick={() => {
        //                         navigate('/files/upload');
        //                         setIsMenuOpen(false);
        //                     }}
        //                     className="bg-emerald-600 hover:bg-emerald-700 mt-2"
        //                 >
        //                     Upload File
        //                 </Button>
        //             </nav>
        //         </div>
        //     )}
        // </div>
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
                className={`text-gray-600 hover:text-gray-900 transition-colors ${
                  location.pathname === item.href ? 'text-emerald-600 font-medium' : ''
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
                  className={`text-gray-600 hover:text-gray-900 transition-colors ${
                    location.pathname === item.href ? 'text-emerald-600 font-medium' : ''
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
