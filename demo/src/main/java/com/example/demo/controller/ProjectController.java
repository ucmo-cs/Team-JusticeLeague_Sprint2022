package com.example.demo.controller;

import com.example.demo.domain.Project;
import com.example.demo.service.ProjectService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
public class ProjectController {

private final ProjectService projectService;

    @GetMapping("/hello")
    public String HelloWorld(){
        return "Hello World!!";
    }

    // Restful API
    // HTTP methods: GET, POST, PUT, DELETE
    // return HTTP status code
    //Test Driven Development


    @PostMapping("/project")
    public ResponseEntity<?> save(@RequestBody Project project){
        return new ResponseEntity<>(projectService.create(project), HttpStatus.OK);
    }


    @GetMapping("/projects")
    public ResponseEntity<?> findAll(){
        return new ResponseEntity<>(projectService.findAll(), HttpStatus.OK);
    }


    @GetMapping("/project/{id}")
    public ResponseEntity<?> find(@PathVariable Long id){
        return new ResponseEntity<>(projectService.findProject(id), HttpStatus.OK);
    }


}
