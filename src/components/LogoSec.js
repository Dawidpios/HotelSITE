import React, {useContext} from 'react';
import styled from "styled-components";
import videoLogo from "../images/logoVideo.mp4";
import { AppContext } from "../context/AppContext";


const LogoSec = () => {
  const {UserLoginCheck, handleUserLogin, IncorrectPasswordParagraph} = useContext(AppContext)

  

    return ( 
    <LogoSection>
    <Logo>
      <Video  autoPlay loop muted src={videoLogo}></Video>
      <H1Header>Hotel Caravaggio</H1Header>
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
height: 100vh;
display: flex;
flex-direction:column;
@media(min-width:990px){
  height: auto;
  width:100%;
}
`


const Logo = styled.div`
width:100%;
height:100%;
position:relative;
top:-25%;


`

const Video = styled.video`
width:100%;
height: 100%;
align-self:flex-start;





`


const UserLogin = styled.div`
width:75%;
height:50%;
border:1px solid black;
border-radius:5%;
position:fixed;
top:50%;
left:50%;
transform:translate(-50%,-50%);
background-image: linear-gradient(to left bottom, #97adce, #96bece, #a9ccca, #c4d6cb, #dde0d6);
z-index:7;
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
padding:5px;
margin:20px;
border:1px solid black;
text-align:center;
`

const ButtonLogin = styled.button`
padding:5px;
margin:20px;
border:1px solid black;
text-align:center;

`

const H1Header  = styled.h1`
z-index:2;
text-align:center;
font-size:35px;
color:white;
position:absolute;
top:50%;
left:50%;
transform:translate(-50%,-50%);`