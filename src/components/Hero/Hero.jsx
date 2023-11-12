import React from "react"
// import { Link } from "gatsby"
// import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Container from 'react-bootstrap/Container'
import { Row } from "react-bootstrap"
// import SpotAvailable from "../SpotsAvailable"
import Projects from "../Projects"

function Hero({data,color}) {
  // const image = getImage(data.image)


  return (
    <Container as={"header"} fluid={true} className={`hero ${color}`}>
      <Row className="g-0 justify-content-center text-center">
        <div className="col-11 hero-pre-title" dangerouslySetInnerHTML={{ __html: data.pretitle }}></div>
        <h1 className="col-11 hero-title" dangerouslySetInnerHTML={{ __html: data.title }}></h1>
        <div className="col-11 hero-subtitle" dangerouslySetInnerHTML={{ __html: data.subtitle }}></div>
        <div className="hero-button">
          <a className="button button--primary button--big" href={data.button_url}>{data.button_text}</a>
        </div>
        {/* <SpotAvailable /> */}
        <Projects />
      </Row>
    </Container>
  )
}

export default Hero