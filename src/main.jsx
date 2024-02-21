import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./Responsive.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
// Pages
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Service from "./pages/Service.jsx";
import ServiceSingle from "./pages/ServiceSingle.jsx";
import Team from "./pages/Team.jsx";
import TeamSingle from "./pages/TeamSingle.jsx";
import CaseStudy from "./pages/CaseStudy.jsx";
import CaseStudySingle from "./pages/CaseStudySingle.jsx";
import Blogs from "./pages/Blogs.jsx";
import BlogSingle from "./pages/BlogSingle.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/services",
    element: <Service />,
  },
  {
    path: "/servicesingle",
    element: <ServiceSingle />,
  },
  {
    path: "/team",
    element: <Team />,
  },
  {
    path: "/teamsingle",
    element: <TeamSingle />,
  },
  {
    path: "/casestudy",
    element: <CaseStudy />,
  },
  {
    path: "/casestudysingle",
    element: <CaseStudySingle />,
  },
  {
    path: "/blog",
    element: <Blogs />,
  },
  {
    path: "/blogsingle",
    element: <BlogSingle />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
