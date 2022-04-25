import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { FaEnvelope , FaPhoneAlt} from 'react-icons/fa';

import './Contact.css';

export default function Contact() {
  return (
    <div id='contact' className='contact-component'>
      
      <Container>
        <Row className='contact-info'>
          <Col md={6}> 
            <h1 className='contact-title'>Contact me</h1> 
            <p className='contact-intro'>Let me light up your world with my natural flashlight.</p>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control type="text" placeholder="Your name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control type="email" placeholder="Your e-mail" />
              </Form.Group>
              <Form.Select aria-label="Default select example" name='services' className='mb-3'>
                <option>Object</option>
                <option value="portrait">Portrait</option>
                <option value="ceremony">Ceremony</option>
                <option value="baby">Babyborn</option>
                <option value="autres">Autres</option>
              </Form.Select>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Control as="textarea" rows={3} placeholder="Here your message..." />
              </Form.Group>
              <Button variant="dark" className='button-send'> Send </Button>
            </Form>
          </Col>
        </Row>
      </Container>

    </div>
  );
}
