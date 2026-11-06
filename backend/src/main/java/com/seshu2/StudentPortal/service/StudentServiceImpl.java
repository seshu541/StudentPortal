package com.seshu2.StudentPortal.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.seshu2.StudentPortal.model.Student;
import com.seshu2.StudentPortal.repo.StudentRepo;

//how to do... Business logic
@Service
public class StudentServiceImpl implements StudentService {
	@Autowired
	StudentRepo studentRepo;

	@Override
	public Student createStudent(Student s) {
		// TODO Auto-generated method stub
		return studentRepo.save(s);
	}

	@Override
	public List<Student> getAllStudents() {
		// TODO Auto-generated method stub
		return studentRepo.findAll();
	}

	@Override
	public Student getStudentById(Integer sid)  {

		return studentRepo.findById(sid).get();
	}

	@Override
	public Student updateStudent(Student s,Integer id) {
		Student studentInfoFromDb = getStudentById(id);
		studentInfoFromDb.setAge(s.getAge());
		studentInfoFromDb.setFname(s.getFname());
		studentInfoFromDb.setLname(s.getLname());
		studentInfoFromDb.setTotal_marks(s.getTotal_marks());
		return studentRepo.save(studentInfoFromDb);
	}

	@Override
	public void deleteStudentById(Integer id) {
		studentRepo.deleteById(id);

	}

	@Override
	public Student getStudentByFname(String name) {
	    return studentRepo.findByFname(name);
	}

	@Override
	public Student findStudentByFname(String name) {
		// TODO Auto-generated method stub
		return null;
	}

}
