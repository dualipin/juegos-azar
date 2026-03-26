import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="min-h-dvh transition-colors flex flex-col">
      <Header />
      <main className="container mx-auto py-8 px-4 sm:px-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
