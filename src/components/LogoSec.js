import React, {useContext} from 'react';
import styled from "styled-components";

import { AppContext } from "../context/AppContext";

import videoLogo from "../images/logoVideo.mp4";

import LoginBackground from "../images/login.jpg"


const LogoSec = () => {
  const {UserLoginCheck, handleUserLogin, IncorrectPasswordParagraph} = useContext(AppContext)

  

    return ( 
    <LogoSection>
    <Logo>
      <Video  autoPlay loop muted src={videoLogo} alt="videoLogo"></Video>
      
      <H1Header>Hotel Caravaggio <br/> &#9734; &#9734; &#9734; &#9734; &#9734;</H1Header>
    
    </Logo>
    {!UserLoginCheck ? <UserLogin> 
      <FormLogin >
        <Input className='InputLogin' id="name" placeholder="Nazwa użytkownika" type="text"></Input>
        <Input className='InputLoginPass' id="password" placeholder="Hasło" type="password"></Input>
        {IncorrectPasswordParagraph && IncorrectPasswordParagraph}
       <ButtonLogin onClick={handleUserLogin}>Zaloguj</ButtonLogin>
      </FormLogin>
    </UserLogin> : null}
   
      
    

    </LogoSection> );
}
 
export default LogoSec;




const LogoSection = styled.section`
width:100%;
height: 70vh;
display: flex;
flex-direction:column;
@media(min-width:600px){
  height: auto;
  width:100%;
}
`


const Logo = styled.div`
width:100%;
height:100%;
position:relative;
top:-20%;


`

const Video = styled.video`
width:100%;
height: 100%;
align-self:flex-start;
`



const UserLogin = styled.div`
width:75%;
height:50%;

border-radius:5%;
position:fixed;
top:50%;
left:50%;
transform:translate(-50%,-50%);
background:url(${LoginBackground});
background-size:cover;
z-index:7;
font-weight:700;
font-size:1.8rem;
@media(min-width:600px){
  width:50%;
  font-size:2rem;
  
}
@media(min-width:990px){
  width:40%;
}
@media(min-width:1200px){
  width:30%;
  
}
`


const FormLogin = styled.form`
width:100%;
height: 100%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
flex-wrap:wrap;
`

const Input = styled.input`
padding:.5rem;
margin:2rem;
border:none;
border-bottom:.1rem solid black;
background-color:transparent;
text-align:center;
width:40%;
font-size:1.4rem;
&::placeholder {
  width:100%;
  font-size:1rem;
    color: black;
    @media(min-width:1200px){
  font-size:1.5rem;
  
}
  }
  &:focus {
        outline: none;
        box-shadow: none;
    }
@media(min-width:600px){
  font-size:1.6rem;
}
@media(min-width:1200px){
  font-size:1.8rem;
  
}
`

const ButtonLogin = styled.button`
padding:.5rem;
margin:2rem;
border:.1rem solid black;
text-align:center;
width:40%;
border:.2rem solid;
background: linear-gradient(to right bottom, rgba(255,255,255, .5),rgba(255,255,255, .5));
font-size:1.2rem;
text-transform:uppercase;
/* font-weight:700; */

`

const H1Header  = styled.h1`
z-index:2;
text-align:center;
font-size:3.5rem;
color:white;
position:absolute;
top:50%;
left:50%;
transform:translate(-50%,-50%);`