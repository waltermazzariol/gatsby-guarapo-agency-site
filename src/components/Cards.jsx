import React from "react"
import Section from "../components/Common/Section"
import { Link } from "gatsby"

function Cards(props) {
    return (
        <Section className={'work bg-gray py-5'}>
                <div className="work-wrapper">
                    {props.data.map((key) =>
                        <div className="item mb-5" key={key.node.id}>
                            <Link to={key.node.parent.name} className="d-flex flex-column">
                                <img className="mx-auto d-block" srcSet={key.node.thumbnail.childImageSharp.gatsbyImageData.images.fallback.srcSet} alt={key.node.alt} />
                                {key.node.cat === "Web" ?
                                    <div className="work-cat work-cat-web text-center">{key.node.cat}</div> :
                                    <div className="work-cat work-cat-marketing text-center">{key.node.cat}</div>}
                                <h4 className="work-title">{key.node.client}</h4>
                            </Link>
                        </div>)}
                </div>
        </Section>
    )
}

export default Cards