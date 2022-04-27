import { Button, Modal } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';





 //Gets the current date in the format mm/dd/yyyy
 var today = new Date();
 var dd = String(today.getDate()).padStart(2, '0');
 var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
 var yyyy = today.getFullYear();

 today = mm + '/' + dd + '/' + yyyy;





const Project = ({project}) => {

    const [show, setShow] = useState(false);
    const handleShow = () => {
        console.log("handleSHow");
        setShow(true);
    }
        
    const handleClose = () => {
        console.log("close");
        setShow(false);
    }

    const tokenString = sessionStorage.getItem('token');
    const userToken = JSON.parse(tokenString);

    
 const [admin, setAdmin] = useState(false);
 const handleAdmin = () => {
       
        fetch("http://localhost:8080/user/adminChecking/"+userToken.user, {method:"GET"})
        .then(res =>res.json())
        .then(res=>{
            setAdmin(res);})
    // fetch("http://localhost:8080/user/adminChecking/"+userToken.user, {method:"GET"})
    // .then(res =>res.json())
    //     .then(res=>{
    //         setProjects(res);})
    // },[]);
        

 } 


 const [disapprove, setDisapprove]  = useState();

 const handleDisapprove = (e) => {
         console.log(e);
         setDisapprove({
             ...disapprove,[e.target.name]: e.target.value

         });

     e.preventDefault();
     console.log(project.user);
     fetch('http://localhost:8080/project/disapprove/'+ project.id, {
    
       method: 'PUT',
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
    
    const [approve, setApprove]  = useState();

    const handleApprove = (e) => {
            console.log(e);
            setApprove({
                ...approve,[e.target.name]: e.target.value

            });

        e.preventDefault();
        console.log(project.user);
        fetch('http://localhost:8080/project/'+ project.id, {
       
          method: 'PUT',
          headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json' },
          body: JSON.stringify(project),
          credentials : 'same-origin',
          }).then((res) => {
            console.log("approved!!!");
            window.location.href="/list"
            console.log(res)     
            return res.json(); 
          }).then((res) =>{
            console.log("approved!!!");
            window.location.href="/list"

          });

    }
    
    /*
    useEffect(() => {
        handleClose()
    }, [project]);
    
    */
    

    return (
        <>
        <td>{project.projectName}</td>
        <td>{project.user}</td>
        <td>{project.license}</td>
        <td>{project.state}</td>
        <td>{project.dateRequested}</td>
        <td>{project.dateApproved}</td>
        <td>
           <Button variant="outline-success" onClick={handleShow}>Info</Button>
        </td>

        <Modal show={show} onHide={handleClose} onEnter={handleAdmin}  backdrop="static" size= 'lg' >
            <Modal.Header style={{backgroundColor: ' forestgreen'}}>
                    <Modal.Title>
                        {project.projectName}
                        <p style={{fontSize: '55%'}}>Requester: {project.user}</p>
                    </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <ul>
                <ol><h3>License:</h3>
                <p>{project.license}</p></ol>
                <ol><h3>Url:</h3> <p>{project.url}</p></ol>
                <ol><h3>Descritption:</h3><textarea rows='4' readOnly style={{resize: 'none', width: '90%'}}>{project.desc}</textarea></ol>
                <ol style={{paddingTop: '5%'}}><Button disabled={!admin}variant="outline-success" style={{marginRight: '5%'}} onClick={ (e) => handleApprove(e)}>Approve</Button>
                <Button variant="outline-success" disabled={!admin}
                    value={today} onClick={ (e) => handleDisapprove(e)}>Disapprove</Button></ol>
            </ul>

            </Modal.Body>
            <Modal.Footer>
                    <Button variant="success" onClick={handleClose}>
                        Close
                    </Button>
            </Modal.Footer>
        </Modal>
        </>
    )
};

export default Project;


/*

*/