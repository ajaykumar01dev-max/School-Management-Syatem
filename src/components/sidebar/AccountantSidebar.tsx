import "./accountantSidebar.css";
import {
  LuLayoutDashboard,
  LuIndianRupee,
  LuReceipt,
  LuWallet,
  LuFileSpreadsheet,
  LuUsers,
  LuSettings,
  LuLogOut,
  LuBadgeDollarSign,
} from "react-icons/lu";

export default function AccountantSidebar() {
  const menuItems = [
    {
      icon: <LuLayoutDashboard />,
      label: "Dashboard",
    },
    {
      icon: <LuIndianRupee />,
      label: "Fee Collection",
    },
    {
      icon: <LuReceipt />,
      label: "Receipts",
    },
    {
      icon: <LuWallet />,
      label: "Expenses",
    },
    {
      icon: <LuBadgeDollarSign />,
      label: "Payroll",
    },
    {
      icon: <LuUsers />,
      label: "Student Fees",
    },
    {
      icon: <LuFileSpreadsheet />,
      label: "Reports",
    },
  ];

  return (
    <aside className="accountantSidebar">
      <div>
        <div className="sidebarLogo">
          <div className="logoIcon">A</div>

          <div className="logoText">
            <h3>Accountant Portal</h3>
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