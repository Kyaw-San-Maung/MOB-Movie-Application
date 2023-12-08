import React from "react";
import { Button, Form } from "react-bootstrap";

export default function ReviewForm({
  handleSubmit,
  revText,
  labelText,
  defaultValue,
}) {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextareal">
        <Form.Label>{labelText}</Form.Label>
        <Form.Control
          ref={revText}
          as="textarea"
          rows={3}
          defaultValue={defaultValue}
        ></Form.Control>
      </Form.Group>
      <Button variant="outline-info" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
  );
}
