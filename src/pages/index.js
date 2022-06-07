import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
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

  function useWindowSize(handleResize) {
    // Initialize state with undefined width/height so server and client renders match
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {
        // Handler to call on window resize
        function handleWindowResize() {
            // Set window width/height to state
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });

            if (typeof handleResize === 'function') {
                handleResize();
            }
        }

        // Add event listener
        window.addEventListener('resize', handleWindowResize);

        // Call handler right away so state gets updated with initial window size
        handleWindowResize();

        // Remove event listener on cleanup
        return () => window.removeEventListener('resize', handleWindowResize);
    }, [handleResize]);

    return windowSize;
  }

  const windowSize = useWindowSize();

  if (!windowSize.width || !windowSize.height) {
    return null;
  }


  return (
    <>
      <Helmet>
          <title>The Ultimate Tapi Treasure Hunt | Tapi</title>
      </Helmet>
      <Background>
        <Confetti
          width={windowSize.width}
          height={windowSize.height}
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
              <h6>COMPANY TERMS</h6>
              <p>No employees, their families or agencies of Tapi or Connective3 Agency are eligible to apply. The competition is open to residents in England, Scotland and Wales only and to those 18 and over. Applicants must either have their own home or have landlord permission to update their flooring. No purchase is necessary to apply. Tapi has the right to withdraw the offer at any time without notice. The position and prizes are as stated, and no cash or other alternatives will be offered. The prizes are not transferable and can only be used on Tapi products meaning fitting is excluded. Prizes are subject to availability and we reserve the right to substitute any prize with another of equivalent value without giving notice. Tapi reserve the right to cancel or amend the position and these terms and conditions without notice in the event of a catastrophe, war, civil or military disturbance, or any actual or anticipated breach of any applicable law or regulation or any other event outside of the promoter's control. Any changes to the position will be notified to entrants as soon as possible by the company. The position and these terms and conditions will be governed by English law and any disputes will be subject to the exclusive jurisdiction of the courts of England.</p>
              <p>This position is in no way sponsored, endorsed or administered by, or associated with, Instagram, Facebook, Twitter or any other Social Network.</p>
              <p>You are providing your information to Tapi Carpets & Floors Limited and not to any other party. The information provided will be used in conjunction with the following Privacy Policy found here.  </p>
              <h6>COMP TERMS</h6>
              <p>Tickets will be in stores from 01/07/2022 until 11/07/22. Competition winners will be contacted after this timeframe. Applicants must be made via the Tapi website by scanning the QR code and submitting your details. Only one person, per golden ticket, per store. Those who use more than one email address will be disqualified from the competition. If you win the Tapi flooring prizes, you can only use that prize in the address on the form filled in.</p>
              <p>The selection process is as follows: upon finding a golden ticket, the winner will scan the QR code at the back of the ticket and enter the details required on the form. The prize winners and runners up will be selected at random. Winners will be contacted to either redeem their prize or be told if they have not won. The decision will be final. The 1st place prize consists of a 1 hour interior design consultation and up to the value of £2,500 worth of Tapi products (flooring, accessories and underlay) excluding fitting. If desired, the winner can choose to add to the prize with their own money if the products total more than what is on offer. </p>
              <p>Two ticket recipients (prize 2 and 3) will win up to the value of £500 worth of Tapi products (flooring, underlay and accessories) excluding fitting. There will be 23 mystery prizes up for grabs too. Please note – not everyone who finds a golden ticket will win a prize.There are 168 tickets (a ticket per store) and only 26 prizes in total. Certain products or lines may not be included as part of the prize. </p>
              <p>The first-place winner must claim their prize within 28 days of receiving the notification they have won. They will then have 2 months from this date to redeem the consultation, and until 31st December 2022 to redeem the £2,500 Tapi products prize, otherwise it'll no longer be valid. </p>
              <p>The two winners of the £500 Tapi products prize must claim their prize within 28 days of receiving the notification they have won, and until the 31st December 2022 to redeem the Tapi products prize, otherwise it'll no longer be valid. </p>
              <p>The 23 mystery prize winners must claim their prize within 28 days of receiving notification they've won. The prizes will then be sent to them. </p>
              <p>By entering this competition, you acknowledge that if you win, the process will be recorded and used across Tapi's social channels, website and any other media that they wish including the consultation and flooring fitting. You must consent to photos being taken of yourself and your party and being shared publicly for marketing and promotional purposes. The winner must also be available to visit their closest Tapi store to discuss the prize; this will be recorded. This above also relates to the two runner-up prizes of £500.</p>
              <p>The successful applicants agree to the use of his/her name and image in any publicity material, as well as their entry. Any personal data relating to the successful applicant or any other entrants will be used solely in accordance with current UK data protection legislation and will not be disclosed to a third party without the entrant's prior consent.</p>
              <p>All winners will be chosen at random and notified on the result once all 168 tickets have been found. If any winners cannot be contacted, Tapi reserves the right to select an alternative shortlisted applicant.</p>
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
