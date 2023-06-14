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
  Footer
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






interface Template03 {
  imgUrl: string;
}

function Template03({ isVisible03 }: Template03Props) {

  const [response, setResponse] = useState(null);
  const [domesticBurglary, setDomesticBurglaryResponse] = useState(null);
  const [gunCrimesResponse, setGunCrimesResponse] = useState(null);
  const [drugCrimesResponse, setDrugCrimesResponse] = useState(null);
  const [propertyCrimesResponse, setPropertyCrimesResponse] = useState(null);
  const [bailHearingResponse, setBailHearingResponse] = useState(null);
  const [harassmentCrimeResponse, setHarassmentCrimeResponse] = useState(null);
  const [acordoCrimeResponse, setAcordoCrimeResponse] = useState(null);
  const [patrimonioCrimeResponse, setPatrimonioCrimeResponse] = useState(null);
  let nome = 'Rei dos advogados';






// Text Empresa
useEffect(() => {
  const getResponse = async () => {
    try {
      const result = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-3.5-turbo',
          messages: [
            {
              role: 'user',
              content: `Faça dois paragrafos sobre uma empresa de advocacia chamada Rei Advocacia , dizendo aos clientes como a empresa e boa e provando que fez a melhor escolha. `,
            },
          ],
        },
        {
          headers: {
            Authorization: `Bearer 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`,
            'Content-Type': 'application/json',
          },
        },
      );

      setResponse(result.data.choices[0].message.content);
      console.log(result.data.choices[0].message.content)
    } catch (error) {
      console.error(error);
    }
  };

  setTimeout(getResponse, 5000); 
}, []);
// Divorsio e separação
useEffect(() => {
  const getdomesticBurglary = async () => {
    try {
      const result = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-3.5-turbo',
          messages: [
            {
              role: 'user',
              content: `Faça um pequeno texto de no maximo 2 linhas dizendo sobre como atua em casos de Separação e Divórcio
              sendo um advogado`,
            },
          ],
        },
        {
          headers: {
            Authorization: `Bearer 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`,
            'Content-Type': 'application/json',
          },
        },
      );

      setDomesticBurglaryResponse(result.data.choices[0].message.content);
    } catch (error) {
      console.error(error);
    }
  };

  setTimeout(getdomesticBurglary, 15000); 
}, []);
// Custódia da criança
useEffect(() => {
  const getGunCrimesResponse = async () => {
    try {
      const result = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-3.5-turbo',
          messages: [
            {
              role: 'user',
              content: `Faça um pequeno texto de no maximo 2 linhas dizendo sobre como atua em casos de Custódia da criança sendo um advogado`,
            },
          ],
        },
        {
          headers: {
            Authorization: `Bearer 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`,
            'Content-Type': 'application/json',
          },
        },
      );

      setGunCrimesResponse(result.data.choices[0].message.content);
    } catch (error) {
      console.error(error);
    }
  };

  setTimeout(getGunCrimesResponse, 40000)
}, []);
// Pensão alimentícia
useEffect(() => {
  const getDrugCrimesResponse = async () => {
    try {
      const result = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-3.5-turbo',
          messages: [
            {
              role: 'user',
              content: `Faça um pequeno texto de no maximo 2 linhas dizendo sobre como atua em casos de Pensão alimentícia sendo um advogado`,
            },
          ],
        },
        {
          headers: {
            Authorization: `Bearer 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`,
            'Content-Type': 'application/json',
          },
        },
      );

      setDrugCrimesResponse(result.data.choices[0].message.content);
    } catch (error) {
      console.error(error);
    }
  };
  setTimeout(getDrugCrimesResponse, 60000)
}, []);
// Apoio do cônjuge
useEffect(() => {
  const getPropertyCrimesResponse = async () => {
    try {
      const result = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-3.5-turbo',
          messages: [
            {
              role: 'user',
              content: `Faça um pequeno texto de no maximo 2 linhas dizendo sobre como atua em casos deApoio do cônjuge sendo um advogado`,
            },
          ],
        },
        {
          headers: {
            Authorization: `Bearer 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`,
            'Content-Type': 'application/json',
          },
        },
      );

      setPropertyCrimesResponse(result.data.choices[0].message.content);
    } catch (error) {
      console.error(error);
    }
  };

  setTimeout(getPropertyCrimesResponse, 80000);
}, []);
// Assuntos Internacionais
useEffect(() => {
  const getBailHearingResponse = async () => {
    try {
      const result = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-3.5-turbo',
          messages: [
            {
              role: 'user',
              content: `Faça um pequeno texto de no maximo 2 linhas dizendo sobre como atua em casos de Assuntos Internacionais sendo um advogado`,
            },
          ],
        },
        {
          headers: {
            Authorization: `Bearer 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`,
            'Content-Type': 'application/json',
          },
        },
      );

      setBailHearingResponse(result.data.choices[0].message.content);
    } catch (error) {
      console.error(error);
    }
  };

  setTimeout(getBailHearingResponse, 100000);
}, []);
// Apelações de direito de família
useEffect(() => {
  const getHarassmentCrimeResponse = async () => {
    try {
      const result = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-3.5-turbo',
          messages: [
            {
              role: 'user',
              content: `Faça um pequeno texto de no maximo 2 linhas dizendo sobre como atua em casos de Apelações de direito de família  sendo um advogado`,
            },
          ],
        },
        {
          headers: {
            Authorization: `Bearer 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`,
            'Content-Type': 'application/json',
          },
        },
      );

      setHarassmentCrimeResponse(result.data.choices[0].message.content);
    } catch (error) {
      console.error(error);
    }
  };

  setTimeout(getHarassmentCrimeResponse, 120000);
}, []);

// Proteção de patrimônio

useEffect(() => {
  const getAcordoCrimeResponse = async () => {
    try {
      const result = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-3.5-turbo',
          messages: [
            {
              role: 'user',
              content: `Faça um pequeno texto de no maximo 2 linhas dizendo sobre como atua em casos de Proteção de patrimônio
              sendo um advogado`,
            },
          ],
        },
        {
          headers: {
            Authorization: `Bearer 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`,
            'Content-Type': 'application/json',
          },
        },
      );

      setAcordoCrimeResponse(result.data.choices[0].message.content);
    } catch (error) {
      console.error(error);
    }
  };

  setTimeout(getAcordoCrimeResponse, 150000);
}, []);



//Serviços de alto patrimônio líquido


useEffect(() => {
  const getPatrimonioCrimeResponse = async () => {
    try {
      const result = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-3.5-turbo',
          messages: [
            {
              role: 'user',
              content: `Faça um pequeno texto de no maximo 2 linhas dizendo sobre como atua em casos de Serviços de alto patrimônio líquido

              sendo um advogado`,
            },
          ],
        },
        {
          headers: {
            Authorization: `Bearer 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`,
            'Content-Type': 'application/json',
          },
        },
      );

      setPatrimonioCrimeResponse(result.data.choices[0].message.content);
    } catch (error) {
      console.error(error);
    }
  };

  setTimeout(getPatrimonioCrimeResponse, 190000);
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
      <HeaderBlock  bgImage={imageUrl}>
        <span>1º Escritório De Advocacia Eleito Pelos Pares</span>
        <h1>
          Advogados de família de primeira classe e advogados de divórcio em
          Vancouver
        </h1>
        <p>
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel.
         Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel.
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel.
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
          <p>
          {response}
          </p>
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
          <img  src={
                imageUrlSegunda
                  ? imageUrlSegunda
                  : 'https://cdn.discordapp.com/attachments/1116206739373691010/1116758018403614750/ThomasiWilson1_In_a_bustling_metropolis_where_the_pillars_of_la_56479b76-2b1a-45f8-92e6-e7298d120c8c.png'
              }></img>
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
          <img  src={
                thirdImageUrlTerceira
                  ? thirdImageUrlTerceira
                  : 'https://cdn.discordapp.com/attachments/1116206739373691010/1116758018403614750/ThomasiWilson1_In_a_bustling_metropolis_where_the_pillars_of_la_56479b76-2b1a-45f8-92e6-e7298d120c8c.png'
              } alt="" />
        </LeftAwardBlock>

        <RigthAwardBlock>
          <div className="Areas-block">
            <h3>Separação e Divórcio</h3>
            <p>
              {domesticBurglary }
            </p>
          </div>

          <div className="Areas-block">
            <h3>Custódia da criança</h3>
            <p>
              {gunCrimesResponse}
            </p>
          </div>

          <div className="Areas-block">
            <h3>Pensão alimentícia</h3>
            <p>
             {drugCrimesResponse}
            </p>
          </div>

          <div className="Areas-block">
            <h3>Apoio do cônjuge</h3>
            <p>
              {propertyCrimesResponse}
            </p>
          </div>
        </RigthAwardBlock>

        <RigthAwardBlock>
          <div className="Areas-block">
            <h3>Assuntos Internacionais</h3>
            <p>
             {bailHearingResponse}
            </p>
          </div>

          <div className="Areas-block">
            <h3>Apelações de direito de família</h3>
            <p>
            {harassmentCrimeResponse}
            </p>
          </div>

          <div className="Areas-block">
            <h3>Proteção de patrimônio</h3>
            <p>
              {acordoCrimeResponse}
            </p>
          </div>

          <div className="Areas-block">
            <h3>Serviços de alto patrimônio líquido</h3>
            <p>
             {patrimonioCrimeResponse}
            </p>
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

            <button className='btn'>AGENDE UMA CONSULTA</button>
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
