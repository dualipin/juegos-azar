import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Header />
      <main className="container mx-auto py-8 px-4 sm:px-10">
        <Outlet /> {/* Renderiza las rutas hijas */}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
