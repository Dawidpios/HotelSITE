import React from 'react';

import Gallery from "./Gallery";
import Main from "./Main";
import LogoSec from "./LogoSec";
import Navi from "./Navi";
import Booking from "./Booking";
import Footer from "./Footer";

import AppProvider from "../context/AppContext";

import styled from "styled-components";
import { SRLWrapper } from "simple-react-lightbox";

import FooterBackground from "../images/footerBackground.png"


const Home = () => {
    return (  <AppProvider>  
        <AppSection id="Home">
        <Navi></Navi>
        <LogoSec></LogoSec>
        <MainSection id="About-us">
          <Main></Main>
          <SRLWrapper>
            <Gallery></Gallery>
          </SRLWrapper>
        </MainSection>
        <section id="Booking">
          <Booking></Booking>
        </section>
        <FooterSection>
          <Footer></Footer>
        </FooterSection>
      </AppSection>
      </AppProvider>
     );
}
 
export default Home;

const AppSection = styled.section`
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  /* background-color: #7cc9f5;
  
  background-image: linear-gradient(to right bottom, rgba(255,255,255, .8), rgba(255,255,255, .8)), repeating-radial-gradient( circle at 0 0, transparent 0, #7cc9f5 6px ), repeating-linear-gradient( #9c82f655, #9c82f6 ) ; */

`;
const MainSection = styled.section`
  width: 100%;
  height: auto;
  position: relative;
  display: block;
  transform: translateY(0%);
  color: black;
 
 
  @media(min-width:600px){
    transform: translateY(10%);
  }

`;

const FooterSection = styled.section`
  width: 100%;
  height: 100%;
  background:linear-gradient(to right bottom, rgba(255,255,255, .3), rgba(255,255,255, .9)) ,url(${FooterBackground});
  background-size:cover;
  background-position:center;
`;