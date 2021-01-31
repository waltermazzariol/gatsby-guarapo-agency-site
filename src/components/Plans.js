import React from "react"
import Fade from 'react-reveal/Fade';
import List from "./Common/List"

function Plans({ data }) {

  return (
    <div className="price-wrapper">
      {data.map((key, index) =>
        <div key={index} className="price-item">
            <Fade>
              <img src={key.icon.publicURL} className="mb-2" alt={`icon-${index}`} />
              <h3 className="price-item--title">{key.title}</h3>
              <p className="price-item--description">{key.description}</p>
              <List data={key.list} />
              <p className="price-item--price">{key.price}</p>
              <center><button className="btn btn-bg btn-bg--outline mt-1"><a href="https://wa.me/34630563184" target="_blank" rel="noopener noreferrer"><i class="fab fa-whatsapp"></i> Chat</a></button></center>
            </Fade>
        </div>)}
    </div>
  )
}

export default Plans