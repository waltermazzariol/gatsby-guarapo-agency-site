import React from "react"
import {Container, Row} from 'react-bootstrap'

function Section({anchor, className, fluid=false, rowClass, children}) {

  return (
    <div id={anchor} className={className}>
      <Container fluid={fluid} >
        <Row className={rowClass}>
          {children}
        </Row>
      </Container>
    </div>
  )
}


export default Section