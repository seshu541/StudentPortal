
import React from "react";
import { Bell, Search } from "lucide-react";

function Navbar({ title }) {
    return (
        <header className="navbar">
            <div>
                <h2>{title}</h2>
                <p>Welcome to Student Management Portal</p>
            </div>

            <div className="navbar-right">
                <button className="notification">
                    <Bell size={20} />
                </button>

                <div className="admin-profile">
                    <div className="admin-avatar">A</div>
                    <div>
                        <strong>Admin</strong>
                        <small>Administrator</small>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Navbar;
