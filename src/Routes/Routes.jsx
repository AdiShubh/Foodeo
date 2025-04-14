import { useRoutes } from "react-router-dom";
import MainLayout from "../Layout/layout";

import HomePage from "../pages/HomePage";
import NotFound from "../pages/NotFound";
import SignInPage from "../pages/SignIn";
import Menu from "../pages/Menu";
import AboutUs from "../pages/AboutUs";
import Reservation from "../pages/Reservation";
import Contact from "../pages/Contact";
import OrderOnline from "../pages/OrderOnline";
import Checkout from "../pages/Checkout";
import Cart from "../pages/Cart";
import SignIn from "../pages/SignIn";
import SignUpUser from "../pages/SignUp";

const AppRoutes = () => {
  const element = useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { index: true, path:"/",  element: <HomePage /> },
        { path: "homepage", element: <HomePage /> },
        { path: "menu", element: <Menu /> },
        { path: "aboutus", element: <AboutUs /> },
        { path: "reservation", element: <Reservation /> },
        { path: "contact", element: <Contact /> },
        { path: "orderonline", element: <OrderOnline /> },
        { path: "checkout", element: <Checkout /> },
        { path: "cart", element: <Cart /> },
        { path: "sign-in", element: <SignIn /> },
        { path: "sign-up", element: <SignUpUser /> },
      ],
    },

    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return element;
};

export default AppRoutes;
