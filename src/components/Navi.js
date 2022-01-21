import React, { useContext } from "react";
import styled from "styled-components";
import {Link} from "react-router-dom"
import { AiFillHome } from 'react-icons/ai';
import { FaBookOpen } from 'react-icons/fa';
import { MdHotel } from 'react-icons/md';
import { AppContext } from "../context/AppContext";

const Navi = () => {
  const {handleShowLogin, userLogOut, userLogin } =
    useContext(AppContext);

    const handleNavBar =(e)=>{
    if(e.target.classList.contains('nav-link')){
    console.log(e.target.getAttribute('href'))
    let atr = document.getElementById(`${e.target.getAttribute('href')}`);
    console.log(atr)
    atr.scrollIntoView({
      behavior:'smooth',
      block: "start",
      inline: "nearest"
    })
  }
    }
 
  return (
    <>
      <Nav   >
        <Ulmobile onClick={handleNavBar} className="Nav-ul">
        <Li className="nav-link" href="Home"><AiFillHome  href="Home" style={style}/></Li>
          <Li  className="nav-link" href="About-us"><FaBookOpen style={style}/></Li>
          <Li className="nav-link" href="Booking">{<MdHotel style={style}/>}</Li>
          {!userLogin ? (
            <Li onClick={handleShowLogin}>Zaloguj się</Li>
          ) : (
            <LiLogin>
              {userLogin} <br />
              <p><Link to="myprofil">Mój profil</Link></p>
              <p onClick={userLogOut}>Wyloguj</p>
            </LiLogin>
          )}
        </Ulmobile>
        <Ul onClick={handleNavBar} className="Nav-ul" >
          <Li className="nav-link" href="Home">Strona główna</Li>
          <Li  className="nav-link" href="About-us">O nas</Li>
          <Li className="nav-link" href="Booking">Rezerwuj pobyt</Li>
          {!userLogin ? (
            <Li onClick={handleShowLogin}>Zaloguj się</Li>
          ) : (
            <LiLogin>
              {userLogin} <br />
              <p><Link to="myprofil">Mój profil</Link></p>
              <p onClick={userLogOut}>Wyloguj</p>
            </LiLogin>
          )}
        </Ul>
      </Nav>
    </>
  );
};

export default Navi;
const style = { color: "red", fontSize: "1.5em" }
const Nav = styled.nav`
  position: fixed;
  width: 100%;
  height: 10%;
  flex-basis: auto;
  z-index: 3;
  background-color: white;
`;
const Ul = styled.ul`
  display:none;
  @media(min-width:600px){
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;}
 
`;
const Ulmobile = styled.ul`
 width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  font-size:2rem;

@media(min-width:600px){
  display:none;
}
`
const Li = styled.li`

  width:25%;
  text-align:center;
  font-size:2rem;
 
  &:hover {
    cursor: pointer;
  }
`;


const LiLogin = styled.li`
  display:flex;
  flex-direction:row;
  height: 100%;
  width:25%;
  justify-content:space-around;
  align-items:center;
  text-align:center;
  font-size:1.5rem;

  &>p{
    font-size:1.2rem;

    &:hover{
      cursor:pointer;
    }
    &>a{
      font-size:1.5rem;

    }
  }

`;