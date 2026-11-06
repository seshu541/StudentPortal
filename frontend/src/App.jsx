
import React, { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import AddStudent from "./components/AddStudent";
import StudentList from "./components/StudentList";

import {
    getAllStudents,
    addStudent,
    updateStudent,
    deleteStudent
} from "./services/studentService";

import "./App.css";

function App() {
    const [students, setStudents] = useState([]);
    const [page, setPage] = useState("Dashboard");
    const [loading, setLoading] = useState(false);
    const [editingStudent, setEditingStudent] = useState(null);

    const fetchStudents = async () => {
        try {
            setLoading(true);

            const response = await getAllStudents();
            setStudents(response.data);

        } catch (error) {
            console.error("Error fetching students:", error);
            alert("Unable to load students. Check your backend connection.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchStudents();
    }, []);

    const handleAddStudent = async (student) => {
        try {
            if (editingStudent) {
                await updateStudent(editingStudent.sid, student);
                alert("Student updated successfully!");
                setEditingStudent(null);
            } else {
                await addStudent(student);
                alert("Student added successfully!");
            }

            await fetchStudents();
            setPage("Students");

        } catch (error) {
            console.error("Student save error:", error);
            alert("Unable to save student. Check the backend and try again.");
        }
    };

    const handleEditStudent = (student) => {
        setEditingStudent(student);
        setPage("Add Student");
    };

    const handleDeleteStudent = async (id) => {
        const confirmDelete = window.confirm(
            "Are you sure you want to delete this student?"
        );

        if (!confirmDelete) return;

        try {
            await deleteStudent(id);
            alert("Student deleted successfully!");
            await fetchStudents();

        } catch (error) {
            console.error("Delete error:", error);
            alert("Unable to delete student.");
        }
    };

    const handleCancelEdit = () => {
        setEditingStudent(null);
        setPage("Students");
    };

    const renderPage = () => {
        switch (page) {
            case "Dashboard":
                return (
                    <Dashboard
                        students={students}
                        onAddStudent={() => {
                            setEditingStudent(null);
                            setPage("Add Student");
                        }}
                        onViewStudents={() => setPage("Students")}
                    />
                );

            case "Students":
                return (
                    <StudentList
                        students={students}
                        loading={loading}
                        onEdit={handleEditStudent}
                        onDelete={handleDeleteStudent}
                    />
                );

            case "Add Student":
                return (
                    <AddStudent
                        onSubmit={handleAddStudent}
                        editingStudent={editingStudent}
                        onCancel={handleCancelEdit}
                    />
                );

            default:
                return <Dashboard students={students} />;
        }
    };

    return (
        <div className="app-container">
            <Sidebar page={page} setPage={(newPage) => {
                setEditingStudent(null);
                setPage(newPage);
            }} />

            <main className="main-content">
                <Navbar title={page} />

                <div className="page-content">
                    {renderPage()}
                </div>
            </main>
        </div>
    );
}

export default App;
