import React from "react"

// Libraries 
import { graphql } from "gatsby"
import { CookiesProvider } from 'react-cookie';

// Genneric Component
import CookiesConsent from "../components/Cookies"

// Core components
import Seo from "../components/Seo"
import Layout from "../components/Layout"
import Cover from "../components/Hero/Cover"
import Cards from "../components/Cards.jsx"
import Contact from "../components/Contact"
import Section from "../components/Common/Section"

function Work(props) {
  const contentJson = props.data.allDataJson.edges[0].node
  const generalJson = props.data.dataJson
  const workJson = props.data.allWorkJson

  return (
    <Layout nav={generalJson.navigation}>
      <Cover data={contentJson.cover} />
      <Section className={'bg-gray'}>
        <div className="col-12 pt-4"><a href="/">Inicio</a> / {contentJson.general.seo_title}</div>
      </Section>
      <Cards data={workJson.edges} />
      <Section anchor={'contact'} className={'contact bg-dark'} fluid={true} >
        <Contact data={generalJson.contact} />
      </Section>
      <CookiesProvider>
        <CookiesConsent data={generalJson.tags} />
      </CookiesProvider>
    </Layout>
  )
}

export default Work

export function Head(props) {
  return (
    <Seo
        page={'portafolio'}
        metas={props.data.allDataJson.edges[0].node.general}
      />
  )
}

export const data = graphql`
  query{
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
      allDataJson(filter: {general: {path: {eq: "/work"}}}) {
        edges {
          node {
          ...generalFields
          ...coverFields
        }  
        }
      }
    dataJson(general: {path: {eq: "/"}}) {
      ...contactFields
      ...tagsFields
      ...navigationFields
    }
  }
`
