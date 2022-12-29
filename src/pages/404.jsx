import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Hero from "../components/Hero/Hero"

export const navData = graphql`  
query {
  allDataJson(filter: {general: {path: {eq: "/"}}}) {
    edges {
      node {
        ...aboutFields
        ...generalFields
        ...heroFields
        ...navigationFields
        ...tagsFields
      }
    }
  }
}`

const NotFoundPage = (props) => {
  const contentJson = props.data.allDataJson.edges[0].node
return(
  <Layout nav={contentJson.navigation} >
    <Hero data={contentJson.hero} logo={contentJson.navigation.logo_url} />
    <div className="container my-5">
      <div className="row">
        <div className="col-12 text-center">
          <h1>{contentJson.tags.not_found_title}</h1>
          <p>{contentJson.tags.not_found_message}</p>
          <a className="btn btn-xl btn-primary" href="/" >{contentJson.tags.not_found_btn}</a>
        </div>
      </div>
    </div>
  </Layout>
)}

export default NotFoundPage

export function Head(props) {
  return (
    <Seo
        page={'404'}
        metas={props.data.allDataJson.edges[0].node.general}
      />
  )
}