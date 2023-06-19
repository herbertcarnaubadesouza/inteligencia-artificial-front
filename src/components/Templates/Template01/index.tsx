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
  const [response, setResponse] = useState<string | null>(null);
  const [domesticBurglary, setDomesticBurglaryResponse] = useState<
    string | null
  >(null);
  const [gunCrimesResponse, setGunCrimesResponse] = useState<string | null>(
    null,
  );
  const [drugCrimesResponse, setDrugCrimesResponse] = useState<string | null>(
    null,
  );
  const [propertyCrimesResponse, setPropertyCrimesResponse] = useState<
    string | null
  >(null);
  const [bailHearingResponse, setBailHearingResponse] = useState<string | null>(
    null,
  );
  const [harassmentCrimeResponse, setHarassmentCrimeResponse] = useState<
    string | null
  >(null);
  const nome = 'Rei dos advogados';
  const MAX_RETRY_COUNT = 70; // Número máximo de tentativas
  const RETRY_DELAY = 4000; // Tempo de espera entre as tentativas em milissegundos

  const fetchData = async (
    setter: React.Dispatch<React.SetStateAction<string | null>>,
    localStorageKey: string,
    content: string,
    retryCount = 0,
  ) => {
    const storedData = localStorage.getItem(localStorageKey);

    if (!storedData) {
      try {
        const result = await axios.post<ApiResponse>(
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
        console.log(apiKey);

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
    localStorage.removeItem('response');
    localStorage.removeItem('domesticBurglary');
    localStorage.removeItem('gunCrimes');
    localStorage.removeItem('drugCrimes');
    localStorage.removeItem('propertyCrimes');
    localStorage.removeItem('bailHearing');
    localStorage.removeItem('harassmentCrime');
  };

  useEffect(() => {
    const responseContent = `Faça dois parágrafos sobre uma empresa de advocacia chamada ${nome}`;
    setTimeout(
      () => fetchData(setResponse, 'response', responseContent),
      10000,
    );
  }, []);

  useEffect(() => {
    const domesticBurglaryContent =
      'Faça um pequeno texto de no máximo 2 linhas dizendo sobre como atua em Assalto Doméstico sendo um advogado';
    setTimeout(
      () =>
        fetchData(
          setDomesticBurglaryResponse,
          'domesticBurglary',
          domesticBurglaryContent,
        ),
      20000,
    );
  }, []);

  useEffect(() => {
    const gunCrimesContent =
      'Faça um pequeno texto de no máximo 2 linhas dizendo sobre como atua em Crimes de armas sendo um advogado';
    setTimeout(
      () => fetchData(setGunCrimesResponse, 'gunCrimes', gunCrimesContent),
      30000,
    );
  }, []);

  useEffect(() => {
    const drugCrimesContent =
      'Faça um pequeno texto de no máximo 2 linhas dizendo sobre como atua em Crime de Drogas sendo um advogado';
    setTimeout(
      () => fetchData(setDrugCrimesResponse, 'drugCrimes', drugCrimesContent),
      40000,
    );
  }, []);

  useEffect(() => {
    const propertyCrimesContent =
      'Faça um pequeno texto de no máximo 2 linhas dizendo sobre como atua em Crimes de propriedade sendo um advogado';
    setTimeout(
      () =>
        fetchData(
          setPropertyCrimesResponse,
          'propertyCrimes',
          propertyCrimesContent,
        ),
      50000,
    );
  }, []);

  useEffect(() => {
    const bailHearingContent =
      'Faça um pequeno texto de no máximo 2 linhas dizendo sobre como atua em Audiência de fiança sendo um advogado';
    setTimeout(
      () =>
        fetchData(setBailHearingResponse, 'bailHearing', bailHearingContent),
      60000,
    );
  }, []);

  useEffect(() => {
    const harassmentCrimeContent =
      'Faça um pequeno texto de no máximo 2 linhas dizendo sobre como atua em Crime de assédio sendo um advogado';
    setTimeout(
      () =>
        fetchData(
          setHarassmentCrimeResponse,
          'harassmentCrime',
          harassmentCrimeContent,
        ),
      70000,
    );
  }, []);

  useEffect(() => {
    const storedResponse = localStorage.getItem('response');
    const storedDomesticBurglary = localStorage.getItem('domesticBurglary');
    const storedGunCrimes = localStorage.getItem('gunCrimes');
    const storedDrugCrimes = localStorage.getItem('drugCrimes');
    const storedPropertyCrimes = localStorage.getItem('propertyCrimes');
    const storedBailHearing = localStorage.getItem('bailHearing');
    const storedHarassmentCrime = localStorage.getItem('harassmentCrime');

    if (storedResponse) setResponse(storedResponse);
    if (storedDomesticBurglary)
      setDomesticBurglaryResponse(storedDomesticBurglary);
    if (storedGunCrimes) setGunCrimesResponse(storedGunCrimes);
    if (storedDrugCrimes) setDrugCrimesResponse(storedDrugCrimes);
    if (storedPropertyCrimes) setPropertyCrimesResponse(storedPropertyCrimes);
    if (storedBailHearing) setBailHearingResponse(storedBailHearing);
    if (storedHarassmentCrime)
      setHarassmentCrimeResponse(storedHarassmentCrime);

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
        <h1>Advogados de Defesa Criminal</h1>
        <Line></Line>
        <h2>
          Escritório de advogados criminais com mais de 50 anos de experiência
          entre nossos sócios
        </h2>
        <button>Fale conosco agora</button>
      </HeaderFooter>

      <AboutSection>
        <section className="about">
          <Info>
            <LogoTemplate
              src={
                imageUrlSegunda
                  ? imageUrlSegunda
                  : 'https://cdn.discordapp.com/attachments/1116206739373691010/1116758018403614750/ThomasiWilson1_In_a_bustling_metropolis_where_the_pillars_of_la_56479b76-2b1a-45f8-92e6-e7298d120c8c.png'
              }
              alt="carregando"
            />
            <div>
              <h2>Sobre Nós</h2>
              <p>{response}</p>
            </div>
          </Info>
        </section>
      </AboutSection>
      <Parallax bgImage={thirdImageUrlTerceira}>
        <ParallaxContent>
          <h4>EXPERIÊNCIA É IMPORTANTE</h4>
          <LineParallax></LineParallax>
          <h2>Lutamos para que suas acusações sejam retiradas.</h2>
          <a>
            <Play size={32} weight="fill" />
          </a>
        </ParallaxContent>
      </Parallax>
      <PracticeArea>
        <h1>Áreas de atuação</h1>
        <h4>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </h4>
        <button>Ver todas as áreas</button>
        <PracticeAreaContentAll>
          <PracticeAreaContent>
            <PracticeContent>
              <h3>01</h3>
              <h2>Assalto doméstico</h2>
              <LineSmall></LineSmall>
              <p>{domesticBurglary}</p>
            </PracticeContent>
            <PracticeContent>
              <h3>02</h3>
              <h2>Crimes de armas</h2>
              <LineSmall></LineSmall>
              <p>{gunCrimesResponse}</p>
            </PracticeContent>
            <PracticeContent>
              <h3>03</h3>
              <h2>Crimes de drogas</h2>
              <LineSmall></LineSmall>
              <p>{drugCrimesResponse}</p>
            </PracticeContent>
          </PracticeAreaContent>
        </PracticeAreaContentAll>
        <PracticeAreaContentAll>
          <PracticeAreaContent>
            <PracticeContent>
              <h3>04</h3>
              <h2>Crimes de propriedade</h2>
              <LineSmall></LineSmall>
              <p>{propertyCrimesResponse}</p>
            </PracticeContent>
            <PracticeContent>
              <h3>05</h3>
              <h2>Audiencia de fiança</h2>
              <LineSmall></LineSmall>
              <p>{bailHearingResponse}</p>
            </PracticeContent>
            <PracticeContent>
              <h3>06</h3>
              <h2>Crime de assédio</h2>
              <LineSmall></LineSmall>
              <p>{harassmentCrimeResponse}</p>
            </PracticeContent>
          </PracticeAreaContent>
        </PracticeAreaContentAll>
      </PracticeArea>
      <ParallaxContact bgImage={imageUrlTerceira}>
        <ParallaxContent>
          <h4>NÃO ESPERE MAIS</h4>
          <LineParallax></LineParallax>
          <h2>Fale com nossos advogados de defesa criminal hoje!</h2>
          <h3>
            Entre em contato com um advogado de defesa criminal experiente para
            lutar pelo seu caso.
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
            Somos um escritório de advocacia de defesa criminal de serviço
            completo com escritórios em todo o Canadá e Lorem Ipsum.
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
