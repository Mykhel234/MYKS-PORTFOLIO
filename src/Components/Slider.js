import React, { Component } from "react";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import style from "styled-components";
import '../Components/App.css';

export default class SimpleSlider extends Component {
  render() {
    const settings = {
        // dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      //   autoplay: true,
      speed: 3000,
      autoplaySpeed: 2000,
      cssEase: "linear",
      pauseOnHover: true,
      centerMode: true,
        // variableWidth: true,
      adaptiveHeight: true,
      draggable: false,
      responsive: [
        {
          breakpoint: 746,
          settings:{
            //   dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 2,
          slidesToScroll: 1,
          //   autoplay: true,
          speed: 3000,
          autoplaySpeed: 2000,
          cssEase: "linear",
          pauseOnHover: true,
          centerMode: true,
           // variableWidth: true,
          adaptiveHeight: true,
          draggable: false,
          }
        },
        {
          breakpoint: 530,
          settings:{
            //   dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          //   autoplay: true,
          speed: 3000,
          arrows: true,
          // swipe: true,
          // fade: true,
          autoplaySpeed: 2000,
          cssEase: "linear",
          pauseOnHover: true,
          centerMode: true,
          draggable: false,
           // variableWidth: true,
          adaptiveHeight: true,
          }
        }
      ]
    };
    
    return (
      <Container>
        <Wrapper>
          <TopHeading>
            <Title>PROJECTS EXECUTED</Title>
            <Intro>
              I have not finished thinking. Developer with Pedigree and Zest and
              too much adjective that I have not
            </Intro>
            <Line />
          </TopHeading>
          <Carousel {...settings} className="swipeerrr">
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
          </Carousel>
        </Wrapper>
      </Container>
    );
  }
}

const Container = style.div`
width: 100%;
// background: rgba(28, 40, 81, 0.9);
background: rgb(53, 64, 102);
display: flex;
justify-content: center;
align-items: center;
padding-top: 50px;
padding-bottom: 10px;
overflow: hidden;
`;
const Wrapper = style.div`
width: 90%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: space-around;
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
margin-bottom: 60px;
width:30px;
border: 4px solid;
`;
const Title = style.h2`
margin: 0;
`;
const Carousel = style(Slider)`
display: flex;
align-items: center;
justify-content: space-around;
padding-bottom: 50px;
width: 100%;
over-flow: hidden;
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
@media screen and (max-width: 856px){
  height: 330px;
  width: 300px;
};
@media screen and (max-width: 792px){
  height: 280px;
  width: 280px;
};
`;
const Image = style.img`
width: 100%;
height: 45%;
background: lavender;
object-fit: contain;
border-radius: 10px;
@media screen and (max-width: 796px){
  height: 40%;
};
`;
const TextWrap = style.div`
width: 90%;
height: 50%;
// background: grey;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
@media screen and (max-width: 796px){
  height: 60%;
};
`;
const SubTitle = style.h3`
margin: 0;
text-align: center;
margin-bottom: 10px;
@media screen and (max-width:1166px){
  margin-bottom: 3px;
};
@media screen and (max-width: 796px){
  font-size: 14px;
};
`;
const Description = style.div`
font-size: small;
text-align: center;
margin-left: 20px;
@media screen and (max-width: 1082px){
  font-size: 12px;
};
@media screen and (max-width: 858px){
  font-size: 10px;
};
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
@media screen and (max-width: 1082px){
  padding: 10px 15px;
};
@media screen and (max-width: 1014px){
  padding: 8px 8px;
};
@media screen and (max-width: 792px){
  padding: 6px 6px;
};
@media screen and (max-width: 746px){
  padding: 4px 4px;
  font-size: 12px;
};
`;
