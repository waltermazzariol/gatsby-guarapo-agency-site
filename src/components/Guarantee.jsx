import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Guarantee({ data }) {
  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col lg={8} className="text-center">
          <div className="guarantee-section bg-primary text-white p-5 border-radius_10">
            <h2 className="mb-3">{data.title}</h2>
            <p className="mb-4">{data.description}</p>
            <Row className="g-3">
              {data.features.map((feature, index) => (
                <Col key={index} sm={6} md={3} className="text-center">
                  <div className="guarantee-feature">
                    <i className="fa-solid fa-shield-check mb-2" style={{ fontSize: '2rem' }}></i>
                    <div className="small fw-bold">{feature.text}</div>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Guarantee; 