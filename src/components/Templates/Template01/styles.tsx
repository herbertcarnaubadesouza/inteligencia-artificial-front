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
`;

const HeaderFooter = styled.div<{ bgImage?: string }>`

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  max-width: 100%;
  position: relative;
  background-image: url(${(props) => props.bgImage ? props.bgImage : 'https://cdn.discordapp.com/attachments/1116206739373691010/1116573743058268180/ThomasiWilson1_A_successful_law_firms_executive_office_with_flo_acf05fba-84f6-4416-bf37-b27f5d02a190.png'});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  padding-top: 20rem;
  padding-bottom: 20rem;
  padding-left: 45rem;
  padding-right: 45rem;
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
    
    text-align: center;
    min-width: 35rem;
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
width:80%;
margin-top:0 auto;
  justify-content:space-around;
  display: flex;
  align-items:center;
  flex-direction: row;
  padding-left: 12rem;
  padding-right: 12rem;
  padding-top: 3.5rem;
  height:700px;

  .about{
    width:80%;
  
  }

  
`;



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
`;

const ParallaxContact = styled.div<{ bgImage?: string }>`
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

  a {
    background-color: #fff;
    font-size: 20px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 74px;
    height: 74px;

    svg {
      fill: ${(props: ThemeProps) => props.theme.fontTitleColor};
    }

    &:hover {
      cursor: pointer;
    }
  }
`;

const LogoTemplate = styled.img`
  width: 420px;
    height: 585px;
  margin-top: -7rem;
  margin-right: 3rem;
  z-index: 999;
  object-fit: cover;


  @media only screen and (max-width: 1540px) {
    width: 420px;
    height: 485px;
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

const Info = styled.div`

  display: flex;

`;

const PracticeArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align:center;
  padding-top: 5rem;
  padding-bottom: 5rem;

  width: 100%;

  h1 {
    
    color: ${(props: ThemeProps) => props.theme.fontTitleColor};
  }

  h3 {
    color: ${(props: ThemeProps) => props.theme.fontTitleColor};
    margin-bottom: -1rem;
    font-weight: 300;
  }

  h4 {
   
    text-align: center;
    width: 70%;
    color: ${(props: ThemeProps) => props.theme.fontTitleColor};
    font-size:px;
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
    margin-bottom: 3rem;
    cursor: pointer;
    z-index: 999;
    border: none;
  }
`;

const PracticeAreaContentAll = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 12rem;
  padding-right: 12rem;
  gap: 5rem;
  width:100%;
  margin-top:70px;

  
`;

const PracticeAreaContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-bottom: 1.5rem;
  width:85%;
  margin: 0 auto;


 

`;

const PracticeContent = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 2rem;
  padding-right: 2rem;
 text-align:start;
  width:33%;
  height:310px;


`;

const Contact = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  h2 {
    font-size: 40px;
    max-width: 50rem;
    color: ${(props: ThemeProps) => props.theme.headerFooterTextColor};
    font-family: ${(props: ThemeProps) => props.theme.font.fontFamily};
    z-index: 999;
    padding-top: 2rem;
  }
`;

const Footer = styled.div`
 

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 8rem;
  padding-right: 8rem;
  padding-top: 3rem;
  padding-bottom: 5rem;

  @media only screen and (max-width: 1540px) {
    padding-inline: 4rem;
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