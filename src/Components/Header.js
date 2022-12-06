import { React, useState } from "react";
import style from "styled-components";
import { GoThreeBars } from "react-icons/go";
import { FiXCircle } from "react-icons/fi";
import { animateScroll as Scroll, Link } from "react-scroll";

const Header = () => {
  const [header, setHeader] = useState(true);

  const toggleChange = () => {
    setHeader(!header);
    console.log(header);
  };

  return (
    <>
      <Container>
        <Wrapper>
          <Avatar>
            <Logo to="home" duration={1000} smooth ={true} offset={-100}/>
            <Dot></Dot>
          </Avatar>
          <Navigations>
            <Nav to="home"  duration={1000} smooth ={true} offset={-100}>Home</Nav>
            <Nav to="skills"  duration={1000} smooth ={true} offset={-70}>About</Nav>
            <Navs to="services" duration={1000} smooth ={true} offset={-70}>Services</Navs>
            <Button to="contact" duration={1000} smooth ={true} offset={-40}>Contact Me</Button>
          </Navigations>

          {header ? (
            <Toggle onClick={toggleChange} />
          ) : (
            <Toggled onClick={toggleChange} />
          )}
        </Wrapper>
      </Container>
      {header ? null : (
        <BurgerMenu>
          <Wrap>
          <Logo/>
          <Nav onClick={toggleChange} to="home"  duration={1000} smooth ={true} offset={-100}>Home</Nav>
            <Nav onClick={toggleChange} to="skills"  duration={1000} smooth ={true} offset={-70}>About</Nav>
            <Navs onClick={toggleChange} to="services" duration={1000} smooth ={true} offset={-70}>Services</Navs>
            <Button onClick={toggleChange} to="contact" duration={1000} smooth ={true} offset={-40}>Contact Me</Button>
          </Wrap>
        </BurgerMenu>
      )}
    </>
  );
};

export default Header;

const Container = style.div`
width: 100%;
height: 80px;
background:rgb(51, 67, 107);
display: flex;
align-items: center;
justify-content: center;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
position: fixed;
z-index: 1;
`;
const Wrapper = style.div`
width: 90%;
height: 80px;
display: flex;
justify-content: space-between;
align-items: center;
// background: blue;
position: relative;
`;
const Avatar = style.div`
width:160px;
display: flex;
align-items: center;
justify-content: center;
// flex-direction: column;
// background: white;

`;
const Logo = style(Link)`
text-decoration: none;
width: 70px;
height: 70px;
border-radius: 100%;
margin-left: 50px;
background: grey;
background-image: url("/images/Logo.png");
background-position: center;
background-size: contain;
:hover{
  cursor: pointer;
};
@media screen and (max-width: 799px){
  margin: 0;
}
`;
const Dot = style.div`
text-decoration: none;
color: black;
margin: 5px;
width: 20px;
font-size: 30px;
font-weight: 600;
font-family: poppins;

`;
const Navigations = style.div`
width: 45%;
height: 80px;
display: flex;
align-items: center;
justify-content: space-around;
@media screen and (max-width: 799px){
  display: none
}
`;
const Navs = style(Link)`
font-weight: 600;
text-decoration: none;
color: #F6F6F6;
opacity: 0.8;
:hover{
  transform: scale(1.2);
  transition: all 950ms;
  cursor: pointer;
  background: transparent;
};
// @media screen and (max-width: 808px){
// padding: 10px 18px;
// }
`;
const Nav = style(Link)`
font-weight: 600;
text-decoration: none;
color: #F6F6F6;
opacity: 0.8;
:hover{
  transform: scale(1.2);
  transition: all 950ms;
  cursor: pointer;
  background: transparent;
};
// @media screen and (max-width: 808px){
// padding: 10px 18px;
// }
`;
const Button = style(Link)`
font-weight: 600;
border: 3px solid;
padding: 10px 23px;
border-radius: 5px;
text-decoration: none;
outline: none;
transition: all 350ms;
transforrm: scale(1);
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
text-decoration: none;
color: #F6F6F6;
opacity: 0.8;

:hover{
    transform: scale(1.03);
    cursor: pointer;
    background: transparent;
};
@media screen and (max-width: 808px){
  padding: 10px 18px;
}
`;

const Toggle = style(GoThreeBars)`
display: none;
@media screen and (max-width: 799px){
    display: block;
    font-size: 40px;
    margin-right: 30px;
    color: white;
  };

`;
const Toggled = style(FiXCircle)`
display: none;
@media screen and (max-width: 799px){
  display: block;
  display: block;
    font-size: 40px;
    margin-right: 30px;
    color: white;
};
`;

const BurgerMenu = style.div`
  display: none;
  
@media screen and (max-width: 799px){
  display: block;
  width: 280px;
  height: 400px;
  background:rgb(51, 67, 107);
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
};
`;
const Wrap = style.div`
width: 80%;
// background: blue;
height: 90%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
`;
// const Hold = style.div``
// const Hold = style.div``
