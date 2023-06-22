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

const apiKey = process.env.REACT_APP_API_KEY;

function Template01({ isVisible01 }: Template01Props) {
 
  const nomeEmpresa = "Lux Amount Advocacia"
  
  // BANNER
  const [banner, setBanner] = useState<Template01[]>([]);
  const [imageUrl, setImageUrl] = useState('');
  const [secondImageUrl, setSecondImageUrl] = useState('');
  const [thirdImageUrl, setThirdImageUrl] = useState('');
  const [bannerId, setBannerId] = useState('');
  const [secondBannerId, setSecondBannerId] = useState('');
  const [thirdBannerId, setThirdBannerId] = useState('');

  useEffect(() => {
    const fetchData = async () => {
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

      // BANNER TEMPLATE 01
      const randomIndex = Math.floor(Math.random() * bannerList.length);
      const randomBanner = bannerList[randomIndex];
      setImageUrl(randomBanner.imgUrl);
      setBannerId(randomBanner.id);

      bannerList = bannerList.filter((_, index) => index !== randomIndex);

      // BANNER TEMPLATE 02
      const secondRandomIndex = Math.floor(Math.random() * bannerList.length);
      const secondRandomBanner = bannerList[secondRandomIndex];
      setSecondImageUrl(secondRandomBanner.imgUrl);
      setSecondBannerId(secondRandomBanner.id);
      localStorage.setItem('bannerTemplate02', secondImageUrl);

      bannerList = bannerList.filter((_, index) => index !== secondRandomIndex);

      // BANNER TEMPLATE 03
      const thirdRandomIndex = Math.floor(Math.random() * bannerList.length);
      const thirdRandomBanner = bannerList[thirdRandomIndex];
      setThirdImageUrl(thirdRandomBanner.imgUrl);
      setThirdBannerId(thirdRandomBanner.id);

      localStorage.setItem('bannerTemplate03', thirdImageUrl);

      setBanner(bannerList);
    };

    fetchData();
  }, []);



  
  // ABOUT
  const [about, setAbout] = useState<Template01[]>([]);
  const [imageUrlSegunda, setImageUrlSegunda] = useState('');
  const [secondImageUrlSegunda, setSecondImageUrlSegunda] = useState('');
  const [thirdImageUrlSegunda, setThirdImageUrlSegunda] = useState('');
  const [aboutId, setAboutId] = useState('');
  const [secondAboutId, setSecondAboutId] = useState('');
  const [thirdAboutId, setThirdAboutId] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const advogadoDocRef = doc(db, 'sites', 'advogado');
      const aboutCollectionRef = collection(advogadoDocRef, 'subtitulo');
      const aboutSnapshot = await getDocs(aboutCollectionRef);

      let aboutList = aboutSnapshot.docs.map((doc) => {
        const data = doc.data();

        const about = {
          id: doc.id,
          imgUrl: data.imgUrl,
        };

        return about;
      });

      // ABOUT TEMPLATE 01
      const randomIndex = Math.floor(Math.random() * aboutList.length);
      const randomAbout = aboutList[randomIndex];
      setImageUrlSegunda(randomAbout.imgUrl);
      setAboutId(randomAbout.id);

      aboutList = aboutList.filter((_, index) => index !== randomIndex);

      //ABOUT TEMPLATE 02
      const secondRandomIndex = Math.floor(Math.random() * aboutList.length);
      const secondRandomAbout = aboutList[secondRandomIndex];
      setSecondImageUrlSegunda(secondRandomAbout.imgUrl);
      setSecondAboutId(secondRandomAbout.id);
      localStorage.setItem('aboutTemplate02', secondImageUrlSegunda);

      aboutList = aboutList.filter((_, index) => index !== secondRandomIndex);

      // ABOUT TEMPLATE 03
      const thirdRandomIndex = Math.floor(Math.random() * aboutList.length);
      const thirdRandomAbout = aboutList[thirdRandomIndex];
      setThirdImageUrlSegunda(thirdRandomAbout.imgUrl);
      setThirdAboutId(thirdRandomAbout.id);

      localStorage.setItem('aboutTemplate03', thirdImageUrlSegunda);

      setAbout(aboutList);
    };

    fetchData();
  }, []);

  // PARALLAX
  const [parallax, setParallax] = useState<Template01[]>([]);
  const [imageUrlTerceira, setImageUrlTerceira] = useState('');
  const [secondImageUrlTerceira, setSecondImageUrlTerceira] = useState('');
  const [thirdImageUrlTerceira, setThirdImageUrlTerceira] = useState('');
  const [parallaxId, setParallaxId] = useState('');
  const [secondParallaxId, setSecondParallaxId] = useState('');
  const [thirdParallaxId, setThirdParallaxId] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const advogadoDocRef = doc(db, 'sites', 'advogado');
      const parallaxCollectionRef = collection(advogadoDocRef, 'bannerparalax');
      const parallaxSnapshot = await getDocs(parallaxCollectionRef);

      let parallaxList = parallaxSnapshot.docs.map((doc) => {
        const data = doc.data();

        const parallax = {
          id: doc.id,
          imgUrl: data.imgUrl,
        };

        return parallax;
      });

      // ABOUT TEMPLATE 01
      const randomIndex = Math.floor(Math.random() * parallaxList.length);
      const randomParallax = parallaxList[randomIndex];
      setImageUrlTerceira(randomParallax.imgUrl);
      setParallaxId(randomParallax.id);

      parallaxList = parallaxList.filter((_, index) => index !== randomIndex);

      //ABOUT TEMPLATE 02
      const secondRandomIndex = Math.floor(Math.random() * parallaxList.length);
      const secondRandomParallax = parallaxList[secondRandomIndex];
      setSecondImageUrlTerceira(secondRandomParallax.imgUrl);
      setSecondParallaxId(secondRandomParallax.id);
      localStorage.setItem('parallaxTemplate02', secondImageUrlTerceira);

      parallaxList = parallaxList.filter(
        (_, index) => index !== secondRandomIndex,
      );

      // ABOUT TEMPLATE 03
      const thirdRandomIndex = Math.floor(Math.random() * parallaxList.length);
      const thirdRandomParallax = parallaxList[thirdRandomIndex];
      setThirdImageUrlTerceira(thirdRandomParallax.imgUrl);
      setThirdParallaxId(thirdRandomParallax.id);

      localStorage.setItem('parallaxTemplate03', thirdImageUrlTerceira);

      setParallax(parallaxList);
    };

    fetchData();
  }, []);
 

  return (
    <Container>
     
      <HeaderFooter bgImage={imageUrl} as="header">
        <h1>{nomeEmpresa}</h1>
        <Line></Line>
        <h2>
        Defendendo seus direitos, garantindo sua justiça
        </h2>
        <button>Fale conosco agora</button>
      </HeaderFooter>

      <AboutSection>
        <section className="about">
          <Info>
            <div className='about-section'>
            <LogoTemplate
              src={
                imageUrlSegunda
                  ? imageUrlSegunda
                  : 'https://cdn.discordapp.com/attachments/1116206739373691010/1116758018403614750/ThomasiWilson1_In_a_bustling_metropolis_where_the_pillars_of_la_56479b76-2b1a-45f8-92e6-e7298d120c8c.png'
              }
              alt="carregando"
            />
            </div>
            <div className='about-section'>
              <h2>Sobre Nós</h2>
              <p>Nossa equipe de advogados é amplamente reconhecida por sua excelência e dedicação na prestação de serviços jurídicos. Com vasta experiência e conhecimento, estamos preparados para enfrentar os mais desafiadores casos legais. Nossa abordagem estratégica e personalizada nos permite oferecer soluções eficientes e resultados positivos para nossos clientes. Confie em nossa expertise para proteger seus interesses e alcançar o sucesso legal desejado.</p>
            </div>
          </Info>
        </section>
      </AboutSection>
      <Parallax bgImage={thirdImageUrlTerceira}>
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
              <h2>Crimes de propriedade</h2>
              <LineSmall></LineSmall>
              <p>Protegendo seus direitos, defendendo sua propriedade. Nossa firma de advocacia é especializada em casos de crimes de propriedade, oferecendo representação legal sólida e estratégias eficazes para garantir a proteção de seus bens e interesses.</p>

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
      <ParallaxContact bgImage={imageUrlTerceira}>
        <ParallaxContent>
          <h4>NÓS SOMOS SEU CAMINHO PARA O SUCESSO LEGAL</h4>
          <LineParallax></LineParallax>
          <h2>Fale com nossos advogados de defesa criminal hoje!</h2>
          <h3>
          Fale com nossos advogados de defesa criminal hoje. Estamos aqui para ajudar você a alcançar seus objetivos de maneira legal e eficiente. Conte conosco para proteger seus direitos e liberdade.
          </h3>
          <Contact>
            <a>
              <Phone size={32} weight="fill" />
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