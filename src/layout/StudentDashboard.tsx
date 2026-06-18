import { Outlet } from 'react-router-dom'
import StudentSidebar from '../components/sidebar/StudentSidebar'
import "./dashboard.css"

export default function StudentDashboard() {
  return (
    <div>
      <div className="adminLayout">
        <StudentSidebar />

        <div className="adminContent">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
