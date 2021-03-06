import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Link } from "react-router-dom";

import styled from "styled-components";

import HomeIcon from "../images/home-icon.png";
import AboutIcon from "../images/about.png";
import BookingIcon from "../images/booking.png";

const Navi = () => {
  const { handleShowLogin, userLogOut, userLogin } = useContext(AppContext);

  //  let Nav =  document.querySelector('.Nav');
  //  if(window.scrollY !== 0 ){
  //    console.log("dziala")
  //  }
  const handleNavBar = (e) => {
    if (
      e.target.classList.contains("nav-link") ||
      e.target.parentNode.classList.contains("nav-link")
    ) {
      let atr = document.getElementById(`${e.target.getAttribute("href")}`);
      atr.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };

  return (
    <>
      <Nav>
        <Ulmobile onClick={handleNavBar} className="Nav-ul">
          <Li className="nav-link" href="Home">
            <ImgMenu
              className="nav-link"
              href="Home"
              src={HomeIcon}
              alt="MenuIcon"
            />
          </Li>
          <Li className="nav-link" href="About-us">
            <ImgMenu
              className="nav-link"
              href="About-us"
              src={AboutIcon}
              alt="MenuIcon"
            />
          </Li>
          <Li className="nav-link" href="Booking">
            <ImgMenu
              className="nav-link"
              href="Booking"
              src={BookingIcon}
              alt="MenuIcon"
            />
          </Li>
          {!userLogin ? (
            <Li onClick={handleShowLogin}>Zaloguj się</Li>
          ) : (
            <LiLogin>
              <p><Link to="/myprofil">Mój profil</Link></p>
              <p onClick={userLogOut}>Wyloguj</p>
            </LiLogin>
          )}
        </Ulmobile>
        <Ul onClick={handleNavBar} className="Nav-ul">
          <Li className="nav-link" href="Home">Strona główna</Li>
          <Li className="nav-link" href="About-us">O nas</Li>
          <Li className="nav-link" href="Booking">Rezerwuj pobyt</Li>
          {!userLogin ? (
            <Li onClick={handleShowLogin}>Zaloguj się</Li>
          ) : (
            <LiLogin>
              <p>
                <Link to="/myprofil">Mój profil</Link>
              </p>
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
  background-color: rgba(255, 255, 255, 1);
  border-bottom: 0.05rem solid #A836EF;
  font-weight: 700;
  color: #a836ef;
`;
const Ul = styled.ul`
  display: none;
  @media (min-width: 600px) {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
  }
`;
const Ulmobile = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  font-size: 2rem;

  @media (min-width: 600px) {
    display: none;
  }
`;
const Li = styled.li`
  width: 25%;
  text-align: center;
  font-size: 2rem;

  &:hover {
    cursor: pointer;
  }
`;

const LiLogin = styled.li`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 35%;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  font-size: 1.5rem;

  & > p {
    font-size: 2rem;
    @media (max-width: 400px) {
      font-size: 1.6rem;
    }

    &:hover {
      cursor: pointer;
    }
    & > a {
      color: #a836ef;
      font-size: 2rem;
      text-decoration: none;
      @media (max-width: 400px) {
        font-size: 1.6rem;
        flex-direction: row;
      }
      &:visited {
        color: #a836ef;
      }
    }
  }

  @media (min-width: 600px) {
    flex-direction: row;
  }
`;

const ImgMenu = styled.img`
  width: 35%;
  height: 60%;
  @media (min-width: 400px) {
    width: 25%;
  }
`;
