import {createContext, useEffect, useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

export const ProjectContext = createContext()

//const ProjectContextProvider = (props) => {

function ProjectContextProvider(props) {

    var x = 4;
    
    const [projects, setProjects] = useState([]);



    useEffect(()=>{
       
        fetch("http://localhost:8080/projects", {method:"GET"})
        .then(res =>res.json())
        .then(res=>{
            setProjects(res);})
    },[])




    const addProject = (
        projectName, user, license, state, dateRequested,dateApproved, url, desc) => {
        setProjects([...projects, {id:x+1, projectName, user, license, state, dateRequested, dateApproved, url, desc}])
         }

    const updateProject = (id, updatedProject) => {
            setProjects(projects.map((project) => project.id === id ? updatedProject : project))
         }

        return (
                <ProjectContext.Provider value={{projects, addProject, updateProject}}>
                    {props.children}
                </ProjectContext.Provider>
        )
}

export default ProjectContextProvider;

/*
{id:1, name: 'Flusk', requester: 'thomashardy@gmail.com', license: '14364', state: 'In Process', dateRequested: '3/01/2022', dateApproved: '~', url: 'http:www.thisisawebsite.com', description: 'This is a very descriptive description'} ,
        {id:2, name: 'Atom', requester: 'somantha@gmail.com', license: '54843', state: 'In Process', dateRequested: '3/01/2022', dateApproved: '~', url: 'http:www.thisisawebsite.com' , description: 'This is a very descriptive description'} ,
        {id:3, name: 'Kodi', requester: 'ezraGregory@gmail.com', license: '14346', state: 'Approved', dateRequested: '3/01/2022', dateApproved: '3/15/2022', url: 'http:www.thisisawebsite.com', description: 'This is a very descriptive description'} ,
        {id:4, name: 'Open Source Project', requester: 'thomashardy@gmail.com', license: '384899', state: 'Approved', dateRequested: '3/01/2022', dateApproved: '3/21/2022', url: 'http:www.thisisawebsite.com', description: 'This is a very descriptive description'} 
        */