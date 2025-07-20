import React from "react"
import Container from 'react-bootstrap/Container'
import RatingInfo from "../RatingInfo"

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
            { props.rating ? <div className="d-flex justify-content-center mt-3"><RatingInfo data={props.rating} /></div>: ""}
        </div>
      </div>
    </Container>
  )
}

export default Cover
