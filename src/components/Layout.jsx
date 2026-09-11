/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Navbar from "./Navbar"
import Section from "./Common/Section"
import Contact from "./Contact"
import "./layout.scss"
import logo from "../assets/images//guarapo_logo.svg"


const getScrollNode = (element) => {
  return element.ownerDocument.scrollingElement || element.ownerDocument.documentElement
}

const isScrolled = (element) => {
  const scrollNode = getScrollNode(element)
  return scrollNode.scrollTop > 0
}

export default class Layout extends React.Component {
  constructor(props) {
    super(props)
    this.siteContainer = React.createRef()
    this.state = {
      scrolled: false,
    }
    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
    const element = this.siteContainer.current
    this.setState({
      scrolled: isScrolled(element),
    })
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll)
  }

  handleScroll() {
    const element = this.siteContainer.current
    this.setState({
      scrolled: isScrolled(element),
    })
  }

  render() {
    let className = "site-container"
    if (this.props.className) className += ` ${this.props.className}`
    if (this.state.scrolled) className += " navbar-scrolled"

    return (
      <div
        className={className}
        ref={this.siteContainer}
        id="page-top">
        <Navbar nav={this.props.nav}/>
        <main>{this.props.children}</main>
        <footer>
          <Section anchor="contact" className="contact bg-dark" fluid={true}>
            <Contact data={this.props.contact} />
          </Section>
          <div className="footer">
            <div className="container">
              <div className="footer-text">Copyright &copy; 2014 - {(new Date().getFullYear())} - <a href="https://guarapomedia.com" target="_blank" rel="noopener noreferrer"><img src={logo} className="icon icon-logo" alt="Logo Guarapo Media" /></a></div>
            </div>
          </div>
        </footer>
      </div>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  contact: PropTypes.object.isRequired,
}