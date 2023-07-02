// index.tsx

import {
  AboutSection,
  AwardsRow1,
  AwardsSection,
  Container,
  HeaderAwards,
  HeaderBlock,
  HowWorksHeaderSection,
  HowWorksSection,
  IconSection,
  LeftAwardBlock,
  LeftSideBlock,
  LineAboutSection,
  LineAwardsSection,
  PraticaceSection,
  RightSideBlock,
  RigthAwardBlock,
  HowLocationSection,
  HowHelpSection,
  Footer,
} from './styles';
import {
  BagSimple,
  Buildings,
  Hammer,
  Scales,
  MapPin,
  House,
} from '@phosphor-icons/react';

import axios from 'axios';
import { useEffect, useState } from 'react';

import { collection, db, getDoc, doc } from '../../../firebase';
import { getDocs } from 'firebase/firestore';
import { deleteDoc } from 'firebase/firestore';
interface Template03Props {
  isVisible03: boolean;
}

interface ApiResponse {
  choices: {
    message: {
      content: string;
    };
  }[];
}

interface Template03 {
  imgUrl: string;
}
import Loading from '../Loading/Loading';
const apiKey = process.env.REACT_APP_API_KEY;

function Template03({ isVisible03 }: Template03Props) {


  const nomeEmpresa = "Excalibur Law Firm"

  // BANNER HEADER
  const [imageUrlHeader, setImageUrlHeader] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const bannerTemplateHeader = localStorage.getItem('bannerTemplateHeaderTemplate03');

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

          localStorage.setItem('bannerTemplateHeaderTemplate03', randomBanner.imgUrl);
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
      const bannerTemplateHeader = localStorage.getItem('bannerTemplateAboutTemplate03');

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

          localStorage.setItem('bannerTemplateAboutTemplate03', randomBanner.imgUrl);
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
      const bannerTemplateHeader = localStorage.getItem('bannerTemplateParallax01Template03');

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

          localStorage.setItem('bannerTemplateParallax01Template03', randomBanner.imgUrl);
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
      const bannerTemplateHeader = localStorage.getItem('bannerTemplateParallax02Template03');

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

          localStorage.setItem('bannerTemplateParallax02Template03', randomBanner.imgUrl);
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
    const localStorageValue = localStorage.getItem('loading3');

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
    localStorage.setItem('loading3', loading.toString());
  }, [loading]);

  // Limpar o estado do localStorage ao encerrar o navegador
  window.addEventListener('beforeunload', () => {
    localStorage.removeItem('loading3');
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

  // FOOTER
  const footer = [
    {
      description: "Fale com nossos advogados hoje",
    }

  ];
  ;

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
        <span></span>
        <h1>
          {randomTitleFirmaText}
        </h1>
        <p>
          Mantendo a justiça ao seu lado.
        </p>
        <button>agendar reunião</button>
      </HeaderBlock>
      <AboutSection>
        <LeftSideBlock>
          <div>
            <LineAboutSection></LineAboutSection>
            <div className="title-about-section-block">
              <h2>Sobre nós</h2>
              <h3>{randomTextoAboutText}</h3>
            </div>
          </div>
          <p>Lutando pelos seus direitos.</p>

          <button>fale conosco</button>
        </LeftSideBlock>
        <RightSideBlock>
          <img
            src={
              imageUrlAbout

            }
          ></img>
        </RightSideBlock>
      </AboutSection>
      <IconSection>
        <div className="Container-blocks">
          <div className="meta-icons">
            <Scales size={40} weight="fill" />
            <h3>120+</h3>
            <p>Casos Resolvidos</p>
          </div>

          <div className="meta-icons">
            <Hammer size={40} weight="fill" />
            <h3>120+</h3>
            <p>Clientes Satisfeitos</p>
          </div>

          <div className="meta-icons">
            <Buildings size={40} weight="fill" />
            <h3>120+</h3>
            <p>Escritorios</p>
          </div>

          <div className="meta-icons">
            <BagSimple size={40} weight="fill" />
            <h3>120+</h3>
            <p>Associados Legais</p>
          </div>
        </div>
      </IconSection>


      <PraticaceSection>
        <LeftAwardBlock>
          <LineAwardsSection></LineAwardsSection>
          <h2>Nossas Áreas de Atuação</h2>
          <p>

          </p>
          <img
            src={
              imageUrlParallax

            }
            alt=""
          />
        </LeftAwardBlock>

        <RigthAwardBlock>
          <div className="Areas-block">
            <h3>Separação e Divórcio</h3>
            <p>Nossa equipe jurídica oferece suporte especializado para lidar com os desafios emocionais e legais da separação e divórcio, visando um acordo justo para todas as partes envolvidas.</p>
          </div>

          <div className="Areas-block">
            <h3>Custódia da criança</h3>
            <p>Trabalhamos incansavelmente para proteger o interesse e o bem-estar da criança, buscando acordos de custódia que promovam um ambiente seguro e saudável para seu desenvolvimento.</p>
          </div>

          <div className="Areas-block">
            <h3>Pensão alimentícia</h3>
            <p>Nossos advogados estão preparados para auxiliá-lo(a) na busca por uma pensão alimentícia justa e adequada, garantindo o sustento e o futuro financeiro dos envolvidos.</p>
          </div>


        </RigthAwardBlock>

        <RigthAwardBlock>
          <div className="Areas-block">
            <h3>Assuntos Internacionais</h3>
            <p>Com experiência em casos internacionais, nossa equipe jurídica está pronta para lidar com questões legais complexas que envolvem múltiplas.</p>
          </div>

          <div className="Areas-block">
            <h3>Apelações de direito de família</h3>
            <p>Proteja seu patrimônio com o auxílio dos nossos advogados especializados, que oferecem soluções personalizadas para garantir a preservação dos seus ativos e a segurança financeira no contexto familiar.</p>
          </div>

          <div className="Areas-block">
            <h3>Proteção de patrimônio</h3>
            <p>Nossa equipe de advocacia oferece soluções personalizadas e estratégias eficazes para proteger seu patrimônio é preservação de seus bens.</p>
          </div>


        </RigthAwardBlock>
      </PraticaceSection>

      <HowWorksSection>
        <LineAwardsSection></LineAwardsSection>
        <HowWorksHeaderSection>
          <div className="Header-How-Work">
            <div className="containe-title">
              <h2>Nosso Compromisso</h2>
              <p>
                {randomParallax01Text}
              </p>
            </div>
          </div>
          <div className="Header-How-Work">
            <div className="container-works-pai">
              <div className="container-works">
                <h1>01</h1>
                <h2>Abordagem Personalizada </h2>
                <p>
                  Nossa abordagem é personalizada, adaptando nossos serviços às necessidades específicas de cada cliente.
                </p>
              </div>
              <div className="container-works">
                <h1>02</h1>
                <h2>Excelência em Serviços</h2>
                <p>
                  Nosso foco na excelência garante que cada cliente receba um serviço de alta qualidade e eficácia.
                </p>
              </div>
              <div className="container-works">
                <h1>03</h1>
                <h2>Comunicação </h2>
                <p>
                  Nossa abordagem de comunicação é clara e aberta, garantindo que nossos clientes compreendam plenamente.
                </p>
              </div>
            </div>
            <div className="container-btn">
              <button className="btn"> FALAR COM ESPECIALISTA</button>


            </div>
          </div>

        </HowWorksHeaderSection>

      </HowWorksSection>
      <HowLocationSection>
        <div className="container-location">
          <div className="container-title">
            <h1> Nossos escritórios</h1>
            <p>

            </p>
          </div>
          <div className="container-modalLocation">
            <div className="modalLocation">
              <div className="container-icon">

                <h3>Excalibur Law Firm
                </h3>
              </div>

              <div className="container-p">
                <p> Rua dos Advogados, Centro</p>
                <p>Cidade Nova</p>
                <p> +1 (555) 123-4567</p>
              </div>
              <div className="container-ping">
                <p>
                  <MapPin size={20} weight="fill" />
                  <span>Localização</span>
                </p>
              </div>
            </div>
            <div className="modalLocation">
              <div className="container-icon">

                <h3>Excalibur Law Firm
                </h3>
              </div>

              <div className="container-p">
                <p>Rua Santos Pereira</p>
                <p>Aldeota</p>
                <p>  +1 (555) 123-4567</p>
              </div>
              <div className="container-ping">
                <p>
                  <MapPin size={20} weight="fill" />
                  <span>Localização</span>
                </p>
              </div>
            </div>
            <div className="modalLocation">
              <div className="container-icon">

                <h3>Excalibur Law Firm
                </h3>
              </div>

              <div className="container-p">
                <p>Av Santos Downtown</p>
                <p>Messejana</p>
                <p>  +1 (555) 123-4567</p>
              </div>
              <div className="container-ping">
                <p>
                  <MapPin size={20} weight="fill" />
                  <span>Localização</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </HowLocationSection>

      <HowHelpSection bgImage={imageUrlParallaxSegunda}>
        <div className="container-help">
          <LineAwardsSection></LineAwardsSection>

          <div className="container-inf">
            <h1>{randomFooterText} </h1>
            <p>
              Soluções jurídicas eficientes
            </p>

            <button className="btn">FALE CONOSCO</button>
          </div>
        </div>
      </HowHelpSection>
      <Footer>
        <div className="content-footer">
          <p>Copyright © 2023 Rei do Sites</p>
          <p>Powered by Rei do Sites</p>
        </div>
      </Footer>
    </Container>
  );
}

export default Template03;