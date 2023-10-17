import React from "react"
import { Link } from "gatsby"

function Plans({ data }) {

    return (
        <div className="container package mb-5">
        <div className="row g-3 justify-content-center">
            {data.map((key,index)=> 
                <div key={index} className={`col-12 col-md-6 col-lg-${12/data.length}`}>
                    <span className="item d-flex flex-column bg-second-color">
                        {index === 1 ? <div className="item-tag-wrapper"><span className="item-tag">Mejor opción 😎</span></div> : ""}
                        <h3 className="item-main-title">{key.name}</h3>
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
                        <Link className="item-btn btn btn--primary me-2" to={key.button_url} rel="noopener noreferrer">{key.button_text}</Link>
                        {key.button_text_second ? <Link className="item-btn btn btn--outline" to={key.button_url_second} rel="noopener noreferrer">{key.button_text_second}</Link> : "" }
                        <a className="btn btn--text" href="/contacto">¿Tienes una duda? Escribenos</a>
                    </span>
                </div>
            )}
        </div>
    </div>
    )
}

export default Plans