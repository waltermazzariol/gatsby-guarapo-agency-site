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
import Team from "../components/Team.jsx"
import Contact from "../components/Contact.js"
import Section from "../components/Common/Section"

function TeamPage(props) {
  const contentJson = props.data.allDataJson.edges[0].node
  const generalJson = props.data.dataJson

  return (
    <Layout nav={contentJson.navigation}>

      <Seo
        page={'equipo'}
        title={contentJson.navigation.title}
        lang={contentJson.general.lang}
        metas={contentJson.general}
        image={contentJson.general.seo_image.publicURL}
      />
      <Cover data={contentJson.cover} />
      <Team data={contentJson.team} />
      <Section anchor={'contact'} className={'contact bg-dark'} fluid={true} noGutters={true}>
        <Contact data={generalJson.contact} />
      </Section>
      <CookiesProvider>
        <CookiesConsent data={generalJson.tags} />
      </CookiesProvider>
    </Layout>
  )
}

export default TeamPage


export const data = graphql`
  query{
    allDataJson(filter: {general: {path: {eq: "/equipo"}}}) {
      edges {
        node {
            ...generalFields
            ...navigationFields
            ...coverFields
            ...teamFields
            ...contactFields
            ...tagsFields
        }  
      }
    }
    dataJson(general: {path: {eq: "/"}}) {
      ...contactFields
      ...tagsFields
    }
  }
`
