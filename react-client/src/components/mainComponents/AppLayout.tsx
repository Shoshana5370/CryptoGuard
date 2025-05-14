
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function AppLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <Header />
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>
      

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-100">
       <Footer />
      </footer>
    </div>
  );
}