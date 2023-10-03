import React from "react"

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
import Contact from "../components/Contact"
import Portfolio from "../components/Portfolio/Portfolio"
import PriceTable from "../components/PriceTable"
import Process from "../components/process";
import Banner from "../components/Banner";
import FormServices from "../components/FormServices";


function WebPage(props) {
  const contentJson = props.data.allDataJson.edges[0].node
  const generalJson = props.data.dataJson
  const blogJson = props.data.allWorkJson.edges

  return (
    <Layout nav={contentJson.navigation}>
      <Hero data={contentJson.hero} />
      <Section>
        <div className="col-12 pt-4"><a href="/">Inicio</a> / {contentJson.general.seo_title}</div>
      </Section>      
      
      
       {/* Our Packages */}
      <Section anchor={'portfolio'}>
        <Title title={contentJson.packages.title} />
      </Section>
      
      {/* Packs */}
      <PriceTable data={contentJson.packages.items}/>
      
      {/* Our Process */}
      <Section anchor={'portfolio'}>
        <Title title={"¿Cómo funciona?"} />
        <Process />
      </Section>

      {/* Banner */}
      <Banner data={contentJson.banner} />

      {/* Form Services*/}
      <Section anchor={'portfolio'} className={'portfolio'} rowClass="justify-content-center" >
        <Title title={"Cuéntanos sobre tu proyecto"} />
        <div className="col-12 col-md-6">
          <FormServices data={contentJson.form} tags={generalJson.tags}/>
        </div>
      </Section>

      <Section anchor={'portfolio'} className={'portfolio'} fluid={true} rowClass={"g-0"}>
        <Title title={contentJson.portfolio.title} />
        <Portfolio data={blogJson} />
      </Section>

      <Section anchor={'contact'} className={'contact bg-dark'} fluid={true} >
        <Contact data={generalJson.contact} />
      </Section>
      
      <CookiesProvider>
        <CookiesConsent data={generalJson.tags} />
      </CookiesProvider>
    </Layout>
  )
}

export default WebPage

export function Head(props) {
  return (
    <Seo
        page={'web'}
        metas={props.data.allDataJson.edges[0].node.general}
      />
  )
}

export const imageData = graphql`
  query{
    allDataJson(filter: {general: {path: {eq: "/desarrollo-web"}}}) {
      edges {
        node {
        ...generalFields
        ...navigationFields
        ...heroFields
        ...bannerFields
        ...portfolioFields
        ...packagesFields
        ...formFields
        }  
      }
    }
    dataJson(general: {path: {eq: "/"}}) {
      ...contactFields
      ...tagsFields
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
