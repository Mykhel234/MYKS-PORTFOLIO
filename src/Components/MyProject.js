import React from "react";
import style from "styled-components";

const MyProject = () => {
  return (
    <div>
      <Container id="contact">
        <Wrapper>
          <TopHeading>
            <Title>PROJECTS EXECUTED</Title>
            <Intro>
              I have not finished thinking. Developer with Pedigree and Zest and
              too much adjective that I have not
            </Intro>
            <Line />
          </TopHeading>

          <ProjectsWrap>
            <Project>
              <Image src="/images/Hero.png" />
              <TextWrap>
                <SubTitle>Name Of Project</SubTitle>
                <Description>
                  too much adjective that I have not finished thinking.
                  Developer with Pedigree and Zest and too much adjective that I
                  have not finished thinking. This is just some dummy text. Zest
                  and too much adjective that I have not finished thinking.
                </Description>
                <Button>View Full Project</Button>
              </TextWrap>
            </Project>
            <Project>
              <Image src="/images/Hero.png" />
              <TextWrap>
                <SubTitle>Name Of Project</SubTitle>
                <Description>
                  too much adjective that I have not finished thinking.
                  Developer with Pedigree and Zest and too much adjective that I
                  have not finished thinking. This is just some dummy text. Zest
                  and too much adjective that I have not finished thinking.
                </Description>
                <Button>View Full Project</Button>
              </TextWrap>
            </Project>
            <Project>
              <Image src="/images/Hero.png" />
              <TextWrap>
                <SubTitle>Name Of Project</SubTitle>
                <Description>
                  too much adjective that I have not finished thinking.
                  Developer with Pedigree and Zest and too much adjective that I
                  have not finished thinking. This is just some dummy text. Zest
                  and too much adjective that I have not finished thinking.
                </Description>
                <Button>View Full Project</Button>
              </TextWrap>
            </Project>
            {/* <Project>
              <Image src="/images/Hero.png" />
              <TextWrap>
                <SubTitle>Name Of Project</SubTitle>
                <Description>
                  too much adjective that I have not finished thinking.
                  Developer with Pedigree and Zest and too much adjective that I
                  have not finished thinking. This is just some dummy text. Zest
                  and too much adjective that I have not finished thinking.
                </Description>
                <Button>View Full Project</Button>
              </TextWrap>
            </Project>
            <Project>
              <Image src="/images/Hero.png" />
              <TextWrap>
                <SubTitle>Name Of Project</SubTitle>
                <Description>
                  too much adjective that I have not finished thinking.
                  Developer with Pedigree and Zest and too much adjective that I
                  have not finished thinking. This is just some dummy text. Zest
                  and too much adjective that I have not finished thinking.
                </Description>
                <Button>View Full Project</Button>
              </TextWrap>
            </Project>
            <Project>
              <Image src="/images/Hero.png" />
              <TextWrap>
                <SubTitle>Name Of Project</SubTitle>
                <Description>
                  too much adjective that I have not finished thinking.
                  Developer with Pedigree and Zest and too much adjective that I
                  have not finished thinking. This is just some dummy text. Zest
                  and too much adjective that I have not finished thinking.
                </Description>
                <Button>View Full Project</Button>
              </TextWrap>
            </Project> */}
          </ProjectsWrap>
        </Wrapper>
      </Container>
    </div>
  );
};

export default MyProject;

const Container = style.div`
width: 100%;
background: rgba(28, 40, 81);
background-position: top;
display: flex;
justify-content: center;
align-items: center;
padding-top: 50px;
padding-bottom: 10px;
`;
const Wrapper = style.div`
width: 90%;
height: 100%;
// background: lightgrey;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
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
margin-bottom: 60px;
width:30px;
border: 4px solid;
`;
const Title = style.h2`
margin: 0;
// margin-bottom: 50px;
`;
const ProjectsWrap = style.div`
width: 100%;
height: 100%;
display: flex;
justify-content: space-around;
flex-wrap: wrap;
padding-bottom: 50px;
`;
const Project = style.div`
width: 330px;
height: 350px;
background: white;
margin-bottom: 50px;
border-radius: 10px;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;
const Image = style.img`
width: 300px;
height: 45%;
background: lavender;
object-fit: cover;
border-radius: 10px;
`;
const TextWrap = style.div`
width: 90%;
height: 50;
// background: grey;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;
const SubTitle = style.h3`
margin: 0;
text-align: center;
margin-bottom: 10px;
`;
const Description = style.div`
font-size: small;
text-align: center;
`;
const Button = style.button`
font-weight: 600;
border: 3px solid;
margin-top: 5px;
padding: 12px 23px;
border-radius: 5px;
text-decoration: none;
outline: none;
transition: all 350ms;
transforrm: scale(1);
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
text-decoration: none;
color: #F6F6F6;
opacity: 0.8;
background: #44414C;

:hover{
    transform: scale(1.03);
    cursor: pointer;
    // background: transparent;
    // color: #44414C
};
@media screen and (max-width: 808px){
  padding: 10px 18px;
}
`;
// const Title = style.div``
// const Title = style.div``
// const Title = style.div``
// const Title = style.div``
// const Title = style.div``
