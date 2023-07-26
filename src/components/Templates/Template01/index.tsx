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
  FirstBlockAbout,

  LineAbout,
  SecondBlockAbout
} from './styles';

import { Pen, X } from '@phosphor-icons/react';
import { TemplateContext } from '../useContext/TemplateContext';
import React, { useContext } from 'react';
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


import { NULL } from 'sass';
const apiKey = process.env.REACT_APP_API_KEY;

function Template01({ isVisible01 }: Template01Props) {


  const {
    temaTemplateEscolhido,
    setTemaTemplateEscolhido,
    endercoTemplate,
    setEndercoTemplate,
    nomeEmpresaTemplate,
    setNomeEmpresaTemplate,
    imageUrlHeader,
    setImageUrlHeader,
    imageUrlAbout,
    setImageUrlAbout,
    imageUrlParallax,
    setImageUrlParallax,
    imageUrlParallaxSegunda,
    setImageUrlParallaxSegunda,
    randomTitleFirmaText,
    setRandomTitleFirmaText,
    randomSubTitleHeaderText,
    setRandomSubTitleHeaderText,
    randomTextoAboutText,
    setRandomTextoAboutText,
    randomSloganParallaxText,
    setRandomSloganParallaxText,
    randomParallax01Text,
    setRandomParallax01Text,
    randomAboutFirmaText,
    setRandomAboutFirmaText,
    randomAreaAtuacaoOptions1Text,
    setRandomAreaAtuacaoOptions1Text,
    randomAreaAtuacaoOptions2Text,
    setRandomAreaAtuacaoOptions2Text,
    randomAreaAtuacaoOptions3Text,
    setRandomAreaAtuacaoOptions3Text,
    randomAreaAtuacaoOptions4Text,
    setRandomAreaAtuacaoOptions4Text,
    randomAreaAtuacaoOptions5Text,
    setRandomAreaAtuacaoOptions5Text,
    randomAreaAtuacaoOptions6Text,
    setRandomAreaAtuacaoOptions6Text,
    randomFooterText,
    setRandomFooterText,
    faleConoscoText,
    setFaleConoscoText,
    faleConoscoProfText,
    setFaleConoscoProfText,
    areaAtuacaoOptions1Text,
    setAreaAtuacaoOptions1Text,
    areaAtuacaoOptions2Text,
    setAreaAtuacaoOptions2Text,
    areaAtuacaoOptions3Text,
    setAreaAtuacaoOptions3Text,
    areaAtuacaoOptions4Text,
    setAreaAtuacaoOptions4Text,
    areaAtuacaoOptions5Text,
    setAreaAtuacaoOptions5Text,
    areaAtuacaoOptions6Text,
    setAreaAtuacaoOptions6Text,
    numeroCellText,
    setNumeroCellText,
    modalOpen,
    modalOpen01,
    modalOpen02,
    modalOpen03,
    modalOpen04,
    modalOpen05,
    handleInputFocus,
    handleInputBlur,
    isInputFocused01,
    isInputFocused02,
    isInputFocused03,
    isInputFocused04,
    isInputFocused05,
    isInputFocused06,
    isInputFocused07,
    isInputFocused08,
    isInputFocused09,
    isInputFocused10,
    isInputFocused11,
    isInputFocused12,
    isInputFocused13,
    isInputFocused14,
    isInputFocused15,
    isInputFocused16,
    isInputFocused17,
    isInputFocused18,
    isInputFocused19,
    isInputFocused20,
    isInputFocused21,
    isInputFocused22,
    isInputFocused23,
    isInputFocused24,
    isInputFocused25,
    isInputFocused26,
  } = useContext(TemplateContext);

  useEffect(() => {
    console.log(temaTemplateEscolhido);
  }, []);

  // TEAMPLATE DOCTOR
  if (temaTemplateEscolhido === 'Doctor') {
    useEffect(() => {
      const faleConoscoTextLocal = localStorage.getItem('faleConoscoText');
      const faleConoscoProfTextLocal = localStorage.getItem(
        'faleConoscoProfText',
      );
      const areaAtuacaoOptions1TextLocal = localStorage.getItem(
        'areaAtuacaoOptions1Text',
      );
      const areaAtuacaoOptions2TextLocal = localStorage.getItem(
        'areaAtuacaoOptions2Text',
      );
      const areaAtuacaoOptions3TextLocal = localStorage.getItem(
        'areaAtuacaoOptions3Text',
      );
      const areaAtuacaoOptions4TextLocal = localStorage.getItem(
        'areaAtuacaoOptions4Text',
      );
      const areaAtuacaoOptions5TextLocal = localStorage.getItem(
        'areaAtuacaoOptions5Text',
      );
      const areaAtuacaoOptions6TextLocal = localStorage.getItem(
        'areaAtuacaoOptions6Text',
      );
      const numeroCellTextLocal = localStorage.getItem('numeroCellText');

      if (!faleConoscoTextLocal) {
        setFaleConoscoText('Fale Conosco');
        localStorage.setItem('faleConoscoText', 'Fale Conosco');
      } else {
        setFaleConoscoText(faleConoscoTextLocal);
      }

      if (!faleConoscoProfTextLocal) {
        setFaleConoscoProfText('Fale com nossos médicos hoje!');
        localStorage.setItem(
          'faleConoscoProfText',
          'Fale com nossos médicos hoje!',
        );
      } else {
        setFaleConoscoProfText(faleConoscoProfTextLocal);
      }

      if (!areaAtuacaoOptions1TextLocal) {
        setAreaAtuacaoOptions1Text('Clínica Geral');
        localStorage.setItem('areaAtuacaoOptions1Text', 'Clínica Geral');
      } else {
        setAreaAtuacaoOptions1Text(areaAtuacaoOptions1TextLocal);
      }

      if (!areaAtuacaoOptions2TextLocal) {
        setAreaAtuacaoOptions2Text('Pediatria');
        localStorage.setItem('areaAtuacaoOptions2Text', 'Pediatria');
      } else {
        setAreaAtuacaoOptions2Text(areaAtuacaoOptions2TextLocal);
      }

      if (!areaAtuacaoOptions3TextLocal) {
        setAreaAtuacaoOptions3Text('Ginecologia e Obstetrícia');
        localStorage.setItem(
          'areaAtuacaoOptions3Text',
          'Ginecologia e Obstetrícia',
        );
      } else {
        setAreaAtuacaoOptions3Text(areaAtuacaoOptions3TextLocal);
      }

      if (!areaAtuacaoOptions4TextLocal) {
        setAreaAtuacaoOptions4Text('Ortopedia');
        localStorage.setItem('areaAtuacaoOptions4Text', 'Ortopedia');
      } else {
        setAreaAtuacaoOptions4Text(areaAtuacaoOptions4TextLocal);
      }

      if (!areaAtuacaoOptions5TextLocal) {
        setAreaAtuacaoOptions5Text('Dermatologia');
        localStorage.setItem('areaAtuacaoOptions5Text', 'Dermatologia');
      } else {
        setAreaAtuacaoOptions5Text(areaAtuacaoOptions5TextLocal);
      }

      if (!areaAtuacaoOptions6TextLocal) {
        setAreaAtuacaoOptions6Text('Otorrinolaringologia');
        localStorage.setItem('areaAtuacaoOptions6Text', 'Otorrinolaringologia');
      } else {
        setAreaAtuacaoOptions6Text(areaAtuacaoOptions6TextLocal);
      }

      if (!numeroCellTextLocal) {
        setNumeroCellText('(85) 9 8972-8250');
        localStorage.setItem('numeroCellText', '(85) 9 8972-8250');
      } else {
        setNumeroCellText(numeroCellTextLocal);
      }
    }, []);

    // BANNER HEADER

    useEffect(() => {
      const fetchData = async () => {
        const bannerTemplateHeader = localStorage.getItem(
          'bannerTemplateHeader',
        );

        if (!bannerTemplateHeader) {
          const advogadoDocRef = doc(db, 'sites', 'doctor');
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

            localStorage.setItem('bannerTemplateHeader', randomBanner.imgUrl);
          }
        } else {
          setImageUrlHeader(bannerTemplateHeader);
        }
      };

      fetchData();
    }, []);

    // BANNER ABOUT

    useEffect(() => {
      const fetchData = async () => {
        const bannerTemplateHeader = localStorage.getItem(
          'bannerTemplateAbout',
        );

        if (!bannerTemplateHeader) {
          const advogadoDocRef = doc(db, 'sites', 'doctor');
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

            localStorage.setItem('bannerTemplateAbout', randomBanner.imgUrl);
          }
        } else {
          setImageUrlAbout(bannerTemplateHeader);
        }
      };

      fetchData();
    }, []);

    // BANNER PARALALAX PRIMEIRA IMAGEM

    useEffect(() => {
      const fetchData = async () => {
        const bannerTemplateHeader = localStorage.getItem(
          'bannerTemplateParallax01',
        );

        if (!bannerTemplateHeader) {
          const advogadoDocRef = doc(db, 'sites', 'doctor');
          const bannerCollectionRef = collection(
            advogadoDocRef,
            'bannerparalax',
          );
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

            localStorage.setItem(
              'bannerTemplateParallax01',
              randomBanner.imgUrl,
            );
          }
        } else {
          setImageUrlParallax(bannerTemplateHeader);
        }
      };

      fetchData();
    }, []);

    // BANER PARALLAX SEGUNDA IMAGEM

    useEffect(() => {
      const fetchData = async () => {
        const bannerTemplateHeader = localStorage.getItem(
          'bannerTemplateParallax02',
        );

        if (!bannerTemplateHeader) {
          const advogadoDocRef = doc(db, 'sites', 'doctor');
          const bannerCollectionRef = collection(
            advogadoDocRef,
            'bannerparalax',
          );
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

            localStorage.setItem(
              'bannerTemplateParallax02',
              randomBanner.imgUrl,
            );
          }
        } else {
          setImageUrlParallaxSegunda(bannerTemplateHeader);
        }
      };

      fetchData();
    }, []);

    // TEXTOS

    // TITLES
    const titleFirma = [
      {
        description: 'Luxury Legal Solutions',
      },
      {
        description: 'Elite Advocates',
      },
      {
        description: 'Prestige Law Firm',
      },
      {
        description: 'Opulent Attorneys',
      },
      {
        description: 'Exclusive Legal Advisors',
      },
    ];
    const randomTitleFirma = () => {
      const randomIndex = Math.floor(Math.random() * titleFirma.length);
      return titleFirma[randomIndex].description;
    };
    useEffect(() => {
      const savedDescription = localStorage.getItem('randomTitleFirma');
      if (savedDescription) {
        setRandomTitleFirmaText(savedDescription);
      } else {
        const newRandomDescription = randomTitleFirma();
        setRandomTitleFirmaText(newRandomDescription);
        localStorage.setItem('randomTitleFirma', newRandomDescription);
      }
    }, []);

    // SUB TITLES
    const subTitleHeader = [
      {
        description: 'Cuidando da sua saúde com excelência',
      },
      {
        description: 'Compromisso com a sua saúde e bem-estar',
      },
      {
        description: 'Sua clínica médica de confiança',
      },
      {
        description: 'Promovendo o seu sucesso em saúde',
      },
      {
        description: 'Navegando por cuidados médicos complexos',
      },
    ];

    const randomSubTitleHeader = () => {
      const randomIndex = Math.floor(Math.random() * subTitleHeader.length);
      return subTitleHeader[randomIndex].description;
    };

    useEffect(() => {
      const savedSlogan = localStorage.getItem('randomSubTitleHeaderText');
      if (savedSlogan) {
        setRandomSubTitleHeaderText(savedSlogan);
      } else {
        const newRandomSlogan = randomSubTitleHeader();
        setRandomSubTitleHeaderText(newRandomSlogan);
        localStorage.setItem('randomSubTitleHeaderText', newRandomSlogan);
      }
    }, []);

    // ABOUT
    const about = [
      {
        description:
          'Nossa clínica médica oferece serviços de saúde de qualidade e cuidados personalizados. Contamos com uma equipe experiente de médicos e profissionais de saúde dedicados a atender às necessidades dos nossos pacientes. Priorizamos o bem-estar e a satisfação de cada indivíduo, fornecendo tratamentos e diagnósticos precisos. Confie em nós para cuidar da sua saúde com excelência e comprometimento.',
      },
      {
        description:
          'Somos uma clínica médica comprometida em fornecer atendimento médico confiável e eficiente. Com uma equipe especializada de médicos e especialistas, oferecemos serviços de saúde abrangentes para promover o seu bem-estar. Nossa abordagem multidisciplinar e ética profissional garantem um tratamento personalizado e de alta qualidade. Conte conosco para cuidar da sua saúde com dedicação e compromisso.',
      },
      {
        description:
          'Nossa clínica médica é especializada em oferecer cuidados de saúde excepcionais e personalizados aos nossos pacientes. Com uma equipe de médicos altamente qualificados e dedicados, estamos prontos para lidar com uma variedade de condições médicas. Nosso compromisso com a excelência e a ética nos permite fornecer um serviço de qualidade, sempre visando o bem-estar dos nossos pacientes. Conte conosco para cuidar da sua saúde e proporcionar uma experiência médica confiável e profissional.',
      },
      {
        description:
          'Na nossa clínica médica, acreditamos em um atendimento individualizado e atento às necessidades de cada paciente. Compreendemos a importância da sua saúde e nos dedicamos a fornecer cuidados personalizados. Nossa equipe de médicos experientes está pronta para atendê-lo com integridade e profissionalismo. Confie em nós para cuidar da sua saúde e fornecer as melhores soluções médicas para o seu bem-estar.',
      },
      {
        description:
          'Conte com a nossa clínica médica para receber serviços de saúde de qualidade e confiança. Nossa equipe de médicos e profissionais de saúde altamente qualificados está comprometida em fornecer cuidados abrangentes e eficazes. Com experiência em diversas áreas médicas, estamos preparados para lidar com diferentes condições e promover sua saúde. Oferecemos um atendimento dedicado e acolhedor, garantindo que suas necessidades sejam atendidas com ética e competência.',
      },
    ];

    // RANDOM TEXTO ABOUT
    const randomTextoAbout = () => {
      const randomIndex = Math.floor(Math.random() * about.length);
      return about[randomIndex].description;
    };

    useEffect(() => {
      const savedDescription = localStorage.getItem('randomTextoAbout');
      if (savedDescription) {
        setRandomTextoAboutText(savedDescription);
      } else {
        const newRandomDescription = randomTextoAbout();
        setRandomTextoAboutText(newRandomDescription);
        localStorage.setItem('randomTextoAbout', newRandomDescription);
      }
    }, []);

    // PARALLAX SLOGAN
    const sloganParallaxText = [
      {
        description: 'CUIDANDO DA SUA SAÚDE COM EFICIÊNCIA',
      },
      {
        description: 'PROTEGENDO O SEU BEM-ESTAR COM EXCELÊNCIA',
      },
      {
        description: 'QUALIDADE MÉDICA PARA A SUA SEGURANÇA',
      },
      {
        description: 'COMPROMETIDOS COM A SAÚDE E RESULTADOS POSITIVOS',
      },
      {
        description: 'ATENDIMENTO DEDICADO PARA GARANTIR O SEU BEM-ESTAR',
      },
    ];

    const randomSloganParallaxText = () => {
      const randomIndex = Math.floor(Math.random() * sloganParallaxText.length);
      return sloganParallaxText[randomIndex].description;
    };

    useEffect(() => {
      const savedSlogan = localStorage.getItem('randomSloganParallaxText');
      if (savedSlogan) {
        setRandomSloganParallaxText(savedSlogan);
      } else {
        const newRandomSlogan = randomSloganParallaxText();
        setRandomSloganParallaxText(newRandomSlogan);
        localStorage.setItem('randomSloganParallaxText', newRandomSlogan);
      }
    }, []);

    //PARALLAX
    const parallax01 = [
      {
        description:
          'Nossa clínica médica é a escolha certa para você, pois contamos com uma equipe de profissionais altamente qualificados e comprometidos em cuidar da sua saúde com eficiência e atenção.',
      },
      {
        description:
          'Somos uma clínica médica dedicada a oferecer serviços de saúde excepcionais. Nossa equipe de médicos talentosos e comprometidos está pronta para cuidar de você e proteger o seu bem-estar com dedicação e experiência.',
      },
      {
        description:
          'Se você precisa de serviços médicos de confiança, nossa clínica é a resposta. Temos uma equipe experiente de médicos prontos para cuidar da sua saúde e oferecer soluções médicas eficazes e personalizadas.',
      },
      {
        description:
          'Na nossa clínica médica, acreditamos que cada paciente é único. Por isso, nossa equipe dedicada está empenhada em fornecer a você um atendimento médico personalizado, com foco no seu bem-estar e eficiência.',
      },
      {
        description:
          'Conte conosco, uma clínica médica comprometida com a excelência e o cuidado com a sua saúde. Nossa equipe de médicos qualificados está pronta para oferecer soluções médicas estratégicas e proteger o seu bem-estar de forma eficiente.',
      },
    ];

    const randomParallax01 = () => {
      const randomIndex = Math.floor(Math.random() * parallax01.length);
      return parallax01[randomIndex].description;
    };

    useEffect(() => {
      const savedDescription = localStorage.getItem('randomParallax01');
      if (savedDescription) {
        setRandomParallax01Text(savedDescription);
      } else {
        const newRandomDescription = randomParallax01();
        setRandomParallax01Text(newRandomDescription);
        localStorage.setItem('randomParallax01', newRandomDescription);
      }
    }, []);

    // SOBRE A FIRMA
    const aboutFirma = [
      {
        description:
          'Nossa clínica médica busca sempre a excelência em serviços, oferecendo atendimento personalizado e soluções médicas eficazes para nossos pacientes.',
      },
      {
        description:
          'Somos uma clínica médica comprometida em fornecer serviços de alta qualidade. Nosso atendimento é personalizado, e buscamos sempre soluções eficazes para atender às necessidades dos nossos pacientes.',
      },
      {
        description:
          'Na nossa clínica médica, priorizamos a excelência em cada caso. Nossa equipe está empenhada em fornecer atendimento personalizado e soluções médicas eficazes, buscando sempre os melhores resultados para nossos pacientes.',
      },
      {
        description:
          'Conte com nossa clínica médica para receber um atendimento de qualidade e soluções médicas eficazes. Estamos comprometidos em oferecer serviços personalizados e buscar os melhores resultados para nossos pacientes.',
      },
      {
        description:
          'Nossa clínica médica se dedica a oferecer serviços de excelência. Valorizamos o atendimento personalizado e buscamos sempre soluções médicas eficazes para atender às demandas e necessidades dos nossos pacientes.',
      },
    ];

    const randomAboutFirma = () => {
      const randomIndex = Math.floor(Math.random() * aboutFirma.length);
      return aboutFirma[randomIndex].description;
    };
    useEffect(() => {
      const savedDescription = localStorage.getItem('randomAboutFirma');
      if (savedDescription) {
        setRandomAboutFirmaText(savedDescription);
      } else {
        const newRandomDescription = randomAboutFirma();
        setRandomAboutFirmaText(newRandomDescription);
        localStorage.setItem('randomAboutFirma', newRandomDescription);
      }
    }, []);

    // TEXTO 1
    const assaltoDomestico = [
      {
        description:
          'Oferecemos cuidados abrangentes em nossa clínica geral, garantindo atendimento personalizado e soluções médicas eficientes para as necessidades dos nossos pacientes.',
      },
      {
        description:
          'Protegemos sua saúde com excelência na medicina geral, priorizando seu bem-estar e oferecendo serviços médicos de alta qualidade.',
      },
      {
        description:
          'Atuamos com comprometimento e dedicação em nossa clínica geral, buscando sempre a excelência nos cuidados médicos e proporcionando segurança e confiança aos nossos pacientes.',
      },
      {
        description:
          'Comprometidos com a saúde e resultados positivos na medicina geral, oferecemos uma abordagem dedicada para garantir seu bem-estar e cuidar da sua saúde de forma eficaz.',
      },
      {
        description:
          'Nossa clínica geral tem uma atuação dedicada em fornecer serviços médicos abrangentes, visando garantir sua saúde e oferecer soluções médicas eficientes para as suas necessidades.',
      },
    ];

    const randomAssaltoDomestico = () => {
      const randomIndex = Math.floor(Math.random() * assaltoDomestico.length);
      return assaltoDomestico[randomIndex].description;
    };

    useEffect(() => {
      const savedDescription = localStorage.getItem(
        'randomAreaAtuacaoOptions1Text',
      );
      if (savedDescription) {
        setRandomAreaAtuacaoOptions1Text(savedDescription);
      } else {
        const newRandomDescription = randomAssaltoDomestico();
        setRandomAreaAtuacaoOptions1Text(newRandomDescription);
        localStorage.setItem(
          'randomAreaAtuacaoOptions1Text',
          newRandomDescription,
        );
      }
    }, []);

    // TEXTO 2
    const crimeDeArmas = [
      {
        description:
          'Nossa clínica especializada em Pediatria oferece cuidados abrangentes e de qualidade para crianças de todas as idades. Nossa equipe de médicos pediatras altamente qualificados está comprometida em fornecer um atendimento personalizado e acolhedor, garantindo a saúde e o bem-estar dos pequenos pacientes.',
      },
      {
        description:
          'Na nossa clínica de Pediatria, oferecemos um ambiente acolhedor e seguro, dedicado exclusivamente ao cuidado das crianças. Nossos médicos pediatras são experientes e dedicados, e trabalham em conjunto com uma equipe multidisciplinar para fornecer um atendimento completo e individualizado, visando o desenvolvimento saudável e feliz de cada criança.',
      },
      {
        description:
          'Nossa clínica é especializada em Pediatria, oferecendo serviços médicos abrangentes para crianças. Contamos com uma equipe de médicos pediatras altamente capacitados e comprometidos em fornecer um atendimento de qualidade, focado na saúde e no bem-estar infantil.',
      },
      {
        description:
          'Na clínica de Pediatria, nos dedicamos a cuidar da saúde das crianças. Nossa equipe médica é formada por pediatras especializados, prontos para oferecer um atendimento personalizado, seguro e eficaz, atendendo às necessidades individuais de cada paciente infantil.',
      },
      {
        description:
          'Conte com nossa clínica de Pediatria para cuidar da saúde dos seus filhos. Nossos médicos pediatras têm experiência e expertise para oferecer um atendimento completo e personalizado, garantindo a melhor assistência médica para as crianças.',
      },
    ];

    const randomCrimeDeArmas = () => {
      const randomIndex = Math.floor(Math.random() * crimeDeArmas.length);
      return crimeDeArmas[randomIndex].description;
    };

    useEffect(() => {
      const savedDescription = localStorage.getItem(
        'randomAreaAtuacaoOptions2Text',
      );
      if (savedDescription) {
        setRandomAreaAtuacaoOptions2Text(savedDescription);
      } else {
        const newRandomDescription = randomCrimeDeArmas();
        setRandomAreaAtuacaoOptions2Text(newRandomDescription);
        localStorage.setItem(
          'randomAreaAtuacaoOptions2Text',
          newRandomDescription,
        );
      }
    }, []);

    // TEXT 3
    const crimeDeDrogas = [
      {
        description:
          'Oferecemos cuidados especializados em Ginecologia e Obstetrícia, defendendo a saúde e bem-estar das mulheres com soluções médicas eficazes.',
      },
      {
        description:
          'Protegemos os interesses das mulheres e promovemos a saúde na área de Ginecologia e Obstetrícia, com excelência e dedicação.',
      },
      {
        description:
          'Atuamos com advocacia de alta qualidade na Ginecologia e Obstetrícia, garantindo segurança, justiça e cuidados especializados para as necessidades das mulheres.',
      },
      {
        description:
          'Comprometidos com a justiça e resultados positivos na área de Ginecologia e Obstetrícia, oferecemos uma atuação dedicada para garantir os direitos e a saúde das mulheres.',
      },
      {
        description:
          'Oferecemos atendimento dedicado e seguro na área de Ginecologia e Obstetrícia, buscando garantir os direitos e a segurança das mulheres em casos de necessidade.',
      },
    ];

    const randomCrimeDeDrogas = () => {
      const randomIndex = Math.floor(Math.random() * crimeDeDrogas.length);
      return crimeDeDrogas[randomIndex].description;
    };

    useEffect(() => {
      const savedDescription = localStorage.getItem(
        'randomAreaAtuacaoOptions3Text',
      );
      if (savedDescription) {
        setRandomAreaAtuacaoOptions3Text(savedDescription);
      } else {
        const newRandomDescription = randomCrimeDeDrogas();
        setRandomAreaAtuacaoOptions3Text(newRandomDescription);
        localStorage.setItem(
          'randomAreaAtuacaoOptions3Text',
          newRandomDescription,
        );
      }
    }, []);

    // TEXT 4
    const crimeDePessoais = [
      {
        description:
          'Oferecemos cuidados especializados em Ortopedia, defendendo seus direitos e buscando soluções eficazes em casos de lesões pessoais.',
      },
      {
        description:
          'Protegemos seus interesses e lutamos com excelência em casos de crimes pessoais relacionados à área de Ortopedia.',
      },
      {
        description:
          'Conte com nossa advocacia de alta qualidade na área de Ortopedia para garantir sua segurança e justiça em casos de crimes pessoais.',
      },
      {
        description:
          'Estamos comprometidos com a justiça e buscamos resultados positivos em casos de crimes pessoais, oferecendo uma atuação dedicada para garantir seus direitos e segurança.',
      },
      {
        description:
          'Nossa atuação na área de Ortopedia visa garantir seus direitos e segurança em casos de crimes pessoais, com uma abordagem dedicada e eficaz.',
      },
    ];

    const randomCrimeDePessoais = () => {
      const randomIndex = Math.floor(Math.random() * crimeDePessoais.length);
      return crimeDePessoais[randomIndex].description;
    };

    useEffect(() => {
      const savedDescription = localStorage.getItem(
        'randomAreaAtuacaoOptions4Text',
      );
      if (savedDescription) {
        setRandomAreaAtuacaoOptions4Text(savedDescription);
      } else {
        const newRandomDescription = randomCrimeDePessoais();
        setRandomAreaAtuacaoOptions4Text(newRandomDescription);
        localStorage.setItem(
          'randomAreaAtuacaoOptions4Text',
          newRandomDescription,
        );
      }
    }, []);

    // TEXT 5

    const crimeDeAssedio = [
      {
        description:
          'Oferecemos cuidados especializados em Dermatologia, defendendo seus direitos e buscando soluções eficazes em casos de crimes de assédio.',
      },
      {
        description:
          'Protegemos seus interesses e lutamos com excelência em casos de crimes de assédio relacionados à área de Dermatologia.',
      },
      {
        description:
          'Conte com nossa advocacia de alta qualidade na área de Dermatologia para garantir sua segurança e justiça em casos de crimes de assédio.',
      },
      {
        description:
          'Estamos comprometidos com a justiça e buscamos resultados positivos em casos de crimes de assédio, oferecendo uma atuação dedicada para garantir seus direitos e segurança.',
      },
      {
        description:
          'Nossa atuação na área de Dermatologia visa garantir seus direitos e segurança em casos de crimes de assédio, com uma abordagem dedicada e eficaz.',
      },
    ];

    const randomCrimeDeAssedio = () => {
      const randomIndex = Math.floor(Math.random() * crimeDeAssedio.length);
      return crimeDeAssedio[randomIndex].description;
    };

    useEffect(() => {
      const savedDescription = localStorage.getItem(
        'randomAreaAtuacaoOptions5Text',
      );
      if (savedDescription) {
        setRandomAreaAtuacaoOptions5Text(savedDescription);
      } else {
        const newRandomDescription = randomCrimeDeAssedio();
        setRandomAreaAtuacaoOptions5Text(newRandomDescription);
        localStorage.setItem(
          'randomAreaAtuacaoOptions5Text',
          newRandomDescription,
        );
      }
    }, []);

    // TEXT 6

    const divorcio = [
      {
        description:
          'Oferecemos suporte jurídico especializado em casos de Otorrinolaringologia, buscando soluções eficazes em questões relacionadas à área.',
      },
      {
        description:
          'Protegemos seus interesses e lutamos pela justiça em casos de Otorrinolaringologia com excelência.',
      },
      {
        description:
          'Advocacia de alta qualidade para garantir seus direitos e segurança em questões legais envolvendo Otorrinolaringologia.',
      },
      {
        description:
          'Comprometidos em obter resultados positivos e equitativos em casos relacionados à Otorrinolaringologia.',
      },
      {
        description:
          'Atuação dedicada para garantir uma abordagem justa e eficaz em questões legais envolvendo Otorrinolaringologia.',
      },
    ];

    const randomDivórcio = () => {
      const randomIndex = Math.floor(Math.random() * divorcio.length);
      return divorcio[randomIndex].description;
    };

    useEffect(() => {
      const savedDescription = localStorage.getItem(
        'randomAreaAtuacaoOptions6Text',
      );
      if (savedDescription) {
        setRandomAreaAtuacaoOptions6Text(savedDescription);
      } else {
        const newRandomDescription = randomDivórcio();
        setRandomAreaAtuacaoOptions6Text(newRandomDescription);
        localStorage.setItem(
          'randomAreaAtuacaoOptions6Text',
          newRandomDescription,
        );
      }
    }, []);

    //
    const footer = [
      {
        description:
          'Entre em contato conosco hoje mesmo para marcar uma consulta e cuidar da sua saúde. Nossa equipe médica altamente qualificada está pronta para oferecer o melhor atendimento e soluções médicas personalizadas.',
      },
      {
        description:
          'Na nossa clínica médica, priorizamos o seu bem-estar. Oferecemos uma ampla gama de serviços médicos de alta qualidade, garantindo cuidados excepcionais para você e sua família.',
      },
      {
        description:
          'Estamos comprometidos em fornecer atendimento médico de excelência. Nossa equipe de profissionais dedicados está pronta para cuidar da sua saúde, fornecendo diagnósticos precisos, tratamentos eficazes e orientações personalizadas.',
      },
      {
        description:
          'Sua saúde é nossa prioridade. Nossa clínica médica oferece uma abordagem abrangente para atender às suas necessidades. Conte com nossa equipe de médicos especializados para cuidar de você com atenção e comprometimento.',
      },
      {
        description:
          'Valorizamos sua saúde e bem-estar. Na nossa clínica médica, você encontrará profissionais experientes e dedicados, prontos para oferecer o melhor cuidado médico possível. Agende uma consulta e confie em nós para cuidar de você.',
      },
    ];

    const randomFooter = () => {
      const randomIndex = Math.floor(Math.random() * footer.length);
      return footer[randomIndex].description;
    };

    useEffect(() => {
      const savedDescription = localStorage.getItem('randomFooter');
      if (savedDescription) {
        setRandomFooterText(savedDescription);
      } else {
        const newRandomDescription = randomFooter();
        setRandomFooterText(newRandomDescription);
        localStorage.setItem('randomFooter', newRandomDescription);
      }
    }, []);
  }

  if (temaTemplateEscolhido === 'Advogado') {

    useEffect(() => {
      const faleConoscoTextLocal = localStorage.getItem('faleConoscoText');
      const faleConoscoProfTextLocal = localStorage.getItem('faleConoscoProfText');
      const areaAtuacaoOptions1TextLocal = localStorage.getItem('areaAtuacaoOptions1Text');
      const areaAtuacaoOptions2TextLocal = localStorage.getItem('areaAtuacaoOptions2Text');
      const areaAtuacaoOptions3TextLocal = localStorage.getItem('areaAtuacaoOptions3Text');
      const areaAtuacaoOptions4TextLocal = localStorage.getItem('areaAtuacaoOptions4Text');
      const areaAtuacaoOptions5TextLocal = localStorage.getItem('areaAtuacaoOptions5Text');
      const areaAtuacaoOptions6TextLocal = localStorage.getItem('areaAtuacaoOptions6Text');
      const numeroCellTextLocal = localStorage.getItem('numeroCellText');

      if (!faleConoscoTextLocal) {
        setFaleConoscoText('Fale conosco agora');
        localStorage.setItem('faleConoscoText', 'Fale conosco agora');
      } else {
        setFaleConoscoText(faleConoscoTextLocal);
      }

      if (!faleConoscoProfTextLocal) {
        setFaleConoscoProfText('Fale com nossos advogados hoje!');
        localStorage.setItem('faleConoscoProfText', 'Fale com nossos advogados hoje!');
      } else {
        setFaleConoscoProfText(faleConoscoProfTextLocal);
      }

      if (!areaAtuacaoOptions1TextLocal) {
        setAreaAtuacaoOptions1Text('Assalto doméstico');
        localStorage.setItem('areaAtuacaoOptions1Text', 'Assalto doméstico');
      } else {
        setAreaAtuacaoOptions1Text(areaAtuacaoOptions1TextLocal);
      }

      if (!areaAtuacaoOptions2TextLocal) {
        setAreaAtuacaoOptions2Text('Crimes de armas');
        localStorage.setItem('areaAtuacaoOptions2Text', 'Crimes de armas');
      } else {
        setAreaAtuacaoOptions2Text(areaAtuacaoOptions2TextLocal);
      }

      if (!areaAtuacaoOptions3TextLocal) {
        setAreaAtuacaoOptions3Text('Crimes de drogas');
        localStorage.setItem('areaAtuacaoOptions3Text', 'Crimes de drogas');
      } else {
        setAreaAtuacaoOptions3Text(areaAtuacaoOptions3TextLocal);
      }

      if (!areaAtuacaoOptions4TextLocal) {
        setAreaAtuacaoOptions4Text('Crimes de pessoais');
        localStorage.setItem('areaAtuacaoOptions4Text', 'Crimes de pessoais');
      } else {
        setAreaAtuacaoOptions4Text(areaAtuacaoOptions4TextLocal);
      }

      if (!areaAtuacaoOptions5TextLocal) {
        setAreaAtuacaoOptions5Text('Crimes de assedio');
        localStorage.setItem('areaAtuacaoOptions5Text', 'Crimes de assedio');
      } else {
        setAreaAtuacaoOptions5Text(areaAtuacaoOptions5TextLocal);
      }

      if (!areaAtuacaoOptions6TextLocal) {
        setAreaAtuacaoOptions6Text('Crimes de Divorcios');
        localStorage.setItem('areaAtuacaoOptions6Text', 'Crimes de Divorcios');
      } else {
        setAreaAtuacaoOptions6Text(areaAtuacaoOptions6TextLocal);
      }

      if (!numeroCellTextLocal) {
        setNumeroCellText('(85) 9 8972-8250');
        localStorage.setItem('numeroCellText', '(85) 9 8972-8250');
      } else {
        setNumeroCellText(numeroCellTextLocal);
      }
    }, []);


    // BANNER HEADER

    useEffect(() => {
      const fetchData = async () => {
        const bannerTemplateHeader = localStorage.getItem(
          'bannerTemplateHeader',
        );

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

            localStorage.setItem('bannerTemplateHeader', randomBanner.imgUrl);
          }
        } else {
          setImageUrlHeader(bannerTemplateHeader);
        }
      };

      fetchData();
    }, []);

    // BANNER ABOUT

    useEffect(() => {
      const fetchData = async () => {
        const bannerTemplateHeader = localStorage.getItem(
          'bannerTemplateAbout',
        );

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

            localStorage.setItem('bannerTemplateAbout', randomBanner.imgUrl);
          }
        } else {
          setImageUrlAbout(bannerTemplateHeader);
        }
      };

      fetchData();
    }, []);

    // BANNER PARALALAX PRIMEIRA IMAGEM

    useEffect(() => {
      const fetchData = async () => {
        const bannerTemplateHeader = localStorage.getItem(
          'bannerTemplateParallax01',
        );

        if (!bannerTemplateHeader) {
          const advogadoDocRef = doc(db, 'sites', 'advogado');
          const bannerCollectionRef = collection(
            advogadoDocRef,
            'bannerparalax',
          );
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

            localStorage.setItem(
              'bannerTemplateParallax01',
              randomBanner.imgUrl,
            );
          }
        } else {
          setImageUrlParallax(bannerTemplateHeader);
        }
      };

      fetchData();
    }, []);

    // BANER PARALLAX SEGUNDA IMAGEM

    useEffect(() => {
      const fetchData = async () => {
        const bannerTemplateHeader = localStorage.getItem(
          'bannerTemplateParallax02',
        );

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

            localStorage.setItem(
              'bannerTemplateParallax02',
              randomBanner.imgUrl,
            );
          }
        } else {
          setImageUrlParallaxSegunda(bannerTemplateHeader);
        }
      };

      fetchData();
    }, []);

    // TEXTOS

    // TITLES
    const titleFirma = [
      {
        description: 'Luxury Legal Solutions',
      },
      {
        description: 'Elite Advocates',
      },
      {
        description: 'Prestige Law Firm',
      },
      {
        description: 'Opulent Attorneys',
      },
      {
        description: 'Exclusive Legal Advisors',
      },
    ];
    const randomTitleFirma = () => {
      const randomIndex = Math.floor(Math.random() * titleFirma.length);
      return titleFirma[randomIndex].description;
    };
    useEffect(() => {
      const savedDescription = localStorage.getItem('randomTitleFirma');
      if (savedDescription) {
        setRandomTitleFirmaText(savedDescription);
      } else {
        const newRandomDescription = randomTitleFirma();
        setRandomTitleFirmaText(newRandomDescription);
        localStorage.setItem('randomTitleFirma', newRandomDescription);
      }
    }, []);

    // SUB TITLES
    const subTitleHeader = [
      {
        description: 'Defendendo seus direitos com excelência',
      },
      {
        description: 'Justiça e integridade em cada caso',
      },
      {
        description: 'Seus parceiros jurídicos de confiança',
      },
      {
        description: 'Advogando pelo seu sucesso',
      },
      {
        description: 'Navegando em questões legais complexas',
      },
    ];

    const randomSubTitleHeader = () => {
      const randomIndex = Math.floor(Math.random() * subTitleHeader.length);
      return subTitleHeader[randomIndex].description;
    };

    useEffect(() => {
      const savedSlogan = localStorage.getItem('randomSubTitleHeaderText');
      if (savedSlogan) {
        setRandomSubTitleHeaderText(savedSlogan);
      } else {
        const newRandomSlogan = randomSubTitleHeader();
        setRandomSubTitleHeaderText(newRandomSlogan);
        localStorage.setItem('randomSubTitleHeaderText', newRandomSlogan);
      }
    }, []);

    // ABOUT
    const about = [
      {
        description:
          'Nossa firma de advocacia oferece soluções jurídicas especializadas e eficazes. Contamos com uma equipe experiente e dedicada, pronta para representar seus interesses com ética e profissionalismo. Priorizamos a excelência em cada caso, buscando resultados favoráveis para nossos clientes. Confie em nós para resolver suas questões legais com confiança e competência.',
      },
      {
        description:
          'Somos uma firma de advocacia comprometida em fornecer soluções jurídicas confiáveis e eficientes. Com uma equipe experiente e especializada, oferecemos serviços jurídicos personalizados para atender às necessidades dos nossos clientes. Nossa ética profissional e integridade são fundamentais em todas as nossas interações. Conte conosco para representar seus interesses legais com dedicação e excelência.',
      },
      {
        description:
          'Nossa firma de advocacia é especializada em oferecer soluções jurídicas eficazes e personalizadas para nossos clientes. Com uma equipe de advogados experientes e dedicados, estamos prontos para lidar com uma ampla gama de questões legais. Nosso compromisso com a excelência e a ética nos permite fornecer um serviço de qualidade, sempre buscando alcançar os melhores resultados para nossos clientes. Conte conosco para representar seus interesses e proteger seus direitos com dedicação e profissionalismo.',
      },
      {
        description:
          'Conte com nossa firma de advocacia para obter serviços jurídicos de qualidade. Nossa equipe de advogados altamente qualificados está comprometida em fornecer soluções eficientes e personalizadas. Com experiência em diversas áreas do direito, estamos preparados para lidar com casos complexos e proteger seus interesses. Oferecemos um atendimento dedicado e confidencial, garantindo a defesa de seus direitos com ética e competência.',
      },
      {
        description:
          'Na nossa firma de advocacia, acreditamos em uma abordagem personalizada para cada cliente. Compreendemos a importância de suas necessidades legais e nos dedicamos a fornecer soluções sob medida. Nossa equipe de advogados especializados está pronta para representá-lo com integridade e profissionalismo. Confie em nós para garantir seus direitos e encontrar as melhores estratégias jurídicas para seu caso.',
      },
    ];
    // RANDOM TEXTO ABOUT
    const randomTextoAbout = () => {
      const randomIndex = Math.floor(Math.random() * about.length);
      return about[randomIndex].description;
    };

    useEffect(() => {
      const savedDescription = localStorage.getItem('randomTextoAbout');
      if (savedDescription) {
        setRandomTextoAboutText(savedDescription);
      } else {
        const newRandomDescription = randomTextoAbout();
        setRandomTextoAboutText(newRandomDescription);
        localStorage.setItem('randomTextoAbout', newRandomDescription);
      }
    }, []);

    // PARALLAX SLOGAN

    const sloganParallaxText = [
      {
        description: 'DEFENDEMOS SEUS DIREITOS COM SOLUÇÃO EFICIENTE',
      },
      {
        description: 'PROTEGEMOS SEUS INTERESSES COM EXCELÊNCIA',
      },
      {
        description: 'ADVOCACIA DE ALTA QUALIDADE PARA SUA SEGURANÇA',
      },
      {
        description: 'COMPROMETIDOS COM A JUSTIÇA E RESULTADOS POSITIVOS',
      },
      {
        description: 'ATUAÇÃO DEDICADA PARA GARANTIR SEUS DIREITOS',
      },
    ];

    const randomSloganParallaxText = () => {
      const randomIndex = Math.floor(Math.random() * sloganParallaxText.length);
      return sloganParallaxText[randomIndex].description;
    };

    useEffect(() => {
      const savedSlogan = localStorage.getItem('randomSloganParallaxText');
      if (savedSlogan) {
        setRandomSloganParallaxText(savedSlogan);
      } else {
        const newRandomSlogan = randomSloganParallaxText();
        setRandomSloganParallaxText(newRandomSlogan);
        localStorage.setItem('randomSloganParallaxText', newRandomSlogan);
      }
    }, []);

    //PARALLAX
    const parallax01 = [
      {
        description:
          'Nossa empresa de advocacia é a escolha certa para você, pois contamos com uma equipe de profissionais altamente qualificados e comprometidos em defender seus interesses com eficiência e agilidade.',
      },
      {
        description:
          'Somos uma empresa de advocacia dedicada a oferecer serviços jurídicos excepcionais. Nossa equipe de advogados talentosos e comprometidos está pronta para representá-lo e proteger seus interesses com dedicação e experiência.',
      },
      {
        description:
          'Se você precisa de serviços jurídicos de confiança, nossa empresa de advocacia é a resposta. Temos uma equipe experiente de advogados prontos para lutar por seus direitos e oferecer soluções jurídicas eficazes e personalizadas.',
      },
      {
        description:
          'Na nossa empresa de advocacia, acreditamos que cada caso é único. Por isso, nossa equipe dedicada está empenhada em fornecer a você um serviço jurídico personalizado, com foco em resultados e eficiência.',
      },
      {
        description:
          'Conte conosco, uma empresa de advocacia comprometida com a excelência e a defesa de seus interesses. Nossa equipe de advogados qualificados está pronta para oferecer soluções jurídicas estratégicas e proteger seus direitos de forma eficiente.',
      },
    ];

    const randomParallax01 = () => {
      const randomIndex = Math.floor(Math.random() * parallax01.length);
      return parallax01[randomIndex].description;
    };

    useEffect(() => {
      const savedDescription = localStorage.getItem('randomParallax01');
      if (savedDescription) {
        setRandomParallax01Text(savedDescription);
      } else {
        const newRandomDescription = randomParallax01();
        setRandomParallax01Text(newRandomDescription);
        localStorage.setItem('randomParallax01', newRandomDescription);
      }
    }, []);

    // SOBRE A FIRMA
    const aboutFirma = [
      {
        description:
          'Nossa firma de advocacia busca sempre a excelência em serviços, oferecendo atendimento personalizado e soluções jurídicas eficazes para nossos clientes.',
      },
      {
        description:
          'Somos uma firma de advocacia comprometida em fornecer serviços jurídicos de alta qualidade. Nosso atendimento é personalizado, e buscamos sempre soluções eficazes para atender às necessidades dos nossos clientes.',
      },
      {
        description:
          'Na nossa firma de advocacia, priorizamos a excelência em cada caso. Nossa equipe está empenhada em fornecer atendimento personalizado e soluções jurídicas eficazes, buscando sempre os melhores resultados para nossos clientes.',
      },
      {
        description:
          'Conte com nossa firma de advocacia para receber um atendimento de qualidade e soluções jurídicas eficazes. Estamos comprometidos em oferecer serviços personalizados e buscar os melhores resultados para nossos clientes.',
      },
      {
        description:
          'Nossa firma de advocacia se dedica a oferecer serviços de excelência. Valorizamos o atendimento personalizado e buscamos sempre soluções jurídicas eficazes para atender às demandas e necessidades dos nossos clientes.',
      },
    ];
    const randomAboutFirma = () => {
      const randomIndex = Math.floor(Math.random() * aboutFirma.length);
      return aboutFirma[randomIndex].description;
    };
    useEffect(() => {
      const savedDescription = localStorage.getItem('randomAboutFirma');
      if (savedDescription) {
        setRandomAboutFirmaText(savedDescription);
      } else {
        const newRandomDescription = randomAboutFirma();
        setRandomAboutFirmaText(newRandomDescription);
        localStorage.setItem('randomAboutFirma', newRandomDescription);
      }
    }, []);

    // TEXTO 1
    const assaltoDomestico = [
      {
        description:
          'Defendemos seus direitos, proporcionando soluções eficientes para casos de assalto doméstico.',
      },
      {
        description:
          'Protegemos seus interesses com excelência na advocacia contra a violência doméstica.',
      },
      {
        description:
          'Alta qualidade na advocacia, garantindo segurança e justiça nos casos de assalto doméstico.',
      },
      {
        description:
          'Comprometidos com a justiça e resultados positivos em casos de violência doméstica.',
      },
      {
        description:
          'Atuação dedicada para garantir seus direitos e segurança em casos de assalto doméstico.',
      },
    ];

    const randomAssaltoDomestico = () => {
      const randomIndex = Math.floor(Math.random() * assaltoDomestico.length);
      return assaltoDomestico[randomIndex].description;
    };

    useEffect(() => {
      const savedDescription = localStorage.getItem(
        'randomAreaAtuacaoOptions1Text',
      );
      if (savedDescription) {
        setRandomAreaAtuacaoOptions1Text(savedDescription);
      } else {
        const newRandomDescription = randomAssaltoDomestico();
        setRandomAreaAtuacaoOptions1Text(newRandomDescription);
        localStorage.setItem(
          'randomAreaAtuacaoOptions1Text',
          newRandomDescription,
        );
      }
    }, []);

    // TEXTO 2
    const crimeDeArmas = [
      {
        description:
          'Defendemos seus direitos em casos de crimes de armas, buscando soluções eficazes.',
      },
      {
        description:
          'Protegemos seus interesses e lutamos contra crimes de armas com excelência.',
      },
      {
        description:
          'Advocacia de alta qualidade para sua segurança e justiça em casos de crimes de armas.',
      },
      {
        description:
          'Comprometidos com a justiça e resultados positivos em casos de crimes envolvendo armas.',
      },
      {
        description:
          'Atuação dedicada para garantir seus direitos e segurança em casos de crimes de armas.',
      },
    ];
    const randomCrimeDeArmas = () => {
      const randomIndex = Math.floor(Math.random() * crimeDeArmas.length);
      return crimeDeArmas[randomIndex].description;
    };

    useEffect(() => {
      const savedDescription = localStorage.getItem(
        'randomAreaAtuacaoOptions2Text',
      );
      if (savedDescription) {
        setRandomAreaAtuacaoOptions2Text(savedDescription);
      } else {
        const newRandomDescription = randomCrimeDeArmas();
        setRandomAreaAtuacaoOptions2Text(newRandomDescription);
        localStorage.setItem(
          'randomAreaAtuacaoOptions2Text',
          newRandomDescription,
        );
      }
    }, []);

    // TEXT 3
    const crimeDeDrogas = [
      {
        description:
          'Defendemos seus direitos em casos de crimes de drogas, buscando soluções eficazes.',
      },
      {
        description:
          'Protegemos seus interesses e lutamos contra crimes de drogas com excelência.',
      },
      {
        description:
          'Advocacia de alta qualidade para sua segurança e justiça em casos de crimes de drogas.',
      },
      {
        description:
          'Comprometidos com a justiça e resultados positivos em casos de crimes envolvendo drogas.',
      },
      {
        description:
          'Atuação dedicada para garantir seus direitos e segurança em casos de crimes de drogas.',
      },
    ];

    const randomCrimeDeDrogas = () => {
      const randomIndex = Math.floor(Math.random() * crimeDeDrogas.length);
      return crimeDeDrogas[randomIndex].description;
    };

    useEffect(() => {
      const savedDescription = localStorage.getItem(
        'randomAreaAtuacaoOptions3Text',
      );
      if (savedDescription) {
        setRandomAreaAtuacaoOptions3Text(savedDescription);
      } else {
        const newRandomDescription = randomCrimeDeDrogas();
        setRandomAreaAtuacaoOptions3Text(newRandomDescription);
        localStorage.setItem(
          'randomAreaAtuacaoOptions3Text',
          newRandomDescription,
        );
      }
    }, []);

    // TEXT 4
    const crimeDePessoais = [
      {
        description:
          'Defendemos seus direitos em casos de crimes pessoais, buscando soluções eficazes.',
      },
      {
        description:
          'Protegemos seus interesses e lutamos contra crimes pessoais com excelência.',
      },
      {
        description:
          'Advocacia de alta qualidade para sua segurança e justiça em casos de crimes pessoais.',
      },
      {
        description:
          'Comprometidos com a justiça e resultados positivos em casos de crimes pessoais.',
      },
      {
        description:
          'Atuação dedicada para garantir seus direitos e segurança em casos de crimes pessoais.',
      },
    ];

    const randomCrimeDePessoais = () => {
      const randomIndex = Math.floor(Math.random() * crimeDePessoais.length);
      return crimeDePessoais[randomIndex].description;
    };

    useEffect(() => {
      const savedDescription = localStorage.getItem(
        'randomAreaAtuacaoOptions4Text',
      );
      if (savedDescription) {
        setRandomAreaAtuacaoOptions4Text(savedDescription);
      } else {
        const newRandomDescription = randomCrimeDePessoais();
        setRandomAreaAtuacaoOptions4Text(newRandomDescription);
        localStorage.setItem(
          'randomAreaAtuacaoOptions4Text',
          newRandomDescription,
        );
      }
    }, []);

    // TEXT 5
    const crimeDeAssedio = [
      {
        description:
          'Defendemos seus direitos em casos de crimes de assédio, buscando soluções eficazes.',
      },
      {
        description:
          'Protegemos seus interesses e lutamos contra crimes de assédio com excelência.',
      },
      {
        description:
          'Advocacia de alta qualidade para sua segurança e justiça em casos de crimes de assédio.',
      },
      {
        description:
          'Comprometidos com a justiça e resultados positivos em casos de crimes de assédio.',
      },
      {
        description:
          'Atuação dedicada para garantir seus direitos e segurança em casos de crimes de assédio.',
      },
    ];

    const randomCrimeDeAssedio = () => {
      const randomIndex = Math.floor(Math.random() * crimeDeAssedio.length);
      return crimeDeAssedio[randomIndex].description;
    };

    useEffect(() => {
      const savedDescription = localStorage.getItem(
        'randomAreaAtuacaoOptions5Text',
      );
      if (savedDescription) {
        setRandomAreaAtuacaoOptions5Text(savedDescription);
      } else {
        const newRandomDescription = randomCrimeDeAssedio();
        setRandomAreaAtuacaoOptions5Text(newRandomDescription);
        localStorage.setItem(
          'randomAreaAtuacaoOptions5Text',
          newRandomDescription,
        );
      }
    }, []);

    // TEXT 6

    const divorcio = [
      {
        description:
          'Oferecemos suporte jurídico especializado em casos de divórcio, buscando soluções eficazes.',
      },
      {
        description:
          'Protegemos seus interesses e lutamos pela justiça em casos de divórcio com excelência.',
      },
      {
        description:
          'Advocacia de alta qualidade para garantir seus direitos e segurança no processo de divórcio.',
      },
      {
        description:
          'Comprometidos em obter resultados positivos e equitativos em casos de divórcio.',
      },
      {
        description:
          'Atuação dedicada para garantir uma transição suave e justa durante o divórcio.',
      },
    ];

    const randomDivórcio = () => {
      const randomIndex = Math.floor(Math.random() * divorcio.length);
      return divorcio[randomIndex].description;
    };

    useEffect(() => {
      const savedDescription = localStorage.getItem(
        'randomAreaAtuacaoOptions6Text',
      );
      if (savedDescription) {
        setRandomAreaAtuacaoOptions6Text(savedDescription);
      } else {
        const newRandomDescription = randomDivórcio();
        setRandomAreaAtuacaoOptions6Text(newRandomDescription);
        localStorage.setItem(
          'randomAreaAtuacaoOptions6Text',
          newRandomDescription,
        );
      }
    }, []);

    //
    const footer = [
      {
        description:
          'Fale com nossos advogados de defesa criminal hoje. Estamos aqui para ajudar você a alcançar seus objetivos de maneira legal e eficiente. Conte conosco para proteger seus direitos e liberdade.',
      },
      {
        description:
          'Nossa firma de advocacia é especializada em defesa criminal. Nossos advogados experientes estão prontos para lutar em seu nome, garantindo que seus direitos sejam protegidos. Entre em contato conosco e tenha uma equipe confiável ao seu lado.',
      },
      {
        description:
          'Se você está enfrentando acusações criminais, nossa equipe de advogados de defesa criminal está pronta para ajudar. Oferecemos representação legal experiente e eficiente, trabalhando incansavelmente para proteger seus direitos e liberdade.',
      },
      {
        description:
          'Não enfrente acusações criminais sozinho. Nossa equipe de advogados de defesa criminal está aqui para você. Com uma abordagem legal sólida e estratégias eficazes, buscamos alcançar os melhores resultados para proteger seus direitos e liberdade.',
      },
      {
        description:
          'Na nossa firma de advocacia, temos uma equipe de advogados especializados em defesa criminal prontos para ajudar. Com dedicação e habilidades jurídicas, trabalharemos em conjunto para garantir a melhor defesa possível, protegendo seus direitos e alcançando resultados favoráveis.',
      },
    ];

    const randomFooter = () => {
      const randomIndex = Math.floor(Math.random() * footer.length);
      return footer[randomIndex].description;
    };

    useEffect(() => {
      const savedDescription = localStorage.getItem('randomFooter');
      if (savedDescription) {
        setRandomFooterText(savedDescription);
      } else {
        const newRandomDescription = randomFooter();
        setRandomFooterText(newRandomDescription);
        localStorage.setItem('randomFooter', newRandomDescription);
      }
    }, []);


  }

  if (temaTemplateEscolhido === 'Salão de beleza') {
    useEffect(() => {
      const carregarLocalStorage = () => {
        const faleConoscoTextLocal = localStorage.getItem('faleConoscoText');
        const faleConoscoProfTextLocal = localStorage.getItem('faleConoscoProfText');
        const areaAtuacaoOptions1TextLocal = localStorage.getItem('areaAtuacaoOptions1Text');
        const areaAtuacaoOptions2TextLocal = localStorage.getItem('areaAtuacaoOptions2Text');
        const areaAtuacaoOptions3TextLocal = localStorage.getItem('areaAtuacaoOptions3Text');
        const areaAtuacaoOptions4TextLocal = localStorage.getItem('areaAtuacaoOptions4Text');
        const areaAtuacaoOptions5TextLocal = localStorage.getItem('areaAtuacaoOptions5Text');
        const areaAtuacaoOptions6TextLocal = localStorage.getItem('areaAtuacaoOptions6Text');
        const numeroCellTextLocal = localStorage.getItem('numeroCellText');

        if (!faleConoscoTextLocal) {
          setFaleConoscoText('Fale conosco ');
          localStorage.setItem('faleConoscoText', 'Fale conosco');
        } else {
          setFaleConoscoText(faleConoscoTextLocal);
        }

        if (!faleConoscoProfTextLocal) {
          setFaleConoscoProfText('Agende seu horário hoje e realce sua beleza!');
          localStorage.setItem(
            'faleConoscoProfText',
            'Agende seu horário hoje e realce sua beleza!',
          );
        } else {
          setFaleConoscoProfText(faleConoscoProfTextLocal);
        }

        if (!areaAtuacaoOptions1TextLocal) {
          setAreaAtuacaoOptions1Text('Cortes de cabelo e estilização');
          localStorage.setItem('areaAtuacaoOptions1Text', 'Cortes de cabelo e estilização');
        } else {
          setAreaAtuacaoOptions1Text(areaAtuacaoOptions1TextLocal);
        }

        if (!areaAtuacaoOptions2TextLocal) {
          setAreaAtuacaoOptions2Text('Coloração de cabelo');
          localStorage.setItem('areaAtuacaoOptions2Text', 'Coloração de cabelo');
        } else {
          setAreaAtuacaoOptions2Text(areaAtuacaoOptions2TextLocal);
        }

        if (!areaAtuacaoOptions3TextLocal) {
          setAreaAtuacaoOptions3Text('Tratamentos capilares');
          localStorage.setItem('areaAtuacaoOptions3Text', 'Tratamentos capilares');
        } else {
          setAreaAtuacaoOptions3Text(areaAtuacaoOptions3TextLocal);
        }

        if (!areaAtuacaoOptions4TextLocal) {
          setAreaAtuacaoOptions4Text('Manicure e pedicure');
          localStorage.setItem('areaAtuacaoOptions4Text', 'Manicure e pedicure');
        } else {
          setAreaAtuacaoOptions4Text(areaAtuacaoOptions4TextLocal);
        }

        if (!areaAtuacaoOptions5TextLocal) {
          setAreaAtuacaoOptions5Text('Estética facial');
          localStorage.setItem('areaAtuacaoOptions5Text', 'Estética facial');
        } else {
          setAreaAtuacaoOptions5Text(areaAtuacaoOptions5TextLocal);
        }

        if (!areaAtuacaoOptions6TextLocal) {
          setAreaAtuacaoOptions6Text('Coloração de cabelo');
          localStorage.setItem('areaAtuacaoOptions6Text', 'Coloração de cabelo');
        } else {
          setAreaAtuacaoOptions6Text(areaAtuacaoOptions6TextLocal);
        }

        if (!numeroCellTextLocal) {
          setNumeroCellText('(85) 9 8972-8250');
          localStorage.setItem('numeroCellText', '(85) 9 8972-8250');
        } else {
          setNumeroCellText(numeroCellTextLocal);
        }
      };

      carregarLocalStorage();
    }, []);


    // BANNER HEADER

    useEffect(() => {
      const fetchData = async () => {
        const bannerTemplateHeader = localStorage.getItem(
          'bannerTemplateHeader',
        );

        if (!bannerTemplateHeader) {
          const advogadoDocRef = doc(db, 'sites', 'salaDeBeleza');
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

            localStorage.setItem('bannerTemplateHeader', randomBanner.imgUrl);
          }
        } else {
          setImageUrlHeader(bannerTemplateHeader);
        }
      };

      fetchData();
    }, []);

    // BANNER ABOUT

    useEffect(() => {
      const fetchData = async () => {
        const bannerTemplateHeader = localStorage.getItem(
          'bannerTemplateAbout',
        );

        if (!bannerTemplateHeader) {
          const advogadoDocRef = doc(db, 'sites', 'salaDeBeleza');
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

            localStorage.setItem('bannerTemplateAbout', randomBanner.imgUrl);
          }
        } else {
          setImageUrlAbout(bannerTemplateHeader);
        }
      };

      fetchData();
    }, []);

    // BANNER PARALALAX PRIMEIRA IMAGEM

    useEffect(() => {
      const fetchData = async () => {
        const bannerTemplateHeader = localStorage.getItem(
          'bannerTemplateParallax01',
        );

        if (!bannerTemplateHeader) {
          const advogadoDocRef = doc(db, 'sites', 'salaDeBeleza');
          const bannerCollectionRef = collection(
            advogadoDocRef,
            'bannerparalax',
          );
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

            localStorage.setItem(
              'bannerTemplateParallax01',
              randomBanner.imgUrl,
            );
          }
        } else {
          setImageUrlParallax(bannerTemplateHeader);
        }
      };

      fetchData();
    }, []);

    // BANER PARALLAX SEGUNDA IMAGEM

    useEffect(() => {
      const fetchData = async () => {
        const bannerTemplateHeader = localStorage.getItem(
          'bannerTemplateParallax02',
        );

        if (!bannerTemplateHeader) {
          const advogadoDocRef = doc(db, 'sites', 'salaDeBeleza');
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

            localStorage.setItem(
              'bannerTemplateParallax02',
              randomBanner.imgUrl,
            );
          }
        } else {
          setImageUrlParallaxSegunda(bannerTemplateHeader);
        }
      };

      fetchData();
    }, []);

    // TEXTOS

    // TITLES
    const titleFirma = [
      {
        description: 'Luxury Legal Solutions',
      },
      {
        description: 'Elite Advocates',
      },
      {
        description: 'Prestige Law Firm',
      },
      {
        description: 'Opulent Attorneys',
      },
      {
        description: 'Exclusive Legal Advisors',
      },
    ];
    const randomTitleFirma = () => {
      const randomIndex = Math.floor(Math.random() * titleFirma.length);
      return titleFirma[randomIndex].description;
    };
    useEffect(() => {
      const savedDescription = localStorage.getItem('randomTitleFirma');
      if (savedDescription) {
        setRandomTitleFirmaText(savedDescription);
      } else {
        const newRandomDescription = randomTitleFirma();
        setRandomTitleFirmaText(newRandomDescription);
        localStorage.setItem('randomTitleFirma', newRandomDescription);
      }
    }, []);

    // SUB TITLES
    const subTitleHeader = [
      {
        description: 'Realçando sua beleza com excelência',
      },
      {
        description: 'Estilo e cuidado em cada serviço',
      },
      {
        description: 'Seus parceiros de beleza de confiança',
      },
      {
        description: 'Valorizando sua beleza',
      },
      {
        description: 'Navegando em tendências de beleza',
      },
    ];

    const randomSubTitleHeader = () => {
      const randomIndex = Math.floor(Math.random() * subTitleHeader.length);
      return subTitleHeader[randomIndex].description;
    };

    useEffect(() => {
      const savedSlogan = localStorage.getItem('randomSubTitleHeaderText');
      if (savedSlogan) {
        setRandomSubTitleHeaderText(savedSlogan);
      } else {
        const newRandomSlogan = randomSubTitleHeader();
        setRandomSubTitleHeaderText(newRandomSlogan);
        localStorage.setItem('randomSubTitleHeaderText', newRandomSlogan);
      }
    }, []);

    // ABOUT
    const about = [
      {
        description:
          'Nosso salão de beleza oferece serviços especializados e eficazes. Contamos com uma equipe experiente e dedicada, pronta para realçar sua beleza com ética e profissionalismo. Priorizamos a excelência em cada serviço, buscando resultados favoráveis para nossos clientes. Confie em nós para cuidar da sua beleza com confiança e competência.',
      },
      {
        description:
          'Somos um salão de beleza comprometido em fornecer serviços confiáveis e eficientes. Com uma equipe experiente e especializada, oferecemos serviços personalizados para atender às necessidades dos nossos clientes. Nossa ética profissional e integridade são fundamentais em todas as nossas interações. Conte conosco para realçar sua beleza com dedicação e excelência.',
      },
      {
        description:
          'Nosso salão de beleza é especializado em oferecer serviços eficazes e personalizados para nossos clientes. Com uma equipe de profissionais experientes e dedicados, estamos prontos para atender uma ampla gama de necessidades de beleza. Nosso compromisso com a excelência e a ética nos permite fornecer um serviço de qualidade, sempre buscando alcançar os melhores resultados para nossos clientes. Conte conosco para realçar sua beleza com dedicação e profissionalismo.',
      },
      {
        description:
          'Conte com nosso salão de beleza para obter serviços de qualidade. Nossa equipe altamente qualificada está comprometida em fornecer soluções eficientes e personalizadas para realçar sua beleza. Com experiência em diversas áreas da beleza, estamos preparados para oferecer um atendimento dedicado e confidencial, garantindo que você se sinta linda e confiante. Garantimos o cuidado da sua beleza com ética e competência.',
      },
      {
        description:
          'No nosso salão de beleza, acreditamos em uma abordagem personalizada para cada cliente. Compreendemos a importância das suas necessidades de beleza e nos dedicamos a fornecer serviços sob medida. Nossa equipe de profissionais especializados está pronta para realçar sua beleza com integridade e profissionalismo. Confie em nós para garantir que você se sinta linda e confiante, encontrando as melhores estratégias de beleza para você.',
      },
    ];

    // RANDOM TEXTO ABOUT
    const randomTextoAbout = () => {
      const randomIndex = Math.floor(Math.random() * about.length);
      return about[randomIndex].description;
    };

    useEffect(() => {
      const savedDescription = localStorage.getItem('randomTextoAbout');
      if (savedDescription) {
        setRandomTextoAboutText(savedDescription);
      } else {
        const newRandomDescription = randomTextoAbout();
        setRandomTextoAboutText(newRandomDescription);
        localStorage.setItem('randomTextoAbout', newRandomDescription);
      }
    }, []);

    // PARALLAX SLOGAN
    const sloganParallaxText = [
      {
        description: 'REALÇAMOS SUA BELEZA COM SOLUÇÕES EFICIENTES',
      },
      {
        description: 'SERVIÇOS DE ALTA QUALIDADE PARA SUA SEGURANÇA',
      },
      {
        description: 'COMPROMETIDOS COM A BELEZA E RESULTADOS POSITIVOS',
      },
      {
        description: 'ATUAÇÃO DEDICADA PARA VALORIZAR SUA BELEZA',
      },
    ];

    const randomSloganParallaxText = () => {
      const randomIndex = Math.floor(Math.random() * sloganParallaxText.length);
      return sloganParallaxText[randomIndex].description;
    };

    useEffect(() => {
      const savedSlogan = localStorage.getItem('randomSloganParallaxText');
      if (savedSlogan) {
        setRandomSloganParallaxText(savedSlogan);
      } else {
        const newRandomSlogan = randomSloganParallaxText();
        setRandomSloganParallaxText(newRandomSlogan);
        localStorage.setItem('randomSloganParallaxText', newRandomSlogan);
      }
    }, []);

    //PARALLAX
    const parallax01 = [
      {
        description:
          'Nosso salão de beleza é a escolha certa para você, pois contamos com uma equipe de profissionais altamente qualificados e comprometidos em realçar sua beleza com eficiência e agilidade.',
      },
      {
        description:
          'Somos um salão de beleza dedicado a oferecer serviços excepcionais. Nossa equipe de profissionais talentosos e comprometidos está pronta para cuidar de você e valorizar sua beleza com dedicação e experiência.',
      },
      {
        description:
          'Se você precisa de serviços de beleza de confiança, nosso salão é a resposta. Temos uma equipe experiente de profissionais prontos para realçar sua beleza e oferecer soluções personalizadas e eficazes.',
      },
      {
        description:
          'No nosso salão de beleza, acreditamos que cada cliente é único. Por isso, nossa equipe dedicada está empenhada em fornecer a você um serviço personalizado, com foco em resultados e eficiência para realçar sua beleza.',
      },
      {
        description:
          'Conte conosco, um salão de beleza comprometido com a excelência e a valorização da sua beleza. Nossa equipe de profissionais qualificados está pronta para oferecer serviços estratégicos e realçar sua beleza de forma eficiente.',
      },
    ];

    const randomParallax01 = () => {
      const randomIndex = Math.floor(Math.random() * parallax01.length);
      return parallax01[randomIndex].description;
    };

    useEffect(() => {
      const savedDescription = localStorage.getItem('randomParallax01');
      if (savedDescription) {
        setRandomParallax01Text(savedDescription);
      } else {
        const newRandomDescription = randomParallax01();
        setRandomParallax01Text(newRandomDescription);
        localStorage.setItem('randomParallax01', newRandomDescription);
      }
    }, []);

    // SOBRE A FIRMA
    const aboutFirma = [
      {
        description:
          'Nosso salão de beleza busca sempre a excelência em serviços, oferecendo atendimento personalizado e soluções estéticas eficazes para nossos clientes.',
      },
      {
        description:
          'Somos um salão de beleza comprometido em fornecer serviços de alta qualidade. Nosso atendimento é personalizado, e buscamos sempre soluções estéticas eficazes para atender às necessidades dos nossos clientes.',
      },
      {
        description:
          'No nosso salão de beleza, priorizamos a excelência em cada caso. Nossa equipe está empenhada em fornecer atendimento personalizado e soluções estéticas eficazes, buscando sempre os melhores resultados para nossos clientes.',
      },
      {
        description:
          'Conte com nosso salão de beleza para receber um atendimento de qualidade e soluções estéticas eficazes. Estamos comprometidos em oferecer serviços personalizados e buscar os melhores resultados para nossos clientes.',
      },
      {
        description:
          'Nosso salão de beleza se dedica a oferecer serviços de excelência. Valorizamos o atendimento personalizado e buscamos sempre soluções estéticas eficazes para atender às demandas e necessidades dos nossos clientes.',
      },
    ];

    const randomAboutFirma = () => {
      const randomIndex = Math.floor(Math.random() * aboutFirma.length);
      return aboutFirma[randomIndex].description;
    };
    useEffect(() => {
      const savedDescription = localStorage.getItem('randomAboutFirma');
      if (savedDescription) {
        setRandomAboutFirmaText(savedDescription);
      } else {
        const newRandomDescription = randomAboutFirma();
        setRandomAboutFirmaText(newRandomDescription);
        localStorage.setItem('randomAboutFirma', newRandomDescription);
      }
    }, []);

    // TEXTO 1
    const assaltoDomestico = [
      {
        description:
          'Nossos cabeleireiros especializados oferecem cortes de cabelo personalizados, garantindo que você saia do salão com um visual único e deslumbrante.',
      },
      {
        description:
          'Oferecemos uma ampla variedade de estilos e técnicas de estilização para criar o corte de cabelo perfeito que combine com o seu estilo e personalidade.',
      },
      {
        description:
          'Nossos profissionais são especialistas em cortes modernos e clássicos, proporcionando a você uma experiência de corte de cabelo excepcional e resultados impecáveis.',
      },
      {
        description:
          'Combinamos habilidade técnica e criatividade para criar cortes de cabelo que realcem a sua beleza e expressem sua individualidade.',
      },
      {
        description:
          'Nosso time de cabeleireiros talentosos está atualizado com as últimas tendências, oferecendo cortes inovadores e estilos únicos para você.',
      },
      {
        description:
          'Trabalhamos com cuidado e precisão, garantindo cortes de cabelo que se adaptem perfeitamente às suas características e desejos.',
      },
    ];

    const randomAssaltoDomestico = () => {
      const randomIndex = Math.floor(Math.random() * assaltoDomestico.length);
      return assaltoDomestico[randomIndex].description;
    };

    useEffect(() => {
      const savedDescription = localStorage.getItem(
        'randomAreaAtuacaoOptions1Text',
      );
      if (savedDescription) {
        setRandomAreaAtuacaoOptions1Text(savedDescription);
      } else {
        const newRandomDescription = randomAssaltoDomestico();
        setRandomAreaAtuacaoOptions1Text(newRandomDescription);
        localStorage.setItem(
          'randomAreaAtuacaoOptions1Text',
          newRandomDescription,
        );
      }
    }, []);

    // TEXTO 2
    const crimeDeArmas = [
      {
        description:
          'Nossos especialistas em coloração de cabelo criam resultados deslumbrantes, oferecendo uma ampla gama de opções de cores e técnicas personalizadas.',
      },
      {
        description:
          'Trabalhamos com produtos de alta qualidade para garantir uma coloração duradoura, vibrante e que preserve a saúde do seu cabelo.',
      },
      {
        description:
          'Oferecemos serviços de mechas, destaques, tinturas completas e técnicas de coloração sob medida para atender às suas preferências e estilo.',
      },
      {
        description:
          'Nossos profissionais são especialistas em tendências de coloração, proporcionando opções modernas, como ombré hair, balayage e coloração fantasia.',
      },
      {
        description:
          'Criamos looks personalizados para cada cliente, levando em consideração sua tonalidade de pele, cor dos olhos e estilo pessoal.',
      },
      {
        description:
          'Realizamos uma consulta detalhada para entender suas preferências e recomendar a coloração de cabelo perfeita para realçar sua beleza natural.',
      },
    ];
    const randomCrimeDeArmas = () => {
      const randomIndex = Math.floor(Math.random() * crimeDeArmas.length);
      return crimeDeArmas[randomIndex].description;
    };

    useEffect(() => {
      const savedDescription = localStorage.getItem(
        'randomAreaAtuacaoOptions2Text',
      );
      if (savedDescription) {
        setRandomAreaAtuacaoOptions2Text(savedDescription);
      } else {
        const newRandomDescription = randomCrimeDeArmas();
        setRandomAreaAtuacaoOptions2Text(newRandomDescription);
        localStorage.setItem(
          'randomAreaAtuacaoOptions2Text',
          newRandomDescription,
        );
      }
    }, []);

    // TEXT 3
    const crimeDeDrogas = [
      {
        description:
          'Nossos tratamentos capilares de alta qualidade incluem hidratação profunda, reconstrução e terapias para promover a saúde e o brilho dos cabelos.',
      },
      {
        description:
          'Utilizamos produtos e técnicas avançadas para tratar problemas capilares, como cabelos danificados, secos, com frizz ou pontas duplas.',
      },
      {
        description:
          'Oferecemos serviços de cauterização, queratinização e botox capilar para restaurar e fortalecer os fios, deixando-os macios, sedosos e saudáveis.',
      },
      {
        description:
          'Nossos especialistas avaliam cuidadosamente suas necessidades capilares e recomendam o tratamento ideal para revitalizar seus cabelos.',
      },
      {
        description:
          'Trabalhamos com produtos de marcas reconhecidas, proporcionando resultados eficazes e duradouros em todos os tratamentos capilares.',
      },
      {
        description:
          'Nossos tratamentos capilares personalizados são projetados para atender às necessidades individuais de cada cliente, garantindo resultados excepcionais.',
      },
    ];

    const randomCrimeDeDrogas = () => {
      const randomIndex = Math.floor(Math.random() * crimeDeDrogas.length);
      return crimeDeDrogas[randomIndex].description;
    };

    useEffect(() => {
      const savedDescription = localStorage.getItem(
        'randomAreaAtuacaoOptions3Text',
      );
      if (savedDescription) {
        setRandomAreaAtuacaoOptions3Text(savedDescription);
      } else {
        const newRandomDescription = randomCrimeDeDrogas();
        setRandomAreaAtuacaoOptions3Text(newRandomDescription);
        localStorage.setItem(
          'randomAreaAtuacaoOptions3Text',
          newRandomDescription,
        );
      }
    }, []);

    // TEXT 4
    const crimeDePessoais = [
      {
        description:
          'Nossos serviços de manicure e pedicure oferecem cuidados minuciosos para deixar suas unhas impecáveis e bem cuidadas.',
      },
      {
        description:
          'Utilizamos produtos de qualidade e técnicas precisas para realizar manicures e pedicures, garantindo resultados duradouros e de alta estética.',
      },
      {
        description:
          'Oferecemos uma ampla gama de opções de esmaltes, desde cores clássicas até as mais recentes tendências da moda.',
      },
      {
        description:
          'Nossos profissionais são habilidosos em nail art, proporcionando designs criativos e personalizados para unhas decoradas.',
      },
      {
        description:
          'Além da beleza estética, nos preocupamos com a saúde das suas unhas, realizando cuidados de cutículas e tratamentos para fortalecimento.',
      },
      {
        description:
          'Proporcionamos um ambiente relaxante para que você desfrute de uma experiência de manicure e pedicure completa e rejuvenescedora.',
      },
    ];
    const randomCrimeDePessoais = () => {
      const randomIndex = Math.floor(Math.random() * crimeDePessoais.length);
      return crimeDePessoais[randomIndex].description;
    };

    useEffect(() => {
      const savedDescription = localStorage.getItem(
        'randomAreaAtuacaoOptions4Text',
      );
      if (savedDescription) {
        setRandomAreaAtuacaoOptions4Text(savedDescription);
      } else {
        const newRandomDescription = randomCrimeDePessoais();
        setRandomAreaAtuacaoOptions4Text(newRandomDescription);
        localStorage.setItem(
          'randomAreaAtuacaoOptions4Text',
          newRandomDescription,
        );
      }
    }, []);

    // TEXT 5
    const crimeDeAssedio = [
      {
        description:
          'Nossos serviços de estética facial incluem limpeza de pele profunda, garantindo uma pele saudável, radiante e livre de impurezas.',
      },
      {
        description:
          'Utilizamos técnicas avançadas e produtos de qualidade para oferecer tratamentos de rejuvenescimento facial eficazes e resultados visíveis.',
      },
      {
        description:
          'Realizamos terapias de relaxamento facial, proporcionando um momento de cuidado e bem-estar para revigorar sua pele e sua mente.',
      },
      {
        description:
          'Oferecemos máscaras faciais personalizadas para atender às necessidades específicas da sua pele, como hidratação, clareamento ou controle de oleosidade.',
      },
      {
        description:
          'Nossos profissionais estão atualizados com as mais recentes tendências em estética facial, garantindo serviços de alta qualidade e resultados excepcionais.',
      },
      {
        description:
          'Realizamos uma análise detalhada da sua pele para oferecer recomendações personalizadas e criar um plano de tratamento facial sob medida para você.',
      },
    ];

    const randomCrimeDeAssedio = () => {
      const randomIndex = Math.floor(Math.random() * crimeDeAssedio.length);
      return crimeDeAssedio[randomIndex].description;
    };

    useEffect(() => {
      const savedDescription = localStorage.getItem(
        'randomAreaAtuacaoOptions5Text',
      );
      if (savedDescription) {
        setRandomAreaAtuacaoOptions5Text(savedDescription);
      } else {
        const newRandomDescription = randomCrimeDeAssedio();
        setRandomAreaAtuacaoOptions5Text(newRandomDescription);
        localStorage.setItem(
          'randomAreaAtuacaoOptions5Text',
          newRandomDescription,
        );
      }
    }, []);

    // TEXT 6

    const divorcio = [
      {
        description:
          'Nossos especialistas em coloração de cabelo criam resultados deslumbrantes, oferecendo uma ampla gama de opções de cores e técnicas personalizadas.',
      },
      {
        description:
          'Trabalhamos com produtos de alta qualidade para garantir uma coloração duradoura, vibrante e que preserve a saúde do seu cabelo.',
      },
      {
        description:
          'Oferecemos serviços de mechas, destaques, tinturas completas e técnicas de coloração sob medida para atender às suas preferências e estilo.',
      },
      {
        description:
          'Nossos profissionais são especialistas em tendências de coloração, proporcionando opções modernas, como ombré hair, balayage e coloração fantasia.',
      },
      {
        description:
          'Criamos looks personalizados para cada cliente, levando em consideração sua tonalidade de pele, cor dos olhos e estilo pessoal.',
      },
      {
        description:
          'Realizamos uma consulta detalhada para entender suas preferências e recomendar a coloração de cabelo perfeita para realçar sua beleza natural.',
      },
    ];
    const randomDivórcio = () => {
      const randomIndex = Math.floor(Math.random() * divorcio.length);
      return divorcio[randomIndex].description;
    };

    useEffect(() => {
      const savedDescription = localStorage.getItem(
        'randomAreaAtuacaoOptions6Text',
      );
      if (savedDescription) {
        setRandomAreaAtuacaoOptions6Text(savedDescription);
      } else {
        const newRandomDescription = randomDivórcio();
        setRandomAreaAtuacaoOptions6Text(newRandomDescription);
        localStorage.setItem(
          'randomAreaAtuacaoOptions6Text',
          newRandomDescription,
        );
      }
    }, []);

    //
    const footer = [
      {
        description:
          'Agende uma consulta com nossos especialistas em beleza hoje mesmo. Estamos aqui para ajudar você a alcançar seus objetivos de maneira eficiente e estilosa. Conte conosco para cuidar da sua beleza e garantir sua satisfação.',
      },
      {
        description:
          'Nosso salão de beleza é especializado em serviços de alta qualidade. Nossos profissionais experientes estão prontos para transformar seu visual, garantindo que você saia satisfeito e confiante. Entre em contato conosco e tenha uma equipe confiável ao seu lado.',
      },
      {
        description:
          'Se você está em busca de serviços de beleza, nossa equipe de profissionais está pronta para ajudar. Oferecemos uma variedade de tratamentos e cuidados estéticos, trabalhando incansavelmente para realçar sua beleza e garantir sua satisfação.',
      },
      {
        description:
          'Não deixe de cuidar da sua beleza. Nossa equipe de profissionais está aqui para você. Com uma abordagem personalizada e técnicas eficazes, buscamos alcançar os melhores resultados para realçar sua beleza e aumentar sua autoestima.',
      },
      {
        description:
          'No nosso salão de beleza, temos uma equipe de profissionais especializados prontos para ajudar. Com dedicação e habilidades estéticas, trabalharemos em conjunto para garantir a melhor experiência possível, cuidando da sua beleza e garantindo sua satisfação.',
      },
    ];

    const randomFooter = () => {
      const randomIndex = Math.floor(Math.random() * footer.length);
      return footer[randomIndex].description;
    };

    useEffect(() => {
      const savedDescription = localStorage.getItem('randomFooter');
      if (savedDescription) {
        setRandomFooterText(savedDescription);
      } else {
        const newRandomDescription = randomFooter();
        setRandomFooterText(newRandomDescription);
        localStorage.setItem('randomFooter', newRandomDescription);
      }
    }, []);


  }

  return (
    <Container>


      <HeaderFooter bgImage={imageUrlHeader} as="header" id="01">
        <h1 className={isInputFocused01 ? "active01" : ""} id="02" >{nomeEmpresaTemplate}</h1>
        <Line></Line>
        <h2 className={isInputFocused02 ? "active02" : ""} id="03" >{randomSubTitleHeaderText}</h2>
        <button className={isInputFocused03 ? "active03" : ""} >{faleConoscoText}</button>
      </HeaderFooter>

      <AboutSection>



        <FirstBlockAbout>
          <div className="container-block-about" id="04">
            <LineAbout></LineAbout>

          </div>
          <h2>Sobre nos

          </h2>
          <p className={isInputFocused04 ? "active04" : ""} >{randomTextoAboutText}</p>

        </FirstBlockAbout>
        <SecondBlockAbout>
          <img
            className={isInputFocused05 ? "active04" : ""}
            id="06"
            src={
              imageUrlAbout
            }
          ></img>
        </SecondBlockAbout >

      </AboutSection >
      <Parallax bgImage={imageUrlParallax} >
        <ParallaxContent>
          <h4 className={isInputFocused06 ? "active06" : ""} id="07">{randomSloganParallaxText}</h4>
          <LineParallax></LineParallax>
          <h2 className={isInputFocused07 ? "active07" : ""} id="08">{randomParallax01Text}</h2>
          <a>
            <Play size={32} weight="fill" />
          </a>
        </ParallaxContent>
      </Parallax>
      <PracticeArea>
        <h1>Áreas de atuação </h1>
        <h4 className={isInputFocused08 ? "active08" : ""} id="09">{randomAboutFirmaText}</h4>
        <button className={isInputFocused09 ? "active09" : ""} id="10" >{faleConoscoText}</button>

        <PracticeAreaContentAll>
          <PracticeAreaContent>
            <PracticeContent>
              <h3>01</h3>
              <h2 className={isInputFocused10 ? "active10" : ""} id="11" >{areaAtuacaoOptions1Text}</h2>
              <LineSmall></LineSmall>
              <p className={isInputFocused11 ? "active11" : ""} id="12">{randomAreaAtuacaoOptions1Text}</p>
            </PracticeContent>
            <PracticeContent>
              <h3>02</h3>
              <h2 className={isInputFocused12 ? "active12" : ""} id="13" >{areaAtuacaoOptions2Text}</h2>
              <LineSmall></LineSmall>
              <p className={isInputFocused13 ? "active13" : ""} id="14">{randomAreaAtuacaoOptions2Text}</p>
            </PracticeContent>
            <PracticeContent>
              <h3>03</h3>
              <h2 className={isInputFocused14 ? "active14" : ""} id="15">{areaAtuacaoOptions3Text}</h2>
              <LineSmall></LineSmall>
              <p className={isInputFocused15 ? "active15" : ""} id="16">{randomAreaAtuacaoOptions3Text}</p>
            </PracticeContent>
          </PracticeAreaContent>
        </PracticeAreaContentAll>
        <PracticeAreaContentAll>
          <PracticeAreaContent>
            <PracticeContent>
              <h3>04</h3>
              <h2 className={isInputFocused16 ? "active16" : ""} id="17">{areaAtuacaoOptions4Text}</h2>
              <LineSmall></LineSmall>
              <p className={isInputFocused17 ? "active17" : ""} id="18">{randomAreaAtuacaoOptions4Text}</p>
            </PracticeContent>
            <PracticeContent>
              <h3>05</h3>
              <h2 className={isInputFocused18 ? "active18" : ""} id="19">{areaAtuacaoOptions5Text}</h2>
              <LineSmall></LineSmall>
              <p className={isInputFocused19 ? "active19" : ""} id="20">{randomAreaAtuacaoOptions5Text}</p>
            </PracticeContent>
            <PracticeContent>
              <h3>06</h3>
              <h2 className={isInputFocused20 ? "active20" : ""} id="21" >{areaAtuacaoOptions6Text}</h2>
              <LineSmall></LineSmall>
              <p className={isInputFocused21 ? "active21" : ""} >{randomAreaAtuacaoOptions6Text}</p>
            </PracticeContent>
          </PracticeAreaContent>
        </PracticeAreaContentAll>
      </PracticeArea>
      <ParallaxContact bgImage={imageUrlParallaxSegunda}>
        <ParallaxContent>
          <h4 className={isInputFocused22 ? "active22" : ""} id="22">{randomSloganParallaxText}</h4>
          <LineParallax></LineParallax>
          <h2 className={isInputFocused23 ? "active23" : ""} id="23">{faleConoscoProfText}</h2>
          <h3 className={isInputFocused24 ? "active24" : ""} id="24">{randomFooterText}</h3>
          <Contact>
            <a>
              <Phone size={28} weight="fill" />
            </a>
            <h2 className={isInputFocused25 ? "active25" : ""} id="25">{numeroCellText}</h2>
          </Contact>
        </ParallaxContent>
      </ParallaxContact>
      <Footer>
        <div className="content-footer">
          <p>Copyright © 2023 Rei do Sites</p>
          <p>Powered by Rei do Sites</p>
        </div>
      </Footer>
    </Container>
  );
}

export default Template01;
