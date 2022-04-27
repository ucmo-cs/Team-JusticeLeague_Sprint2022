package com.example.demo.service;

import com.example.demo.domain.Project;
import com.example.demo.domain.User;
import com.example.demo.repository.ProjectRepository;
import com.example.demo.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.text.Format;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Optional;


@RequiredArgsConstructor
@Service
public class ProjectService {

    private final ProjectRepository projectRepository;

    @Transactional
    public Project create(Project project){

        return projectRepository.save(project);
    }

    @Transactional
    public void approveEmployeeId(Long id,Project project1) {
        Optional<Project> optional = projectRepository.findById(id);
        Project project = optional.get();

        project.setState("Approved");
        Format f = new SimpleDateFormat("MM/dd/yy");
        String strDate = f.format(new Date());
        project.setDateApproved(String.valueOf(strDate));


        projectRepository.save(project);
    }

    @Transactional
    public void disapproveEmployeeId(Long id,Project project1) {
        Optional<Project> optional = projectRepository.findById(id);
        Project project = optional.get();

        project.setState("Disapproved");
        Format f = new SimpleDateFormat("MM/dd/yy");
        String strDate = f.format(new Date());
        project.setDateApproved(String.valueOf(strDate));


        projectRepository.save(project);
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
