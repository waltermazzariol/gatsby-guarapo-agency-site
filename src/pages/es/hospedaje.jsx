import React, { useState } from "react";

// Libraries
import { graphql } from "gatsby";
import { CookiesProvider } from "react-cookie";

// Genneric Component
import CookiesConsent from "../../components/Cookies";

// Core components
import Seo from "../../components/Seo";
import Layout from "../../components/Layout";
import PriceTable from "../../components/PriceTable";
import Cover from "../../components/Hero/Cover";
import Contact from "../../components/Contact";
import Section from "../../components/Common/Section";
import Title from "../../components/Common/Title";
import Domain from "../../components/Domain";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import { Col } from "react-bootstrap";
import FormServices from "../../components/Form";
import Portfolio from "../../components/Portfolio/Portfolio"
import Testimonial from "../../components/Testimonial";
import RatingInfo from "../../components/RatingInfo";

function TeamPage(props) {
  const contentJson = props.data.allDataJson.edges[0].node;
  const generalJson = props.data.dataJson;
  const blogJson = props.data.allWorkJson.edges
  const [domain, setDomain] = useState("");

  return (
    <Layout nav={generalJson.navigation}>
      <Cover data={contentJson.cover} rating={contentJson.testimonials.list}/>
      <Section>
         <div className="col-12 pt-4 small"><a href="/">Home</a> {contentJson.general.path}</div>
      </Section>
     

      {/* Domains */}
      <Section className={"price mb-5"} rowClass={"justify-content-center"}>
        <Title
          title={contentJson.domains.title}
          subtitle={contentJson.domains.description}
        />
        <Col lg={8}>
          <Form>
            <InputGroup controlid="formBasicName" className="mb-3 InputGroup">
              <Form.Control
                type="text"
                value={domain}
                onChange={(e) => setDomain(e.target.value)}
                placeholder={contentJson.domains.placeholder}
              />
              <Button
                variant="button button--primary text-white"
                type="submit"
                href={
                  "https://guarapohosting.com/cart.php?a=add&domain=register&query=" +
                  domain
                }
                value="Submit"
                target="_blank"
                aria-label="Sumit"
              >
                {contentJson.domains.button}
              </Button>
            </InputGroup>
          </Form>
        </Col>
      </Section>
      <Section rowClass={"gy-5 justify-content-center"}>
        <Domain data={contentJson.domains.packages} />
      </Section>

       {/* Packages */}
       <Section className={"price"}>
        <Title title={contentJson.packages.title} />
        <PriceTable data={contentJson.packages.items} popular={true} tagline={contentJson.packages.tagline} />
      </Section>

       {/* Form Services*/}
       <Section anchor={'form'} rowClass="justify-content-center" >
        <Title title={generalJson.form.title} subtitle={generalJson.form.description} />
        <div className="col-12 col-md-6">
          <FormServices data={generalJson.form} tags={generalJson.tags}/>
        </div>
        <div className="col-12 text-center small">{generalJson.form.tagline}</div>
      </Section>
      {/* Testimonials */}
      <Section anchor={'testimonial'} className={"mt-5 testimonial"} rowClass="g-3 justify-content-center">
    <Title title={contentJson.testimonials.title} subtitle={contentJson.testimonials.description}/>
    <div className="d-flex justify-content-center">
     <RatingInfo data={contentJson.testimonials.list} />
    </div>
      <div className="carousel carousel-fade">
        <div className="carousel-x g-2">
          {contentJson.testimonials.list.slice(0, 4).map((key,index) =>
            <Testimonial key={index} data={key} />
            )}  
        </div>
        <div className="carousel-reverse g-2">
          {contentJson.testimonials.list.slice(5, 13).map((key,index) =>
            <Testimonial key={index} data={key} />
            )}  
        </div>
      </div>
    </Section>

      <div className="spacer"></div>
      <Section anchor={'portfolio'} className={'portfolio'} fluid={true} rowClass={"g-0"}>
        <Portfolio data={blogJson} />
      </Section>

      <Section anchor={"contact"} className={"contact bg-dark"} fluid={true}>
        <Contact data={generalJson.contact} />
      </Section>
      <CookiesProvider>
        <CookiesConsent data={generalJson.tags} />
      </CookiesProvider>
    </Layout>
  );
}

export default TeamPage;

export function Head(props) {
  return (
    <Seo
      page={"hospedaje"}
      metas={props.data.allDataJson.edges[0].node.general}
    />
  );
}

export const data = graphql`
  query {
    allDataJson(filter: { general: { path: { eq: "/es/hospedaje" } } }) {
      edges {
        node {
          ...generalFields
          ...coverFields
          ...packagesFields
          ...domainsFields
          ...testimonialsFields
        }
      }
    }
    dataJson(general: { path: { eq: "/es/" } }) {
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
`;
