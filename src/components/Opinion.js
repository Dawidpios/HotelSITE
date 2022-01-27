import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Opinion = () => {
  const API = "https://randomuser.me/api/?results=3";

  const [userData, setUserData] = useState([]);

  const opinion = [
    {
      id: 0,
      text: "Stayed with a group of friends for the Ireland v Georgia football game. Lovely friendly staff, spacious clean rooms and newly renovated bathrooms with amazing rain head showers. Within walking distance of all attractions. Would recommend organising an airport collection with the hotel as the local taxi drivers will try to rip you off. Small hiccup as we had to change rooms for our last night but nice bottle of Georgian wine from the manager as a thank you",
    },
    {
      id: 1,
      text: "We first were exposed to the place by a visit to the rooftop terrace, which is well worth your time whether you stay here or not. We began to get to know the owners and the staff, all of whom are very friendly and warm. We decided to book rooms here on our return from a side trip and now feel more like family than guests at a hotel. The location in old town is perfect, the food in the restaurant is great and we have used them to book transport on several occasions. When we took our side trip, they willingly offered to keep our excess luggage until our return. Very pleased with all.",
    },
    {
      id: 2,
      text: "There is an amazing intimate sky bar st Opinion Hotel. You can see cires of the parliament and the Holy Trinity church which looks beautiful at night. The have nice wines, gin and tonic, and we also sampled a cheese board which was quite good. Staff were helpful and kind. I'd recommend the roof terrace for a quiet evening. There was also a live violinist",
    },
    {
      id: 3,
      text: "All Good (Y) 1) New. 2) Clean. 3) All main tour location are easily accessible from Hotel. 4) Wonderful street view. 5) And the very good about the hotel is the staff and the hospitality they have provided is exceptionally good. Like a family",
    },
    {
      id: 4,
      text: "Nice small hotel located in ok Tbilisi, only 10 minutes walk from Freedom square. Nice terrace with wonderful night view of Tbilisi. Nice small cafes all around with live Georgian music during evenings. Clean rooms, modest breakfast.",
    },
  ];

  useEffect(() => {
    fetch(API)
      .then((response) => {
        if (response.ok) {
          return response;
        } else {
          throw new Error(console.log("Coś nie tak"));
        }
      })
      .then((response) => response.json())
      .then((data) => {
        setUserData(data.results);
      });
  }, []);

  const user = userData.map((user) => (
    <DivUser key={user.login.uuid}>
      <ImgUser src={user.picture.medium} alt=""></ImgUser>
      <UserInfoName>{`${user.name.first} ${user.name.last}`}</UserInfoName>
      <UserInfoCity>Miasto: {user.location.city}</UserInfoCity>
      <UserParagraph>
        {opinion[Math.floor(Math.random() * opinion.length)].text}
      </UserParagraph>
    </DivUser>
  ));

  return <>{user && user}</>;
};

export default Opinion;

const DivUser = styled.div`

  margin-top: 3.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`;

const ImgUser = styled.img`
  border-radius: 1.5rem;
`;

const UserInfoName = styled.h4`
  text-align: center;
  font-size: 1.9rem;
  margin: 1rem;
  color:#623889;
  @media(min-width:600px){
    font-size:1.6rem;
  }
  @media(min-width:990px){
    font-size:2rem;
  }
`;
const UserInfoCity = styled.h5`
  text-align: center;
  font-size: 1.9rem;
  margin: 1rem;
  color:#623889;
  @media(min-width:600px){
    font-size:1.4rem;
  }
`;

const UserParagraph = styled.p`
  width: 80%;
  margin: .5rem;
  text-align: justify;
  font-size:1.2rem;
  color:#A836EF;
  @media (min-width:600px){
    width:60%;
    font-size:1.2rem;

  }
  @media(min-width:990px){
    font-size:1.8rem;
  }
`;
