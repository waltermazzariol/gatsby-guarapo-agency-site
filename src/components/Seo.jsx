/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import ReactGA from "react-ga4"

function Seo({metas}) {
  if (typeof window !== "undefined" && process.env.GATSBY_WORDPRESS_HOST!== 'dev' ) {
    ReactGA.initialize("G-4W167WWE3E");
    ReactGA.send({ hitType: "pageview", page: window.location.pathname + window.location.search });
  }
  
  const metaTitle = metas.seo_title
  const metaDescription = metas.seo_description
  const imageURL = "https://guarapomedia.com/seo.jpg"
  const imageURLHeight = '704'
  const imageURLWidth = '704'

  return (<>
    {/* <!-- Primary Meta Tags --> */}
    <lang>es</lang>
    <title>{metaTitle}</title>
    <meta name="title" content={metaTitle} />
    <meta name="description" content={metaDescription}/>

    {/* <!-- Open Graph / Facebook --/> */}
    <meta property="og:type" content="website" />
    <meta property="og:url" content={metas.siteurl} />
    <meta property="og:title" content={metaTitle} />
    <meta property="og:description" content={metaDescription} />
    <meta property="og:image" content={imageURL} />
    <meta property= "og:image:width" content={imageURLWidth} />
    <meta property= "og:image:height" content={imageURLHeight} />

    {/* <!-- Twitter --/> */}
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content={metas.siteurl} />
    <meta property="twitter:title" content={metaTitle} />
    <meta property="twitter:description" content={metaDescription} />
    <meta property="twitter:image" content={imageURL} />
    </>)
}

export default Seo
