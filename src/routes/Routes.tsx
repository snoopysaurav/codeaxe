import { createBrowserRouter } from "react-router";
import RootLayout from "@/layout/RootLayout";
import Homepage from "@/page/Homepage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [{ index: true, element: <Homepage /> }],
  },
]);

export { routes };
