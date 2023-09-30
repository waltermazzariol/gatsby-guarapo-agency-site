import React from "react";
import { Link } from "gatsby";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

function Banner({data}) {
  return (
    <Container className="my-5 text-center">
      <Row >
        <Col sm="12" className="bg-third-color p-5 border-radius_10">
          <h3 className="mb-4">{data.title}</h3>
          <div className="mb-4">{data.text}</div>
          <Link className="item-btn item-btn_b btn btn--primary" to={data.button_url} rel="noopener noreferrer">{data.button_text}</Link>         
        </Col>
      </Row>
    </Container>
  );
}

export default Banner;
