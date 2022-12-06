import React from "react";
import style from "styled-components";
import { BsFacebook } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillGooglePlusCircle } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { GrLinkedin } from "react-icons/gr";

const Hero = () => {
  return (
    <Container id="home">
      <Wrapper>
        <HeroImage>
          <img src={"/images/Hero.png"} />
        </HeroImage>
        <Contents>
          <SubTitle>Hello, I am</SubTitle>
          <Title>Dev. MICHAEL OYILAWU</Title>
          <Description>
            I am Charismatic Leader, A Brand Strategist, A Content Writer, <b>A Creative Web Designer,</b> A Project Manager, <b>a Full Stack Developer</b> and A preacher of Javascript.
            <p>
              With My Vast Knowledge and Experience with interacting with  <b>Javascript Libraries(React Js)</b> as a <b>FrontEnd Engineer,</b> and interacting with it run time <b>BackEnd Enviroment(Node Js)</b> as a <b>BackEnd Engineer,</b> coupled with my willingness to learn  and work with others, I will be a Great tool in helping your Organization achieve their goal.
            </p>
            <p>
            <b>Feel free to reach me</b> via <b>the Social Handles below.</b> It will be a great pleasure to work with you and <b>bring your virtual imagination to a reality.</b>
            </p>
          </Description>
          <Credentials>
            <SocialHandleWrap>
              <Handles href='https://wa.link/8ied4g'>
                <AiOutlineWhatsApp
                  size={"35px"}
                  color={"green"}
                  opacity={"0.9"}
                />
              </Handles>
              <Handles href="mailto: mykhel234@gmail.com">
                <AiFillGooglePlusCircle
                  size={"35px"}
                  color={"#673AB7"}
                  opacity={"0.9"}
                />
              </Handles>
              <Handles href="https://www.linkedin.com/in/michaeloyilawu/">
                <GrLinkedin size={"35px"} color={"#0A66C2"} opacity={"0.9"} />
              </Handles>

              <Handles href="https://web.facebook.com/mykhel.oyilawu1">
                <BsFacebook size={"35px"} color={"#042C8A"} opacity={"0.9"} />
              </Handles>

              <Handles href="https://twitter.com/MykhelOyilawu">
                <AiOutlineTwitter
                  size={"35px"}
                  color={"blue"}
                  opacity={"0.9"}
                />
              </Handles>
              <Handles href="https://www.instagram.com/oyilawumykhel/">
                <BsInstagram size={"35px"} color={"#F44336"} opacity={"0.9"} />
              </Handles>
            </SocialHandleWrap>
            <Button><a href="https://drive.google.com/file/d/1nuo9LGYs4QegcYnGcKkjbWrAgt6dbhhR/view?usp=sharing" download>DOWNLOAD CV</a></Button>
          </Credentials>
        </Contents>
      </Wrapper>
    </Container>
  );
};

export default Hero;

const Container = style.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
background: #F1F1F1;
`;
const Wrapper = style.div`
width: 86%;
height; 100%;
display: flex;
justify-content: space-evenly;
align-items: center;
@media screen and (max-width: 864px){
    flex-direction: column;
  };
`;
const HeroImage = style.div`
width: 50%;
padding: 90px 0 40px 0;
display: flex;
justify-content: center;
align-items: center;
img{
  width: 500px;
  object-fit: cover;
  @media screen and (max-width: 864px){
    
    width: 300px;
  };
};

`;
const Contents = style.div`
padding-top: 150px;
width: 50%;
display: flex;
flex-direction: column;
justify-content: center;
// align-items: center;
@media screen and (max-width: 864px){
  width: 100%;
  padding-bottom: 50px;
};
`;

const SubTitle = style.div`
margin: 0;
padding: 0;
// text-align: center;
font-size: 26px;
@media screen and (max-width: 1078px){
  font-size: 20px;
};
@media screen and (max-width: 1016px){
  // margin-top: 30px;
};
@media screen and (max-width: 864px){
  display: none;
};
`;
const Title = style.h3`
margin: 0;
margin-top: -8px;
padding: 0;
// text-align: center;
font-size: 40px;
@media screen and (max-width: 1078px){
  font-size: 35px;
};
@media screen and (max-width: 950px){
  font-size: 32px;
};
@media screen and (max-width: 864px){
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -160px;
};
@media screen and (max-width: 432px){
  font-size: 25px;
};
@media screen and (max-width: 432px){
  font-size: 23px;
};
`;
const Description = style.p`
@media screen and (max-width: 870px){
  font-size: 14px;
};
@media screen and (max-width: 862px){
  text-align: center;
};
@media screen and (max-width: 432px){
  font-size: 12px;
};
// text-align: center;
`;

const Button = style.button`
font-weight: 600;
border: 3px solid;
padding: 15px 23px;
width: 200px;
border-radius: 50px;
text-decoration: none;
outline: none;
transition: all 350ms;
transforrm: scale(1);
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
text-decoration: none;
color: #F6F6F6;
opacity: 0.8;
background: #44414C;
margin 40px 0;

:hover{
    transform: scale(1.1);
    cursor: pointer;
    transition: all 950ms;
    // background: transparent;
    // color: #44414C
};
@media screen and (max-width: 808px){
  margin-top: 30px;
};
a{
  text-decoration: none;
  color: white;
};
`;

const Credentials = style.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
// margin-top: 18px;
@media screen and (max-width: 884px){
  margin-top: 5px;
};
@media screen and (max-width: 862px){
  justify-content: center;
  align-items: center;
};
`;
const SocialHandleWrap = style.div`
width: 60%;
display: flex;
justify-content: space-around;
`;
const Handles = style.a`
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
display: flex;
justify-content: center;
align-items: center;
:hover{
  transform:  scale(1.2);
  transition: all 950ms;
  cursor: pointer;
}
`;
// const Title = style.div``
// const Title = style.div``
// const Title = style.div``
// const Title = style.div``
// const Title = style.div``
// const Title = style.div``
// const Title = style.div``
