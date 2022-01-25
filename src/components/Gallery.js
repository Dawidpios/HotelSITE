import React from 'react';
import styled from "styled-components";

import HotelRoom1 from "../images/hotelRoom1.jpg";
import HotelRoom2 from "../images/hotelRoom2.jpg";
import HotelRoom3 from "../images/hotelRoom3.jpg";
import HotelRoom4 from "../images/hotelRoom4.jpg";

import HotelView1 from "../images/hotelView1.jpg";
import HotelView2 from "../images/hotelView2.jpg";
import HotelView3 from "../images/hotelView3.jpg";
import HotelView4 from "../images/hotelView4.jpg";

const Gallery = () => {
    return ( <GallerySection>

    <RoomSection>
  
        <DivImgRoom><Img src={HotelRoom1} alt="HotemRoomImage"></Img></DivImgRoom>
        <DivImgRoom><Img src={HotelRoom2} alt="HotemRoomImage"></Img></DivImgRoom>
        <DivImgRoom><Img src={HotelRoom3} alt="HotemRoomImage"></Img></DivImgRoom>
        <DivImgRoom><Img src={HotelRoom4} alt="HotemRoomImage"></Img></DivImgRoom>
      
    </RoomSection>
    <ViewSection>
   
        <DivImgView><Img src={HotelView1} alt="HotemViewImage"></Img></DivImgView>
        <DivImgView><Img src={HotelView2} alt="HotemViewImage"></Img></DivImgView>
        <DivImgView><Img src={HotelView3} alt="HotemViewImage"></Img></DivImgView>
        <DivImgView><Img src={HotelView4} alt="HotemViewImage"></Img></DivImgView>
  
    </ViewSection>
    
    </GallerySection> );
}
 
export default Gallery;


const GallerySection = styled.section`
width:100%;

height: auto;
display:flex;
flex-direction:column;
flex-wrap:wrap;
justify-content: center;
align-items:center;
margin-bottom:15%;
margin-top:20%;
@media(min-width:600px){
    flex-direction:row;
}
@media(min-width:990px){
    justify-content: space-around;
}
`

const RoomSection = styled.section`
width:100%;

display: flex;
flex-direction:column;
justify-content: center;
align-items:center;
flex-wrap:wrap;
flex-shrink:1;

@media(min-width:600px){
    flex-direction:row;
    width:45%;
}
@media(min-width:990px){
    flex-direction:row;
    width:35%;
}
@media(min-width:1200px){

width:25%;
}
`


const ViewSection = styled.section`
width:100%;

display: flex;
flex-direction:column;
justify-content: center;
align-items:center;
flex-wrap:wrap;
flex-shrink:1;
@media(min-width:600px){
    flex-direction:row;
    width:45%;
}
@media(min-width:990px){
    flex-direction:row;
    width:35%;
}
@media(min-width:1200px){

    width:25%;
}
`

const DivImgRoom = styled.div`
width:100%;
height:30rem;
padding:2rem;



transition:.4s;

&:hover{
    cursor:pointer;
    transform:scale(1.2);
}

`
const DivImgView = styled.div`
width:100%;
height:30rem;
padding:2rem;


transition:.4s;

&:hover{
    cursor:pointer;
    transform:scale(1.2);
}

`

const Img = styled.img`
height: 100%;
width:100%;

`