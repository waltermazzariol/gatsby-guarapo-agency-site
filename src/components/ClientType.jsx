import React from "react"
import Title from "../components/Common/Title"
import Section from "../components/Common/Section"
import Col from 'react-bootstrap/Col'
import { Link } from 'gatsby'

function ClientType(props) {
    return (
        <Section className="project py-5">
            <div className="d-flex flex-wrap justify-content-around">
                <Title title={props.data.title} />
                {props.data.services.map((key, index) =>
                    <div className="item1 mb-3 p-3 bg--70" key={index}>
                        <div className="d-flex">
                               <div className="item2 p-3" >
                                    <img className="img-fluid" srcSet={key.image.childImageSharp.gatsbyImageData.images.fallback.srcSet} alt={key.name} />
                                </div>
                                <div className="item2 p-2" >
                                    <h4>
                                        {key.name}
                                    </h4>
                                    <span className="small-text">
                                        {key.type}
                                    </span>
                                </div>
                      </div>
                    </div>)}
                <Col className="text-center">
                    <Link className="btn btn--primary my-3 me-4"
                        to="/contacto" target="_blank" rel="noopener noreferrer">
                        Contactános
                    </Link>
                </Col>
            </div>
        </Section>
    )
}

export default ClientType