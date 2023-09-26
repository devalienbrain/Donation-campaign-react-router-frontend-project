import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import MainLayout from "../Layout/MainLayout/MainLayout";
import Donation from "../pages/Donation/Donation";
import Statistics from "../pages/Statistics/Statistics";
import DataDetails from "../pages/DataDetails/DataDetails";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/data.json"),
        errorElement: <ErrorPage></ErrorPage>,
      },
      {
        path: "/donation",
        element: <Donation></Donation>,
        loader: () => fetch("/data.json"),
        errorElement: <ErrorPage></ErrorPage>,
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
        errorElement: <ErrorPage></ErrorPage>,
      },
      {
        path: "/singleData/:id",
        element: <DataDetails></DataDetails>,
        loader: () => fetch("/data.json"),
        errorElement: <ErrorPage></ErrorPage>,
      },
    ],
  },
]);
export default Router;
