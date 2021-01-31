import React from "react"
import Bounce from 'react-reveal/Bounce'

import Container from 'react-bootstrap/Container'
import Line from '../Common/Line'

function Hero(props) {
  var bg = props.data.image.publicURL
  var bghero = props.data.bgimage.publicURL

  return (
    <Container as={"header"} fluid={true} className="hero" style={{ background: 'linear-gradient(to right bottom, rgba(0,0,0,0), rgba(0,0,0,0)), url(' + bghero + ') 40% 0', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
      <div className="hero-wrapper">
        <div className="hero-item">
          <Bounce down>
            <img src={bg} alt="Tu página web" />
          </Bounce>
        </div>
        <div className="hero-item">
          <Bounce down>
            <h1 className="hero-title" dangerouslySetInnerHTML={{ __html: props.data.title }}></h1>
            <Line />
            <div className="hero-subtitle pt-3">{props.data.subtitle}</div>
            <button className="btn btn--primary my-3 mr-4"><a href={props.data.button_url} target="_blank" rel="noopener noreferrer">{props.data.button_text}</a></button>
          </Bounce>
        </div>
      </div>
    </Container>
  )
}

export default Hero