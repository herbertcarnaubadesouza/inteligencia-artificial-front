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

export const IconSection = styled.section`
width: 100%;
.Container-blocks{
  padding-block: 5rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 5rem;
  background-color: ${(props: ThemeProps) =>
        mix(0.8, '#d4d2d21c', props.theme.headerFooterBgColor)};
  }
  .meta-icons{
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    align-items: center;

    h3{
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
  .header-awards{

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
    width:45%;
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


.awards-block{
  display:flex;
  flex-direction: column;
  margin-right: 20px;
  background-color: ${(props: ThemeProps) =>
      mix( 0.95, '#d9d9d912', props.theme.headerFooterBgColor)};
  border-radius: 15px;
  gap: 1rem;
  padding: 20px;
  box-shadow: 0 25px 80px -10px rgba(23.469701086956523,24.000447704985824,25.5,.15);

  img{
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
    width:80%;
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
      mix( 0.95, '#d9d9d912', props.theme.headerFooterBgColor)};;
  padding-block: 100px;
  padding-left: 6rem;
  padding-right: 8.2rem;
`;

export const LeftAwardBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  gap: 0.5rem;

  img{
    margin-top: 30px;
    width: 507px;
    height: 338px;
    object-fit: cover;
    box-shadow: 40px 40px 0 0 ${(props: ThemeProps) => mix(0.1, '#ffffffc6', props.theme.headerFooterBgColor)};
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
  
  .Areas-block{ 
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
`;

export const HowWorksHeaderSection = styled.div`

`;