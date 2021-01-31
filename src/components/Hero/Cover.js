import React from "react"
import Bounce from 'react-reveal/Bounce'

import Container from 'react-bootstrap/Container'
import Line from '../Common/Line'

function Cover(props) {
  var bghero = props.data.bgimage.publicURL

  return (
    <Container
      as={"header"}
      fluid={true}
      className="cover"
      style={{
        background: 'linear-gradient(to right bottom, rgba(0,0,0,0), rgba(0,0,0,0)), url(' + bghero + ') 40% 0',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }}
    >
      <div className="cover-wrapper">
        <div className="cover-item text-center">
          <Bounce down>
            <h1 className="cover-title" dangerouslySetInnerHTML={{ __html: props.data.title }}></h1>
            <Line />
            <div className="cover-subtitle pt-3">{props.data.subtitle}</div>
            {/* <button className="btn btn--primary my-3 mr-4"><a href={props.data.button_url} target="_blank" rel="noopener noreferrer">{props.data.button_text}</a></button> */}
          </Bounce>
        </div>
      </div>
    </Container>
  )
}

export default Cover