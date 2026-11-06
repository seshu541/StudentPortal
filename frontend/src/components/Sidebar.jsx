
import React from "react";
import {
    GraduationCap,
    LayoutDashboard,
    Users,
    UserPlus
} from "lucide-react";

function Sidebar({ page, setPage }) {

    const menus = [
        { name: "Dashboard", icon: LayoutDashboard },
        { name: "Students", icon: Users },
        { name: "Add Student", icon: UserPlus }
    ];

    return (
        <aside className="sidebar">
            <div className="brand">
                <GraduationCap size={32} />
                <h2>EduManage</h2>
            </div>

            <p className="menu-label">MAIN MENU</p>

            {menus.map((item) => {
                const Icon = item.icon;

                return (
                    <button
                        key={item.name}
                        className={page === item.name ? "sidebar-link active" : "sidebar-link"}
                        onClick={() => setPage(item.name)}
                    >
                        <Icon size={20} />
                        <span>{item.name}</span>
                    </button>
                );
            })}

            <div className="sidebar-bottom">
                <GraduationCap size={25} />
                <div>
                    <strong>Student Portal</strong>
                    <small>Management System</small>
                </div>
            </div>
        </aside>
    );
}

export default Sidebar;
