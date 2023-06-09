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

// const getGpt3Response = async (input: string) => {
//   const response = await axios.post('/api/gpt3', { input });
//   return response.data;
// };

// getGpt3Response('Olá, mundo!').then(response => {
//   console.log(response);
// });

interface Template01Props {
  isVisible01: boolean;
}

function Template01({ isVisible01 }: Template01Props) {
  const [response, setResponse] = useState(null);
  let nome = 'Rei dos advogados';

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
                content: `Faça dois paragrafos sobre uma empresa de advocacia chamada ${nome}`,
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
      } catch (error) {
        console.error(error);
      }
    };

    getResponse();
  }, []);

  console.log(response);

  // MIDJOURNEY

  const url = 'https://api.thenextleg.io/';

  const corpoDaSolicitacao = {
    cmd: 'imagine',
    msg: 'Um banner sofisticado para o site institucional de um escritório de advocacia corporativo, apresentando uma vista panorâmica de um horizonte de cidade agitada ao anoitecer, com arranha-céus altos iluminados por luzes douradas, um rio tranquilo fluindo em primeiro plano, e uma ponte proeminente conectando ambos os lados, evocando um sentimento de progresso e conectividade. O clima é elegante e profissional, transmitindo confiança e autoridade. O estilo é fotografia, capturada com uma câmera DSLR de quadro completo usando uma lente grande angular, aumentando a sensação de grandiosidade e profundidade, realista --ar 16:9',
  };

  const config = {
    method: 'post',
    url: url,
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ab9ba449-948d-436e-aa5d-44573d622523',
    },
    data: corpoDaSolicitacao,
  };

  let messageId: any;

  axios(config)
    .then(function (response) {
      console.log(response.data);
      messageId = response.data.messageId;
      console.log(`O messageId é: ${messageId}`);

      // Busca as requisições no webhook.site
      axios
        .get(`http://localhost:3001/webhookData`)
        .then(function (response) {
          console.log(response);
          const requests = response.data.data;

          // Procura pela requisição com o 'originatingMessageId' correspondente
          const matchingRequest = requests.find(
            (request: { content: { originatingMessageId: any } }) =>
              request.content &&
              request.content.originatingMessageId === messageId,
          );

          let imageUrl = matchingRequest.content.imageUrl;

          if (matchingRequest) {
            console.log('URL da imagem: ', matchingRequest.content.imageUrl);
          } else {
            console.log('Nenhuma requisição correspondente encontrada');
          }
        })
        .catch(function (error) {
          console.log('Erro ao buscar requisições: ', error);
        });
    })
    .catch(function (error) {
      console.log('Erro:', error);
    });

  return (
    <Container>
      <HeaderFooter as="header">
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
            <LogoTemplate src="./images/template01/about.png" alt="Sobre nós" />
            <div>
              <h2>Sobre Nós</h2>
              <p>{response}</p>
            </div>
          </Info>
        </section>
      </AboutSection>
      <Parallax>
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
              <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat duis aute.
              </p>
            </PracticeContent>
            <PracticeContent>
              <h3>02</h3>
              <h2>Crimes de armas</h2>
              <LineSmall></LineSmall>
              <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat duis aute.
              </p>
            </PracticeContent>
            <PracticeContent>
              <h3>03</h3>
              <h2>Crimes de drogas</h2>
              <LineSmall></LineSmall>
              <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat duis aute.
              </p>
            </PracticeContent>
          </PracticeAreaContent>
        </PracticeAreaContentAll>
        <PracticeAreaContentAll>
          <PracticeAreaContent>
            <PracticeContent>
              <h3>04</h3>
              <h2>Crimes de propriedade</h2>
              <LineSmall></LineSmall>
              <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat duis aute.
              </p>
            </PracticeContent>
            <PracticeContent>
              <h3>05</h3>
              <h2>Audiencia de fiança</h2>
              <LineSmall></LineSmall>
              <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat duis aute.
              </p>
            </PracticeContent>
            <PracticeContent>
              <h3>06</h3>
              <h2>Crime de assédio</h2>
              <LineSmall></LineSmall>
              <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat duis aute.
              </p>
            </PracticeContent>
          </PracticeAreaContent>
        </PracticeAreaContentAll>
      </PracticeArea>
      <ParallaxContact>
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
