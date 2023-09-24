import { createBrowserRouter } from "react-router-dom";
import NavBar from "../components/Header/NavBar/NavBar";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar></NavBar>,
  },
]);
export default Router;
