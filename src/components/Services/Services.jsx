import React, {useState} from 'react';
import { Col, Container, Row, Image } from 'react-bootstrap';
import { FaBaby, FaPortrait, FaGlassCheers } from 'react-icons/fa';
import FsLightbox from 'fslightbox-react';

import './Services.css';

import ServicesPortrait from '../../assets/services/couplepic.jpg';
import ServicesCeremony from '../../assets/services/wed.jpg';
import ServicesBabyborn from '../../assets/services/baby.jpg';

export default function Services() {

  const [toggler, setToggler] = useState(false);

  return (
    <div id="services" className="services-component">
      <Container>
        <Row>
          <Col> <h1 className='services-title'> Services </h1> </Col>
        </Row>
        <Row>
          <Col md={4}>
            <div className='services-item'>
              <Image src={ServicesPortrait} alt='service image' className='services-item-image' onClick={() => setToggler(!toggler)} />
              <h4 className='services-item-title'>
                <FaPortrait className='services-item-icon' />
                Portrait</h4>
              <p className='services-item-intro'>
                Gingerbread chocolate bar candy gummi bears pastry jelly powder. Bear claw ice cream powder chupa chups halvah muffin jelly-o macaroon
              </p>
              <p className='services-item-price'> from <span className='the--price'>300 €</span> </p>
            </div>
          </Col>
          <Col md={4}>
            <div className='services-item'>
              <Image src={ServicesCeremony} alt='service image' className='services-item-image' onClick={() => setToggler(!toggler)} />
              <h4 className='services-item-title'>
                <FaGlassCheers className='services-item-icon' />                
                Ceremony</h4>
              <p className='services-item-intro'>
                Gingerbread chocolate bar candy gummi bears pastry jelly powder. Bear claw ice cream powder chupa chups halvah muffin jelly-o macaroon
              </p>
              <p className='services-item-price'> from <span className='the--price'>1500 €</span> </p>
            </div>
          </Col>
          <Col md={4}>
            <div className='services-item'>
              <Image src={ServicesBabyborn} alt='service image' className='services-item-image' onClick={() => setToggler(!toggler)} />
              <h4 className='services-item-title'>
                <FaBaby className='services-item-icon' />
                Babyborn</h4>
              <p className='services-item-intro'>
                Gingerbread chocolate bar candy gummi bears pastry jelly powder. Bear claw ice cream powder chupa chups halvah muffin jelly-o macaroon
              </p>
              <p className='services-item-price'> from <span className='the--price'>1200 €</span> </p>
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

      {/* ---| FSLightbox images sources */}
      <FsLightbox toggler={toggler} sources={[ ServicesPortrait, ServicesCeremony, ServicesBabyborn ]} />
    </div>
  );
}
