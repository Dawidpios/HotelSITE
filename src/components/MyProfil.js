import React, {useState, useContext} from "react";
import { AppContext } from "../context/AppContext";
import { Link } from "react-router-dom";

import styled from "styled-components";

import BackGround from "../images/MyProfilBackground.jpg"

const MyProfil = () => {
  const [DisplayRes, setDisplayRes] = useState(false);
  const {userLogOut, userLogin} = useContext(AppContext);

 let res = localStorage.getItem("Tablica");
 res = JSON.parse(res);
  let Acc = localStorage.getItem("Acc");
  Acc = JSON.parse(Acc);

  const handleDisplayRes =()=>{
    setDisplayRes(!DisplayRes);
  }
  const handleBackToMainSite=()=>{
    localStorage.setItem('UserLogged', userLogin)
  }
  const User = Acc.map((e, i) => {
    let user;
    if (e.logged) {
      user = (
        <UlUser key={i}>
          <LiUser>{e.name}</LiUser>
          <LiUser>{e.lastName}</LiUser>
          <LiUser onClick={handleDisplayRes} style={{cursor: "pointer"}}>Rezerwacje</LiUser>
        </UlUser>
      );
    }

    return user;
  });

      
     


  const handleDeleteLi=(e)=>{
    if(e.target.classList.contains('liDel')){
      let index = e.target.dataset.key
      document.querySelector(`li[data-key="${index}"]`).remove();
      res.splice(index,1)
      localStorage.removeItem('Tablica');
      localStorage.setItem('Tablica', JSON.stringify(res));
      res = localStorage.getItem('Tablica')
      res = JSON.parse(res);
     
     

      
     }
     
  }
  
  const PickReservation = res?.map((e,i)=>{
    return <LiRes data-key={i} key={i}>{[e]}<ButtonDelete className="liDel" data-key={i}>Usuń</ButtonDelete> </LiRes>;
 
  })
       

  return (
    <MyProfilSection>
      <UserSection>
        <DivExit>
          <Link onClick={userLogOut} to="/HotelSITE" className="LINK">
            Wyloguj
          </Link>
          <Link onClick={handleBackToMainSite}to="/" className="LINK">
            Powrót do strony głównej
          </Link>
        </DivExit>
        {User}
      </UserSection>
     {DisplayRes && <ResSection className="sectionRes">
        <H3>Rezerwacje użytkownika</H3>
        <UlRezerwacja onClick={handleDeleteLi}>{PickReservation}</UlRezerwacja>
      </ResSection>}
    </MyProfilSection>
  );
};

export default MyProfil;
const MyProfilSection = styled.section`
width:100vw;
height:100vh;
background:linear-gradient(to right bottom, rgba(255,255,255, .7), rgba(255,255,255, .7)) , url(${BackGround});
background-size:100%;

`
const UserSection = styled.section`


`

const DivExit = styled.div`
  position: absolute;
  right: 0;
  margin: 2.5rem;
  color: yellow;
  z-index: 3;
  width:40%;
  display:flex;
  flex-direction:row-reverse;
  justify-content:space-around;
  .LINK {
    text-decoration: none;
    font-size: 2.4rem;
    &:visited{
      color:black;
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
  width: 45%;
  font-size:3.5rem;
`;

const H3 = styled.h3`
  text-align: justify;
  margin-left: 10%;
`;
const UlRezerwacja = styled.ul`
  position: relative;
  top: 50%;
  margin: 5% 0 0 10%;
  height: 10rem;
  width: 100%;
  list-style: none;

`;
const LiRes = styled.li`
  margin-top: 5%;
  font-size: 2rem;

`;
const ButtonDelete = styled.button`
 margin-left:2rem;
 display:inline-block;
 padding:0.35rem 1.2rem;
 border:.1rem solid #black;
 border-radius:0.12rem;
 text-decoration:none;
 font-weight:700;
 color:black;
 text-align:center;
 transition: all 0.2s;
 background: white;
}
&:hover{
 color:white;
 background-color:black;
cursor: pointer;

}

`;

