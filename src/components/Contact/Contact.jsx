import React from "react";
import { Button, Form} from "react-bootstrap";

import "./Contact.css";

export default function Contact() {

  return (
    <div id="contact" className="contact-component">
      <div className="contact-card">
        <h1 className="contact-title">Contact me</h1>
        <p className="contact-intro">
          When you want to do any kind of Photoshoot for your professional or
          personal use, please don't hesitate to contact me and let me light up
          your world with my natural flashlight.
        </p>
        <Form id="contact-form">
          <Form.Group className="mb-3">
            <Form.Control type="text" placeholder="Your name" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control type="email" placeholder="Your e-mail" />
          </Form.Group>
          <Form.Select name="services" className="mb-3">
            <option>Object</option>
            <option value="portrait">Portrait</option>
            <option value="ceremony">Ceremony</option>
            <option value="baby">Babyborn</option>
            <option value="autres">Autres</option>
          </Form.Select>
          <Form.Group className="mb-3">
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Here your message..."
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <div className="form-alert-message invisible">Thanks for your message ! </div>
            <Button type="button" variant="dark" className="button-send">
              Send
            </Button>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
}
