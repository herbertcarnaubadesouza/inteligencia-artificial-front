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




function Template02({ isVisible02 }: Template02Props) {

  const [response, setResponse] = useState(null);
  const [domesticBurglary, setDomesticBurglaryResponse] = useState(null);
  const [gunCrimesResponse, setGunCrimesResponse] = useState(null);
  const [drugCrimesResponse, setDrugCrimesResponse] = useState(null);
  const [propertyCrimesResponse, setPropertyCrimesResponse] = useState(null);
  const [bailHearingResponse, setBailHearingResponse] = useState(null);
  const [harassmentCrimeResponse, setHarassmentCrimeResponse] = useState(null);
  const [acordoCrimeResponse, setAcordoCrimeResponse] = useState(null);
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
                content: `Faça um pequeno texto de no maximo 2 linhas dizendo sobre como atua em casos de Divorsio e separação sendo um advogado`,
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
// Direitos dos avos
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
                content: `Faça um pequeno texto de no maximo 2 linhas dizendo sobre como atua em casos de Diretos dos avos sendo um advogado`,
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
// Custoria de criança
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
                content: `Faça um pequeno texto de no maximo 2 linhas dizendo sobre como atua em casos de Custodia de crinça sendo um advogado`,
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
// Violencia domestica
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
                content: `Faça um pequeno texto de no maximo 2 linhas dizendo sobre como atua em casos de Violencia domestica sendo um advogado`,
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
// Casamento E uniao civil 
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
                content: `Faça um pequeno texto de no maximo 2 linhas dizendo sobre como atua em casos de Casamento e Uniao Civil sendo um advogado`,
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
// Adocao e barriga de aluguel
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
                content: `Faça um pequeno texto de no maximo 2 linhas dizendo sobre como atua em casos de Adoção e barriga de aluguel sendo um advogado`,
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

  // Acordos de propiedades
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
                content: `Faça um pequeno texto de no maximo 2 linhas dizendo sobre como atua em casos de acordo de propiedades sendo um advogado`,
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
      <HeaderBlock  bgImage={imageUrl} >
        <div className="container-block-header">
          <LineHeader></LineHeader>
          <span>Comprometidos em ajudar nossos clientes a ter sucesso</span>
        </div>
        <h1>
          Você precisa de um escritório de advocacia confiável que ajude a lidar
          com seus assuntos familiares
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
            <span>Comprometidos em ajudar nossos clientes a ter sucesso</span>
          </div>
          <h2>Você veio ao lugar certo</h2>
          <p>
            {response}
          </p>
          <div className="bottom-about-section">
            <div className="block-bottom">
              <LineAboutSection />
              <Scales size={32} weight="fill" />
              <h3>5 Anos de Experiência</h3>
              <p>Já estamos a 5 anos no mercado ganhando casos.</p>
            </div>
            <div className="block-bottom">
              <LineAboutSection />
              <FlagCheckered size={32} weight="fill" />
              <h3>Definindo o sucesso</h3>
              <p>Te levamos ao topo.</p>
            </div>
          </div>
        </FirstBlockAbout>
        <SecondBlockAbout>
          <img src={
                imageUrlSegunda
                  ? imageUrlSegunda
                  : 'https://cdn.discordapp.com/attachments/1116206739373691010/1116758018403614750/ThomasiWilson1_In_a_bustling_metropolis_where_the_pillars_of_la_56479b76-2b1a-45f8-92e6-e7298d120c8c.png'
              }></img>
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
                <p>
                  {domesticBurglary}
                </p>
              </div>
              <div className="content-block-atuacao">
                <NotePencil size={32} weight="bold" />
                <h3>Direitos dos avós</h3>
                <p>
                {gunCrimesResponse}
                </p>
              </div>
              <div className="content-block-atuacao">
                <Handshake size={32} weight="bold" />
                <h3>Custódia de criança</h3>
                <p>
                  {drugCrimesResponse}
                </p>
              </div>
              <div className="content-block-atuacao">
                <Baby size={32} weight="bold" />
                <h3>Domestic Violence​​</h3>
                <p>
                  {propertyCrimesResponse}
                </p>
              </div>
            </Row>
            <Row>
              <div className="content-block-atuacao">
                <Heart size={32} weight="bold" />
                <h3>Casamento/Uniões Civis​</h3>
                <p>
                {bailHearingResponse}
                </p>
              </div>
              <div className="content-block-atuacao">
                <User size={32} weight="bold" />
                <h3>Adoção e barriga de aluguel​</h3>
                <p>
                  {harassmentCrimeResponse}
                </p>
              </div>
              <div className="content-block-atuacao">
                <Scroll size={32} weight="bold" />
                <h3>Acordos de propriedade​​​</h3>
                <p>
                  {acordoCrimeResponse}
                </p>
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
                Advogada de direito de família profissional e experiente
              </span>
            </div>
            <h2>Por que escolher nossa empresa</h2>
            <div className="block-whyus">
              <div className="wrap-block-whyus">
                <h5>01</h5>
                <div className="block-whyus-p">
                  <h4>Excelente Histórico</h4>
                  <p>
                    This is a short description elaborating the reason that you
                    have mentioned above. Tell them why you are good!
                  </p>
                </div>
              </div>
              <div className="wrap-block-whyus">
                <h5>02</h5>
                <div className="block-whyus-p">
                  <h4>Excelente Histórico</h4>
                  <p>
                    This is a short description elaborating the reason that you
                    have mentioned above. Tell them why you are good!
                  </p>
                </div>
              </div>
              <div className="wrap-block-whyus">
                <h5>03</h5>
                <div className="block-whyus-p">
                  <h4>Excelente Histórico</h4>
                  <p>
                    This is a short description elaborating the reason that you
                    have mentioned above. Tell them why you are good!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <RightSideWhyUs>
            <div className="rows-block">
              <div className="row-div-block">
                <h2>2000+</h2>
                <span>Client Consutations</span>
              </div>
              <div className="row-div-block">
                <h2>93%</h2>
                <span>Successful Cases</span>
              </div>
            </div>
            <div className="rows-block">
              <div className="row-div-block">
                <h2>40+</h2>
                <span>Professional Attorneys</span>
              </div>
              <div className="row-div-block">
                <h2>20mlns</h2>
                <span>Recovered Cost</span>
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
