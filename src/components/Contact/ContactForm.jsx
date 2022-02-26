import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function onNameChange(e) {
    setName(e.target.value);
  }

  function onEmailChange(e) {
    setEmail(e.target.value);
  }

  function onMessageChange(e) {
    setMessage(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    const data = new FormData();
    data.append('name', name);
    data.append('email', email);
    data.append('message', message);
    fetch('https://tylerportfoliocontact.tsolodev.workers.dev/', {
      method: 'POST',
      body: data,
    }).then((res) => console.log(res.json()));
  }

  return (
    <>
      <Form onSubmit={onSubmit}>
        <h1 className="white display-4 mb-5">Contact Me</h1>
        <Form.Group className="mb-3" controlId="form-name">
          <Form.Label className="white" size="lg">
            Name
          </Form.Label>
          <Form.Control type="input" placeholder="Name" size="lg" onChange={onNameChange} value={name} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="form-email">
          <Form.Label className="white" size="lg">
            Email address
          </Form.Label>
          <Form.Control type="email" placeholder="Email" size="lg" onChange={onEmailChange} value={email} />
          <Form.Text className="off-white">Your email will never be shared with anyone.</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="form-message">
          <Form.Label className="white" size="lg">
            Message
          </Form.Label>
          <Form.Control as="textarea" rows={5} onChange={onMessageChange} value={message} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default ContactForm;
