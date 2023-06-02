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
  }
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
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 30%;
    background-color: ${(props: ThemeProps) => props.theme.headerFooterBgColor};  }

  h1 {
    font-size: 48px;
    color: ${(props: ThemeProps) => props.theme.headerFooterTextColor};
    z-index: 999;
  }

  h2 {
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

const Main = styled.div`
  display: flex; 
  flex-direction: row;
  padding-left: 12rem;
  padding-right: 12rem;
  padding-top: 2.5rem;
  padding-bottom: 4rem;
`;

const LogoTemplate = styled.img`
  width: 30rem;
  height: auto;
  margin-top: -7rem;
  margin-right: 3rem;
  z-index: 999;
`;

const Line = styled.div`
  height: 5px;
  width: 8rem;
  background-color: ${(props: ThemeProps) => props.theme.fontTitleColor};  }
  border: none;
  margin-bottom: 1rem;
  z-index: 999;
`;

const Info = styled.div`
  display: flex;
`

export { Container, HeaderFooter, Navigation, Main, LogoTemplate, Line, Info };
