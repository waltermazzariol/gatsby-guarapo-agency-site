import React from "react"
// import { Link } from "gatsby";
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
import Packages from "../components/PriceTable"
import Contact from "../components/Contact"
import Portfolio from "../components/Portfolio/Portfolio"

import Process from "../components/Process";
import Banner from "../components/Banner";
// import { Col } from "react-bootstrap";
// import { StaticImage } from "gatsby-plugin-image"
import Testimonial from "../components/Testimonial";
// import InfiniteSlider from "../components/InfiniteSlider";

function IndexPage(props) {
const contentJson = props.data.allDataJson.edges[0].node
const blogJson = props.data.allWorkJson.edges
return (
<Layout nav={contentJson.navigation}>

  {/* Hero */}
  <Hero data={contentJson.hero} color="bg-yellow"/>

  {/* Our Process */}
  <Section anchor={'process'} className={"mt-5"}>
      <Title title={contentJson.process.title} subtitle={contentJson.process.description}/>
      <Process data={contentJson.process.list}/>
  </Section>

  {/* Scope */}
  <Section anchor={'scope mt-5'}>
    <Title title={contentJson.scope.title} subtitle={contentJson.scope.description}/>
    <div className="Container scope">
      <div className="row">
        {contentJson.scope.list.map((key,index)=>
          <div key={index} className="col-12 col-md-4">
            <div className="scope-underline">{key.text}</div>
        </div>
        )}
        </div>
    </div>
  </Section>

  {/* Our Packages */}
  <Section anchor={'packages'} className={"mt-5"}>
    <Title title={contentJson.packages.title} subtitle={contentJson.packages.description}/>
  </Section>
  <Packages data={contentJson.packages.items} tagline={contentJson.packages.tagline}/>

  {/* Banner */}
  <Banner data={contentJson.banner} />

  {/* Testimonials */}
  <Section anchor={'testimonial'} className={"mt-5 testimonial"} rowClass="g-3 justify-content-center">
    <Title title={contentJson.testimonials.title} subtitle={contentJson.testimonials.description}/>
      <div className="carousel carousel-fade">
        <div className="carousel-x g-2">
          {contentJson.testimonials.list.slice(0, 4).map((key,index) =>
            <Testimonial key={index} data={key} />
            )}  
        </div>
        <div className="carousel-reverse g-2">
          {contentJson.testimonials.list.slice(5, 13).map((key,index) =>
            <Testimonial key={index} data={key} />
            )}  
        </div>
      </div>
    </Section>

  {/* Portfolio */}
  <Section anchor={'portfolio'} className={"mt-5"}>
    <Title title={contentJson.tags.portfolio_title} subtitle={contentJson.tags.portfolio_subtitle} />
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
         <Seo metas={props.data.allDataJson.edges[0].node.general} />
       )
}

export const contentData = graphql`
query{
allDataJson(filter: {general: {path: {eq: "/"}}}) {
edges {
node {
...contactFields
...generalFields
...heroFields
...navigationFields
...tagsFields
...bannerFields
...packagesFields
...processFields
...testimonialsFields
...scopeFields
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