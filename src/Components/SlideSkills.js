import React from "react";
import style from "styled-components";

const SlideSkills = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <SkillWrap>
            <Skill />
            <Title>Beautiful UI with Figma</Title>
          </SkillWrap>
          <SkillWrap>
            <Skill />
            <Title>Unique FrontEnd with React JS</Title>
          </SkillWrap>
          <SkillWrap>
            <Skill />
            <Title>Fuctional BackEnd with Node JS</Title>
          </SkillWrap>
          <SkillWrap>
            <Skill />
            <Title>Well Structured DataBase with Mongo DB</Title>
          </SkillWrap>
          <SkillWrap>
            <Skill />
            <Title>Incredible State Management with Redux Toolkit</Title>
          </SkillWrap>
          <SkillWrap>
            <Skill />
            <Title>Managing State with Context API</Title>
          </SkillWrap>
          <SkillWrap>
            <Skill />
            <Title>Beautiful UI</Title>
          </SkillWrap>
          <SkillWrap>
            <Skill />
            <Title>Beautiful UI</Title>
          </SkillWrap>
        </Wrapper>
      </Container>
    </div>
  );
};

export default SlideSkills;

const Container = style.div`
width: 100%;
padding: 30px 0;
background-image: url("/images/bg5.jpg");
background-position: top;
display: flex;
align-items: center;
justify-content: center;
// opacity: 0.8;
`;
const Wrapper = style.div`
width: 80%;
height: 100%;
display: flex;
justify-content: space-around;
align-items: center;
flex-wrap: wrap;
`;
const Skill = style.div`
width: 200px;
height: 200px;
border-radius: 10px;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
background: lavender;
margin: 0 20px;
`;
const SkillWrap = style.div`
margin-top: 40px;
width: 230px;
height: 240px;
display: flex;
flex-direction: column;
color: white;
align-items: center;
justify-content: space-between;
// background: blue;
`;
const Title = style.h3`
margin: 0;
text-align: center;
opacity: 0.6;
`;
// const Container = style.div``
// const Container = style.div``
