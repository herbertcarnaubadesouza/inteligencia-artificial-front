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
import Loading from '../Loading/Loading';
const apiKey = process.env.REACT_APP_API_KEY;

function Template03({ isVisible03 }: Template03Props) {


  const nomeEmpresa = "Excalibur Law Firm"

  // BANNER HEADER
  const [imageUrlHeader, setImageUrlHeader] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const bannerTemplateHeader = localStorage.getItem('bannerTemplateHeaderTemplate03');

      if (!bannerTemplateHeader) {
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

        if (bannerList.length > 0) {
          const randomIndex = Math.floor(Math.random() * bannerList.length);
          const randomBanner = bannerList[randomIndex];
          setImageUrlHeader(randomBanner.imgUrl);

          localStorage.setItem('bannerTemplateHeaderTemplate03', randomBanner.imgUrl);
        }
      } else {
        setImageUrlHeader(bannerTemplateHeader);
      }
    };

    fetchData();
  }, []);


  // BANNER ABOUT 
  const [imageUrlAbout, setImageUrlAbout] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const bannerTemplateHeader = localStorage.getItem('bannerTemplateAboutTemplate03');

      if (!bannerTemplateHeader) {
        const advogadoDocRef = doc(db, 'sites', 'advogado');
        const bannerCollectionRef = collection(advogadoDocRef, 'subtitulo');
        const bannerSnapshot = await getDocs(bannerCollectionRef);

        let bannerList = bannerSnapshot.docs.map((doc) => {
          const data = doc.data();
          const banner = {
            id: doc.id,
            imgUrl: data.imgUrl,
          };
          return banner;
        });

        if (bannerList.length > 0) {
          const randomIndex = Math.floor(Math.random() * bannerList.length);
          const randomBanner = bannerList[randomIndex];
          setImageUrlAbout(randomBanner.imgUrl);

          localStorage.setItem('bannerTemplateAboutTemplate03', randomBanner.imgUrl);
        }
      } else {
        setImageUrlHeader(bannerTemplateHeader);
      }
    };

    fetchData();
  }, []);

  // BANNER PARALALAX PRIMEIRA IMAGEM
  const [imageUrlParallax, setImageUrlParallax] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const bannerTemplateHeader = localStorage.getItem('bannerTemplateParallax01Template03');

      if (!bannerTemplateHeader) {
        const advogadoDocRef = doc(db, 'sites', 'advogado');
        const bannerCollectionRef = collection(advogadoDocRef, 'bannerparalax');
        const bannerSnapshot = await getDocs(bannerCollectionRef);

        let bannerList = bannerSnapshot.docs.map((doc) => {
          const data = doc.data();
          const banner = {
            id: doc.id,
            imgUrl: data.imgUrl,
          };
          return banner;
        });

        if (bannerList.length > 0) {
          const randomIndex = Math.floor(Math.random() * bannerList.length);
          const randomBanner = bannerList[randomIndex];
          setImageUrlParallax(randomBanner.imgUrl);

          localStorage.setItem('bannerTemplateParallax01Template03', randomBanner.imgUrl);
        }
      } else {
        setImageUrlParallax(bannerTemplateHeader);
      }
    };

    fetchData();
  }, []);


  // BANER PARALLAX SEGUNDA IMAGEM 
  const [imageUrlParallaxSegunda, setImageUrlParallaxSegunda] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const bannerTemplateHeader = localStorage.getItem('bannerTemplateParallax02Template03');

      if (!bannerTemplateHeader) {
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

        if (bannerList.length > 0) {
          const randomIndex = Math.floor(Math.random() * bannerList.length);
          const randomBanner = bannerList[randomIndex];
          setImageUrlParallaxSegunda(randomBanner.imgUrl);

          localStorage.setItem('bannerTemplateParallax02Template03', randomBanner.imgUrl);
        }
      } else {
        setImageUrlParallaxSegunda(bannerTemplateHeader);
      }
    };

    fetchData();
  }, []);


  const [loading, setLoading] = useState(true);

  // LOADING
  useEffect(() => {
    const localStorageValue = localStorage.getItem('loading3');

    if (localStorageValue !== null) {
      setLoading(localStorageValue === 'true');
    }

    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  // Salvar o estado no localStorage
  useEffect(() => {
    localStorage.setItem('loading3', loading.toString());
  }, [loading]);

  // Limpar o estado do localStorage ao encerrar o navegador
  window.addEventListener('beforeunload', () => {
    localStorage.removeItem('loading3');
  });


  return (
    <Container>
      {loading ? <Loading /> : null}
      <HeaderBlock bgImage={imageUrlHeader}>
        <span></span>
        <h1>
          {nomeEmpresa}
        </h1>
        <p>
          Mantendo a justiça ao seu lado.
        </p>
        <button>agendar reunião</button>
      </HeaderBlock>
      <AboutSection>
        <LeftSideBlock>
          <div>
            <LineAboutSection></LineAboutSection>
            <div className="title-about-section-block">
              <h2>Sobre nós</h2>
              <h3>A Excalibur Law Firm é uma firma de advocacia renomada, especializada em diversas áreas do direito, como empresarial, trabalhista e civil. Com uma equipe altamente capacitada e comprometida com resultados, a firma oferece serviços customizados e soluções jurídicas eficientes para seus clientes. </h3>
            </div>
          </div>
          <p>Lutando pelos seus direitos.</p>

          <button>fale conosco</button>
        </LeftSideBlock>
        <RightSideBlock>
          <img
            src={
              imageUrlAbout

            }
          ></img>
        </RightSideBlock>
      </AboutSection>
      <IconSection>
        <div className="Container-blocks">
          <div className="meta-icons">
            <Scales size={40} weight="fill" />
            <h3>120+</h3>
            <p>Casos Resolvidos</p>
          </div>

          <div className="meta-icons">
            <Hammer size={40} weight="fill" />
            <h3>120+</h3>
            <p>Clientes Satisfeitos</p>
          </div>

          <div className="meta-icons">
            <Buildings size={40} weight="fill" />
            <h3>120+</h3>
            <p>Escritorios</p>
          </div>

          <div className="meta-icons">
            <BagSimple size={40} weight="fill" />
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
              imageUrlParallax

            }
            alt=""
          />
        </LeftAwardBlock>

        <RigthAwardBlock>
          <div className="Areas-block">
            <h3>Separação e Divórcio</h3>
            <p>Nossa equipe jurídica oferece suporte especializado para lidar com os desafios emocionais e legais da separação e divórcio, visando um acordo justo para todas as partes envolvidas.</p>
          </div>

          <div className="Areas-block">
            <h3>Custódia da criança</h3>
            <p>Trabalhamos incansavelmente para proteger o interesse e o bem-estar da criança, buscando acordos de custódia que promovam um ambiente seguro e saudável para seu desenvolvimento.</p>
          </div>

          <div className="Areas-block">
            <h3>Pensão alimentícia</h3>
            <p>Nossos advogados estão preparados para auxiliá-lo(a) na busca por uma pensão alimentícia justa e adequada, garantindo o sustento e o futuro financeiro dos envolvidos.</p>
          </div>


        </RigthAwardBlock>

        <RigthAwardBlock>
          <div className="Areas-block">
            <h3>Assuntos Internacionais</h3>
            <p>Com experiência em casos internacionais, nossa equipe jurídica está pronta para lidar com questões legais complexas que envolvem múltiplas.</p>
          </div>

          <div className="Areas-block">
            <h3>Apelações de direito de família</h3>
            <p>Proteja seu patrimônio com o auxílio dos nossos advogados especializados, que oferecem soluções personalizadas para garantir a preservação dos seus ativos e a segurança financeira no contexto familiar.</p>
          </div>

          <div className="Areas-block">
            <h3>Proteção de patrimônio</h3>
            <p>Nossa equipe de advocacia oferece soluções personalizadas e estratégias eficazes para proteger seu patrimônio é preservação de seus bens.</p>
          </div>


        </RigthAwardBlock>
      </PraticaceSection>

      <HowWorksSection>
        <LineAwardsSection></LineAwardsSection>
        <HowWorksHeaderSection>
          <div className="Header-How-Work">
            <div className="containe-title">
              <h2>Nosso Compromisso com o Cliente</h2>
              <p>
                Na nossa firma de advocacia, estamos empenhados em fornecer serviços jurídicos de excelência para atender às necessidades específicas dos nossos clientes. Nossa abordagem personalizada e centrada no cliente nos permite oferecer soluções eficientes e estratégicas em diversas áreas do direito de família.
              </p>
            </div>
          </div>
          <div className="Header-How-Work">
            <div className="container-works-pai">
              <div className="container-works">
                <h1>01</h1>
                <h2>Abordagem Personalizada </h2>
                <p>
                  Nossa abordagem é personalizada, adaptando nossos serviços às necessidades específicas de cada cliente.
                </p>
              </div>
              <div className="container-works">
                <h1>02</h1>
                <h2>Excelência em Serviços</h2>
                <p>
                  Nosso foco na excelência garante que cada cliente receba um serviço de alta qualidade e eficácia.
                </p>
              </div>
              <div className="container-works">
                <h1>03</h1>
                <h2>Comunicação </h2>
                <p>
                  Nossa abordagem de comunicação é clara e aberta, garantindo que nossos clientes compreendam plenamente.
                </p>
              </div>
            </div>
            <div className="container-btn">
              <button className="btn"> FALAR COM ESPECIALISTA</button>


            </div>
          </div>

        </HowWorksHeaderSection>

      </HowWorksSection>
      <HowLocationSection>
        <div className="container-location">
          <div className="container-title">
            <h1> Nossos escritórios</h1>
            <p>

            </p>
          </div>
          <div className="container-modalLocation">
            <div className="modalLocation">
              <div className="container-icon">

                <h3>Excalibur Law Firm
                </h3>
              </div>

              <div className="container-p">
                <p> Rua dos Advogados, Centro</p>
                <p>Cidade Nova</p>
                <p> +1 (555) 123-4567</p>
              </div>
              <div className="container-ping">
                <p>
                  <MapPin size={20} weight="fill" />
                  <span>Localização</span>
                </p>
              </div>
            </div>
            <div className="modalLocation">
              <div className="container-icon">

                <h3>Excalibur Law Firm
                </h3>
              </div>

              <div className="container-p">
                <p>Rua Santos Pereira</p>
                <p>Aldeota</p>
                <p>  +1 (555) 123-4567</p>
              </div>
              <div className="container-ping">
                <p>
                  <MapPin size={20} weight="fill" />
                  <span>Localização</span>
                </p>
              </div>
            </div>
            <div className="modalLocation">
              <div className="container-icon">

                <h3>Excalibur Law Firm
                </h3>
              </div>

              <div className="container-p">
                <p>Av Santos Downtown</p>
                <p>Messejana</p>
                <p>  +1 (555) 123-4567</p>
              </div>
              <div className="container-ping">
                <p>
                  <MapPin size={20} weight="fill" />
                  <span>Localização</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </HowLocationSection>

      <HowHelpSection bgImage={imageUrlParallaxSegunda}>
        <div className="container-help">
          <LineAwardsSection></LineAwardsSection>

          <div className="container-inf">
            <h1>Ajudamos a resolver seus problemas legais</h1>
            <p>
              Soluções jurídicas eficientes. Consulte-nos!
            </p>

            <button className="btn">FALE CONOSCO</button>
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