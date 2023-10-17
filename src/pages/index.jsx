import React from "react"
import { Link } from "gatsby";
// Libraries
import { graphql } from "gatsby"
import { CookiesProvider } from 'react-cookie';

// Genneric Component
import Section from "../components/Common/Section"
import Title from "../components/Common/Title"
import CookiesConsent from "../components/Cookies"

// Core components
import Seo from "../components/Seo"
import Layout from "../components/Layout"
import Hero from "../components/Hero/Hero"

// import Banner from "../components/Banner"
import Packages from "../components/Packages"
import Contact from "../components/Contact"
import Portfolio from "../components/Portfolio/Portfolio"

import Process from "../components/process";
import Banner from "../components/Banner";
import { Col } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image"
import Testimonial from "../components/Testimonial";

function IndexPage(props) {
const contentJson = props.data.allDataJson.edges[0].node
const blogJson = props.data.allWorkJson.edges
return (
<Layout nav={contentJson.navigation}>

  {/* Hero */}
  <Hero data={contentJson.hero} />

  {/* Our Packages */}
  <Section anchor={'package'} className={"mt-5"}>
    <Title title={contentJson.packages.title} />
  </Section>
  <Packages data={contentJson.packages}/>

  {/* Our Process */}
  <Section anchor={'process'} className={"mt-5"}>
      <Title title={contentJson.process.title} />
      <Process data={contentJson.process.list}/>
  </Section>

  {/* Banner */}
  <Banner data={contentJson.banner} />


  {/* The team */}
  <Section anchor={'team'} className={"mt-5"}>
    <Title title={"Aunque sea todo online, contarás con la ayuda de uno de nuestros profesionales"} />
  </Section>
  <Section rowclassName="justify-content-center g-3">
    <Col className="d-flex justify-content-center mb-3"><StaticImage className="rounded" src={"../assets/data/images/team/1.jpg"} alt="walter" /></Col>
    <Col className="d-flex justify-content-center mb-3"><StaticImage className="rounded" src={"../assets/data/images/team/2.jpg"} alt="christian" /></Col>
    <Col className="d-flex justify-content-center mb-3"><StaticImage className="rounded" src={"../assets/data/images/team/3.jpg"} alt="sergio" /></Col>
    <div className="w-100"></div>
    <Col className="mt-4 d-flex justify-content-center">
    <Link className="item-btn item-btn_b btn btn--primary" to="/equipo" rel="noopener noreferrer"> Conoce al equipo</Link>
    </Col>
  </Section>

  {/* Testimonials */}
  <Section anchor={'testimonial'} className={"mt-5"} rowClass="g-3">
    <Title title={contentJson.testimonials.title} />
    {contentJson.testimonials.list.map((key,index) =>
        <Testimonial key={index} data={key} />
        )}  
    </Section>

  {/* Portfolio */}
  <Section anchor={'portfolio'} className={"mt-5"}>
    <Title title={"Ellos confiaron en nosotros. Échale un vistazo a nuestros proyectos más reciente."} />
  </Section>
  <Portfolio data={blogJson} />
  
  {/* Contact */}
  <Section anchor={'contact'} className={'contact bg-dark'} fluid={true}>
    <Contact data={contentJson.contact} />
  </Section>
  
  <CookiesProvider>
    <CookiesConsent data={contentJson.tags} />
  </CookiesProvider>
</Layout>
)
}

export default IndexPage

export function Head(props) {
return (
<Seo page={'inicio'} metas={props.data.allDataJson.edges[0].node.general} />
)
}

export const imageData = graphql`
query{
allDataJson(filter: {general: {path: {eq: "/"}}}) {
edges {
node {
...aboutFields
...contactFields
...generalFields
...heroFields
...navigationFields
...tagsFields
...bannerFields
...packagesFields
...processFields
...testimonialsFields
}
}
}
allWorkJson(sort: {date: DESC}) {
edges {
node {
id
client
alt
cat
city
date
tags
image{
publicURL
childImageSharp {
gatsbyImageData
}
}
thumbnail{
publicURL
childImageSharp {
gatsbyImageData
}
}
url
year
description
parent {
... on File {
relativeDirectory
name
}
}
}
}
}
}
`