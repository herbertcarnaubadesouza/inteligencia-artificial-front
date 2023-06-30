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

  useEffect(() => {
    const handleBeforeUnload = () => {
      localStorage.clear();
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
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


  // TEXTOS 

  // TITLES
  const titleFirma = [
    {
      description: "Luxury Legal Solutions",
    },
    {
      description: "Elite Advocates",
    },
    {
      description: "Prestige Law Firm",
    },
    {
      description: "Opulent Attorneys",
    },
    {
      description: "Exclusive Legal Advisors",
    },
  ];
  const randomTitleFirma = () => {
    const randomIndex = Math.floor(Math.random() * titleFirma.length);
    return titleFirma[randomIndex].description;
  };

  const [randomTitleFirmaText, setRandomTitleFirmaText] = useState('');

  useEffect(() => {
    const savedDescription = localStorage.getItem('randomTitleFirma');
    if (savedDescription) {
      setRandomTitleFirmaText(savedDescription);
    } else {
      const newRandomDescription = randomTitleFirma();
      setRandomTitleFirmaText(newRandomDescription);
      localStorage.setItem('randomTitleFirma', newRandomDescription);
    }
  }, []);


  // ABOUT
  const about = [
    {
      description: "Nossa firma de advocacia oferece soluções jurídicas especializadas e eficazes. Contamos com uma equipe experiente e dedicada, pronta para representar seus interesses com ética e profissionalismo. Priorizamos a excelência em cada caso, buscando resultados favoráveis para nossos clientes. Confie em nós para resolver suas questões legais com confiança e competência."
    },
    {
      description: "Somos uma firma de advocacia comprometida em fornecer soluções jurídicas confiáveis e eficientes. Com uma equipe experiente e especializada, oferecemos serviços jurídicos personalizados para atender às necessidades dos nossos clientes. Nossa ética profissional e integridade são fundamentais em todas as nossas interações. Conte conosco para representar seus interesses legais com dedicação e excelência."
    },
    {
      description: "Nossa firma de advocacia é especializada em oferecer soluções jurídicas eficazes e personalizadas para nossos clientes. Com uma equipe de advogados experientes e dedicados, estamos prontos para lidar com uma ampla gama de questões legais. Nosso compromisso com a excelência e a ética nos permite fornecer um serviço de qualidade, sempre buscando alcançar os melhores resultados para nossos clientes. Conte conosco para representar seus interesses e proteger seus direitos com dedicação e profissionalismo."
    },
    {
      description: "Conte com nossa firma de advocacia para obter serviços jurídicos de qualidade. Nossa equipe de advogados altamente qualificados está comprometida em fornecer soluções eficientes e personalizadas. Com experiência em diversas áreas do direito, estamos preparados para lidar com casos complexos e proteger seus interesses. Oferecemos um atendimento dedicado e confidencial, garantindo a defesa de seus direitos com ética e competência."
    },
    {
      description: "Na nossa firma de advocacia, acreditamos em uma abordagem personalizada para cada cliente. Compreendemos a importância de suas necessidades legais e nos dedicamos a fornecer soluções sob medida. Nossa equipe de advogados especializados está pronta para representá-lo com integridade e profissionalismo. Confie em nós para garantir seus direitos e encontrar as melhores estratégias jurídicas para seu caso."
    }
  ];
  // RANDOM TEXTO ABOUT 
  const randomTextoAbout = () => {
    const randomIndex = Math.floor(Math.random() * about.length);
    return about[randomIndex].description;
  };

  const [randomTextoAboutText, setRandomTextoAboutText] = useState('');

  useEffect(() => {
    const savedDescription = localStorage.getItem('randomTextoAbout');
    if (savedDescription) {
      setRandomTextoAboutText(savedDescription);
    } else {
      const newRandomDescription = randomTextoAbout();
      setRandomTextoAboutText(newRandomDescription);
      localStorage.setItem('randomTextoAbout', newRandomDescription);
    }
  }, []);

  //PARALLAX
  const parallax01 = [
    {
      description: "Nossa empresa de advocacia é a escolha certa para você, pois contamos com uma equipe de profissionais altamente qualificados e comprometidos em defender seus interesses com eficiência e agilidade."
    },
    {
      description: "Somos uma empresa de advocacia dedicada a oferecer serviços jurídicos excepcionais. Nossa equipe de advogados talentosos e comprometidos está pronta para representá-lo e proteger seus interesses com dedicação e experiência."
    },
    {
      description: "Se você precisa de serviços jurídicos de confiança, nossa empresa de advocacia é a resposta. Temos uma equipe experiente de advogados prontos para lutar por seus direitos e oferecer soluções jurídicas eficazes e personalizadas."
    },
    {
      description: "Na nossa empresa de advocacia, acreditamos que cada caso é único. Por isso, nossa equipe dedicada está empenhada em fornecer a você um serviço jurídico personalizado, com foco em resultados e eficiência."
    },
    {
      description: "Conte conosco, uma empresa de advocacia comprometida com a excelência e a defesa de seus interesses. Nossa equipe de advogados qualificados está pronta para oferecer soluções jurídicas estratégicas e proteger seus direitos de forma eficiente."
    }
  ];

  const randomParallax01 = () => {
    const randomIndex = Math.floor(Math.random() * parallax01.length);
    return parallax01[randomIndex].description;
  };

  const [randomParallax01Text, setRandomParallax01Text] = useState('');

  useEffect(() => {
    const savedDescription = localStorage.getItem('randomParallax01');
    if (savedDescription) {
      setRandomParallax01Text(savedDescription);
    } else {
      const newRandomDescription = randomParallax01();
      setRandomParallax01Text(newRandomDescription);
      localStorage.setItem('randomParallax01', newRandomDescription);
    }
  }, []);

  // SOBRE A FIRMA 
  const aboutFirma = [
    {
      description: "Nossa firma de advocacia busca sempre a excelência em serviços, oferecendo atendimento personalizado e soluções jurídicas eficazes para nossos clientes.",
    },
    {
      description: "Somos uma firma de advocacia comprometida em fornecer serviços jurídicos de alta qualidade. Nosso atendimento é personalizado, e buscamos sempre soluções eficazes para atender às necessidades dos nossos clientes.",
    },
    {
      description: "Na nossa firma de advocacia, priorizamos a excelência em cada caso. Nossa equipe está empenhada em fornecer atendimento personalizado e soluções jurídicas eficazes, buscando sempre os melhores resultados para nossos clientes.",
    },
    {
      description: "Conte com nossa firma de advocacia para receber um atendimento de qualidade e soluções jurídicas eficazes. Estamos comprometidos em oferecer serviços personalizados e buscar os melhores resultados para nossos clientes.",
    },
    {
      description: "Nossa firma de advocacia se dedica a oferecer serviços de excelência. Valorizamos o atendimento personalizado e buscamos sempre soluções jurídicas eficazes para atender às demandas e necessidades dos nossos clientes.",
    },
  ];

  const randomAboutFirma = () => {
    const randomIndex = Math.floor(Math.random() * aboutFirma.length);
    return aboutFirma[randomIndex].description;
  };

  const [randomAboutFirmaText, setRandomAboutFirmaText] = useState('');

  useEffect(() => {
    const savedDescription = localStorage.getItem('randomAboutFirma');
    if (savedDescription) {
      setRandomAboutFirmaText(savedDescription);
    } else {
      const newRandomDescription = randomAboutFirma();
      setRandomAboutFirmaText(newRandomDescription);
      localStorage.setItem('randomAboutFirma', newRandomDescription);
    }
  }, []);

  //
  const footer = [
    {
      description: "Fale com nossos advogados de defesa criminal hoje. Estamos aqui para ajudar você a alcançar seus objetivos de maneira legal e eficiente. Conte conosco para proteger seus direitos e liberdade.",
    },
    {
      description: "Nossa firma de advocacia é especializada em defesa criminal. Nossos advogados experientes estão prontos para lutar em seu nome, garantindo que seus direitos sejam protegidos. Entre em contato conosco e tenha uma equipe confiável ao seu lado.",
    },
    {
      description: "Se você está enfrentando acusações criminais, nossa equipe de advogados de defesa criminal está pronta para ajudar. Oferecemos representação legal experiente e eficiente, trabalhando incansavelmente para proteger seus direitos e liberdade.",
    },
    {
      description: "Não enfrente acusações criminais sozinho. Nossa equipe de advogados de defesa criminal está aqui para você. Com uma abordagem legal sólida e estratégias eficazes, buscamos alcançar os melhores resultados para proteger seus direitos e liberdade.",
    },
    {
      description: "Na nossa firma de advocacia, temos uma equipe de advogados especializados em defesa criminal prontos para ajudar. Com dedicação e habilidades jurídicas, trabalharemos em conjunto para garantir a melhor defesa possível, protegendo seus direitos e alcançando resultados favoráveis.",
    },
  ];

  const randomFooter = () => {
    const randomIndex = Math.floor(Math.random() * footer.length);
    return footer[randomIndex].description;
  };

  const [randomFooterText, setRandomFooterText] = useState('');

  useEffect(() => {
    const savedDescription = localStorage.getItem('randomFooter');
    if (savedDescription) {
      setRandomFooterText(savedDescription);
    } else {
      const newRandomDescription = randomFooter();
      setRandomFooterText(newRandomDescription);
      localStorage.setItem('randomFooter', newRandomDescription);
    }
  }, []);











  return (
    <Container>
      {loading ? <Loading /> : null}
      <HeaderFooter bgImage={imageUrlHeader} as="header">
        <h1>{randomTitleFirmaText}</h1>
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
              <p>{randomTextoAboutText}</p>
            </div>
          </Info>
        </section>
      </AboutSection>
      <Parallax bgImage={imageUrlParallax}>
        <ParallaxContent>
          <h4>DEFENDEMOS SEUS DIREITOS COM SOLUÇÃO EFICIENTE</h4>
          <LineParallax></LineParallax>
          <h2>{randomParallax01Text}</h2>
          <a>
            <Play size={32} weight="fill" />
          </a>
        </ParallaxContent>
      </Parallax>
      <PracticeArea>
        <h1>Áreas de atuação</h1>
        <h4>
          {randomAboutFirmaText}
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
            {randomFooterText}
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