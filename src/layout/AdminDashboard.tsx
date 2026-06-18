import { Outlet } from "react-router-dom";
import AdminSidebar from "../components/sidebar/AdminSidebar";
import "./dashboard.css"

export default function AdminDashboard() {
  return (
    <div>
      <div className="adminLayout">
        <AdminSidebar />

        <div className="adminContent">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
