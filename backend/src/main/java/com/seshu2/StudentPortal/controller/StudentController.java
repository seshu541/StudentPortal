
package com.seshu2.StudentPortal.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.seshu2.StudentPortal.model.Student;
import com.seshu2.StudentPortal.service.StudentService;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/student")
public class StudentController {

    @Autowired
    StudentService studentService;

    @GetMapping("/wel")
    public String welcome() {
        return "Welcome to Student Portal Spring Boot";
    }

    @PostMapping("/create")
    public Student createStudent(@RequestBody Student s) {
        return studentService.createStudent(s);
    }

    @GetMapping("/getAllStudents")
    public List<Student> getAllStudents() {
        return studentService.getAllStudents();
    }

    @GetMapping("/getStudent/{sid}")
    public Student getStudent(@PathVariable Integer sid) {
        return studentService.getStudentById(sid);
    }

    @GetMapping("/getStudent/fname/{fname}")
    public Student getStudentByFname(@PathVariable String fname) {
        return studentService.getStudentByFname(fname);
    }

    @PutMapping("/update/{sid}")
    public Student updateStudent(
            @RequestBody Student s,
            @PathVariable Integer sid) {
        return studentService.updateStudent(s, sid);
    }

    @DeleteMapping("/delete/{sid}")
    public String deleteStudent(@PathVariable Integer sid) {
        studentService.deleteStudentById(sid);
        return "Deleted Student " + sid + " Successfully.";
    }
}
