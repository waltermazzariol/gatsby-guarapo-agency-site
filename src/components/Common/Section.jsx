import React from "react"
import {Container, Row} from 'react-bootstrap'

function Section(props) {

  return (
    <div id={props.anchor} className={props.className}>
      <Container fluid={props.fluid} >
        <Row noGutters={props.noGutters} className={props.rowClass}>
          {props.children}
        </Row>
      </Container>
    </div>
  )
}

Section.defaultProps = {
  fluid: false,
  noGutters: false
}

export default Section