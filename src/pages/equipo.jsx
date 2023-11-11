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
import Team from "../components/Team.jsx"
import Contact from "../components/Contact"
import Section from "../components/Common/Section"

function TeamPage(props) {
  const contentJson = props.data.allDataJson.edges[0].node
  const generalJson = props.data.dataJson

  return (
    <Layout nav={generalJson.navigation}>
      <Cover data={contentJson.cover} />
      <Section className={'bg-gray'}>
        <div className="col-12 pt-4 small"><a href="/">Inicio</a> / Equipo</div>
      </Section>      <Team data={contentJson.team} />
      <Section anchor={'contact'} className={'contact bg-dark'} fluid={true}>
        <Contact data={generalJson.contact} />
      </Section>
      <CookiesProvider>
        <CookiesConsent data={generalJson.tags} />
      </CookiesProvider>
    </Layout>
  )
}

export default TeamPage

export function Head(props) {
  return (
    <Seo
        page={'equipo'}
        metas={props.data.allDataJson.edges[0].node.general}
      />
  )
}
export const data = graphql`
  query{
    allDataJson(filter: {general: {path: {eq: "/equipo"}}}) {
      edges {
        node {
            ...generalFields
            ...coverFields
            ...teamFields
            ...tagsFields
        }  
      }
    }
    dataJson(general: {path: {eq: "/"}}) {
      ...contactFields
      ...navigationFields
      ...tagsFields
    }
  }
`
