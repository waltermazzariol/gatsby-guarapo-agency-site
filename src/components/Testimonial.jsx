import React from "react"

function Testimonial({data}) {
  return (
      <div className="col-4">
        <div className="row">
          <div className="col-2">
            <img loading="lazy" width={50} height={50} src={data.image.publicURL} alt="Testimonial" />
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
