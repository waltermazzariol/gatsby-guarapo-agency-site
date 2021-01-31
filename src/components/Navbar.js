import React from "react"
import { Navbar, Nav } from "react-bootstrap"
import { Link } from "gatsby"

function NavBar(props) {
  return (
    <Navbar className="navbar navbar-expand-lg navbar-light fixed-top py-0" id="mainNav" expand="lg" collapseOnSelect={true}>
      <div className="container">
        <Navbar.Toggle aria-controls="navbarResponsive" />

        <Link className="navbar-brand" to='/'><img src={props.nav.logo_url.publicURL} alt="logo" /></Link>

        <div className="btn btn-icon btn--primary d-sm-block d-md-block d-lg-none"><a href={props.nav.cta_link} target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp" aria-label="contact button"></i></a></div>
        <Navbar.Collapse id="navbarResponsive">
          <Nav className="navbar-nav ml-auto my-2 my-lg-0">
            <div className="navbar-nav"
              items={['price']}
              rootel={"#mainNav"} offset={-75}>
              {props.nav.menu.map((key) =>
                <li key={key.nav} className="nav-item">
                  <Link className="nav-link nav-link-ltr" to={key.link}>{key.nav}</Link>
                </li>
                )}
            </div>
          </Nav>
        </Navbar.Collapse>
        <div className="btn btn-icon btn--primary d-none d-lg-block"><a href={props.nav.cta_link} target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp" aria-label="contact button"></i></a></div>
      </div>
    </Navbar>
  );
}

export default NavBar