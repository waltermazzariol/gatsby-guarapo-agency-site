import React, {useState} from "react"
import project1 from "../assets/data/images/projects/1.jpg"
import project2 from "../assets/data/images/projects/2.jpg"
import project3 from "../assets/data/images/projects/3.jpg"
import project4 from "../assets/data/images/projects/4.jpg"
import project5 from "../assets/data/images/projects/5.jpg"
import project6 from "../assets/data/images/projects/6.jpg"
import { Modal } from "react-bootstrap"


function Projects({ color }) {
    const [show, setShow] = useState({show: false, img: "", alt: ""});

    return (<>
        <div className={`container-fluid project ${color}`}>
            <div className="project-title text-center mb-2"><span className="text-underline">Recent Projects</span></div>
            <div className="project-slider-wrapper">
                <div className="project-slider project-animation">
                    <button className="project-btn" onClick={()=>setShow({"show":true, "img":project3, "alt":"None Culture"})}><img className="project-img" src={project3} alt="None Culture" /></button>
                    <button className="project-btn" onClick={()=>setShow({"show":true, "img":project1, "alt":"Piel de oro"})}><img className="project-img" src={project1} alt="Piel de oro" /></button>
                    <button className="project-btn" onClick={()=>setShow({"show":true, "img":project2, "alt":"wansite.co"})}><img className="project-img" src={project2} alt="wansite.co" /></button>
                    <button className="project-btn" onClick={()=>setShow({"show":true, "img":project4, "alt":"EBB flow"})}><img className="project-img" src={project4} alt="EBB flow" /></button>
                    <button className="project-btn" onClick={()=>setShow({"show":true, "img":project5, "alt":"Guataca nights"})}><img className="project-img" src={project5} alt="Guataca nights" /></button>
                    <button className="project-btn" onClick={()=>setShow({"show":true, "img":project6, "alt":"baquirto de papel"})}><img className="project-img" src={project6} alt="baquirto de papel" /></button>
                    <button className="project-btn" onClick={()=>setShow({"show":true, "img":project3, "alt":"None Culture"})}><img className="project-img" src={project3} alt="None Culture" /></button>
                    <button className="project-btn" onClick={()=>setShow({"show":true, "img":project1, "alt":"Piel de oro"})}><img className="project-img" src={project1} alt="Piel de oro" /></button>
                    <button className="project-btn" onClick={()=>setShow({"show":true, "img":project2, "alt":"wansite.co"})}><img className="project-img" src={project2} alt="wansite.co" /></button>
                    <button className="project-btn" onClick={()=>setShow({"show":true, "img":project4, "alt":"EBB flow"})}><img className="project-img" src={project4} alt="EBB flow" /></button>
                    <button className="project-btn" onClick={()=>setShow({"show":true, "img":project5, "alt":"Guataca nights"})}><img className="project-img" src={project5} alt="Guataca nights" /></button>
                    <button className="project-btn" onClick={()=>setShow({"show":true, "img":project6, "alt":"Baquirto de papel"})}><img className="project-img" src={project6} alt="Baquirto de papel" /></button>
                </div>
            </div>
        </div>
        
        <Modal
            show={show.show}
            onHide={()=> setShow({show: false, img: "", alt: ""})}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className="project">
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    <img src={show.img} alt={show.alt} />
                </Modal.Body>
        </Modal>
        </>
    )
}

export default Projects