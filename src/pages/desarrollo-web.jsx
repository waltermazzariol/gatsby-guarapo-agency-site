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


function WebPage(props) {
  const contentJson = props.data.allDataJson.edges[0].node
  const generalJson = props.data.dataJson
  const blogJson = props.data.allWorkJson.edges

  return (
    <Layout nav={contentJson.navigation}>
      <Hero data={contentJson.hero} />
      <Section>
        <div className="col-12 pt-4"><a href="/">Inicio</a> / {contentJson.general.seo_title}</div>
      </Section>      
      
       {/* Our Process */}
       <div className="spacer"></div>
       <Section anchor={'portfolio'}>
        <Title title={generalJson.process.title} subtitle={generalJson.process.description}/>
        <Process data={generalJson.process.list}/>
      </Section>
      
      {/* Services */}
      <div className="spacer"></div>
      <Section anchor={'scope'}>
        <Title title="Web, Tienda virtual, landing page & más" subtitle={"Todo lo que necesitas en un solo lugar"}/>
        <div className="Container scope">
          <div className="row">
            <div className="col-12 col-md-4">
              <div className="scope-underline">Website</div>
            </div>
            <div className="col-12 col-md-4">
              <div className="scope-underline">Landing pages</div>
            </div>
            <div className="col-12 col-md-4">
              <div className="scope-underline">e-Commerce</div>
            </div>
            <div className="col-12 col-md-4">
              <div className="scope-underline">CMS</div>
            </div>
            <div className="col-12 col-md-4">
             <div className="scope-underline">SEO</div>
            </div>
            <div className="col-12 col-md-4">
             <div className="scope-underline">Mobile first</div>
            </div>
            <div className="col-12 col-md-4">
             <div className="scope-underline">Google index</div>
            </div>
            <div className="col-12 col-md-4">
             <div className="scope-underline">Dominios .com</div>
            </div>
            <div className="col-12 col-md-4">
             <div className="scope-underline">Diseño</div>
            </div>
            <div className="col-12 col-md-4">
             <div className="scope-underline">Mantenimiento</div>
            </div>
            <div className="col-12 col-md-4">
             <div className="scope-underline">Actualización de contenido</div>
            </div>
            <div className="col-12 col-md-4">
             <div className="scope-underline">Copy write</div>
            </div>
            <div className="col-12 col-md-4">
              <div className="scope-underline">Google Analytics</div>
            </div>
            <div className="col-12 col-md-4">
              <div className="scope-underline">Microsite</div>
            </div>
            <div className="col-12 col-md-4">
              <div className="scope-underline">Optimización de carga</div>
            </div>
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
      <Section anchor={'portfolio'} className={'portfolio'} rowClass="justify-content-center" >
        <Title title={"¿Tienes alguna duda?"} subtitle={"No dudes en escribirnos, Te prometemos responder ¡Super rápido!⚡️"} />
        <div className="col-12 col-md-6">
          <FormServices data={contentJson.form} tags={generalJson.tags}/>
        </div>
      </Section>

      <div className="spacer"></div>
      <Section anchor={'portfolio'} className={'portfolio'} fluid={true} rowClass={"g-0"}>
        <Title title={contentJson.portfolio.title} />
        <Portfolio data={blogJson} />
      </Section>

      <Section anchor={'contact'} className={'contact bg-dark'} fluid={true} >
        <Contact data={generalJson.contact} />
      </Section>
      
      <CookiesProvider>
        <CookiesConsent data={generalJson.tags} />
      </CookiesProvider>
    </Layout>
  )
}

export default WebPage

export function Head(props) {
  return (
    <Seo
        page={'web'}
        metas={props.data.allDataJson.edges[0].node.general}
      />
  )
}

export const imageData = graphql`
  query{
    allDataJson(filter: {general: {path: {eq: "/desarrollo-web"}}}) {
      edges {
        node {
        ...generalFields
        ...navigationFields
        ...heroFields
        ...bannerFields
        ...portfolioFields
        ...packagesFields
        ...formFields
        }  
      }
    }
    dataJson(general: {path: {eq: "/"}}) {
      ...processFields
      ...contactFields
      ...tagsFields
    }
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
  }
`
