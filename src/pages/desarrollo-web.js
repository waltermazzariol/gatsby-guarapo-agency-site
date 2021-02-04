import React from "react"

// Libraries 
import { graphql } from "gatsby"
import { CookiesProvider } from 'react-cookie';

// Genneric Component
import Section from "../components/Common/Section"
import Title from "../components/Common/Title"
import CookiesConsent from "../components/Cookies.js"

// Core components
import Seo from "../components/Seo.js"
import Layout from "../components/Layout.js"
import Hero from "../components/Hero/Hero.js"
import About from "../components/About"
import Banner from "../components/Banner"
import BannerPlant from "../components/BannerPlant"
import ClientType from "../components/ClientType"
import Services from "../components/Services"
import Contact from "../components/Contact.js"
import Portfolio from "../components/Portfolio/Portfolio.js"

function WebPage(props) {
  const contentJson = props.data.allDataJson.edges[0].node
  const generalJson = props.data.dataJson

  return (
    <Layout nav={contentJson.navigation}>

      <Seo
        page={'web'}
        title={contentJson.navigation.title}
        lang={contentJson.general.lang}
        metas={contentJson.general}
        image={contentJson.general.seo_image.publicURL}
      />
      <Hero data={contentJson.hero} />
      <About data={contentJson.about} />
      <Banner data={contentJson.banner} />
      <BannerPlant data={contentJson.banner_2} />
      <ClientType data={contentJson.client_type} />
      <Services data={contentJson.services} />
      <Section anchor={'portfolio'} className={'portfolio bg-gray '} fluid={true} noGutters={true}>
        <Title title="Nuestros Proyectos" />
        <Portfolio data={generalJson.portfolio} />
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

export default WebPage


export const imageData = graphql`
  query{
    allDataJson(filter: {general: {path: {eq: "/desarrollo-web"}}}) {
      edges {
        node {
        ...generalFields
        ...navigationFields
        ...heroFields
        ...aboutFields
        ...bannerFields
        ...clientTypeFields
        ...banner2Fields
        ...servicesFields
        ...portfolioFields
        ...contactFields
        ...tagsFields
        }  
      }
    }
    dataJson(general: {path: {eq: "/"}}) {
      ...contactFields
      ...tagsFields
      ...portfolioFields
    }
  }
`
