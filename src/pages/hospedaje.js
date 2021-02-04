import React from "react"

// Libraries 
import { graphql } from "gatsby"
import { CookiesProvider } from 'react-cookie';

// Genneric Component
import CookiesConsent from "../components/Cookies.js"

// Core components
import Seo from "../components/Seo.js"
import Layout from "../components/Layout.js"
import PriceTable from "../components/PriceTable.jsx"
import Cover from "../components/Hero/Cover.js"
import Contact from "../components/Contact.js"
import Section from "../components/Common/Section"
import Title from "../components/Common/Title"


function TeamPage(props) {
    const contentJson = props.data.allDataJson.edges[0].node
    const generalJson = props.data.dataJson

    return (
        <Layout nav={contentJson.navigation}>

            <Seo
                page={'hospedaje'}
                title={contentJson.navigation.title}
                lang={contentJson.general.lang}
                metas={contentJson.general}
                image={contentJson.general.seo_image.publicURL}
            />
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
