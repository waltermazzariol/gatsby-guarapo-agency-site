import React from "react"
import Fade from 'react-reveal/Fade';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

function Contact(props) {

  return (
    <Container>
      <Row className="justify-content-md-center">

        <Col xs={12} md={6} className="text-center">
          <Fade>
          <div className="social-contact">
              {props.data.socialmedia.map((key) =>
                <a key={key.name} href={key.link} target="_blank" rel="noopener noreferrer">
                  <i className={`fab fa-${key.name}`} aria-label="social media"></i>
                </a>)}
            </div>
            {/* <p><i className="fas fa-location-arrow mt-3 mr-2"></i>{props.data.address} </p>
            <p><i className="far fa-envelope mr-2"></i> <a href={`mailto:${props.data.email}`}> {props.data.email}</a></p>*/}
          </Fade> 
        </Col>
        
      </Row>
    </Container>
  )
}

export default Contact 