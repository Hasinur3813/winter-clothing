import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root";
import HowToHelp from "../pages/HowToHelp";
import Dashboard from "../pages/Dashboard";
import NotFoundPage from "../pages/NotFoundPage";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Homepage from "../pages/Homepage";
import DonationCampaign from "../pages/DonationCampaign";
import CampaignDetails from "../pages/CampaignDetails";
import PrivateRoute from "../components/PrivateRoute";
import PublicRoute from "../components/PublicRoute";
import ForgetPassword from "../pages/ForgetPassword";
import UpdateProfile from "../pages/UpdateProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "how-to-help",
        element: <HowToHelp />,
      },
      {
        path: "login",
        element: (
          <PublicRoute>
            <Login />
          </PublicRoute>
        ),
      },
      {
        path: "signup",
        element: (
          <PublicRoute>
            <Signup />
          </PublicRoute>
        ),
      },
      {
        path: "donation-campaign",
        element: <DonationCampaign />,
      },
      {
        path: "campaign/:id",
        element: (
          <PrivateRoute>
            <CampaignDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "dashboard",
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
      },
      {
        path: "update-profile",
        element: (
          <PrivateRoute>
            <UpdateProfile />
          </PrivateRoute>
        ),
      },

      {
        path: "forget-password",
        element: (
          <PublicRoute>
            <ForgetPassword />
          </PublicRoute>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export default router;
