import React, {useEffect} from "react";
import style from "styled-components";
import { BsCode } from "react-icons/bs";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { AiOutlineLaptop } from "react-icons/ai";
import { AiOutlineAntDesign } from "react-icons/ai";
import { AiOutlineDesktop } from "react-icons/ai";
import { GoSearch } from "react-icons/go";
import { GrCodepen } from "react-icons/gr";


const Services = () => {

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div>
      <Container id="services">
        <Wrapper>
          <TopHeading>
            <Title>MY UNIQUE SERVICES</Title>
            <Intro>
              I have not finished thinking. Developer with Pedigree and Zest and
              too much adjective that I have not
            </Intro>
            <Line />
          </TopHeading>
          <ServiceWrap  data-aos="zoom-in" data-aos-duration="2000" data-aos-easing="linear">
            <UniqueService>
              <Heading>
                <AiOutlineLaptop size={"35px"} />
                <SubTitle>WEB DESIGN</SubTitle>
              </Heading>
              <Description>
                Too much adjective that I have not finished thinking. Developer
                with Pedigree and Zest and too much adjective that I have not
                finished thinking. This is just some dummy text. Zest and too
                much adjective that I have not finished thinking.
              </Description>
            </UniqueService>
            <UniqueService>
              <Heading>
                <BsCode size={"40px"} />
                <SubTitle>WEB DEVELOPMENT</SubTitle>
              </Heading>
              <Description>
                too much adjective that I have not finished thinking. Developer
                with Pedigree and Zest and too much adjective that I have not
                finished thinking. This is just some dummy text. Zest and too
                much adjective that I have not finished thinking.
              </Description>
            </UniqueService>
            <UniqueService>
              <Heading>
                <GoSearch size={"30px"} />
                <SubTitle>WEB RESEARCH</SubTitle>
              </Heading>
              <Description>
                too much adjective that I have not finished thinking. Developer
                with Pedigree and Zest and too much adjective that I have not
                finished thinking. This is just some dummy text. Zest and too
                much adjective that I have not finished thinking.
              </Description>
            </UniqueService>
            <UniqueService>
              <Heading>
                <GrCodepen size={"30px"} />
                <SubTitle>Branding</SubTitle>
              </Heading>
              <Description>
                too much adjective that I have not finished thinking. Developer
                with Pedigree and Zest and too much adjective that I have not
                finished thinking. This is just some dummy text. Zest and too
                much adjective that I have not finished thinking.
              </Description>
            </UniqueService>
            <UniqueService>
              <Heading>
                <AiOutlineDesktop size={"30px"} />
                <SubTitle>Project Management</SubTitle>
              </Heading>
              <Description>
                too much adjective that I have not finished thinking. Developer
                with Pedigree and Zest and too much adjective that I have not
                finished thinking. This is just some dummy text. Zest and too
                much adjective that I have not finished thinking.
              </Description>
            </UniqueService>
            <UniqueService>
              <Heading>
                <AiOutlineAntDesign size={"30px"} />
                <SubTitle>Content Writing</SubTitle>
              </Heading>
              <Description>
                too much adjective that I have not finished thinking. Developer
                with Pedigree and Zest and too much adjective that I have not
                finished thinking. This is just some dummy text. Zest and too
                much adjective that I have not finished thinking.
              </Description>
            </UniqueService>
          </ServiceWrap>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Services;

const Container = style.div`
width: 100%;
padding-top: 50px;
padding-bottom: 30px;
background: rgba(35,63,112, 0.8);
// background-image: url("/images/bg5.jpg");
background-position: top;
display: flex;
align-items: center;
justify-content: center;
color: rgba(246,246,246, 0.8);
`;
const Wrapper = style.div`
width: 90%;
height: 100%;
// background: white;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;
const TopHeading = style.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 50%;
text-align: center;
color: rgba(246,246,246, 0.9);
`;
const Intro = style.div``;
const Line = style.div`
margin-top: 15px;
margin-bottom: 25px;
width:30px;
border: 4px solid;
`;
const Title = style.h2`
margin: 0;
`;
const ServiceWrap = style.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
// background: red;
`;
const UniqueService = style.div`
width: 350px;
display: flex;
flex-direction: column;
justify-content: center;
// height: 180px;
// background: blue;
margin-left: 40px;
margin-top: 10px;
padding: 20px 0;
@media screen and (max-width: 868px){
  width: 90%;
  padding: 0;
  margin-top: 30px;
  margin-left: 0;
  text-align: center;
}
`;
const Heading = style.div`
width: 100%;
display: flex;
@media screen and (max-width: 868px){
  justify-content: center;
  align-items: center;
  margin-bottom: 8px;
}
`;
const SubTitle = style.h3`
margin 0;
margin-top: 5px;
margin-left: 10px;
`;
const Description = style.div`
font-size: 15px;
`;
// const Container = style.div``
// const Container = style.div``
