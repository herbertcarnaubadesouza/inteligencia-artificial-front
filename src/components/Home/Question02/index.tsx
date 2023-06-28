import React, { useEffect, useState, useContext } from 'react';
import { BeatLoader } from 'react-spinners';
import './question02.scss';


interface Question02Props {
  ocultarQuestion02: () => void;
  voltarQuestion02: () => void;
}

function Question02(props: Question02Props) {
  const { ocultarQuestion02 } = props;
  const { voltarQuestion02 } = props;

  useEffect(() => {
    const topContainer = document.getElementById("top-container");
    if (topContainer) {
      topContainer.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);


  const [showQuestion, setShowQuestion] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  const [showLoading, setShowLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowQuestion(true), 100);
    const timer2 = setTimeout(() => setShowLoading(true), 4000);
    const timer3 = setTimeout(() => setShowButtons(true), 6900);

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
  const [textoClicadoDois, setTextoClicadoDois] = useState<string[]>([]);

  const handleChoice = (texto: string) => {
    setButtonStates(prevStates => {
      const updatedStates = { ...prevStates };

      if (updatedStates[texto]) {
        delete updatedStates[texto];

        setTextoClicadoDois(prevTextos => prevTextos.filter(t => t !== texto));
      } else {
        updatedStates[texto] = true;

        setTextoClicadoDois(prevTextos => [...prevTextos, texto]);
      }

      const lista = Object.keys(updatedStates).filter(key => updatedStates[key]);

      setTextoClicadoDois(lista);
      localStorage.setItem('escolha02', lista.join(', '));

      return updatedStates;
    });
  };


  return (
    <>
      <div className='real-top-container'>
        <div className="question01-label">
          <div className="question-label-container">
            <img src="./images/logoFoxxy.svg" alt="" />
            <div className='question-back'>
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

        <div id="quention01">
          <div id="top-container" className="top-container">
            {showQuestion && (
              <div className="question-container">
                <img src="./images/logoFoxxy.svg" alt="" />
                <div className="question-back">
                  <p className="question">
                    Personalize o seu site escolhendo os serviços que você vai oferecer (você pode mudar isso depois)
                  </p>
                </div>
              </div>
            )}
            {showLoading && !showButtons && (
              <div className="while-typing">
                <p>FOXXY AI está digitando...</p>
                <BeatLoader speedMultiplier={0.6} size={12} color="#ccc" />
              </div>
            )}

            {showButtons && (
              <div className="second-block-right-side-container">

                <div className="choice-container">

                  <div className="normal-buttons-container">

                    <div className={buttonStates['Tatuagem personalizada'] ? 'normal-button clicked' : 'normal-button'}
                      onClick={() => handleChoice('Tatuagem personalizada')}>
                      <p className="button-text">Tatuagem personalizada</p>
                    </div>

                    <div className={buttonStates['Retoque de tatuagem'] ? 'normal-button clicked' : 'normal-button'}
                      onClick={() => handleChoice('Retoque de tatuagem')}>
                      <p className="button-text">Retoque de tatuagem</p>
                    </div>

                    <div className={buttonStates['Tatuagem tribal'] ? 'normal-button clicked' : 'normal-button'}
                      onClick={() => handleChoice('Tatuagem tribal')}>
                      <p className="button-text">Tatuagem tribal</p>
                    </div>
                  </div>

                  <div className="normal-buttons-container">

                    <div className={buttonStates['Tatuagem Preto e Branco'] ? 'normal-button clicked' : 'normal-button'}
                      onClick={() => handleChoice('Tatuagem Preto e Branco')}>
                      <p className="button-text">Tatuagem Preto e Branco</p>
                    </div>

                    <div className={buttonStates['Remoção a laser'] ? 'normal-button clicked' : 'normal-button'}
                      onClick={() => handleChoice('Remoção a laser')}>
                      <p className="button-text">Remoção a laser</p>
                    </div>

                    <div className={buttonStates['Tatuagem temporária'] ? 'normal-button clicked' : 'normal-button'}
                      onClick={() => handleChoice('Tatuagem temporária')}>
                      <p className="button-text">Tatuagem temporária</p>
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
          <div className="button-back" onClick={props.voltarQuestion02}>
            <img
              className="button-back-icone"
              src="./images/back.svg"
              alt=""
            />
            <p className="button-back-text">VOLTAR</p>
          </div>
          <div className="button-continue" onClick={props.ocultarQuestion02}>
            <p className="button-continue-text" >CONTINUAR</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Question02;
