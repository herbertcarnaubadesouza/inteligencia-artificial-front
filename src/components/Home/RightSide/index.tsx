import { useEffect, useState } from 'react';
import { BeatLoader } from 'react-spinners';
import './rightside.scss';

function RightSide() {
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
  return (
    <>
      <div className="rightside-container">
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
              <p className="label">Ou navegue pelas categorias:</p>
              <div className="buttons-container">
                <div className="button">
                  <img
                    className="button-icon"
                    src="./images/store.svg"
                    alt=""
                  />
                  <p className="button-text">Loja online</p>
                </div>
                <div className="button">
                  <img
                    className="button-icon"
                    src="./images/offer.svg"
                    alt=""
                  />
                  <p className="button-text">Oferecer serviços</p>
                </div>
                <div className="button">
                  <img
                    className="button-icon"
                    src="./images/courses.svg"
                    alt=""
                  />
                  <p className="button-text">Cursos (Online ou Offline)</p>
                </div>
              </div>
              <div className="buttons-container">
                <div className="button">
                  <img className="button-icon" src="./images/blog.svg" alt="" />
                  <p className="button-text">Um Blog</p>
                </div>
                <div className="button">
                  <img
                    className="button-icon"
                    src="./images/portfolio.svg"
                    alt=""
                  />
                  <p className="button-text">Criar um Portfolio</p>
                </div>
                <div className="button">
                  <img className="button-icon" src="./images/food.svg" alt="" />
                  <p className="button-text">Bebidas e Alimentos</p>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="down-container">
          <div className="linha"></div>
          <div className="nav-container">
            <div className="button-back">
              <img
                className="button-back-icon"
                src="./images/back.svg"
                alt=""
              />
              <p className="button-back-text">Voltar</p>
            </div>
            <div className="button-continue">
              <p className="button-continue-text">Continuar</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RightSide;
