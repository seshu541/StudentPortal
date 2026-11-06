
import axios from "axios";

const API_URL = "http://localhost:9898/student";

export const getAllStudents = () =>
    axios.get(`${API_URL}/getAllStudents`);

export const addStudent = (student) =>
    axios.post(`${API_URL}/create`, student);

export const getStudentById = (id) =>
    axios.get(`${API_URL}/getStudent/${id}`);

export const getStudentByName = (name) =>
    axios.get(`${API_URL}/getStudent/fname/${encodeURIComponent(name)}`);

export const updateStudent = (id, student) =>
    axios.put(`${API_URL}/update/${id}`, student);

export const deleteStudent = (id) =>
    axios.delete(`${API_URL}/delete/${id}`);
