import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";

export type UserRole =
  | "admin"
  | "teacher"
  | "student"
  | "accountant";

interface User {
  id: number;
  name: string;
  email?: string;
  role: UserRole;
}

interface ProtectedRouteProps {
  children: ReactNode;
  allowedRoles?: UserRole[];
}

export default function ProtectedRoute({
  children,
  allowedRoles,
}: ProtectedRouteProps) {
  const token = localStorage.getItem("token");
  const userString = localStorage.getItem("user");

  if (!token || !userString) {
    return <Navigate to="/login" replace />;
  }

  let user: User | null = null;

  try {
    user = JSON.parse(userString);
  } catch {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    return <Navigate to="/login" replace />;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (
    allowedRoles &&
    allowedRoles.length > 0 &&
    !allowedRoles.includes(user.role)
  ) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}