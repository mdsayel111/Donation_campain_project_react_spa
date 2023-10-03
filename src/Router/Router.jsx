import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home";
import DonationDetails from "../Pages/DonationDetails";
import Donation from "../Pages/Donation";
import Statistics from "../Pages/Statistics";
import Error from "../Pages/Error";
import LogIn from "../Pages/LogIn";
import SignUp from "../Pages/SignUp";
import PrivateRouter from "../PrivteRouter/PrivateRouter";

const router = createBrowserRouter([
  {
    path: "/",
    loader: () => fetch("./data.json"),
    element: <RootLayout></RootLayout>,
    // errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/donation/:id",
        element: <DonationDetails></DonationDetails>
      },
      {
        path: "/donation",
        element: <PrivateRouter><Donation></Donation></PrivateRouter>
      },
      {
        path: "/statistics",
        element: <PrivateRouter><Statistics></Statistics></PrivateRouter>
      },
      {
        path: "/login",
        element: <LogIn></LogIn>
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>
      }
    ]
  },
]);

export default router;
