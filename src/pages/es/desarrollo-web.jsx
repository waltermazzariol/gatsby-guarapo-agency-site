import React from "react"

// Libraries 
import { graphql } from "gatsby"
import { CookiesProvider } from 'react-cookie';

// Genneric Component
import Section from "../../components/Common/Section"
import Title from "../../components/Common/Title"
import CookiesConsent from "../../components/Cookies"

// Core components
import Seo from "../../components/Seo"
import Layout from "../../components/Layout"
import Hero from "../../components/Hero/Hero"
import Contact from "../../components/Contact"
import Portfolio from "../../components/Portfolio/Portfolio"
import PriceTable from "../../components/PriceTable"
import Process from "../../components/Process";
import Banner from "../../components/Banner";
import FormServices from "../../components/Form";


function WebPage(props) {
  const contentJson = props.data.allDataJson.edges[0].node
  const generalJson = props.data.dataJson
  const blogJson = props.data.allWorkJson.edges

  return (
    <Layout nav={generalJson.navigation}>
      <Hero data={contentJson.hero} color="bg-light-blue"/>

      <Section>
        <div className="col-12 pt-4 small"><a href="/">Home</a> {contentJson.general.path}</div>
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
        <Title title={contentJson.packages.title} subtitle={contentJson.packages.description} />
        <PriceTable data={contentJson.packages.items} tagline={contentJson.packages.tagline} popular />
      </Section>
      
      {/* Banner */}
      <div className="spacer"></div>
      <Banner data={contentJson.banner} />

      {/* Form Services*/}
      <Section anchor={'form'} rowClass="justify-content-center" >
        <Title title={generalJson.form.title} subtitle={generalJson.form.description} />
        <div className="col-12 col-md-6">
          <FormServices data={generalJson.form} tags={generalJson.tags}/>
        </div>
        <div className="col-12 text-center small">{generalJson.form.tagline}</div>
      </Section>

      <div className="spacer"></div>
      <Section anchor={'portfolio'} className={'portfolio'} fluid={true} rowClass={"g-0"}>
      <Title title={generalJson.tags.portfolio_title} subtitle={generalJson.tags.portfolio_subtitle} />
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

export const contentData = graphql`
  query{
    allDataJson(filter: {general: {path: {eq: "/es/desarrollo-web"}}}) {
      edges {
        node {
        ...generalFields
        ...heroFields
        ...bannerFields
        ...packagesFields
        ...processFields
        ...scopeFields
        }  
      }
    }
    dataJson(general: {path: {eq: "/es/"}}) {
      ...contactFields
      ...tagsFields
      ...navigationFields
      ...formFields
    }
    allWorkJson(sort: {date: DESC} filter: {cat:{eq: "Web"}}) {
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
