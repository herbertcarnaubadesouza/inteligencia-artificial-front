import { useEffect, useState } from 'react';
import { BeatLoader } from 'react-spinners';
import './question01.scss';



interface Question01Props {
  ocultarQuestion: () => void;
}

const buttonsOne = [
  { text: 'Loja online', imgSrc: './images/store.svg' },
  { text: 'Oferecer serviços', imgSrc: './images/offer.svg' },
  { text: 'Cursos (Online ou Offline)', imgSrc: './images/courses.svg' },
];

const buttonsTwo = [
  { text: 'Um Blog', imgSrc: './images/blog.svg' },
  { text: 'Criar um Portfolio', imgSrc: './images/portfolio.svg' },
  { text: 'Bebidas e Alimentos', imgSrc: './images/food.svg' },
];

const options = [
  {
    id: 0,
    name: 'Todos',
    choices: ['Salão de beleza', 'Advogado', 'Barbeiro']
  },
  {
    id: 1,
    name: 'Saúde e beleza',
    choices: ['Hair master', 'Tatto Artista']
  },
  {
    id: 2,
    name: 'Esporte',
    choices: ['Personal trainer', 'Gym instructor']
  },
  {
    id: 3,
    name: 'Finanças',
    choices: ['Accountant', 'Financial advisor']
  },
  {
    id: 4,
    name: 'Casa & Lar',
    choices: ['Cleaner', 'Gardener']
  },
  {
    id: 5,
    name: 'Cuidados',
    choices: ['Doctor', 'Nurse']
  },
  // ...
];

interface ButtonProps {
  imgSrc: string;
  text: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ imgSrc, text, onClick }) => (
  <div className="buttone" onClick={onClick}>
    <img className="buttone-icon" src={imgSrc} alt="" />
    <p className="buttone-text">{text}</p>
  </div>
);


function Question01(props: Question01Props) {
  const { ocultarQuestion } = props;

  const [showQuestion, setShowQuestion] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  const [showLoading, setShowLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowQuestion(true), 100);
    const timer2 = setTimeout(() => setShowLoading(true), 4000);
    const timer3 = setTimeout(() => setShowButtons(true), 7500);

    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (tabId: number) => {
    setActiveTab(tabId);
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

  const handleChoice = (choiceName: string) => {
    setButtonStates((prevStates) => ({
      ...prevStates,
      [choiceName]: !prevStates[choiceName],
    }));
    setTextoClicado(choiceName);
    localStorage.setItem('textoClicado', choiceName);
  };


  const [searchTerm, setSearchTerm] = useState('');
  const [filteredButtonsOne, setFilteredButtonsOne] = useState(buttonsOne);
  const [filteredButtonsTwo, setFilteredButtonsTwo] = useState(buttonsTwo);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const filteredOne = buttonsOne.filter((button) =>
      button.text.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const filteredTwo = buttonsTwo.filter((button) =>
      button.text.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredButtonsOne(filteredOne);
    setFilteredButtonsTwo(filteredTwo);
  }, [searchTerm]);

  const activeChoices = options[activeTab].choices;

  return (
    <>
      <div className='real-top-container'>
        <div className="question01-label inactive">
          <div className="question-label-container">
            <img src="./images/logoFoxxy.svg" alt="" />
            <p className="question-normal-label">
              Qual categoria melhor descreve o objetivo do seu site? (por
              exemplo, serviços online, portfólio, blog)
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
                <img src="./images/logoFoxxy.svg" alt="" />
                <div className="question-backe">
                  <p className="questione">
                    Qual categoria melhor descreve o objetivo do seu site? (por
                    exemplo, loja virtual, serviços online, portfólio, blog)
                  </p>
                </div>
              </div>
            )}
            {showLoading && !showButtons && (
              <div className="while-typing">
                <p>FOXXY AI está digitando...</p>
                <BeatLoader speedMultiplier={0.5} size={12} color="#ccc" />
              </div>
            )}
            {showButtons && (
              <div className="second-block-right-side-container">
                <p className="label-text">
                  Pesquise para encontrar o tema que combina com sua profissão,
                  paixão ou passatempo
                </p>

                <div className="search-containere">
                  <img className="search-icon" src="./images/browse.svg" alt="" />
                  <input
                    className="searche"
                    type="text"
                    placeholder="Busque pelo que desejar ..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                  />
                </div>

                <div className={`choice-container-one ${isActive ? '' : 'inactive'}`}>
                  <p className="label-text">Ou navegue pelas categorias:</p>


                  <div className="buttons-container">
                    {filteredButtonsOne.map((button, index) => (
                      <Button
                        key={index}
                        imgSrc={button.imgSrc}
                        text={button.text}
                        onClick={trocarDivs}
                      />
                    ))}
                  </div>
                  <div className="buttons-container">
                    {filteredButtonsTwo.map((button, index) => (
                      <Button
                        key={index}
                        imgSrc={button.imgSrc}
                        text={button.text}
                        onClick={trocarDivs}
                      />
                    ))}
                  </div>
                </div>

                <div className={`choice-container-two ${isActive ? 'inactive' : ''}`}>
                  <div className="choice-head">
                    <img className="choice-icon" src="./images/offer.svg" alt="" />
                    <p className="button-text">Oferecer Serviços</p>
                  </div>
                  <div>
                    <ul>
                      {options.map((option) => (
                        <li
                          className={activeTab === option.id ? 'active' : ''}
                          onClick={() => handleTabClick(option.id)}
                        >
                          {option.name}
                        </li>
                      ))}
                    </ul>
                    <div className="choices-arraye">
                      {activeChoices
                        .filter((choice) => choice.toLowerCase().includes(searchTerm.toLowerCase()))
                        .map((choice) => (
                          <div
                            className={buttonStates[choice] ? 'choice clicked' : 'choice'}
                            onClick={() => handleChoice(choice)}
                          >
                            <p className="choice-texte">{choice}</p>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>

              </div>
            )}
          </div>
        </div>
      </div>

      <div className="down-container">
        <div className="linhae"></div>
        <div className="nav-container">
          <div className={`button-back ${isButtonActive ? 'active' : ''}`} onClick={handleButtonClick}>
            <img
              className="button-back-icone"
              src="./images/back.svg"
              alt=""
            />
            <p className="button-back-texte">{isButtonActive ? 'VOLTAR PARA TODAS' : 'VOLTAR'}</p>
          </div>

          <div className="right-nav-container">

            <div className="button-continuee" onClick={props.ocultarQuestion}>
              <p className="button-continue-text" >CONTINUAR</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Question01;
