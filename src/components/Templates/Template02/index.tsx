// index.tsx
import {
  ArrowRight,
  Baby,
  FlagCheckered,
  Handshake,
  Heart,
  LinkSimpleBreak,
  MapPin,
  NotePencil,
  PhoneCall,
  Scales,
  Scroll,
  User,
} from '@phosphor-icons/react';
import {
  AboutSection,
  Column,
  Container,
  FirstBlockAbout,
  HeaderBlock,
  LineAbout,
  LineAboutSection,
  LineHeader,
  LineHeaderBottom,
  Row,
  SecondBlockAbout,
  ServicesSection,
} from './styles';
import './template01.scss';

interface Template02Props {
  isVisible02: boolean;
}

function Template02({ isVisible02 }: Template02Props) {
  return (
    <Container>
      <HeaderBlock>
        <div className="container-block-header">
          <LineHeader></LineHeader>
          <span>Comprometidos em ajudar nossos clientes a ter sucesso</span>
        </div>
        <h1>
          Você precisa de um escritório de advocacia confiável que ajude a lidar
          com seus assuntos familiares
        </h1>
        <LineHeaderBottom></LineHeaderBottom>
        <div className="container-header-footer-block">
          <div>
            <div className="header-footer-block">
              <MapPin size={16} weight="fill" />
              <span>Our Location</span>
            </div>
            <h4>Melbourne, Australia</h4>
          </div>
          <div>
            <div className="header-footer-block">
              <PhoneCall size={16} weight="fill" />
              <span>Free Review</span>
            </div>
            <h4>91 123-456-7890/91</h4>
          </div>
        </div>
      </HeaderBlock>
      <AboutSection>
        <FirstBlockAbout>
          <div className="container-block-about">
            <LineAbout></LineAbout>
            <span>Comprometidos em ajudar nossos clientes a ter sucesso</span>
          </div>
          <h2>Você veio ao lugar certo</h2>
          <p>
            Um parágrafo descritivo que diz aos clientes como você é bom e prova
            que você é a melhor escolha que eles fizeram. Este parágrafo também
            é para aqueles que procuram um advogado confiável. Você pode usar
            algumas palavras atraentes e exibir suas capacidades que irão atrair
            futuros clientes e incentivá-los a contratá-lo imediatamente. Liste
            seus conhecimentos e experiência para provar que você é o melhor.
          </p>
          <div className="bottom-about-section">
            <div className="block-bottom">
              <LineAboutSection />
              <Scales size={32} weight="fill" />
              <h3>5 Anos de Experiência</h3>
              <p>Officia officiis vitae hendrerit interdum pretium.</p>
            </div>
            <div className="block-bottom">
              <LineAboutSection />
              <FlagCheckered size={32} weight="fill" />
              <h3>Definindo o sucesso</h3>
              <p>Officia officiis vitae hendrerit interdum pretium.</p>
            </div>
          </div>
        </FirstBlockAbout>
        <SecondBlockAbout>
          <img src="./images/template02/about.jpg"></img>
        </SecondBlockAbout>
      </AboutSection>
      <ServicesSection>
        <div className="full-content-website">
          <h2>Nossas Áreas de Atuação</h2>
          <Column>
            <Row>
              <div className="content-block-atuacao">
                <LinkSimpleBreak size={32} weight="bold" />
                <h3>Divórcio e Separação</h3>
                <text>
                  This is a short description elaborating the service you have
                  mentioned above.​
                </text>
              </div>
              <div className="content-block-atuacao">
                <NotePencil size={32} weight="bold" />
                <h3>Direitos dos avós</h3>
                <text>
                  This is a short description elaborating the service you have
                  mentioned above.​
                </text>
              </div>
              <div className="content-block-atuacao">
                <Handshake size={32} weight="bold" />
                <h3>Custódia de criança</h3>
                <text>
                  This is a short description elaborating the service you have
                  mentioned above.​
                </text>
              </div>
              <div className="content-block-atuacao">
                <Baby size={32} weight="bold" />
                <h3>Domestic Violence​​</h3>
                <text>
                  This is a short description elaborating the service you have
                  mentioned above.​
                </text>
              </div>
            </Row>
            <Row>
              <div className="content-block-atuacao">
                <Heart size={32} weight="bold" />
                <h3>Casamento/Uniões Civis​</h3>
                <text>
                  This is a short description elaborating the service you have
                  mentioned above.​
                </text>
              </div>
              <div className="content-block-atuacao">
                <User size={32} weight="bold" />
                <h3>Adoção e barriga de aluguel​</h3>
                <text>
                  This is a short description elaborating the service you have
                  mentioned above.​
                </text>
              </div>
              <div className="content-block-atuacao">
                <Scroll size={32} weight="bold" />
                <h3>Acordos de propriedade​​​</h3>
                <text>
                  This is a short description elaborating the service you have
                  mentioned above.​
                </text>
              </div>
              <div className="content-block-atuacao">
                <div className="last-block-atuacao">
                  <p>Ver Todos </p>
                  <ArrowRight size={16} weight="bold" />
                </div>
              </div>
            </Row>
          </Column>
        </div>
      </ServicesSection>
    </Container>
  );
}

export default Template02;
