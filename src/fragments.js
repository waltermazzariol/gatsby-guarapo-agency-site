import { graphql } from 'gatsby'

export const generalFields = graphql`
fragment generalFields on DataJson {
  general {
    path
    siteurl
    seo_description
    ua
    lang
    seo_image{
      publicURL
    }
  }
}`

export const navigationFields = graphql`
fragment navigationFields on DataJson {
  navigation {
    cta_button
    cta_link
    logo_active
    logo_url{
      publicURL
    }
    title
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
    image {
        publicURL
    }
    bgimage {
      publicURL
    }
    logo_url {
      publicURL
    }
    subtitle
    title
    button_url
    button_text
  }
}`

export const coverFields = graphql`
fragment coverFields on DataJson {
  cover {
    bgimage {
      publicURL
    }
    logo_url {
      publicURL
    }
    subtitle
    title
    button_url
    button_text
  }
}`

export const bannerFields = graphql`
fragment bannerFields on DataJson {
  banner {
    text
    button_text
    button_link
    image {
        publicURL
    }
  }
}`

export const banner2Fields = graphql`
fragment banner2Fields on DataJson {
  banner_2 {
    text
    image {
        publicURL
    }
  }
}`

export const banner3Fields = graphql`
fragment banner3Fields on DataJson {
  banner_3 {
    title
    subtitle
    bg_image {
        publicURL
    }
    image {
      publicURL
  }
  }
}`

export const sponsorFields = graphql`
fragment sponsorFields on DataJson {
  sponsor {
    title
    gallery {
      image{
        publicURL
      }
  }
  }
}`

export const aboutFields = graphql`
fragment aboutFields on DataJson {
  about {
    image {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
        resize {
          width
          height
        }
      }
    }
    text
    title
  }
}`

export const servicesFields = graphql`
fragment servicesFields on DataJson {
  services {
    projects {
      alt
      image {
        publicURL
      }
      name
      type
    }
    title
    subtitle
    slogan
  }
}`

export const clientTypeFields = graphql`
fragment clientTypeFields on DataJson {
  client_type {
    services {
      alt
      image {
        publicURL
      }
      name
      type
    }
    title
    subtitle
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
      }
    }
}`

export const packagesFields = graphql`
fragment packagesFields on DataJson {
  packages {
      title
      items{
        name
        price
        time
        list{
          text
        }
        button_text
        button_url
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
      }
      thumbnail{
        publicURL
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
    name
    email
    phone
    message
    send
    success
    contacts{
      id
      city
      name
      number
      email
    }
  }
}`

export const tagsFields = graphql`
fragment tagsFields on DataJson {
  tags {
    cookie_accept
    cookie_message
    date
    event
    location
    viewless
    viewmore
    not_found_title
    not_found_message
    not_found_btn
  }
}`