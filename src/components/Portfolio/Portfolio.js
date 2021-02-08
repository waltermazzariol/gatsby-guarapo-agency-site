import React from "react"
import Modal from "./Modal"
import Fade from 'react-reveal/Fade'
import Col from 'react-bootstrap/Col'

import { Router, Link } from "@reach/router";

export default class Portfolio extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modalShow: false,
      modalClientCurrent: 0,
    }
    this.handleModalClick = this.handleModalClick.bind(this);
    this.setModal = this.setModal.bind(this);
  }

  handleModalClick(clientId, e) {
    e.preventDefault();
    this.setModal(true, clientId);
  }

  setModal(isShown, clientId) {
    this.setState({
      modalShow: isShown,
      modalClientCurrent: clientId,
    });
  }

  render() {

    return (
      <>
        {this.props.data.list.map((key) =>
          <Col key={key.id} xs={6} md={3}>
            <Fade >
              <button className="btn btn-clean" onClick={this.handleModalClick.bind(this, key.id)} target="_blank" rel="noopener noreferrer">
                <img src={key.thumbnail.publicURL} alt={key.client} />
                <div className="img-hover">
                  <div className="title">{key.client}</div>
                  {key.cat === "Web" ? 
                  <div className="cat cat-web">{key.cat}</div> :
                  <div className="cat cat-marketing">{key.cat}</div>}
                  <div className="subtitle">{key.year}</div>
                </div>
              </button>
            </Fade>
          </Col>
        )}

        <Modal show={this.state.modalShow}
          onHide={() => this.setModal(false, 0)}
          data={this.props.data.list}
          currentClient={this.state.modalClientCurrent}
          tags={this.props.data.tags}
        >
        </Modal>
        
      </>
    )
  }
}