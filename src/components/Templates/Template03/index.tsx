// index.tsx

import FlagCheckered from '@phosphor-icons/react/dist/icons/FlagCheckered';
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
const [slogan5anos, setSlogan5anos] = useState<string | null>(null);
const [sloganSucesso, setSloganSucesso] = useState<string | null>(null);
const [areasAtuacao, setAreasAtuacao] = useState<string | null>(null);
const [sloganExperiencia, setSloganExperiencia] = useState<string | null>(null);
const [sloganMotivo, setSloganMotivo] = useState<string | null>(null);
const [divorcioSeparacao, setDivorcioSeparacao] = useState<string | null>(null);
const [direitosAvos, setDireitosAvos] = useState<string | null>(null);
const [custodiaCriancas, setCustodiaCriancas] = useState<string | null>(null);
const [casamentoUnioesCivis, setCasamentoUnioesCivis] = useState<string | null>(null);
const [adocaoBarrigaAluguel, setAdocaoBarrigaAluguel] = useState<string | null>(null);
const [acordosPropriedade, setAcordosPropriedade] = useState<string | null>(null);
const [sloganCaracteristicasTitle1, setSloganCaracteristicasTitle1] = useState<string | null>(null);
const [sloganCaracteristicas1, setSloganCaracteristicas1] = useState<string | null>(null);
const [sloganCaracteristicasTitle2, setSloganCaracteristicasTitle2] = useState<string | null>(null);
const [sloganCaracteristicas2, setSloganCaracteristicas2] = useState<string | null>(null);
const [sloganCaracteristicasTitle3, setSloganCaracteristicasTitle3] = useState<string | null>(null);
const [sloganCaracteristicas3, setSloganCaracteristicas3] = useState<string | null>(null);

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
        'https://api.openai.com/v1/engines/davinci-codex/completions',
        {
          prompt: content,
          max_tokens: 100,
          temperature: 0.7,
          n: 1,
          stop: '\n',
          frequency_penalty: 0,
          presence_penalty: 0,
        },
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
            'Content-Type': 'application/json',
           
          },
        },
      );

      const responseData = result.data.choices[0].text.trim();
      setter(responseData);
      localStorage.setItem(localStorageKey, responseData);
    } catch (error) {
      console.error(error);
      console.log(apiKey);

      // Verificar se ainda há tentativas disponíveis
      if (retryCount < 5) {
        setTimeout(
          () =>
            fetchData(setter, localStorageKey, content, retryCount + 1),
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
  localStorage.removeItem('slogan5anos');
  localStorage.removeItem('sloganSucesso');
  localStorage.removeItem('areasAtuacao');
  localStorage.removeItem('sloganExperiencia');
  localStorage.removeItem('sloganMotivo');
  localStorage.removeItem('sloganCaracteristicasTitle1');
  localStorage.removeItem('sloganCaracteristicas1');
  localStorage.removeItem('sloganCaracteristicasTitle2');
  localStorage.removeItem('sloganCaracteristicas2');
  localStorage.removeItem('sloganCaracteristicasTitle3');
  localStorage.removeItem('sloganCaracteristicas3');
};

useEffect(() => {
  setTimeout(() => {
    clearCache();
    fetchData(
      setPrimeitoTitle,
      'primeitoTitle',
      'Digite o título sobre o tema da empresa "Advogados de Defesa Criminal"',
    );
  }, 5000);
}, []);

useEffect(() => {
  setTimeout(() => {
    fetchData(
      setSloganTitle,
      'sloganTitle',
      'Digite o slogan da empresa de Advogados de Defesa Criminal',
    );
  }, 13000);
}, []);

useEffect(() => {
  setTimeout(() => {
    fetchData(
      setSobreEmpresa,
      'sobreEmpresa',
      'Digite um texto sobre a empresa de Advogados de Defesa Criminal (máximo de 5 linhas)',
    );
  }, 26000);
}, []);

useEffect(() => {
  setTimeout(() => {
    fetchData(
      setSlogan5anos,
      'slogan5anos',
      'Digite um texto de no máximo 2 linhas sobre a empresa ter 5 anos de experiência',
    );
  }, 39000);
}, []);

useEffect(() => {
  setTimeout(() => {
    fetchData(
      setSloganSucesso,
      'sloganSucesso',
      'Digite um texto de no máximo 2 linhas sobre a empresa definindo o sucesso',
    );
  }, 52000);
}, []);

useEffect(() => {
  setTimeout(() => {
    fetchData(
      setAreasAtuacao,
      'areasAtuacao',
      'Digite um resumo das áreas de atuação da empresa de Advogados de Defesa Criminal (máximo de 4 linhas)',
    );
  }, 65000);
}, []);

useEffect(() => {
  setTimeout(() => {
    fetchData(
      setSloganExperiencia,
      'sloganExperiencia',
      'Digite um texto de no máximo 1 linha sobre a empresa ser uma advogada de direito de família profissional e experiente',
    );
  }, 78000);
}, []);

useEffect(() => {
  setTimeout(() => {
    fetchData(
      setSloganMotivo,
      'sloganMotivo',
      'Digite um texto de no máximo 2 linhas sobre por que escolher a empresa',
    );
  }, 91000);
}, []);

useEffect(() => {
  setTimeout(() => {
    fetchData(
      setSloganCaracteristicasTitle1,
      'sloganCaracteristicasTitle1',
      'Digite o título da primeira característica da empresa',
    );
  }, 104000);
}, []);

useEffect(() => {
  setTimeout(() => {
    fetchData(
      setSloganCaracteristicas1,
      'sloganCaracteristicas1',
      'Digite um texto de no máximo 2 linhas explicando a primeira característica da empresa',
    );
  }, 117000);
}, []);

useEffect(() => {
  setTimeout(() => {
    fetchData(
      setSloganCaracteristicasTitle2,
      'sloganCaracteristicasTitle2',
      'Digite o título da segunda característica da empresa',
    );
  }, 130000);
}, []);

useEffect(() => {
  setTimeout(() => {
    fetchData(
      setSloganCaracteristicas2,
      'sloganCaracteristicas2',
      'Digite um texto de no máximo 2 linhas explicando a segunda característica da empresa',
    );
  }, 143000);
}, []);

useEffect(() => {
  setTimeout(() => {
    fetchData(
      setSloganCaracteristicasTitle3,
      'sloganCaracteristicasTitle3',
      'Digite o título da terceira característica da empresa',
    );
  }, 156000);
}, []);

useEffect(() => {
  setTimeout(() => {
    fetchData(
      setSloganCaracteristicas3,
      'sloganCaracteristicas3',
      'Digite um texto de no máximo 2 linhas explicando a terceira característica da empresa',
    );
  }, 169000);
}, []);

useEffect(() => {
  setTimeout(() => {
    fetchData(
      setDivorcioSeparacao,
      'divorcioSeparacao',
      'Digite um resumo sobre Divórcio e Separação (máximo de 4 linhas)',
    );
  }, 182000);
}, []);

useEffect(() => {
  setTimeout(() => {
    fetchData(
      setDireitosAvos,
      'direitosAvos',
      'Digite um resumo sobre Direitos dos Avós (máximo de 4 linhas)',
    );
  }, 195000);
}, []);

useEffect(() => {
  setTimeout(() => {
    fetchData(
      setCustodiaCriancas,
      'custodiaCriancas',
      'Digite um resumo sobre Custódia de Criança (máximo de 4 linhas)',
    );
  }, 208000);
}, []);

useEffect(() => {
  setTimeout(() => {
    fetchData(
      setCasamentoUnioesCivis,
      'casamentoUnioesCivis',
      'Digite um resumo sobre Casamento/Uniões Civis (máximo de 4 linhas)',
    );
  }, 221000);
}, []);

useEffect(() => {
  setTimeout(() => {
    fetchData(
      setAdocaoBarrigaAluguel,
      'adocaoBarrigaAluguel',
      'Digite um resumo sobre Adoção e Barriga de Aluguel (máximo de 4 linhas)',
    );
  }, 234000);
}, []);

useEffect(() => {
  setTimeout(() => {
    fetchData(
      setAcordosPropriedade,
      'acordosPropriedade',
      'Digite um resumo sobre Acordos de Propriedade (máximo de 4 linhas)',
    );
  }, 247000);
}, []);

useEffect(() => {
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
        <span>1º Escritório De Advocacia Eleito Pelos Pares</span>
        <h1>
         {primeitoTitle}
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
              <h3>Premiado Escritório de Advocacia do Ano</h3>
            </div>
          </div>
          <p>{primeitoTitle}</p>
          <div className="footer-div-block">
            <div className="footer-div-block-content">
              <h3>Premiado Escritório de Advocacia do Ano</h3>
              <p>
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia Curae; Donec velit neque.
              </p>
            </div>
            <div className="footer-div-block-content">
              <h3>Premiado Escritório de Advocacia do Ano</h3>
              <p>
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia Curae; Donec velit neque.
              </p>
            </div>
          </div>
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
      <AwardsSection>
        <LineAwardsSection></LineAwardsSection>
        <HeaderAwards>
          <div className="header-awards">
            <h2>Prêmios e reconhecimentos</h2>
            <p>
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia Curae; Donec velit neque.
            </p>
          </div>
        </HeaderAwards>

        <AwardsRow1>
          <div className="awards-block">
            <img src="./images/template03/award5.png" alt="" />
            <h3>Prêmio de Melhor Escritório de Advocacia</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis.
            </p>
          </div>

          <div className="awards-block">
            <img src="./images/template03/award5.png" alt="" />
            <h3>Prêmio de Melhor Escritório de Advocacia</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis.
            </p>
          </div>

          <div className="awards-block">
            <img src="./images/template03/award5.png" alt="" />
            <h3>Prêmio de Melhor Escritório de Advocacia</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis.
            </p>
          </div>
        </AwardsRow1>

        <AwardsRow1>
          <div className="awards-block">
            <img src="./images/template03/award5.png" alt="" />
            <h3>Prêmio de Melhor Escritório de Advocacia</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis.
            </p>
          </div>

          <div className="awards-block">
            <img src="./images/template03/award5.png" alt="" />
            <h3>Prêmio de Melhor Escritório de Advocacia</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis.
            </p>
          </div>

          <div className="awards-block">
            <img src="./images/template03/award5.png" alt="" />
            <h3>Prêmio de Melhor Escritório de Advocacia</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis.
            </p>
          </div>
        </AwardsRow1>

        <div className="awards-row2"></div>
      </AwardsSection>

      <PraticaceSection>
        <LeftAwardBlock>
          <LineAwardsSection></LineAwardsSection>
          <h2>Nossas Áreas de Atuação</h2>
          <p>
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia Curae; Donec velit neque.
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
            <p>{primeitoTitle}</p>
          </div>

          <div className="Areas-block">
            <h3>Custódia da criança</h3>
            <p>{primeitoTitle}</p>
          </div>

          <div className="Areas-block">
            <h3>Pensão alimentícia</h3>
            <p>{primeitoTitle}</p>
          </div>

          <div className="Areas-block">
            <h3>Apoio do cônjuge</h3>
            <p>{primeitoTitle}</p>
          </div>
        </RigthAwardBlock>

        <RigthAwardBlock>
          <div className="Areas-block">
            <h3>Assuntos Internacionais</h3>
            <p>{primeitoTitle}</p>
          </div>

          <div className="Areas-block">
            <h3>Apelações de direito de família</h3>
            <p>{primeitoTitle}</p>
          </div>

          <div className="Areas-block">
            <h3>Proteção de patrimônio</h3>
            <p>{primeitoTitle}</p>
          </div>

          <div className="Areas-block">
            <h3>Serviços de alto patrimônio líquido</h3>
            <p>{primeitoTitle}</p>
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
          </div>
          <div className="Header-How-Work">
            <div className="container-works-pai">
              <div className="container-works">
                <h1>01</h1>
                <h2>Consulta sobre</h2>
                <p>
                  Vestibulum ante ipsum primis in faucibus orci luctus et
                  ultrices posuere cubilia Curae; Donec velit neque.
                </p>
              </div>
              <div className="container-works">
                <h1>02</h1>
                <h2>Tome uma atitude</h2>
                <p>
                  Vestibulum ante ipsum primis in faucibus orci luctus et
                  ultrices posuere cubilia Curae; Donec velit neque.
                </p>
              </div>
              <div className="container-works">
                <h1>03</h1>
                <h2>Criar estratégias</h2>
                <p>
                  Vestibulum ante ipsum primis in faucibus orci luctus et
                  ultrices posuere cubilia Curae; Donec velit neque.
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
              {' '}
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia Curae; Donec velit neque.
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>

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
