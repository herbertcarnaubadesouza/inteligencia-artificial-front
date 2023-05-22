import { useEffect, useState } from 'react';
import { BeatLoader } from 'react-spinners';
import './question01.scss';

interface Question01Props {
  ocultarQuestion: () => void;
}

export const textoClicado = '';

function Question01(props: Question01Props) {
  const { ocultarQuestion } = props;

  const [showQuestion, setShowQuestion] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  const [showLoading, setShowLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowQuestion(true), 1000);
    const timer2 = setTimeout(() => setShowLoading(true), 3800);
    const timer3 = setTimeout(() => setShowButtons(true), 8500);

    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  const [isActive, setIsActive] = useState(true);
  const [isButtonActive, setIsButtonActive] = useState(false);

  const trocarDivs = () => {
    setIsActive(!isActive);
    setIsButtonActive(!isButtonActive);
  };

  const handleButtonClick = () => {
    if (isButtonActive) {
      trocarDivs();

      const updatedStates: { [key: string]: boolean } = {};

      for (const key in buttonStates) {
        updatedStates[key] = false;
      }
      setTextoClicado('');
    }
  };

  const [buttonStates, setButtonStates] = useState<{ [key: string]: boolean }>({});
  const [textoClicado, setTextoClicado] = useState('');

  const handleChoice = (texto: string) => {
    const updatedStates: { [key: string]: boolean } = {};

    // Desativa todos os botões
    for (const key in buttonStates) {
      updatedStates[key] = false;
    }

    // Ativa o botão clicado atual
    updatedStates[texto] = true;

    setButtonStates(updatedStates);
    setTextoClicado("Opção selecionada: " + texto);


  };


  return (
    <>
      <div className='real-top-container'>
        <div className="question01-label inactive">
          <div className="question-label-container">
            <img src="./images/logoQuestion.png" alt="" />
            <p className="question-normal-label">
              Qual categoria melhor descreve o objetivo do seu site? (por
              exemplo, loja virtual, serviços online, portfólio, blog)
            </p>
          </div>
        </div>

        <div className="question01-selected inactive">
          <div className="question-selected-container">
            <img src="./images/selected.svg" alt="" />
            <p className="question-normal-label">
              Minha escolha: (por
              exemplo, loja virtual, serviços online, portfólio, blog)
            </p>
          </div>
        </div>

        <div id="quention01">
          <div className="top-container">
            {showQuestion && (
              <div className="question-container">
                <img src="./images/logoQuestion.png" alt="" />
                <p className="question">
                  Qual categoria melhor descreve o objetivo do seu site? (por
                  exemplo, loja virtual, serviços online, portfólio, blog)
                </p>
              </div>
            )}
            {showLoading && !showButtons && (
              <div className="while-typing">
                <p>Rei do Sites IA está digitando...</p>
                <BeatLoader speedMultiplier={0.6} size={12} color="#ccc" />
              </div>
            )}
            {showButtons && (
              <div className="second-block-right-side-container">
                <p className="label">
                  Pesquise para encontrar o tema que combina com sua profissão,
                  paixão ou passatempo
                </p>

                <div className="search-container">
                  <img className="search-icon" src="./images/browse.svg" alt="" />
                  <input
                    className="search"
                    type="text"
                    placeholder="Por exemplo: Salão de Beleza, Loja de Roupas, Agência de Marketing"
                  />
                </div>

                <div className={`choice-container-one ${isActive ? '' : 'inactive'}`}>
                  <p className="label">Ou navegue pelas categorias:</p>

                  <div className="buttons-container">
                    <div className="button" onClick={trocarDivs}>
                      <img
                        className="button-icon"
                        src="./images/store.svg"
                        alt=""
                      />
                      <p className="button-text">Loja online</p>
                    </div>
                    <div className="button" onClick={trocarDivs}>
                      <img
                        className="button-icon"
                        src="./images/offer.svg"
                        alt=""
                      />
                      <p className="button-text">Oferecer serviços</p>
                    </div>
                    <div className="button" onClick={trocarDivs}>
                      <img
                        className="button-icon"
                        src="./images/courses.svg"
                        alt=""
                      />
                      <p className="button-text">Cursos (Online ou Offline)</p>
                    </div>
                  </div>
                  <div className="buttons-container">
                    <div className="button" onClick={trocarDivs}>
                      <img className="button-icon" src="./images/blog.svg" alt="" />
                      <p className="button-text">Um Blog</p>
                    </div>
                    <div className="button" onClick={trocarDivs}>
                      <img
                        className="button-icon"
                        src="./images/portfolio.svg"
                        alt=""
                      />
                      <p className="button-text">Criar um Portfolio</p>
                    </div>
                    <div className="button" onClick={trocarDivs}>
                      <img className="button-icon" src="./images/food.svg" alt="" />
                      <p className="button-text">Bebidas e Alimentos</p>
                    </div>
                  </div>
                </div>

                <div className={`choice-container-two ${isActive ? 'inactive' : ''}`}>
                  <div className="choice-head">
                    <img className="choice-icon" src="./images/offer.svg" alt="" />
                    <p className="button-text">Oferecer Serviços</p>
                  </div>

                  <div>
                    <ul>
                      <li className={activeTab === 0 ? 'active' : ''} onClick={() => handleTabClick(0)}>All results</li>
                      <li className={activeTab === 1 ? 'active' : ''} onClick={() => handleTabClick(1)}>beauty & wellness</li>
                      <li className={activeTab === 2 ? 'active' : ''} onClick={() => handleTabClick(2)}>sport & fitness</li>
                      <li className={activeTab === 3 ? 'active' : ''} onClick={() => handleTabClick(3)}>business & finance</li>
                      <li className={activeTab === 4 ? 'active' : ''} onClick={() => handleTabClick(4)}>household</li>
                      <li className={activeTab === 5 ? 'active' : ''} onClick={() => handleTabClick(5)}>healthcare</li>
                    </ul>
                    <div>
                      {activeTab === 0 &&
                        <div className="choices">
                          <div className="choices-line">

                            <div
                              className={buttonStates['hair removal master'] ? 'choice clicked' : 'choice'}
                              onClick={() => handleChoice('hair removal master')}
                            >
                              <p className="choice-text">hair removal master</p>
                            </div>

                            <div
                              className={buttonStates['tatto artist'] ? 'choice clicked' : 'choice'}
                              onClick={() => handleChoice('tatto artist')}
                            >
                              <p className="choice-text">tatto artist</p>
                            </div>

                          </div>

                        </div>
                      }
                      {activeTab === 1 &&
                        <div className="choices">
                          <div className="choices-line">

                            <div
                              className={buttonStates['hair removal master'] ? 'choice clicked' : 'choice'}
                              onClick={() => handleChoice('hair removal master')}
                            >
                              <p className="choice-text">hair removal master</p>
                            </div>

                            <div
                              className={buttonStates['tatto artist'] ? 'choice clicked' : 'choice'}
                              onClick={() => handleChoice('tatto artist')}
                            >
                              <p className="choice-text">tatto artist</p>
                            </div>

                          </div>

                        </div>
                      }
                      {activeTab === 2 &&
                        <div className="choices">
                          <div className="choices-line">

                            <div
                              className={buttonStates['hair removal master'] ? 'choice clicked' : 'choice'}
                              onClick={() => handleChoice('hair removal master')}
                            >
                              <p className="choice-text">hair removal master</p>
                            </div>

                            <div
                              className={buttonStates['tatto artist'] ? 'choice clicked' : 'choice'}
                              onClick={() => handleChoice('tatto artist')}
                            >
                              <p className="choice-text">tatto artist</p>
                            </div>

                          </div>

                        </div>
                      }
                      {activeTab === 3 &&
                        <div className="choices">
                          <div className="choices-line">

                            <div
                              className={buttonStates['hair removal master'] ? 'choice clicked' : 'choice'}
                              onClick={() => handleChoice('hair removal master')}
                            >
                              <p className="choice-text">hair removal master</p>
                            </div>

                            <div
                              className={buttonStates['tatto artist'] ? 'choice clicked' : 'choice'}
                              onClick={() => handleChoice('tatto artist')}
                            >
                              <p className="choice-text">tatto artist</p>
                            </div>

                          </div>

                        </div>
                      }
                      {activeTab === 4 &&
                        <div className="choices">
                          <div className="choices-line">

                            <div
                              className={buttonStates['hair removal master'] ? 'choice clicked' : 'choice'}
                              onClick={() => handleChoice('hair removal master')}
                            >
                              <p className="choice-text">hair removal master</p>
                            </div>

                            <div
                              className={buttonStates['tatto artist'] ? 'choice clicked' : 'choice'}
                              onClick={() => handleChoice('tatto artist')}
                            >
                              <p className="choice-text">tatto artist</p>
                            </div>

                          </div>

                        </div>
                      }
                      {activeTab === 5 &&
                        <div className="choices">
                          <div className="choices-line">

                            <div
                              className={buttonStates['hair removal master'] ? 'choice clicked' : 'choice'}
                              onClick={() => handleChoice('hair removal master')}
                            >
                              <p className="choice-text">hair removal master</p>
                            </div>

                            <div
                              className={buttonStates['tatto artist'] ? 'choice clicked' : 'choice'}
                              onClick={() => handleChoice('tatto artist')}
                            >
                              <p className="choice-text">tatto artist</p>
                            </div>

                          </div>

                        </div>
                      }
                    </div>
                  </div>

                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="down-container">
        <div className="linha"></div>
        <div className="nav-container">
          <div className={`button-back ${isButtonActive ? 'active' : ''}`} onClick={handleButtonClick}>
            <img
              className="button-back-icon"
              src="./images/back.svg"
              alt=""
            />
            <p className="button-back-text">{isButtonActive ? 'Voltar para todas as categorias' : 'Voltar'}</p>
          </div>

          <div className="right-nav-container">
            <p className="choice-selected">{textoClicado}</p>
            <div className="button-continue" onClick={props.ocultarQuestion}>
              <p className="button-continue-text" >Continuar</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Question01;
