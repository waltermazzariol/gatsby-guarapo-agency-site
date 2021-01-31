import React from "react"
import Carousel from 'react-bootstrap/Carousel'
import Fade from 'react-reveal/Fade'
import Bounce from 'react-reveal/Bounce'

import image2 from '../../images/assets/slider-img-2.png'
import image3 from '../../images/assets/slider-img-3.png'
import image4 from '../../images/assets/slider-img-4.png'
import image5 from '../../images/assets/slider-img-5.png'
import image6 from '../../images/assets/slider-img-6.png'
import image7 from '../../images/assets/slider-img-7.png'

import bot from '../../data/images/bot.png'

function Slider(props) {
    var bg = props.data.image.publicURL

    return (
        <section className="slider">
            <Carousel controls={false}>
                <Carousel.Item className="slider-wrapper--blue" >
                    <Carousel.Caption>
                        <div className="container slider-wrapper">
                            <Fade left>
                                <span className="sl-img-2">
                                    <img src={image2} alt="figure" />
                                </span>
                            </Fade>
                            <Bounce up>
                                <span className="sl-img-3">
                                    <img src={image3} alt="figure" />
                                </span>
                            </Bounce>
                            <Fade>
                                <span className="sl-img-4">
                                    <img src={image4} alt="figure" />
                                </span>
                            </Fade>
                            <Fade up>
                                <span className="sl-img-5">
                                    <img src={image5} alt="figure" />
                                </span>
                            </Fade>
                            <Fade down>
                                <span className="sl-img-6">
                                    <img src={image6} alt="figure" />
                                </span>
                            </Fade>
                            <Fade>
                                <span className="sl-img-7">
                                    <img src={image7} alt="figure" />
                                </span>
                            </Fade>
                            <div className="slider-item">
                                <Fade>
                                    <img className="circle" src={bg} alt="escuela nanos" />
                                </Fade>
                            </div>
                            <div className="slider-item">
                                <Fade>
                                    <h1 className="slider-title">{props.data.title}</h1>
                                    <div className="slider-subtitle">{props.data.subtitle}</div>
                                    <button className="btn btn-bg btn-bg--green my-3 mr-4"><a href="https://wa.me/34630563184" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp"></i> Chat</a></button>
                                    <button className="btn btn-bg btn-bg--red my-3"><a href="tel:+34630563184" target="_blank" rel="noopener noreferrer"><i className="fas fa-phone fa-flip-horizontal"></i> Llámanos</a></button>
                                </Fade>
                            </div>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item  className="slider-wrapper--green" >
                    <Carousel.Caption>
                        <div className="container slider-wrapper">
                            <Fade left>
                                <span className="sl-img-2">
                                    <img src={image2} alt="figure" />
                                </span>
                            </Fade>
                            <Fade>
                                <span className="sl-img-4">
                                    <img src={image4} alt="figure" />
                                </span>
                            </Fade>
                            <Fade up>
                                <span className="sl-img-5">
                                    <img src={image5} alt="figure" />
                                </span>
                            </Fade>
                            <Fade down>
                                <span className="sl-img-6">
                                    <img src={image6} alt="figure" />
                                </span>
                            </Fade>
                            <Fade>
                                <span className="sl-img-7">
                                    <img src={image7} alt="figure" />
                                </span>
                            </Fade>
                            <div className="slider-item">
                                <Fade>
                                    <img className="circle" src={bot} alt="escuela nanos" />
                                </Fade>
                            </div>
                            <div className="slider-item">
                                <Fade>
                                    <h1 className="slider-title">Campamento de verano 2020</h1>
                                    <div className="slider-subtitle">Como todos los años puedes disfrutar del campamento urbano de nanos. La mejor amplitud horaria (06:00 - 20:30), durante todo el verano (julio, agosto y septiembre) y con muchas sorpresas más</div>
                                    <button className="btn btn-bg btn-bg--green my-3 mr-4"><a href="https://wa.me/34630563184" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp"></i> Chat</a></button>
                                    <button className="btn btn-bg btn-bg--red my-3"><a href="tel:+34630563184" target="_blank" rel="noopener noreferrer"><i className="fas fa-phone fa-flip-horizontal"></i> Llámanos</a></button>
                                </Fade>
                            </div>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </section>)
}

export default Slider;