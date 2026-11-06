
import React, { useState } from "react";
import { Search, Pencil, Trash2, Users } from "lucide-react";

function StudentList({ students, loading, onEdit, onDelete }) {
    const [search, setSearch] = useState("");

    const filteredStudents = students.filter((student) =>
        `${student.fname} ${student.lname} ${student.sid}`
            .toLowerCase()
            .includes(search.toLowerCase())
    );

    return (
        <div className="student-list-page">
            <div className="section-heading">
                <div>
                    <h2>Student Management</h2>
                    <p>View, search, update and delete student records.</p>
                </div>

                <div className="student-count">
                    <Users size={18} />
                    {students.length} Students
                </div>
            </div>

            <div className="search-box">
                <Search size={20} />
                <input
                    type="text"
                    placeholder="Search by student name or ID..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Student ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Age</th>
                            <th>Total Marks</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {loading ? (
                            <tr>
                                <td colSpan="6" className="empty-message">
                                    Loading students...
                                </td>
                            </tr>
                        ) : filteredStudents.length > 0 ? (
                            filteredStudents.map((student) => (
                                <tr key={student.sid}>
                                    <td>#{student.sid}</td>
                                    <td>{student.fname}</td>
                                    <td>{student.lname}</td>
                                    <td>{student.age}</td>
                                    <td>{student.total_marks}</td>
                                    <td>
                                        <div className="action-buttons">
                                            <button
                                                className="edit-btn"
                                                onClick={() => onEdit(student)}
                                                title="Edit student"
                                            >
                                                <Pencil size={17} />
                                            </button>

                                            <button
                                                className="delete-btn"
                                                onClick={() => onDelete(student.sid)}
                                                title="Delete student"
                                            >
                                                <Trash2 size={17} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="6" className="empty-message">
                                    No student records found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default StudentList;
