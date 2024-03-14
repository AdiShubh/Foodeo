import React from "react";
import { useRoutes } from "react-router-dom";

import NotFound from "./pages/NotFound";
import Menu from "./pages/Menu";
import AboutUs from "./pages/AboutUs";
import Reservation from "./pages/Reservation";
import Contact from "./pages/Contact";
import OrderOnline from "./pages/OrderOnline";
import Checkout from "./pages/Checkout";
import HomePage from "./pages/HomePage";
import Cart from "./pages/Cart";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <HomePage /> },
    { path: "*", element: <NotFound /> },
    {
      path: "menu",
      element: <Menu />,
    },
    {
      path: "/aboutus",
      element: <AboutUs />,
    },
    {
      path: "reservation",
      element: <Reservation />,
    },
    {
      path: "contact",
      element: <Contact />,
    },
    {
      path: "orderonline",
      element: <OrderOnline />,
    },
    {
      path: "checkout",
      element: <Checkout />,
    },
    {
      path: "homepage",
      element: <HomePage />,
    },
    {
      path: "cart",
      element: <Cart />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
