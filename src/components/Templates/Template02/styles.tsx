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
    color: ${(props: ThemeProps) => props.theme.fontTitleColor};
    font-family: ${(props: ThemeProps) => props.theme.font.fontFamily};
    z-index: 999;
  }
  span {
    color: ${(props: ThemeProps) => props.theme.fontTitleColor};
    font-family: ${(props: ThemeProps) => props.theme.font.fontFamily};
    z-index: 999;
    font-weight: inherit;
  }

  .container-block-header {
    display: flex;
    justify-content: flex-start;
    width: 100%;
    align-items: baseline;
    gap: 20px;
    margin-left: -6rem;
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
  padding-inline: 15rem;
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
    /* width: 100%; */
    object-fit: cover;
    background-position: center center;
  }
`;

export const LineHeader = styled.div`
  height: 1px;
  width: 2.5rem;
  background-color: ${(props: ThemeProps) => props.theme.fontTitleColor};
  border: none;
  margin-bottom: 1rem;
  z-index: 999;
`;

export const LineHeaderBottom = styled.div`
  height: 0.8px;
  width: 100%;
  background-color: #ffffff3f;
  border: none;
  margin-bottom: 1rem;
  z-index: 999;
`;
