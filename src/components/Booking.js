import React, {useContext} from "react";
import styled from "styled-components";

import { AppContext } from "../context/AppContext";

import roomRes1 from "../images/roomReservation1.jpg";
import roomRes2 from "../images/roomReservation2.jpg";
import roomRes3 from "../images/roomReservation3.jpg";

import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

const Booking = () => {
  const {handleButtonForm} = useContext(AppContext);
  const {oneRoom, twoPersonRoom, threePersonRoom} = useContext(AppContext);



  

  const handleCheckRoom = (e) => {
    let RoomSectionInput = document.querySelectorAll('.RoomSectionInput');
    RoomSectionInput.forEach(el=>{
      el.checked=false;
    })
    e.target.checked=true;
  };

  return (
    <BookingSection>
      <H1Booking>Zarezerwuj pobyt u nas!</H1Booking>
      <FormBooking>
        <ReservationSection>
          <h3>Wybierz date pobytu</h3>
          <br />
          <ReservationLabel>Od</ReservationLabel>
          <input className="InputReservationDateFrom" type="date"></input>
          <ReservationLabel>Do</ReservationLabel>
          <input className="InputReservationDateUntil" type="date"></input>
        </ReservationSection>
        <RoomsSection onClick={handleCheckRoom}>
          <RoomsSectionLabel >
            <RoomsSectionImg src={roomRes1}></RoomsSectionImg>
            <RoomsSectionUl>
              <RoomsSectionLi>Pokój jednoosobowy</RoomsSectionLi>
              <RoomsSectionLi>Wi-Fi</RoomsSectionLi>
              <RoomsSectionLi>TV</RoomsSectionLi>
              <RoomsSectionLi>Klimatyzacja</RoomsSectionLi>
              <RoomsSectionLi>Prywatny barek hotelowy</RoomsSectionLi>
            </RoomsSectionUl>
            <InputCheckbox value="Pokój jednoosobowy" className="RoomSectionInput" id="input" type="checkbox"></InputCheckbox>
          </RoomsSectionLabel>

          <RoomsSectionLabel >
            <RoomsSectionImg src={roomRes2}></RoomsSectionImg>
            <RoomsSectionUl>
              <RoomsSectionLi>Pokój dwuosobowy</RoomsSectionLi>
              <RoomsSectionLi>Wi-Fi</RoomsSectionLi>
              <RoomsSectionLi>TV</RoomsSectionLi>
              <RoomsSectionLi>Klimatyzacja</RoomsSectionLi>
              <RoomsSectionLi>Prywatny barek hotelowy</RoomsSectionLi>
              <RoomsSectionLi>Sejf</RoomsSectionLi>
              <RoomsSectionLi>Balkon</RoomsSectionLi>
            </RoomsSectionUl>
            <InputCheckbox value="Pokój dwuosobowy" className="RoomSectionInput"  type="checkbox"></InputCheckbox>
          </RoomsSectionLabel>

          <RoomsSectionLabel >
            <RoomsSectionImg src={roomRes3}></RoomsSectionImg>
            <RoomsSectionUl>
              <RoomsSectionLi>Pokój trzyosobowy</RoomsSectionLi>
              <RoomsSectionLi>Wi-Fi</RoomsSectionLi>
              <RoomsSectionLi>TV</RoomsSectionLi>
              <RoomsSectionLi>Klimatyzacja</RoomsSectionLi>
              <RoomsSectionLi>Sejf</RoomsSectionLi>
              <RoomsSectionLi>Jacuzzi</RoomsSectionLi>
              <RoomsSectionLi>Balkon z widokiem na góry</RoomsSectionLi>
            </RoomsSectionUl>
            <InputCheckbox value="Pokój trzyosobowy" className="RoomSectionInput"  type="checkbox"></InputCheckbox>
          </RoomsSectionLabel>
        </RoomsSection>

        <ButtonSection>
          <RoomCounter>
            <RoomCounterParagraph>
              Ilość dostępnych pokojów 1 osobowych : {oneRoom}
            </RoomCounterParagraph>
            <RoomCounterParagraph>
              Ilość dostępnych pokojów 2 osobowych : {twoPersonRoom}
            </RoomCounterParagraph>
            <RoomCounterParagraph>
              Ilość dostępnych pokojów 3 osobowych : {threePersonRoom}
            </RoomCounterParagraph>
          </RoomCounter>
          
          <Button onClick={handleButtonForm} variant="contained" endIcon={<SendIcon />}>
  Rezerwuj
</Button>
        </ButtonSection>
      </FormBooking>
    </BookingSection>
  );
};

export default Booking;

const BookingSection = styled.section`
  
  width: 100%;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom:35%;


`;
const H1Booking = styled.h1`
  font-size: 3.5rem;
  margin: 10%;
  text-align: center;
`;

const FormBooking = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

 
`;

const ReservationSection = styled.section`
  width: 100%;
  text-align: center; 
  font-size:2rem;
  
  @media(min-width:600px){
    font-size:2rem;
  }
  @media(min-width:990px){
    font-size:2.5rem;
  }
`;

const ReservationLabel = styled.label`
  margin: 1rem;
`;

const RoomsSection = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
  
  align-items: center;
  

`;

const RoomsSectionLabel = styled.label`
  position:relative;
  display: flex;
  flex-direction:column;
  justify-content: space-between;
  width: 80%;
  margin: 2.5rem;
  padding:2rem;
  @media(min-width:990px){
    flex-direction:row;
    width:80%;
  }
`;

const RoomsSectionImg = styled.img`
  width: 100%;
  @media(min-width:600px){
    width:70%;
    align-self:center;
  }
  @media(min-width:990px){
    width:40%;
    
  }
  @media(min-width:1200px){
    width:30%;
    
  }
`;

const RoomsSectionUl = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content:center;
  align-items:center;
  width: 100%;
  list-style:none;
  flex-wrap: wrap;
  text-align:justify;
  font-weight:700;
  @media(min-width:600px){
    width:70%;
    text-align:justify;
    align-self:center;
  }
  @media(min-width:990px){
    width:70%;
    text-align:justify;
    align-self:flex-start;
  }
`;
const RoomsSectionLi = styled.li`
  font-size:1.6rem;
  margin:.5rem;
  flex-grow: 1;
  @media(min-width:600px){
    font-size:1.6rem;
    margin-top:2rem;

  }

`;

const ButtonSection = styled.section`
  display: flex;
  flex-direction: column-reverse;
  width: 100%;
  justify-content: space-around;
  align-items: center;
`;



const RoomCounter = styled.div`
  margin-top:10%;
  font-weight:700;
  padding: 1rem;
 
`;

const RoomCounterParagraph = styled.p`
  font-size:1.8rem;
  margin-top: 1rem;
  @media(min-width:600px){
    font-size:2rem;
  }
`;

const InputCheckbox = styled.input`
position:absolute;
right:0;
bottom:0;
width:5%;
height: 5%;

@media(min-width:600px){
 
width:5%;
height: 5%;
}


`;