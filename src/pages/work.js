import React from "react"

// Libraries 
import { graphql } from "gatsby"
import { CookiesProvider } from 'react-cookie';

// Genneric Component
import CookiesConsent from "../components/Cookies.js"

// Core components
import Seo from "../components/Seo.js"
import Layout from "../components/Layout.js"
import Cover from "../components/Hero/Cover.js"
import Cards from "../components/Cards.jsx"
import Contact from "../components/Contact.js"
import Section from "../components/Common/Section"

function Work(props) {
  const contentJson = props.data.allDataJson.edges[0].node
  const generalJson = props.data.dataJson
  const workJson = props.data.allWorkJson
  console.log(workJson)

  return (
    <Layout nav={contentJson.navigation}>

      <Seo
        page={'portfolio'}
        title={contentJson.general.seo_title}
        lang={contentJson.general.lang}
        metas={contentJson.general}
      />
      <Cover data={contentJson.cover} />
      <Cards data={workJson.edges} />
      <Section anchor={'contact'} className={'contact bg-dark'} fluid={true} noGutters={true}>
        <Contact data={generalJson.contact} />
      </Section>
      <CookiesProvider>
        <CookiesConsent data={generalJson.tags} />
      </CookiesProvider>
    </Layout>
  )
}

export default Work


export const data = graphql`
  query{
    allWorkJson(sort: {fields: date, order: DESC}) {
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
          }
          thumbnail{
            publicURL
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
          ...navigationFields
          ...coverFields
        }  
        }
      }
    dataJson(general: {path: {eq: "/"}}) {
      ...contactFields
      ...tagsFields
    }
  }
`
