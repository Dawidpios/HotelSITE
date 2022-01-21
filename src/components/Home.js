import React from 'react';

import Gallery from "./Gallery";
import Main from "./Main";
import LogoSec from "./LogoSec";
import Navi from "./Navi";
import Booking from "./Booking";
import Footer from "./Footer";
import tlo from "../images/tlo.png"

import styled from "styled-components";
import { SRLWrapper } from "simple-react-lightbox";

import AppProvider from "../context/AppContext";

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
  /* background:linear-gradient(to right, rgba(255, 255, 255, .6), rgba(255, 255, 242, .6)), url(${tlo}); */
  /* background-size:cover; */
`;
const MainSection = styled.section`
  width: 100%;
  height: auto;
  position: relative;
  display: block;
  transform: translateY(0%);
  color: black;
  /* background:linear-gradient(to right, rgba(255, 255, 255, .7), rgba(255, 255, 242, 1)), url(${tlo});
  background-size:cover;
  clip-path: polygon(0% 0%, 100% 0, 100% 90%, 35% 100%, 0% 100%); */
  @media(min-width:990px){
    transform: translateY(0%);
  }

`;

const FooterSection = styled.section`
  width: 100vw;
  height: 50vh;
  background: black;
  color: white;
`;