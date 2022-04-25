package com.example.demo.service;


import com.example.demo.domain.Login;
import com.example.demo.domain.User;
import com.example.demo.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@Service
public class UserService  {

    private final UserRepository userRepository;

    @Transactional
    public User create(User user) {
        return userRepository.save(user);
    }

    @Transactional(readOnly = true)
        public List<User> findAll(){
            return userRepository.findAll();
        }

        public User findUser(String email){
            User userEntity = userRepository.findById(email).orElseThrow(()-> new IllegalArgumentException("check id"));
            return userEntity;
        }

    public boolean validateUserLogin(Login login) {
        Optional<User> user = userRepository.findById(login.getEmail());
        //Optional<User> user = Optional.of(userRepository.getById(login.getEmail()));

        System.out.println("login pass " + login.getPassword());
        System.out.println("login email " + login.getEmail());
        System.out.println("database pass " + user.get().getPassword());

        if (!user.isPresent()) {
            return false;
        }

        return login.getPassword().equals(user.get().getPassword());
    }

}
