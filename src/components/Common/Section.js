import React from "react"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

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