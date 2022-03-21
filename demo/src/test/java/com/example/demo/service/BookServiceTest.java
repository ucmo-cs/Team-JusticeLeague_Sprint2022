package com.example.demo.service;

import com.example.demo.repository.ProjectRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;

@ExtendWith(SpringExtension.class)
@SpringBootTest
public class BookServiceTest {

   @Autowired
   ProjectRepository bookRepository;
   @Autowired BookServiceTest bookService;
//
//    @Test
//    void create(){
//
//        Book book = new Book();
//        book.setTitle("Harry Potter");
//        book.setAuthor("J.K.Rolling");
//        bookService.create(book);
//
//        Book result = bookService.findBook(book.getId());
//        assertEquals(book, result);
//    }

    @Test
    void findAll(){

    }

    @Test
    void findBook(){

    }


}
