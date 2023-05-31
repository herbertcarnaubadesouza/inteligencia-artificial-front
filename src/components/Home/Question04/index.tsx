import React, { useEffect, useState, useContext, useRef } from 'react';
import { BeatLoader } from 'react-spinners';
import './question04.scss';
import PlacesAutocomplete from 'react-places-autocomplete';
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import { Suggestion } from "react-places-autocomplete";

interface Question04Props {
  ocultarQuestion04: () => void;
  voltarQuestion04: () => void;
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


function Question04(props: Question04Props) {
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

  const { ocultarQuestion04 } = props;
  const { voltarQuestion04 } = props;

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
  const [textoClicadoDois, setTextoClicadoQuatro] = useState<string[]>([]);

  const handleChoice = (texto: string) => {
    setButtonStates(prevStates => {
      const updatedStates = { ...prevStates };

      if (updatedStates[texto]) {
        delete updatedStates[texto];

        setTextoClicadoQuatro(prevTextos => prevTextos.filter(t => t !== texto));
      } else {
        updatedStates[texto] = true;

        setTextoClicadoQuatro(prevTextos => [...prevTextos, texto]);
      }

      const lista04 = Object.keys(updatedStates).filter(key => updatedStates[key]);

      setTextoClicadoQuatro(lista04);
      localStorage.setItem('escolha04', lista04.join(', '));

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
  useEffect(() => {
    const addressSalvo = localStorage.getItem('Endereco');
    if (addressSalvo) {
      setAddress(addressSalvo);
    }
  }, []);

  const handleNomeEmpresaChange = () => {
    const inputElement = document.getElementById('adress') as HTMLInputElement;
    if (inputElement) {
      setAddress(inputElement.value);
    }
  };

  useEffect(() => {
    localStorage.setItem('Endereco', address);
  }, [address]);


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

        <div id="quention01">
          <div id="top-container" className="top-container">
            {showQuestion && (
              <div className="question-container">
                <img src="./images/logoQuestion.png" alt="" />
                <p className="question">
                  Informe a localização física de sua empresa (como o endereço de uma loja) ou a área que você atende (como região, cidade ou CEP)
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
                  <div className="normal-buttons-container">
                    <div
                      className={buttonStates['Empresa física'] ? 'local-button clicked' : 'local-button'}
                      onClick={() => handleChoice('Empresa física')}
                    >
                      <div>
                        <img className="choice-local-icon" src="./images/business.svg" alt="" />
                        <p className="local-text">Empresa física</p>
                      </div>
                    </div>
                    <div
                      className={buttonStates['Área de serviço'] ? 'local-button clicked' : 'local-button'}
                      onClick={() => handleChoice('Área de serviço')}
                    >
                      <div>
                        <img className="choice-local-icon" src="./images/service.svg" alt="" />
                        <p className="local-text">Área de serviço</p>
                      </div>
                    </div>
                    <div
                      className={buttonStates['Apenas online'] ? 'local-button clicked' : 'local-button'}
                      onClick={() => handleChoice('Apenas online')}
                    >
                      <div>
                        <img className="choice-local-icon" src="./images/online.svg" alt="" />
                        <p className="local-text">Apenas online</p>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`adress-container ${isPhysicalCompanySelected || isServiceAreaSelected ? '' : 'inactive'}`}
                  >
                    <p className="adress-label">
                      Insira endereço da sua empresa
                    </p>
                    <div className="adress-search-container">
                      <img className="search-icon" src="./images/browse.svg" alt="" />
                      <PlacesAutocomplete
                        value={address}
                        onChange={setAddress}
                        onSelect={handleAddressSelect}
                      >
                        {({ getInputProps, suggestions, getSuggestionItemProps, loading }: IChildProps) => (
                          <div>
                            <input
                              id="adress"
                              className="adress-search"
                              type="text"
                              {...getInputProps({
                                placeholder: "Número da casa, Cidade, Estado, CEP, País"
                              })}
                            />

                            <div className="autocomplete-dropdown-container">
                              {loading && <div>Carregando...</div>}
                              {suggestions.map((suggestion, index) => {
                                const className = suggestion.active
                                  ? "suggestion-item--active"
                                  : "suggestion-item";
                                return (
                                  <div
                                    {...getSuggestionItemProps({ suggestion, index })}
                                    key={index}
                                    className={className}
                                  >
                                    <span>{suggestion.description}</span>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        )}
                      </PlacesAutocomplete>
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
          <div className="button-back" onClick={props.voltarQuestion04}>
            <img className="button-back-icon" src="./images/back.svg" alt="" />
            <p className="button-back-text">Voltar</p>
          </div>
          <div className="button-continue" onClick={props.ocultarQuestion04}>
            <p className="button-continue-text">Continuar</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Question04;
