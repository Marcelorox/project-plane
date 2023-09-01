import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ContactPage from "./pages/Contact/index.tsx";
import CatalogPage from "./pages/catalog/index.tsx";
import AboutPage from "./pages/aboutUs/AboutUsPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/catalog",
    element: <CatalogPage />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
  {
    path: "/aboutPage",
    element: <AboutPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
