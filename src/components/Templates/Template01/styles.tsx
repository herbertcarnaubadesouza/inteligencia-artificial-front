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

const Container = styled.div`
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

const HeaderFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  position: relative;
  background-image: url('./images/template01/bg01.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  padding-top: 20rem;
  padding-bottom: 20rem;
  padding-left: 45rem;
  padding-right: 45rem;
  text-align: center;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 20%;
    background-color: ${(props: ThemeProps) => props.theme.headerFooterBgColor};
  }

  h1 {
    text-align: center;
    width: 50%;
    font-size: 48px;
    color: ${(props: ThemeProps) => props.theme.headerFooterTextColor};
    z-index: 999;
  }

  h2 {
    text-align: center;
    width: 50%;
    color: ${(props: ThemeProps) => props.theme.headerFooterTextColor};
    font-family: ${(props: ThemeProps) => props.theme.font.fontFamily};
    z-index: 999;
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
  display: flex;
  flex-direction: row;
  padding-left: 12rem;
  padding-right: 12rem;
  padding-top: 2.5rem;
  padding-bottom: 4rem;
`;

const Parallax = styled.section`
  padding-block: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url('./images/template01/parallax.jpg');
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

const ParallaxContact = styled.section`
  padding-block: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url('./images/template01/contact.png');
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
  width: 30rem;
  height: 40rem;
  margin-top: -7rem;
  margin-right: 3rem;
  z-index: 999;
  object-fit: cover;

  @media only screen and (max-width: 1540px) {
    width: 40rem;
    height: 30rem;
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
  padding-top: 5rem;
  padding-bottom: 5rem;

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
  gap: 2rem;
`;

const PracticeAreaContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-bottom: 1.5rem;
`;

const PracticeContent = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 2rem;
  padding-right: 2rem;
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
