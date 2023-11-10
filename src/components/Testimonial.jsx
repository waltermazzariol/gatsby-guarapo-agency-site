import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

function Testimonial({data}) {
  return (
      <div className="col-10 col-md-6 col-lg-4 mb-4">
        <div className="d-flex flex-column testimonial bg-second-color">
          <div className="testimonial-message mb-4">
            {data.message}
          </div>
          <div className="d-flex flex-row mt-auto">
              <GatsbyImage className="testimonial-img img-circle" image={data.image.childImageSharp.gatsbyImageData} alt="Testimonial" />
              <div className="d-flez flex-column">
                <div className="testimonial-subtitle-link">{data.name}</div>
                <div className="testimonial-subtitle">{data.position}</div>
              </div>
          </div>
        </div>
      </div>
  )
};

export default Testimonial;
