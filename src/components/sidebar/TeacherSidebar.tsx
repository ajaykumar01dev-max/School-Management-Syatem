import "./teacherSideBar.css";
import {
  LuLayoutDashboard,
  LuBookOpen,
  LuClipboardCheck,
  LuFileText,
  LuCalendarDays,
  LuMessageSquare,
  LuSettings,
  LuLogOut,
  LuGraduationCap,
} from "react-icons/lu";

export default function TeacherSidebar() {
  const menuItems = [
    {
      icon: <LuLayoutDashboard />,
      label: "Dashboard",
    },
    {
      icon: <LuGraduationCap />,
      label: "My Classes",
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
      icon: <LuFileText />,
      label: "Examinations",
    },
    {
      icon: <LuCalendarDays />,
      label: "Timetable",
    },
    {
      icon: <LuMessageSquare />,
      label: "Messages",
    },
  ];

  return (
    <aside className="teacherSidebar">
      <div>
        <div className="sidebarLogo">
          <div className="logoIcon">T</div>

          <div className="logoText">
            <h3>Teacher Portal</h3>
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