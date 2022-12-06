import React, { useEffect } from 'react'
import style from 'styled-components'
import { BiPhoneCall } from "react-icons/bi";
import { AiOutlineWhatsApp } from "react-icons/ai";
import Aos from 'aos';
import 'aos/dist/aos.css';


const NextProject = () => {
    
    useEffect(() => {
        Aos.init();
      }, []);
    

  return (
    <Container id='contact'>
        <Wrapper>
            <TextWrap data-aos="zoom-out" data-aos-duration="1500">
                <TopHeading>
                    <Title>LET'S WORK ON YOUR NEXT PROJECT</Title>
                    <Intro>
                    I have not finished thinking. Developer with Pedigree and Zest and
                    too much adjective that I have not
                    </Intro>
                    <Line />
                </TopHeading>
                <ContentWrap>
                    <Description>Too much adjective that I have not finished thinking.
                    Developer with Pedigree and Zest and too much adjective that I
                    have not finished thinking. This is just some dummy text. Zest
                    and too much adjective that I have not finished thinking.
                    <p>Too much adjective that I have not finished thinking.
                    Developer with Pedigree and Zest and too much adjective that I
                    have not finished thinking. This is just some dummy text. Zest
                    and too much adjective that I have</p></Description>
                </ContentWrap>
                <BrandSection>
                    <SubTitle>BRANDS WORKED WITH</SubTitle>
                    <BrandsLogoWrap>
                        <Brand><img src={"images/brand1.png"}/></Brand>
                        <Brand><img src={"images/brand2.png"}/></Brand>
                        <Brand><img src={"images/brand3.png"}/></Brand>
                        <Brand><img src={"images/brand4.png"}/></Brand>
                        <Brand><img src={"images/brand5.png"}/></Brand>
                    </BrandsLogoWrap>
                
                </BrandSection>
            </TextWrap>
            <ContactLink>
                    <Image src={"./images/MyksD.png"}/>
                    <Links> <label>Let's Talk</label>
                    <div><a href='tel: +2349091110324'><BiPhoneCall size={"35px"}/>Call</a></div>
                    <span><a href='https://wa.link/8ied4g'><AiOutlineWhatsApp size={"35px"} />Chat</a></span>
                    </Links>
            </ContactLink>
        </Wrapper>
        
    </Container>
  )
}

export default NextProject

const Container = style.div`
width: 100%;
background: rgb(28, 40, 81);
display: flex;
justify-content: center;
align-items: center;
padding-top: 60px;
padding-bottom: 80px;
color: rgba(246,246,246, 0.7);
@media screen and (max-width: 932px){
    padding-bottom: 20px;
};
`
const Wrapper = style.div`
width: 90%;
height: 100%;
// background: grey;
display: flex;
justify-content: space-around;
align-items: center;
flex-direction: row-reverse;
@media screen and (max-width: 932px){
    flex-direction: column-reverse;
};
`
const TextWrap = style.div`
width: 60%;
height: 100%;
// background: blue;
@media screen and (max-width: 932px){
    width: 80%;
    // background: red;
}
`
const TopHeading = style.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100%;
text-align: center;
color: rgba(246,246,246, 0.9);
margin-bottom: 10px;
@media screen and (max-width: 932px){
    margin-top: 50px;
}
`;
const Intro = style.div`
text-align: center;
@media screen and (max-width: 390px){
    font-size: 15px;
};
`;
const Line = style.div`
margin-top: 15px;
margin-bottom: 20px;
width:25px;
border: 4px solid;
`;
const Title = style.h2`
margin: 0;
// margin-bottom: 10px;
@media screen and (max-width: 390px){
    font-size: 20px;
};
`;
const SubTitle = style.h2`
margin: 0;
margin-top: 10px;
margin-bottom: 20px;
color: rgba(246,246,246, 0.9);
@media screen and (max-width: 510px){
    margin-bottom: -25px;
    // font-size: 25px;
};
@media screen and (max-width: 390px){
    font-size: 20px;
};
@media screen and (max-width: 328px){
    font-size: 18px;
};
`;
const ContentWrap = style.div`
width: 100%;
// height: 80%;
// background: red;
display: flex;
flex-direction: column;
// justify-content: center;
// align-items: center;
`
const Description = style.div`
width: 100%;
height: 100%;
// background: lavender;
text-align: center;
@media screen and (max-width: 390px){
    font-size: 15px;
};

`
const ContactLink = style.div`
width: 30%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
// background: rgba(31, 44, 89, 0.2);
// background: rgb(139, 145, 201);
// background: rgb(81, 99, 163);
// background: rgb(61, 80, 145);
background: #33436B;
padding-bottom: 40px;
border-radius: 50px;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
@media screen and (max-width: 932px){
    width: 70%;
    // background: red;
}
`
const Image = style.img`
width: 350px;
height: 350px;
// background: lavender;
object-fit: contain;
@media screen and (max-width: 416px){
    width: 300px;
    height: 300px;
};
@media screen and (max-width: 346px){
    width: 250px;
    height: 250px;
};
`
const Links = style.div`
width: 150px;
height: 70px;
background: transparent;
border-radius: 50px;
display: flex;
justify-content: space-around;
align-items: center;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
border: 3px solid;
color: #F6F6F6;
margin-top: 20px;
div{
    display: none;
};
span{
    display: none;
};
:hover{
    width: 200px;
    transition: all 950ms;
    cursor: pointer;
    border: 0;
    background: transparent;
    // box-shadow: none;
    div{
        display: block;
        width: 80px;
        height: 60px;
        border-radius: 50px;
        // background: #40557A;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        border: 3px solid;
        a{
            text-decoration: none;
            color: white;
        };
        :hover{
            transform:  scale(1.09);
        }
    };
    span{
        display: block;
        width: 80px;
        height: 60px;
        border-radius: 50px;
        // background: #40557A;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        border: 3px solid;
        a{
            text-decoration: none;
            color: white;
        };
        :hover{
            transform:  scale(1.09);
            transition: all 950ms;
        }
    };
    label{
        display: none;
    }
}
`
const BrandSection = style.section`
width: 100%;
height: 150px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
// background: green;
` 
const BrandsLogoWrap = style.div`
width: 100%;
height: 120px;
display: flex;
justify-content: space-between;
align-items: center;
// background: red;

@media screen and (max-width: 566px){
    // flex-direction: column;
};
` 
const Brand = style.div`
width: 100px;
height: 100px;
// background: #3D5091;
border-radius: 50px;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
img{
    width: 100px;
    height: 100px;

    border-radius: 50px;
    object-fit: cover;
    @media screen and (max-width: 698px){
        width: 80px;
        height: 80px;
    };
    @media screen and (max-width: 510px){
        width: 60px;
        height: 60px;
    };
    @media screen and (max-width: 510px){
        width: 45px;
        height: 45px;
    };
};
:hover{
    transform:  scale(1.09);
    transition: all 950ms;
    cursor: pointer;
};
@media screen and (max-width: 698px){
    width: 80px;
    height: 80px;
};
@media screen and (max-width: 510px){
    width: 60px;
    height: 60px;
};
@media screen and (max-width: 510px){
    width: 45px;
    height: 45px;
};
` 