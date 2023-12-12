import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "./screens/Home";
import Root from "./Root";
import Solution from "./screens/Solution";
import Customer from "./screens/Customer";
import Result from "./screens/Result";
import Faq from "./screens/Faq";
import Contact from "./screens/Contact";
import About from "./screens/About";
import { languageState } from "./recoil/languageState";
import { useRecoilState } from "recoil";
import { changeLanguage } from "./i18n";
import Sitetest from "./screens/Sitetest";
import SitetestCheck from "./screens/Sitetest-Check";

// element 함수를 React function component로 변경합니다.
function Element() {
  // useRecoilValue Hook을 호출합니다.
  const [, setLanguage] = useRecoilState(languageState); // Recoil 상태를 사용합니다.

  // console.log(language, language1);
  setLanguage("en");
  changeLanguage("en");
  // console.log(language, language1);

  // console.log("en");
  // 특정 페이지로 이동하기
  return <Navigate to="/" />;
}

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "solution",
          element: <Solution />,
        },
        {
          path: "customer",
          element: <Customer />,
        },
        {
          path: "result",
          element: <Result />,
        },
        {
          path: "faq",
          element: <Faq />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "sitetest",
          element: <Sitetest />,
        },
        {
          path: "sitetest-check",
          element: <SitetestCheck />,
        },
        // 특정 URL 만들기
        {
          path: "/en",
          element: <Element />,
        },
      ],
      errorElement: <Navigate to="/"></Navigate>,
    },
  ],
  { basename: `${process.env.PUBLIC_URL}` }
);
export default router;
