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
    margin-right: 35%;
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

export const HeaderBlock = styled.div<{ bgImage?: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  background-image: url(${(props) => props.bgImage ? props.bgImage : 'https://cdn.discordapp.com/attachments/1116206739373691010/1116573743058268180/ThomasiWilson1_A_successful_law_firms_executive_office_with_flo_acf05fba-84f6-4416-bf37-b27f5d02a190.png'});

  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding-top: 12rem;
  padding-bottom: 2rem;
  padding-inline: 6rem;
  text-align: center;
   margin: 0 auto;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 95%;
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
 
  width:60%;
  margin:0 auto;
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
  width: 30%;
 

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
    padding-block: 6rem;
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

export const WhyUs = styled.section<{ bgImage?: string }>`
  display: flex;
  width: 100%;
  position: relative;
  background-image: url(${(props) =>  props.bgImage? props.bgImage : 'https://cdn.discordapp.com/attachments/1116206739373691010/1116573743058268180/ThomasiWilson1_A_successful_law_firms_executive_office_with_flo_acf05fba-84f6-4416-bf37-b27f5d02a190.png'});
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
    gap: 20px;
  }

  h4 {
    font-weight: 700;
    font-size: 1.2em;
    margin: 0;
  }

  h2 {
    margin: 0;
  }

  h3 {
    font-weight: 600;
    font-size: 2.5em;
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
`;