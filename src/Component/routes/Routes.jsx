import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Home from "../Pages/Home/home";
import Shop from "../Pages/Shop/Shop";
import OurMenu from "../Pages/Our Menu/OurMenu";
import Contact from "../Pages/Contact/Contact";
import BannderNew from "../Pages/New/BannderNew";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/SignUp/Signup";
import PrivateRoutes from "./PrivateRoutes";
import Event from "../Pages/Event/Event";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/ourMenu",
        element: <OurMenu></OurMenu>,
      },
      {
        path: "/shop",
        element: <Shop></Shop>,
        children: [
          {
            path: "/shop/:catagory",
            element: <Home></Home>,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/banndernew",
        element: <BannderNew></BannderNew>,
      },
      {
        path: "/event_arraignment",
        element: (
          <PrivateRoutes>
            <Event />
          </PrivateRoutes>
        ),
      },
    ],
  },
]);
