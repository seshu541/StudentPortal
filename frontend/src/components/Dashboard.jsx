
import React from "react";
import {
    Users,
    GraduationCap,
    Award,
    UserPlus,
    ArrowRight
} from "lucide-react";

function Dashboard({ students, onAddStudent, onViewStudents }) {
    const totalStudents = students.length;

    const averageMarks = totalStudents > 0
        ? (
            students.reduce(
                (total, student) => total + (Number(student.total_marks) || 0),
                0
            ) / totalStudents
        ).toFixed(2)
        : "0.00";

    const cards = [
        {
            title: "Total Students",
            value: totalStudents,
            icon: Users,
            color: "purple"
        },
        {
            title: "Average Marks",
            value: averageMarks,
            icon: Award,
            color: "green"
        },
        {
            title: "Student Portal",
            value: "Active",
            icon: GraduationCap,
            color: "orange"
        }
    ];

    return (
        <div className="dashboard">
            <div className="welcome-banner">
                <div>
                    <span className="welcome-tag">ADMIN OVERVIEW</span>
                    <h1>Welcome to EduManage!</h1>
                    <p>Manage student records and academic information easily.</p>
                    <button className="primary-btn" onClick={onAddStudent}>
                        <UserPlus size={18} />
                        Add New Student
                    </button>
                </div>
                <GraduationCap size={100} className="welcome-icon" />
            </div>

            <div className="stats-grid">
                {cards.map((card) => {
                    const Icon = card.icon;

                    return (
                        <div className="stat-card" key={card.title}>
                            <div className={`stat-icon ${card.color}`}>
                                <Icon size={25} />
                            </div>
                            <div>
                                <p>{card.title}</p>
                                <h2>{card.value}</h2>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="section-heading">
                <div>
                    <h2>Recent Students</h2>
                    <p>Latest student records</p>
                </div>
                <button className="text-btn" onClick={onViewStudents}>
                    View All <ArrowRight size={16} />
                </button>
            </div>

            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Age</th>
                            <th>Total Marks</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.slice(0, 5).map((student) => (
                            <tr key={student.sid}>
                                <td>#{student.sid}</td>
                                <td>{student.fname}</td>
                                <td>{student.lname}</td>
                                <td>{student.age}</td>
                                <td>{student.total_marks}</td>
                            </tr>
                        ))}
                        {students.length === 0 && (
                            <tr>
                                <td colSpan="5" className="empty-message">
                                    No students found. Add your first student!
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Dashboard;
