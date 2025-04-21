import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import About from "../Components/About/About";
import BookDetails from "../Pages/Books/BookDetails";
import Tablist from "../Pages/tabs/tablist";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error />,
    children: [
      {
        index: true,
        loader: () => fetch('/fackData.json'),
        path: "/",
        Component: Home
      },
      {
        path: '/about',
        Component: About
      },
      {
        path: '/readlist',
        loader: () => fetch('/fackData.json'),
        Component: Tablist
      },
      {
        path: '/details/:id',
        loader: () => fetch('/fackData.json'),
        Component: BookDetails,
      }
    ]
  },
]);