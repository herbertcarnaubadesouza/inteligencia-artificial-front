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
          <span>{primeitoTitle}</span>
        </div>
        <h1>
       {sloganTitle}
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
              <Scales size={32} weight="fill" />
              <h3>5 Anos de Experiência</h3>
              <p>{slogan5anos}</p>
            </div>
            <div className="block-bottom">
              <LineAboutSection />
              <FlagCheckered size={32} weight="fill" />
              <h3>Definindo o sucesso</h3>
              <p>{sloganSucesso}</p>
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
                <p>{divorcioSeparacao}</p>
              </div>
              <div className="content-block-atuacao">
                <NotePencil size={32} weight="bold" />
                <h3>Direitos dos avós</h3>
                <p>{direitosAvos}</p>
              </div>
              <div className="content-block-atuacao">
                <Handshake size={32} weight="bold" />
                <h3>Custódia de criança</h3>
                <p>{custodiaCriancas}</p>
              </div>
              <div className="content-block-atuacao">
                <Baby size={32} weight="bold" />
                <h3>Domestic Violence​​</h3>
                <p>{casamentoUnioesCivis}</p>
              </div>
            </Row>
            <Row>
              <div className="content-block-atuacao">
                <Heart size={32} weight="bold" />
                <h3>Casamento/Uniões Civis​</h3>
                <p>{adocaoBarrigaAluguel}</p>
              </div>
              <div className="content-block-atuacao">
                <User size={32} weight="bold" />
                <h3>Adoção e barriga de aluguel​</h3>
                <p>{acordosPropriedade}</p>
              </div>
              <div className="content-block-atuacao">
                <Scroll size={32} weight="bold" />
                <h3>Acordos de propriedade​​​</h3>
                <p>{acordosPropriedade}</p>
              </div>
              <div className="content-block-atuacao">
                <div className="last-block-atuacao">
                  <p>Ver Todos </p>
                  <ArrowRight size={16} weight="bold" />
                </div>
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
              <span>
             {sloganExperiencia}  </span>
            </div>
            <h2>{sloganMotivo}</h2>
            <div className="block-whyus">
              <div className="wrap-block-whyus">
                <h5>01</h5>
                <div className="block-whyus-p">
                  <h4>{sloganCaracteristicasTitle1}</h4>
                  <p>
                    {sloganCaracteristicas1}
                  </p>
                </div>
              </div>
              <div className="wrap-block-whyus">
                <h5>02</h5>
                <div className="block-whyus-p">
                  <h4>{sloganCaracteristicasTitle2}</h4>
                  <p>
                    {sloganCaracteristicas2}
                  </p>
                </div>
              </div>
              <div className="wrap-block-whyus">
                <h5>03</h5>
                <div className="block-whyus-p">
                  <h4>{sloganCaracteristicasTitle3}</h4>
                  <p>
                    {sloganCaracteristicas3}
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
