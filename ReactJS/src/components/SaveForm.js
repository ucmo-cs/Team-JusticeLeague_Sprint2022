import React from 'react';
import { Button, Form } from 'react-bootstrap';
// handle text input from the user login page
const SaveForm = () => {
    return (
        <Form>
            <Form.Group className="mb-4" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="text" placeholder="Enter Username or Email" />
    </Form.Group>
    <Form.Group className="mb-4" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="text" placeholder="Enter Password" />
    </Form.Group>
    <Button variant="primary" type="submit">
        Submit
    </Button>
</Form>
    );
};

export default SaveForm;