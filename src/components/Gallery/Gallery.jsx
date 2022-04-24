import Fslightbox from 'fslightbox-react';
import React, {useState} from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './Gallery.css';

import image_1 from '../../assets/services/baby.jpg';
import image_2 from '../../assets/services/baptism.jpg';
import image_3 from '../../assets/services/bday.jpg';
import image_4 from '../../assets/services/couplepic.jpg';
import image_5 from '../../assets/services/events.jpg';
import image_6 from '../../assets/services/fam.jpg';
import image_7 from '../../assets/services/prom.jpg';
import image_8 from '../../assets/services/sport.jpg';

export default function Gallery() {

  const [toggler, setToggler] = useState(false);

  return (
    <div id='gallery' className='gallery-component'>
      
      <Container fluid>
        <Row>
          <Col md={3}> 
            <Image src={image_1} alt='gallery image' className='gallery-image' onClick={() => setToggler(!toggler)} />
          </Col>
          <Col md={3}> 
            <Image src={image_2} alt='gallery image' className='gallery-image' onClick={() => setToggler(!toggler)} />
          </Col>
          <Col md={3}> 
            <Image src={image_3} alt='gallery image' className='gallery-image' onClick={() => setToggler(!toggler)} />
          </Col>
          <Col md={3}> 
            <Image src={image_4} alt='gallery image' className='gallery-image' onClick={() => setToggler(!toggler)} />
          </Col>
        </Row>
        <Row>
          <Col md={3}> 
            <Image src={image_5} alt='gallery image' className='gallery-image' onClick={() => setToggler(!toggler)} />
          </Col>
          <Col md={3}> 
            <Image src={image_6} alt='gallery image' className='gallery-image' onClick={() => setToggler(!toggler)} />
          </Col>
          <Col md={3}> 
            <Image src={image_7} alt='gallery image' className='gallery-image' onClick={() => setToggler(!toggler)} />
          </Col>
          <Col md={3}> 
            <Image src={image_8} alt='gallery image' className='gallery-image' onClick={() => setToggler(!toggler)} />
          </Col>
        </Row>
      </Container>

      {/* ---| FSLightbox images sources */}
      <Fslightbox toggler={toggler} sources={[ 
        <Image src={image_1} alt='gallery image' className='gallery-image onClick' />,
        <Image src={image_2} alt='gallery image' className='gallery-image onClick' />,
        <Image src={image_3} alt='gallery image' className='gallery-image onClick' />,
        <Image src={image_4} alt='gallery image' className='gallery-image onClick' />,
        <Image src={image_5} alt='gallery image' className='gallery-image onClick' />,
        <Image src={image_6} alt='gallery image' className='gallery-image onClick' />,
        <Image src={image_7} alt='gallery image' className='gallery-image onClick' />,
        <Image src={image_8} alt='gallery image' className='gallery-image onClick' />,
      ]} />

    </div>
  );
}
