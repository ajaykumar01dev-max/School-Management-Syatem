import "./studentSidebar.css";
import {
  LuLayoutDashboard,
  LuBookOpen,
  LuClipboardCheck,
  LuCalendarDays,
  LuFileText,
  LuAward,
  LuBell,
  LuSettings,
  LuLogOut,
} from "react-icons/lu";

export default function StudentSidebar() {
  const menuItems = [
    {
      icon: <LuLayoutDashboard />,
      label: "Dashboard",
    },
    {
      icon: <LuBookOpen />,
      label: "Subjects",
    },
    {
      icon: <LuClipboardCheck />,
      label: "Attendance",
    },
    {
      icon: <LuFileText />,
      label: "Assignments",
    },
    {
      icon: <LuAward />,
      label: "Results",
    },
    {
      icon: <LuCalendarDays />,
      label: "Timetable",
    },
    {
      icon: <LuBell />,
      label: "Notices",
    },
  ];

  return (
    <aside className="studentSidebar">
      <div>
        <div className="sidebarLogo">
          <div className="logoIcon">S</div>

          <div className="logoText">
            <h3>Student Portal</h3>
            <p>School Management</p>
          </div>
        </div>

        <div className="sidebarMenu">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className={`menuItem ${index === 0 ? "active" : ""}`}
            >
              <span className="menuIcon">{item.icon}</span>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="sidebarFooter">
        <div className="menuItem">
          <span className="menuIcon">
            <LuSettings />
          </span>
          <span>Settings</span>
        </div>

        <div className="menuItem logout">
          <span className="menuIcon">
            <LuLogOut />
          </span>
          <span>Logout</span>
        </div>
      </div>
    </aside>
  );
}