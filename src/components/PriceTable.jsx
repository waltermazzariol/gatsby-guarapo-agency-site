import React from "react"
import List from "./Common/List"
import { Link } from "gatsby"

function Plans({ data }) {

    return (
        <div className="price-wrapper mb-5">
                {data.map((key, index) =>
                    <div key={index} className="item ">
                        <h3 className="item-main-title">{key.name}</h3>
                        <div className="item-price">
                            {key.from ? <div className="item-text-left">{key.from}</div> : ""}
                            <span className="item-title text-left">{key.price}</span>
                            <span className="text-left">{key.time}</span>
                        </div>
                        <List data={key.list} />
                        <Link className="item-btn btn btn--primary" to={key.button_url} target="_blank" rel="noopener noreferrer"> {key.button_text}</Link>
                    </div>)}
        </div>
    )
}

export default Plans