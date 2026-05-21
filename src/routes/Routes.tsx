import { createBrowserRouter } from "react-router";
import RootLayout from "@/layout/RootLayout";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
  },
]);

export { routes };
