import React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

function Packages({ data }) {

    return (
            <div className="container package">
                    <div className="row g-3 justify-content-center">
                        {data.items.map((key,index)=> 

                            <div key={index} className="col-md-12 col-lg-6">
                                <div className="item bg-second-color">
                                    <h3 className="item-main-title">{key.name}</h3>
                                    <div className="item-price">
                                        <div className="item-text-left">Desde</div>
                                        <span className="item-title text-left text-color-second-color">{key.price}</span>
                                        <span className="item-text-right">{key.time}</span>
                                    </div>
                                    <ul className="item-list">
                                        {key.list.map((item,index)=> 
                                            <li key={index} ><i className="far fa-dot-circle"></i>{item.text}</li>
                                        )}
                                    </ul>
                                    <Link className="item-btn btn btn--primary me-2" to={key.button_url} rel="noopener noreferrer">{key.button_text}</Link>
                                    {key.button_text_second ? <Link className="item-btn btn btn--outline" to={key.button_url_second} rel="noopener noreferrer">{key.button_text_second}</Link> : "" }
                                    <GatsbyImage image={key.image.childImageSharp.gatsbyImageData} alt="hosting" className="item-img d-none d-md-block" />
                                </div>
                            </div>

                        )}
                    </div>
                </div>
    )
}

export default Packages