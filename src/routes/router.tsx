import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "../layout/AuthLayout";
import Login from "../pages/auth/Login";
import ForgetPassword from "../pages/auth/ForgetPassword";
import LandingPage from "../pages/Landing";
import AdminDashboard from "../layout/AdminDashboard";

const router = createBrowserRouter([
    {
        path: "/",
        element: <LandingPage />
    },
    {
        element: <AuthLayout />,
        children: [
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/forgot-password",
                element: <ForgetPassword />,
            },
        ]
    },
    {
        path: "/admin",
        element: <AdminDashboard />,
        children: [
            {
                index: true,
                element: <h1>Admin Dashboard</h1>,
            },
            // {
            //     path: "students",
            //     element: <Students />,
            // },
            // {
            //     path: "teachers",
            //     element: <Teachers />,
            // },
        ],
    }
])

export default router;