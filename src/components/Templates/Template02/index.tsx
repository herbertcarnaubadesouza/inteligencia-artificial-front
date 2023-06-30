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
  ContactSection,
  Container,
  FirstBlockAbout,
  Footer,
  HeaderBlock,
  LineAbout,
  LineAboutSection,
  LineDivisorLeft,
  LineDivisorRight,
  LineHeader,
  LineHeaderBottom,
  RightSideWhyUs,
  Row,
  SecondBlockAbout,
  ServicesSection,
  WhyUs,
} from './styles';

import axios from 'axios';
import { useEffect, useState } from 'react';

import { collection, db, getDoc, doc } from '../../../firebase';
import { getDocs } from 'firebase/firestore';
import { deleteDoc } from 'firebase/firestore';
interface Template02Props {
  isVisible02: boolean;
}
interface Template02 {
  imgUrl: string;
}
interface ApiResponse {
  choices: {
    message: {
      content: string;
    };
  }[];
}
import Loading from '../Loading/Loading';
const apiKey = process.env.REACT_APP_API_KEY;

function Template02({ isVisible02 }: Template02Props) {

  const nomeEmpresa = "Seraphim Law Group"

  // BANNER HEADER
  const [imageUrlHeader, setImageUrlHeader] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const bannerTemplateHeader = localStorage.getItem('bannerTemplateHeaderTemplate02');

      if (!bannerTemplateHeader) {
        const advogadoDocRef = doc(db, 'sites', 'advogado');
        const bannerCollectionRef = collection(advogadoDocRef, 'banner');
        const bannerSnapshot = await getDocs(bannerCollectionRef);

        let bannerList = bannerSnapshot.docs.map((doc) => {
          const data = doc.data();
          const banner = {
            id: doc.id,
            imgUrl: data.imgUrl,
          };
          return banner;
        });

        if (bannerList.length > 0) {
          const randomIndex = Math.floor(Math.random() * bannerList.length);
          const randomBanner = bannerList[randomIndex];
          setImageUrlHeader(randomBanner.imgUrl);

          localStorage.setItem('bannerTemplateHeaderTemplate02', randomBanner.imgUrl);
        }
      } else {
        setImageUrlHeader(bannerTemplateHeader);
      }
    };

    fetchData();
  }, []);


  // BANNER ABOUT 
  const [imageUrlAbout, setImageUrlAbout] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const bannerTemplateHeader = localStorage.getItem('bannerTemplateAboutTemplate02');

      if (!bannerTemplateHeader) {
        const advogadoDocRef = doc(db, 'sites', 'advogado');
        const bannerCollectionRef = collection(advogadoDocRef, 'subtitulo');
        const bannerSnapshot = await getDocs(bannerCollectionRef);

        let bannerList = bannerSnapshot.docs.map((doc) => {
          const data = doc.data();
          const banner = {
            id: doc.id,
            imgUrl: data.imgUrl,
          };
          return banner;
        });

        if (bannerList.length > 0) {
          const randomIndex = Math.floor(Math.random() * bannerList.length);
          const randomBanner = bannerList[randomIndex];
          setImageUrlAbout(randomBanner.imgUrl);

          localStorage.setItem('bannerTemplateAboutTemplate02', randomBanner.imgUrl);
        }
      } else {
        setImageUrlAbout(bannerTemplateHeader);
      }
    };

    fetchData();
  }, []);

  // BANNER PARALALAX PRIMEIRA IMAGEM
  const [imageUrlParallax, setImageUrlParallax] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const bannerTemplateHeader = localStorage.getItem('bannerTemplateParallax01Template02');

      if (!bannerTemplateHeader) {
        const advogadoDocRef = doc(db, 'sites', 'advogado');
        const bannerCollectionRef = collection(advogadoDocRef, 'bannerparalax');
        const bannerSnapshot = await getDocs(bannerCollectionRef);

        let bannerList = bannerSnapshot.docs.map((doc) => {
          const data = doc.data();
          const banner = {
            id: doc.id,
            imgUrl: data.imgUrl,
          };
          return banner;
        });

        if (bannerList.length > 0) {
          const randomIndex = Math.floor(Math.random() * bannerList.length);
          const randomBanner = bannerList[randomIndex];
          setImageUrlParallax(randomBanner.imgUrl);

          localStorage.setItem('bannerTemplateParallax01Template02', randomBanner.imgUrl);
        }
      } else {
        setImageUrlParallax(bannerTemplateHeader);
      }
    };

    fetchData();
  }, []);


  // BANER PARALLAX SEGUNDA IMAGEM 
  const [imageUrlParallaxSegunda, setImageUrlParallaxSegunda] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const bannerTemplateHeader = localStorage.getItem('bannerTemplateParallax02Template02');

      if (!bannerTemplateHeader) {
        const advogadoDocRef = doc(db, 'sites', 'advogado');
        const bannerCollectionRef = collection(advogadoDocRef, 'banner');
        const bannerSnapshot = await getDocs(bannerCollectionRef);

        let bannerList = bannerSnapshot.docs.map((doc) => {
          const data = doc.data();
          const banner = {
            id: doc.id,
            imgUrl: data.imgUrl,
          };
          return banner;
        });

        if (bannerList.length > 0) {
          const randomIndex = Math.floor(Math.random() * bannerList.length);
          const randomBanner = bannerList[randomIndex];
          setImageUrlParallaxSegunda(randomBanner.imgUrl);

          localStorage.setItem('bannerTemplateParallax02Template02', randomBanner.imgUrl);
        }
      } else {
        setImageUrlParallaxSegunda(bannerTemplateHeader);
      }
    };

    fetchData();
  }, []);




  const [loading, setLoading] = useState(true);

  // LOADING
  useEffect(() => {
    const localStorageValue = localStorage.getItem('loading2');

    if (localStorageValue !== null) {
      setLoading(localStorageValue === 'true');
    }

    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  // Salvar o estado no localStorage
  useEffect(() => {
    localStorage.setItem('loading2', loading.toString());
  }, [loading]);

  // Limpar o estado do localStorage ao encerrar o navegador
  window.addEventListener('beforeunload', () => {
    localStorage.removeItem('loading2');
  });


  return (
    <Container>
      {loading ? <Loading /> : null}
      <HeaderBlock bgImage={imageUrlHeader}>
        <div className="container-block-header">
          <LineHeader></LineHeader>
          <span>A justiça é nosso compromisso, sua causa é nossa missão.</span>
        </div>
        <h1>
          {nomeEmpresa}
        </h1>
        <LineHeaderBottom></LineHeaderBottom>
        <div className="container-header-footer-block">
          <div>
            <div className="header-footer-block">
              <PhoneCall size={16} weight="fill" />
              <span>Entre em contato</span>
            </div>
            <h4>91 123-456-7890/91</h4>
          </div>
        </div>
      </HeaderBlock>
      <AboutSection>
        <FirstBlockAbout>
          <div className="container-block-about">
            <LineAbout></LineAbout>
            <span>Defendemos sua justiça com excelência!</span>
          </div>
          <h2>Você veio ao lugar certo</h2>
          <p>A Seraphim Law Group é um escritório de advocacia comprometido em proporcionar soluções jurídicas cuidadosamente planejadas aos seus clientes. Com uma equipe de profissionais altamente qualificados e experientes, a firma se dedica a atender às necessidades jurídicas de indivíduos e empresas em diversas áreas do direito. A visão da Seraphim é ser uma referência em excelência, ética e inovação jurídica, estabelecendo uma relação de confiança e parceria com seus clientes.</p>

        </FirstBlockAbout>
        <SecondBlockAbout>
          <img
            src={
              imageUrlAbout
            }
          ></img>
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
                <p>Orientamos e representamos nossos clientes em processos de divórcio e separação, buscando soluções amigáveis e justas para todas as partes envolvidas. Nosso compromisso é garantir uma transição tranquila e respeitosa, preservando seus direitos e interesses.</p>
              </div>
              <div className="content-block-atuacao">
                <NotePencil size={32} weight="bold" />
                <h3>Direitos dos avós</h3>
                <p>Defendemos o direito dos avós em desfrutarem de um relacionamento afetuoso com seus netos, atuando incansavelmente para preservar os laços familiares e proteger seus direitos legais.</p>
              </div>
              <div className="content-block-atuacao">
                <Handshake size={32} weight="bold" />
                <h3>Custódia de criança</h3>
                <p>Nós nos empenhamos em assegurar o bem-estar das crianças, buscando soluções de custódia sensíveis e equitativas que promovam o melhor interesse dos filhos, garantindo uma transição suave e estável.</p>
              </div>

            </Row>
            <Row>
              <div className="content-block-atuacao">
                <Heart size={32} weight="bold" />
                <h3>Casamento/Uniões Civis​</h3>
                <p>Do início ao fim, oferecemos orientação jurídica especializada em assuntos matrimoniais e uniões civis, assegurando que seus direitos e interesses sejam protegidos durante todo o processo.</p>
              </div>
              <div className="content-block-atuacao">
                <User size={32} weight="bold" />
                <h3>Adoção e barriga de aluguel​</h3>
                <p>Auxiliamos famílias no emocionante caminho da adoção e barriga de aluguel, fornecendo suporte legal abrangente para garantir que todas as etapas sejam seguidas corretamente e os melhores interesses da criança sejam priorizados.</p>
              </div>
              <div className="content-block-atuacao">
                <Scroll size={32} weight="bold" />
                <h3>Acordos de propriedade​​​</h3>
                <p>Negociamos e elaboramos acordos de propriedade personalizados, protegendo seus interesses e garantindo uma divisão justa e equitativa de bens, imóveis e ativos, com o objetivo de alcançar soluções amigáveis.</p>
              </div>



            </Row>
          </Column>
        </div>
      </ServicesSection>
      <WhyUs bgImage={imageUrlParallax}>
        <div className="full-content-whyus">
          <div className="left-side-whyus">
            <div className="container-block-header">
              <LineHeader></LineHeader>
              <span> Advogada de direito de família profissional e experiente </span>
            </div>
            <h2>Por que escolher nossa empresa</h2>
            <div className="block-whyus">
              <div className="wrap-block-whyus">
                <h5>01</h5>
                <div className="block-whyus-p">
                  <h4>Dedicação aos resultados</h4>
                  <p>

                  </p>
                </div>
              </div>
              <div className="wrap-block-whyus">
                <h5>02</h5>
                <div className="block-whyus-p">
                  <h4>Profissionalismo e excelência jurídic</h4>
                  <p>

                  </p>
                </div>
              </div>
              <div className="wrap-block-whyus">
                <h5>03</h5>
                <div className="block-whyus-p">
                  <h4>Atendimento personalizado e foco no cliente</h4>
                  <p>

                  </p>
                </div>
              </div>
            </div>
          </div>
          <RightSideWhyUs>
            <div className="rows-block">
              <div className="row-div-block">
                <h2>2000+</h2>
                <span>Clientes satisfeitos</span>
              </div>
              <div className="row-div-block">
                <h2>93%</h2>
                <span>Casos de Sucesso</span>
              </div>
            </div>
            <div className="rows-block">
              <div className="row-div-block">
                <h2>40+</h2>
                <span>Profissionais</span>
              </div>
              <div className="row-div-block">
                <h2>20mlns</h2>
                <span>Recovered</span>
              </div>
            </div>
          </RightSideWhyUs>
        </div>
      </WhyUs>
      <ContactSection>
        <h4>Ligue para nós 24/7</h4>
        <h3>91 123-456-7890/91</h3>
        <div className="separator-section">
          <LineDivisorLeft></LineDivisorLeft>
          <p>OR</p>
          <LineDivisorRight></LineDivisorRight>
        </div>
        <h2>Faça sua primeira consulta GRÁTIS!</h2>
        <button>Solicitar agendamento</button>
      </ContactSection>
      <Footer>
        <div className="content-footer">
          <p>Copyright © 2023 Rei do Sites</p>
          <p>Powered by Rei do Sites</p>
        </div>
      </Footer>
    </Container>
  );
}

export default Template02;
