import { Link } from "react-router-dom";
import classNames from "classnames";
import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll } from "framer-motion";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { useTranslation } from "react-i18next";

import { changeLanguage } from "../i18n"; // 언어 변경 함수를 가져옵니다.
import { languageState } from "../recoil/languageState"; // Recoil 상태를 가져옵니다.
import logoPath from "../assets/img/logo.png";

const Nav = styled(motion.nav)`
  z-index: 50;
`;

function Header() {
  const [menuToggle, setMenuToggle] = useState(false);
  const [yValue, setYValue] = useState(0);
  const { scrollY } = useScroll();
  const { t, i18n } = useTranslation();

  const [, setLanguage] = useRecoilState(languageState); // Recoil 상태를 사용합니다.

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // useRef를 사용하여 드롭다운 메뉴 외의 영역을 클릭했을 때 감지하기 위한 DOM 레퍼런스를 생성합니다.
  const dropdownRef = useRef(null);

  // 클릭 이벤트 핸들러를 추가하여 드롭다운 메뉴 외의 영역을 클릭했을 때 드롭다운 메뉴를 닫습니다.
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDropdownOpen(false);
      }
    };

    // 이벤트 리스너를 추가합니다.
    document.addEventListener("mousedown", handleOutsideClick);

    // 컴포넌트가 언마운트될 때 이벤트 리스너를 제거합니다.
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);
  // const handleLanguageChange = (selectedLanguage) => {
  //   setLanguage(selectedLanguage);
  //   changeLanguage(selectedLanguage);
  // };

  const handleLanguageChange = (selectedLanguage) => {
    setLanguage(selectedLanguage);
    changeLanguage(selectedLanguage);
    setIsDropdownOpen(false); // 언어 선택 후 드랍다운을 닫습니다.
  };

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
          <div className="font-sans font-normal hidden lg:w-96 lg:flex justify-between mr-20">
            <Link to={"/about"}>{t("header_about")}</Link>
            {/* 주요고객은 사용하지 않음 */}
            {/* <Link to={"/customer"}>주요고객</Link> */}
            <Link to={"/solution"}>{t("header_solution")}</Link>
            <Link to={"/result"}>{t("header_result")}</Link>

            <Link to={"/faq"}>{t("header_faq")}</Link>
            <Link to={"/contact"}>{t("header_contact")}</Link>
          </div>
          {/* 언어 선택 드랍다운 */}
          <div className="relative inline-block text-left ">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="text-[12px] lg:text-[14px] p-2 focus:outline-none rounded-full bg-blue-500 text-white hover:bg-blue-600"
            >
              {i18n.language === "ko" ? "Korean" : "English"}
            </button>

            <div
              ref={dropdownRef}
              className={`${
                isDropdownOpen ? "block" : "hidden"
              } origin-top-right absolute right-0 mt-2 w-20 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none`}
            >
              <div
                className="py-1"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
              >
                <button
                  onClick={() => handleLanguageChange("ko")}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                  role="menuitem"
                >
                  Korean
                </button>
                <button
                  onClick={() => handleLanguageChange("en")}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                  role="menuitem"
                >
                  English
                </button>
              </div>
            </div>
          </div>

          {/* mobile menu */}
          <div className="lg:hidden ml-8  flex items-center">
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
            to={"/about"}
            className="block px-[20px]  py-3 hover:bg-gray-200"
          >
            {t("header_about")}
          </Link>
          <Link
            onClick={() => setMenuToggle(!menuToggle)}
            to={"/solution"}
            className="block px-[20px]  py-3 hover:bg-gray-200"
          >
            {t("header_solution")}
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
            {t("header_result")}
          </Link>

          <Link
            onClick={() => setMenuToggle(!menuToggle)}
            to={"/faq"}
            className="block py-3 px-[20px] hover:bg-gray-200"
          >
            {t("header_faq")}
          </Link>
          <Link
            onClick={() => setMenuToggle(!menuToggle)}
            to={"/contact"}
            className="block py-3 px-[20px] hover:bg-gray-200"
          >
            {t("header_contact")}
          </Link>
        </div>
      </div>
    </Nav>
  );
}
export default Header;
