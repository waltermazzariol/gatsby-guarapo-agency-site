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
                            <Link to={key.node.parent.name}>
                                <img className="mx-auto d-block" src={key.node.thumbnail.publicURL} alt={key.node.alt} />
                                <div className="work-content text-center ">
                                    <h4>{key.node.client}</h4>
                                    {key.node.cat === "Web" ? 
                                    <div className="cat cat-web">{key.node.cat}</div> :
                                    <div className="cat cat-marketing">{key.node.cat}</div>}
                                </div>
                            </Link>
                        </div>)}
                </div>
            </Fade>
        </Section>
    )
}

export default Cards