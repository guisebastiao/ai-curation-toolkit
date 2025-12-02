import { createBrowserRouter } from "react-router-dom";

import { Home } from "@/pages/home";
import { NotFound } from "@/pages/not-found";
import { CommonRoute } from "@/routes/common-route";

export const router = createBrowserRouter([
  {
    element: <CommonRoute />,
    children: [
      {
        element: <Home />,
        path: "/",
      },
      {
        element: <NotFound />,
        path: "*",
      },
    ],
  },
]);
