import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/esm/Button";
import axios from "axios";
import React, { useState } from "react";

const Forms = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState();
  const [message, setMessage] = useState("");
  const [button, setButton] = useState({
    variant: "outline-dark",
    text: "Submit Form",
  });

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };
  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };
  const telChangeHandler = (event) => {
    setTel(event.target.value);
  };
  const messageChangeHandler = (event) => {
    setMessage(event.target.value);
  };
  const resetForm = () => {
    setName("");
    setEmail("");
    setTel("");
    setMessage("");
    setButton({ variant: "success", text: "Successfully Submited" });
    setTimeout(() => {
      setButton({ variant: "outline-dark", text: "Submit Form" });
    }, 4000);
  };

  const formlink = "https://submit-form.com/bd0DvZ9u";
  //https://formspree.io/f/moqrznpn
  const submitForm = async (event) => {
    event.preventDefault();
    await postSubmission();
    resetForm();
  };

  const postSubmission = async () => {
    const payload = {
      Name: name,
      email: email,
      tel: tel,
      message: message,
    };

    try {
      const result = await axios.post(formlink, payload);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Form onSubmit={submitForm} data-netlify="true">
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <FloatingLabel
          controlId="floatingInputGrid"
          label="Name"
          className="mb-4"
          for="name"
        >
          <Form.Control
            type="text"
            placeholder="Jon Snow"
            id="name"
            autoComplete="off"
            required
            name="_name"
            value={name}
            onChange={nameChangeHandler}
          />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingInputGrid"
          label="Phone"
          className="mb-4"
          for="phone"
        >
          <Form.Control
            type="tel"
            placeholder="00000-00000"
            id="phone"
            autoComplete="off"
            name="_phone"
            value={tel}
            onChange={telChangeHandler}
          />
        </FloatingLabel>
        <FloatingLabel controlId="email" label="Email address" className="mb-4">
          <Form.Control
            type="email"
            placeholder="name@example.com"
            autoComplete="off"
            name="_replyto"
            required
            value={email}
            onChange={emailChangeHandler}
          />
        </FloatingLabel>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Message</Form.Label>
        <Form.Control
          as="textarea"
          rows={5}
          name="_message"
          onChange={messageChangeHandler}
          value={message}
        />
      </Form.Group>
      <Button type="submit" variant={button.variant}>
        {button.text}
      </Button>
    </Form>
  );
};

export default Forms;
