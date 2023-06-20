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

import Loading from '../Loading/Loading';

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

  const [loading, setLoading] = useState(true);


  const fetchData = async (
    setter: React.Dispatch<React.SetStateAction<string | null>>,
    localStorageKey: string,
    content: string,
    retryCount = 0,
  ) => {
    const storedData = localStorage.getItem(localStorageKey);

    if (storedData === undefined || storedData === null) {
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
        console.log(apiKey)

        // Verificar se ainda há tentativas disponíveis
        if (retryCount < 5) {
          setTimeout(
            () => fetchData(setter, localStorageKey, content, retryCount + 1),
            5000,
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
    setTimeout(() => {
      clearCache();
      fetchData(setPrimeitoTitle, 'primeitoTitle', 'Digite o título sobre o tema da empresa "Advogados de Defesa Criminal"');
    }, 15000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      fetchData(setSloganTitle, 'sloganTitle', 'Digite o slogan da empresa de Advogados de Defesa Criminal');
    }, 30000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      fetchData(setSobreEmpresa, 'sobreEmpresa', 'Digite um texto sobre a empresa de Advogados de Defesa Criminal (máximo de 5 linhas)');
    }, 45000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      fetchData(setSloganParallax, 'sloganParallax', 'Digite um slogan para o parallax do site da empresa de Advogados de Defesa Criminal');
    }, 60000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      fetchData(setTitleParallax, 'titleParallax', 'Digite o título para o parallax do site da empresa de Advogados de Defesa Criminal');
    }, 75000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      fetchData(setAreasAtuacao, 'areasAtuacao', 'Digite um resumo das áreas de atuação da empresa de Advogados de Defesa Criminal (máximo de 2 linhas)');
    }, 90000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      fetchData(setAssaltoDomestico, 'assaltoDomestico', 'Faça um pequeno texto de no máximo 4 linhas sobre a atuação da empresa em Assalto Doméstico');
    }, 105000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      fetchData(setCrimesArmas, 'crimesArmas', 'Faça um pequeno texto de no máximo 4 linhas sobre a atuação da empresa em Crimes com Armas');
    }, 120000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      fetchData(setCrimesDrogas, 'crimesDrogas', 'Faça um pequeno texto de no máximo 4 linhas sobre a atuação da empresa em Crimes com Drogas');
    }, 135000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      fetchData(setCrimesPropriedade, 'crimesPropriedade', 'Faça um pequeno texto de no máximo 4 linhas sobre a atuação da empresa em Crimes de Propriedade');
    }, 150000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      fetchData(setAudienciaFianca, 'audienciaFianca', 'Faça um pequeno texto de no máximo 4 linhas sobre a atuação da empresa em Audiência de Fiança');
    }, 165000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      fetchData(setCrimeAssedio, 'crimeAssedio', 'Faça um pequeno texto de no máximo 4 linhas sobre a atuação da empresa em Crime de Assédio');
    }, 180000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      fetchData(setSloganFooter, 'sloganFooter', 'Digite um slogan para o rodapé do site da empresa de Advogados de Defesa Criminal');
    }, 195000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      fetchData(setTextoFooter, 'textoFooter', 'Digite um texto para o rodapé do site da empresa de Advogados de Defesa Criminal');
    }, 210000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      fetchData(setFooter, 'footer', 'Digite o conteúdo para o rodapé do site da empresa de Advogados de Defesa Criminal');
    }, 225000);
  }, []);

  // LOADING
  useEffect(() => {
    setLoading(true);

    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 35000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);


  useEffect(() => {
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
      {loading ? <Loading /> : null}
      <HeaderFooter bgImage={imageUrl} as="header">
        <h1>{primeitoTitle}</h1>
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
            <h4>Lorem ipsum contact</h4>
            <h4>Lorem ipsum contact</h4>
            <h4>Lorem ipsum contact</h4>
            <h4>Lorem ipsum contact</h4>
          </FooterContent>
          <FooterContent>
            <h2>Nossos links</h2>
            <h4>Lorem ipsum contact</h4>
            <h4>Lorem ipsum contact</h4>
            <h4>Lorem ipsum contact</h4>
            <h4>Lorem ipsum contact</h4>
          </FooterContent>
        </FooterRight>
      </Footer>
    </Container>
  );
}

export default Template01;
