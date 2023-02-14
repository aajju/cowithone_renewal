import { createBrowserRouter, useRouteError, Navigate } from "react-router-dom";
import Home from "./screens/Home";
import Root from "./Root";
import Solution from "./screens/Solution";
import Customer from "./screens/Customer";
import Result from "./screens/Result";
import Faq from "./screens/Faq";
import Contact from "./screens/Contact";
import About from "./screens/About";

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
      ],
      errorElement: <Navigate to="/"></Navigate>,
    },
  ],
  { basename: `${process.env.PUBLIC_URL}` }
);
export default router;
