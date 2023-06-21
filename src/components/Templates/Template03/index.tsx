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

const apiKey = process.env.REACT_APP_API_KEY;

function Template03({ isVisible03 }: Template03Props) {

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
  const nomeEmpresa = "Excalibur Law Firm"
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
    const sobreEmpresaContent = `Crie um texto sobre a firma de advocacia chamada ${nomeEmpresa} contendo no mínimo de 5 linhas e no máximo de 6 linhas e não use aspas no texto.`;
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
    const assaltoDomesticoContent = `Crie um texto para o tema "Divórcio e Separação", no qual a firma de advocacia trabalha em seus casos, com no mínimo 3 linhas e no máximo 4 linhas de texto e não use aspas.`;
    setTimeout(
      () =>
        fetchData(setAssaltoDomestico, 'assaltoDomestico', assaltoDomesticoContent),
      35000,
    );
  }, []);
  
  useEffect(() => {
    const crimesArmasContent = `Crie um texto para o tema "Direitos dos avós", no qual a firma de advocacia trabalha em seus casos, com no mínimo 3 linhas e no máximo 4 linhas de texto e não use aspas.`;
    setTimeout(
      () => fetchData(setCrimesArmas, 'crimesArmas', crimesArmasContent),
      40000,
    );
  }, []);
  
  useEffect(() => {
    const crimesDrogasContent = `Crie um texto para o tema "Custódia de criança", no qual a firma de advocacia trabalha em seus casos, com no mínimo 3 linhas e no máximo 4 linhas de texto e não use aspas.`;
    setTimeout(
      () => fetchData(setCrimesDrogas, 'crimesDrogas', crimesDrogasContent),
      45000,
    );
  }, []);
  
  useEffect(() => {
    const crimesPropriedadeContent = `Crie um texto para o tema "Casamento/Uniões Civis", no qual a firma de advocacia trabalha em seus casos, com no mínimo 3 linhas e no máximo 4 linhas de texto e não use aspas.`;
    setTimeout(
      () => fetchData(setCrimesPropriedade, 'crimesPropriedade', crimesPropriedadeContent),
      50000,
    );
  }, []);
  
  useEffect(() => {
    const audienciaFiancaContent = `Crie um texto para o tema "Adoção e barriga de aluguel", no qual a firma de advocacia trabalha em seus casos, com no mínimo 3 linhas e no máximo 4 linhas de texto e não use aspas.`;
    setTimeout(
      () => fetchData(setAudienciaFianca, 'audienciaFianca', audienciaFiancaContent),
      55000,
    );
  }, []);
  
  useEffect(() => {
    const crimeAssedioContent = `Crie um texto para o tema "Acordos de propriedade", no qual a firma de advocacia trabalha em seus casos, com no mínimo 3 linhas e no máximo 4 linhas de texto e não use aspas.`;
    setTimeout(
      () => fetchData(setCrimeAssedio, 'crimeAssedio', crimeAssedioContent),
      60000,
    );
  }, []);
  
  useEffect(() => {
    const sloganFooterContent = `Crie um slogan dizendo ao cliente que ESTAMOS AQUI PARA AJUDAR VOCÊ A ALCANÇAR SEUS OBJETIVOS para a firma de advocacia, com no máximo 1 linha e não use aspas no texto.`;
    setTimeout(
      () => fetchData(setSloganFooter, 'sloganFooter', sloganFooterContent),
      65000,
    );
  }, []);
  
  useEffect(() => {
    const textoFooterContent = `Crie um texto dizendo ao cliente que ESTAMOS AQUI PARA AJUDAR VOCÊ A ALCANÇAR SEUS OBJETIVOS, com o título "Fale com nossos advogados de defesa criminal hoje", para a firma de advocacia, com no máximo 3 linhas e não use aspas no texto.`;
    setTimeout(
      () => fetchData(setTextoFooter, 'textoFooter', textoFooterContent),
      70000,
    );
  }, []);
  
  useEffect(() => {
    const footerContent = `Crie um texto para ser colocado no rodapé de um site de uma firma de advocacia, com no máximo 3 linhas e não use aspas no texto.`;
    setTimeout(
      () => fetchData(setFooter, 'footer', footerContent),
      75000,
    );
  }, []);
 // Como trabalhoamos 
  useEffect(() => {
    const titleParallaxContent = `Crie um texto com o tema Abordagem Personalizada para uma firma de advocacia , no máximo de 2 linha e não use aspas no texto.`;
    setTimeout(
      () => fetchData(setTitleParallax, 'titleParallax', titleParallaxContent),
      25000,
    );
  }, []);

 // Como trabalhoamos  2 
  useEffect(() => {
    const areasAtuacaoContent =`Crie um texto com o tema Excelência em Serviços para uma firma de advocacia , no máximo de 2 linha e não use aspas no texto.`;
    setTimeout(
      () => fetchData(setAreasAtuacao, 'areasAtuacao', areasAtuacaoContent),
      30000,
    );
  }, []);


   // Como trabalhoamos  3
  useEffect(() => {
    const areasAtuacaoContent =`Crie um texto com o tema Excelência em Serviços  para uma firma de advocacia , no máximo de 2 linha e não use aspas no texto.`;
    setTimeout(
      () => fetchData(setPrimeitoTitle, 'primeitoTitle', areasAtuacaoContent),
      30000,
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
  const [banner, setBanner] = useState<Template03[]>([]);
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
  const [about, setAbout] = useState<Template03[]>([]);
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
  const [parallax, setParallax] = useState<Template03[]>([]);
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
        <span></span>
        <h1>
         {nomeEmpresa}
        </h1>
        <p>
          {sloganTitle}
        </p>
        <button>agendar reunião</button>
      </HeaderBlock>
      <AboutSection>
        <LeftSideBlock>
          <div>
            <LineAboutSection></LineAboutSection>
            <div className="title-about-section-block">
              <h2>Sobre nós</h2>
              <h3>{sobreEmpresa}</h3>
            </div>
          </div>
          <p>{sloganParallax}</p>
        
          <button>fale conosco</button>
        </LeftSideBlock>
        <RightSideBlock>
          <img
            src={
              imageUrlSegunda
                ? imageUrlSegunda
                : 'https://cdn.discordapp.com/attachments/1116206739373691010/1116758018403614750/ThomasiWilson1_In_a_bustling_metropolis_where_the_pillars_of_la_56479b76-2b1a-45f8-92e6-e7298d120c8c.png'
            }
          ></img>
        </RightSideBlock>
      </AboutSection>
      <IconSection>
        <div className="Container-blocks">
          <div className="meta-icons">
            <Scales size={50} weight="fill" />
            <h3>120+</h3>
            <p>Casos Resolvidos</p>
          </div>

          <div className="meta-icons">
            <Hammer size={50} weight="fill" />
            <h3>120+</h3>
            <p>Clientes Satisfeitos</p>
          </div>

          <div className="meta-icons">
            <Buildings size={50} weight="fill" />
            <h3>120+</h3>
            <p>Escritorios</p>
          </div>

          <div className="meta-icons">
            <BagSimple size={50} weight="fill" />
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
              thirdImageUrlTerceira
                ? thirdImageUrlTerceira
                : 'https://cdn.discordapp.com/attachments/1116206739373691010/1116758018403614750/ThomasiWilson1_In_a_bustling_metropolis_where_the_pillars_of_la_56479b76-2b1a-45f8-92e6-e7298d120c8c.png'
            }
            alt=""
          />
        </LeftAwardBlock>

        <RigthAwardBlock>
          <div className="Areas-block">
            <h3>Separação e Divórcio</h3>
            <p>{assaltoDomestico}</p>
          </div>

          <div className="Areas-block">
            <h3>Custódia da criança</h3>
            <p>{crimesArmas}</p>
          </div>

          <div className="Areas-block">
            <h3>Pensão alimentícia</h3>
            <p>{crimesDrogas}</p>
          </div>

          <div className="Areas-block">
            <h3>Apoio do cônjuge</h3>
            <p>{crimesPropriedade}</p>
          </div>
        </RigthAwardBlock>

        <RigthAwardBlock>
          <div className="Areas-block">
            <h3>Assuntos Internacionais</h3>
            <p>{audienciaFianca}</p>
          </div>

          <div className="Areas-block">
            <h3>Apelações de direito de família</h3>
            <p>{crimeAssedio}</p>
          </div>

          <div className="Areas-block">
            <h3>Proteção de patrimônio</h3>
            <p>{crimesArmas}</p>
          </div>

          <div className="Areas-block">
            <h3>Serviços de alto patrimônio líquido</h3>
            <p>{assaltoDomestico}</p>
          </div>
        </RigthAwardBlock>
      </PraticaceSection>

      <HowWorksSection>
        <LineAwardsSection></LineAwardsSection>
        <HowWorksHeaderSection>
          <div className="Header-How-Work">
            <div className="containe-title">
              <h2>Como trabalhamos </h2>
              <p>
               {textoFooter}
              </p>
            </div>
          </div>
          <div className="Header-How-Work">
            <div className="container-works-pai">
              <div className="container-works">
                <h1>01</h1>
                <h2>Abordagem Personalizada </h2>
                <p>
                 {sloganFooter}
                </p>
              </div>
              <div className="container-works">
                <h1>02</h1>
                <h2>Excelência em Serviços</h2>
                <p>
                 {sloganFooter}
                </p>
              </div>
              <div className="container-works">
                <h1>03</h1>
                <h2>Comunicação Transparente</h2>
                <p>
               {sloganFooter}
                </p>
              </div>
            </div>
            <div className="container-btn">
              <button className="btn"> LETS DISCUSS</button>
            </div>
          </div>
        </HowWorksHeaderSection>
      </HowWorksSection>
      <HowLocationSection>
        <div className="container-location">
          <div className="container-title">
            <h1> Locais de escritórios</h1>
            <p>
             
            </p>
          </div>
          <div className="container-modalLocation">
            <div className="modalLocation">
              <div className="container-icon">
                <House size={40} weight="fill" />
                <h3>Montreal </h3>
              </div>

              <div className="container-p">
                <p>Howe St, Vancouver, BC VZS</p>
                <p>2S8, Canada.</p>
                <p> +1 12345 67890</p>
              </div>
              <div className="container-ping">
                <p>
                  <MapPin size={20} weight="fill" />
                  <span>OBTER DIREÇÕES</span>
                </p>
              </div>
            </div>
            <div className="modalLocation">
              <div className="container-icon">
                <House size={40} weight="fill" />
                <h3>Montreal </h3>
              </div>

              <div className="container-p">
                <p>Howe St, Vancouver, BC VZS</p>
                <p>2S8, Canada.</p>
                <p> +1 12345 67890</p>
              </div>
              <div className="container-ping">
                <p>
                  <MapPin size={20} weight="fill" />
                  <span>OBTER DIREÇÕES</span>
                </p>
              </div>
            </div>
            <div className="modalLocation">
              <div className="container-icon">
                <House size={40} weight="fill" />
                <h3>Montreal </h3>
              </div>

              <div className="container-p">
                <p>Howe St, Vancouver, BC VZS</p>
                <p>2S8, Canada.</p>
                <p> +1 12345 67890</p>
              </div>
              <div className="container-ping">
                <p>
                  <MapPin size={20} weight="fill" />
                  <span>OBTER DIREÇÕES</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </HowLocationSection>

      <HowHelpSection bgImage={imageUrlTerceira}>
        <div className="container-help">
          <LineAwardsSection></LineAwardsSection>

          <div className="container-inf">
            <h1>Ajudamos a resolver seus problemas legais</h1>
            <p>
{footer}            </p>

            <button className="btn">AGENDE UMA CONSULTA</button>
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