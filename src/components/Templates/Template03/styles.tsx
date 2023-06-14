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
export const HeaderBlock = styled.section<{ bgImage?: string }>`
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: relative;
  background-image: url(${(props) =>  props.bgImage? props.bgImage : 'https://cdn.discordapp.com/attachments/1116206739373691010/1116573743058268180/ThomasiWilson1_A_successful_law_firms_executive_office_with_flo_acf05fba-84f6-4416-bf37-b27f5d02a190.png'});
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

export const IconSection = styled.section`
  width: 100%;
  .Container-blocks {
    padding-block: 5rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 5rem;
    background-color: ${(props: ThemeProps) =>
      mix(0.8, '#d4d2d21c', props.theme.headerFooterBgColor)};
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
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  justify-content: center;

  .awards-block {
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
  justify-content: space-between;
  background-color: ${(props: ThemeProps) =>
    mix(0.95, '#d9d9d912', props.theme.headerFooterBgColor)};
  padding-block: 100px;
  padding-left: 6rem;
  padding-right: 8.2rem;
`;

export const LeftAwardBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  gap: 0.5rem;

  img {
    margin-top: 30px;
    width: 507px;
    height: 338px;
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
`;

export const RigthAwardBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  gap: 2.5rem;

  .Areas-block {
    display: flex;
    flex-direction: column;
    gap: 1rem;

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
      color: #3a3a3a;
      font-weight: 400;
      line-height: 1.5rem;
      width: 90%;
    }
  }
`;

export const HowWorksSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 800px;
`;

export const HowWorksHeaderSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 60%;
  gap: 10px;

  .Header-How-Work {
    margin: 0 auto;
    height: 50%;
    width: 90%;
  }
  .containe-title {
    width: 100%;
    height: 200px;
    margin-top: 60px;

    h2 {
      text-align: center;
      font-size: 45px;

      margin-bottom: 40px;
    }

    p {
      text-align: center;
      margin: 0 auto;
      text-align: center;
      width: 60%;
      font-size: 22px;

      color: #000;
    }
  }

  .container-works-pai {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 15px;

    .container-works {
      width: 33%;
      height: 270px;
      background-color: ${(props: ThemeProps) =>
        mix(0.95, '#eeeeee', props.theme.headerFooterBgColor)};
      justify-content: space-a;
      display: flex;
      flex-direction: column;
      text-align: center;
      border-radius: 7%;

      h1 {
        margin-top: 20px;
        height: 33%;
        width: 100%;
        text-align: center;
        font-size: 70px;
        color: #b7bfc9;
      }
      h2 {
        height: 15%;
        font-size: 25px;
        color: #000000;
      }
      p {
        height: 40%;
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
      width: 200px;
      height: 50px;
      border: none;
      font-size: 20px;
      border-radius: 10px;
      background-color: ${(props: ThemeProps) => props.theme.fontTitleColor};
      color: #fff;
      cursor: pointer;
      font-family: ${(props: ThemeProps) => props.theme.font.fontFamily};

      &:hover {
        background-color: #f9c349;
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
  height: 700px;

  .container-location {
    margin: 0 auto;
    width: 90%;
    height: 80%;

    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
  }

  .container-title {
    width: 100%;
    height: 35%;
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
  }
  .container-modalLocation {
    width: 100%;
    height: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;

    .modalLocation {
      background-color: ${(props: ThemeProps) =>
        mix(0.95, '#eeeeee', props.theme.headerFooterBgColor)};
      width: 33%;
      height: 300px;
      border-radius: 30px;
      text-align: start;

      .container-icon {
        height: 90px;
        margin: 0 auto;
        margin-top: 10px;
        width: 85%;

        h3 {
          margin-top: 10px;

          font-size: 30px;
        }
      }
      .container-p {
        height: 130px;
        margin: 0 auto;
        width: 85%;

        p {
          margin: 12px 0px;
          font-size: 22px;
          color: #000;
        }
      }
      .container-ping {
        margin: 0 auto;
        width: 85%;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: start;

        span {
          margin-left: 7px;
          font-size: 21px;
        }
        p {
          color: ${(props: ThemeProps) => props.theme.fontTitleColor};
        }
      }
    }
  }
`;

export const HowHelpSection = styled.div<{ bgImage?: string }>`
width:100%;
height:500px;
display: flex;
    align-items: center;
    justify-content:center;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${(props) =>  props.bgImage? props.bgImage : 'https://cdn.discordapp.com/attachments/1116206739373691010/1116573743058268180/ThomasiWilson1_A_successful_law_firms_executive_office_with_flo_acf05fba-84f6-4416-bf37-b27f5d02a190.png'});
.container-help{
  height:70%;
width:80%;
margin: 0 auto;

  display: flex;
    align-items: center;
    justify-content: center;
    flex-direction:column;
    
}


.container-inf{
  display: flex;
    align-items: center;
    justify-content: center;
    flex-direction:column;
  height:80%;
width:100%;


h1 {
  text-align:center;
  margin: 0 auto;
  width:90%;
  font-size:45;
  font-weight:400;
  margin-bottom:40px;
}
p{
  text-align:center;
  margin: 0 auto;
  width:70%;
  font-size:22px;
  margin-bottom:60px;
}
.btn {
      width: 300px;
      height: 50px;
      border: none;
      font-size: 20px;
      font-weight:400;
      border-radius: 10px;
      background-color: ${(props: ThemeProps) => props.theme.fontTitleColor};
      color: #fff;
      cursor: pointer;
      font-family: ${(props: ThemeProps) => props.theme.font.fontFamily};

      &:hover {
        background-color: #f9c349;
      }
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
`;
