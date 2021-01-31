import React from "react"
// import Fade from 'react-reveal/Fade'

import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'

function Banner(props) {
    return (
        <Container
            fluid
            className="banner1"
            style={{
                background: 'url(' + props.data.image.publicURL + ')',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
            }}
        >
            <Container>
                <Row className="justify-content-md-end">
                    <Col sm="12" md="5" lg="3" className="p-4 bg-black">
                        <div className="text-white">
                            {props.data.text}
                        </div>
                        <button className="btn btn--primary my-3 mr-4">
                            <a
                                href={props.data.button_link}
                                target="_blank"
                                rel="noopener noreferrer">
                                {props.data.button_text}
                            </a>
                        </button>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default Banner