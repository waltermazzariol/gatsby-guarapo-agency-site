import React from "react"
import Fade from 'react-reveal/Fade'

import Col from 'react-bootstrap/Col'
import Line from '../components/Common//Line'
import Section from "../components/Common/Section"
import imagesAbout from '../assets/images/image1.png'

function About(props) {
    return (
        <Section className={'about'} >
            <Col md="12" lg="7">
                <div className="row">
                    <Fade>
                        <Col>
                            <div className="media">
                                <img className="align-self-center mr-3" src={imagesAbout} alt="On target" />
                                <div className="media-body">
                                    <h3>{props.data.title}</h3>
                                    <Line />
                                </div>
                            </div>
                            <div className="description mt-4">
                                <div dangerouslySetInnerHTML={{ __html: props.data.text }}></div>
                            </div>
                        </Col>
                    </Fade>
                </div>
            </Col>
            <Col md="12" lg="5" align="text-center">
                <Fade>
                    <img srcSet={props.data.image.childImageSharp.gatsbyImageData.images.fallback.srcSet} alt="About Us" />
                </Fade>
            </Col>
        </Section>
    )
}

export default About
