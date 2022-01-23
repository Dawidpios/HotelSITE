import React, { createContext, useState } from "react";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [oneRoom, setOneRoom] = useState(50);
  const [twoPersonRoom, setTwoPersonRoom] = useState(10);
  const [threePersonRoom, setThreePersonRoom] = useState(3);
  const [UserLoginCheck, setUserLoginCheck] = useState(true);
  const [IncorrectPasswordParagraph, setIncorrectPass] = useState(false);
  const [userLogin, setUserLogin] = useState(localStorage.getItem?.('UserIsLogged?'));

  // Użytkownicy
  const [Accounts] = useState([
    {
      name: "William",
      lastName: "Reyes",
      login: "user1",
      password: "user1",
      reservation: [],
      logged: false,
    },
    {
      name: "Jenny",
      lastName: "Willis",
      login: "user2",
      password: "user2",
      reservation: [],
      logged: false,
    },

    {
      name: "Monika",
      lastName: "Lis",
      login: "user3",
      password: "user3",
      reservation: [],
      logged: false,
    },
  ]);

  //  Obsługa przycisku Rezerwuj pokój, dodanie rezerwacji do konta użytkownika

  const handleButtonForm = (e) => {
    e.preventDefault();
    let from = document.querySelector(".InputReservationDateFrom");
    let Until = document.querySelector(".InputReservationDateUntil");
    let RoomSectionInput = document.querySelectorAll(".RoomSectionInput");
    let input;
    let logCheck = localStorage.getItem('Login');
    console.log(logCheck)
    RoomSectionInput.forEach((e) => {
      if (e.checked === true) {
        input = e.value;
        
        switch (e.value) {
          case "Pokój jednoosobowy": {
            if(logCheck){
            if (oneRoom > 0) {
              setOneRoom(oneRoom - 1);
            } else {
              setOneRoom(
                "Niestety nie mamy już wolnych pokojów jednoosobowych"
              );
            }}
            break;
          }
          case "Pokój dwuosobowy": {
            if(logCheck){
            if (twoPersonRoom > 0) {
              setTwoPersonRoom(twoPersonRoom - 1);
            } else {
              setTwoPersonRoom(
                "Niestety nie mamy już wolnych pokojów dwuosobowych"
              );
            }};
            break;
          }
          case "Pokój trzyosobowy": {
            if(logCheck){
            if (threePersonRoom > 0 ) {
              setThreePersonRoom(threePersonRoom - 1);
            } else {
              setThreePersonRoom(
                "Niestety nie mamy już wolnych pokojów trzyosobowych"
              );
            }};
            break;
          }
          default: {
          }
        }
      }
    });
    const res = `${from.value} - ${Until.value} ${input}`;

    let AccIndex = Accounts.findIndex((checkIsLogged) => checkIsLogged);
    if (logCheck && from.value && Until.value) {
      console.log(AccIndex)
      Accounts[AccIndex].reservation.push(res);
      localStorage.setItem(
        "Tablica",
        JSON.stringify(Accounts[AccIndex].reservation)
      );
    } else {
      alert(
        "Przepraszamy, musisz się zalogować oraz wyznaczyć termin by dokonać rezerwacji"
      );
    }
  };
  //
  // Obsługa przycisku zaloguj
  //
  const handleShowLogin = () => {
    setUserLoginCheck(!UserLoginCheck);
  };
  //
  // Logowanie użytkownika
  //
  const handleUserLogin = (e) => {
    e.preventDefault();
    let InputLogin = document.querySelector(".InputLogin");
    let InputLoginPass = document.querySelector(".InputLoginPass");

    if (InputLogin.value !== "" && InputLoginPass !== "") {
      Accounts.forEach((e, i) => {
        if (
          e.login === InputLogin.value &&
          e.password === InputLoginPass.value
        ) {
          e.logged = true;
          localStorage.setItem('Login', e.login);
          localStorage.setItem(
            "Acc",
            JSON.stringify(Accounts)
          );
        
          let LoggedUser = localStorage.getItem('Acc');
          LoggedUser = JSON.parse(LoggedUser)
          LoggedUser.filter(e=>{
            if(e.logged){
              setUserLogin(true);
              localStorage.setItem('UserIsLogged?', userLogin)
              setUserLoginCheck(!UserLoginCheck);
              setIncorrectPass(false);
            }
          })          
       
        } else {
          setIncorrectPass("Nieprawidłowy login lub hasło");
        }
      });
    } else {
      setIncorrectPass("Wypełnij wszystkie pola formularza");
    }
  };
  //
  // Wylogowanie użytkownika
  //
  const userLogOut = () => {

    Accounts.filter((e) => {
      
      localStorage.clear();
      e.logged = false;
      setUserLogin(false);
    
       
      
    });
  };

  return (
    <AppContext.Provider
      value={{
        Accounts,
        handleButtonForm,
        oneRoom,
        twoPersonRoom,
        threePersonRoom,
        handleShowLogin,
        UserLoginCheck,
        handleUserLogin,
        IncorrectPasswordParagraph,
        userLogin,
        userLogOut,
     
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
