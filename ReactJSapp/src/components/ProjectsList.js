import Table from 'react-bootstrap/Table'
import Project from './Project';
import {useContext, useEffect, useState } from 'react';
import { ProjectContext } from '../contexts/ProjectContext';
import { Modal} from 'react-bootstrap';
import AddForm from './AddForm';
import { Button } from 'react-bootstrap';





const ProjectsList = () => {

    

    const [projects, setProjects] = useState([]);



    useEffect(()=>{
       
        fetch("http://localhost:8080/projects", {method:"GET"})
        .then(res =>res.json())
        .then(res=>{
            setProjects(res);})
    },[])

  

    //transfer of data between forum and table
    //const {projects} = useContext(ProjectContext);
 
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    /*
    useEffect(() => {
        handleClose()
    }, [projects]);
        
    */

    



    return (
        <>
        <Table striped bordered hover size="sm">
            <thead>
                <tr>
                    <th>Project</th>
                    <th>Requester</th>
                    <th>License</th>
                    <th>State</th>
                    <th>Date Requested</th>
                    <th>Date Approved/Diapproved</th>
                </tr>
            </thead>
            <tbody>
                    {
                        projects.map(project => (
                            <tr key={project.id} >
                                <Project project={project}/>
                            </tr>
                        ))
                    }
            </tbody>
        </Table>
           
        <Modal show={show} onHide={handleClose} backdrop="static" size="lg">
            <Modal.Header style={{backgroundColor: 'forestgreen'}}>
                    <Modal.Title>
                        Add New Project
                    </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                    <AddForm/>
            </Modal.Body>
            <Modal.Footer>
                    <Button variant="success" onClick={handleClose}>
                        Close
                    </Button>
            </Modal.Footer>
        </Modal>
        
        <div style={{paddingBottom: '10px'}}>
               <Button variant="outline-success" onClick={handleShow}>New Request</Button>
            </div>

    
    </>
    );
};

export default ProjectsList;


/*

position: 'fixed', top: '2.5%', left: '38%'
paddingTop: '10%'

<Modal show={show} onHide={handleClose} backdrop="static" size="lg">
            <Modal.Header style={{backgroundColor: 'forestgreen'}}>
                    <Modal.Title>
                        Add New Project
                    </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                    <AddForm/>
            </Modal.Body>
            <Modal.Footer>
                    <Button variant="success" onClick={handleClose}>
                        Close
                    </Button>
            </Modal.Footer>
        </Modal>
        
        <div style={{paddingTop: '10%'}}>
               <Button onClick={handleShow} onMouseOver={changeBackground} onMouseLeave={changeBackgroundBack} style={{backgroundColor: 'green'}}>New Request</Button>
            </div>


*/