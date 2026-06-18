import "./adminSidebar.css";
import {
  LuLayoutDashboard,
  LuUsers,
  LuGraduationCap,
  LuBookOpen,
  LuClipboardCheck,
  LuFileText,
  LuIndianRupee,
  LuSettings,
  LuLogOut,
} from "react-icons/lu";

export default function AdminSidebar() {
  const menuItems = [
    {
      icon: <LuLayoutDashboard />,
      label: "Dashboard",
    },
    {
      icon: <LuUsers />,
      label: "Students",
    },
    {
      icon: <LuGraduationCap />,
      label: "Teachers",
    },
    {
      icon: <LuBookOpen />,
      label: "Classes",
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
      label: "Examinations",
    },
    {
      icon: <LuFileText />,
      label: "Results",
    },
    {
      icon: <LuIndianRupee />,
      label: "Fees",
    },
  ];

  return (
    <aside className="adminSidebar">
      <div className="sidebarLogo">
        <div className="logoIcon">S</div>
        <div className="logoText">
          <h3>School MS</h3>
          <p>Admin Panel</p>
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