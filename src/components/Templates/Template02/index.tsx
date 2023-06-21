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

const apiKey = process.env.REACT_APP_API_KEY;

function Template02({ isVisible02 }: Template02Props) {
  const [primeitoTitle, setPrimeitoTitle] = useState<string | null>(null);
  const [sloganTitle, setSloganTitle] = useState<string | null>(null);
  const [sobreEmpresa, setSobreEmpresa] = useState<string | null>(null);
  const [sloganParallax, setSloganParallax] = useState<string | null>(null);
  const [titleParallax, setTitleParallax] = useState<string | null>(null);
  const [areasAtuacao, setAreasAtuacao] = useState<string | null>(null);
  const [assaltoDomestico, setAssaltoDomestico] = useState<string | null>(null);
  const [crimesArmas, setCrimesArmas] = useState<string | null>(null);
  const [crimesDrogas, setCrimesDrogas] = useState<string | null>(null);
  const [crimesPropriedade, setCrimesPropriedade] = useState<string | null>(null);
  const [audienciaFianca, setAudienciaFianca] = useState<string | null>(null);
  const [crimeAssedio, setCrimeAssedio] = useState<string | null>(null);
  const [sloganFooter, setSloganFooter] = useState<string | null>(null);
  const [textoFooter, setTextoFooter] = useState<string | null>(null);
  const [footer, setFooter] = useState<string | null>(null);
  const nomeEmpresa = "Seraphim Law Group"
  const MAX_RETRY_COUNT = 50; // Número máximo de tentativas
  const RETRY_DELAY = 6000; // Tempo de espera entre as tentativas em milissegundos
  
  const fetchData = async (
    setter: React.Dispatch<React.SetStateAction<string | null>>,
    localStorageKey: string,
    content: string,
    retryCount = 0,
  ) => {
    const storedData = localStorage.getItem(localStorageKey);
  
    if (!storedData) {
      try {
        const result = await axios.post(
          'https://api.openai.com/v1/chat/completions',
          {
            model: 'gpt-3.5-turbo',
            messages: [
              {
                role: 'user',
                content,
              },
            ],
          },
          {
            headers: {
              Authorization: `Bearer ${apiKey}`,
              'Content-Type': 'application/json',
            },
          },
        );
  
        const responseData = result.data.choices[0].message.content;
        setter(responseData);
        localStorage.setItem(localStorageKey, responseData);
      } catch (error) {
        console.error(error);
  
        // Verificar se ainda há tentativas disponíveis
        if (retryCount < MAX_RETRY_COUNT) {
          setTimeout(
            () => fetchData(setter, localStorageKey, content, retryCount + 1),
            RETRY_DELAY,
          );
        } else {
          console.error('Limite máximo de tentativas atingido');
        }
      }
    } else {
      setter(storedData);
    }
  };
  
  const clearCache = () => {
    localStorage.removeItem('primeitoTitle');
    localStorage.removeItem('sloganTitle');
    localStorage.removeItem('sobreEmpresa');
    localStorage.removeItem('sloganParallax');
    localStorage.removeItem('titleParallax');
    localStorage.removeItem('areasAtuacao');
    localStorage.removeItem('assaltoDomestico');
    localStorage.removeItem('crimesArmas');
    localStorage.removeItem('crimesDrogas');
    localStorage.removeItem('crimesPropriedade');
    localStorage.removeItem('audienciaFianca');
    localStorage.removeItem('crimeAssedio');
    localStorage.removeItem('sloganFooter');
    localStorage.removeItem('textoFooter');
    localStorage.removeItem('footer');
  };
  
 
  
  useEffect(() => {
    const sloganTitleContent = `Crie um slogan para a empresa de advocacia chamada ${nomeEmpresa} no máximo de 1 linha e não use aspas no texto.`;
    setTimeout(
      () => fetchData(setSloganTitle, 'sloganTitle', sloganTitleContent),
      10000,
    );
  }, []);
  
  useEffect(() => {
    const sobreEmpresaContent = `Crie um texto sobre a firma de advocacia chamada ${nomeEmpresa} contendo no mínimo 5 linhas e no máximo 6 linhas e não use aspas no texto.`;
    setTimeout(
      () => fetchData(setSobreEmpresa, 'sobreEmpresa', sobreEmpresaContent),
      15000,
    );
  }, []);
  
  useEffect(() => {
    const sloganParallaxContent = `Crie um novo slogan com foco em atrair clientes para a firma de advocacia, no máximo de 2 linhas e não use aspas no texto.`;
    setTimeout(
      () => fetchData(setSloganParallax, 'sloganParallax', sloganParallaxContent),
      20000,
    );
  }, []);
  
 
  
  useEffect(() => {
    const areasAtuacaoContent = `Crie um texto explicando que a firma de advocacia atua em todos os casos para a empresa ${nomeEmpresa}, no máximo de 4 linhas e não use aspas no texto.`;
    setTimeout(
      () => fetchData(setAreasAtuacao, 'areasAtuacao', areasAtuacaoContent),
      30000,
    );
  }, []);
  
  useEffect(() => {
    const assaltoDomesticoContent = `Crie um texto para o tema "Divórcio e Separação", no qual a firma de advocacia trabalha em seus casos, com exatamente 2 linhas de texto e não use aspas.`;
    setTimeout(
      () =>
        fetchData(setAssaltoDomestico, 'assaltoDomestico', assaltoDomesticoContent),
      35000,
    );
  }, []);
  
  useEffect(() => {
    const crimesArmasContent = `Crie um texto para o tema "Direitos dos avós", no qual a firma de advocacia trabalha em seus casos, com exatamente 2 linhas de texto e não use aspas.`;
    setTimeout(
      () => fetchData(setCrimesArmas, 'crimesArmas', crimesArmasContent),
      40000,
    );
  }, []);
  
  useEffect(() => {
    const crimesDrogasContent = `Crie um texto para o tema "Custódia de criança", no qual a firma de advocacia trabalha em seus casos, com exatamente 2 linhas de texto e não use aspas.`;
    setTimeout(
      () => fetchData(setCrimesDrogas, 'crimesDrogas', crimesDrogasContent),
      45000,
    );
  }, []);
  
  useEffect(() => {
    const crimesPropriedadeContent = `Crie um texto para o tema "Casamento/Uniões Civis", no qual a firma de advocacia trabalha em seus casos, com exatamente 2 linhas de texto e não use aspas.`;
    setTimeout(
      () => fetchData(setCrimesPropriedade, 'crimesPropriedade', crimesPropriedadeContent),
      50000,
    );
  }, []);
  
  useEffect(() => {
    const audienciaFiancaContent = `Crie um texto para o tema "Adoção e barriga de aluguel", no qual a firma de advocacia trabalha em seus casos, com exatamente 2 linhas de texto e não use aspas.`;
    setTimeout(
      () => fetchData(setAudienciaFianca, 'audienciaFianca', audienciaFiancaContent),
      55000,
    );
  }, []);
  
  useEffect(() => {
    const crimeAssedioContent = `Crie um texto para o tema "Acordos de propriedade", no qual a firma de advocacia trabalha em seus casos, com exatamente 2 linhas de texto e não use aspas.`;
    setTimeout(
      () => fetchData(setCrimeAssedio, 'crimeAssedio', crimeAssedioContent),
      60000,
    );
  }, []);
  
  useEffect(() => {
    const sloganFooterContent = `Crie um slogan dizendo ao cliente que ESTAMOS AQUI PARA AJUDAR VOCÊ A ALCANÇAR SEUS OBJETIVOS para a firma de advocacia, 1 linha e não use aspas no texto.`;
    setTimeout(
      () => fetchData(setSloganFooter, 'sloganFooter', sloganFooterContent),
      65000,
    );
  }, []);
  // por que usar nossa empresa 1
  useEffect(() => {
    const textoFooterContent = `Crie um texto dizendo ao cliente o porque  de escolher nossa empresa , para a firma de advocacia, 1 linhas e não use aspas no texto.`;
    setTimeout(
      () => fetchData(setTextoFooter, 'textoFooter', textoFooterContent),
      70000,
    );
  }, []);
   // por que usar nossa empresa 2
  useEffect(() => {
    const footerContent =`Crie um texto dizendo ao cliente o porque  de escolher nossa empresa , para a firma de advocacia, 1 linhas e não use aspas no texto.`;
    setTimeout(
      () => fetchData(setFooter, 'footer', footerContent),
      75000,
    );
  }, []);
   // por que usar nossa empresa 3
  useEffect(() => {
    const titleParallaxContent = `Crie um texto dizendo ao cliente o porque  de escolher nossa empresa , para a firma de advocacia, 1 linhas e não use aspas no texto.`;
    setTimeout(
      () => fetchData(setTitleParallax, 'titleParallax', titleParallaxContent),
      25000,
    );
  }, []);
  
  useEffect(() => {
    const storedPrimeitoTitle = localStorage.getItem('primeitoTitle');
    const storedSloganTitle = localStorage.getItem('sloganTitle');
    const storedSobreEmpresa = localStorage.getItem('sobreEmpresa');
    const storedSloganParallax = localStorage.getItem('sloganParallax');
    const storedTitleParallax = localStorage.getItem('titleParallax');
    const storedAreasAtuacao = localStorage.getItem('areasAtuacao');
    const storedAssaltoDomestico = localStorage.getItem('assaltoDomestico');
    const storedCrimesArmas = localStorage.getItem('crimesArmas');
    const storedCrimesDrogas = localStorage.getItem('crimesDrogas');
    const storedCrimesPropriedade = localStorage.getItem('crimesPropriedade');
    const storedAudienciaFianca = localStorage.getItem('audienciaFianca');
    const storedCrimeAssedio = localStorage.getItem('crimeAssedio');
    const storedSloganFooter = localStorage.getItem('sloganFooter');
    const storedTextoFooter = localStorage.getItem('textoFooter');
    const storedFooter = localStorage.getItem('footer');
  
    if (storedPrimeitoTitle) setPrimeitoTitle(storedPrimeitoTitle);
    if (storedSloganTitle) setSloganTitle(storedSloganTitle);
    if (storedSobreEmpresa) setSobreEmpresa(storedSobreEmpresa);
    if (storedSloganParallax) setSloganParallax(storedSloganParallax);
    if (storedTitleParallax) setTitleParallax(storedTitleParallax);
    if (storedAreasAtuacao) setAreasAtuacao(storedAreasAtuacao);
    if (storedAssaltoDomestico) setAssaltoDomestico(storedAssaltoDomestico);
    if (storedCrimesArmas) setCrimesArmas(storedCrimesArmas);
    if (storedCrimesDrogas) setCrimesDrogas(storedCrimesDrogas);
    if (storedCrimesPropriedade) setCrimesPropriedade(storedCrimesPropriedade);
    if (storedAudienciaFianca) setAudienciaFianca(storedAudienciaFianca);
    if (storedCrimeAssedio) setCrimeAssedio(storedCrimeAssedio);
    if (storedSloganFooter) setSloganFooter(storedSloganFooter);
    if (storedTextoFooter) setTextoFooter(storedTextoFooter);
    if (storedFooter) setFooter(storedFooter);
  
    window.addEventListener('beforeunload', clearCache);
    return () => {
      window.removeEventListener('beforeunload', clearCache);
    };
  }, []);


  // BANNER
  const [banner, setBanner] = useState<Template02[]>([]);
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
  const [about, setAbout] = useState<Template02[]>([]);
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
  const [parallax, setParallax] = useState<Template02[]>([]);
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
      <HeaderBlock bgImage={imageUrl}>
        <div className="container-block-header">
          <LineHeader></LineHeader>
          <span>{sloganTitle}</span>
        </div>
        <h1>
       {nomeEmpresa}
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
            <span>{sloganTitle}</span>
          </div>
          <h2>Você veio ao lugar certo</h2>
          <p>{sobreEmpresa}</p>
          <div className="bottom-about-section">
            <div className="block-bottom">
              <LineAboutSection />
             
              <h3></h3>
              <p></p>
            </div>
            <div className="block-bottom">
              <LineAboutSection />
             
              <h3> </h3>
              <p></p>
            </div>
          </div>
        </FirstBlockAbout>
        <SecondBlockAbout>
          <img
            src={
              imageUrlSegunda
                ? imageUrlSegunda
                : 'https://cdn.discordapp.com/attachments/1116206739373691010/1116758018403614750/ThomasiWilson1_In_a_bustling_metropolis_where_the_pillars_of_la_56479b76-2b1a-45f8-92e6-e7298d120c8c.png'
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
                <p>{assaltoDomestico}</p>
              </div>
              <div className="content-block-atuacao">
                <NotePencil size={32} weight="bold" />
                <h3>Direitos dos avós</h3>
                <p>{crimesArmas}</p>
              </div>
              <div className="content-block-atuacao">
                <Handshake size={32} weight="bold" />
                <h3>Custódia de criança</h3>
                <p>{crimesDrogas}</p>
              </div>
              
            </Row>
            <Row>
              <div className="content-block-atuacao">
                <Heart size={32} weight="bold" />
                <h3>Casamento/Uniões Civis​</h3>
                <p>{audienciaFianca}</p>
              </div>
              <div className="content-block-atuacao">
                <User size={32} weight="bold" />
                <h3>Adoção e barriga de aluguel​</h3>
                <p>{crimeAssedio}</p>
              </div>
              <div className="content-block-atuacao">
                <Scroll size={32} weight="bold" />
                <h3>Acordos de propriedade​​​</h3>
                <p>{crimeAssedio}</p>
              </div>
              
              
             
            </Row>
          </Column>
        </div>
      </ServicesSection>
      <WhyUs bgImage={imageUrlTerceira}>
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
                  <h4>{textoFooter}</h4>
                  <p>
                 
                  </p>
                </div>
              </div>
              <div className="wrap-block-whyus">
                <h5>02</h5>
                <div className="block-whyus-p">
                  <h4>{footer}</h4>
                  <p>
                    
                  </p>
                </div>
              </div>
              <div className="wrap-block-whyus">
                <h5>03</h5>
                <div className="block-whyus-p">
                  <h4>{titleParallax}</h4>
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
