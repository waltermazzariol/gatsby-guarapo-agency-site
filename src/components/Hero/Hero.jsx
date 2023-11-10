import React from "react"
// import { Link } from "gatsby"
// import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Container from 'react-bootstrap/Container'
import { Row } from "react-bootstrap"

function Hero({data}) {
  // const image = getImage(data.image)


  return (
    <Container as={"header"} fluid={true} className="hero">
        <Row className="g-0 justify-content-center">
        <div className="hero-item col-12 text-center align-content-center">
            {/* <img src={iconLeft} className="icon-left" alt="draw left" />
            <img src={iconRight} className="icon-right" alt="draw right" /> */}
            <div className="hero-pre-title" dangerouslySetInnerHTML={{ __html: data.pretitle }}></div>
            <h1 className="hero-title" dangerouslySetInnerHTML={{ __html: data.title }}></h1>
            <div className="hero-subtitle pt-3 mb-5" dangerouslySetInnerHTML={{ __html: data.subtitle }}></div>
            <a className="button button--primary button--big" href={data.button_url}>{data.button_text}</a>
        </div>
        </Row>
    </Container>
  )
}

export default Hero