import React from "react"

// Libraries 
import { graphql } from "gatsby"
import { CookiesProvider } from 'react-cookie';

// Genneric Component
import CookiesConsent from "../components/Cookies"

// Core components
import Seo from "../components/Seo"
import Layout from "../components/Layout"
import Cover from "../components/Hero/Cover"
import ShopCard from "../components/ShopCard.jsx"
import Contact from "../components/Contact"
import Section from "../components/Common/Section"

const shop = [
  {
    id: 1,
    title: "Startpage - HTML template",
    link: "/shop",
    image: "../assets/images/shop/startpage.webp",
    description: "Startpage is a modern and clean HTML template designed for startups and small businesses. It features a sleek design with a focus on user experience and functionality.",
    price: "$19",
    category: "HTML",
    tags: ["HTML", "Template", "Startups", "Small Businesses"],
  },
  {
    id: 2,
    title: "iPhone Wallpaper - iPod classic",
    link: "/shop",
    image: "../assets/images/shop/iphone-wallpaper.png",
    description: "iPhone Wallpaper - iPod classic is a beautiful and elegant wallpaper design for iPhone and iPod classic devices. It features a classic iPod design with a modern and sleek look.",
    price: "$19",
    category: "Wallpapers",
    tags: ["iPhone", "Wallpaper", "iPod", "Classic"],
  },
  {
    id: 3,
    title: "Culinaire – A simple One-Page HTML Template for Restaurant",
    link: "/shop",
    image: "../assets/images/shop/culinaire.webp",
    description: "Culinaire is a simple and elegant One-Page HTML Template designed for restaurants. It features a clean and modern design with a focus on user experience and functionality.",
    price: "$19",
    category: "HTML",
    tags: ["HTML", "Template", "Restaurants", "One-Page"],
  },
  {
    id: 4,
    title: "Walter - A Simple One-Page personal portfolio Gatsby template",
    link: "/shop",
    image: "../assets/images/shop/walter.webp",
    description: "Walter is a simple and elegant One-Page Gatsby template designed for personal portfolios. It features a clean and modern design with a focus on user experience and functionality.",
    price: "$19",
    category: "Gatsby",
    tags: ["Gatsby", "Template", "Personal Portfolio", "One-Page"],
  }
]

function Work(props) {
  const contentJson = props.data.allDataJson.edges[0].node
  const generalJson = props.data.dataJson

  return (
    <Layout nav={generalJson.navigation}>
      <Cover data={contentJson.cover} />
      <Section className={'bg-gray'}>
        <div className="col-12 pt-4 small"><a href="/">Home</a> {contentJson.general.path}</div>
      </Section>
      <ShopCard data={contentJson.shop} />
      <Section anchor={'contact'} className={'contact bg-dark'} fluid={true} >
        <Contact data={generalJson.contact} />
      </Section>
      <CookiesProvider>
        <CookiesConsent data={generalJson.tags} />
      </CookiesProvider>
    </Layout>
  )
}

export default Work

export function Head(props) {
  return (
    <Seo
        page={'shop'}
        metas={props.data.allDataJson.edges[0].node.general}
      />
  )
}

export const data = graphql`
  query{
      allDataJson(filter: {general: {path: {eq: "/shop"}}}) {
        edges {
          node {
          ...generalFields
          ...coverFields
          ...shopFields
        }  
        }
      }
    dataJson(general: {path: {eq: "/"}}) {
      ...contactFields
      ...tagsFields
      ...navigationFields
    }
  }
`
