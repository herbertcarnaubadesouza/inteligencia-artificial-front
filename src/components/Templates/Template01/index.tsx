import { Play } from '@phosphor-icons/react';
import {
  AboutSection,
  Container,
  HeaderFooter,
  Info,
  Line,
  LineParallax,
  LogoTemplate,
  Parallax,
  ParallaxContent,
} from './styles';

interface Template01Props {
  isVisible01: boolean;
}

function Template01({ isVisible01 }: Template01Props) {
  return (
    <Container>
      <HeaderFooter as="header">
        <h1>Advogados de Defesa Criminal</h1>
        <Line></Line>
        <h2>
          Escritório de advogados criminais com mais de 50 anos de experiência
          entre nossos sócios
        </h2>
        <button>Fale conosco agora</button>
      </HeaderFooter>

      <AboutSection>
        <section className="about">
          <Info>
            <LogoTemplate src="./images/template01/about.png" alt="Sobre nós" />
            <div>
              <h2>Sobre Nós</h2>
              <p>
                A Super Tecnologia Inc é uma empresa inovadora e líder em
                tecnologia, com um histórico comprovado de entrega de soluções
                tecnológicas avançadas que impulsionam o crescimento e o sucesso
                dos negócios. Fundada em 2023 por um grupo de engenheiros e
                empresários visionários, a Super Tecnologia Inc tem a missão de
                empregar tecnologias revolucionárias para resolver os desafios
                mais complexos do mundo dos negócios.
              </p>
            </div>
          </Info>
        </section>
      </AboutSection>
      <Parallax>
        <ParallaxContent>
          <h4>EXPERIÊNCIA É IMPORTANTE</h4>
          <LineParallax></LineParallax>
          <h2>Lutamos para que suas acusações sejam retiradas.</h2>
          <a>
            <Play size={32} weight="fill" />
          </a>
        </ParallaxContent>
      </Parallax>
      {/* <HeaderFooter as="footer">
        <p>&copy; 2023 Super Tecnologia Inc</p>
      </HeaderFooter> */}
    </Container>
  );
}

export default Template01;
