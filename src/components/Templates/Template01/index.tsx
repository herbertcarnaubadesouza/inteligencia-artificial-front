import { Phone, Play } from '@phosphor-icons/react';
import {
  AboutSection,
  Contact,
  Container,
  Footer,
  FooterContent,
  FooterRight,
  HeaderFooter,
  Info,
  Line,
  LineParallax,
  LineSmall,
  LogoTemplate,
  Parallax,
  ParallaxContact,
  ParallaxContent,
  PracticeArea,
  PracticeAreaContent,
  PracticeAreaContentAll,
  PracticeContent,
} from './styles';

import axios from 'axios';
import { useEffect, useState } from 'react';

import { collection, db, getDoc, doc } from '../../../firebase';
import { getDocs } from 'firebase/firestore';
import { deleteDoc } from 'firebase/firestore';

interface Template01Props {
  isVisible01: boolean;
}

interface Template01 {
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

function Template01({ isVisible01 }: Template01Props) {

  const nomeEmpresa = "Lux Amount Advocacia"

  // BANNER HEADER
  const [imageUrlHeader, setImageUrlHeader] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const bannerTemplateHeader = localStorage.getItem('bannerTemplateHeader');

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

          localStorage.setItem('bannerTemplateHeader', randomBanner.imgUrl);
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
      const bannerTemplateHeader = localStorage.getItem('bannerTemplateAbout');

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

          localStorage.setItem('bannerTemplateAbout', randomBanner.imgUrl);
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
      const bannerTemplateHeader = localStorage.getItem('bannerTemplateParallax01');

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

          localStorage.setItem('bannerTemplateParallax01', randomBanner.imgUrl);
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
      const bannerTemplateHeader = localStorage.getItem('bannerTemplateParallax02');

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

          localStorage.setItem('bannerTemplateParallax02', randomBanner.imgUrl);
        }
      } else {
        setImageUrlParallaxSegunda(bannerTemplateHeader);
      }
    };

    fetchData();
  }, []);

























































  const localStorageValue = localStorage.getItem('loading');
  const [loading, setLoading] = useState(true);

  // LOADING
  useEffect(() => {


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
    localStorage.setItem('loading', loading.toString());
  }, [loading]);

  // Limpar o estado do localStorage ao encerrar o navegador
  window.addEventListener('beforeunload', () => {
    localStorage.removeItem('loading');
  });




  return (
    <Container>
      {loading ? <Loading /> : null}
      <HeaderFooter bgImage={imageUrlHeader} as="header">
        <h1>{nomeEmpresa}</h1>
        <Line></Line>
        <h2>
          Defendendo seus direitos, garantindo sua justiça
        </h2>
        <button>Fale conosco agora</button>
      </HeaderFooter>

      <AboutSection>
        <section className="about" >
          <Info>
            <div className='about-section ' id='about-section'>
              <LogoTemplate
                src={
                  imageUrlAbout
                }
                alt="carregando"
              />
            </div>
            <div className='about-section' >

              <h2>Sobre Nós </h2>
              <p>Nossa equipe de advogados é amplamente reconhecida por sua excelência e dedicação na prestação de serviços jurídicos. Com vasta experiência e conhecimento, estamos preparados para enfrentar os mais desafiadores casos legais. Nossa abordagem estratégica e personalizada nos permite oferecer soluções eficientes e resultados positivos para nossos clientes. Confie em nossa expertise para proteger seus interesses e alcançar o sucesso legal desejado.
                Nossa equipe de advogados é amplamente reconhecida por sua excelência e dedicação na prestação de serviços jurídicos. Com vasta experiência e conhecimento, estamos preparados para enfrentar os mais desafiadores casos legais. Nossa abordagem estratégica e personalizada nos permite oferecer soluções eficientes e resultados positivos para nossos clientes. Confie em nossa expertise para proteger seus interesses e alcançar o sucesso legal desejado.
              </p>

            </div>
          </Info>
        </section>
      </AboutSection>
      <Parallax bgImage={imageUrlParallax}>
        <ParallaxContent>
          <h4>DEFENDEMOS SEUS DIREITOS COM SOLUÇÃO EFICIENTE</h4>
          <LineParallax></LineParallax>
          <h2>Nossa empresa de advocacia é a escolha certa para você, pois contamos com uma equipe de profissionais altamente qualificados e comprometidos em defender seus interesses com eficiência e agilidade.</h2>
          <a>
            <Play size={32} weight="fill" />
          </a>
        </ParallaxContent>
      </Parallax>
      <PracticeArea>
        <h1>Áreas de atuação</h1>
        <h4>
          Nossa firma de advocacia busca sempre a excelência em serviços, oferecendo atendimento personalizado e soluções jurídicas eficazes para nossos clientes.
        </h4>
        <button>Ver todas as áreas</button>

        <PracticeAreaContentAll>
          <PracticeAreaContent>
            <PracticeContent>
              <h3>01</h3>
              <h2>Assalto doméstico</h2>
              <LineSmall></LineSmall>
              <p>Protegendo lares, combatendo a violência. Nossa firma de advocacia está ao seu lado para enfrentar casos de assalto doméstico, buscando justiça e segurança para você e sua família.</p>
            </PracticeContent>
            <PracticeContent>
              <h3>02</h3>
              <h2>Crimes de armas</h2>
              <LineSmall></LineSmall>
              <p>Defendendo a paz, lutando contra o crime. Nossa firma de advocacia especializada em casos de crimes de armas está aqui para garantir seus direitos e promover a segurança na sociedade.</p>
            </PracticeContent>
            <PracticeContent>
              <h3>03</h3>
              <h2>Crimes de drogas</h2>
              <LineSmall></LineSmall>
              <p>Transformando vidas, combatendo o vício. Nossa firma de advocacia é especializada em casos de crimes de drogas, oferecendo suporte legal e buscando justiça para ajudar na recuperação e reabilitação.</p>
            </PracticeContent>
          </PracticeAreaContent>
        </PracticeAreaContentAll>
        <PracticeAreaContentAll>
          <PracticeAreaContent>
            <PracticeContent>
              <h3>04</h3>
              <h2>Crimes de pessoais</h2>
              <LineSmall></LineSmall>
              <p>Protegendo seus direitos, defendendo sua propriedade. Nossa firma de advocacia é especializada em casos de crimes de propriedade, oferecendo representação legal sólida e estratégias eficazes.</p>

            </PracticeContent>
            <PracticeContent>
              <h3>05</h3>
              <h2>Audiencia de fiança</h2>
              <LineSmall></LineSmall>
              <p>Nas audiências de fiança, estamos ao seu lado para garantir que seus direitos sejam protegidos. Com nossa expertise jurídica, iremos apresentar os argumentos necessários para garantir uma fiança justa e acessível</p>
            </PracticeContent>
            <PracticeContent>
              <h3>06</h3>
              <h2>Crime de assédio</h2>
              <LineSmall></LineSmall>
              <p>Não permita que o assédio afete sua vida. Nossa firma de advocacia está aqui para lutar pelos seus direitos, oferecendo apoio legal e buscando justiça nos casos de assédio. Juntos, podemos criar um ambiente seguro e protegido para todos.</p>
            </PracticeContent>
          </PracticeAreaContent>
        </PracticeAreaContentAll>
      </PracticeArea>
      <ParallaxContact bgImage={imageUrlParallaxSegunda}>
        <ParallaxContent>
          <h4>NÓS SOMOS SEU CAMINHO PARA O SUCESSO LEGAL</h4>
          <LineParallax></LineParallax>
          <h2>Fale com nossos advogados de defesa criminal hoje!</h2>
          <h3>
            Fale com nossos advogados de defesa criminal hoje. Estamos aqui para ajudar você a alcançar seus objetivos de maneira legal e eficiente. Conte conosco para proteger seus direitos e liberdade.
          </h3>
          <Contact>
            <a>
              <Phone size={28} weight="fill" />
            </a>
            <h2>929-242-6868</h2>
          </Contact>
        </ParallaxContent>
      </ParallaxContact>
      <Footer>
        <div className="content-footer">
          <p>Copyright © 2023 Rei do Sites</p>
          <p>Powered by Rei do Sites</p>
        </div>
      </Footer>
    </Container>
  );
}

export default Template01;