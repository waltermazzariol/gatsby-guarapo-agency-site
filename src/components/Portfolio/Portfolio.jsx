import React from "react"
import {Container, Row, Col} from 'react-bootstrap'
import { Link } from 'gatsby'

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
      <Container fluid className="portfolio">
        <Row className="g-0">
        {this.props.data.slice(0, 8).map((key) =>
          <Col key={key.node.id} xs={6} sm={6} md={3}>
              <Link className="btn btn-clean" to={`/${key.node.parent.relativeDirectory}/${key.node.parent.name}`}>
                <img srcSet={key.node.thumbnail.childImageSharp.gatsbyImageData.images.fallback.srcSet} alt={key.node.client} />
                <div className="img-hover">
                  <div className="title">{key.node.client}</div>
                  {key.node.cat === "Web" ? 
                  <div className="cat cat-web">{key.node.cat}</div> :
                  <div className="cat cat-marketing">{key.node.cat}</div>}
                  <div className="subtitle">{key.node.year}</div>
                </div>
              </Link>
          </Col>
        )}        
      </Row>
      </Container>
    )
  }
}