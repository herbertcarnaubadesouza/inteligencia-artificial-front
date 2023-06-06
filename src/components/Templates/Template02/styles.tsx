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
    font-size: 3em;
    font-weight: 600;
    text-align: left;
    margin-bottom: 10rem;
    margin-top: 10px;
    margin-right: 15%;
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
    font-size: 16px;
  }

  p {
    margin: 0;
  }

  .container-block-header {
    display: flex;
    justify-content: flex-start;
    width: 100%;
    align-items: baseline;
    gap: 20px;
    position: relative;
  }
`;

export const HeaderBlock = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  background-image: url('./images/template02/bg02.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding-top: 12rem;
  padding-bottom: 2rem;
  padding-inline: 6rem;
  text-align: center;

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
    justify-content: space-between;
    width: 100%;
    z-index: 999;

    svg {
      fill: ${(props: ThemeProps) => props.theme.fontTitleColor};
    }
  }

  .header-footer-block {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  h4 {
    color: #fff;
    font-family: ${(props: ThemeProps) => props.theme.font.fontFamily};
    z-index: 999;
    font-size: 2em;
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
  width: 85%;
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
  padding-inline: 6rem;
  padding-block: 5rem;

  .container-block-about {
    display: flex;
    align-items: baseline;
    position: relative;
  }
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
  width: 50%;

  .bottom-about-section {
    display: flex;
    justify-content: space-between;

    .block-bottom {
      display: flex;
      flex-direction: column;
      gap: 0.6rem;
    }

    svg {
      fill: ${(props: ThemeProps) => props.theme.fontTitleColor};
    }
  }
`;
export const SecondBlockAbout = styled.div`
  position: relative;
  img {
    width: 420px;
    height: 485px;
    object-fit: cover;
    position: absolute;
    bottom: 50px;
  }
  background-color: transparent;
  background-image: linear-gradient(
    90deg,
    rgba(177, 151, 107, 0) 50%,
    rgba(177, 151, 107, 0.08) 50%
  );

  width: 520px;
  height: 585px;
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
    padding-inline: 6rem;
    padding-block: 5rem;
    margin-inline: auto;
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;

  .content-block-atuacao {
    border: 1px solid #e1e1e186;
    display: flex;
    flex-direction: column;
    gap: 11px;
    justify-content: center;
    padding-inline: 30px;
    width: 248px;
    height: 222px;

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
`;
