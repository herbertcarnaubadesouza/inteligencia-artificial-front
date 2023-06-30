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
    const savedDescription = localStorage.getItem('randomTitleFirmaTemplate02');
    if (savedDescription) {
      setRandomTitleFirmaText(savedDescription);
    } else {
      const newRandomDescription = randomTitleFirma();
      setRandomTitleFirmaText(newRandomDescription);
      localStorage.setItem('randomTitleFirmaTemplate02', newRandomDescription);
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
    const savedDescription = localStorage.getItem('randomTextoAboutTemplate02');
    if (savedDescription) {
      setRandomTextoAboutText(savedDescription);
    } else {
      const newRandomDescription = randomTextoAbout();
      setRandomTextoAboutText(newRandomDescription);
      localStorage.setItem('randomTextoAboutTemplate02', newRandomDescription);
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
    const savedDescription = localStorage.getItem('randomParallax01Template02');
    if (savedDescription) {
      setRandomParallax01Text(savedDescription);
    } else {
      const newRandomDescription = randomParallax01();
      setRandomParallax01Text(newRandomDescription);
      localStorage.setItem('randomParallax01Template02', newRandomDescription);
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
    const savedDescription = localStorage.getItem('randomAboutFirmaTemplate02');
    if (savedDescription) {
      setRandomAboutFirmaText(savedDescription);
    } else {
      const newRandomDescription = randomAboutFirma();
      setRandomAboutFirmaText(newRandomDescription);
      localStorage.setItem('randomAboutFirmaTemplate02', newRandomDescription);
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
    const savedDescription = localStorage.getItem('randomFooterTemplate02');
    if (savedDescription) {
      setRandomFooterText(savedDescription);
    } else {
      const newRandomDescription = randomFooter();
      setRandomFooterText(newRandomDescription);
      localStorage.setItem('randomFooterTemplate02', newRandomDescription);
    }
  }, []);













  return (
    <Container>
      {loading ? <Loading /> : null}
      <HeaderBlock bgImage={imageUrlHeader}>
        <div className="container-block-header">
          <LineHeader></LineHeader>
          <span>A justiça é nosso compromisso, sua causa é nossa missão.</span>
        </div>
        <h1>
          {randomTitleFirmaText}
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
          <p>{randomTextoAboutText}</p>

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
