import React, { useEffect, useState, useContext, useRef } from 'react';
import { BeatLoader } from 'react-spinners';
import './question05.scss';
import PlacesAutocomplete from 'react-places-autocomplete';
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import { Suggestion } from "react-places-autocomplete";

interface Question05Props {
  ocultarQuestion05: () => void;
  voltarQuestion05: () => void;
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


function Question05(props: Question05Props) {
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

  const { ocultarQuestion05 } = props;
  const { voltarQuestion05 } = props;

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
      console.log('Endereço selecionado:', address);
      console.log('Latitude:', latLng.lat);
      console.log('Longitude:', latLng.lng);
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

  return (
    <>
      <div className='real-top-container'>
        <div className="question01-label">
          <div className="question-label-container">
            <img src="./images/logoQuestion.png" alt="" />
            <p className="question-normal-label">
              Qual categoria melhor descreve o objetivo do seu site? (por exemplo, loja virtual, serviços online, portfólio, blog)
            </p>
          </div>
        </div>

        <div className="question01-selected">
          <div className="question-selected-container">
            <img src="./images/selected.svg" alt="" />
            <p className="question-normal-label">
              Minha escolha: {localStorage.getItem('textoClicado')}
            </p>
          </div>
        </div>

        <div className="question01-label">
          <div className="question-label-container">
            <img src="./images/logoQuestion.png" alt="" />
            <p className="question-normal-label">
              Personalize o seu site escolhendo os serviços que você vai oferecer (você pode mudar isso depois)
            </p>
          </div>
        </div>

        <div className="question01-selected">
          <div className="question-selected-container">
            <img src="./images/selected.svg" alt="" />
            <p className="question-normal-label">
              Minhas escolhas: {localStorage.getItem('escolha02')}
            </p>
          </div>
        </div>

        <div className="question01-label">
          <div className="question-label-container">
            <img src="./images/logoQuestion.png" alt="" />
            <p className="question-normal-label">
              Agora me diga qual vai ser o uso do seu site. Isso me ajudará a saber quais ferramentas e páginas você precisa
            </p>
          </div>
        </div>

        <div className="question01-selected">
          <div className="question-selected-container">
            <img src="./images/selected.svg" alt="" />
            <p className="question-normal-label">
              Minhas escolhas: {localStorage.getItem('escolha03')}
            </p>
          </div>
        </div>

        <div className="question01-label">
          <div className="question-label-container">
            <img src="./images/logoQuestion.png" alt="" />
            <p className="question-normal-label">
              Informe a localização física de sua empresa (como o endereço de uma loja) ou a área que você atende (como região, cidade ou CEP)
            </p>
          </div>
        </div>

        <div className="question01-selected">
          <div className="question-selected-container">
            <img src="./images/selected.svg" alt="" />
            <p className="question-normal-label">
              Minhas escolhas: {localStorage.getItem('escolha04')}: {localStorage.getItem('Endereco')}
            </p>
          </div>
        </div>

        <div id="quention01">
          <div id="top-container" className="top-container">
            {showQuestion && (
              <div className="question-container">
                <img src="./images/logoQuestion.png" alt="" />
                <p className="question">
                  Então, como você quer que sua empresa seja chamada?
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
                <div className="choice-container">
                  <div className="adress-search-container">
                    <img className="search-icon" src="./images/browse.svg" alt="" />
                    <div className="adress-search-input">
                      <input
                        id="name"
                        className="adress-search"
                        type="text"
                        placeholder="Escreva o nome da sua empresa aqui"
                        value={nomeEmpresa}
                        onChange={handleNomeEmpresaChange}
                      />
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
          <div className="button-back" onClick={props.voltarQuestion05}>
            <img className="button-back-icon" src="./images/back.svg" alt="" />
            <p className="button-back-text">Voltar</p>
          </div>
          <div className="button-continue" onClick={props.ocultarQuestion05}>
            <p className="button-continue-text">Continuar</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Question05;
