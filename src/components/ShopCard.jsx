import React from "react"
import Section from "./Common/Section"

function Cards(props) {
    console.log(props.data)
    return (
        <Section className={'shop bg-gray py-5'}>
                <div className="shop-wrapper">
                    {props.data.map((key) =>
                        <div className="item mb-5" key={key.id}>
                            <a href={key.link} className="d-flex flex-column">
                                <img className="mx-auto d-block mb-3" srcSet={key.image.childImageSharp.gatsbyImageData.images.fallback.srcSet} alt={key.title} />
                                <span className="d-flex justify-content-start align-items-center shop-tags">
                                    <span className="shop-cat shop-cat-web text-center me-2">{key.category}</span> 
                                    <span className="me-2">•</span>
                                    <span className="shop-price">{key.price}</span>
                                </span>
                                <h4 className="shop-title">{key.title}</h4>
                            </a>
                        </div>)}
                </div>
        </Section>
    )
}

export default Cards