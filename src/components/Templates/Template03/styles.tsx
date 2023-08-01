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
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: ${(props: ThemeProps) => props.theme.font.fontFamily};
  background-color: ${(props: ThemeProps) => props.theme.containerBgColor};


  h1 {
    color: #fff;
    font-family: ${(props: ThemeProps) => props.theme.font.fontFamily};
    z-index: 999;
    font-size: 2.4rem;
    font-weight: 500;
    text-align: left;
    margin-block: 0;
    margin-right: 1%;
    line-height: 1.4em;
    width: 70%;
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
    font-weight: 700;
    font-size: 16px;
  }

  p {
    position: relative;
    margin: 0;
    color: #ffffffd5;
    font-family: ${(props: ThemeProps) => props.theme.font.fontFamily};
  }


  .active01, .active02, .active03, .active04, .active05,
.active06, .active07, .active08, .active09, .active10,
.active11, .active12, .active13, .active14, .active15,
.active16, .active17, .active18, .active19, .active20,
.active21, .active22, .active23, .active24, .active25,
.active26 {

  border: 3px dashed wheat;
  position: relative;


  input {
      width: 100%;
      padding: 0.5rem;
      border-radius: 0.5rem;
      align-items: center;
      display: flex;
      border: none;
      margin-right: 1px;
      margin-bottom: 1rem;
      border: none !important;
      caret-color: rgb(0, 0, 0);
      font-size: 16px;
      font-weight: 500;
      text-align: start;
      background: rgba(255, 255, 255, 0);
      font-family: 'Poppins';
      color: #000000;
      text-align: center;
      white-space: pre-wrap;

      &:focus {
        outline: none;
      }

     
    }


.x-margin{
  margin-bottom:2%;
}

      .white-text{
        color: #ffffff;
        font-size: 48px;
        white-space: pre-wrap;
      }

      .white-text-fonte{
        color: #ffffff;
        font-size:22px;
      
      }

      .white-text-fonte-center{
        color: #ffffff;
        font-size:20px;
        width:100vw;
        white-space: pre-wrap;
        text-align:start;
      }

      
      .white-text-fonte-c{
        color: #ffffff;
        <font-size:16></font-size:16>px;
    
        white-space: pre-wrap;
        text-align:center;
      }
      .white-text-black{
    
        height:auto;
        color: #000000;
        font-size: 16px;
        white-space: pre-wrap;
        width:100%;
      }
}
`;
export const HeaderBlock = styled.section<{ bgImage?: string }>`
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: relative;
  background-image: url(${(props) => props.bgImage ? props.bgImage : 'https://cdn.discordapp.com/attachments/1116206739373691010/1116573743058268180/ThomasiWilson1_A_successful_law_firms_executive_office_with_flo_acf05fba-84f6-4416-bf37-b27f5d02a190.png'});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding-top: 10rem;
  padding-bottom: 7rem;
  padding-inline: 2rem;
  gap: 2.5rem;
  margin: 0 auto;
  width:100%
;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 52%;
    background-color: #000;
    background-color: ${(props: ThemeProps) =>
    mix(0.92, '#000', props.theme.headerFooterBgColor)};
  }

  p {
    width: 60%;
    line-height: 1.5rem;
  }

  button {
    text-transform: uppercase;
    position: relative;
    border: none;
    width: 206px;
    height: 41px;
    font-size: 0.86666666666667rem;
    font-weight: 400;
    letter-spacing: 1px;
    color: #ffffffcd;
    border-radius: 4px;
    font-family: ${(props: ThemeProps) => props.theme.font.fontFamily};

    background-color: ${(props: ThemeProps) => props.theme.fontTitleColor};

    &:hover {
      cursor: pointer;
      background-color: #f9c349;
    }
  }
`;

export const AboutSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  padding-block: 100px;
  width: 85%;
  margin: 0 auto;

 
 
  @media only screen and (max-width: 800px) {
    padding-left: 0rem;
    padding-right: 0rem;
    width: 95%;
    display:flex;
    flex-direction:column;
    padding-top: 0rem;
   
   
    
  }


`;
export const LeftSideBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  width: 55%;
  

  
 

  @media only screen and (max-width: 1200px) {
    margin: 0 auto;
    width: 95%;
    margin-top:3rem;   margin-bottom:3rem;
   
  
  }
  .title-about-section-block {
    
    h2,
    h3 {
      color: ${(props: ThemeProps) =>
    mix(0.8, '#000', props.theme.headerFooterBgColor)};
    }

    h2 {
      font-weight: 500;
      font-size: 2.4rem;
      margin-block: 20px;
    }

    h3 {
      font-size: 1.2rem;
      font-weight: 500;
    }
  }

  p {
    color: ${(props: ThemeProps) =>
    mix(0.8, '#555555ca', props.theme.headerFooterBgColor)};
    width: 60%;
    font-weight: 400;
    line-height: 1.5rem;
    font-size:18px;
  }

  .footer-div-block {
    display: flex;
    align-items: center;
    gap: 3rem;

    .footer-div-block-content {
     
      display: flex;
      flex-direction: column;
      gap: 1rem;
      width: 30%;
     

      p {
        width: 100%;
       
      }

      h3 {
        font-size: 1.2rem;
        font-weight: 500;
        width: 100%;
      }
    }
  }

  button {
    text-transform: uppercase;
    position: relative;
    border: none;
    width: 206px;
    height: 41px;
    font-size: 0.86666666666667rem;
    font-weight: 400;
    letter-spacing: 1px;
    color: #ffffffcd;
    border-radius: 4px;
    font-family: ${(props: ThemeProps) => props.theme.font.fontFamily};

    background-color: ${(props: ThemeProps) => props.theme.fontTitleColor};

    &:hover {
      cursor: pointer;
      background-color: #f9c349;
    }
  }
`;
export const RightSideBlock = styled.div`
  width: 40%;
  margin-left: -40px;


  img {
    width: 340px;
    height: 533px;
    object-fit: cover;
    box-shadow: 40px -40px 0 0 ${(props: ThemeProps) => mix(0.1, '#ffffffc6', props.theme.headerFooterBgColor)};
  }


  @media only screen and (max-width: 1200px) {
 
    margin: 0 auto;
    width: 90%;

    display: flex;
     justify-content:center;
    align-items:center;
    margin:0;
    img {
    width: 75%;
    height: 35%;
    }

  }
  @media only screen and (max-width: 800px) {
 

  justify-content:center;



}
@media only screen and (max-width: 440px) {
 

 justify-content:center;
 margin-right:40px;



}

`;
export const LineAboutSection = styled.div`
  height: 5.5px;
  width: 4.5rem;
  background-color: ${(props: ThemeProps) => props.theme.fontTitleColor};
  border: none;
  z-index: 999;
`;

export const IconSection = styled.section`
  width: 100%;
  .Container-blocks {
    padding-block: 5rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 4rem;
   
    background-color: ${(props: ThemeProps) =>
    mix(0.9, '#ffffff', props.theme.headerFooterBgColor)};
   

  }
  .meta-icons {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    align-items: center;

    h3 {
      font-size: 27px;
      color: ${(props: ThemeProps) =>
    mix(0.8, '#252424c5', props.theme.headerFooterBgColor)};
      text-align: center;
    }

    p {
      color: ${(props: ThemeProps) =>
    mix(0.8, '#555555ca', props.theme.headerFooterBgColor)};
      font-weight: 400;
      line-height: 1.5rem;
    }
  }
  svg {
    fill: ${(props: ThemeProps) => props.theme.fontTitleColor};
  }


  @media screen and (max-width:768px){
    .Container-blocks {
      gap: 2rem;
      padding: 0rem;
      padding-block: 2.5rem;
      padding-inline: 1rem;
    }
    .meta-icons{
   
      
      h3{
        font-size: 18px;
      }
      p {
        font-size: 9px;
        text-align:center;
        line-height: 1.1rem;
      }
    }
   }
`;

export const AwardsSection = styled.section`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding-block: 100px;
  padding-left: 6rem;
  padding-right: 8.2rem;
`;

export const HeaderAwards = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
  .header-awards {
    h2,
    h3 {
      color: ${(props: ThemeProps) =>
    mix(0.8, '#000', props.theme.headerFooterBgColor)};
    }

    h2 {
      font-weight: 500;
      font-size: 2.4rem;
      margin-block: 20px;
    }

    h3 {
      font-size: 1.2rem;
      font-weight: 500;
    }
    p {
      color: ${(props: ThemeProps) =>
    mix(0.8, '#555555ca', props.theme.headerFooterBgColor)};
      width: 45%;
      font-weight: 400;
      line-height: 1.5rem;
    }
  }
`;

export const AwardsRow1 = styled.section`
width:100%;
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  justify-content: center;
  

  .awards-block {
    height:250px;
    width:33%;
    display: flex;  
    flex-direction: column;
    margin-right: 20px;
    background-color: ${(props: ThemeProps) =>
    mix(0.95, '#d9d9d912', props.theme.headerFooterBgColor)};
    border-radius: 15px;
    gap: 1rem;
    padding: 20px;
    box-shadow: 0 25px 80px -10px rgba(23.469701086956523, 24.000447704985824, 25.5, 0.15);
  
    img {
      width: 60px;
      height: auto;
    }

    h2,
    h3 {
      color: ${(props: ThemeProps) =>
    mix(0.8, '#000', props.theme.headerFooterBgColor)};
    }

    h2 {
      font-weight: 500;
      font-size: 2.4rem;
      margin-block: 20px;
    }

    h3 {
      font-size: 1.2rem;
      font-weight: 500;
    }

    p {
      color: ${(props: ThemeProps) =>
    mix(0.8, '#555555ca', props.theme.headerFooterBgColor)};
      width: 80%;
      font-weight: 400;
      line-height: 1.5rem;
    }
  }
`;

export const LineAwardsSection = styled.div`
  height: 5.5px;
  width: 4.5rem;
  background-color: ${(props: ThemeProps) => props.theme.fontTitleColor};
  border: none;
  z-index: 999;
`;

export const PraticaceSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-block: 70px;
  padding-left: 1rem;
  padding-right: 1rem;
  width: 99%;
  margin: 0 auto;
  height:auto;
  gap:50px;
  padding-block:150px;

 @media screen and (max-width:1100px){
  flex-direction:column;
  justify-content: center;
  
 }
 
`;

export const LeftAwardBlock = styled.div`
  display: flex;
  height:100%;
  flex-direction: column;
  width: 35%;
  gap: 0.5rem;
  margin-right:70px;


  img {
    margin-top: 30px;
    width:100%;
    height: 450px;
    object-fit: cover;
    box-shadow: 40px 40px 0 0
      ${(props: ThemeProps) =>
    mix(0.1, '#ffffffc6', props.theme.headerFooterBgColor)};
  }

  p {
    color: #3a3a3a;
    font-weight: 400;
    line-height: 1.5rem;
    width: 90%;
  }
  
 @media screen and (max-width:1100px){
  margin:0;
  flex-direction:column;
  width: 100%;
  display: flex;
  align-items:center;
 justify-content:center;
  height:auto;
  margin-right:0px;
  margin-bottom:25px;
h2{
  text-align:center;
  width:100%;

    font-size:26px;

margin:10px 0px;
}
  img {
    margin-top: 0px;
   
  }


 }
`;

export const RigthAwardBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 100%;
  gap: 10px;
  margin-top:0px;

 



  .Areas-block {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width:100%;
    height:auto;
    min-height:230px;
  
    @media only screen and (max-width: 1600px) {
     margin-bottom:8px;
     height:auto;
     min-height:150px;
    
   
  
  
  }


    h2 {
      font-weight: 500;
      font-size: 2.4rem;
      margin-block: 20px;
    }

    h3 {
      font-size: 1.3rem;
      font-weight: 600;
    }

    p {
      color: #3a3a3a;
      font-weight: 400;
      line-height: 1.5rem;
      width: 95%;
    }


    @media only screen and (max-width: 1100px) {
  
    width:100%;
    height:auto;
    padding-inline:15px;
    padding-block:15px;
  
   
  }
  }


  @media only screen and (max-width: 1100px) {
    
   margin: 0 auto;
  flex-direction: column;
  width: 99%;
  height: auto;
  align-items:center;
  justify-content:center;
  text-align:start;
  margin-top:0px;


 
 
 
  }

 
`;

export const HowWorksSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: end;
  width: 100%;
  height: auto;
padding-block:20px;

`;

export const HowWorksHeaderSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  height: auto;
  gap: 10px;
  margin-top: 50px;
  
 


  .Header-How-Work {
    margin: 0 auto;
    height: 50%;
    width: 90%;
    margin-bottom: 0px;
    
    
  ;
  }
  .containe-title {
    width: 100%;
    height: auto;
    margin-top: 0px;
    padding-block:20px;


    h2 {
      text-align: center;
      font-size: 45px;
      margin: 0 auto;
      width:100%;
     
     
     
    }

    p {
      text-align: center;
      text-align: center;
     
      font-size: 22px;
      margin: 0 auto;
      width: 80%;
      margin-top: 40px;

      color: #000;
    }

    @media screen and (max-width:1110px){
      
   
      h2 {
        
    
      font-size: 30px;
      margin-bottom: 20px;
   
    }
    p {
     
    
      font-size: 18px;
      margin: 0 auto;
      width: 99%;
      text-align:start;
     

     

     
    }
  }
  }

  .container-works-pai {
    margin-top: 10px;
    width: 100%;
    display: flex;
    align-items: center;
    gap: 15px;
  

 
   

    .container-works {
      margin:0 auto;
      width: 32%;
      height: auto;
    
      background-color: ${(props: ThemeProps) =>
    mix(0.95, '#eeeeee', props.theme.headerFooterBgColor)};
      justify-content: space-around;
      display: flex;
      flex-direction: column;
      text-align: center;
      border-radius: 10px;
      padding-block: 20px;
gap:3px;
min-height: 320px;


@media screen and (max-width: 1200px) {
  min-height: 270px;

  

}
      h1 {
        margin: 0 auto;
        height: auto;
        width: 95%;
        text-align: center;
        font-size: 70px;
        color: #b7bfc9; 
      }
      h2 {
        margin: 0 auto;
        width: 95%;
        height: auto;
        font-size: 22px;
        color: #000000;
        padding-bottom:5px;
      }
      p {
        height: auto;
        width: 85%;
        text-align: center;
        margin: 0 auto;
        font-size: 18px;

        color: ${(props: ThemeProps) =>
    mix(0.8, '#c9c7c7af', props.theme.headerFooterBgColor)};
      }

      
    }
    
  }

  .container-btn {
    width: 100%;
    height: 80px;
    align-items: center;
    justify-content: center;
    display: flex;
    margin-top: 20px;

    .btn {
      width: 350px;
      height: 50px;
      border: none;
      font-size: 20px;
      border-radius: 10px;
      background-color: ${(props: ThemeProps) => props.theme.fontTitleColor};
      color: #fff;
      cursor: pointer;
      font-family: ${(props: ThemeProps) => props.theme.font.fontFamily};

      &:hover {
        cursor: pointer;
        background-color: #f9c349;
      }
    }
  }

  @media screen and (max-width:1300px){
    .container-works-pai {
    margin: 0 auto;
    height: auto;
    width: 100%;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction: column;
    margin-bottom: 5px;
  
  
    
  
    .container-works {
      margin:0 auto;
      width: 99%;
      height: auto;
      background-color: ${(props: ThemeProps) =>
    mix(0.95, '#eeeeee', props.theme.headerFooterBgColor)};
      justify-content: space-around;
      display: flex;
      flex-direction: column;
      text-align: center;
      border-radius: 10px;
    }
   
  }

  
  

  
  }
`;

export const HowLocationSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 450px;
  padding-block:20px;

  
  

  .container-location {
    margin: 0 auto;
    width: 90%;
    height: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
  }

  .container-title {
    width: 100%;
    height:auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
 

    h1 {
      margin: 0 auto;
      text-align: center;
      width: 80%;
      font-size: 50px;
      margin-bottom: 20px;
      color: #000;
      font-weight: 500;
      
    }
    p {
      margin: 0 auto;
      text-align: center;
      width: 50%;
      font-size: 20px;
      color: #000;
    }
    
    @media screen and (max-width: 768px) {
      h1 {
      
      font-size: 32px;
    
      
    }
    }
   
  
  }
  .container-modalLocation {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;

    .modalLocation {
      background-color: ${(props: ThemeProps) =>
    mix(0.95, '#eeeeee', props.theme.headerFooterBgColor)};
      width: 33%;
      height: auto;
      border-radius: 30px;
      text-align: start;
      padding-block:1rem;

      .container-icon {
        height: 50px;
        margin: 0 auto;
        margin-top: 10px;
        width: 85%;
        display: flex;
        align-items: center;
        justify-content: start;
   

        h3 {
          padding-right:30px;
          margin-top:7px;
          font-size:23px;
        }
      }
      .container-p {
        height: auto;
        margin: 0 auto;
        width: 85%;
        

        p {
          margin: 12px 0px;
          font-size: 20px;
          color: #000;
        }
      }
      .container-ping {
        margin: 0 auto;
        width: 85%;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: start;

        span {
          margin-left: 7px;
          font-size: 18px;
        }
        p {
          color: ${(props: ThemeProps) => props.theme.fontTitleColor};
        }
      }
    }
    
  }

  @media screen and (max-width: 1100px) {
  height:auto;
  margin: 0 ;
  padding:0rem;
  padding-block:3rem;

  .container-modalLocation {
    width: 100%;
    height: 90%;
    flex-direction:column; 
    .modalLocation{
      margin: 0 auto;
      width: 100%;
      display:flex;
      align-items:center;
justify-content:center;
flex-direction:column;
      height: auto;
  }
  
  }

  }

 

`;

export const HowHelpSection = styled.div<{ bgImage?: string }>`
  width: 100%;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${(props) => props.bgImage ? props.bgImage : 'https://cdn.discordapp.com/attachments/1116206739373691010/1116573743058268180/ThomasiWilson1_A_successful_law_firms_executive_office_with_flo_acf05fba-84f6-4416-bf37-b27f5d02a190.png'});
  .container-help {
    height: 70%;
    width: 80%;
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .container-inf {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100%;
    width: 100%;
   

    h1 {
      text-align: center;
      margin: 0 auto;
      width: 95%;
      font-size: 35px;
      font-weight: 400;
      margin-bottom: 35px;

      @media screen  and (max-width:768px){
        font-size: 26px;
        margin-bottom: 20px;
       }
    }
    p {
      text-align: center;
      margin: 0 auto;
      width: 70%;
      font-size: 18px;
      margin-bottom: 60px;

      @media screen  and (max-width:768px){
        font-size: 14px;
        margin-bottom: 20px;
       }
    }
    }
    .btn {
      width: 340px;
      height: 50px;
      border: none;
      font-size: 20px;
      font-weight: 400;
      border-radius: 10px;
      background-color: ${(props: ThemeProps) => props.theme.fontTitleColor};
      color: #fff;
      cursor: pointer;
      font-family: ${(props: ThemeProps) => props.theme.font.fontFamily};


      @media only screen and (max-width: 1620px) {
        width: 340px;
        font-size:18px;

        
  }
  
  @media only screen and (max-width:768px) {
        width: 180px;
        font-size:14px;
        height: 40px;

  }




      &:hover {
      cursor: pointer;
        background-color: #f9c349;
      }
    }
  
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
    background-color:black;
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
