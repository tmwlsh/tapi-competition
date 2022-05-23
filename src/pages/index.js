import * as React from "react";

import Layout from "../components/layout";
import Container from "../components/container";
import Content from "../components/content";
import Form from "../components/form";
import Background from "../components/background";

const IndexPage = () => {
  return (
    <>
      <Background />
      <main>
        <Layout>
          <Content padding="large">
            <Container size="large" alignment="center">
              <img src="/logo.png" alt="Tapi Competition Header Image" />
              <h1>The ultimate Tapi Treasure Hunt</h1>
            </Container>
          </Content>
          <Content>
            <Container size="small" alignment="center">
              <h2>
                <span>Win £2,500</span>
                <span>towards Tapi flooring or gift vouchers to spend in-store</span>
              </h2>
            </Container>
          </Content>
          <Content>
            <Container size="medium" alignment="center">
              <h3>Congratulations!</h3>
            </Container>
          </Content>
          <Content>
            <Container size="medium" alignment="left">
              <p>You are the lucky finder of one of our special golden tickets.</p>
              <p>One lucky golden ticket finder will win an interior design consultation with [insert interior designer] plus £2,500 worth of new flooring towards your home. The other three recipients will win monetary vouchers for [£X] to use in store or online.</p>
              <p>The first person to enter their details will win the grand prize, and the three runners-up will win the vouchers towards renovating your home.</p>
              <p>Just enter your details below and we’ll get in touch to organize your prize.</p>
              <p>Good Luck!</p>
            </Container>
          </Content>
          <Content>
            <Container size="medium" alignment="right">
              <em >*T’s & C’s Apply</em>
            </Container>
          </Content>
          <Content marginTop={true}>
            <Container size="small" alignment="left">
              <Form />
            </Container>
          </Content>
        </Layout>
      </main>
    </>
  )
};

export default IndexPage;
