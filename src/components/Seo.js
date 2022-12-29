/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import {Helmet} from "react-helmet"
import ReactGA from "react-ga4"
import image from '../data/images/seo.jpg'

function Seo({metas, lang}) {
  if (typeof window !== "undefined" && process.env.GATSBY_WORDPRESS_HOST!== 'dev' ) {
    ReactGA.initialize("G-4W167WWE3E");
    ReactGA.send({ hitType: "pageview", page: window.location.pathname + window.location.search });
  }
  
  
  const metaDescription = metas.seo_description
  const imageURL = metas.siteurl+image
  const imageURLHeight = '704'
  const imageURLWidth = '704'

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={metas.seo_title}
      titleTemplate={metas.seo_title}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: metas.seo_title,
        },
        {
          property: `og:image`,
          content: imageURL,
        },
        {
          property: "og:image:width",
          content: imageURLWidth,
        },
        {
          property: "og:image:height",
          content: imageURLHeight,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:url`,
          content: metas.siteurl,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:image`,
          content: imageURL,
        },
        {
          name: `twitter:creator`,
          content: metas.author,
        },
        {
          name: `twitter:title`,
          content: metas.seo_title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(metas)}
    />
  )
}

Seo.defaultProps = {
  lang: `es`,
  metas: [],
  description: ``,
  title: ``,
}

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default Seo
