import { Play, Phone } from '@phosphor-icons/react';
import {
  AboutSection,
  Container,
  HeaderFooter,
  Info,
  Line,
  LineSmall,
  LineParallax,
  LogoTemplate,
  Parallax,
  ParallaxContact,
  Contact,
  ParallaxContent,
  PracticeArea,
  PracticeAreaContent,
  PracticeContent,
  PracticeAreaContentAll,
  Footer,
  FooterContent,
  FooterRight,
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
                Bem-vindo(a) à nossa empresa de advogados criminais, especializada em proteger os direitos e garantir a justiça para nossos clientes. Com uma equipe experiente e comprometida, estamos aqui para fornecer representação legal de alta qualidade em todos os aspectos do direito penal.

                Nossa missão é oferecer serviços jurídicos de excelência, buscando sempre a melhor estratégia de defesa para cada caso que assumimos. Compreendemos que enfrentar um processo criminal é uma situação desafiadora, e estamos aqui para orientar e apoiar nossos clientes em todas as etapas do processo.

                Nossos advogados são altamente qualificados e possuem um profundo conhecimento das leis e procedimentos criminais. Com experiência em uma ampla gama de casos, desde delitos de menor gravidade até crimes mais complexos, nossa equipe está preparada para lidar com qualquer desafio jurídico que nossos clientes enfrentem.

                Valorizamos a ética e a confidencialidade em todas as interações com nossos clientes. Reconhecemos a importância de estabelecer uma relação de confiança, na qual nossos clientes se sintam à vontade para compartilhar todas as informações relevantes para o caso. Nossa equipe está comprometida em proteger os direitos e a privacidade de cada pessoa que procura nossos serviços.

                Além de nossa expertise legal, compreendemos as necessidades emocionais de nossos clientes durante esse período difícil. Por isso, oferecemos apoio emocional e atendimento personalizado, visando proporcionar tranquilidade e confiança.
                Em nossa empresa de advogados criminais, acreditamos que todos têm direito a uma defesa justa e imparcial. Estamos comprometidos em lutar pelos direitos de nossos clientes, analisando minuciosamente cada caso e desenvolvendo estratégias personalizadas de defesa.

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
      <PracticeArea>
        <h1>Áreas de atuação</h1>
        <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h4>
        <button>Ver todas as áreas</button>
        <PracticeAreaContentAll>
          <PracticeAreaContent>
            <PracticeContent>
              <h3>01</h3>
              <h2>Assalto doméstico</h2>
              <LineSmall></LineSmall>
              <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute.</p>
            </PracticeContent>
            <PracticeContent>
              <h3>02</h3>
              <h2>Crimes de armas</h2>
              <LineSmall></LineSmall>
              <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute.</p>
            </PracticeContent>
            <PracticeContent>
              <h3>03</h3>
              <h2>Crimes de drogas</h2>
              <LineSmall></LineSmall>
              <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute.</p>
            </PracticeContent>
          </PracticeAreaContent>
        </PracticeAreaContentAll>
        <PracticeAreaContentAll>
          <PracticeAreaContent>
            <PracticeContent>
              <h3>04</h3>
              <h2>Crimes de propriedade</h2>
              <LineSmall></LineSmall>
              <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute.</p>
            </PracticeContent>
            <PracticeContent>
              <h3>05</h3>
              <h2>Audiencia de fiança</h2>
              <LineSmall></LineSmall>
              <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute.</p>
            </PracticeContent>
            <PracticeContent>
              <h3>06</h3>
              <h2>Crime de assédio</h2>
              <LineSmall></LineSmall>
              <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute.</p>
            </PracticeContent>
          </PracticeAreaContent>
        </PracticeAreaContentAll>
      </PracticeArea>
      <ParallaxContact>
        <ParallaxContent>
          <h4>NÃO ESPERE MAIS</h4>
          <LineParallax></LineParallax>
          <h2>Fale com nossos advogados de defesa criminal hoje!</h2>
          <h3>Entre em contato com um advogado de defesa criminal experiente para lutar pelo seu caso.</h3>
          <Contact>
            <a>
              <Phone size={32} weight="fill" />
            </a>
            <h2>929-242-6868</h2>
          </Contact>
        </ParallaxContent>
      </ParallaxContact>
      <Footer>
        <FooterContent>
          <h3>
            Somos um escritório de advocacia de defesa criminal de serviço completo com escritórios em todo o Canadá e Lorem Ipsum.</h3>
        </FooterContent>
        <FooterRight>
          <FooterContent>
            <h2>Fale conosco</h2>
            <h4>Lorem ipsum contact</h4>
            <h4>Lorem ipsum contact</h4>
            <h4>Lorem ipsum contact</h4>
            <h4>Lorem ipsum contact</h4>
          </FooterContent>
          <FooterContent>
            <h2>Nossos links</h2>
            <h4>Lorem ipsum contact</h4>
            <h4>Lorem ipsum contact</h4>
            <h4>Lorem ipsum contact</h4>
            <h4>Lorem ipsum contact</h4>
          </FooterContent>
        </FooterRight>
      </Footer>
    </Container>
  );
}

export default Template01;
