import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


const MyProfil = () => {

 let res = localStorage.getItem("Tablica");
 res = JSON.parse(res);
  let Acc = localStorage.getItem("Acc");
  Acc = JSON.parse(Acc);

  const User = Acc.map((e, i) => {
    let user;
    if (e.logged) {
      user = (
        <UlUser key={i}>
          <LiUser>{e.name}</LiUser>
          <LiUser>{e.lastName}</LiUser>
          <LiUser>Rezerwacje</LiUser>
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
  
  const PickReservation = res.map((e,i)=>{
    return <LiRes data-key={i} key={i}>{[e]}<button className="liDel" data-key={i}>usun</button> </LiRes>;
 
  })
       

  return (
    <>
      <section>
        <DivExit>
          <Link to="/" className="LINK">
            Wyloguj
          </Link>
        </DivExit>
        {User}
      </section>
      <ResSection className="sectionRes">
        <H3>Rezerwacje użytkownika</H3>
        <UlRezerwacja onClick={handleDeleteLi}>{PickReservation}</UlRezerwacja>
      </ResSection>
    </>
  );
};

export default MyProfil;

const DivExit = styled.div`
  position: absolute;
  right: 0;
  margin: 25px;
  color: yellow;
  z-index: 3;
  .LINK {
    text-decoration: none;
    font-size: 24px;
  }
`;
const UlUser = styled.ul`
  position: absolute;
  top: 0;
  left: 0;
  list-style: none;
  width: 50%;
  height: 10%;
  display: flex;
  justify-content: flex-start; ;
`;

const LiUser = styled.li`
  padding-left: 50px;
  margin-top: 25px;
  font-size: 20px;
`;

const ResSection = styled.section`
  position: absolute;
  top: 50%;
  left: 0;
  width: 45%;
`;

const H3 = styled.h3`
  text-align: justify;
  margin-left: 10%;
`;
const UlRezerwacja = styled.ul`
  position: relative;
  top: 50%;
  margin: 5% 0 0 10%;
  height: 100px;
  width: 100%;
  list-style: none;
`;
const LiRes = styled.li`
  margin-top: 5%;
  font-size: 20px;
`;
