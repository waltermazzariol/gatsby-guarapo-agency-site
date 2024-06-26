import React, { useState } from "react";

// Libraries
import { graphql } from "gatsby";
import { CookiesProvider } from "react-cookie";

// Genneric Component
import CookiesConsent from "../components/Cookies";

// Core components
import Seo from "../components/Seo";
import Layout from "../components/Layout";
import PriceTable from "../components/PriceTable.jsx";
import Cover from "../components/Hero/Cover";
import Contact from "../components/Contact";
import Section from "../components/Common/Section";
import Title from "../components/Common/Title";
import Domain from "../components/Domain.jsx";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import { Col } from "react-bootstrap";

function TeamPage(props) {
  const contentJson = props.data.allDataJson.edges[0].node;
  const generalJson = props.data.dataJson;
  const [domain, setDomain] = useState("");

  return (
    <Layout nav={generalJson.navigation}>
      <Cover data={contentJson.cover} />
      <Section>
        <div className="col-12 pt-4 small">
          <a href="/">Inicio</a> / Hospedaje Web
        </div>
      </Section>
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
                placeholder="Introduce el nombre del dominio .com .net .org .es"
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
                Buscar Dominio
              </Button>
            </InputGroup>
          </Form>
        </Col>
      </Section>
      <Section rowClass={"gy-5 justify-content-center"}>
        <Domain data={contentJson.domains.packages} />
      </Section>
      <Section className={"price"}>
        <Title title={contentJson.packages.title} />
        <PriceTable data={contentJson.packages.items} />
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
    allDataJson(filter: { general: { path: { eq: "/hospedaje" } } }) {
      edges {
        node {
          ...generalFields
          ...coverFields
          ...packagesFields
          ...domainsFields
        }
      }
    }
    dataJson(general: { path: { eq: "/" } }) {
      ...contactFields
      ...tagsFields
      ...navigationFields
    }
  }
`;
