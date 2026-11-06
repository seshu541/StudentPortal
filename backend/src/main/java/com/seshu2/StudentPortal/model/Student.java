package com.seshu2.StudentPortal.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name ="seshu74") 
@Getter
@Setter

public class Student {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	Integer sid;
	String fname;
	String lname;
	Integer age;
	Double total_marks;
	
}
