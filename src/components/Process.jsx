import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

function Process({ data=[] }) {

    return (
      <div className="container process mt-5">
          {data.map((key)=>
            <div className="row gx-2 mb-5 justify-content-center" key={key.id}>
              <div className={`col-12 col-md-6 mb-4 d-flex flex-row ${ key.id % 2 === 0 ? `order-1 order-lg-2`: `order-1`}`}>
                <span className="process-number text-white">{key.id}</span>
                <span>
                  <h3>{key.title}</h3>
                  <p>{key.description}</p>
                </span>
              </div>
              <div className={`col-12 col-md-4 d-flex justify-content-center ${ key.id % 2 === 0 ? `order-2  order-lg-1`: `order-2`}`}>
                <GatsbyImage  image={key.image.childImageSharp.gatsbyImageData} alt="proceso" className="process-img"/>
              </div>
            </div>
          )}
      </div> )
}

export default Process