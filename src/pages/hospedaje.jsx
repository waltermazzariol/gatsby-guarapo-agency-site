import React from "react"

// Libraries 
import { graphql } from "gatsby"
import { CookiesProvider } from 'react-cookie';

// Genneric Component
import CookiesConsent from "../components/Cookies"

// Core components
import Seo from "../components/Seo"
import Layout from "../components/Layout"
import PriceTable from "../components/PriceTable.jsx"
import Cover from "../components/Hero/Cover"
import Contact from "../components/Contact"
import Section from "../components/Common/Section"
import Title from "../components/Common/Title"


function TeamPage(props) {
    const contentJson = props.data.allDataJson.edges[0].node
    const generalJson = props.data.dataJson

    return (
        <Layout nav={contentJson.navigation}>
            <Cover data={contentJson.cover} />
            <Section className={'price bg-gray'}>
                <Title title={contentJson.packages.title} />
                <PriceTable data={contentJson.packages.items} />
            </Section>
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

export function Head(props) {
    return (
      <Seo
          page={'hospedaje-web'}
          metas={props.data.allDataJson.edges[0].node.general}
        />
    )
  }

export const data = graphql`
  query{
    allDataJson(filter: {general: {path: {eq: "/hospedaje-web"}}}) {
      edges {
        node {
            ...generalFields
            ...navigationFields
            ...coverFields
            ...packagesFields
        }  
      }
    }
    dataJson(general: {path: {eq: "/"}}) {
        ...contactFields
        ...tagsFields
      }
  }
`
