import { createBrowserRouter, useRouteError, Navigate } from "react-router-dom";
import Home from "./screens/Home";
import Root from "./Root";
import Solution from "./screens/Solution";
import Customer from "./screens/Customer";
import Result from "./screens/Result";
import Faq from "./screens/Faq";
import Contact from "./screens/Contact";

// createBrowserRouter(routes, {
//   basename: "/app",
// });
const router = createBrowserRouter(
  [
    {
      path: "/",
      // path: `${process.env.PUBLIC_URL}/`,
      element: <Root />,
      children: [
        {
          path: "/",
          element: <Home />,
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
    // {
    //   path: "/abc",
    //   element: <Navigate to="/"></Navigate>,
    // },
  ],
  { basename: `${process.env.PUBLIC_URL}` }
);

// function ErrorBoundary() {
//   let error = useRouteError();
//   console.error(error);

//   // Uncaught ReferenceError: path is not defined
//   return <Navigate to="/"></Navigate>;
// }

export default router;
