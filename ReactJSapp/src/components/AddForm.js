import { Button } from 'react-bootstrap';
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { ProjectContext } from '../contexts/ProjectContext'; 
import {useContext} from 'react';



const AddForm = () => {
    
    //Gets the current date in the format mm/dd/yyyy
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;

    console.log("user");
    const tokenString = sessionStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
 

    console.log(userToken.user);
   
    const [project, setNewProject] = useState({
        user: userToken.user,
        state:"In Process",
        dateRequested: today,
        dateApproved: '~'
    });

        const onInputChange = (e) => {
                console.log(e);
                setNewProject({
                    ...project,[e.target.name]: e.target.value
                });
        }


        const handleSubmit = (e) => {
            e.preventDefault();
 
            fetch('http://localhost:8080/project', {
           
              method: 'POST',
              headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json' },
              body: JSON.stringify(project),
              credentials : 'same-origin',
              }).then((res) => {
                console.log(res)     
                return res.json(); 
              }).then((res) =>{
                console.log(res);
                window.location.href="/list"
       
              });
        
          }
        
      function maxLengthCheck (object) {
            if (object.target.value.length > object.target.maxLength) {
             object.target.value = object.target.value.slice(0, object.target.maxLength)
              }
            }
            
 

    return (
        
        <Form onSubmit={handleSubmit}>
            <Form.Group >
                <Form.Control
                    type="text"
                    placeholder="Project Name"
                    name="projectName"
                    onChange={ (e) => onInputChange(e)}
                    required
                    style={{marginTop: '2%'}}
                >
                </Form.Control>
                <Form.Control
                    maxLength={5}
                    type="number"
                    onInput={maxLengthCheck}
                    placeholder="License #"
                    name="license"
                    onChange={ (e) => onInputChange(e)}
                    required
                    style={{marginTop: '2%'}}
                >
                </Form.Control>
                <Form.Control
                    type="URL"
                    placeholder="Url"
                    name="url"
                    onChange={ (e) => onInputChange(e)}
                    required
                    style={{marginTop: '2%'}}
                >
                </Form.Control>
                <Form.Control
                    as="textarea"
                    placeholder="Description"
                    name="desc"
                    onChange={ (e) => onInputChange(e)}
                    required
                    rows={3}
                    style={{marginTop: '2%', marginBottom: '2%', resize: 'none'}}
                    
                >
                </Form.Control>
            </Form.Group>

            <Button variant="outline-success" type="submit" block>Add Project
            </Button>
        </Form>

    );
};

export default AddForm;