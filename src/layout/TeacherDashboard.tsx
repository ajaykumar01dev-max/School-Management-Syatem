import { Outlet } from 'react-router-dom'
import TeacherSidebar from '../components/sidebar/TeacherSidebar'
import "./dashboard.css"

export default function TeacherDashboard() {
    return (
        <div>
            <div className="adminLayout">
                <TeacherSidebar />

                <div className="adminContent">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}
