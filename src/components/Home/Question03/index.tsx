import React, { useEffect, useState, useContext } from 'react';
import { BeatLoader } from 'react-spinners';
import './question03.scss';


interface Question03Props {
  ocultarQuestion03: () => void;
  voltarQuestion03: () => void;
}

function Question03(props: Question03Props) {
  const { ocultarQuestion03 } = props;
  const { voltarQuestion03 } = props;

  useEffect(() => {
    const topContainer = document.getElementById("atual");
    if (topContainer) {
      topContainer.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

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

  const [buttonStates, setButtonStates] = useState<{ [key: string]: boolean }>({});
  const [textoClicadoTres, setTextoClicadoTres] = useState<string[]>([]);

  const handleChoice = (texto: string) => {
    setButtonStates(prevStates => {
      const updatedStates = { ...prevStates };

      if (updatedStates[texto]) {
        delete updatedStates[texto];

        setTextoClicadoTres(prevTextos => prevTextos.filter(t => t !== texto));
      } else {
        updatedStates[texto] = true;

        setTextoClicadoTres(prevTextos => [...prevTextos, texto]);
      }

      const lista03 = Object.keys(updatedStates).filter(key => updatedStates[key]);

      setTextoClicadoTres(lista03);
      localStorage.setItem('escolha03', lista03.join(', '));

      return updatedStates;
    });
  };


  return (
    <>
      <div className='real-top-container'>
        <div className="question01-label">
          <div className="question-label-container">
            <img src="./images/logoFoxxy.svg" alt="" />
            <div className="question-back">
              <p className="question-normal-label">
                Qual categoria melhor descreve o objetivo do seu site? (por
                exemplo, loja virtual, serviços online, portfólio, blog)
              </p>
            </div>
          </div>
        </div>

        <div className="question01-selected">
          <div className="question-selected-container">
            <img src="./images/selected.svg" alt="" />
            <p className="question-selected-label">
              Minha escolha: {localStorage.getItem('textoClicado')}
            </p>
          </div>
        </div>

        <div className="question01-label">
          <div className="question-label-container">
            <img src="images/logoFoxxy.svg" alt="" />
            <div className="question-back">
              <p className="question-normal-label">
                Personalize o seu site escolhendo os serviços que você vai oferecer (você pode mudar isso depois)
              </p>
            </div>
          </div>
        </div>

        <div className="question01-selected">
          <div className="question-selected-container">
            <img src="./images/selected.svg" alt="" />
            <p className="question-selected-label">
              Minhas escolhas: {localStorage.getItem('escolha02')}
            </p>
          </div>
        </div>

        <div id="quention01">
          <div id="top-container" className="top-container">
            {showQuestion && (
              <div id="atual" className="question-container">
                <img src="images/logoFoxxy.svg" alt="" />
                <div className="question-back">
                  <p className="question">
                    Agora me diga qual vai ser o uso do seu site. Isso me ajudará a saber quais ferramentas e páginas você precisa
                  </p>
                </div>
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

                <div className="choice-container">

                  <div className="normal-buttons-container">

                    <div className={buttonStates['Vender produtos'] ? 'normal-button clicked' : 'normal-button'}
                      onClick={() => handleChoice('Vender produtos')}>
                      <img className="choice-icon" src="./images/sell.png" alt="" />
                      <p className="button-text">Vender produtos</p>
                    </div>

                    <div className={buttonStates['Escrever um blog'] ? 'normal-button clicked' : 'normal-button'}
                      onClick={() => handleChoice('Escrever um blog')}>
                      <img className="choice-icon" src="./images/blog.png" alt="" />
                      <p className="button-text">Escrever um blog</p>
                    </div>

                    <div className={buttonStates['Fazer reservas'] ? 'normal-button clicked' : 'normal-button'}
                      onClick={() => handleChoice('Fazer reservas')}>
                      <img className="choice-icon" src="./images/booking.png" alt="" />
                      <p className="button-text">Fazer reservas</p>
                    </div>
                  </div>

                  <div className="normal-buttons-container">

                    <div className={buttonStates['Obter depoimentos'] ? 'normal-button clicked' : 'normal-button'}
                      onClick={() => handleChoice('Obter depoimentos')}>
                      <img className="choice-icon" src="./images/testimonials.png" alt="" />
                      <p className="button-text">Obter depoimentos</p>
                    </div>

                    <div className={buttonStates['Obter clientes'] ? 'normal-button clicked' : 'normal-button'}
                      onClick={() => handleChoice('Obter clientes')}>
                      <img className="choice-icon" src="./images/customers.png" alt="" />
                      <p className="button-text">Obter clientes</p>
                    </div>

                    <div className={buttonStates['Ter notoriedade'] ? 'normal-button clicked' : 'normal-button'}
                      onClick={() => handleChoice('Ter notoriedade')}>
                      <img className="choice-icon" src="./images/testimonials.png" alt="" />
                      <p className="button-text">Ter notoriedade</p>
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
          <div className="button-back" onClick={props.voltarQuestion03}>
            <img
              className="button-back-icon"
              src="./images/back.svg"
              alt=""
            />
            <p className="button-back-text">VOLTAR</p>
          </div>
          <div className="button-continue" onClick={props.ocultarQuestion03}>
            <p className="button-continue-text">CONTINUAR</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Question03;
