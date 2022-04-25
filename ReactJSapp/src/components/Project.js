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


    /*
    const [approve, setApprove]  = useState({

        state:"Approved",
        dateApproved: today

    });

    const handleApprove = (e) => {
        
        setApprove({
            

        })

        e.preventDefault();
 
        fetch('http://localhost:8080/project', {
       
          method: 'POST',
          headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json' },
          body: JSON.stringify(),
          credentials : 'same-origin',
          }).then((res) => {
            console.log(res)     
            return res.json(); 
          }).then((res) =>{
            console.log(res);
            window.location.href="/list"
   
          });

    }
    */
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

        <Modal show={show} onHide={handleClose}  backdrop="static" size= 'lg' >
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
                <ol style={{paddingTop: '5%'}}><Button variant="outline-success" style={{marginRight: '5%'}} >Approve</Button>
                <Button variant="outline-success" value={today}>Disapprove</Button></ol>
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