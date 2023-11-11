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

function MarketingPage(props) {

  const contentJson = props.data.allDataJson.edges[0].node
  const generalJson = props.data.dataJson
  const blogJson = props.data.allWorkJson.edges


  return (
    <Layout nav={generalJson.navigation}>
    <Hero data={contentJson.hero} />
    <Section>
        <div className="col-12 pt-4"><a href="/">Inicio</a> / {contentJson.general.seo_title}</div>
      </Section>   

      {/* Our Process */}
       <div className="spacer"></div>
       <Section anchor={'portfolio'}>
        <Title title={contentJson.process.title} subtitle={contentJson.process.description}/>
        <Process data={contentJson.process.list}/>
      </Section>
      
      {/* Scope */}
      <div className="spacer"></div>
      <Section anchor={'scope'}>
        <Title title={contentJson.scope.title} subtitle={contentJson.scope.description}/>
        <div className="Container scope">
          <div className="row">
            {contentJson.scope.list.map((key,index)=>
              <div key={index} className="col-12 col-md-4">
                <div className="scope-underline">{key.text}</div>
            </div>
            )}
            </div>
        </div>
      </Section>

       {/* Our Packages */}
       <div className="spacer"></div>
      <Section anchor={'package'}>
        <Title title={contentJson.packages.title}  />
        <PriceTable data={contentJson.packages.items}/>
      </Section>
      
      {/* Banner */}
      <div className="spacer"></div>
      <Banner data={contentJson.banner} />

      {/* Form Services*/}
      <Section anchor={'form'} rowClass="justify-content-center" >
        <Title title={"¿Tienes alguna duda?"} subtitle={"No dudes en escribirnos, Te prometemos responder ¡Super rápido!⚡️"} />
        <div className="col-12 col-md-6">
          <FormServices data={contentJson.form} tags={generalJson.tags}/>
        </div>
        <div className="col-12 text-center small">¿No confias en los formularios? Puedes escribir a <a href="mailto:contacto@guarapomedia.com">contacto@guarapomedia.com</a></div>
      </Section>

      <div className="spacer"></div>
      <Section anchor={'portfolio'} className={'portfolio'} fluid={true} rowClass={"g-0"}>
      <Title title={"Ellos confiaron en nosotros"} subtitle={"Échale un vistazo a nuestros proyectos más recientes."} />
        <Portfolio data={blogJson} />
      </Section>

      <Section anchor={'contact'} className={'contact bg-dark'} fluid={true}>
        <Contact data={generalJson.contact} />
      </Section>
      <CookiesProvider>
        <CookiesConsent data={generalJson.tags} />
      </CookiesProvider>
    </Layout>
  )
}

export default MarketingPage

export function Head(props) {
  return (
    <Seo
        page={'marketing'}
        metas={props.data.allDataJson.edges[0].node.general}
      />
  )
}

export const contentData = graphql`
  query{
    allDataJson(filter: {general: {path: {eq: "/marketing-digital"}}}) {
      edges {
        node {
        ...generalFields
        ...heroFields
        ...bannerFields
        ...packagesFields
        ...formFields
        ...processFields
        ...scopeFields
        }  
      }
    }
    dataJson(general: {path: {eq: "/"}}) {
      ...contactFields
      ...tagsFields
      ...navigationFields
    }
    allWorkJson(sort: {date: DESC} filter: {cat:{eq: "Marketing"}}) {
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
