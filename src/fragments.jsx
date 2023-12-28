import { graphql } from 'gatsby'

export const generalFields = graphql`
fragment generalFields on DataJson {
  general {
    path
    siteurl
    seo_title
    seo_description
    seo_image
    ua
    lang
  }
}`

export const navigationFields = graphql`
fragment navigationFields on DataJson {
  navigation {
    cta_button
    cta_link
    logo_url {
        publicURL
    }
    menu{
      nav
      link
      anchor
    }
  }
}`

export const heroFields = graphql`
fragment heroFields on DataJson {
  hero {
    pretitle
    subtitle
    title
    button_url
    button_text
    benefits{
      text
    }
  }
}`

export const coverFields = graphql`
fragment coverFields on DataJson {
  cover {
    subtitle
    title
    button_url
    button_text
  }
}`

export const bannerFields = graphql`
fragment bannerFields on DataJson {
  banner {
    title
    text
    button_text
    button_url
  }
}`

export const teamFields = graphql`
fragment teamFields on DataJson {
  team {
      name
      role
      description     
      image {
        publicURL
        childImageSharp {
          gatsbyImageData
        }
      }
    }
}`

export const testimonialsFields = graphql`
fragment testimonialsFields on DataJson {
  testimonials {
      title
      description
      list{
        name
        position
        image {
          publicURL
          childImageSharp {
            gatsbyImageData
          }
        }
        message
      }
      
    }
}`

export const packagesFields = graphql`
fragment packagesFields on DataJson {
  packages {
      title
      items{
        name
        from
        price
        strikethrough
        time
        list{
          text
        }
        button_text
        button_url
        button_text_second
        button_url_second
      }
    }
}`

export const processFields = graphql`
fragment processFields on DataJson {
  process {
    title
    description
    list {
      id
      title
      description
      image{
        publicURL
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  }
}`

export const scopeFields = graphql`
fragment scopeFields on DataJson {
  scope {
    title
    description
    list {
      text
    }
  }
}`

export const contactFields = graphql`
fragment contactFields on DataJson {
  contact {
    address
    email
    phone
    socialmedia {
      link
      name
    }
  }
}`

export const portfolioFields = graphql`
fragment portfolioFields on DataJson {
  portfolio {
    title
    tags{
      client
      url
      year
      tags
      close
      city
    }
    list{
      id
      client
      description
      url
      city
      year
      cat
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
      alt
    }
  }
}`

export const formFields = graphql`
fragment formFields on DataJson {
  form {
    title
    description
    contacts{
      id
      city
      name
      number
      email
      phone
    }
  }
}`

export const tagsFields = graphql`
fragment tagsFields on DataJson {
  tags {
    cookie_accept
    cookie_message
    not_found_title
    not_found_message
    not_found_btn
    city
    url
    tags
    year
    button
    form_name
    form_email
    form_phone
    form_message
    form_send
    form_success
  }
}`

export const domainsFields = graphql`
fragment domainsFields on DataJson {
  domains {
    title
    description
    link
    packages{
      name
      price
    }
  }
}`