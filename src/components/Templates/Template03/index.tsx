// index.tsx
import {
  AboutSection,
  Container,
  HeaderBlock,
  IconSection,
  LeftSideBlock,
  LineAboutSection,
  RightSideBlock,
} from './styles';

interface Template03Props {
  isVisible03: boolean;
}

function Template03({ isVisible03 }: Template03Props) {
  return (
    <Container>
      <HeaderBlock>
        <span>1º Escritório De Advocacia Eleito Pelos Pares</span>
        <h1>
          Advogados de família de primeira classe e advogados de divórcio em
          Vancouver
        </h1>
        <p>
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel.
        </p>
        <button>agendar reunião</button>
      </HeaderBlock>
      <AboutSection>
        <LeftSideBlock>
          <div>
            <LineAboutSection></LineAboutSection>
            <div className="title-about-section-block">
              <h2>Sobre nós</h2>
              <h3>Premiado Escritório de Advocacia do Ano</h3>
            </div>
          </div>
          <p>
            Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
            Praesent sapien massa, convallis a pellentesque nec, egestas non
            nisi. Vivamus magna justo, lacinia eget consectetur sed, convallis
            at tellus. Nulla porttitor accumsan tincidunt. Curabitur arcu erat,
            accumsan id imperdiet et, porttitor at sem.
          </p>
          <div className="footer-div-block">
            <div className="footer-div-block-content">
              <h3>Premiado Escritório de Advocacia do Ano</h3>
              <p>
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia Curae; Donec velit neque.
              </p>
            </div>
            <div className="footer-div-block-content">
              <h3>Premiado Escritório de Advocacia do Ano</h3>
              <p>
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia Curae; Donec velit neque.
              </p>
            </div>
          </div>
          <button>fale conosco</button>
        </LeftSideBlock>
        <RightSideBlock>
          <img src="./images/template03/bg05.jpg"></img>
        </RightSideBlock>
      </AboutSection>
      <IconSection>
        <h2>teste</h2>
      </IconSection>
    </Container>
  );
}

export default Template03;
