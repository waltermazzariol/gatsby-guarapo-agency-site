import React from "react"
import Projects from "../Projects"

function Hero({data,color}) {

  return (
    <div as={"header"} className={`container-fluid hero ${color}`}>
      <div className="row g-0 justify-content-center text-center">
        <div className="col-11 hero-pre-title" dangerouslySetInnerHTML={{ __html: data.pretitle }}></div>
        <h1 className="col-11 hero-title" dangerouslySetInnerHTML={{ __html: data.title }}></h1>
        <div className="col-11 hero-subtitle" dangerouslySetInnerHTML={{ __html: data.subtitle }}></div>
        <div className="hero-button">
          <a className="button button--primary button--big" href={data.button_url}>{data.button_text}</a>
        </div>
        <Projects />
      </div>
    </div>
  )
}

export default Hero