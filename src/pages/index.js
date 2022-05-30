import React, { useState } from "react";
import { Helmet } from "react-helmet";
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

  const [termsHidden, setTermsHidden] = useState(false);

  const toggleTerms = (e) => {
    e.preventDefault();
    setTermsHidden(!termsHidden);
  }

  const { width, height } = useWindowSize()
  return (
    <>
      <Helmet>
          <title>The Ultimate Tapi Treasure Hunt | Tapi</title>
      </Helmet>
      <Background>
        <Confetti
          width={width}
          height={height}
          colors={[`#F9ECA2`, `#FFFFFF`, `#A39861`, `#797344`]}
        />
      </Background>
      <main>
        { termsHidden === true && <div className={`${styles.terms}`}>
          <Container size="large">
            <div className={styles.termsHeader}>
              <h5>Terms &amp; Conditions</h5>
              <button onClick={e => toggleTerms(e)}>Close</button>
            </div>
            <div className={styles.termsBody}>
              <p>Interior Designer Consultation Terms & Conditions.</p>
              <p>PROMOTER: Tapi Carpets & Floors Limited</p>
              <p>ADDRESS:  TAPI CARPETS & FLOORS LIMITED, 1A SPUR ROAD, ORPINGTON, KENT, BR6 0PH</p>
              <p>If you can't find the information you're looking for below, please contact a member of our team and we'll be happy to answer any queries.</p>
              <ol>
                <li>Tickets will be in stores from Friday 1st July and the competition ends when all prizes have been claimed.</li>
                <li>The position is open to UK residents who are over 18 only.</li>
                <li>Applicants must either have their own home or have landlord permission to update their flooring.</li>
                <li>Applications must be made via the Tapi website by scanning the QR code and submitting your details.</li>
                <li>One entry per person/golden ticket only. Those who use more than one email address will be disqualified from the competition.</li>
                <li>No employees, their families or agencies of Tapi or connective3 agency are eligible to apply.</li>
                <li>No purchase is necessary to apply. Tapi has the right to withdraw the offer at any time without notice.</li>
                <li>The company reserves the right to cancel or amend the position and these terms and conditions without notice in the event of a catastrophe, war, civil or military disturbance, or any actual or anticipated breach of any applicable law or regulation or any other event outside of the promoter's control. Any changes to the position will be notified to entrants as soon as possible by the company.</li>
                <li>The selection process is as follows: Upon finding the golden ticket, the winner will scan the QR code at the back of the ticket and enter their details (name, email, name of store and home address) on the Tapi website. They will then be contacted to redeem their prize.</li>
                <li>The prize winner/runner-ups will be decided at random.</li>
                <li>The decision will be final and no further correspondence about the decision will be entered into.</li>
                <li>The 1st place prize consists of an interior designer consultation and up to the value of £2,500 worth of Tapi products. If desired, the winner can choose to add to the prize with their own money if the products total more than what is on offer.</li>
                <li>The total prize can either be put towards flooring products and fitting, but if just put towards flooring, then fitting will need to be paid for by the winner</li>
                <li>Two ticket recipients will win up to the value of £500 worth of Tapi flooring.</li>
                <li>There will be 23 mystery prizes up for grabs too.</li>
                <li>Please note, not everyone who finds a golden ticket will win a prize. Winners are generated at random and will be contacted.</li>
                <li>Certain products or lines may not be included as part of the prize</li>
                <li>The first-place winner must claim their prize within 28 days of receiving notification they have won. They will then have 2 months from this date to redeem the consultation and 6 months to redeem the £2,500 Tapi product prize, otherwise it will no longer be valid.</li>
                <li>The runners up must claim their prize within 28 days of receiving notification they have won. The prizes will then be sent to them.</li>
                <li>By entering this competition, you acknowledge that if you win, the process will be recorded and used across Tapi's social channels, website and any other media that they wish including the consultation and flooring fitting. You must consent to photos being taken of yourself and your party and being shared publicly for marketing and promotional purposes.</li>
                <li>The winner must also be available to visit their closest Tapi store to discuss the prize; this will be recorded.</li>
                <li>This above also relates to the two runner-up prizes of £500.</li>
                <li>The position and prizes are as stated, and no cash or other alternatives will be offered. The prizes are not transferable and can only be used on Tapi products. Prizes are subject to availability and we reserve the right to substitute any prize with another of equivalent value without giving notice.</li>
                <li>The position and these terms and conditions will be governed by English law and any disputes will be subject to the exclusive jurisdiction of the courts of England.</li>
                <li>The successful applicant agrees to the use of his/her name and image in any publicity material, as well as their entry. Any personal data relating to the successful applicant or any other entrants will be used solely in accordance with current UK data protection legislation and will not be disclosed to a third party without the entrant's prior consent.</li>
                <li>The successful applicant will be chosen and notified once they have found the ticket. All reasonable endeavours will be made to contact them during this time. If a winning applicant cannot be contacted or is not available, Tapi reserves the right to select an alternative shortlisted applicant.</li>
                <li>This position is in no way sponsored, endorsed or administered by, or associated with, Instagram, Facebook, Twitter or any other Social Network.</li>
                <li>You are providing your information to Tapi Carpets & Floors Limited and not to any other party. The information provided will be used in conjunction with the following Privacy Policy found here.</li>
              </ol>
            </div>
          </Container>
        </div> }
        <Layout>
          <Content padding="small">
            <Container size="large" alignment="center">
              <img src="/logo.png" alt="Tapi Competition Header Banner" />
              <h1>The Ultimate Tapi Treasure Hunt</h1>
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
              <Form toggle={e => toggleTerms(e)} />
            </Container>
          </Content>
          <Content padding="footer">
            <Container size="small" alignment="center">
              <a rel="noreferrer" target="_blank" href="https://www.tapi.co.uk/">
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
