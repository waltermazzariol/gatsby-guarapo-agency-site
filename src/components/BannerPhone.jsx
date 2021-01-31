import React from "react"
// import Fade from 'react-reveal/Fade'
import Line from "../components/Common/Line"

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import user from '../images/assets/person.svg'
import ring from '../images/assets/ring.svg'
import diagonalTop from '../images/assets/diagonal-top.svg'

function BannerPhone(props) {
    return (
        <section className="container-fluid banner1 mt-5" style={{ background: 'url(' + props.data.bg_image.publicURL + ')', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
        <Container className="py-5">
          <Row>
            <Col sm={12} md={7}>
              <img className="icon-svg mb-2" src={user} alt="user" />
              <h3 className="text-primary" dangerouslySetInnerHTML={{ __html: props.data.title }}></h3>
              <Line />
            </Col>
          </Row>
        </Container>
        <div className="w-100" style={{ position: 'relative' }}>
          <img className="diagonal" src={diagonalTop} alt="diagonal" />
        </div>
        <Container fluid className="py-2 bg-yellow" >
          <Container style={{ position: 'relative' }}>
            <Row>
              <div className="col-sm-12 col-md-7 text-right">
                <img className="icon-svg mb-2" src={ring} alt="ring" />
                <div className="text-primary" dangerouslySetInnerHTML={{ __html: props.data.subtitle }}></div>
              </div>
              <img className="phone d-none d-md-block" src={props.data.image.publicURL} alt="Phone mockup" />
            </Row>
          </Container>
        </Container>
        <div className="w-100" style={{ position: 'relative' }}>
          <img className="diagonal diagonal-180" src={diagonalTop} alt="diagonal" />
        </div>
      </section>
    )
}

export default BannerPhone