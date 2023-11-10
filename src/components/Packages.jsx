import React from "react"
import { Link } from "gatsby"

function Packages({ data }) {

    return (
            <div className="container package">
                    <div className="row g-3 justify-content-center">
                        {data.items.map((key,index)=> 
                            <div key={index} className="col-md-12 col-lg-6">
                                <div className="item bg-second-color d-flex flex-column">
                                    <h3 className="item-main-title item-with-image">{key.name}</h3>
                                    <div className="item-price">
                                        <div className="item-text-left">Desde</div>
                                        <span className="item-title text-left text-color-second-color">{key.price}</span>
                                        <span className="item-text-right">{key.time}</span>
                                    </div>
                                    <ul className="item-list">
                                        {key.list.map((item,index)=> 
                                            <li key={index} ><i className="fa-solid fa-check-circle"></i>{item.text}</li>
                                        )}
                                    </ul>
                                    <span className="d-flex mt-auto">
                                        <a className="item-btn button button--primary me-2" href={key.button_url} rel="noopener noreferrer">{key.button_text}</a>
                                        {key.button_text_second ? <Link className="item-btn button button--outline" to={key.button_url_second} rel="noopener noreferrer">{key.button_text_second}</Link> : "" }
                                    </span>
                                </div>
                            </div>

                        )}
                    </div>
                </div>
    )
}

export default Packages