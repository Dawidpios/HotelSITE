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
          <p>Wybierz date pobytu</p>
          <br />
          <ReservationLabel>Od
          <input className="InputReservationDateFrom" type="date"></input>
          </ReservationLabel>
          <ReservationLabel>Do
          <input className="InputReservationDateUntil" type="date"></input>
          </ReservationLabel>
        </ReservationSection>
        <RoomsSection onClick={handleCheckRoom}>
          <RoomsSectionLabel >
            <RoomsSectionImg src={roomRes1} alt="Room"></RoomsSectionImg>
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
            <RoomsSectionImg src={roomRes2} alt="Room"></RoomsSectionImg>
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
            <RoomsSectionImg src={roomRes3} alt="Room"></RoomsSectionImg>
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
          
          <Button onClick={handleButtonForm} variant="contained" endIcon={<SendIcon />} color="secondary">
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
  color:#A836EF;

`;
const H1Booking = styled.p`
  font-size: 4rem;
  margin: 10%;
  text-align: center;
  font-family: 'Pacifico', cursive;
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
  &>p{
    font-size:2rem;
    font-weight:700;
  }
`;

const ReservationLabel = styled.label`
  font-weight:700;
  margin: .2rem;
  &>input{
    color:#A836EF;
    text-align:center;
    font-size:1rem;
    font-weight:700;
    margin:1rem;
    border:.2rem solid #623889;
   
  }
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
  border:2px solid #A836EF;
  box-shadow: .1rem -.1rem 1rem .2rem #A836EF;
  
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
  flex-direction: column;
  justify-content:flex-start;
  align-items:flex-start;
  width: 100%;
  height:auto;
  list-style:none;
  flex-wrap: wrap;
  text-align:justify;
  font-weight:700;
  margin-bottom:2rem;
  color:#A836EF;
  @media(min-width:600px){
    width:70%;

    align-self:center;
  }
  @media(min-width:990px){
    flex-direction: row;
    width:80%;
    
    
  
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
  text-align:center;
  @media(min-width:600px){
    font-size:2rem;
  }
`;

const InputCheckbox = styled.input`
position:absolute;
right:5%;
bottom:2%;
width:1.5rem;
height: 1.5rem;
border:none;
z-index:-1;
&:after {
    transform: translateX(-50%);
    position: absolute;
    content: "";
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    height: 1.5rem;
    width: 1.5rem;
    border:.3rem solid #A836EF;
    border-radius:25px;
    background:white;
  }
&:checked{
  &:after{
    background:#A836EF;
    content: "";
  }
}



`;