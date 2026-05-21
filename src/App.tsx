import { RouterProvider } from "react-router";
import { routes } from "@/routes/Routes";
const App = () => {
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
};

export default App;
