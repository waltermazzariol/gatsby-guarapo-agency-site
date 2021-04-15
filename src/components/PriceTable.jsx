import React from "react"
import Fade from 'react-reveal/Fade';
import List from "./Common/List"
import { Link } from "gatsby"

function Plans({ data }) {

    return (
        <div className="price-wrapper mb-5">
            <Fade>
                {data.map((key, index) =>
                    <div key={index} className="item ">
                        <h4 className="">{key.name}</h4>
                        <div className="item-price">
                            <span className="item-title text-left">{key.price}</span>
                            <span className="text-left">{key.time}</span>
                        </div>
                        <List data={key.list} />
                        <Link className="item-btn btn btn--primary" to={key.button_url} target="_blank" rel="noopener noreferrer"> {key.button_text}</Link>
                    </div>)}
            </Fade>
        </div>
    )
}

export default Plans