import React from "react"
import Fade from 'react-reveal/Fade'
import Section from "../components/Common/Section"

function Team(props) {
  return (
    <Section className={'team bg-gray py-5'}>
      <Fade up>
        <div className="team-wrapper">
          {props.data.map((key, index) =>
            <div className="item mb-5" key={index}>
              <img className="mx-auto d-block" src={key.image.publicURL} alt={key.alt} />
              <div className="team-content">
                <h4 className="text-center">{key.name}</h4>
                <div className="text-center small-text mb-3"><b>{key.role}</b></div>
                <div className="small-text">{key.description}</div>
              </div>
            </div>)}
        </div>
      </Fade>
    </Section>
  )
}

export default Team