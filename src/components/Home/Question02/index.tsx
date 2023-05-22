import { useEffect, useState } from 'react';
import { BeatLoader } from 'react-spinners';
import './question02.scss';

interface Question02Props {
  exibirQuestion02: () => void;
}

import { textoClicado } from '../../Question01';

function Question02(props: Question02Props) {
  const { exibirQuestion02 } = props;

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
    }
  };

  return (
    <>
      <div className='real-top-container'>
        <div className="question01-label">
          <div className="question-label-container">
            <img src="./images/logoQuestion.png" alt="" />
            <p className="question-normal-label">
              Qual categoria melhor descreve o objetivo do seu site? (por
              exemplo, loja virtual, serviços online, portfólio, blog)
            </p>
          </div>
        </div>

        <div className="question01-selected">
          <div className="question-selected-container">
            <img src="./images/selected.svg" alt="" />
            <p className="question-normal-label">
              Minha escolha: {textoClicado}
            </p>
          </div>
        </div>

        <div id="quention01">
          <div className="top-container">
            {showQuestion && (
              <div className="question-container">
                <img src="./images/logoQuestion.png" alt="" />
                <p className="question-normal-label">
                  Qual categoria melhor descreve o objetivo do seu site? (por
                  exemplo, loja virtual, serviços online, portfólio, blog)
                </p>
              </div>
            )}

            {showQuestion && (
              <div className="second-block-right-side-container">

                <div className="choice-container">

                  <div className="normal-buttons-container">

                    <div className="normal-button" onClick={trocarDivs}>
                      <p className="button-text">Rock Climbing Harness</p>
                    </div>

                    <div className="normal-button" onClick={trocarDivs}>
                      <p className="button-text">Rock Climbing Harness</p>
                    </div>

                    <div className="normal-button" onClick={trocarDivs}>
                      <p className="button-text">Rock Climbing Harness</p>
                    </div>

                  </div>

                  <div className="normal-buttons-container">

                    <div className="normal-button" onClick={trocarDivs}>
                      <p className="button-text">Rock Climbing Harness</p>
                    </div>

                    <div className="normal-button" onClick={trocarDivs}>
                      <p className="button-text">Rock Climbing Harness</p>
                    </div>

                    <div className="normal-button" onClick={trocarDivs}>
                      <p className="button-text">Rock Climbing Harness</p>
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
          <div className="button-continue">
            <p className="button-continue-text">Continuar</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Question02;
