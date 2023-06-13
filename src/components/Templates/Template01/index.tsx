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

interface Template01Props {
  isVisible01: boolean;
}

function Template01({ isVisible01 }: Template01Props) {
  const [response, setResponse] = useState(null);
  const [title, setTitle] = useState(null);
  const [subTitle, setSubTitle] = useState(null);
  const [titleParalax, setTitleParalax] = useState(null);
  const [domesticBurglary, setDomesticBurglaryResponse] = useState(null);
  const [subTitleAreasExpertise, setSubTitleAreasExpertise] = useState(null);
  const [gunCrimesResponse, setGunCrimesResponse] = useState(null);
  const [drugCrimesResponse, setDrugCrimesResponse] = useState(null);
  const [propertyCrimesResponse, setPropertyCrimesResponse] = useState(null);
  const [bailHearingResponse, setBailHearingResponse] = useState(null);
  const [harassmentCrimeResponse, setHarassmentCrimeResponse] = useState(null);
  const [titleFooterParalax, setTitleFooterParalax] = useState(null);
  const [subtitleFooterParalax, setSubTitleFooterParalax] = useState(null);
  const [aboutUsFooterResponse, setAboutUsFooterResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));
  let nome = 'Rei dos advogados';

  const makeApiCall = async (content: any) => {
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
            Authorization: `Bearer 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`,
            'Content-Type': 'application/json',
          },
        },
      );
      return result.data.choices[0].message.content;
    } catch (error) {
      throw error;
    }
  };

  const getTitle = async () => {
    try {
      const result = await makeApiCall(
        `Crie um titulo pequeno com ${nome} sem aspas`,
      );
      setTitle(result);
      console.log('Sucesso ao buscar "Titulo"');
      setIsLoading(false);
    } catch (error: any) {
      if (error.response && error.response.status === 429) {
        await delay(2500);
        await getTitle(); // Retry the call after the delay
      } else {
        console.error('Erro ao buscar resposta da OpenAI: Titulo', error);
      }
    }
  };

  const getSubTitle = async () => {
    try {
      const result = await makeApiCall(
        `Frase de duas linhas, para Slogan de advogado experiente sem aspas`,
      );
      setSubTitle(result);
      console.log('Sucesso ao buscar "Sub titulo"');
      setIsLoading(false);
    } catch (error: any) {
      if (error.response && error.response.status === 429) {
        await delay(2500);
        await getSubTitle(); // Retry the call after the delay
      } else {
        console.error('Erro ao buscar resposta da OpenAI: Sub titulo', error);
      }
    }
  };

  const getTitleParalax = async () => {
    try {
      const result = await makeApiCall(
        `Frase de duas linhas, para Slogan de advogado experiente sem aspas`,
      );
      setTitleParalax(result);
      console.log('Sucesso ao buscar "Titulo Paralax"');
      setIsLoading(false);
    } catch (error: any) {
      if (error.response && error.response.status === 429) {
        await delay(2500);
        await getTitleParalax(); // Retry the call after the delay
      } else {
        console.error(
          'Erro ao buscar resposta da OpenAI: Titulo Paralax',
          error,
        );
      }
    }
  };

  const getResponse = async () => {
    try {
      const result = await makeApiCall(
        `Faça dois parágrafos sobre uma empresa de advocacia chamada ${nome}`,
      );
      setResponse(result);
      console.log('Sucesso ao buscar "Sobre Nós"');
      setIsLoading(false);
    } catch (error: any) {
      if (error.response && error.response.status === 429) {
        await delay(2500);
        await getResponse(); // Faça a chamada novamente após o atraso
      } else {
        console.error('Erro ao buscar resposta da OpenAI: Sobre Nós ', error);
      }
    }
  };

  const getSubTitleAreasExpertise = async () => {
    try {
      const result = await makeApiCall(
        `Duas linhas para um sub titulo de site de advogado falando sobre as areas de atuação sem aspas`,
      );
      setSubTitleAreasExpertise(result);
      console.log('Sucesso ao buscar "SubTitulo Areas"');
      setIsLoading(false);
    } catch (error: any) {
      if (error.response && error.response.status === 429) {
        await delay(2500);
        await getSubTitleAreasExpertise(); // Faça a chamada novamente após o atraso
      } else {
        console.error(
          'Erro ao buscar resposta da OpenAI: SubTitulo Areas ',
          error,
        );
      }
    }
  };

  const getDomesticBurglary = async () => {
    try {
      const result = await makeApiCall(
        'Faça um pequeno texto de no máximo 2 linhas dizendo sobre como atua em Assalto Doméstico sendo um advogado',
      );
      setDomesticBurglaryResponse(result);
      console.log('Sucesso ao buscar "Assalto Doméstico"');
      setIsLoading(false);
    } catch (error: any) {
      if (error.response && error.response.status === 429) {
        await delay(2500);
        await getDomesticBurglary(); // Faça a chamada novamente após o atraso
      } else {
        console.error(
          'Erro ao buscar resposta da OpenAI: Assalto Doméstico ',
          error,
        );
      }
    }
  };

  const getGunCrimesResponse = async () => {
    try {
      const result = await makeApiCall(
        'Faça um pequeno texto de no máximo 2 linhas dizendo sobre como atua em Crimes de armas sendo um advogado',
      );
      setGunCrimesResponse(result);
      console.log('Sucesso ao buscar "Crimes de Armas"');
      setIsLoading(false);
    } catch (error: any) {
      if (error.response && error.response.status === 429) {
        await delay(2500);
        await getGunCrimesResponse(); // Faça a chamada novamente após o atraso
      } else {
        console.error(
          'Erro ao buscar resposta da OpenAI: Crimes de Armas ',
          error,
        );
      }
    }
  };

  const getDrugCrimesResponse = async () => {
    try {
      const result = await makeApiCall(
        'Faça um pequeno texto de no máximo 2 linhas dizendo sobre como atua em Crimes de armas sendo um advogado',
      );
      setDrugCrimesResponse(result);
      console.log('Sucesso ao buscar "Crimes de Drogas"');
      setIsLoading(false);
    } catch (error: any) {
      if (error.response && error.response.status === 429) {
        await delay(2500);
        await getDrugCrimesResponse(); // Faça a chamada novamente após o atraso
      } else {
        console.error(
          'Erro ao buscar resposta da OpenAI: Crimes de Drogas ',
          error,
        );
      }
    }
  };

  const getPropertyCrimesResponse = async () => {
    try {
      const result = await makeApiCall(
        'Faça um pequeno texto de no máximo 2 linhas dizendo sobre como atua em Crimes de propriedade sendo um advogado',
      );
      setPropertyCrimesResponse(result);
      console.log('Sucesso ao buscar "Crimes de Propiedade"');
      setIsLoading(false);
    } catch (error: any) {
      if (error.response && error.response.status === 429) {
        await delay(2500);
        await getPropertyCrimesResponse(); // Faça a chamada novamente após o atraso
      } else {
        console.error(
          'Erro ao buscar resposta da OpenAI: Crimes de Propiedade ',
          error,
        );
      }
    }
  };

  const getBailHearingResponse = async () => {
    try {
      const result = await makeApiCall(
        'Faça um pequeno texto de no máximo 2 linhas dizendo sobre como atua em Audiencia de fiança sendo um advogado',
      );
      setBailHearingResponse(result);
      console.log('Sucesso ao buscar "Audiencia de Financia"');
      setIsLoading(false);
    } catch (error: any) {
      if (error.response && error.response.status === 429) {
        await delay(2500);
        await getBailHearingResponse(); // Faça a chamada novamente após o atraso
      } else {
        console.error(
          'Erro ao buscar resposta da OpenAI: Audiencia de Financia ',
          error,
        );
      }
    }
  };

  const getHarassmentCrimeResponse = async () => {
    try {
      const result = await makeApiCall(
        'Faça um pequeno texto de no máximo 2 linhas dizendo sobre como atua em Crime de assédio sendo um advogado',
      );
      setHarassmentCrimeResponse(result);
      console.log('Sucesso ao buscar "Crime de Assedio"');
      setIsLoading(false);
    } catch (error: any) {
      if (error.response && error.response.status === 429) {
        await delay(2500);
        await getHarassmentCrimeResponse(); // Faça a chamada novamente após o atraso
      } else {
        console.error(
          'Erro ao buscar resposta da OpenAI: Crime de Assedio ',
          error,
        );
      }
    }
  };

  const getTitleFooterParalax = async () => {
    try {
      const result = await makeApiCall(
        'Faça um Titulo pequeno convencendo pessoas a agendar uma reunião',
      );
      setTitleFooterParalax(result);
      console.log('Sucesso ao buscar "Titulo Footer Paralax"');
      setIsLoading(false);
    } catch (error: any) {
      if (error.response && error.response.status === 429) {
        await delay(2500);
        await getTitleFooterParalax(); // Faça a chamada novamente após o atraso
      } else {
        console.error(
          'Erro ao buscar resposta da OpenAI: Titulo Footer Paralax ',
          error,
        );
      }
    }
  };

  const getSubTitleFooterParalax = async () => {
    try {
      const result = await makeApiCall(
        'Faça um sub Titulo pequeno convencendo pessoas a agendar uma reunião em sua firma de advocacia',
      );
      setSubTitleFooterParalax(result);
      console.log('Sucesso ao buscar "Sub Titulo Paralax Footer"');
      setIsLoading(false);
    } catch (error: any) {
      if (error.response && error.response.status === 429) {
        await delay(2500);
        await getSubTitleFooterParalax(); // Faça a chamada novamente após o atraso
      } else {
        console.error(
          'Erro ao buscar resposta da OpenAI: Sub Titulo Paralax Footer',
          error,
        );
      }
    }
  };

  const getAboutUsFooterResponse = async () => {
    try {
      const result = await makeApiCall(
        `Escreva duas linhas de um Sobre nós ${nome}`,
      );
      setAboutUsFooterResponse(result);
      console.log('Sucesso ao buscar "Footer-sobrenos"');
      setIsLoading(false);
    } catch (error: any) {
      if (error.response && error.response.status === 429) {
        await delay(2500);
        await getAboutUsFooterResponse(); // Faça a chamada novamente após o atraso
      } else {
        console.error(
          'Erro ao buscar resposta da OpenAI: Footer-sobrenos ',
          error,
        );
      }
    }
  };

  useEffect(() => {
    const getResponses = async () => {
      try {
        await getTitle();
        await delay(3000); // Atraso de 1 segundo
        await getSubTitle();
        await delay(3000);
        await getResponse();
        await delay(3000);
        await getTitleParalax();
        await delay(3000);
        await getSubTitleAreasExpertise();
        await delay(3000);
        await getDomesticBurglary();
        await delay(3000);
        await getGunCrimesResponse();
        await delay(3000);
        await getDrugCrimesResponse();
        await delay(3000);
        await getPropertyCrimesResponse();
        await delay(3000);
        await getBailHearingResponse();
        await delay(3000);
        await getHarassmentCrimeResponse();
        await delay(3000);
        await getTitleFooterParalax();
        await delay(3000);
        await getSubTitleFooterParalax();
        await delay(3000);
        await getAboutUsFooterResponse();
      } catch (error) {
        console.error(error);
      }
    };

    getResponses();
  }, []);

  // MIDJOURNEY

  const [imageUrl, setImageUrl] = useState('');
  useEffect(() => {
    const url = 'https://api.thenextleg.io/';

    const corpoDaSolicitacao = {
      cmd: 'imagine',
      msg: ' A successful law firms executive office with floor-to-ceiling windows overlooking a bustling cityscape, polished mahogany furniture, elegant leather chairs, a large oak desk with a computer and legal documents neatly arranged, a panoramic view of the citys skyline, conveying a sense of power and professionalism, Photography, wide-angle lens (24mm) --ar 16:9',
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
        messageId = response.data.messageId;
        console.log(`O messageId da Primeira: ${messageId}`);

        // Adiciona um delay de 30 segundos
        setTimeout(() => {
          // Busca as requisições no webhook.site
          axios
            .get(`http://localhost:3001/webhookData`)
            .then(function (response) {
              const requests = response.data.data;
              console.log(requests);

              // Procura pela requisição com o 'originatingMessageId' correspondente
              const matchingRequest = requests.find((request: any) => {
                if (request.content) {
                  const content = JSON.parse(request.content); // Converte a string JSON em objeto
                  return content.originatingMessageId === messageId;
                }
                return false;
              });

              if (matchingRequest) {
                const content = JSON.parse(matchingRequest.content); // Converte a string JSON em objeto
                const buttonMessageId = content.buttonMessageId;
                console.log('ButtonMessageId da Primeira: ', buttonMessageId);

                // Cria uma nova requisição para https://api.thenextleg.io/
                axios
                  .post(
                    'https://api.thenextleg.io/',
                    {
                      button: 'U1',
                      buttonMessageId: buttonMessageId,
                    },
                    {
                      headers: {
                        'Content-Type': 'application/json',
                        Authorization:
                          'Bearer ab9ba449-948d-436e-aa5d-44573d622523',
                      },
                    },
                  )
                  .then(function (response) {
                    console.log('Resposta da API thenextleg: ', response.data);
                    messageId = response.data.messageId;
                    console.log('Novo message Id da Primeira:', messageId);

                    // Adiciona um novo delay de 75 segundos
                    setTimeout(() => {
                      // Faz uma nova chamada para buscar as requisições no webhook.site
                      axios
                        .get(`http://localhost:3001/webhookData`)
                        .then(function (response) {
                          const newRequests = response.data.data;
                          const newMatchingRequest = newRequests.find(
                            (request: any) => {
                              if (request.content) {
                                const content = JSON.parse(request.content);
                                return (
                                  content.originatingMessageId === messageId
                                );
                              }
                              return false;
                            },
                          );

                          if (newMatchingRequest) {
                            let content = JSON.parse(
                              newMatchingRequest.content,
                            );
                            let imageUrl = content.imageUrl;

                            console.log(
                              'URL da imagem da Primeira: ',
                              imageUrl,
                            );

                            setImageUrl(imageUrl);
                          } else {
                            console.log(
                              'Nenhuma requisição correspondente encontrada da Primeira',
                            );
                          }
                        })
                        .catch(function (error) {
                          console.log(
                            'Erro ao buscar novas requisições da Primeira: ',
                            error,
                          );
                        });
                    }, 75000);
                  })
                  .catch(function (error) {
                    console.log(
                      'Erro na requisição para API thenextleg da Primeira: ',
                      error,
                    );
                  });
              } else {
                console.log(
                  'Nenhuma requisição correspondente encontrada da Primeira',
                );
              }
            })
            .catch(function (error) {
              console.log('Erro ao buscar requisições da Primeira: ', error);
            });
        }, 75000);
      })
      .catch(function (error) {
        console.log('Erro:', error);
      });
  }, []);

  // SEGUNDA
  const [imageUrlSegunda, setImageUrlSegunda] = useState('');
  useEffect(() => {
    const url = 'https://api.thenextleg.io/';

    const corpoDaSolicitacao = {
      cmd: 'imagine',
      msg: 'In a bustling metropolis, where the pillars of law and order hold society in balance, there stands an awe-inspiring statue of justice. Your task is to describe this statue in vivid detail, capturing its realism and conveying a sense of powerful symbolism, Photography, wide-angle lens (24mm) --ar 16:9',
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
        messageId = response.data.messageId;
        console.log(`O messageId da Segunda é: ${messageId}`);

        // Adiciona um delay de 30 segundos
        setTimeout(() => {
          // Busca as requisições no webhook.site
          axios
            .get(`http://localhost:3001/webhookData`)
            .then(function (response) {
              const requests = response.data.data;
              console.log(requests);

              // Procura pela requisição com o 'originatingMessageId' correspondente
              const matchingRequest = requests.find((request: any) => {
                if (request.content) {
                  const content = JSON.parse(request.content); // Converte a string JSON em objeto
                  return content.originatingMessageId === messageId;
                }
                return false;
              });

              if (matchingRequest) {
                const content = JSON.parse(matchingRequest.content); // Converte a string JSON em objeto
                const buttonMessageId = content.buttonMessageId;
                console.log('ButtonMessageId da Segunda: ', buttonMessageId);

                // Cria uma nova requisição para https://api.thenextleg.io/
                axios
                  .post(
                    'https://api.thenextleg.io/',
                    {
                      button: 'U1',
                      buttonMessageId: buttonMessageId,
                    },
                    {
                      headers: {
                        'Content-Type': 'application/json',
                        Authorization:
                          'Bearer ab9ba449-948d-436e-aa5d-44573d622523',
                      },
                    },
                  )
                  .then(function (response) {
                    console.log(
                      'Resposta da API thenextleg da Segunda: ',
                      response.data,
                    );
                    messageId = response.data.messageId;
                    console.log('Novo message Id da Segunda:', messageId);

                    // Adiciona um novo delay de 75 segundos
                    setTimeout(() => {
                      // Faz uma nova chamada para buscar as requisições no webhook.site
                      axios
                        .get(`http://localhost:3001/webhookData`)
                        .then(function (response) {
                          const newRequests = response.data.data;
                          const newMatchingRequest = newRequests.find(
                            (request: any) => {
                              if (request.content) {
                                const content = JSON.parse(request.content);
                                return (
                                  content.originatingMessageId === messageId
                                );
                              }
                              return false;
                            },
                          );

                          if (newMatchingRequest) {
                            let content = JSON.parse(
                              newMatchingRequest.content,
                            );
                            let imageUrl = content.imageUrl;

                            console.log('URL da imagem da Segunda: ', imageUrl);

                            setImageUrlSegunda(imageUrl);
                            console.log(imageUrl);
                          } else {
                            console.log(
                              'Nenhuma requisição correspondente encontrada da Segunda',
                            );
                          }
                        })
                        .catch(function (error) {
                          console.log(
                            'Erro ao buscar novas requisições da Segunda: ',
                            error,
                          );
                        });
                    }, 75000);
                  })
                  .catch(function (error) {
                    console.log(
                      'Erro na requisição para API thenextleg da Segunda: ',
                      error,
                    );
                  });
              } else {
                console.log(
                  'Nenhuma requisição correspondente encontrada da Segunda',
                );
              }
            })
            .catch(function (error) {
              console.log('Erro ao buscar requisições da Segunda: ', error);
            });
        }, 75000);
      })
      .catch(function (error) {
        console.log('Erro:', error);
      });
  }, []);

  // TERCEIRA
  const [imageUrlTerceira, setImageUrlTerceira] = useState('');
  useEffect(() => {
    const url = 'https://api.thenextleg.io/';

    const corpoDaSolicitacao = {
      cmd: 'imagine',
      msg: 'Step into an elegant Washington, D.C. office, where influential figures engage in impactful discussions. In this scene, capture the essence of a formal meeting among well-dressed individuals who exude authority and importance, Photography, wide-angle lens (24mm) --ar 16:9',
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
        messageId = response.data.messageId;
        console.log(`O messageId da Terceira é: ${messageId}`);

        // Adiciona um delay de 30 segundos
        setTimeout(() => {
          // Busca as requisições no webhook.site
          axios
            .get(`http://localhost:3001/webhookData`)
            .then(function (response) {
              const requests = response.data.data;
              console.log(requests);

              // Procura pela requisição com o 'originatingMessageId' correspondente
              const matchingRequest = requests.find((request: any) => {
                if (request.content) {
                  const content = JSON.parse(request.content); // Converte a string JSON em objeto
                  return content.originatingMessageId === messageId;
                }
                return false;
              });

              if (matchingRequest) {
                const content = JSON.parse(matchingRequest.content); // Converte a string JSON em objeto
                const buttonMessageId = content.buttonMessageId;
                console.log('ButtonMessageId da Terceira : ', buttonMessageId);

                // Cria uma nova requisição para https://api.thenextleg.io/
                axios
                  .post(
                    'https://api.thenextleg.io/',
                    {
                      button: 'U1',
                      buttonMessageId: buttonMessageId,
                    },
                    {
                      headers: {
                        'Content-Type': 'application/json',
                        Authorization:
                          'Bearer ab9ba449-948d-436e-aa5d-44573d622523',
                      },
                    },
                  )
                  .then(function (response) {
                    console.log(
                      'Resposta da API thenextleg da Terceira : ',
                      response.data,
                    );
                    messageId = response.data.messageId;
                    console.log('Novo message Id da Terceira :', messageId);

                    // Adiciona um novo delay de 75 segundos
                    setTimeout(() => {
                      // Faz uma nova chamada para buscar as requisições no webhook.site
                      axios
                        .get(`http://localhost:3001/webhookData`)
                        .then(function (response) {
                          const newRequests = response.data.data;
                          const newMatchingRequest = newRequests.find(
                            (request: any) => {
                              if (request.content) {
                                const content = JSON.parse(request.content);
                                return (
                                  content.originatingMessageId === messageId
                                );
                              }
                              return false;
                            },
                          );

                          if (newMatchingRequest) {
                            let content = JSON.parse(
                              newMatchingRequest.content,
                            );
                            let imageUrl = content.imageUrl;

                            console.log(
                              'URL da imagem da Terceira : ',
                              imageUrl,
                            );

                            setImageUrlTerceira(imageUrl);
                            console.log(imageUrlTerceira);
                          } else {
                            console.log(
                              'Nenhuma requisição correspondente encontrada da Terceira ',
                            );
                          }
                        })
                        .catch(function (error) {
                          console.log(
                            'Erro ao buscar novas requisições da Terceira : ',
                            error,
                          );
                        });
                    }, 75000);
                  })
                  .catch(function (error) {
                    console.log(
                      'Erro na requisição para API thenextleg da Terceira : ',
                      error,
                    );
                  });
              } else {
                console.log(
                  'Nenhuma requisição correspondente encontrada da Terceira ',
                );
              }
            })
            .catch(function (error) {
              console.log('Erro ao buscar requisições da Terceira : ', error);
            });
        }, 75000);
      })
      .catch(function (error) {
        console.log('Erro:', error);
      });
  }, []);
  // QUARTA
  const [imageUrlQuarta, setImageUrlQuarta] = useState('');
  useEffect(() => {
    const url = 'https://api.thenextleg.io/';

    const corpoDaSolicitacao = {
      cmd: 'imagine',
      msg: 'intertwines with mortal existence. Your task is to craft a vivid description of a grand array of statues representing the deities of Greek mytholog,. Photography, wide-angle lens (24mm) --ar 16:9',
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
        messageId = response.data.messageId;
        console.log(`O messageId da Quarta é: ${messageId}`);

        // Adiciona um delay de 30 segundos
        setTimeout(() => {
          // Busca as requisições no webhook.site
          axios
            .get(`http://localhost:3001/webhookData`)
            .then(function (response) {
              const requests = response.data.data;
              console.log(requests);

              // Procura pela requisição com o 'originatingMessageId' correspondente
              const matchingRequest = requests.find((request: any) => {
                if (request.content) {
                  const content = JSON.parse(request.content); // Converte a string JSON em objeto
                  return content.originatingMessageId === messageId;
                }
                return false;
              });

              if (matchingRequest) {
                const content = JSON.parse(matchingRequest.content); // Converte a string JSON em objeto
                const buttonMessageId = content.buttonMessageId;
                console.log('ButtonMessageId da Quarta: ', buttonMessageId);

                // Cria uma nova requisição para https://api.thenextleg.io/
                axios
                  .post(
                    'https://api.thenextleg.io/',
                    {
                      button: 'U1',
                      buttonMessageId: buttonMessageId,
                    },
                    {
                      headers: {
                        'Content-Type': 'application/json',
                        Authorization:
                          'Bearer ab9ba449-948d-436e-aa5d-44573d622523',
                      },
                    },
                  )
                  .then(function (response) {
                    console.log(
                      'Resposta da API thenextleg da Quarta: ',
                      response.data,
                    );
                    messageId = response.data.messageId;
                    console.log('Novo message Id da Quarta:', messageId);

                    // Adiciona um novo delay de 75 segundos
                    setTimeout(() => {
                      // Faz uma nova chamada para buscar as requisições no webhook.site
                      axios
                        .get(`http://localhost:3001/webhookData`)
                        .then(function (response) {
                          const newRequests = response.data.data;
                          const newMatchingRequest = newRequests.find(
                            (request: any) => {
                              if (request.content) {
                                const content = JSON.parse(request.content);
                                return (
                                  content.originatingMessageId === messageId
                                );
                              }
                              return false;
                            },
                          );

                          if (newMatchingRequest) {
                            let content = JSON.parse(
                              newMatchingRequest.content,
                            );
                            let imageUrl = content.imageUrl;

                            console.log('URL da imagem da Quarta: ', imageUrl);

                            setImageUrlQuarta(imageUrl);
                            console.log(imageUrlQuarta);
                          } else {
                            console.log(
                              'Nenhuma requisição correspondente encontrada da Quarta',
                            );
                          }
                        })
                        .catch(function (error) {
                          console.log(
                            'Erro ao buscar novas requisições da Quarta: ',
                            error,
                          );
                        });
                    }, 75000);
                  })
                  .catch(function (error) {
                    console.log(
                      'Erro na requisição para API thenextleg da Quarta: ',
                      error,
                    );
                  });
              } else {
                console.log(
                  'Nenhuma requisição correspondente encontrada da Quarta',
                );
              }
            })
            .catch(function (error) {
              console.log('Erro ao buscar requisições da Quarta: ', error);
            });
        }, 75000);
      })
      .catch(function (error) {
        console.log('Erro:', error);
      });
  }, []);

  return (
    <Container>
      <HeaderFooter bgImage={imageUrl} as="header">
        <h1>{title}</h1>
        <Line></Line>
        <h2>{subTitle}</h2>
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
      <Parallax bgImage={imageUrlTerceira}>
        <ParallaxContent>
          <h4>EXPERIÊNCIA É IMPORTANTE</h4>
          <LineParallax></LineParallax>
          <h2>{titleParalax}</h2>
          <a>
            <Play size={32} weight="fill" />
          </a>
        </ParallaxContent>
      </Parallax>
      <PracticeArea>
        <h1>Áreas de atuação</h1>
        <h4>{subTitleAreasExpertise}</h4>
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
      <ParallaxContact bgImage={imageUrlQuarta}>
        <ParallaxContent>
          <h4>NÃO ESPERE MAIS</h4>
          <LineParallax></LineParallax>
          <h2>{titleFooterParalax}</h2>
          <h3>{subtitleFooterParalax}</h3>
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
          <h3>{aboutUsFooterResponse}</h3>
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
