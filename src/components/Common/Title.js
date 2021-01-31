import React from "react"

// core component
import Line from "./Line"

// Library components
import Fade from 'react-reveal/Fade'
import Col from 'react-bootstrap/Col'

function Title({title, subtitle,slogan}) {

    return (
        <Col lg={12} className="mb-5 mt-5">
          <Fade up>
            <h3 className="text-center">{title}</h3>
            <center><Line /></center>
            <p className="mt-4 text-center">{subtitle}</p>
          </Fade>
        </Col>
    )
}

Title.defaultProps = {
    title: "Title",
    subtitle: "",
    slogan: ""
}

export default Title