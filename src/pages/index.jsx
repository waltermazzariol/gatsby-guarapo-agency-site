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

import walter from "../assets/data/images/team/1.jpg"
import christian from "../assets/data/images/team/2.jpg"
import sergio from "../assets/data/images/team/3.jpg"
import Testimonial from "../components/Testimonial";

function IndexPage(props) {
const contentJson = props.data.allDataJson.edges[0].node
const blogJson = props.data.allWorkJson.edges
return (
<Layout nav={contentJson.navigation}>

  {/* Our Packages */}
  <Hero data={contentJson.hero} />

  {/* Our Packages */}
  <Section anchor={'portfolio'}>
    <Title title={contentJson.packages.title} />
  </Section>
  <Packages data={contentJson.packages} />

  {/* Our Process */}
  <Section anchor={'portfolio'}>
    <Title title={"¿Cómo funciona?"} />
  </Section>
  <Process />

  {/* Banner */}
  <Banner data={contentJson.banner} />


  {/* The team */}
  <Section anchor={'portfolio'}>
    <Title title={"Aunque sea todo online, contarás con la ayuda de uno de nuestros profesionales"} />
  </Section>
  <Section rowclassName="justify-content-center g-3">
    <Col className="d-flex justify-content-center"><img className="rounded" src={walter} alt="walter" /></Col>
    <Col className="d-flex justify-content-center"><img className="rounded" src={christian} alt="christian" /></Col>
    <Col className="d-flex justify-content-center"><img className="rounded" src={sergio} alt="sergio" /></Col>
    <div className="w-100"></div>
    <Col className="mt-4 d-flex justify-content-center">
    <Link className="item-btn item-btn_b btn btn--primary" to="/equipo" rel="noopener noreferrer"> Conoce al equipo</Link>
    </Col>
  </Section>

  {/* Reviews */}
  <Section anchor={'testimonial'}>
    {console.log(contentJson)}
    <Title title={contentJson.testimonials.title} />
  </Section>
  <Section className="testimonial" rowClass="g-3">
      {contentJson.testimonials.list.map((key,index) =>
        <Testimonial key={index} data={key} />
        )}
  </Section>

  {/* Our Process */}
  <Section anchor={'portfolio'}>
    <Title title={"Ellos confiaron en nosotros. Échale un vistazo a nuestros proyectos más reciente."} />
  </Section>
  <Portfolio data={blogJson} />
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