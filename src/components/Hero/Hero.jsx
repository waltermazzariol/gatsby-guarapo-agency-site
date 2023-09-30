import React from "react"
import { Link } from "gatsby"

import Container from 'react-bootstrap/Container'
import { Row } from "react-bootstrap"

function Hero(props) {
  var bg = props.data.image.publicURL

  return (
    <Container as={"header"} fluid={true} className="hero">
      <Container className="hero-wrapper">
        <Row className="g-0 justify-content-center">
        <div className="hero-item col-10 col-md-6">
            <h1 className="hero-title" dangerouslySetInnerHTML={{ __html: props.data.title }}></h1>
            <div className="hero-subtitle pt-3">{props.data.subtitle}</div>
            <Link className="btn btn--primary my-5 me-4" to={props.data.button_url}>{props.data.button_text}</Link>
        </div>
        <div className="hero-item hero-item-img col-3 d-none d-lg-block justify-content-center">
            <img src={bg} alt="Tu página web" />
        </div>
        <div className="hero-item hero-item-img align-self-center col-10 col-md-3">
            <ul>
                {props.data.benefits.map((item,index)=> 
                    <li key={index} ><i className="fa-solid fa-check"></i>{item.text}</li>
                )}
            </ul>
        </div>
        </Row>
      </Container>
    </Container>
  )
}

export default Hero