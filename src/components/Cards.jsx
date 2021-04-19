import React from "react"
import Fade from 'react-reveal/Fade'
import Section from "../components/Common/Section"
import { Link } from "gatsby"

function Cards(props) {
    console.log(props)
    return (
        <Section className={'work bg-gray py-5'}>
            <Fade up>
                <div className="work-wrapper">
                    {props.data.map((key) =>
                        <div className="item mb-5" key={key.node.id}>
                            <Link to={key.node.parent.name} className="d-flex flex-column justify-content-center">
                                <img className="mx-auto d-block" src={key.node.thumbnail.publicURL} alt={key.node.alt} />
                                {key.node.cat === "Web" ?
                                    <div className="work-cat work-cat-web text-center">{key.node.cat}</div> :
                                    <div className="work-cat work-cat-marketing text-center">{key.node.cat}</div>}
                                <h4 className="work-title">{key.node.client}</h4>
                            </Link>
                        </div>)}
                </div>
            </Fade>
        </Section>
    )
}

export default Cards