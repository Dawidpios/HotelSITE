import React, {useState} from 'react';
import styled from "styled-components"
import { BsGithub, BsFacebook } from 'react-icons/bs';


const Foooter = () => {

    const [value, setValue] = useState();

    const handleFooterValue = () =>{
        document.querySelector(".DivFooterUl").addEventListener("click", (e)=>{
            if(e.target.id==="FAQ"){
                setValue("FAQ")

            }
            else if(e.target.id==="Kontakt"){
                setValue(`E-mail: HotelCaravaggio@.gmial.com`);
            }
            else if(e.target.id==="Adres"){
                setValue(`U.S. -\n Stany Zjednoczone  
                AK - Alaska \n ANCHORAGE`)
            }
        })
    }

    return ( <SectionFooter>
    <DivFooterMenu>
        <DivFooterUl className='DivFooterUl' onClick={handleFooterValue}>
            <FooterLi id="FAQ">FAQ</FooterLi>
            <FooterLi id="Kontakt">Kontakt</FooterLi>
            <FooterLi id="Adres">Adres</FooterLi>
        </DivFooterUl>
        <DivFooterParagraph>{value}</DivFooterParagraph>
    </DivFooterMenu>

    <DivFooter>
        <DivFooterMe>
        <FooterLi>Strone napisał</FooterLi>
        <FooterLi>Dawid Pioś</FooterLi>
        <DivFooterMeLinks>
        <LinkIcon href="https://github.com/Dawidpios"><BsGithub/></LinkIcon>
        <LinkIcon href="https://www.facebook.com/dawid.pios.7"><BsFacebook/></LinkIcon>
        </DivFooterMeLinks>
        </DivFooterMe>
    </DivFooter>
    </SectionFooter> );
}
 
export default Foooter;


const SectionFooter = styled.section`
width:100%;
height:100%;
display:flex;
flex-direction:column;
justify-content: flex-start;
align-items:flex-start;
text-transform:uppercase;
color:#623889;
font-weight:700;

`
const DivFooter = styled.div`
width:100%;
height: 30%;
display:flex;
flex-direction:column;
justify-content: flex-start;
align-items:center;




`
const DivFooterMenu = styled.div`
width:100%;
height: 70%;
display:flex;
flex-direction:column;
justify-content: flex-start;
align-items:center;
flex-basis:70%;
flex-grow:1;


`
const DivFooterUl = styled.ul`
width:100%;
height:80%;
display:flex;
flex-direction:row;
justify-content:center;
align-items: flex-start;
list-style:none;
font-size:3.5rem;
@media(min-width:600px){
    font-size:2.5rem;
  }


`
const DivFooterMe = styled.ul`
width:100%;
height: 30%;
display:flex;
flex-direction:column;
align-items: center;
list-style:none;
letter-spacing:.15rem;
margin-top:3rem;
font-size:2rem;

@media(min-width:600px){
    font-size:3rem;
  }

`
const DivFooterMeLinks = styled.ul`
padding:1.5rem;
display:flex;
flex-direction:row;
width:100%;
justify-content:center;
`

const FooterLi = styled.li`

padding:.5rem;
height:100%;

&:hover{
    cursor:pointer;
}
`
const DivFooterParagraph = styled.p`

text-align:center;
font-size:.9rem;


`

const LinkIcon = styled.a`
margin:4rem;
color:red;
transform:scale(4.5);
font-size:2rem;
color:black;
&:last-child{
    color:blue;
}

`