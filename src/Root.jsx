import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Root() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className="w-full">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Root;
