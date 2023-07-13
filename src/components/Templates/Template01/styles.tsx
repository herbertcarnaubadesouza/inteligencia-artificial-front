import styled from 'styled-components';
import { mix } from 'polished';

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

const Container = styled.div`
  width: 100%;


  display: flex; 
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: ${(props: ThemeProps) => props.theme.font.fontFamily};
  background-color: ${(props: ThemeProps) => props.theme.containerBgColor};

  h2 {
    color: ${(props: ThemeProps) => props.theme.fontTitleColor};
    font-family: ${(props: ThemeProps) => props.theme.font.fontFamily};
    z-index: 999;
  }

  p {
    color: ${(props: ThemeProps) => props.theme.fontBodyColor};
    font-family: ${(props: ThemeProps) => props.theme.font.fontFamily};
  }





  .openModal {
   
    background: #f78000e9;
    border-radius: 9.43079px;
    position: relative;
    width: 30%;
    height: 50%;
    border-radius: 1rem;
    display: flex;
    text-align:center;
    flex-direction: column;
    justify-content: space-between;
    backdrop-filter: blur(100px);
    z-index:99139;
    position: fixed;
    top: 10%;
    left: 1%;
   

 
    .scrolY {
      padding-inline:1rem;
      padding-block:1rem;
      width: 100%;
      height: 100%;
      max-height: 70vh; /* Ajuste a altura máxima conforme necessário */
      overflow-y: auto;
     
  
}
     
.scrolY::-webkit-scrollbar {
  width: 0;

}

.scrolY::-webkit-scrollbar-track {
  background-color: #f4f4f469;
}

.scrolY::-webkit-scrollbar-thumb {
  background-color: #888888;
}


   .container-secao{
    margin-bottom:1rem;
    width: 100%;
    height: auto;
    border-radius: 9.43079px;
    border: 3px solid white;
    padding-inline:1rem;
    padding-block:1rem;
    display:flex;
    flex-direction: column;
    justify-content:center;
 
    input {
      width:100%;
    padding: 0.8rem;
    border-radius: 1.5rem;
    background-color: #ffffff;
    align-items: center;
    display: flex;
    border: none;
    margin-right: 1px;
    margin-bottom: 1rem;
    border: none !important;
    caret-color: rgb(0, 0, 0);
    color: #000000;
    font-size: 16px;
    font-weight: 300;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    text-align:start;

  &::placeholder {
    color: #fff;
    font-size: 14px;
    font-weight: 300;
    margin-top: -0.5rem;
    text-align:start;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  }

  &:focus {
    outline: none;
  }


    }


   }
    
   label {
    text-align:start;
      width:100%;
    font-size: 18px;
    margin-left:2%;
    margin-bottom:0.3rem;
     color:white;
     font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;

       }


    h1 {
      width: 100%;
      text-align:center;
      margin-top:0;
      padding-top:0;
      font-size:22px;
      font-weight:600;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
      
    }
    }


    .closeModal {
     display: none;
    }
    .buttonEdit{
      cursor: pointer;
      margin:0;
      padding:0;
      display: flex;
      align-items:center;
      justify-content:center;
      width: 170px;
      height: 50px;
      gap:10px;
      position:fixed;
      top: 1%;
      font-size:16px;
      left: 1%; 
      color:white; 
      background: #f77f00;
      backdrop-filter: blur(6.77838px);
     border-radius: 9.43079px;
     font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 12px;
    display: flex;
    align-items: center;
    color: #ffffff;

     &:hover {
    cursor: pointer;
    background: #f77f00;
    backdrop-filter: blur(6.77838px);
    border-radius: 9.43079px;
  }
      
      
    }











`;

const HeaderFooter = styled.div<{ bgImage?: string }>`

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  background-image: url(${(props) => props.bgImage ? props.bgImage : 'https://cdn.discordapp.com/attachments/1116206739373691010/1116573743058268180/ThomasiWilson1_A_successful_law_firms_executive_office_with_flo_acf05fba-84f6-4416-bf37-b27f5d02a190.png'});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  padding-top: 10rem;
  padding-bottom: 20rem;

  text-align: center;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
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
    background-color: ${(props: ThemeProps) =>
    mix(0.6, '#000', props.theme.headerFooterBgColor)};
  }

  h1 {
   
    text-align: center;
    width: 700px;
    font-size: 48px;
    color: ${(props: ThemeProps) => props.theme.headerFooterTextColor};
    z-index: 999;
   
  }

  h2 {
    font-size: 22px;
    text-align: center;
    width: 800px;
    color: ${(props: ThemeProps) => props.theme.headerFooterTextColor};
    font-family: ${(props: ThemeProps) => props.theme.font.fontFamily};
    z-index: 999;
  }

  button {
    width: 300px;
    background-color: ${(props: ThemeProps) => props.theme.fontTitleColor};
    font-family: ${(props: ThemeProps) => props.theme.font.fontFamily};
    font-size: 20px;
    color: #fff;
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-left: 3rem;
    padding-right: 3rem;
    border-radius: 2rem;
    margin-top: 2rem;
    cursor: pointer;
    z-index: 999;
    border: none;

 
   

 
  }


     @media only screen and (max-width: 768px) {
      h1 {
        width: 330px;
       
        font-size: 26px;
        }
        h2 {
        width: 330px;
       
        font-size: 10px;
        }
        
  button {
    width: 200px;
    font-size:14px;
    padding-left: 0rem;
    padding-right: 0rem;

  }
  }


 
`;

const Navigation = styled.div`
  background-color: ${(props: ThemeProps) => props.theme.navigationBgColor};
  padding: 10px;

  ul {
    list-style: none;
    display: flex;
    justify-content: space-around;

    li {
      cursor: pointer;
    }
  }
`;

const AboutSection = styled.section`
width:70%;
margin-top:0 auto;
  justify-content:space-around;
  display: flex;
  align-items:center;
  flex-direction: row;
  height:auto;
  padding-block:80px;


  .about{
    width:80%;
    justify-content:center;
    display: flex;
    align-items:center;

    @media only screen and (max-width: 1700px) {
      width:85%;
  }
  }

  @media only screen and (max-width: 1000px) {
    height:auto;
  }
  @media only screen and (max-width: 768px) {
    height:auto;
    padding-block:70px;
  }
  @media only screen and (max-width: 1200px) {
    width:80%;
   
  }
  @media only screen and (max-width: 768px) {
    width:95%;
   
  }

.about-section{
  margin-top:0 auto;
  width:50%;
  @media only screen and (max-width: 1200px) {
    
    width:95%;
    margin-top: 0 auto;

 
   }
  
 
 

}
  
`;
const LogoTemplate = styled.img`
 margin:0 auto ;
  width:70%;
  height: 495px;
  margin-right: 1.5rem;
  z-index: 999;
  object-fit: contain;
  



  @media only screen and (max-width: 1540px) {
    width:100%;
    height: 495px;
    margin:0rem;
    

  }
  @media only screen and (max-width: 1200px) {
    width:100%;
    height: 495px; 
    margin:0rem;
    
  
  }
  @media only screen and (max-width: 768px) {
    width:100%;
    height: 495px; 
    margin:0rem;
    
  
  }
`;



const Info = styled.div`
  gap:20px;
  display: flex;
  @media only screen and (max-width: 650px) {

   flex-direction:column-reverse;
   align-items:center;
   justify-content:center;

  }
  #about-section {


    display: flex;
    align-items:center;
    justify-content:end;
    @media only screen and (max-width: 1200px) {
   
    height: 500px;
    width:95%;
    margin: 0 auto;
    display: flex;
    align-items:center;
   justify-content:center;

  
  }
   
    }

`;



''


const Parallax = styled.div<{ bgImage?: string }>`
  padding-block: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
 background-image: url(${(props) => props.bgImage ? props.bgImage : 'https://cdn.discordapp.com/attachments/1116206739373691010/1116573743058268180/ThomasiWilson1_A_successful_law_firms_executive_office_with_flo_acf05fba-84f6-4416-bf37-b27f5d02a190.png'});
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  position: relative;
 

  h2 {
    font-size: 40px;
    max-width: 50rem;
    color: ${(props: ThemeProps) => props.theme.headerFooterTextColor};
    font-family: ${(props: ThemeProps) => props.theme.font.fontFamily};
    z-index: 999;
    margin-top: 0;
  }
  h4 {
    color: ${(props: ThemeProps) => props.theme.headerFooterTextColor};
    font-family: ${(props: ThemeProps) => props.theme.font.fontFamily};
    z-index: 999;
    font-size: 13px;
    text-transform: uppercase;
    letter-spacing: 2px;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 10%;
    background-color: ${(props: ThemeProps) => props.theme.headerFooterBgColor};
  }

@media screen  and (max-width: 768px) {
  background-attachment: inherit;


}
  

 
`;

const ParallaxContact = styled.div<{ bgImage?: string }>`
  padding-block: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${(props) => props.bgImage ? props.bgImage : 'https://cdn.discordapp.com/attachments/1116206739373691010/1116573743058268180/ThomasiWilson1_A_successful_law_firms_executive_office_with_flo_acf05fba-84f6-4416-bf37-b27f5d02a190.png'});
  
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  position: relative;
 

  h2 {
    font-size: 10px;
    max-width: 50rem;
    color: ${(props: ThemeProps) => props.theme.headerFooterTextColor};
    font-family: ${(props: ThemeProps) => props.theme.font.fontFamily};
    z-index: 999;
    margin-top: 0;
  }
  h3 {
    max-width: 50rem;
    color: ${(props: ThemeProps) => props.theme.headerFooterTextColor};
    font-family: ${(props: ThemeProps) => props.theme.font.fontFamily};
    z-index: 999;
    font-weight: 400;
    margin-top: 0;
  }
  h4 {
    color: ${(props: ThemeProps) => props.theme.headerFooterTextColor};
    font-family: ${(props: ThemeProps) => props.theme.font.fontFamily};
    z-index: 999;
    font-size: 13px;
    text-transform: uppercase;
    letter-spacing: 2px;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 10%;
    background-color: ${(props: ThemeProps) => props.theme.headerFooterBgColor};
  }

  
 
 
  
`;

const ParallaxContent = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  h4 {
    margin:0 auto;
    width:90%;
    font-size:8px;
    margin-bottom: 20px;
  }

  h2{
    margin:0 auto;
    width:90%;
    font-size:16px;
    margin-bottom: 40px;
    font-weight:500;
  }
  h3{
    margin:0 auto;
    width:90%;
    font-size:18px;
    font-weight:700;
    margin-bottom: 20px;
  }

  a {
    background-color: #fff;
    font-size: 14px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;


    svg {
      width: 20px;
    height: 20px;
      fill: ${(props: ThemeProps) => props.theme.fontTitleColor};
    }

    &:hover {
      cursor: pointer;
    }
   
  }
`;



const Line = styled.div`
  height: 5px;
  width: 8rem;
  background-color: ${(props: ThemeProps) => props.theme.fontTitleColor};
  border: none;
  margin-bottom: 1rem;
  z-index: 999;
`;

const LineSmall = styled.div`
  height: 3px;
  width: 4rem;
  background-color: ${(props: ThemeProps) => props.theme.fontTitleColor};
  border: none;
  margin-bottom: 1rem;
  z-index: 999;
`;

const LineParallax = styled.div`
  height: 2px;
  width: 4rem;
  background-color: ${(props: ThemeProps) => props.theme.fontTitleColor};
  border: none;
  margin-bottom: 1rem;
  z-index: 999;
`;



const PracticeArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align:center;
  padding-top: 2rem;
  padding-bottom: 5rem;
  width: 100%;

  h1 {   

    font-size:28px;
    color: ${(props: ThemeProps) => props.theme.fontTitleColor};
  }

  h3 {
    color: ${(props: ThemeProps) => props.theme.fontTitleColor};
    margin-bottom: -1rem;
    font-weight: 300;
 
  }

  h4 {
   
    text-align: center;
    width: 90%;
    color: ${(props: ThemeProps) => props.theme.fontTitleColor};
    font-size:px;

    @media only screen and (max-width:  768px) {
      text-align: start;
    }
  }

  button {
    background-color: ${(props: ThemeProps) => props.theme.fontTitleColor};
    font-family: ${(props: ThemeProps) => props.theme.font.fontFamily};
    font-size: 20px;
    color: #fff;
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-left: 3rem;
    padding-right: 3rem;
    border-radius: 2rem;
    margin-top: 1rem;
    margin-bottom: 2rem;
    cursor: pointer;
    z-index: 999;
    border: none;
  }
`;

const PracticeAreaContentAll = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5rem;
  width:100%;
  margin-top:70px;

  @media only screen and (max-width: 1200px) {
    margin-top:0px;
    gap: 1rem; /* Em telas menores, exibe os componentes em coluna */
    }


  
  
`;

const PracticeAreaContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width:90%;




  @media only screen and (max-width: 1000px) {
 
 
  display: flex;
  flex-wrap: wrap; /* Permite que os componentes quebrem para uma nova linha */
  justify-content: center;
  gap: 1rem;
  width: 100%;
  margin: 0 auto;
  flex-direction: column; /* Em telas menores, exibe os componentes em coluna */
  }
      
  


 

`;

const PracticeContent = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 2rem;
  padding-right: 2rem;
 
 text-align:start;
  width:33%;
  height:auto;
  

 
  @media only screen and (max-width: 1000px) {
    height:auto;
    display: flex;
  padding: 0.3;
  text-align: start;
  width: 98%;
  


  }
   
  @media only screen and (max-width: 600px) {
    height:auto;

  }
  


`;

const Contact = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  h2 {
    font-size: 28px;
    max-width: 50rem;
    color: ${(props: ThemeProps) => props.theme.headerFooterTextColor};
    font-family: ${(props: ThemeProps) => props.theme.font.fontFamily};
    z-index: 999;
    padding-top: 2rem;
  }
`;

const Footer = styled.div`
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
      font-size: 11px;
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


const FooterContent = styled.div`

  display: flex;
  flex-direction: column;
  bottom:0;

  h2 {
    font-size: 20px;
    min-width: 12rem;
    margin-bottom: -0.5rem;
    color: ${(props: ThemeProps) => props.theme.headerFooterBgColor};
  }

  h3 {
    width: 70%;
    font-size: 18px;
    color: ${(props: ThemeProps) => props.theme.headerFooterBgColor};
    font-family: ${(props: ThemeProps) => props.theme.font.fontFamily};
  }

  h4 {
    font-size: 16px;
    font-weight: 300;
    margin-bottom: -0.5rem;
    color: ${(props: ThemeProps) => props.theme.fontTitleColor};
    font-family: ${(props: ThemeProps) => props.theme.font.fontFamily};
  }
`;

const FooterRight = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10rem;
 
`;



































export {
  Container,
  HeaderFooter,
  Navigation,
  AboutSection,
  LogoTemplate,
  Line,
  LineSmall,
  LineParallax,
  Parallax,
  ParallaxContact,
  Contact,
  ParallaxContent,
  PracticeArea,
  PracticeAreaContent,
  PracticeContent,
  PracticeAreaContentAll,
  Info,
  Footer,
  FooterContent,
  FooterRight,
};

