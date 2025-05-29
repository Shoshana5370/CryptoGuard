import { Button } from "@/styles/ui/button";
import { Home } from "lucide-react";
import { useNavigate } from "react-router-dom";

const NotFound=()=> {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-gray-200">404</h1>
        <h2 className="text-3xl font-semibold text-gray-900 mt-4">Page Not Found</h2>
        <p className="text-gray-600 mt-2 mb-8">
          The page you are looking for might have been removed or is temporarily unavailable.
        </p>
        <Button 
          onClick={() => navigate('/')}
          className="bg-emerald-600 hover:bg-emerald-700"
        >
          <Home className="w-4 h-4 mr-2" />
          Back to Home
        </Button>
      </div>
    </div>
  );
}
export default NotFound;