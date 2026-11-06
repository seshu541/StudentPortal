package com.seshu2.StudentPortal.repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.seshu2.StudentPortal.model.Student;
@Repository
public interface StudentRepo  extends JpaRepository<Student, Integer> {
	 Student findByFname(String fname);


}
