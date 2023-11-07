import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Container from 'react-bootstrap/Container'
import { Row } from "react-bootstrap"

function Hero({data}) {
  const image = getImage(data.image)


  return (
    <Container as={"header"} fluid={true} className="hero">
      <Container className="hero-wrapper">
        <Row className="g-0 justify-content-center">
        <div className="hero-item col-10 col-md-8">
            <div>Marketing + Web development</div>
            <h1 className="hero-title" dangerouslySetInnerHTML={{ __html: data.title }}></h1>
            <div className="hero-subtitle pt-3" dangerouslySetInnerHTML={{ __html: data.subtitle }}></div>
            <Link className="btn btn--primary btn--big my-5 me-4" to={data.button_url}>{data.button_text}</Link>
        </div>
        <div className="hero-item hero-item-img col-3 d-none d-lg-block justify-content-center">
          <GatsbyImage image={image} alt={"Página web cliente"} />
        </div>
        {/* <div className="hero-item hero-item-img align-self-center col-10 col-md-3">
            <ul>
                {data.benefits.map((item,index)=> 
                    <li key={index} ><i className="fa-solid fa-check-circle"></i>{item.text}</li>
                )}
            </ul>
        </div> */}
        </Row>
      </Container>
    </Container>
  )
}

export default Hero