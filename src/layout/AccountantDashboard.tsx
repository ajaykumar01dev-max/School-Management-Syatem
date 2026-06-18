import { Outlet } from 'react-router-dom'
import "./dashboard.css"
import AccountantSidebar from '../components/sidebar/AccountantSidebar'

export default function AccountantDashboard() {
  return (
    <div>
      <div className="adminLayout">
        <AccountantSidebar />

        <div className="adminContent">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
