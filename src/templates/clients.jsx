import React from "react"
import { CookiesProvider } from 'react-cookie';
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Cover from "../components/Hero/Cover"
import Section from "../components/Common/Section"
import Contact from "../components/Contact"

// Genneric Component
import CookiesConsent from "../components/Cookies"

function Works(props) {

  const dataJson = props.data.workJson
  const contentJson = props.data.allDataJson.edges[0].node
  const tagsJson = props.data.allDataJson.edges[0].node.tags 
  const coverData = {
    bgimage: { publicURL: "/bg_hero.jpg" },
    title: dataJson.client
  }

  return (
    <Layout nav={contentJson.navigation}>
      <Cover data={coverData} />
      <div className="portfolio-modal py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 pb-5"><a href="/">Inicio</a> / {coverData.title}</div>
            <div className="col-sm-12 col-md-6 portfolio-modal--body">
              <ul className="fa-ul portfolio-modal--text">
                {dataJson.city !== "" ?
                  <li>
                    <span className="fa-li">
                      <i className="fas fa-location-arrow"></i>
                    </span><b>{tagsJson.city}:</b> <a href={dataJson.city}>{dataJson.city}</a>
                  </li> : ""}
                {dataJson.url !== "" ?
                  <li>
                    <span className="fa-li">
                      <i className="fas fa-share"></i>
                    </span><b>{tagsJson.url}:</b> <a href={dataJson.url}>{dataJson.url}</a>
                  </li> : ""}
                {dataJson.year !== "" ?
                  <li>
                    <span className="fa-li">
                      <i className="fas fa-calendar-alt"></i>
                    </span><b>{tagsJson.year}:</b> {dataJson.year}
                  </li> : ""}
                {dataJson.tags !== "" ?
                  <li>
                    <span className="fa-li">
                      <i className="fas fa-star"></i>
                    </span>{dataJson.tags}
                  </li> : ""}
                {dataJson.description !== "" ?
                  <li>
                    {dataJson.description.split("\n").map((item, i) => <p key={i}>{item}</p>)}
                  </li> : ""}
                {dataJson.url !== "" ?
                  <li><a className="btn btn--primary my-3" href={dataJson.url}>{tagsJson.button}</a></li>
                  : ""}
              </ul>

            </div>
            <div className="col-sm-12 col-md-6 portfolio-modal">

              <img srcSet={dataJson.image.childImageSharp.gatsbyImageData.images.fallback.srcSet} className="img-fluid" alt={dataJson.title} />
            </div>
          </div>
        </div>
      </div>
      <Section anchor={'contact'} className={'contact bg-dark'} fluid={true} noGutters={true}>
        <Contact data={contentJson.contact} />
      </Section>
      <CookiesProvider>
        <CookiesConsent data={contentJson.tags} />
      </CookiesProvider>
    </Layout>
  );
}

export default Works

export function Head(props) {
  const seo_data = {
    path: `/${props.data.workJson.parent.name}`,
    siteurl: `${props.data.workJson.parent.relativeDirectory}/${props.data.workJson.parent.name}`,
    seo_title: `${props.data.workJson.client} • Guarapo Media`,
    seo_description: "Somos especialistas en desarrollo web. Te acompañamos en todo el camino, siempre enfocado en alcanzar los objetivos",
    seo_image: props.data.workJson.thumbnail.publicURL,
    ua: "UA-73261016-1",
    lang: "es"
  }
  return (
    <Seo
      page={`${props.data.workJson.parent.relativeDirectory}/${props.data.workJson.parent.name}`}
      metas={seo_data}
      />
  )
}

export const dataJson = graphql`
  query($slug: String!) {
    allDataJson(filter: {general: {path: {eq: "/"}}}) {
      edges {
        node {
        ...navigationFields
        ...tagsFields
        ...contactFields
        }  
      }
    }
    workJson( client: { eq: $slug }) {
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
`