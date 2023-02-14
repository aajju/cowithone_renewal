import { Outlet } from "react-router-dom";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import About from "./screens/About";
import Solution from "./screens/Solution";
import Customer from "./screens/Customer";
import Result from "./screens/Result";
import Faq from "./screens/Faq";
import Contact from "./screens/Contact";
import Home from "./screens/Home";
function Root() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className="w-full">
      {/* <Router basename={process.env.PUBLIC_URL}> */}
      <Header />
      {/* <Routes>
          <Route path="/about" element={<About />}></Route>
          <Route path="/solution" element={<Solution />}></Route>
          <Route path="/customer" element={<Customer />}></Route>
          <Route path="/result" element={<Result />}></Route>
          <Route path="/faq" element={<Faq />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/*" element={<Home />}></Route>
        </Routes> */}
      <Outlet />
      <Footer />
      {/* </Router> */}
    </div>
  );
}

export default Root;
