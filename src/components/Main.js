import React, { useState, useEffect }  from "react";

import Opinion from "./Opinion";

import styled from "styled-components";
import Button from '@mui/material/Button';
import { AiFillStar } from "react-icons/ai";
import { CircularProgressbar } from "react-circular-progressbar";
import {buildStyles} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";




const Main = () => {
  
  const [barGrow, setBarGrow] = useState(true);
  const [percentageFirstBar, setPercentageFirstBar] = useState(0);
  const [percentageSecondBar, setPercentageSecondBar] = useState(0);
  const [percentageThirdBar, setPercentageThirdBar] = useState(0);
  const [guests, setGuests] = useState(0);
  const [reservation, setReservation] = useState(0);

  const [type, setType] = useState(1);

  const handleMainButton = (e) => {
    if (e.target.getAttribute("id")) {
      let id = e.target.getAttribute("id");
      setType(Number(id));
      document.querySelectorAll(".active")
      .forEach(button => {
      return button.classList.remove("active");
      });
      e.target.classList.add("active");
    }
  
  };

  useEffect(() => {
    let intervalID;
    if (percentageFirstBar === 98) {
      setBarGrow(false);
    }

    if (barGrow && type === Number(2)) {
      intervalID = setInterval(() => {
        setPercentageFirstBar(percentageFirstBar + 1);
        if (percentageSecondBar !== 70) {
          setPercentageSecondBar(percentageSecondBar + 1);
        }
        if (percentageThirdBar !== 50) {
          setPercentageThirdBar(percentageThirdBar + 1);
        }
        setGuests(guests + 10 * 3);
        setReservation(reservation + 4);
      }, 50);
    }
    if (type !== Number(2)) {
      setPercentageFirstBar(0);
      setPercentageSecondBar(0);
      setPercentageThirdBar(0);
      setReservation(0);
      setGuests(0);
      setBarGrow(true);
    }

    return () => clearInterval(intervalID);
  }, [
    type,
    percentageFirstBar,
    percentageSecondBar,
    percentageThirdBar,
    guests,
    reservation,
    barGrow,
  ]);

  return (
    <>
      <H2Main>Poznaj nas</H2Main>
      <DivButtonContainer
        className="DivButtonContainer"
        onClick={handleMainButton}
      > 
        <Button variant="contained" size="large" id="1" color="secondary">Informacje</Button>
        <Button variant="contained" size="large" id="2"  color="secondary">Statystyki</Button>
        <Button variant="contained" size="large" id="3"  color="secondary">Opinie</Button>
    
      </DivButtonContainer>
      <DivMain className="DivMain">
        {type === 1 && (
          <ParagraphMain>
            Caravaggio to nowy obiekt w standardzie 5
            <AiFillStar style={{ color: "DarkGoldenRod" }} />, położony w
            malowniczym zakątku gór, na zboczu Alp, otulony zielenią i czystym
            powietrzem. Niezapomniany widok na panoramę gór oraz dolinę czynią
            to miejsce wyjątkowym. To tutaj, w pięknych okolicznościach górskiej
            przyrody, w nowoczesnych wnętrzach hotelowych, można skorzystać z
            wielu górskich atrakcji, zarówno latem jak i zimą. Spędzą tu Państwo
            niezapomniane wakacje z rodziną, romantyczny weekend lub udane
            spotkanie biznesowe.
          </ParagraphMain>
        )}
        {type === 2 && (
          <Statistics>
            <DivBar>
              <CircularProgressbar
                value={percentageFirstBar}
                text={`${percentageFirstBar}%`}
                styles={buildStyles({
                  textColor: "#623889",
                  pathColor: "green",
                  trailColor: "#E7D8EA",
                  strokeLinecap: "butt"
                })}
                strokeWidth={5}
              />
              <ParagraphBarPercentage>
                Zadowolonych gości
              </ParagraphBarPercentage>
            </DivBar>
            <DivBar>
              <CircularProgressbar
                value={percentageSecondBar}
                text={`${percentageSecondBar}%`}
                styles={buildStyles({
                  textColor: "#490E81",
                  pathColor: "orange",
                  trailColor: "#E7D8EA",
                  strokeLinecap: "butt"
                })}
                strokeWidth={5}
              />
              <ParagraphBarPercentage>Zajętych pokoi</ParagraphBarPercentage>
            </DivBar>
            <DivBar>
              <CircularProgressbar
                value={percentageThirdBar}
                text={`${percentageThirdBar}%`}
                styles={buildStyles({
                  textColor: "#490E81",
                  pathColor: "green",
                  trailColor: "#E7D8EA",
                  strokeLinecap: "butt"
                })}
                strokeWidth={5}
              />
              
              <ParagraphBarPercentage>
                Zniżki na pokój!
              </ParagraphBarPercentage>
            </DivBar>
            <DivBarParagraph>
              <ParagraphBar>Było już u nas {guests} gości</ParagraphBar>
              <ParagraphBar>
                Obecnie dokonanych jest {reservation} rezerwacji
              </ParagraphBar>
            </DivBarParagraph>
          </Statistics>
        )}
        {type === 3 && (
          <OpinionSection>
            <Opinion></Opinion>
          </OpinionSection>
        )}
      </DivMain>
    </>
  );
};

export default Main;



const H2Main = styled.p`
  margin-top: 8rem;
  font-size: 4rem;
  text-align: center;
  color:#A836EF;
  letter-spacing:1rem;
  font-family: 'Pacifico', cursive;


`;

const DivMain = styled.div`
  width: 80%;
  height: auto;
  border: .1rem solid #490E81;
  border-radius:.5rem;
  position: relative;
  left: 50%;
  transform: translate(-50%);
  padding: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: .1rem -.1rem 1rem .2rem #A836EF;
  
 @media(min-width:990px){
   width:80%;
 }
`;
const DivButtonContainer = styled.div`

  position: relative;
  width: 100%;
  left: 50%;
  transform: translate(-50%, 50%);
  display: flex;
  justify-content:center;
  align-items:center;
  z-index: 2;
  @media (min-width:600px){
    justify-content:space-around;
  }
  @media (min-width:990px){

  }
`;



const ParagraphMain = styled.p`
  height: 100%;
  width: 100%;
  text-align: justify;
  margin: 0 auto;
  letter-spacing: .08rem;
  padding: .2rem;
  letter-spacing:.15rem;
  font-size:1.2rem;
  color:#A836EF;
  font-weight:700;
  @media(min-width:600px){
    font-size:1.4rem;
  }
  @media(min-width:990px){
    font-size:1.6rem;
  }
`;

const Statistics = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  @media (min-width:600px){
    flex-direction:row;
    justify-content:space-between;
  }
`;

const DivBar = styled.section`
  width: 40%;
  margin-top:1rem;
  @media (min-width:600px){
    width:20%;
    align-self:center;
    margin-top:0rem;
  }
`;

const DivBarParagraph = styled.section`
  display: flex;
  flex-direction:column;
  justify-items:center;
  width: 55%;
  height: 30%;
  font-size:2.5rem;
  color: #A836EF;
  @media(min-width:600px){
    font-size:2.4rem;
    width: 25%;
  }
  @media(min-width:990px){
    font-size:3.5rem;
    width: 20%;
  }

`;

const ParagraphBarPercentage = styled.p`
  text-align: center;
  margin-top: 10%;
  font-size:1.5rem;
  color:#A836EF;
  font-weight:700;
  @media (min-width:600px){
  transform:translateX(-5%);
  width:120%;
  font-size:1rem;
  margin-top:20%;
  }
  @media (min-width:990px){
  transform:translateX(-10%);
  width:120%;
  font-size:1.8rem;
  margin-top:20%;
  }
`;

const ParagraphBar = styled.p`
  width: 100%;
  height: 100%;
  text-align: center;
  margin-top:2rem;
  
`;

const OpinionSection = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  @media(min-width:600px){
    flex-direction:row;
  }
`;
