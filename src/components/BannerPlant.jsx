import React from "react"
import Line from "../components/Common/Line"

import Container from 'react-bootstrap/Container'

function BannerPlant(props) {
    return (
        <Container className="py-5">
        <div className="d-flex flex-wrap justify-content-around">
          <div className="item1 m-3">
            <img src={props.data.image.publicURL} alt="plant" />
          </div>
          <div className="item1 align-self-center ">
            <h3>{props.data.text}</h3>
            <Line />
          </div>
        </div>
      </Container>
    )
}

export default BannerPlant