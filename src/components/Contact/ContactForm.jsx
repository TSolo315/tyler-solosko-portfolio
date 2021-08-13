import React from 'react';
import { Form, Button } from 'react-bootstrap';

const ContactForm = () => {
  return (
    <>
      <Form>
        <h1 className="white display-4 mb-5">Contact Me</h1>
        <Form.Group className="mb-3" controlId="form-name">
          <Form.Label className="white" size="lg">
            Name
          </Form.Label>
          <Form.Control type="input" placeholder="Name" size="lg" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="form-email">
          <Form.Label className="white" size="lg">
            Email address
          </Form.Label>
          <Form.Control type="email" placeholder="Email" size="lg" />
          <Form.Text className="off-white">Your email will never be shared with anyone.</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="form-message">
          <Form.Label className="white" size="lg">
            Message
          </Form.Label>
          <Form.Control as="textarea" rows={5} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default ContactForm;
