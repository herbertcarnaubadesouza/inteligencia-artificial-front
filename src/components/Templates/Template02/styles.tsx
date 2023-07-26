import { mix } from 'polished';
import styled from 'styled-components';

interface FontProps {
  fontFamily: string;
}

interface ThemeProps {
  theme: {
    containerBgColor: string;
    headerFooterBgColor: string;
    headerFooterTextColor: string;
    navigationBgColor: string;
    fontBodyColor: string;
    fontTitleColor: string;
    font: FontProps;
  };
}

export const Container = styled.div`
width:100%;
 box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
 
  font-family: ${(props: ThemeProps) => props.theme.font.fontFamily};
  background-color: ${(props: ThemeProps) => props.theme.containerBgColor};
  overflow-x: hidden;
  h1 {
    color: #fff;
    font-family: ${(props: ThemeProps) => props.theme.font.fontFamily};
    z-index: 999;
    font-size: 3em;
    font-weight: 600;
    text-align: left;
    margin-bottom: 10rem;
    margin-top: 50px;
    margin-left: 5%;
    width:80%;

  }
  h2 {
    color: ${(props: ThemeProps) =>
    mix(0.8, '#000', props.theme.headerFooterBgColor)};
    font-family: ${(props: ThemeProps) => props.theme.font.fontFamily};
    z-index: 999;
    font-size: 2.5em;
    margin-block: 1rem;
    font-weight: bold;
  }

  h3 {
    color: ${(props: ThemeProps) =>
    mix(0.8, '#000', props.theme.headerFooterBgColor)};
    font-family: ${(props: ThemeProps) => props.theme.font.fontFamily};
    z-index: 999;
    font-size: 1.2em;
    margin-block: 1rem;
    font-weight: bold;
    margin: 0;
  }
  span {
    color: ${(props: ThemeProps) => props.theme.fontTitleColor};
    font-family: ${(props: ThemeProps) => props.theme.font.fontFamily};
    z-index: 999;
    font-weight: inherit;
    font-size: 14px;



  }

  p {
    margin: 0;
  }

  .container-block-header {
    display: flex;
    justify-content: flex-start;
    width: 100%;
    align-items: baseline;
    gap: 2px;
    position: relative;
    margin-left:1rem;
    
  }
  @media screen and (max-width:900px) {

  span {
    font-size:12px;
    margin-left:5px;
  }

}



.active01, .active02, .active03, .active04, .active05,
.active06, .active07, .active08, .active09, .active10,
.active11, .active12, .active13, .active14, .active15,
.active16, .active17, .active18, .active19, .active20,
.active21, .active22, .active23, .active24, .active25,
.active26 {

  border: 3px dashed wheat;
  position: relative;

}
`;

export const HeaderBlock = styled.div<{ bgImage?: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-image: url(${(props) => props.bgImage ? props.bgImage : 'https://cdn.discordapp.com/attachments/1116206739373691010/1116573743058268180/ThomasiWilson1_A_successful_law_firms_executive_office_with_flo_acf05fba-84f6-4416-bf37-b27f5d02a190.png'});

  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding-top: 12rem;
  padding-bottom: 2rem;
  text-align: center;
  width: 100%;
  position: relative;


  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 50%;
    background-color: #000;
    background-color: ${(props: ThemeProps) =>
    mix(0.9, '#000', props.theme.headerFooterBgColor)};
  }

  .container-header-footer-block {
    display: flex;
    align-items: center;
    justify-content: start;
    width: 100%;
    z-index: 999;
 
    margin-left: 1.5rem;
    
    @media only screen and (max-width: 500px) {
      justify-content: center;
  }

   
    svg {
      fill: ${(props: ThemeProps) => props.theme.fontTitleColor};
    }
  }

  .header-footer-block {
    display: flex;
    align-items: center;
    gap: 8px;
    width:100%;
    justify-content:center;
  
   
 
  }

  h4 {
    color: #fff;
    font-family: ${(props: ThemeProps) => props.theme.font.fontFamily};
    z-index: 999;
    font-size: 1em;
    font-weight: 600;
    text-align: left;
    z-index: 99999;
    margin-top: 1rem;
    margin-bottom: 0;
   
  }

  @media only screen and (min-width: 1620px) {
    background-size: cover;
    object-fit: cover;
    background-position: center center;
  }

  
  @media only screen and (max-width: 768px) {
   h1{
  margin-top:4rem;
  margin-bottom:7rem;
    width: 100%;
    font-size:30px;
    text-align:center;
   
   }
   
   
  }
`;

export const LineHeader = styled.div`
  height: 1.1px;
  width: 3rem;
  background-color: ${(props: ThemeProps) => props.theme.fontTitleColor};
  border: none;
  z-index: 999;
  position: absolute;
  left: -60px;
  bottom: 8px;
`;

export const LineHeaderBottom = styled.div`
  height: 0.8px;
  width: 100%;
  background-color: #ffffff3f;
  border: none;
  margin-bottom: 1rem;
  z-index: 999;
`;
export const LineAboutSection = styled.div`
  height: 1px;
  width: 75%;
  background-color: #a7a7a73e;
  border: none;
  z-index: 999;
  margin-top: 1.5rem;
  margin-bottom: 10px;
 
 
`;

export const AboutSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 1.5rem;
  padding-block: 4rem;
  width:90%;
  margin:0 auto;
 

  @media only screen and (max-width: 1620px) {
    margin:0 auto;
    width:95%;
  
  }
  .container-block-about {
   
    display: flex;
    align-items: baseline;
    position: relative;
    
    
   
   
   
  }

  @media only screen and (max-width: 800px) {
  display: flex;
  flex-direction: column;
  margin:0 auto;
  width:90%;
   
  }
`;

export const LeftSideBlock = styled.div`
  
  width: 50%;
 
 
  
  
`;

export const RightSideBlock = styled.div`
  
  width: 50%;
  
  
`;
export const LineAbout = styled.div`
  height: 1.1px;
  width: 3rem;
  background-color: ${(props: ThemeProps) => props.theme.fontTitleColor};
  border: none;
  z-index: 999;
  position: absolute;
  left: -60px;
  bottom: 8px;
  
`;

export const FirstBlockAbout = styled.div`
  width: 60%;

  margin-right:2rem;
  @media only screen and (max-width: 1200px) {
    width: 100%;
    margin-right:1rem;
   

    h2 {
      font-size:25px;
    }
    p{
      font-size:16px;
    }
  }


  
`;
export const SecondBlockAbout = styled.div`
 
  position: relative;
  width: 50%;
  height: 585px;
  img {
    width: 100%;
    height:  100%;
    object-fit: contain;
    position: absolute;
  
  }
  @media only screen and (max-width: 1200px) {
    height: 650px;
    margin-top:1.5rem;
    width: 80%;

   
  }
  @media only screen and (max-width: 670px) {
    height: 600px;
    margin-top:2rem;
    width: 100%;

   
  }
  


`;

/*SERVICES*/

export const ServicesSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;


  background-color: ${(props: ThemeProps) =>
    mix(0.99, '#fcfcfc', props.theme.headerFooterBgColor)};

  svg {
    fill: ${(props: ThemeProps) => props.theme.fontTitleColor};
  }
 
  h2 {
    text-align: center;
 
  }

  .full-content-website {
    padding-inline: 1.5rem;
    padding-block: 5rem;
    margin-inline: auto;
   
  }
  @media screen and (max-width: 768px) {
    h2 {
    text-align: center;
    font-size:24px;
 
  }
  }
    
  
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
    height: 350px;
    margin:0 auto;


    @media only screen and (max-width: 1200px) {
    display:flex;
    flex-direction: column; 
    height:600px;
     width:100%;
     gap: 0.5rem;
   
  }

  @media only screen and (max-width: 500px) {
    display:flex;
    flex-direction: column; 
    height:750px;
     width:100%;
   
  }

  .content-block-atuacao {
    border: 1px solid #e1e1e186;
    display: flex;
    flex-direction: column;
    gap: 11px;
    justify-content: center;
    padding-inline: 30px;
    width: 34%;
    height:  100%;
    @media only screen and (max-width: 1200px) {
      height: 100%;
      width:100%;
   
   
  }
   

    .last-block-atuacao {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 16px;
      text-align: center;
      text-transform: uppercase;

      svg {
        fill: #000;
      }
    }

    &:hover {
      background-color: #fff;
      cursor: pointer;

      .last-block-atuacao {
        color: ${(props: ThemeProps) => props.theme.fontTitleColor};
      }
    }
  }
`;
export const Column = styled.div`
  margin-top: 2rem;
 
  @media only screen and (max-width: 1200px) {
    display:flex;
    flex-direction: column; 
  
  width:100%;
  
   
   
   
   
  }
 

`;

export const WhyUs = styled.section<{ bgImage?: string }>`
  display: flex;
  width: 100%;
  position: relative;
  background-image: url(${(props) => props.bgImage ? props.bgImage : 'https://cdn.discordapp.com/attachments/1116206739373691010/1116573743058268180/ThomasiWilson1_A_successful_law_firms_executive_office_with_flo_acf05fba-84f6-4416-bf37-b27f5d02a190.png'});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;


  .full-content-whyus {
    margin:0 auto;
    width:100%;
    padding-block: 10rem;
    margin-inline: 6rem;
    display: flex;
    align-items: center;
    gap: 5rem;
    justify-content:space-around;
    .left-side-whyus{
     @media screen and (max-width:900px) {
      display: none;
    }
}
   
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 55%;
    background-color: #000;
    background-color: ${(props: ThemeProps) =>
    mix(0.95, '#000', props.theme.headerFooterBgColor)};
  }

  .block-whyus {
    display: flex;
    flex-direction: column;
    z-index: 999px;
    position: relative;
    gap: 40px;
    margin-top: 30px;
 

    .wrap-block-whyus {
      display: flex;
      align-items: baseline;
      gap: 15px;
    }
  }

  .block-whyus-text {
    z-index: 999;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  h2,
  h4,
  h5 {
    color: #fff;
    position: relative;
  }

  h4 {
    margin: 0;
    font-weight: 700;
    font-size: 1.5em;
  }

  h5 {
    font-size: 18px;
    font-weight: 400;
  }

  text {
    font-weight: inherit;
    color: #d3d3d3;
    font-size: 15px;
  }
`;


export const RightSideWhyUs = styled.div`



  .rows-block {
    display: flex;
 
    
  }

  .row-div-block {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    border: 1px solid #d3d3d369;
    width: 270px;
    height: 160px;
    gap: 20px;
   

    h2 {
      margin: 0;
    }

    &:hover {
      background: #ffffff37;
      cursor: pointer;
    }

    @media screen and (max-width:900px) {
      width:230px;
      margin:0 ;


      h2{
        font-size:22px;
        span {
          font-size:16px;
        }
      }
      }
  }
`;

export const ContactSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding-block: 80px;
  gap: 30px;

  .separator-section {
    position: relative;
  }

  .separator-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 19px;
  }

  h4 {
    font-weight: 700;
    font-size: 1.4em;
    margin: 0;
  }

  h2 {
    margin: 0;
    
  }
  @media screen and (max-width:676px) {

    h2 {
   font-size: 27px;
    
  }

}
  h3 {
    font-weight: 600;
    font-size: 2.1em;
    color: #000;
    font-weight: normal;
    margin: 0;
  }

  p {
    font-size: 15px;
    color: #353535c4;
    font-weight: normal;
    margin: 0;
  }
  button {
    width: 240px;
    height: 48px;
    margin-inline: auto;
    border-radius: 0;
    border: none;
    background: ${(props: ThemeProps) => props.theme.fontTitleColor};
    color: #fff;
    text-transform: uppercase;
    font-size: 14px;

    &:hover {
      cursor: pointer;
    }
  }
`;

export const LineDivisorLeft = styled.div`
  height: 1.1px;
  width: 6rem;
  background-color: ${(props: ThemeProps) => props.theme.fontTitleColor};
  border: none;
  z-index: 999;
`;
export const LineDivisorRight = styled.div`
  height: 1.1px;
  width: 6rem;
  background-color: ${(props: ThemeProps) => props.theme.fontTitleColor};
  border: none;
  z-index: 999;
  /* position: absolute; */
  left: 60px;
`;

export const Footer = styled.div`
  width: 100%;

  .content-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-inline: 6rem;
    padding-block: 20px;
    background-color: ${(props: ThemeProps) =>
    mix(0.9, '#000', props.theme.headerFooterBgColor)};

    p {
      font-size: 15px;
      color: rgba(198, 198, 198, 0.77);
      font-weight: normal;
      margin: 0px;
    }

    
  }

  @media screen and (max-width:678px) {
    .content-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-inline: 1rem;
    padding-block: 4px;
    background-color: ${(props: ThemeProps) =>
    mix(0.9, '#000', props.theme.headerFooterBgColor)};
 p {
   
      font-size: 12px;
      color: rgba(198, 198, 198, 0.77);
      font-weight: normal;
      margin: 0px;
      display: flex;
    align-items: center;
    justify-content: end;
      width:50%;
      height:30px;

    }

 
  }
}


`;
