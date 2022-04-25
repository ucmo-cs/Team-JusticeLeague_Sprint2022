package com.example.demo.service;

import com.example.demo.domain.Project;
import com.example.demo.repository.ProjectRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;


@RequiredArgsConstructor
@Service
public class ProjectService {

    private final ProjectRepository projectRepository;

    @Transactional
    public Project create(Project project){

        return projectRepository.save(project);
    }

    @Transactional(readOnly = true)
    public List<Project> findAll(){

        return projectRepository.findAll();
    }

    public Project findProject(Long id){
       Project projectEntity = projectRepository.findById(id).orElseThrow(()-> new IllegalArgumentException("check id"));
       return projectEntity;
    }


}
