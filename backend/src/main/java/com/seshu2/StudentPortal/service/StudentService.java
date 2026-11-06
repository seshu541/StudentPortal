package com.seshu2.StudentPortal.service;

import java.util.List;

import com.seshu2.StudentPortal.model.Student;
//what to do...
public interface StudentService {
	public abstract Student createStudent(Student s);

	List<Student> getAllStudents();
	Student getStudentById(Integer sid);
	Student updateStudent(Student student, Integer id);
	void deleteStudentById(Integer id);
	Student findStudentByFname(String name);

	Student getStudentByFname(String name);
}
