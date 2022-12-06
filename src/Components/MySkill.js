import React, {useEffect} from "react";
import style from "styled-components";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { FiFigma } from "react-icons/fi";
import { GrReactjs } from "react-icons/gr";
import { TbApiApp } from "react-icons/tb";
import { TbApi } from "react-icons/tb";
import { AiFillHtml5, AiOutlineFundProjectionScreen } from "react-icons/ai";
import { IoLogoNodejs } from "react-icons/io";
import { SiRedux, SiMongodb, SiMysql, SiTailwindcss } from "react-icons/si";

const MySkill = () => {

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <Container id="skills">
      <Wrapper>
        <Image>
          <img src={"/images/MYKW.png"} />
        </Image>
        <Contents>
          <TopHeading>
            <Title>SKILLS ACQUIRED</Title>
            <Intro>
              I have not finished thinking. Developer with Pedigree and Zest and
              too much adjective that I have not
            </Intro>
            <Line />
          </TopHeading>
          <SkillWrap data-aos="fade-up" data-aos-easing="linear" data-aos-duration="2000">
            <Skill>
              <FiFigma size={"35px"} color={"black"} opacity={"0.8"} />
              <div>FIGMA</div>
            </Skill>
            <Skill>
              <GrReactjs size={"35px"} color={"green"} opacity={"0.9"} />
              <div>REACT JS</div>
            </Skill>
            <Skill>
              <IoLogoNodejs size={"35px"} color={"black"} opacity={"0.9"} />
              <div>NODE JS</div>
            </Skill>
            <Skill>
              <SiMongodb size={"35px"} color={"green"} opacity={"0.9"} />
              <div>MONGO DB</div>
            </Skill>
            <Skill>
              <SiMysql size={"35px"} color={"black"} />
              <div>MYSQL</div>
            </Skill>
            <Skill>
              <SiRedux size={"35px"} color={"green"} opacity={"0.9"} />
              <div>REDUX TOOLKIT</div>
            </Skill>
            <Skill>
              <TbApiApp size={"35px"} color={"black"} opacity={"0.9"} />
              <div>CONTEXT API</div>
            </Skill>
            <Skill>
              <AiFillHtml5 size={"35px"} color={"green"} opacity={"0.9"} />
              <div>HTML</div>
            </Skill>
            <Skill>
              <SiTailwindcss size={"35px"} color={"black"} opacity={"0.9"} />
              <div>CSS</div>
            </Skill>
            <Skill>
              <AiOutlineFundProjectionScreen
                size={"35px"}
                color={"green"}
                opacity={"0.9"}
              />
              <div>
                Project <br />
                Management
              </div>
            </Skill>
            <Skill>
              <TbApi size={"35px"} color={"green"} opacity={"0.9"} />
              <div>CONTEXT API</div>
            </Skill>
          </SkillWrap>
        </Contents>
      </Wrapper>
    </Container>
  );
};

export default MySkill;

const Container = style.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
color: white;
background-image: url("/images/bg3.png");
background: rgb(64, 85, 122);
`;
const Wrapper = style.div`
width: 86%;
height; 100%;
display: flex;
justify-content: space-evenly;
align-items: center;
flex-direction: row-reverse;
@media screen and (max-width: 1047px){
    flex-direction: column;
  };
`;
const Image = style.div`
width: 50%;
padding: 10px 0 10px 0;
display: flex;
justify-content: center;
align-items: center;
flex-direction: row-reverse;

img{
  width: 400px;
  object-fit: cover;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 50px;
  @media screen and (max-width: 938px){
    width: 300px;
  };
  @media screen and (max-width: 864px){
    width: 300px;
  };
  
};

`;

const Contents = style.div`
padding-top: 70px;
width: 50%;
display: flex;
flex-direction: column;
justify-content: center;
// align-items: center;
@media screen and (max-width: 1048px){
    width: 100%;
  };
@media screen and (max-width: 864px){
  width: 100%;
  padding-bottom: 50px;
};
`;

const TopHeading = style.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100%;
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
// margin-bottom: 50px;
`;
const SkillWrap = style.p`
width: 100%;

display: flex;
justify-content: space-around;
align-items: center;
flex-wrap: wrap;
// background: blue;
@media screen and (max-width: 1048px){
    width: 100%;
  };
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

const Skill = style.div`
margin-top: 20px;
width: 150px;
height: 150px;
background: lavender;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border-radius: 10px;

div{
    text-align: center;
    color: #40557A
}
`;
// const Title = style.div``
// const Title = style.div``
// const Title = style.div``
// const Title = style.div``
// const Title = style.div``
// const Title = style.div``
// const Title = style.div``
