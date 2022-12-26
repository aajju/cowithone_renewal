import { createBrowserRouter } from "react-router-dom";
import Home from "./screens/Home";
import Root from "./Root";
import Solution from "./screens/Solution";
import Customer from "./screens/Customer";
import Result from "./screens/Result";
import Faq from "./screens/Faq";
import Contact from "./screens/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
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
  },
]);

export default router;
