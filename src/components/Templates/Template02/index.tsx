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
            Um parágrafo descritivo que diz aos clientes como você é bom e prova
            que você é a melhor escolha que eles fizeram. Este parágrafo também
            é para aqueles que procuram um advogado confiável. Você pode usar
            algumas palavras atraentes e exibir suas capacidades que irão atrair
            futuros clientes e incentivá-los a contratá-lo imediatamente. Liste
            seus conhecimentos e experiência para provar que você é o melhor.
          </p>
          <div className="bottom-about-section">
            <div className="block-bottom">
              <LineAboutSection />
              <Scales size={32} weight="fill" />
              <h3>5 Anos de Experiência</h3>
              <p>Officia officiis vitae hendrerit interdum pretium.</p>
            </div>
            <div className="block-bottom">
              <LineAboutSection />
              <FlagCheckered size={32} weight="fill" />
              <h3>Definindo o sucesso</h3>
              <p>Officia officiis vitae hendrerit interdum pretium.</p>
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
                <text>
                  This is a short description elaborating the service you have
                  mentioned above.
                </text>
              </div>
              <div className="content-block-atuacao">
                <NotePencil size={32} weight="bold" />
                <h3>Direitos dos avós</h3>
                <text>
                  This is a short description elaborating the service you have
                  mentioned above.
                </text>
              </div>
              <div className="content-block-atuacao">
                <Handshake size={32} weight="bold" />
                <h3>Custódia de criança</h3>
                <text>
                  This is a short description elaborating the service you have
                  mentioned above.
                </text>
              </div>
              <div className="content-block-atuacao">
                <Baby size={32} weight="bold" />
                <h3>Domestic Violence​​</h3>
                <text>
                  This is a short description elaborating the service you have
                  mentioned above.
                </text>
              </div>
            </Row>
            <Row>
              <div className="content-block-atuacao">
                <Heart size={32} weight="bold" />
                <h3>Casamento/Uniões Civis​</h3>
                <text>
                  This is a short description elaborating the service you have
                  mentioned above.
                </text>
              </div>
              <div className="content-block-atuacao">
                <User size={32} weight="bold" />
                <h3>Adoção e barriga de aluguel​</h3>
                <text>
                  This is a short description elaborating the service you have
                  mentioned above.
                </text>
              </div>
              <div className="content-block-atuacao">
                <Scroll size={32} weight="bold" />
                <h3>Acordos de propriedade​​​</h3>
                <text>
                  This is a short description elaborating the service you have
                  mentioned above.
                </text>
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
                <div className="block-whyus-text">
                  <h4>Excelente Histórico</h4>
                  <text>
                    This is a short description elaborating the reason that you
                    have mentioned above. Tell them why you are good!
                  </text>
                </div>
              </div>
              <div className="wrap-block-whyus">
                <h5>02</h5>
                <div className="block-whyus-text">
                  <h4>Excelente Histórico</h4>
                  <text>
                    This is a short description elaborating the reason that you
                    have mentioned above. Tell them why you are good!
                  </text>
                </div>
              </div>
              <div className="wrap-block-whyus">
                <h5>03</h5>
                <div className="block-whyus-text">
                  <h4>Excelente Histórico</h4>
                  <text>
                    This is a short description elaborating the reason that you
                    have mentioned above. Tell them why you are good!
                  </text>
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
