import React from "react"

// Library components
import Col from 'react-bootstrap/Col'

function Title({title, subtitle, slogan}) {

    return (
        <Col lg={12} className="mb-5 mt-5">
            <h2 className="text-center">{title}</h2>
            <p className="mt-4 text-center">{subtitle}</p>
        </Col>
    )
}

Title.defaultProps = {
    title: "Title",
    subtitle: "",
    slogan: ""
}

export default Title