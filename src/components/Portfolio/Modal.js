import React from "react"
import { Modal } from "react-bootstrap"

const ModalLocation = ({ show, onHide, data, currentClient, tags }) => {

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
      <Modal.Header closeButton>
        <span>{data[currentClient].client}</span>
      </Modal.Header>
      <Modal.Body>
        <div className="portfolio-modal">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-6 portfolio-modal--body">
                <ul className="fa-ul portfolio-modal--text">
                  {data[currentClient].city !== "" ?
                    <li>
                      <span className="fa-li">
                        <i className="fas fa-location-arrow"></i>
                      </span><b>{tags.city}:</b> <a href={data[currentClient].city}>{data[currentClient].city}</a>
                    </li> : ""}
                  {data[currentClient].url !== "" ?
                    <li>
                      <span className="fa-li">
                        <i className="fas fa-share"></i>
                      </span><b>{tags.url}:</b> <a href={data[currentClient].url}>{data[currentClient].url}</a>
                    </li> : ""}
                  {data[currentClient].year !== "" ?
                    <li>
                      <span className="fa-li">
                        <i className="fas fa-calendar-alt"></i>
                      </span><b>{tags.year}:</b> {data[currentClient].year}
                    </li> : ""}
                  {data[currentClient].tags !== "" ?
                    <li>
                      <span className="fa-li">
                        <i className="fas fa-star"></i>
                      </span>{data[currentClient].tags}
                    </li> : ""}
                    {data[currentClient].description !== "" ?
                    <li>
                      {data[currentClient].description.split("\n").map((item, i) => <p key={i}>{item}</p>)}
                    </li> : ""}
                </ul>
                {data[currentClient].url !== "" ?
                  <a className="btn btn--primary my-3 ml-0" href={data[currentClient].url}>Visitar Web</a>
                  : ""}
              </div>
              <div className="col-sm-12 col-md-6 portfolio-modal">

                <img src={data[currentClient].image.publicURL} className="img-fluid" alt={data[currentClient].title} />
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default ModalLocation