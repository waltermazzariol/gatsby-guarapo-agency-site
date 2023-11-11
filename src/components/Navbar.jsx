import React from "react"
import { Navbar, Nav } from "react-bootstrap"
import { Link } from "gatsby"
import Logo from "../assets/data/images/logo.svg"

function NavBar(props) {
  return (
    <Navbar className="navbar navbar-expand-lg navbar-light fixed-top py-0" id="mainNav" expand="lg" collapseOnSelect={true}>
      <div className="container">
        <Navbar.Toggle aria-controls="navbarResponsive" />

        <Link className="navbar-brand" to='/'><img src={Logo} alt="logo" /></Link>

        <Link className="button button--primary d-sm-block d-md-block d-lg-none" to={props.nav.cta_link}>Empezar</Link>
        <Navbar.Collapse id="navbarResponsive">
          <Nav className="navbar-nav ms-auto my-2 my-lg-0">
            <div className="navbar-nav"
              items={['price']}
              rootel={"#mainNav"} offset={-75}>
              {props.nav.menu.map((key) =>
                <li key={key.nav} className={`nav-item ${key.anchor}`}>
                  <Link className="nav-link nav-link-ltr" to={key.link}>{key.nav}</Link>
                </li>
                )}
            </div>
          </Nav>
        </Navbar.Collapse>
        <Link className="button button--primary d-none d-lg-block" to={props.nav.cta_link}>Empezar</Link>
      </div>
    </Navbar>
  );
}

export default NavBar