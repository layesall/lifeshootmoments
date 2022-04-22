import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaBaby, FaPortrait, FaGlassCheers } from 'react-icons/fa';

import './Services.css';

export default function Services() {
  return (
    <div id="services" className="services-component">
      <Container>
        <Row>
          <Col> <h1 className='services-title'> Services </h1> </Col>
        </Row>
        <Row>
          <Col md={4}>
            <div className='services-item'>
              <h4 className='services-item-title'>
                <FaPortrait className='services-item-icon' />
                Portrait</h4>
              <p className='services-item-intro'>
                Gingerbread chocolate bar candy gummi bears pastry jelly powder. Bear claw ice cream powder chupa chups halvah muffin jelly-o macaroon
              </p>
            </div>
          </Col>
          <Col md={4}>
            <div className='services-item'>
              <h4 className='services-item-title'>
                <FaGlassCheers className='services-item-icon' />                
                Ceremony</h4>
              <p className='services-item-intro'>
                Gingerbread chocolate bar candy gummi bears pastry jelly powder. Bear claw ice cream powder chupa chups halvah muffin jelly-o macaroon
              </p>
            </div>
          </Col>
          <Col md={4}>
            <div className='services-item'>
              <h4 className='services-item-title'>
                <FaBaby className='services-item-icon' />
                Babyborn</h4>
              <p className='services-item-intro'>
                Gingerbread chocolate bar candy gummi bears pastry jelly powder. Bear claw ice cream powder chupa chups halvah muffin jelly-o macaroon
              </p>
            </div>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col>
            
          </Col>
        </Row>
      </Container>
    </div>
  );
}
