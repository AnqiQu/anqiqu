import { Home, About, Contact, Faqs, School, NotFound } from "../pages";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/faqs",
    element: <Faqs />,
  },
  {
    path: "/school",
    element: <School />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
