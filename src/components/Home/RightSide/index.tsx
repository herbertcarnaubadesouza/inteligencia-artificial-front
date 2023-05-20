import './rightside.scss';

function RightSide() {
  return (
    <>
      <div className="rightside-container">
        <div className="top-container">
          <div className="question-container">
            <img src="./images/logoQuestion.png" alt="" />
            <p className="question">
              Qual categoria melhor descreve o objetivo do seu site? (por
              exemplo, loja, serviços, portfólio, blog)
            </p>
          </div>
          <p className="label">
            Pesquise para encontrar o tema que combina com sua profissão, paixão
            ou passatempo
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
              <img className="button-icon" src="./images/store.svg" alt="" />
              <p className="button-text">Loja online</p>
            </div>
            <div className="button">
              <img className="button-icon" src="./images/offer.svg" alt="" />
              <p className="button-text">Oferecer serviços</p>
            </div>
            <div className="button">
              <img className="button-icon" src="./images/courses.svg" alt="" />
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
