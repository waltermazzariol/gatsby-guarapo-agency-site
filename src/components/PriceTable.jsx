import React from "react"
import { Link } from "gatsby"

function Plans({ data, popular }) {

    return (
        <div className="container package mb-5">
            <div className="row g-3 justify-content-center">
                {data.map((key,index)=> 
                    <div key={index} className="col-12 col-md-6 col-lg-4">
                        <span className="item d-flex flex-column bg-second-color">
                            <span className="d-flex justify-content-between flex-wrap mb-3">
                                <h3 className="item-main-title">{key.name}</h3>
                                {index === 1 && popular ? <div className="item-tag-wrapper mt-2"><span className="item-tag">Popular 😎</span></div> : ""}
                            </span>
                            <div className="item-price">
                                <div className="item-text-left">{key.from}</div>
                                <span className="item-title text-left text-color-second-color">{key.price}</span>
                                <span className="item-text-right">{key.time}</span>
                            </div>
                            <ul className="item-list">
                                {key.list.map((item,index)=> 
                                    <li key={index} ><i className="fa-solid fa-check-circle"></i>{item.text}</li>
                                )}
                            </ul>
                            <span className="d-flex flex-column mt-auto">
                                <span className="d-flex mt-auto">
                                    <a className="item-btn button button--primary me-2" href={key.button_url} target="_blank" rel="noopener noreferrer">{key.button_text}</a>
                                    {key.button_text_second ? <Link className="item-btn button button--outline" to={key.button_url_second} rel="noopener noreferrer">{key.button_text_second}</Link> : "" }
                                </span>
                                <a className="button button--text" href="#form">¿Tienes una duda? Escríbenos</a>
                            </span>
                        </span>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Plans