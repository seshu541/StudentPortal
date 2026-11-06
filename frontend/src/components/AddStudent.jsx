
import React, { useEffect, useState } from "react";
import { UserPlus, Save, X } from "lucide-react";

function AddStudent({ onSubmit, editingStudent, onCancel }) {
    const [formData, setFormData] = useState({
        fname: "",
        lname: "",
        age: "",
        total_marks: ""
    });

    useEffect(() => {
        if (editingStudent) {
            setFormData({
                fname: editingStudent.fname || "",
                lname: editingStudent.lname || "",
                age: editingStudent.age ?? "",
                total_marks: editingStudent.total_marks ?? ""
            });
        } else {
            setFormData({
                fname: "",
                lname: "",
                age: "",
                total_marks: ""
            });
        }
    }, [editingStudent]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((previous) => ({
            ...previous,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (
            !formData.fname.trim() ||
            !formData.lname.trim() ||
            formData.age === "" ||
            formData.total_marks === ""
        ) {
            alert("Please fill all fields.");
            return;
        }

        const student = {
            fname: formData.fname.trim(),
            lname: formData.lname.trim(),
            age: Number(formData.age),
            total_marks: Number(formData.total_marks)
        };

        if (student.age <= 0 || student.total_marks < 0) {
            alert("Please enter valid age and marks.");
            return;
        }

        onSubmit(student);
    };

    return (
        <div className="form-page">
            <div className="section-heading">
                <div>
                    <h2>{editingStudent ? "Update Student" : "Add New Student"}</h2>
                    <p>Enter the student's academic details below.</p>
                </div>
            </div>

            <form className="student-form" onSubmit={handleSubmit}>
                <div className="form-title">
                    <div className="stat-icon purple">
                        <UserPlus size={25} />
                    </div>
                    <div>
                        <h3>Student Information</h3>
                        <p>All fields are required.</p>
                    </div>
                </div>

                <div className="form-grid">
                    <div className="form-group">
                        <label>First Name</label>
                        <input
                            name="fname"
                            value={formData.fname}
                            onChange={handleChange}
                            placeholder="Enter first name"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Last Name</label>
                        <input
                            name="lname"
                            value={formData.lname}
                            onChange={handleChange}
                            placeholder="Enter last name"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Age</label>
                        <input
                            type="number"
                            name="age"
                            min="1"
                            value={formData.age}
                            onChange={handleChange}
                            placeholder="Enter age"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Total Marks</label>
                        <input
                            type="number"
                            name="total_marks"
                            min="0"
                            step="0.01"
                            value={formData.total_marks}
                            onChange={handleChange}
                            placeholder="Enter total marks"
                            required
                        />
                    </div>
                </div>

                <div className="form-actions">
                    <button type="submit" className="primary-btn">
                        <Save size={18} />
                        {editingStudent ? "Update Student" : "Save Student"}
                    </button>

                    {editingStudent && (
                        <button
                            type="button"
                            className="cancel-btn"
                            onClick={onCancel}
                        >
                            <X size={18} /> Cancel
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
}

export default AddStudent;
