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
                setValue(`Numer telefonu          534-237-211 \n e-mail: HotelCaravaggio@.gmial.com`);
            }
            else if(e.target.id==="Adres"){
                setValue(`U.S. -\n Stany Zjednoczone  
                AK - Alaska \n ANCHORAGE`)
            }
        })
    }

    return ( <SectionFooter>
    <DivFooter>
        <DivFooterUl className='DivFooterUl' onClick={handleFooterValue}>
            <FooterLi id="FAQ">FAQ</FooterLi>
            <FooterLi id="Kontakt">Kontakt</FooterLi>
            <FooterLi id="Adres">Adres</FooterLi>
        </DivFooterUl>
        <DivFooterParagraph>{value}</DivFooterParagraph>
    </DivFooter>

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
flex-direction:row;
justify-content: flex-start;
align-items:flex-start;
text-transform:uppercase;
color:#623889;
font-weight:700;

`
const DivFooter = styled.div`
width:100%;
height: 45%;
display:flex;
flex-direction:column;
justify-content: flex-start;
align-items:center;
flex-basis:45%;



`
const DivFooterUl = styled.ul`
width:100%;
height:35%;
display:flex;
flex-direction:row;
justify-content:center;
align-items: flex-start;
list-style:none;
flex-basis:40%;
font-size:3.5rem;
@media(min-width:600px){
    font-size:2.5rem;
  }


`
const DivFooterMe = styled.ul`
width:100%;

display:flex;
flex-direction:column;
align-items: center;
list-style:none;
font-size:18px;
letter-spacing:1.5px;
margin-top:30px;
font-size:3rem;

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
margin-top:5px;
padding:5px;

&:hover{
    cursor:pointer;
}
`
const DivFooterParagraph = styled.p`
width:100%;
text-align:center;
font-size:18px;
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