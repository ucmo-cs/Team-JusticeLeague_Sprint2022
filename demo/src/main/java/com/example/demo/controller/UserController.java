package com.example.demo.controller;


import com.example.demo.domain.Login;
import com.example.demo.domain.User;
import com.example.demo.service.SecurityService;
import com.example.demo.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.LinkedHashMap;
import java.util.Map;

@RequiredArgsConstructor
@RestController
public class UserController {

    @Autowired
    private final UserService userService;


    @Autowired
    private SecurityService securityService;

    @CrossOrigin
    @PostMapping("/user")
    public ResponseEntity<?> save(@RequestBody User user){

        System.out.println("New email" + user.getEmail());
        System.out.println("New password" + user.getPassword());
       // return new ResponseEntity<>(userService.create(user), HttpStatus.OK);
        return new ResponseEntity<>(userService.create(user), HttpStatus.CREATED);
    }


    @GetMapping("/users")
    public ResponseEntity<?> findAll() {
        return new ResponseEntity<>(userService.findAll(), HttpStatus.OK);
    }

    @GetMapping("/user/{id}")
    public ResponseEntity<?> find(@PathVariable String email){
        return new ResponseEntity<>(userService.findUser(email), HttpStatus.OK);
    }


    @CrossOrigin
    @PostMapping(path = "/login")
    public ResponseEntity<Map<String,Object>> validateUserLogin(@RequestBody Login login) {
        System.out.println("Login Server TEST");
        System.out.println(login.getEmail());
        System.out.println(login.getPassword());


        String token = securityService.createToken(login.getEmail(),(1*1000*10));
        Map<String, Object> map = new LinkedHashMap<>();
        map.put("token", token);
        map.put("user", login.getEmail());

        System.out.println("validation" + userService.validateUserLogin(login));

        if (userService.validateUserLogin(login)) {
            return ResponseEntity.status(200).body(map);
        }
        return ResponseEntity.status(400).body(null);

    }

    @CrossOrigin
    @GetMapping("/user/adminChecking/{id}")
    public boolean AdminChecking(@PathVariable String id){
        boolean flg = userService.AdChecking(id);
        System.out.println("flag "+flg);
        return flg;
    }

}