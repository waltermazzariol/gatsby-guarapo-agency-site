import { graphql } from 'gatsby'

export const generalFields = graphql`
fragment generalFields on DataJson {
  general {
    path
    siteurl
    seo_title
    seo_description
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
    image {
        publicURL
        childImageSharp {
          gatsbyImageData
        }
    }
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
    bgimage {
      publicURL
      childImageSharp {
        gatsbyImageData
      }
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
    title
    text
    button_text
    button_url
  }
}`

export const banner2Fields = graphql`
fragment banner2Fields on DataJson {
  banner_2 {
    text
    image {
        publicURL
        childImageSharp {
          gatsbyImageData
        }
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
        childImageSharp {
          gatsbyImageData
        }
    }
    image {
      publicURL
      childImageSharp {
        gatsbyImageData
      }
  }
  }
}`

export const aboutFields = graphql`
fragment aboutFields on DataJson {
  about {
    image {
      publicURL
      childImageSharp {
        gatsbyImageData
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
      link
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
        childImageSharp {
          gatsbyImageData
        }
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
        time
        list{
          text
        }
        button_text
        button_url
        button_text_second
        button_url_second
        image {
          publicURL
          childImageSharp {
            gatsbyImageData
          }
        }
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
  }
}`