import React from "react";
import { Link } from "gatsby";
// import Fade from 'react-reveal/Fade'

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

function Banner(props) {
  return (
    <Container >
      <Row
        className="banner1"
        noGutters
        style={{
          background: "url(" + props.data.image.publicURL + ")",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Col sm="12" className="bg-black banner1-wrapper">
          <div className="text-white">{props.data.text}</div>
          <Link
            className="btn btn--primary my-3 mr-4"
            to={props.data.button_link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {props.data.button_text}
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default Banner;
