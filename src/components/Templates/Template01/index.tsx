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
  const nomeEmpresa = "Lux Amount Advocacia"
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
    const sloganTitleContent = `Crie um slogan de até 1 linha para a empresa de advocacia chamada ${nomeEmpresa}. Não use aspas nos textos.`;
    setTimeout(
      () => fetchData(setSloganTitle, 'sloganTitle', sloganTitleContent),
      10000
    );
  }, []);
  
  useEffect(() => {
    const sobreEmpresaContent = `Crie um texto de 5 a 6 linhas sobre a firma de advocacia chamada ${nomeEmpresa}. Não use aspas nos textos.`;
    setTimeout(
      () => fetchData(setSobreEmpresa, 'sobreEmpresa', sobreEmpresaContent),
      15000
    );
  }, []);
  
  useEffect(() => {
    const sloganParallaxContent = `Crie um novo slogan de até 2 linhas com foco em atrair clientes para a firma de advocacia. Não use aspas nos textos.`;
    setTimeout(
      () => fetchData(setSloganParallax, 'sloganParallax', sloganParallaxContent),
      20000
    );
  }, []);
  
  useEffect(() => {
    const titleParallaxContent = `Crie um subtítulo de até 1 linha para uma seção com foco em atrair clientes para a firma de advocacia chamada ${nomeEmpresa}. Não use aspas nos textos.`;
    setTimeout(
      () => fetchData(setTitleParallax, 'titleParallax', titleParallaxContent),
      25000
    );
  }, []);
  
  useEffect(() => {
    const areasAtuacaoContent = `Crie um texto de até 2 linhas explicando que a firma de advocacia atua em todos os casos. Não use aspas nos textos.`;
    setTimeout(
      () => fetchData(setAreasAtuacao, 'areasAtuacao', areasAtuacaoContent),
      30000
    );
  }, []);
  
  useEffect(() => {
    const assaltoDomesticoContent = `Crie um texto de 2 linhas sobre o tema "Assalto Doméstico" e como a firma de advocacia trabalha nesses casos. Não use aspas nos textos.`;
    setTimeout(
      () => fetchData(setAssaltoDomestico, 'assaltoDomestico', assaltoDomesticoContent),
      35000
    );
  }, []);
  
  useEffect(() => {
    const crimesArmasContent = `Crie um texto de 2 linhas sobre o tema "Crimes de Armas" e como a firma de advocacia trabalha nesses casos. Não use aspas nos textos.`;
    setTimeout(
      () => fetchData(setCrimesArmas, 'crimesArmas', crimesArmasContent),
      40000
    );
  }, []);
  
  useEffect(() => {
    const crimesDrogasContent = `Crie um texto de 2 linhas sobre o tema "Crimes de Drogas" e como a firma de advocacia trabalha nesses casos. Não use aspas nos textos.`;
    setTimeout(
      () => fetchData(setCrimesDrogas, 'crimesDrogas', crimesDrogasContent),
      45000
    );
  }, []);
  
  useEffect(() => {
    const crimesPropriedadeContent = `Crie um texto de 2 linhas sobre o tema "Crimes de Propriedade" e como a firma de advocacia trabalha nesses casos. Não use aspas nos textos.`;
    setTimeout(
      () => fetchData(setCrimesPropriedade, 'crimesPropriedade', crimesPropriedadeContent),
      50000
    );
  }, []);
  
  useEffect(() => {
    const audienciaFiancaContent = `Crie um texto de 2 linhas sobre o tema "Audiência de Fiança" e como a firma de advocacia trabalha nesses casos. Não use aspas nos textos.`;
    setTimeout(
      () => fetchData(setAudienciaFianca, 'audienciaFianca', audienciaFiancaContent),
      55000
    );
  }, []);
  
  useEffect(() => {
    const crimeAssedioContent = `Crie um texto de 2 linhas sobre o tema "Crime de Assédio" e como a firma de advocacia trabalha nesses casos. Não use aspas nos textos.`;
    setTimeout(
      () => fetchData(setCrimeAssedio, 'crimeAssedio', crimeAssedioContent),
      60000
    );
  }, []);
  
  useEffect(() => {
    const sloganFooterContent = `Crie um slogan de até 1 linha transmitindo a mensagem "ESTAMOS AQUI PARA AJUDAR VOCÊ A ALCANÇAR SEUS OBJETIVOS" para a firma de advocacia. Não use aspas nos textos.`;
    setTimeout(
      () => fetchData(setSloganFooter, 'sloganFooter', sloganFooterContent),
      65000
    );
  }, []);
  
  useEffect(() => {
    const textoFooterContent = `Crie um texto de 3 linhas com o título "Fale com nossos advogados de defesa criminal hoje" transmitindo a mensagem "ESTAMOS AQUI PARA AJUDAR VOCÊ A ALCANÇAR SEUS OBJETIVOS" para a firma de advocacia. Não use aspas nos textos.`;
    setTimeout(
      () => fetchData(setTextoFooter, 'textoFooter', textoFooterContent),
      70000
    );
  }, []);
  
  useEffect(() => {
    const footerContent = `Crie um texto de até 3 linhas para ser colocado no rodapé de um site de uma firma de advocacia. Não use aspas nos textos.`;
    setTimeout(
      () => fetchData(setFooter, 'footer', footerContent),
      75000
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
          {sloganTitle}
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
              <p>{sobreEmpresa}</p>
            </div>
          </Info>
        </section>
      </AboutSection>
      <Parallax bgImage={thirdImageUrlTerceira}>
        <ParallaxContent>
          <h4>{sloganParallax}</h4>
          <LineParallax></LineParallax>
          <h2>{titleParallax}</h2>
          <a>
            <Play size={32} weight="fill" />
          </a>
        </ParallaxContent>
      </Parallax>
      <PracticeArea>
        <h1>Áreas de atuação</h1>
        <h4>
          {areasAtuacao}
        </h4>
        <button>Ver todas as áreas</button>
        <PracticeAreaContentAll>
          <PracticeAreaContent>
            <PracticeContent>
              <h3>01</h3>
              <h2>Assalto doméstico</h2>
              <LineSmall></LineSmall>
              <p>{assaltoDomestico}</p>
            </PracticeContent>
            <PracticeContent>
              <h3>02</h3>
              <h2>Crimes de armas</h2>
              <LineSmall></LineSmall>
              <p>{crimesArmas}</p>
            </PracticeContent>
            <PracticeContent>
              <h3>03</h3>
              <h2>Crimes de drogas</h2>
              <LineSmall></LineSmall>
              <p>{crimesDrogas}</p>
            </PracticeContent>
          </PracticeAreaContent>
        </PracticeAreaContentAll>
        <PracticeAreaContentAll>
          <PracticeAreaContent>
            <PracticeContent>
              <h3>04</h3>
              <h2>Crimes de propriedade</h2>
              <LineSmall></LineSmall>
              <p>{crimesPropriedade}</p>
            </PracticeContent>
            <PracticeContent>
              <h3>05</h3>
              <h2>Audiencia de fiança</h2>
              <LineSmall></LineSmall>
              <p>{audienciaFianca}</p>
            </PracticeContent>
            <PracticeContent>
              <h3>06</h3>
              <h2>Crime de assédio</h2>
              <LineSmall></LineSmall>
              <p>{crimeAssedio}</p>
            </PracticeContent>
          </PracticeAreaContent>
        </PracticeAreaContentAll>
      </PracticeArea>
      <ParallaxContact bgImage={imageUrlTerceira}>
        <ParallaxContent>
          <h4>{sloganFooter}</h4>
          <LineParallax></LineParallax>
          <h2>Fale com nossos advogados de defesa criminal hoje!</h2>
          <h3>
           {textoFooter}
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
        <FooterContent>
          <h3>
           {footer}
          </h3>
        </FooterContent>
        <FooterRight>
          <FooterContent>
            <h2>Fale conosco</h2>
            <h4>Nos siga no Instagram</h4>
            <h4></h4>
            <h4></h4>
            <h4></h4>
          </FooterContent>
          <FooterContent>
            <h2>Nossos links</h2>
            <h4>Home </h4>
            <h4>About</h4>
           
          </FooterContent>
        </FooterRight>
      </Footer>
    </Container>
  );
}

export default Template01;