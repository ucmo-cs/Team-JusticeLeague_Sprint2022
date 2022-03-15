package com.example.demo.controller;

import com.example.demo.domain.Book;
import com.example.demo.service.BookService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor  // "lombok" library (very useful lib)
@RestController
public class BookController {

    // create dependency injection
    private final BookService bookService;


    @GetMapping("/hello")
    public String HelloWord() {
        return "Hello World!";
    }

    // Resful API
    // .... Uses HTTP methods. (Look at Postman to find HTTP methods)
    // HTTP methods: GET, POST, ... , ...
    // ....

    public ResponseEntity<?> save(@RequestBody Book book){
        return new ResponseEntity<>(bookService.create(book), HttpStatus.CREATED);
    }

    @GetMapping("/book")
    public ResponseEntity<?> findAll(){
        return new ResponseEntity<>(bookService.findAll(), HttpStatus.OK);
    }
}
