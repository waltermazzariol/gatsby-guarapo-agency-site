import React from "react"
import {Container, Row} from 'react-bootstrap'

function Section(props) {

  return (
    <div id={props.anchor} className={props.className}>
      <Container fluid={props.fluid} >
        <Row className={props.rowClass}>
          {props.children}
        </Row>
      </Container>
    </div>
  )
}

Section.defaultProps = {
  fluid: false
}

export default Section