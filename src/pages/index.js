import * as React from "react";
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'

import Layout from "../components/layout";
import Container from "../components/container";
import Content from "../components/content";
import Form from "../components/form";
import Background from "../components/background";

import TapiLogo from "../svgs/tapi-logo.svg";

import * as styles from "../sass/home.module.scss";

const IndexPage = () => {
  const { width, height } = useWindowSize()
  return (
    <>
      <Background>
        <Confetti
          width={width}
          height={height}
          colors={[`#F9ECA2`, `#FFFFFF`, `#A39861`, `#797344`]}
        />
      </Background>
      <main>
        <Layout>
          <Content padding="small">
            <Container size="large" alignment="center">
              <img src="/logo.png" alt="Tapi Competition Header Image" />
              <h1>The ultimate Tapi Treasure Hunt</h1>
            </Container>
          </Content>
          <Content>
            <Container size="small" alignment="center">
              <h2>
                <span>Win £2,500 *</span>
                <span>or £500 towards Tapi flooring - plus many mystery vouchers to be won!</span>
              </h2>
              <div className={styles.starRow}>
                <img src="/star.png" alt="Gold Star Icon" />
                <img src="/star.png" alt="Gold Star Icon" />
                <img src="/star.png" alt="Gold Star Icon" />
                <img src="/star.png" alt="Gold Star Icon" />
                <img src="/star.png" alt="Gold Star Icon" />
                <img src="/star.png" alt="Gold Star Icon" />
                <img src="/star.png" alt="Gold Star Icon" />
              </div>
              <h3>Congratulations!</h3>
            </Container>
          </Content>
          <Content padding="medium" slash="slashbottom">
            <Container size="medium" alignment="left">
              <p>You are the lucky finder of one of our special golden tickets.</p>
              <p>One lucky golden ticket finder will win an interior design consultation with Banjo Beale, plus up to the value of £2,500 worth of Tapi flooring towards their home. Two lucky winners will win up to the value of £500 worth of Tapi flooring and there's plenty of mystery prizes up for grabs too!</p>
              <p>Just enter your details below (remember to tick which store you found the ticket in) and we'll be in touch to let you know if you've won. </p>
              <p>All winners will be generated at random.</p>
              <p>Good luck!</p>
              <em>*T's & C's Apply</em>
            </Container>
          </Content>
          <Content marginTop={true} padding="small" slash="slashtop">
            <Container size="small" alignment="left">
              <Form />
            </Container>
          </Content>
          <Content padding="footer">
            <Container size="small" alignment="center">
              <a target="_blank" href="https://www.tapi.co.uk/">
                <TapiLogo />
              </a>
            </Container>
          </Content>
        </Layout>
      </main>
    </>
  )
};

export default IndexPage;
