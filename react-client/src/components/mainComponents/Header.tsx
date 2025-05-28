
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
     return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100/50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <Logo />
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-gray-700 hover:text-emerald-600 transition-all duration-200 font-medium relative group ${
                  location.pathname === item.href ? 'text-emerald-600' : ''
                }`}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-600 transition-all duration-200 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            {user ? (
              <>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="gap-2 hover:bg-emerald-50">
                      {user.name}
                      <ChevronDown className="w-4 h-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-48 bg-white/95 backdrop-blur-sm">
                    <DropdownMenuItem onClick={() => navigate('/profile')}>Profile</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => navigate('/settings')}>Settings</DropdownMenuItem>
                    <DropdownMenuItem onClick={handleLogout} className="text-red-600">
                      <LogOut className="w-4 h-4 mr-2" />
                      Logout
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <Button 
                  onClick={() => navigate('/files/upload')} 
                  className="bg-emerald-600 hover:bg-emerald-700 shadow-lg shadow-emerald-600/25 transition-all duration-200"
                >
                  Upload File
                </Button>
              </>
            ) : (
              <>
                <Button 
                  onClick={() => navigate('/auth/login')} 
                  variant="ghost"
                  className="text-emerald-700 hover:bg-emerald-50"
                >
                  Sign In
                </Button>
                <Button 
                  onClick={() => navigate('/auth/register')} 
                  className="bg-emerald-600 hover:bg-emerald-700 shadow-lg shadow-emerald-600/25 transition-all duration-200"
                >
                  Sign Up
                </Button>
              </>
            )}
          </div>

          <button
            className="md:hidden p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
          
          {isMenuOpen && (
            <div className="md:hidden absolute top-16 left-0 w-full bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-100 px-4 py-4 z-50">
              <nav className="flex flex-col gap-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`text-gray-600 hover:text-emerald-600 transition-colors py-2 ${
                      location.pathname === item.href ? 'text-emerald-600 font-medium' : ''
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}

                {user ? (
                  <>
                    <Button
                      onClick={() => {
                        navigate('/files/upload');
                        setIsMenuOpen(false);
                      }}
                      className="bg-emerald-600 hover:bg-emerald-700 mt-2"
                    >
                      Upload File
                    </Button>
                    <Button
                      onClick={() => {
                        navigate('/profile');
                        setIsMenuOpen(false);
                      }}
                      variant="ghost"
                    >
                      Profile
                    </Button>
                    <Button
                      onClick={() => {
                        navigate('/settings');
                        setIsMenuOpen(false);
                      }}
                      variant="ghost"
                    >
                      Settings
                    </Button>
                    <Button
                      onClick={() => {
                        handleLogout();
                        setIsMenuOpen(false);
                      }}
                      variant="destructive"
                    >
                      <LogOut className="w-4 h-4 mr-2" />
                      Logout
                    </Button>
                  </>
                ) : (
                  <>
                    <Button
                      onClick={() => {
                        navigate('/auth/login');
                        setIsMenuOpen(false);
                      }}
                      variant="ghost"
                      className="text-emerald-700"
                    >
                      Sign In
                    </Button>
                    <Button
                      onClick={() => {
                        navigate('/auth/register');
                        setIsMenuOpen(false);
                      }}
                      className="bg-emerald-600 hover:bg-emerald-700"
                    >
                      Sign Up
                    </Button>
                  </>
                )}
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
export default Header;
