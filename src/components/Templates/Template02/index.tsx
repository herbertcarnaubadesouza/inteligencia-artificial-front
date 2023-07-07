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
import Loading from '../Loading/Loading';
const apiKey = process.env.REACT_APP_API_KEY;

function Template02({ isVisible02 }: Template02Props) {


  const localStorageValue = localStorage.getItem('loading');
  const [loading, setLoading] = useState(true);

  // TELA LOADING
  useEffect(() => {

    if (localStorageValue !== null) {
      setLoading(localStorageValue === 'true');
    }

    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  // Salvar o estado no localStorage
  useEffect(() => {
    localStorage.setItem('loading', loading.toString());
  }, [loading]);

  // Limpar o estado do localStorage ao encerrar o navegador
  window.addEventListener('beforeunload', () => {
    localStorage.removeItem('loading');
  });


  // ESTADOS TEMPLATE 
  const temaTemplateEscolhido = localStorage.getItem('textoClicado') // TEMA DO TEMPLATE
  const endercoTemplate = localStorage.getItem('Endereco') // ENDEREÇO DO TEMPLATE
  const nomeEmpresaTemplate = localStorage.getItem('nomeEmpresa') // NOME DA EMPRESA DO TEMPLATE

  const [imageUrlHeader, setImageUrlHeader] = useState(''); // IMAGEM HEADER
  const [imageUrlAbout, setImageUrlAbout] = useState(''); // IMAGEM ABOUT
  const [imageUrlParallax, setImageUrlParallax] = useState(''); // IMAGEM PARALLAX 
  const [imageUrlParallaxSegunda, setImageUrlParallaxSegunda] = useState('');  //  SEGUNDA IMAGEM PARALLAX 

  const [randomTitleFirmaText, setRandomTitleFirmaText] = useState(''); // TITULO
  const [randomSubTitleHeaderText2, setRandomSubTitleHeaderText2] = useState(''); // SUB TITULO
  const [randomSubTitleHeaderText, setRandomSubTitleHeaderText] = useState(''); // SUB TITULO
  const [randomTextoAboutText, setRandomTextoAboutText] = useState(''); // ABOUT SOBRE
  const [randomSloganParallaxTex, setRandomSloganParallaxText] = useState(''); // ABOUT PARALLAX
  const [randomParallax01Text, setRandomParallax01Text] = useState(''); // TEXTO PARALLAX
  const [randomAboutFirmaText, setRandomAboutFirmaText] = useState(''); // COMO A FIRMA TRABALHA
  const [randomAreaAtuacaoOptions1Text, setRandomAreaAtuacaoOptions1Text] = useState(''); // TEXTO 1
  const [randomAreaAtuacaoOptions2Text, setRandomAreaAtuacaoOptions2Text] = useState(''); // TEXTO 2
  const [randomAreaAtuacaoOptions3Text, setRandomAreaAtuacaoOptions3Text] = useState(''); // TEXTO 3
  const [randomAreaAtuacaoOptions4Text, setRandomAreaAtuacaoOptions4Text] = useState(''); // TEXTO 4
  const [randomAreaAtuacaoOptions5Text, setRandomAreaAtuacaoOptions5Text] = useState(''); // TEXTO 5
  const [randomAreaAtuacaoOptions6Text, setRandomAreaAtuacaoOptions6Text] = useState(''); // TEXTO 6
  const [randomFooterText, setRandomFooterText] = useState(''); // TEXT FOOTER 


  // ESTADOS STATICOS
  const [faleConoscoText, setFaleConoscoText] = useState("");
  const [faleConoscoProfText, setFaleConoscoProfText] = useState("");
  const [areaAtuacaoOptions1Text, setAreaAtuacaoOptions1Text] = useState("");
  const [areaAtuacaoOptions2Text, setAreaAtuacaoOptions2Text] = useState("");
  const [areaAtuacaoOptions3Text, setAreaAtuacaoOptions3Text] = useState("");
  const [areaAtuacaoOptions4Text, setAreaAtuacaoOptions4Text] = useState("");
  const [areaAtuacaoOptions5Text, setAreaAtuacaoOptions5Text] = useState("");
  const [areaAtuacaoOptions6Text, setAreaAtuacaoOptions6Text] = useState("");
  const [numeroCellText, setNumeroCellText] = useState("");




  useEffect(() => {
    console.log(temaTemplateEscolhido)
  }, [])


  // TEAMPLATE DOCTOR 
  if (temaTemplateEscolhido === "Doctor") {


    useEffect(() => {
      setFaleConoscoText("AGENDAR CONSULTA")
      setFaleConoscoProfText("Fale com nossos médicos hoje!")
      setAreaAtuacaoOptions1Text("Clínica Geral")
      setAreaAtuacaoOptions2Text("Pediatria")
      setAreaAtuacaoOptions3Text("Ginecologia e Obstetrícia")
      setAreaAtuacaoOptions4Text("Ortopedia")
      setAreaAtuacaoOptions5Text("Dermatologia")
      setAreaAtuacaoOptions6Text("Otorrinolaringologia")
      setNumeroCellText("(85) 9 8972-8250")



    }, [])

    // BANNER HEADER

    useEffect(() => {
      const fetchData = async () => {
        const bannerTemplateHeader = localStorage.getItem('bannerTemplateHeadertemplate02');

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

            localStorage.setItem('bannerTemplateHeadertemplate02', randomBanner.imgUrl);
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
        const bannerTemplateHeader = localStorage.getItem('bannerTemplateAbouttemplate02');

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

            localStorage.setItem('bannerTemplateAbouttemplate02', randomBanner.imgUrl);
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
        const bannerTemplateHeader = localStorage.getItem('bannerTemplateParallax01template02');

        if (!bannerTemplateHeader) {
          const advogadoDocRef = doc(db, 'sites', 'doctor');
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

            localStorage.setItem('bannerTemplateParallax01template02', randomBanner.imgUrl);
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
        const bannerTemplateHeader = localStorage.getItem('bannerTemplateParallax02template02');

        if (!bannerTemplateHeader) {
          const advogadoDocRef = doc(db, 'sites', 'doctor');
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
            setImageUrlParallaxSegunda(randomBanner.imgUrl);

            localStorage.setItem('bannerTemplateParallax02template02', randomBanner.imgUrl);
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
        description: "Luxury Legal Solutions",
      },
      {
        description: "Elite Advocates",
      },
      {
        description: "Prestige Law Firm",
      },
      {
        description: "Opulent Attorneys",
      },
      {
        description: "Exclusive Legal Advisors",
      },
    ];
    const randomTitleFirma = () => {
      const randomIndex = Math.floor(Math.random() * titleFirma.length);
      return titleFirma[randomIndex].description;
    };
    useEffect(() => {
      const savedDescription = localStorage.getItem('randomTitleFirmatemplate02');
      if (savedDescription) {
        setRandomTitleFirmaText(savedDescription);
      } else {
        const newRandomDescription = randomTitleFirma();
        setRandomTitleFirmaText(newRandomDescription);
        localStorage.setItem('randomTitleFirmatemplate02', newRandomDescription);
      }
    }, []);

    // SUB TITLES
    const subTitleHeader = [
      {
        description: "Cuidando da sua saúde com excelência",
      },
      {
        description: "Compromisso com a sua saúde e bem-estar",
      },
      {
        description: "Sua clínica médica de confiança",
      },
      {
        description: "Promovendo o seu sucesso em saúde",
      },
      {
        description: "Navegando por cuidados médicos complexos",
      },
    ];
    const randomSubTitleHeader2 = () => {
      const randomIndex = Math.floor(Math.random() * subTitleHeader.length);
      return subTitleHeader[randomIndex].description;
    };

    useEffect(() => {
      const savedSlogan = localStorage.getItem('randomSubTitleHeaderTexttemplate02');
      if (savedSlogan) {
        setRandomSubTitleHeaderText2(savedSlogan);
      } else {
        const newRandomSlogan = randomSubTitleHeader();
        setRandomSubTitleHeaderText2(newRandomSlogan);
        localStorage.setItem('randomSubTitleHeaderText2template02', newRandomSlogan);
      }
    }, []);

    const randomSubTitleHeader = () => {
      const randomIndex = Math.floor(Math.random() * subTitleHeader.length);
      return subTitleHeader[randomIndex].description;
    };

    useEffect(() => {
      const savedSlogan = localStorage.getItem('randomSubTitleHeaderTexttemplate02');
      if (savedSlogan) {
        setRandomSubTitleHeaderText(savedSlogan);
      } else {
        const newRandomSlogan = randomSubTitleHeader();
        setRandomSubTitleHeaderText(newRandomSlogan);
        localStorage.setItem('randomSubTitleHeaderTexttemplate02', newRandomSlogan);
      }
    }, []);

    // ABOUT
    const about = [
      {
        description: "Nossa clínica médica oferece serviços de saúde de qualidade e cuidados personalizados. Contamos com uma equipe experiente de médicos e profissionais de saúde dedicados a atender às necessidades dos nossos pacientes. Priorizamos o bem-estar e a satisfação de cada indivíduo, fornecendo tratamentos e diagnósticos precisos. Confie em nós para cuidar da sua saúde com excelência e comprometimento."
      },
      {
        description: "Somos uma clínica médica comprometida em fornecer atendimento médico confiável e eficiente. Com uma equipe especializada de médicos e especialistas, oferecemos serviços de saúde abrangentes para promover o seu bem-estar. Nossa abordagem multidisciplinar e ética profissional garantem um tratamento personalizado e de alta qualidade. Conte conosco para cuidar da sua saúde com dedicação e compromisso."
      },
      {
        description: "Nossa clínica médica é especializada em oferecer cuidados de saúde excepcionais e personalizados aos nossos pacientes. Com uma equipe de médicos altamente qualificados e dedicados, estamos prontos para lidar com uma variedade de condições médicas. Nosso compromisso com a excelência e a ética nos permite fornecer um serviço de qualidade, sempre visando o bem-estar dos nossos pacientes. Conte conosco para cuidar da sua saúde e proporcionar uma experiência médica confiável e profissional."
      },
      {
        description: "Na nossa clínica médica, acreditamos em um atendimento individualizado e atento às necessidades de cada paciente. Compreendemos a importância da sua saúde e nos dedicamos a fornecer cuidados personalizados. Nossa equipe de médicos experientes está pronta para atendê-lo com integridade e profissionalismo. Confie em nós para cuidar da sua saúde e fornecer as melhores soluções médicas para o seu bem-estar."
      },
      {
        description: "Conte com a nossa clínica médica para receber serviços de saúde de qualidade e confiança. Nossa equipe de médicos e profissionais de saúde altamente qualificados está comprometida em fornecer cuidados abrangentes e eficazes. Com experiência em diversas áreas médicas, estamos preparados para lidar com diferentes condições e promover sua saúde. Oferecemos um atendimento dedicado e acolhedor, garantindo que suas necessidades sejam atendidas com ética e competência."
      }
    ];

    // RANDOM TEXTO ABOUT 
    const randomTextoAbout = () => {
      const randomIndex = Math.floor(Math.random() * about.length);
      return about[randomIndex].description;
    };

    useEffect(() => {
      const savedDescription = localStorage.getItem('randomTextoAbouttemplate02');
      if (savedDescription) {
        setRandomTextoAboutText(savedDescription);
      } else {
        const newRandomDescription = randomTextoAbout();
        setRandomTextoAboutText(newRandomDescription);
        localStorage.setItem('randomTextoAbouttemplate02', newRandomDescription);
      }
    }, []);

    // PARALLAX SLOGAN 
    const sloganParallaxText = [
      {
        description: "CUIDANDO DA SUA SAÚDE COM EFICIÊNCIA",
      },
      {
        description: "PROTEGENDO O SEU BEM-ESTAR COM EXCELÊNCIA",
      },
      {
        description: "QUALIDADE MÉDICA PARA A SUA SEGURANÇA",
      },
      {
        description: "COMPROMETIDOS COM A SAÚDE E RESULTADOS POSITIVOS",
      },
      {
        description: "ATENDIMENTO DEDICADO PARA GARANTIR O SEU BEM-ESTAR",
      },
    ];



    const randomSloganParallaxText = () => {
      const randomIndex = Math.floor(Math.random() * sloganParallaxText.length);
      return sloganParallaxText[randomIndex].description;
    };

    useEffect(() => {
      const savedSlogan = localStorage.getItem('randomSloganParallaxTexttemplate02');
      if (savedSlogan) {
        setRandomSloganParallaxText(savedSlogan);
      } else {
        const newRandomSlogan = randomSloganParallaxText();
        setRandomSloganParallaxText(newRandomSlogan);
        localStorage.setItem('randomSloganParallaxTexttemplate02', newRandomSlogan);
      }
    }, []);





    //PARALLAX
    const parallax01 = [
      {
        description: "Nossa clínica médica é a escolha certa para você, pois contamos com uma equipe de profissionais altamente qualificados e comprometidos em cuidar da sua saúde com eficiência e atenção."
      },
      {
        description: "Somos uma clínica médica dedicada a oferecer serviços de saúde excepcionais. Nossa equipe de médicos talentosos e comprometidos está pronta para cuidar de você e proteger o seu bem-estar com dedicação e experiência."
      },
      {
        description: "Se você precisa de serviços médicos de confiança, nossa clínica é a resposta. Temos uma equipe experiente de médicos prontos para cuidar da sua saúde e oferecer soluções médicas eficazes e personalizadas."
      },
      {
        description: "Na nossa clínica médica, acreditamos que cada paciente é único. Por isso, nossa equipe dedicada está empenhada em fornecer a você um atendimento médico personalizado, com foco no seu bem-estar e eficiência."
      },
      {
        description: "Conte conosco, uma clínica médica comprometida com a excelência e o cuidado com a sua saúde. Nossa equipe de médicos qualificados está pronta para oferecer soluções médicas estratégicas e proteger o seu bem-estar de forma eficiente."
      }
    ];

    const randomParallax01 = () => {
      const randomIndex = Math.floor(Math.random() * parallax01.length);
      return parallax01[randomIndex].description;
    };

    useEffect(() => {
      const savedDescription = localStorage.getItem('randomParallax01template02');
      if (savedDescription) {
        setRandomParallax01Text(savedDescription);
      } else {
        const newRandomDescription = randomParallax01();
        setRandomParallax01Text(newRandomDescription);
        localStorage.setItem('randomParallax01template02', newRandomDescription);
      }
    }, []);



    // SOBRE A FIRMA 
    const aboutFirma = [
      {
        description: "Nossa clínica médica busca sempre a excelência em serviços, oferecendo atendimento personalizado e soluções médicas eficazes para nossos pacientes.",
      },
      {
        description: "Somos uma clínica médica comprometida em fornecer serviços de alta qualidade. Nosso atendimento é personalizado, e buscamos sempre soluções eficazes para atender às necessidades dos nossos pacientes.",
      },
      {
        description: "Na nossa clínica médica, priorizamos a excelência em cada caso. Nossa equipe está empenhada em fornecer atendimento personalizado e soluções médicas eficazes, buscando sempre os melhores resultados para nossos pacientes.",
      },
      {
        description: "Conte com nossa clínica médica para receber um atendimento de qualidade e soluções médicas eficazes. Estamos comprometidos em oferecer serviços personalizados e buscar os melhores resultados para nossos pacientes.",
      },
      {
        description: "Nossa clínica médica se dedica a oferecer serviços de excelência. Valorizamos o atendimento personalizado e buscamos sempre soluções médicas eficazes para atender às demandas e necessidades dos nossos pacientes.",
      },
    ];

    const randomAboutFirma = () => {
      const randomIndex = Math.floor(Math.random() * aboutFirma.length);
      return aboutFirma[randomIndex].description;
    };
    useEffect(() => {
      const savedDescription = localStorage.getItem('randomAboutFirmatemplate02');
      if (savedDescription) {
        setRandomAboutFirmaText(savedDescription);
      } else {
        const newRandomDescription = randomAboutFirma();
        setRandomAboutFirmaText(newRandomDescription);
        localStorage.setItem('randomAboutFirmatemplate02', newRandomDescription);
      }
    }, []);

    // TEXTO 1
    const assaltoDomestico = [
      {
        description: "Oferecemos cuidados abrangentes em nossa clínica geral, garantindo atendimento personalizado e soluções médicas eficientes para as necessidades dos nossos pacientes.",
      },
      {
        description: "Protegemos sua saúde com excelência na medicina geral, priorizando seu bem-estar e oferecendo serviços médicos de alta qualidade.",
      },
      {
        description: "Atuamos com comprometimento e dedicação em nossa clínica geral, buscando sempre a excelência nos cuidados médicos e proporcionando segurança e confiança aos nossos pacientes.",
      },
      {
        description: "Comprometidos com a saúde e resultados positivos na medicina geral, oferecemos uma abordagem dedicada para garantir seu bem-estar e cuidar da sua saúde de forma eficaz.",
      },
      {
        description: "Nossa clínica geral tem uma atuação dedicada em fornecer serviços médicos abrangentes, visando garantir sua saúde e oferecer soluções médicas eficientes para as suas necessidades.",
      },
    ];


    const randomAssaltoDomestico = () => {
      const randomIndex = Math.floor(Math.random() * assaltoDomestico.length);
      return assaltoDomestico[randomIndex].description;
    };

    useEffect(() => {
      const savedDescription = localStorage.getItem('randomAreaAtuacaoOptions1Texttemplate02');
      if (savedDescription) {
        setRandomAreaAtuacaoOptions1Text(savedDescription);
      } else {
        const newRandomDescription = randomAssaltoDomestico();
        setRandomAreaAtuacaoOptions1Text(newRandomDescription);
        localStorage.setItem('randomAreaAtuacaoOptions1Texttemplate02', newRandomDescription);
      }
    }, []);

    // TEXTO 2
    const crimeDeArmas = [
      {
        description: "Clínica especializada em Pediatria, oferecendo cuidados abrangentes e de qualidade para crianças."
      },
      {
        description: "Ambiente acolhedor e seguro para o cuidado exclusivo das crianças, com médicos pediatras experientes."
      },
      {
        description: "Clínica especializada em Pediatria, com equipe altamente capacitada e comprometida com a saúde infantil."
      },
      {
        description: "Cuidado personalizado e eficaz para a saúde das crianças, com equipe médica especializada em Pediatria."
      },
      {
        description: "Clínica de Pediatria confiável para cuidar da saúde dos seus filhos, com médicos pediatras experientes e atendimento personalizado."
      }
    ];



    const randomCrimeDeArmas = () => {
      const randomIndex = Math.floor(Math.random() * crimeDeArmas.length);
      return crimeDeArmas[randomIndex].description;
    };

    useEffect(() => {
      const savedDescription = localStorage.getItem('randomAreaAtuacaoOptions2Texttemplate02');
      if (savedDescription) {
        setRandomAreaAtuacaoOptions2Text(savedDescription);
      } else {
        const newRandomDescription = randomCrimeDeArmas();
        setRandomAreaAtuacaoOptions2Text(newRandomDescription);
        localStorage.setItem('randomAreaAtuacaoOptions2Texttemplate02', newRandomDescription);
      }
    }, []);

    // TEXT 3
    const crimeDeDrogas = [
      {
        description: "Oferecemos cuidados especializados em Ginecologia e Obstetrícia, defendendo a saúde e bem-estar das mulheres com soluções médicas eficazes.",
      },
      {
        description: "Protegemos os interesses das mulheres e promovemos a saúde na área de Ginecologia e Obstetrícia, com excelência e dedicação.",
      },
      {
        description: "Atuamos com advocacia de alta qualidade na Ginecologia e Obstetrícia, garantindo segurança, justiça e cuidados especializados para as necessidades das mulheres.",
      },
      {
        description: "Comprometidos com a justiça e resultados positivos na área de Ginecologia e Obstetrícia, oferecemos uma atuação dedicada para garantir os direitos e a saúde das mulheres.",
      },
      {
        description: "Oferecemos atendimento dedicado e seguro na área de Ginecologia e Obstetrícia, buscando garantir os direitos e a segurança das mulheres em casos de necessidade.",
      },
    ];


    const randomCrimeDeDrogas = () => {
      const randomIndex = Math.floor(Math.random() * crimeDeDrogas.length);
      return crimeDeDrogas[randomIndex].description;
    };



    useEffect(() => {
      const savedDescription = localStorage.getItem('randomAreaAtuacaoOptions3Texttemplate02');
      if (savedDescription) {
        setRandomAreaAtuacaoOptions3Text(savedDescription);
      } else {
        const newRandomDescription = randomCrimeDeDrogas();
        setRandomAreaAtuacaoOptions3Text(newRandomDescription);
        localStorage.setItem('randomAreaAtuacaoOptions3Texttemplate02', newRandomDescription);
      }
    }, []);

    // TEXT 4 
    const crimeDePessoais = [
      {
        description: "Oferecemos cuidados especializados em Ortopedia, defendendo seus direitos e buscando soluções eficazes em casos de lesões pessoais.",
      },
      {
        description: "Protegemos seus interesses e lutamos com excelência em casos de crimes pessoais relacionados à área de Ortopedia.",
      },
      {
        description: "Conte com nossa advocacia de alta qualidade na área de Ortopedia para garantir sua segurança e justiça em casos de crimes pessoais.",
      },
      {
        description: "Estamos comprometidos com a justiça e buscamos resultados positivos em casos de crimes pessoais, oferecendo uma atuação dedicada para garantir seus direitos e segurança.",
      },
      {
        description: "Nossa atuação na área de Ortopedia visa garantir seus direitos e segurança em casos de crimes pessoais, com uma abordagem dedicada e eficaz.",
      },
    ];


    const randomCrimeDePessoais = () => {
      const randomIndex = Math.floor(Math.random() * crimeDePessoais.length);
      return crimeDePessoais[randomIndex].description;
    };



    useEffect(() => {
      const savedDescription = localStorage.getItem('randomAreaAtuacaoOptions4Texttemplate02');
      if (savedDescription) {
        setRandomAreaAtuacaoOptions4Text(savedDescription);
      } else {
        const newRandomDescription = randomCrimeDePessoais();
        setRandomAreaAtuacaoOptions4Text(newRandomDescription);
        localStorage.setItem('randomAreaAtuacaoOptions4Texttemplate02', newRandomDescription);
      }
    }, []);






    // TEXT 5

    const crimeDeAssedio = [
      {
        description: "Oferecemos cuidados especializados em Dermatologia, defendendo seus direitos e buscando soluções eficazes em casos de crimes de assédio.",
      },
      {
        description: "Protegemos seus interesses e lutamos com excelência em casos de crimes de assédio relacionados à área de Dermatologia.",
      },
      {
        description: "Conte com nossa advocacia de alta qualidade na área de Dermatologia para garantir sua segurança e justiça em casos de crimes de assédio.",
      },
      {
        description: "Estamos comprometidos com a justiça e buscamos resultados positivos em casos de crimes de assédio, oferecendo uma atuação dedicada para garantir seus direitos e segurança.",
      },
      {
        description: "Nossa atuação na área de Dermatologia visa garantir seus direitos e segurança em casos de crimes de assédio, com uma abordagem dedicada e eficaz.",
      },
    ];

    const randomCrimeDeAssedio = () => {
      const randomIndex = Math.floor(Math.random() * crimeDeAssedio.length);
      return crimeDeAssedio[randomIndex].description;
    };



    useEffect(() => {
      const savedDescription = localStorage.getItem('randomAreaAtuacaoOptions5Texttemplate02');
      if (savedDescription) {
        setRandomAreaAtuacaoOptions5Text(savedDescription);
      } else {
        const newRandomDescription = randomCrimeDeAssedio();
        setRandomAreaAtuacaoOptions5Text(newRandomDescription);
        localStorage.setItem('randomAreaAtuacaoOptions5Texttemplate02', newRandomDescription);
      }
    }, []);


    // TEXT 6

    const divorcio = [
      {
        description: "Oferecemos suporte jurídico especializado em casos de Otorrinolaringologia, buscando soluções eficazes em questões relacionadas à área.",
      },
      {
        description: "Protegemos seus interesses e lutamos pela justiça em casos de Otorrinolaringologia com excelência.",
      },
      {
        description: "Advocacia de alta qualidade para garantir seus direitos e segurança em questões legais envolvendo Otorrinolaringologia.",
      },
      {
        description: "Comprometidos em obter resultados positivos e equitativos em casos relacionados à Otorrinolaringologia.",
      },
      {
        description: "Atuação dedicada para garantir uma abordagem justa e eficaz em questões legais envolvendo Otorrinolaringologia.",
      },
    ];


    const randomDivórcio = () => {
      const randomIndex = Math.floor(Math.random() * divorcio.length);
      return divorcio[randomIndex].description;
    };



    useEffect(() => {
      const savedDescription = localStorage.getItem('randomAreaAtuacaoOptions6Texttemplate02');
      if (savedDescription) {
        setRandomAreaAtuacaoOptions6Text(savedDescription);
      } else {
        const newRandomDescription = randomDivórcio();
        setRandomAreaAtuacaoOptions6Text(newRandomDescription);
        localStorage.setItem('randomAreaAtuacaoOptions6Texttemplate02', newRandomDescription);
      }
    }, []);








    //
    const footer = [
      {
        description: "Entre em contato conosco hoje mesmo para marcar uma consulta e cuidar da sua saúde. Nossa equipe médica altamente qualificada está pronta para oferecer o melhor atendimento e soluções médicas personalizadas.",
      },
      {
        description: "Na nossa clínica médica, priorizamos o seu bem-estar. Oferecemos uma ampla gama de serviços médicos de alta qualidade, garantindo cuidados excepcionais para você e sua família.",
      },
      {
        description: "Estamos comprometidos em fornecer atendimento médico de excelência. Nossa equipe de profissionais dedicados está pronta para cuidar da sua saúde, fornecendo diagnósticos precisos, tratamentos eficazes e orientações personalizadas.",
      },
      {
        description: "Sua saúde é nossa prioridade. Nossa clínica médica oferece uma abordagem abrangente para atender às suas necessidades. Conte com nossa equipe de médicos especializados para cuidar de você com atenção e comprometimento.",
      },
      {
        description: "Valorizamos sua saúde e bem-estar. Na nossa clínica médica, você encontrará profissionais experientes e dedicados, prontos para oferecer o melhor cuidado médico possível. Agende uma consulta e confie em nós para cuidar de você.",
      },
    ];



    const randomFooter = () => {
      const randomIndex = Math.floor(Math.random() * footer.length);
      return footer[randomIndex].description;
    };



    useEffect(() => {
      const savedDescription = localStorage.getItem('randomFootertemplate02');
      if (savedDescription) {
        setRandomFooterText(savedDescription);
      } else {
        const newRandomDescription = randomFooter();
        setRandomFooterText(newRandomDescription);
        localStorage.setItem('randomFootertemplate02', newRandomDescription);
      }
    }, []);

    useEffect(() => {
      const handleBeforeUnload = () => {
        const keysToKeep = ['textoClicado', 'nomeEmpresa', 'Endereco'];
        const keysToRemove = [];

        for (let i = 0; i < localStorage.length; i++) {
          const key = localStorage.key(i);
          if (key !== null && !keysToKeep.includes(key)) {
            keysToRemove.push(key);
          }
        }

        keysToRemove.forEach(key => {
          localStorage.removeItem(key);
          console.log(key);
        });
      };

      window.addEventListener('beforeunload', handleBeforeUnload);

      return () => {
        window.removeEventListener('beforeunload', handleBeforeUnload);
      };
    }, []);


  }

  if (temaTemplateEscolhido === "Advogado") {

    useEffect(() => {
      setFaleConoscoText("Fale conosco agora")
      setFaleConoscoProfText("Fale com nossos advogados hoje!")
      setAreaAtuacaoOptions1Text("Assalto doméstico")
      setAreaAtuacaoOptions2Text("Crimes de armas")
      setAreaAtuacaoOptions3Text("Crimes de drogas")
      setAreaAtuacaoOptions4Text("Crimes de pessoais")
      setAreaAtuacaoOptions5Text("Crimes de assedio")
      setAreaAtuacaoOptions6Text("Crimes de Divorcios")
      setNumeroCellText("(85) 9 8972-8250")



    }, [])

    // BANNER HEADER

    useEffect(() => {
      const fetchData = async () => {
        const bannerTemplateHeader = localStorage.getItem('bannerTemplateHeadertemplate02');

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

            localStorage.setItem('bannerTemplateHeadertemplate02', randomBanner.imgUrl);
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
        const bannerTemplateHeader = localStorage.getItem('bannerTemplateAbouttemplate02');

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

            localStorage.setItem('bannerTemplateAbouttemplate02', randomBanner.imgUrl);
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
        const bannerTemplateHeader = localStorage.getItem('bannerTemplateParallax01template02');

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

            localStorage.setItem('bannerTemplateParallax01template02', randomBanner.imgUrl);
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
        const bannerTemplateHeader = localStorage.getItem('bannerTemplateParallax02template02');

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

            localStorage.setItem('bannerTemplateParallax02template02', randomBanner.imgUrl);
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
        description: "Luxury Legal Solutions",
      },
      {
        description: "Elite Advocates",
      },
      {
        description: "Prestige Law Firm",
      },
      {
        description: "Opulent Attorneys",
      },
      {
        description: "Exclusive Legal Advisors",
      },
    ];
    const randomTitleFirma = () => {
      const randomIndex = Math.floor(Math.random() * titleFirma.length);
      return titleFirma[randomIndex].description;
    };
    useEffect(() => {
      const savedDescription = localStorage.getItem('randomTitleFirmatemplate02');
      if (savedDescription) {
        setRandomTitleFirmaText(savedDescription);
      } else {
        const newRandomDescription = randomTitleFirma();
        setRandomTitleFirmaText(newRandomDescription);
        localStorage.setItem('randomTitleFirmatemplate02', newRandomDescription);
      }
    }, []);

    // SUB TITLES
    const subTitleHeader = [
      {
        description: "Defendendo seus direitos com excelência",
      },
      {
        description: "Justiça e integridade em cada caso",
      },
      {
        description: "Seus parceiros jurídicos de confiança",
      },
      {
        description: "Advogando pelo seu sucesso",
      },
      {
        description: "Navegando em questões legais complexas",
      },
    ];
    useEffect(() => {
      const savedSlogan = localStorage.getItem('randomSubTitleHeaderTexttemplate02');
      if (savedSlogan) {
        setRandomSubTitleHeaderText2(savedSlogan);
      } else {
        const newRandomSlogan = randomSubTitleHeader();
        setRandomSubTitleHeaderText2(newRandomSlogan);
        localStorage.setItem('randomSubTitleHeaderText2template02', newRandomSlogan);
      }
    }, []);



    const randomSubTitleHeader = () => {
      const randomIndex = Math.floor(Math.random() * subTitleHeader.length);
      return subTitleHeader[randomIndex].description;
    };

    useEffect(() => {
      const savedSlogan = localStorage.getItem('randomSubTitleHeaderTexttemplate02');
      if (savedSlogan) {
        setRandomSubTitleHeaderText(savedSlogan);
      } else {
        const newRandomSlogan = randomSubTitleHeader();
        setRandomSubTitleHeaderText(newRandomSlogan);
        localStorage.setItem('randomSubTitleHeaderTexttemplate02', newRandomSlogan);
      }
    }, []);

    // ABOUT
    const about = [
      {
        description: "Nossa firma de advocacia oferece soluções jurídicas especializadas e eficazes. Contamos com uma equipe experiente e dedicada, pronta para representar seus interesses com ética e profissionalismo. Priorizamos a excelência em cada caso, buscando resultados favoráveis para nossos clientes. Confie em nós para resolver suas questões legais com confiança e competência."
      },
      {
        description: "Somos uma firma de advocacia comprometida em fornecer soluções jurídicas confiáveis e eficientes. Com uma equipe experiente e especializada, oferecemos serviços jurídicos personalizados para atender às necessidades dos nossos clientes. Nossa ética profissional e integridade são fundamentais em todas as nossas interações. Conte conosco para representar seus interesses legais com dedicação e excelência."
      },
      {
        description: "Nossa firma de advocacia é especializada em oferecer soluções jurídicas eficazes e personalizadas para nossos clientes. Com uma equipe de advogados experientes e dedicados, estamos prontos para lidar com uma ampla gama de questões legais. Nosso compromisso com a excelência e a ética nos permite fornecer um serviço de qualidade, sempre buscando alcançar os melhores resultados para nossos clientes. Conte conosco para representar seus interesses e proteger seus direitos com dedicação e profissionalismo."
      },
      {
        description: "Conte com nossa firma de advocacia para obter serviços jurídicos de qualidade. Nossa equipe de advogados altamente qualificados está comprometida em fornecer soluções eficientes e personalizadas. Com experiência em diversas áreas do direito, estamos preparados para lidar com casos complexos e proteger seus interesses. Oferecemos um atendimento dedicado e confidencial, garantindo a defesa de seus direitos com ética e competência."
      },
      {
        description: "Na nossa firma de advocacia, acreditamos em uma abordagem personalizada para cada cliente. Compreendemos a importância de suas necessidades legais e nos dedicamos a fornecer soluções sob medida. Nossa equipe de advogados especializados está pronta para representá-lo com integridade e profissionalismo. Confie em nós para garantir seus direitos e encontrar as melhores estratégias jurídicas para seu caso."
      }
    ];
    // RANDOM TEXTO ABOUT 
    const randomTextoAbout = () => {
      const randomIndex = Math.floor(Math.random() * about.length);
      return about[randomIndex].description;
    };

    useEffect(() => {
      const savedDescription = localStorage.getItem('randomTextoAbouttemplate02');
      if (savedDescription) {
        setRandomTextoAboutText(savedDescription);
      } else {
        const newRandomDescription = randomTextoAbout();
        setRandomTextoAboutText(newRandomDescription);
        localStorage.setItem('randomTextoAbouttemplate02', newRandomDescription);
      }
    }, []);

    // PARALLAX SLOGAN 

    const sloganParallaxText = [
      {
        description: "DEFENDEMOS SEUS DIREITOS COM SOLUÇÃO EFICIENTE",
      },
      {
        description: "PROTEGEMOS SEUS INTERESSES COM EXCELÊNCIA",
      },
      {
        description: "ADVOCACIA DE ALTA QUALIDADE PARA SUA SEGURANÇA",
      },
      {
        description: "COMPROMETIDOS COM A JUSTIÇA E RESULTADOS POSITIVOS",
      },
      {
        description: "ATUAÇÃO DEDICADA PARA GARANTIR SEUS DIREITOS",
      },
    ];


    const randomSloganParallaxText = () => {
      const randomIndex = Math.floor(Math.random() * sloganParallaxText.length);
      return sloganParallaxText[randomIndex].description;
    };

    useEffect(() => {
      const savedSlogan = localStorage.getItem('randomSloganParallaxTexttemplate02');
      if (savedSlogan) {
        setRandomSloganParallaxText(savedSlogan);
      } else {
        const newRandomSlogan = randomSloganParallaxText();
        setRandomSloganParallaxText(newRandomSlogan);
        localStorage.setItem('randomSloganParallaxTexttemplate02', newRandomSlogan);
      }
    }, []);





    //PARALLAX
    const parallax01 = [
      {
        description: "Nossa empresa de advocacia é a escolha certa para você, pois contamos com uma equipe de profissionais altamente qualificados e comprometidos em defender seus interesses com eficiência e agilidade."
      },
      {
        description: "Somos uma empresa de advocacia dedicada a oferecer serviços jurídicos excepcionais. Nossa equipe de advogados talentosos e comprometidos está pronta para representá-lo e proteger seus interesses com dedicação e experiência."
      },
      {
        description: "Se você precisa de serviços jurídicos de confiança, nossa empresa de advocacia é a resposta. Temos uma equipe experiente de advogados prontos para lutar por seus direitos e oferecer soluções jurídicas eficazes e personalizadas."
      },
      {
        description: "Na nossa empresa de advocacia, acreditamos que cada caso é único. Por isso, nossa equipe dedicada está empenhada em fornecer a você um serviço jurídico personalizado, com foco em resultados e eficiência."
      },
      {
        description: "Conte conosco, uma empresa de advocacia comprometida com a excelência e a defesa de seus interesses. Nossa equipe de advogados qualificados está pronta para oferecer soluções jurídicas estratégicas e proteger seus direitos de forma eficiente."
      }
    ];

    const randomParallax01 = () => {
      const randomIndex = Math.floor(Math.random() * parallax01.length);
      return parallax01[randomIndex].description;
    };

    useEffect(() => {
      const savedDescription = localStorage.getItem('randomParallax01template02');
      if (savedDescription) {
        setRandomParallax01Text(savedDescription);
      } else {
        const newRandomDescription = randomParallax01();
        setRandomParallax01Text(newRandomDescription);
        localStorage.setItem('randomParallax01template02', newRandomDescription);
      }
    }, []);



    // SOBRE A FIRMA 
    const aboutFirma = [
      {
        description: "Nossa firma de advocacia busca sempre a excelência em serviços, oferecendo atendimento personalizado e soluções jurídicas eficazes para nossos clientes.",
      },
      {
        description: "Somos uma firma de advocacia comprometida em fornecer serviços jurídicos de alta qualidade. Nosso atendimento é personalizado, e buscamos sempre soluções eficazes para atender às necessidades dos nossos clientes.",
      },
      {
        description: "Na nossa firma de advocacia, priorizamos a excelência em cada caso. Nossa equipe está empenhada em fornecer atendimento personalizado e soluções jurídicas eficazes, buscando sempre os melhores resultados para nossos clientes.",
      },
      {
        description: "Conte com nossa firma de advocacia para receber um atendimento de qualidade e soluções jurídicas eficazes. Estamos comprometidos em oferecer serviços personalizados e buscar os melhores resultados para nossos clientes.",
      },
      {
        description: "Nossa firma de advocacia se dedica a oferecer serviços de excelência. Valorizamos o atendimento personalizado e buscamos sempre soluções jurídicas eficazes para atender às demandas e necessidades dos nossos clientes.",
      },
    ];
    const randomAboutFirma = () => {
      const randomIndex = Math.floor(Math.random() * aboutFirma.length);
      return aboutFirma[randomIndex].description;
    };
    useEffect(() => {
      const savedDescription = localStorage.getItem('randomAboutFirmatemplate02');
      if (savedDescription) {
        setRandomAboutFirmaText(savedDescription);
      } else {
        const newRandomDescription = randomAboutFirma();
        setRandomAboutFirmaText(newRandomDescription);
        localStorage.setItem('randomAboutFirmatemplate02', newRandomDescription);
      }
    }, []);

    // TEXTO 1
    const assaltoDomestico = [
      {
        description: "Defendemos seus direitos, proporcionando soluções eficientes para casos de assalto doméstico.",
      },
      {
        description: "Protegemos seus interesses com excelência na advocacia contra a violência doméstica.",
      },
      {
        description: "Alta qualidade na advocacia, garantindo segurança e justiça nos casos de assalto doméstico.",
      },
      {
        description: "Comprometidos com a justiça e resultados positivos em casos de violência doméstica.",
      },
      {
        description: "Atuação dedicada para garantir seus direitos e segurança em casos de assalto doméstico.",
      },
    ];

    const randomAssaltoDomestico = () => {
      const randomIndex = Math.floor(Math.random() * assaltoDomestico.length);
      return assaltoDomestico[randomIndex].description;
    };

    useEffect(() => {
      const savedDescription = localStorage.getItem('randomAreaAtuacaoOptions1Texttemplate02');
      if (savedDescription) {
        setRandomAreaAtuacaoOptions1Text(savedDescription);
      } else {
        const newRandomDescription = randomAssaltoDomestico();
        setRandomAreaAtuacaoOptions1Text(newRandomDescription);
        localStorage.setItem('randomAreaAtuacaoOptions1Texttemplate02', newRandomDescription);
      }
    }, []);

    // TEXTO 2
    const crimeDeArmas = [
      {
        description: "Defendemos seus direitos em casos de crimes de armas, buscando soluções eficazes.",
      },
      {
        description: "Protegemos seus interesses e lutamos contra crimes de armas com excelência.",
      },
      {
        description: "Advocacia de alta qualidade para sua segurança e justiça em casos de crimes de armas.",
      },
      {
        description: "Comprometidos com a justiça e resultados positivos em casos de crimes envolvendo armas.",
      },
      {
        description: "Atuação dedicada para garantir seus direitos e segurança em casos de crimes de armas.",
      },
    ]
    const randomCrimeDeArmas = () => {
      const randomIndex = Math.floor(Math.random() * crimeDeArmas.length);
      return crimeDeArmas[randomIndex].description;
    };

    useEffect(() => {
      const savedDescription = localStorage.getItem('randomAreaAtuacaoOptions2Texttemplate02');
      if (savedDescription) {
        setRandomAreaAtuacaoOptions2Text(savedDescription);
      } else {
        const newRandomDescription = randomCrimeDeArmas();
        setRandomAreaAtuacaoOptions2Text(newRandomDescription);
        localStorage.setItem('randomAreaAtuacaoOptions2Texttemplate02', newRandomDescription);
      }
    }, []);

    // TEXT 3
    const crimeDeDrogas = [
      {
        description: "Defendemos seus direitos em casos de crimes de drogas, buscando soluções eficazes.",
      },
      {
        description: "Protegemos seus interesses e lutamos contra crimes de drogas com excelência.",
      },
      {
        description: "Advocacia de alta qualidade para sua segurança e justiça em casos de crimes de drogas.",
      },
      {
        description: "Comprometidos com a justiça e resultados positivos em casos de crimes envolvendo drogas.",
      },
      {
        description: "Atuação dedicada para garantir seus direitos e segurança em casos de crimes de drogas.",
      },
    ];

    const randomCrimeDeDrogas = () => {
      const randomIndex = Math.floor(Math.random() * crimeDeDrogas.length);
      return crimeDeDrogas[randomIndex].description;
    };



    useEffect(() => {
      const savedDescription = localStorage.getItem('randomAreaAtuacaoOptions3Texttemplate02');
      if (savedDescription) {
        setRandomAreaAtuacaoOptions3Text(savedDescription);
      } else {
        const newRandomDescription = randomCrimeDeDrogas();
        setRandomAreaAtuacaoOptions3Text(newRandomDescription);
        localStorage.setItem('randomAreaAtuacaoOptions3Texttemplate02', newRandomDescription);
      }
    }, []);

    // TEXT 4 
    const crimeDePessoais = [
      {
        description: "Defendemos seus direitos em casos de crimes pessoais, buscando soluções eficazes.",
      },
      {
        description: "Protegemos seus interesses e lutamos contra crimes pessoais com excelência.",
      },
      {
        description: "Advocacia de alta qualidade para sua segurança e justiça em casos de crimes pessoais.",
      },
      {
        description: "Comprometidos com a justiça e resultados positivos em casos de crimes pessoais.",
      },
      {
        description: "Atuação dedicada para garantir seus direitos e segurança em casos de crimes pessoais.",
      },
    ];

    const randomCrimeDePessoais = () => {
      const randomIndex = Math.floor(Math.random() * crimeDePessoais.length);
      return crimeDePessoais[randomIndex].description;
    };



    useEffect(() => {
      const savedDescription = localStorage.getItem('randomAreaAtuacaoOptions4Texttemplate02');
      if (savedDescription) {
        setRandomAreaAtuacaoOptions4Text(savedDescription);
      } else {
        const newRandomDescription = randomCrimeDePessoais();
        setRandomAreaAtuacaoOptions4Text(newRandomDescription);
        localStorage.setItem('randomAreaAtuacaoOptions4Texttemplate02', newRandomDescription);
      }
    }, []);






    // TEXT 5
    const crimeDeAssedio = [
      {
        description: "Defendemos seus direitos em casos de crimes de assédio, buscando soluções eficazes.",
      },
      {
        description: "Protegemos seus interesses e lutamos contra crimes de assédio com excelência.",
      },
      {
        description: "Advocacia de alta qualidade para sua segurança e justiça em casos de crimes de assédio.",
      },
      {
        description: "Comprometidos com a justiça e resultados positivos em casos de crimes de assédio.",
      },
      {
        description: "Atuação dedicada para garantir seus direitos e segurança em casos de crimes de assédio.",
      },
    ];

    const randomCrimeDeAssedio = () => {
      const randomIndex = Math.floor(Math.random() * crimeDeAssedio.length);
      return crimeDeAssedio[randomIndex].description;
    };



    useEffect(() => {
      const savedDescription = localStorage.getItem('randomAreaAtuacaoOptions5Texttemplate02');
      if (savedDescription) {
        setRandomAreaAtuacaoOptions5Text(savedDescription);
      } else {
        const newRandomDescription = randomCrimeDeAssedio();
        setRandomAreaAtuacaoOptions5Text(newRandomDescription);
        localStorage.setItem('randomAreaAtuacaoOptions5Texttemplate02', newRandomDescription);
      }
    }, []);


    // TEXT 6

    const divorcio = [
      {
        description: "Oferecemos suporte jurídico especializado em casos de divórcio, buscando soluções eficazes.",
      },
      {
        description: "Protegemos seus interesses e lutamos pela justiça em casos de divórcio com excelência.",
      },
      {
        description: "Advocacia de alta qualidade para garantir seus direitos e segurança no processo de divórcio.",
      },
      {
        description: "Comprometidos em obter resultados positivos e equitativos em casos de divórcio.",
      },
      {
        description: "Atuação dedicada para garantir uma transição suave e justa durante o divórcio.",
      },
    ];

    const randomDivórcio = () => {
      const randomIndex = Math.floor(Math.random() * divorcio.length);
      return divorcio[randomIndex].description;
    };



    useEffect(() => {
      const savedDescription = localStorage.getItem('randomAreaAtuacaoOptions6Texttemplate02');
      if (savedDescription) {
        setRandomAreaAtuacaoOptions6Text(savedDescription);
      } else {
        const newRandomDescription = randomDivórcio();
        setRandomAreaAtuacaoOptions6Text(newRandomDescription);
        localStorage.setItem('randomAreaAtuacaoOptions6Texttemplate02', newRandomDescription);
      }
    }, []);








    //
    const footer = [
      {
        description: "Fale com nossos advogados de defesa criminal hoje. Estamos aqui para ajudar você a alcançar seus objetivos de maneira legal e eficiente. Conte conosco para proteger seus direitos e liberdade.",
      },
      {
        description: "Nossa firma de advocacia é especializada em defesa criminal. Nossos advogados experientes estão prontos para lutar em seu nome, garantindo que seus direitos sejam protegidos. Entre em contato conosco e tenha uma equipe confiável ao seu lado.",
      },
      {
        description: "Se você está enfrentando acusações criminais, nossa equipe de advogados de defesa criminal está pronta para ajudar. Oferecemos representação legal experiente e eficiente, trabalhando incansavelmente para proteger seus direitos e liberdade.",
      },
      {
        description: "Não enfrente acusações criminais sozinho. Nossa equipe de advogados de defesa criminal está aqui para você. Com uma abordagem legal sólida e estratégias eficazes, buscamos alcançar os melhores resultados para proteger seus direitos e liberdade.",
      },
      {
        description: "Na nossa firma de advocacia, temos uma equipe de advogados especializados em defesa criminal prontos para ajudar. Com dedicação e habilidades jurídicas, trabalharemos em conjunto para garantir a melhor defesa possível, protegendo seus direitos e alcançando resultados favoráveis.",
      },
    ];

    const randomFooter = () => {
      const randomIndex = Math.floor(Math.random() * footer.length);
      return footer[randomIndex].description;
    };



    useEffect(() => {
      const savedDescription = localStorage.getItem('randomFootertemplate02');
      if (savedDescription) {
        setRandomFooterText(savedDescription);
      } else {
        const newRandomDescription = randomFooter();
        setRandomFooterText(newRandomDescription);
        localStorage.setItem('randomFootertemplate02', newRandomDescription);
      }
    }, []);

    const handleBeforeUnload = () => {
      const keysToKeep = ['textoClicado', 'nomeEmpresa', 'Endereco'];
      const keysToRemove = [];

      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key !== null && !keysToKeep.includes(key)) {
          keysToRemove.push(key);
        }
      }

      keysToRemove.forEach((key) => {
        localStorage.removeItem(key);
        console.log(key);
      });
    };

    const handlePopState = () => {
      handleBeforeUnload();
    };

    useEffect(() => {
      window.addEventListener('beforeunload', handleBeforeUnload);
      window.addEventListener('popstate', handlePopState);

      return () => {
        window.removeEventListener('beforeunload', handleBeforeUnload);
        window.removeEventListener('popstate', handlePopState);
      };
    }, []);


  }














  return (
    <Container>
      {loading ? <Loading /> : null}
      <HeaderBlock bgImage={imageUrlHeader}>
        <div className="container-block-header">
          <LineHeader></LineHeader>
          <span> {randomSubTitleHeaderText}</span>
        </div>
        <h1>
          {nomeEmpresaTemplate}
        </h1>
        <LineHeaderBottom></LineHeaderBottom>
        <div className="container-header-footer-block">
          <div>
            <div className="header-footer-block">
              <PhoneCall size={16} weight="fill" />
              <span>Entre em contato</span>
            </div>
            <h4>{numeroCellText}</h4>
          </div>
        </div>
      </HeaderBlock>
      <AboutSection>
        <FirstBlockAbout>
          <div className="container-block-about">
            <LineAbout></LineAbout>
            <span>{randomSubTitleHeaderText2} </span>
          </div>
          <h2>Você veio ao lugar certo</h2>
          <p>{randomTextoAboutText}</p>

        </FirstBlockAbout>
        <SecondBlockAbout>
          <img
            src={
              imageUrlAbout
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
                <h3>{areaAtuacaoOptions1Text}</h3>
                <p>{randomAreaAtuacaoOptions1Text}</p>
              </div>
              <div className="content-block-atuacao">
                <NotePencil size={32} weight="bold" />
                <h3>{areaAtuacaoOptions2Text}</h3>
                <p>{randomAreaAtuacaoOptions2Text}</p>
              </div>
              <div className="content-block-atuacao">
                <Handshake size={32} weight="bold" />
                <h3>{areaAtuacaoOptions3Text}</h3>
                <p>{randomAreaAtuacaoOptions3Text}</p>
              </div>

            </Row>
            <Row>
              <div className="content-block-atuacao">
                <Heart size={32} weight="bold" />
                <h3>{areaAtuacaoOptions4Text}</h3>
                <p>{randomAreaAtuacaoOptions4Text}</p>
              </div>
              <div className="content-block-atuacao">
                <User size={32} weight="bold" />
                <h3>{areaAtuacaoOptions5Text}</h3>
                <p>{randomAreaAtuacaoOptions5Text}</p>
              </div>
              <div className="content-block-atuacao">
                <Scroll size={32} weight="bold" />
                <h3>{areaAtuacaoOptions6Text}</h3>
                <p>{randomAreaAtuacaoOptions6Text}</p>
              </div>



            </Row>
          </Column>
        </div>
      </ServicesSection>
      <WhyUs bgImage={imageUrlParallax}>
        <div className="full-content-whyus">
          <div className="left-side-whyus">
            <div className="container-block-header">
              <LineHeader></LineHeader>
            </div>
            <h2>Por que escolher nossa empresa</h2>
            <div className="block-whyus">
              <div className="wrap-block-whyus">
                <h5>01</h5>
                <div className="block-whyus-p">
                  <h4>Experiência e especialização</h4>

                </div>
              </div>
              <div className="wrap-block-whyus">
                <h5>02</h5>
                <div className="block-whyus-p">
                  <h4>Equipe altamente capacitada</h4>

                </div>
              </div>
              <div className="wrap-block-whyus">
                <h5>03</h5>
                <div className="block-whyus-p">
                  <h4>Inovação e tecnologia</h4>

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
                <h2>10+</h2>
                <span>Anos no Mercado</span>
              </div>
            </div>
            <div className="rows-block">
              <div className="row-div-block">
                <h2>150+</h2>
                <span>Profissionais</span>
              </div>
              <div className="row-div-block">

                <h2>99%</h2>
                <span>Casos de Sucesso</span>
              </div>
            </div>
          </RightSideWhyUs>
        </div>
      </WhyUs>
      <ContactSection>
        <h4>Ligue para nós</h4>
        <h3>{numeroCellText}</h3>
        <div className="separator-section">
          <LineDivisorLeft></LineDivisorLeft>
          <p>OU</p>
          <LineDivisorRight></LineDivisorRight>
        </div>
        <h2>{faleConoscoProfText}</h2>
        <button>{faleConoscoText}</button>
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
