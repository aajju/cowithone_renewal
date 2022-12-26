import { Link } from "react-router-dom";
import logoPath from "../assets/img/logo.png";
import classNames from "classnames";
import { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";
import styled from "styled-components";

const Nav = styled(motion.nav)`
  z-index: 50;
`;

function Header() {
  const [menuToggle, setMenuToggle] = useState(false);
  const [yValue, setYValue] = useState(0);
  const { scrollY } = useScroll();

  useEffect(() => {
    scrollY.onChange(() => {
      setYValue(scrollY.get());
    });
  }, [scrollY]);

  return (
    <Nav
      animate={{
        // backgroundColor: yValue > 50 ? "rgba(236, 236, 236)" : "",
        borderBottom: yValue > 50 ? "solid rgba(0,0,0,0.3)" : "",
      }}
      className={classNames("top-0 sticky bg-white ", {})}
    >
      <div className="text-[15px] ">
        <header className="px-[20px] lg:px-[150px] h-20 flex items-center justify-between ">
          <Link to={"/"}>
            <img src={logoPath} alt="Cowithone" width="140" className="py-5" />
          </Link>
          <div className="flex-grow "></div>
          <div className="font-sans font-normal hidden lg:w-96 lg:flex justify-between ">
            <Link to={"/solution"}>솔루션</Link>
            {/* <Link to={"/customer"}>주요고객</Link> */}
            <Link to={"/result"}>실적</Link>
            <Link to={"/faq"}>자주묻는질문</Link>
            <Link to={"/contact"}>문의하기</Link>
          </div>

          {/* mobile menu */}
          <div className="lg:hidden flex items-center">
            <button onClick={() => setMenuToggle(!menuToggle)}>
              {menuToggle ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </header>
        {/* mobile menu items */}
        <div
          className={classNames("lg:hidden flex-col border-b	 ", {
            hidden: !menuToggle,
          })}
        >
          <Link
            onClick={() => setMenuToggle(!menuToggle)}
            to={"/solution"}
            className="block px-[20px]  py-3 hover:bg-gray-200"
          >
            솔루션
          </Link>
          {/* <Link
            onClick={() => setMenuToggle(!menuToggle)}
            to={"/customer"}
            className="block py-3 px-[20px] hover:bg-gray-200"
          >
            주요고객
          </Link> */}
          <Link
            onClick={() => setMenuToggle(!menuToggle)}
            to={"/result"}
            className="block py-3 px-[20px] hover:bg-gray-200"
          >
            실적
          </Link>
          <Link
            onClick={() => setMenuToggle(!menuToggle)}
            to={"/faq"}
            className="block py-3 px-[20px] hover:bg-gray-200"
          >
            자주묻는질문
          </Link>
          <Link
            onClick={() => setMenuToggle(!menuToggle)}
            to={"/contact"}
            className="block py-3 px-[20px] hover:bg-gray-200"
          >
            문의하기
          </Link>
        </div>
      </div>
    </Nav>
  );
}
export default Header;
