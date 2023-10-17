import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

function Testimonial({data}) {
  return (
      <div className="col-12 col-md-6 col-lg-4 mb-4">
        <div className="row">
          <div className="col-2">
            <GatsbyImage className="img-circle" image={data.image.childImageSharp.gatsbyImageData} alt="Testimonial" />
          </div>
          <div className="col-10">
            <div className="testimonial-subbtitle-link" href="" target="_blank">
              <b>{data.name}</b>
            </div>
            <div className="testimonial-subtitle">
              {data.position}
            </div>
          </div>
        <div className="col-12 testimonial-title">
          {data.message}
        </div>
        </div>
      </div>
  )
};

export default Testimonial;
