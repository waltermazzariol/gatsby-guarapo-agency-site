import React from "react";
import { Col } from "react-bootstrap";
function Domain({ data }) {
  return (
    <>
      {data.map((key, index) => (
        <Col index={index} xs={6} lg={2}>
          <span className="domain-box bg-second-color">
            <h3>{key.name}</h3>
            <div className="domain-price">{key.price}</div>
          </span>
        </Col>
      ))}
    </>
  );
}

export default Domain;
