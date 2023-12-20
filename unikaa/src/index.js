import React from "react";
import ReactDOM from "react-dom/client";

// import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import App from "./App";
// import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import ErrorPage from "./ErrorPage";

import BodyCare from "./components/ourservices/bodycare";
import HairCare from "./components/ourservices/haircare";
import SkinCare from "./components/ourservices/skincare";
import Offers from "./routes/offers";
// bridal subdivision
import Bridal from "./routes/bridalnavbar/bridal";
import Home from "./routes/bridalnavbar/homes";
import Services from "./routes/bridalnavbar/services";
import Makeup from "./routes/bridalnavbar/makeup";
import Blogs from "./routes/bridalnavbar/blogs";
import Booknow from "./routes/bridalnavbar/booknow";

import Franchise from "./franchise";
import AboutUs from "./routes/aboutus";
import Media from "./routes/media";
// import SalonLocator from "./salonlocator";
// Academy subdivisions
// import Academy from "./academy";
import Homess from "./routes/acade/home";
import Franchises from "./routes/acade/franchises";
import About from "./routes/acade/about";
import Contact from "./routes/acade/contact";
import Ourcourse from "./routes/acade/ourcourse";

import Blog from "./routes/blog";
import ServiceForHer from "./serviceforher";
import ServiceForHim from "./serviceforhim";

const router = createBrowserRouter([
  {
    element: <Root />,
    errorElement: <ErrorPage />,

    children: [
      {
        path: "/",
        element: <App />,
      },

      {
        path: "haircare",
        element: <HairCare />,
      },
      {
        path: "bodycare",
        element: <BodyCare />,
      },
      {
        path: "bodycare",
        element: <BodyCare />,
      },
      {
        path: "skincare",
        element: <SkinCare />,
      },
      {
        path: "offers",
        element: <Offers />,
      },

      {
        path: "franchise",
        element: <Franchise />,
      },
      {
        path: "aboutus",
        element: <AboutUs />,
      },
      {
        path: "media",
        element: <Media />,
      },
      // {
      //   path: "salonLocator",
      //   element: <SalonLocator />,
      // },

      {
        path: "serviceforher",
        element: <ServiceForHer />,
      },
      {
        path: "serviceforhim",
        element: <ServiceForHim />,
      },

      {
        path: "blog",
        element: <Blog />,
      },
    ],
  },
  // **************************bridal********************//
  {
    path: "bridal",
    element: <Bridal />,
  },
  {
    path: "homes",
    element: <Home />,
  },
  {
    path: "services",
    element: <Services />,
  },
  {
    path: "makeup",
    element: <Makeup />,
  },
  {
    path: "blogs",
    element: <Blogs />,
  },
  {
    path: "booknow",
    element: <Booknow />,
  },

  // ************************************************Acadamy*************************************//
  {
    path: "academy",
    element: <Homess />,
  },
  {
    path: "home",
    element: <Homess />,
  },
  {
    path: "franchises",
    element: <Franchises />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
  {
    path: "ourcourse",
    element: <Ourcourse />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
