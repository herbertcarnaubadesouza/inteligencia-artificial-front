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
    font-weight: 500;
    text-align: left;
    margin-block: 0;
    margin-right: 35%;
    line-height: 1.4em;
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
`;
export const HeaderBlock = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: relative;
  background-image: url('./images/template03/bg03.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding-top: 10rem;
  padding-bottom: 7rem;
  padding-inline: 6rem;
  gap: 2.5rem;

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
    }
  }
`;

export const AboutSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  padding-block: 100px;
  padding-left: 6rem;
  padding-right: 8.2rem;
`;
export const LeftSideBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.5rem;

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
  }

  .footer-div-block {
    display: flex;
    align-items: center;
    gap: 3rem;

    .footer-div-block-content {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      width: 100%;

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
    }
  }
`;
export const RightSideBlock = styled.div`
  margin-left: -40px;
  img {
    width: 340px;
    height: 533px;
    object-fit: cover;
    box-shadow: 40px -40px 0 0 ${(props: ThemeProps) => mix(0.1, '#ffffffc6', props.theme.headerFooterBgColor)};
  }
`;
export const LineAboutSection = styled.div`
  height: 5.5px;
  width: 4.5rem;
  background-color: ${(props: ThemeProps) => props.theme.fontTitleColor};
  border: none;
  z-index: 999;
`;

export const IconSection = styled.section``;
