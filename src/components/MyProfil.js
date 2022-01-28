import React, { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Link } from "react-router-dom";

import styled from "styled-components";

import BackGround from "../images/MyProfilBackground.png";

const MyProfil = () => {
  const [DisplayRes, setDisplayRes] = useState(true);
  const { userLogOut, userLogin } = useContext(AppContext);
  let AllRes = localStorage.getItem("AllRes");
  AllRes = JSON.parse(AllRes);
  let OldRes;
  let res = localStorage.getItem("Tablica");
  res = JSON.parse(res);
  let Acc = localStorage.getItem("Acc");
  Acc = JSON.parse(Acc);

  if (res) {
    OldRes = localStorage.getItem("OldRes");
    OldRes = JSON.parse(OldRes);
    AllRes = [...res];

    if (OldRes) {
      res = [...res, ...OldRes];
      res = new Set(res);
      res = [...res];

      AllRes = [];
      AllRes = [...res];
      localStorage.setItem("AllRes", JSON.stringify(AllRes));
    }
  }

  const handleDisplayRes = () => {
    setDisplayRes(!DisplayRes);
  };
  const handleBackToMainSite = () => {
    localStorage.setItem("UserLogged", userLogin);
    if (AllRes) {
      localStorage.setItem("OldRes", JSON.stringify(AllRes));
    }
  };
  const User = Acc.map((e, i) => {
    let user;
    if (e.logged) {
      user = (
        <UlUser key={i}>
          <LiUser>{e.name}</LiUser>
          <LiUser>{e.lastName}</LiUser>
          <LiUser onClick={handleDisplayRes} style={{ cursor: "pointer" }}>
            Rezerwacje
          </LiUser>
        </UlUser>
      );
    }

    return user;
  });

  const handleDeleteLi = (e) => {
    if (e.target.classList.contains("liDel")) {
      let index = e.target.dataset.key;
      document.querySelector(`li[data-key="${index}"]`).remove();

      AllRes.splice(index, 1);

      localStorage.setItem("AllRes", JSON.stringify(AllRes));
      AllRes = localStorage.getItem("AllRes");
      AllRes = JSON.parse(AllRes);

      AllRes = [...AllRes];
      console.log(AllRes);
      localStorage.removeItem("OldRes");
      localStorage.removeItem("Tablica");

      console.log(OldRes);
      console.log(res);
      return AllRes;
    }
  };
  console.log(AllRes);
  const PickReservation = AllRes?.map((e, i) => {
    return (
      <LiRes data-key={i} key={i}>
        {[e]}
        <ButtonDelete className="liDel" data-key={i}>
          Usuń
        </ButtonDelete>{" "}
      </LiRes>
    );
  });

  return (
    <MyProfilSection>
      <UserSection>
        <DivExit>
          <Link onClick={userLogOut} to="/HotelSITE" className="LINK">
            Wyloguj
          </Link>
          <Link
            onClick={handleBackToMainSite}
            to="/HotelSITE/"
            className="LINK"
          >
            Powrót do strony głównej
          </Link>
        </DivExit>
        {User}
      </UserSection>
      {DisplayRes && (
        <ResSection className="sectionRes">
          <H3>Rezerwacje użytkownika</H3>
          <UlRezerwacja onClick={handleDeleteLi}>
            {PickReservation}
          </UlRezerwacja>
        </ResSection>
      )}
    </MyProfilSection>
  );
};

export default MyProfil;
const MyProfilSection = styled.section`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      to right bottom,
      rgba(255, 255, 255, 0.7),
      rgba(255, 255, 255, 0.7)
    ),
    url(${BackGround});
  background-size: cover;
`;
const UserSection = styled.section`
  display: flex;
  width: 40%;
  font-weight: 700;
  color:#A836EF;
`;

const DivExit = styled.div`
  position: absolute;
  right: 0;
  margin: 2.5rem;
  z-index: 3;
  width: 30%;
  display: flex;
  flex-direction: column-reverse;
  align-items: space-around;
  .LINK {
    color: #A836EF;
    text-decoration: none;
    font-size: 2.4rem;
    margin-bottom: 2rem;
    &:visited {
      color: #A836EF;
    }
  }
`;
const UlUser = styled.ul`
  position: absolute;
  top: 0;
  left: 0;
  list-style: none;
  width: 60%;
  height: 10%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start; ;
`;

const LiUser = styled.li`
  padding-left: 5rem;
  margin-top: 2.5rem;
  font-size: 2rem;
`;

const ResSection = styled.section`
  position: absolute;
  top: 30%;
  left: 0;
  width: 65%;
  font-size: 3.5rem;
  height: 70%;
`;

const H3 = styled.h3`
  text-align: justify;
  margin-left: 10%;
  color:#A836EF;
`;
const UlRezerwacja = styled.ul`
  position: relative;
  margin: 5% 0 0 10%;
  height: 70%;
  width: 60%;
  list-style: none;
`;
const LiRes = styled.li`
  font-size: 2rem;
  color:#623889;
  font-weight:700;
  padding:.5rem;
`;
const ButtonDelete = styled.button`
  width: 10%;
	height: 5%;
	cursor: pointer;
	font-size: 20px;
	font-weight: bold;
	color: #A836EF;
	background: white;
	border: 2px solid #623889;
	box-shadow: 5px 5px 0 #623889,
		-5px -5px 0 #623889,
		-5px 5px 0 #623889,
		5px -5px 0 #623889;
	transition: 500ms ease-in-out;
  margin:2.5rem;
}
&:hover{
  color:white;
  background: #A836EF;
	box-shadow: 20px 5px 0 #623889, -20px -5px 0 #623889;
cursor: pointer;
}
&:focus {
	outline: none;
}

`;
