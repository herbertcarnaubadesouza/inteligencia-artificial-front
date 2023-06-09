import React, { useEffect, useState, useContext, useRef } from 'react';
import { BeatLoader } from 'react-spinners';
import './question06.scss';
import PlacesAutocomplete from 'react-places-autocomplete';
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import { Suggestion } from "react-places-autocomplete";
import { useNavigate } from 'react-router-dom';

interface Question06Props {
  ocultarQuestion06: () => void;
  voltarQuestion06: () => void;
}

interface ISuggestion {
  description: string;
  active: boolean;
  [key: string]: any;
}

interface IChildProps {
  getInputProps: (args: any) => any;
  suggestions: readonly any[];
  getSuggestionItemProps: (args: any) => any;
  loading: boolean;
}


function Question06(props: Question06Props) {
  const [googleMapsReady, setGoogleMapsReady] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAVs1jB50vny6rur0HoTIXMYcr5MXfwT6E&libraries=places`;
    script.async = true;
    script.defer = true;
    script.addEventListener('load', () => {
      setGoogleMapsReady(true);
    });
    document.body.appendChild(script);
  }, []);

  const { ocultarQuestion06 } = props;
  const { voltarQuestion06 } = props;

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
    const timer = setTimeout(() => setShowQuestion(true), 10);
    const timer2 = setTimeout(() => setShowLoading(true), 3000);
    const timer3 = setTimeout(() => setShowButtons(true), 5700);

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
  const [textoClicadoDois, setTextoClicadoSeis] = useState<string[]>([]);

  const handleChoice = (texto: string) => {
    setButtonStates(prevStates => {
      const updatedStates = { ...prevStates };

      if (updatedStates[texto]) {
        delete updatedStates[texto];

        setTextoClicadoSeis(prevTextos => prevTextos.filter(t => t !== texto));
      } else {
        updatedStates[texto] = true;

        setTextoClicadoSeis(prevTextos => [...prevTextos, texto]);
      }

      const lista06 = Object.keys(updatedStates).filter(key => updatedStates[key]);

      setTextoClicadoSeis(lista06);
      localStorage.setItem('escolha06', lista06.join(', '));

      return updatedStates;

    });
  };

  const isPhysicalCompanySelected = buttonStates['Empresa física'];
  const isServiceAreaSelected = buttonStates['Área de serviço'];

  const addressInputRef = useRef(null);
  const [address, setAddress] = useState("");

  const handleAddressSelect = async (address: string) => {
    try {
      const results = await geocodeByAddress(address);
      const latLng = await getLatLng(results[0]);

    } catch (error) {
      console.error('Erro ao obter latitude e longitude:', error);
    }
  };

  const handleChange = () => {
    const inputElement = document.getElementById('adress') as HTMLInputElement;
    const inputValue = inputElement.value;
    localStorage.setItem('address', inputValue); // Salva o valor no localStorage
  };

  const [nomeEmpresa, setNomeEmpresa] = useState('');

  useEffect(() => {
    const empresaSalva = localStorage.getItem('nomeEmpresa');
    if (empresaSalva) {
      setNomeEmpresa(empresaSalva);
    }
  }, []);

  const handleNomeEmpresaChange = () => {
    const inputElement = document.getElementById('name') as HTMLInputElement;
    if (inputElement) {
      setNomeEmpresa(inputElement.value);
    }
  };

  useEffect(() => {
    localStorage.setItem('nomeEmpresa', nomeEmpresa);
  }, [nomeEmpresa]);

  const navigate = useNavigate();

  const goToPreview = () => {
    navigate('/preview');
  };;

  return (
    <>
      <div className='real-top-container'>
        <div className="question01-label">
          <div className="question-label-container">
            <img src="./images/logoFoxxy.svg" alt="" />
            <div className="question-back">
              <p className="question-normal-label">
                Qual categoria melhor descreve o objetivo do seu site? (por exemplo, loja virtual, serviços online, portfólio, blog)
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
            <img src="./images/logoFoxxy.svg" alt="" />
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



        <div className="question01-label">
          <div className="question-label-container">
            <img src="./images/logoFoxxy.svg" alt="" />
            <div className="question-back">
              <p className="question-normal-label">
                Então, como você quer que sua empresa seja chamada?
              </p>
            </div>
          </div>
        </div>

        <div className="question01-selected">
          <div className="question-selected-container">
            <img src="./images/selected.svg" alt="" />
            <p className="question-selected-label">
              Minhas escolha: {localStorage.getItem('nomeEmpresa')}
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
                    Selecione para destacar 3 aspectos únicos do seu negócio.
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

                    <div className={buttonStates['Programa de fidelidade'] ? 'normal-buttone clicked' : 'normal-buttone'}
                      onClick={() => handleChoice('Programa de fidelidade')}>
                      <img className="choice-icon" src="./images/loyalty.png" alt="" />
                      <p className="button-text">Programa de fidelidade</p>
                    </div>

                    <div className={buttonStates['Custo X Benefício'] ? 'normal-buttone clicked' : 'normal-buttone'}
                      onClick={() => handleChoice('Custo X Benefício')}>
                      <img className="choice-icon" src="./images/price.png" alt="" />
                      <p className="button-text">Custo X Benefício</p>
                    </div>

                    <div className={buttonStates['Experiência do cliente'] ? 'normal-buttone clicked' : 'normal-buttone'}
                      onClick={() => handleChoice('Experiência do cliente')}>
                      <img className="choice-icon" src="./images/customer.png" alt="" />
                      <p className="button-text">Experiência do cliente</p>
                    </div>
                  </div>

                  <div className="normal-buttons-container">

                    <div className={buttonStates['Serviço amigável'] ? 'normal-buttone clicked' : 'normal-buttone'}
                      onClick={() => handleChoice('Serviço amigável')}>
                      <img className="choice-icon" src="./images/friendly.png" alt="" />
                      <p className="button-text">Serviço amigável</p>
                    </div>

                    <div className={buttonStates['Gerar resultados'] ? 'normal-buttone clicked' : 'normal-buttone'}
                      onClick={() => handleChoice('Gerar resultados')}>
                      <img className="choice-icon" src="./images/results.png" alt="" />
                      <p className="button-text">Gerar resultados</p>
                    </div>

                    <div className={buttonStates['Horário flexível'] ? 'normal-buttone clicked' : 'normal-buttone'}
                      onClick={() => handleChoice('Horário flexível')}>
                      <img className="choice-icon" src="./images/hours.png" alt="" />
                      <p className="button-text">Horário flexível</p>
                    </div>


                  </div>

                </div>
              </div>
            )}
          </div>
        </div >
      </div >

      <div className="down-container">
        <div className="linha"></div>
        <div className="nav-container">
          <div className="button-back" onClick={props.voltarQuestion06}>
            <img className="button-back-icone" src="./images/back.svg" alt="" />
            <p className="button-back-text">VOLTAR</p>
          </div>
          <div className="button-continue" onClick={goToPreview}>
            <p className="button-continue-text">CONTINUAR</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Question06;
