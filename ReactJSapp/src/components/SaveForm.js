import React from 'react';
import {Button, Form} from 'react-bootstrap';


// handle text input from the user login page
const SaveForm = () => {
    return (
        <Form>
            <Form.Group className="mb-4" controlId="textbox" style={{width: '30%', position: 'fixed', left: '10%'}}>
            <Form.Label>Project Name</Form.Label>
            <Form.Control type="text" placeholder="Open Source Project Name" style={{borderStyle: 'ridge', borderColor: 'lightgreen', borderWidth: '5px'}}/>
    </Form.Group>
    <Form.Group className="mb-4" controlId="text" style={{width: '30%', position: 'fixed', right: '10%'}}>
        <Form.Label>License</Form.Label>
        <Form.Control type="text" placeholder="License#" style={{borderStyle: 'ridge', borderColor: 'lightgreen', borderWidth: '5px'}}/>
    </Form.Group>
    <Form.Group className='mb-4' controlId="url" style={{width: '30%', position: 'fixed', top: '28%', left: '34%'}}>
        <Form.Label>URL</Form.Label>
        <Form.Control type="URL"
        placeholder="Project's URL" style={{borderStyle: 'ridge', borderColor: 'lightgreen', borderWidth: '5px'}}/>
    </Form.Group>
    <div class="mb-3" style={{width:'45%',position: 'fixed', top:'45%',left: '27%'}}>
        <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="6" style={{ borderStyle: 'ridge', borderWidth: '5px', borderRadius: '7px', borderColor: 'lightgreen'}}></textarea>
    </div>
    <Button variant="primary" type="submit" style={{position: 'fixed',top:'75%', left:'47%'}}>
        Submit
    </Button>
</Form>
    );
};

export default SaveForm;