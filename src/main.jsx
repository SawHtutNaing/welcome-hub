import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ResponsiveAppBar from "./ResponsiveAppBar.jsx";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme/theme.js";
import Scheduler from "./Scheduler.jsx";
import CaregiverDetails from "./Components/CaregiverDetails.jsx";
import CreateRequest from "./CreateRequest.jsx";
import SchedularMatchList from "./SchedularMatchList.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/lead-manager",
    element: <Scheduler />,
  },
  {
    path: "/lead-manager/create-request",
    element: <CreateRequest />,
  },
  {
    path: "/schedular",
    element: <SchedularMatchList />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router}></RouterProvider>
    </ThemeProvider>
  </StrictMode>
);
