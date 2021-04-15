import React from "react"
import { CookiesProvider } from 'react-cookie';

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Cover from "../components/Hero/Cover.js"
import Section from "../components/common/Section"
import Contact from "../components/Contact"

// Genneric Component
import CookiesConsent from "../components/Cookies.js"

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
      <Seo
        page={`${dataJson.parent.relativeDirectory}/${dataJson.parent.name}`}
        title={`${dataJson.client} • Guarapo Media`}
        lang={'es'}
        image={dataJson.image.publicURL}
      />
      <Cover data={coverData} />
      <div className="portfolio-modal py-5">
        <div className="container">
          <div className="row">
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
                    </span><b>{tagsJson.url}:</b> <a href={dataJson.url}>Visitar página</a>
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

              <img src={dataJson.image.publicURL} className="img-fluid" alt={dataJson.title} />
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
        }
        thumbnail{
          publicURL
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