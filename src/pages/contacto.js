import React from "react"

// Libraries 
import { graphql } from "gatsby"
import { CookiesProvider } from 'react-cookie';
import Col from "react-bootstrap/Col"

// Genneric Component
import CookiesConsent from "../components/Cookies.js"

// Core components
import Seo from "../components/Seo.js"
import Layout from "../components/Layout.js"
import Section from "../components/Common/Section"
import Title from "../components/Common/Title"
import Cover from "../components/Hero/Cover.js"
import Form from "../components/Form"
import Contact from "../components/Contact.js"

// Assets
import seoImg from '../data/images/seo.jpg'

function ContactPage(props) {
  const contentJson = props.data.allDataJson.edges[0].node
  return (
    <Layout nav={contentJson.navigation}>

      <Seo
        page={'inicio'}
        title={contentJson.navigation.title}
        lang={contentJson.general.lang}
        metas={contentJson.general}
        image={seoImg}
      />
      <Cover data={contentJson.cover} />
      <Section anchor={'form'} className={'form py-5'} rowClass={'justify-content-md-center'}>
        <Title title={contentJson.form.title} subtitle={contentJson.form.description}/>
        <Col sm={12} md={6}>
            {contentJson.form.contacts.map((key)=> 
                <div className="mb-4" key={key.id}>
                    <h5>{key.city}</h5>
                    <p>{key.name}</p>
                    <p>{key.phone}</p>
                    <p>{key.email}</p>
                </div>
            )}
        </Col>
        <Col sm={12} md={6}>
          <Form data={contentJson.form} />
        </Col>
      </Section>
      <Section anchor={'contact'} className={'contact bg-dark'} fluid={true} noGutters={true}>
        <Contact data={contentJson.contact} />
      </Section>
      <CookiesProvider>
        <CookiesConsent data={contentJson.tags} />
      </CookiesProvider>
    </Layout>
  )
}

export default ContactPage


export const data = graphql`
  query{
    allDataJson(filter: {general: {path: {eq: "/contacto"}}}) {
      edges {
        node {
            ...generalFields
            ...navigationFields
            ...coverFields
            ...formFields
            ...contactFields
            ...tagsFields
        }  
      }
    }
  }
`
