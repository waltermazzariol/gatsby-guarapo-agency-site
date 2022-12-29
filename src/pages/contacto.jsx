import React from "react"

// Libraries 
import { graphql } from "gatsby"
import { CookiesProvider } from 'react-cookie';
import Col from "react-bootstrap/Col"

// Genneric Component
import CookiesConsent from "../components/Cookies"

// Core components
import Seo from "../components/Seo"
import Layout from "../components/Layout"
import Section from "../components/Common/Section"
import Title from "../components/Common/Title"
import Cover from "../components/Hero/Cover"
import Form from "../components/Form"
import Contact from "../components/Contact"

function ContactPage(props) {
  const contentJson = props.data.allDataJson.edges[0].node
  const generalJson = props.data.dataJson

  return (
    <Layout nav={contentJson.navigation}>

      <Seo
        page={'contacto'}
        metas={contentJson.general}
      />
      <Cover data={contentJson.cover} />
      <Section anchor={'form'} className={'form py-5'} rowClass={'justify-content-md-center'}>
        <Title title={contentJson.form.title} subtitle={contentJson.form.description}/>
        <Col sm={12} md={6}>
            {contentJson.form.contacts.map((key)=> 
                <div className="mb-4" key={key.id}>
                    {!!key.city ? <h5>{key.city}</h5>:""}
                    {!!key.name ?<p className="form-text"><strong>{key.name}</strong></p>:""}
                    {!!key.number ?<a className="form-text" href={`https://wa.me/${key.phone}`}><i className="fab fa-whatsapp"></i> {key.number}</a>:""}
                    {!!key.email ?<a className="form-text" href={`mailto:${key.email}`}><i className="far fa-envelope"></i> {key.email}</a>:""}
                </div>
            )}
        </Col>
        <Col sm={12} md={6}>
          <Form data={contentJson.form} />
        </Col>
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
        }  
      }
    }
    dataJson(general: {path: {eq: "/"}}) {
      ...contactFields
      ...tagsFields
    }
  }
`
