import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "../layout/AuthLayout";
import Login from "../pages/auth/Login";
import ForgetPassword from "../pages/auth/ForgetPassword";
import LandingPage from "../pages/Landing";
import AdminDashboard from "../layout/AdminDashboard";
import TeacherDashboard from "../layout/TeacherDashboard";
import StudentDashboard from "../layout/StudentDashboard";
import AccountantDashboard from "../layout/AccountantDashboard";
import ProtectedRoute from "./ProtectedRoute";

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
        element: (
            <ProtectedRoute allowedRoles={["admin"]}>
                <AdminDashboard />
            </ProtectedRoute>
        ),
        children: [
            {
                index: true,
                element: <h1>Admin Dashboard</h1>,
            },
        ],
    },
    {
        path: "/teacher",
        element: (
            <ProtectedRoute allowedRoles={["teacher"]}>
                <TeacherDashboard />
            </ProtectedRoute>
        ),
        children: [
            {
                index: true,
                element: <h1>Teacher Dashboard</h1>,
            },
        ],
    },
    {
        path: "/student",
        element: (
            <ProtectedRoute allowedRoles={["student"]}>
                <StudentDashboard />
            </ProtectedRoute>
        ),
        children: [
            {
                index: true,
                element: <h1>Student Dashboard</h1>,
            },
        ],
    },
    {
        path: "/accountant",
        element: (
            <ProtectedRoute allowedRoles={["accountant"]}>
                <AccountantDashboard />
            </ProtectedRoute>
        ),
        children: [
            {
                index: true,
                element: <h1>Accountant Dashboard</h1>,
            },
        ],
    }
])

export default router;