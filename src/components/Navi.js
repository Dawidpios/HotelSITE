import React, { useContext } from "react";
import styled from "styled-components";
import {Link} from "react-router-dom"

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

const Nav = styled.nav`
  position: fixed;
  width: 100%;
  height: 10%;
  flex-basis: auto;
  z-index: 3;
  background-color: white;
`;
const Ul = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
 
`;
const Li = styled.li`
  font-size: 20px;
  width:25%;
  text-align:center;
 
  &:hover {
    cursor: pointer;
  }
`;


const LiLogin = styled.li`
  display:flex;
  flex-direction:column;
  height: 100%;
  width:25%;
  justify-content:space-around;
  text-align:center;

  &>p{
    &:hover{
      cursor:pointer;
    }
  }

`;