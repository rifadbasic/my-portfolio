import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../pages/Home";
import About from "../components/About";
import Project from "../pages/Project";
import Skill from "../components/Skill";
import Error from "../pages/Error";
import Resume from "../pages/Resume";
import Contact from "../pages/Contact";
import Blog from "../pages/Blog";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error />,
    element: <MainLayout />,
    children: [
      {
        index: true,
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/project",
        element: <Project />,
      },
      {
        path: "/skill",
        element: <Skill />
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
    ],
  },
  {
    path: "/resume",
    element: <Resume />,
  },
]);
export default router;
