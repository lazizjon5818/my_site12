import Home from "@/pages/home/Home";
import Latest from "@/pages/latest/Latest";
import React from "react";
import { useRoutes } from "react-router-dom";
import Detail from "../pages/Detail/Detail";
import Ticket from "../pages/Ticket/Ticket";
import Search from "../pages/Search/Search";
import Layout from "../pages/Layout/Layout";
import Liked from "../pages/LikePage/LikePage";

const Router = () => {
  return useRoutes([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "latest",
          element: <Latest />,
        },
        {
          path:'ticket',
          element:<Ticket/>
        },
        {
          path:'search',
          element:<Search/>
        },
        {
          path:'detail/:id',
          element:<Detail/>
        },
        {
          path:'liked',
          element:<Liked/>
        }

      ]

    },
  ]);
};

export default Router;
