import React from "react"
import Fade from 'react-reveal/Fade';
import List from "./Common/List"

function Plans({ data }) {

    return (
        <div className="price-wrapper mb-5">
            {data.map((key, index) =>
                <div key={index} className="item ">
                    <Fade>
                        <h4 className="">{key.name}</h4>
                        <div className="item-price">
                            <span className="item-title text-left">{key.price}</span>
                            <span className="text-left">{key.time}</span>
                        </div>
                        <List data={key.list} />
                        <button className="item-btn btn btn--primary"><a href="/" target="_blank" rel="noopener noreferrer"> {key.button_text}</a></button>
                    </Fade>
                </div>)}
        </div>
    )
}

export default Plans