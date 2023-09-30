import React from "react"
import Container from 'react-bootstrap/Container'

function Cover(props) {
  return (
    <Container
      as={"header"}
      fluid={true}
      className="cover"
    >
      <div className="cover-wrapper">
        <div className="cover-item text-center">
            { props.data ? <h1 className="cover-title" dangerouslySetInnerHTML={{ __html: props.data.title }}></h1>: ""}
            { props.data ? <div className="cover-subtitle pt-3">{props.data.subtitle}</div>: ""}
        </div>
      </div>
    </Container>
  )
}

export default Cover
