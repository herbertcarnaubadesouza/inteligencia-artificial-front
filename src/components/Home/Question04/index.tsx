import { useEffect, useRef, useState } from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import { BeatLoader } from 'react-spinners';
import './question04.scss';
import { useNavigate } from 'react-router-dom';
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
    const topContainer = document.getElementById('atual');
    if (topContainer) {
      topContainer.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const [showQuestion, setShowQuestion] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  const [showLoading, setShowLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowQuestion(true), 10);
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

  const [buttonStates, setButtonStates] = useState<{ [key: string]: boolean }>(
    {},
  );
  const [textoClicadoDois, setTextoClicadoQuatro] = useState<string[]>([]);

  const handleChoice = (texto: string) => {
    setButtonStates((prevStates) => {
      const updatedStates = { ...prevStates };

      if (updatedStates[texto]) {
        delete updatedStates[texto];

        setTextoClicadoQuatro((prevTextos) =>
          prevTextos.filter((t) => t !== texto),
        );
      } else {
        updatedStates[texto] = true;

        setTextoClicadoQuatro((prevTextos) => [...prevTextos, texto]);
      }

      const lista04 = Object.keys(updatedStates).filter(
        (key) => updatedStates[key],
      );

      setTextoClicadoQuatro(lista04);
      localStorage.setItem('escolha04', lista04.join(', '));

      return updatedStates;
    });
  };

  const isPhysicalCompanySelected = buttonStates['Empresa física'];
  const isServiceAreaSelected = buttonStates['Área de serviço'];

  const addressInputRef = useRef(null);
  const [address, setAddress] = useState('');

  const handleAddressSelect = async (address: string) => {
    try {
      const results = await geocodeByAddress(address);
      const latLng = await getLatLng(results[0]);

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
  const navigate = useNavigate();

  const goToPreview = () => {
    navigate('/preview');
  };

  useEffect(() => {
    localStorage.setItem('Endereco', address);
  }, [address]);

  return (
    <>
      <div className="real-top-container">
        <div className="question01-label">
          <div className="question-label-containere">
            <img src="./images/logoFoxxy.svg" alt="" />
            <div className="questione-back">
              <p className="question-normal-labele" >
                Qual categoria melhor descreve o objetivo do seu site? (por exemplo, loja virtual, serviços online, portfólio, blog)
              </p>
            </div>
          </div>
        </div>

        <div className="question01-selected">
          <div className="question-selected-container">
            <img src="./images/selected.svg" alt="" />
            <p className="question-selected-labele">
              Minha escolha: {localStorage.getItem('textoClicado')}
            </p>
          </div>
        </div>


        <div className="question01-label">
          <div className="question-label-container">
            <img src="./images/logoFoxxy.svg" alt="" />
            <div className="question-backe">
              <p className="question-normal-labele">
                Então, como você quer que sua empresa seja chamada?
              </p>
            </div>
          </div>
        </div>

        <div className="question01-selected">
          <div className="question-selected-container">
            <img src="./images/selected.svg" alt="" />
            <p className="question-selected-labele">
              Minhas escolha: {localStorage.getItem('nomeEmpresa')}
            </p>
          </div>
        </div>

        <div id="quention01">
          <div id="top-container" className="top-containere">
            {showQuestion && (
              <div id="atual" className="question-container">
                <img src="./images/logoFoxxy.svg" alt="" />
                <div className="question-backe">
                  <p className="questione">
                    Informe a localização física de sua empresa (como o endereço
                    de uma loja) ou a área que você atende
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
                  <div className="normal-buttons-containere">
                    <div
                      className={
                        buttonStates['Empresa física']
                          ? 'local-buttone clicked'
                          : 'local-buttone'
                      }
                      onClick={() => handleChoice('Empresa física')}
                    >
                      <div className='flex'>
                        <img
                          className="choice-local-icon"
                          src="./images/business.svg"
                          alt=""
                        />
                        <p className="local-texte">Empresa física</p>
                      </div>
                    </div>
                    <div
                      className={
                        buttonStates['Área de serviço']
                          ? 'local-buttone clicked'
                          : 'local-buttone'
                      }
                      onClick={() => handleChoice('Área de serviço')}
                    >
                      <div className='flex'>
                        <img
                          className="choice-local-icon"
                          src="./images/service.svg"
                          alt=""
                        />
                        <p className="local-texte">Área de serviço</p>
                      </div>
                    </div>
                    <div
                      className={
                        buttonStates['Apenas online']
                          ? 'local-buttone clicked'
                          : 'local-buttone'
                      }
                      onClick={() => handleChoice('Apenas online')}
                    >
                      <div className='flex'>
                        <img
                          className="choice-local-icon"
                          src="./images/online.svg"
                          alt=""
                        />
                        <p className="local-texte">Apenas online</p>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`adress-container ${isPhysicalCompanySelected || isServiceAreaSelected
                      ? ''
                      : 'inactive'
                      }`}
                  >
                    <p className="adress-labele">
                      Insira endereço da sua empresa
                    </p>
                    <div className="search-containere">
                      <img
                        className="search-icone"
                        src="./images/browse.svg"
                        alt=""
                      />
                      <PlacesAutocomplete
                        value={address}
                        onChange={setAddress}
                        onSelect={handleAddressSelect}
                      >
                        {({
                          getInputProps,
                          suggestions,
                          getSuggestionItemProps,
                          loading,
                        }: IChildProps) => (
                          <div className="adress-search-input">
                            <input
                              id="adress"
                              className="searche"
                              type="text"
                              {...getInputProps({
                                placeholder:
                                  'N° da casa, Cidade, Estado, CEP, País',
                              })}
                            />

                            <div className="autocomplete-dropdown-containere">
                              {loading && <div className='carregando'>Carregando...</div>}
                              {suggestions.map((suggestion, index) => {
                                const className = suggestion.active
                                  ? 'suggestion-item--activee'
                                  : 'suggestion-iteme';
                                return (
                                  <div
                                    {...getSuggestionItemProps({
                                      suggestion,
                                      index,
                                    })}
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
        </div>
      </div>

      <div className="down-container">
        <div className="linhae"></div>
        <div className="nav-container">
          <div className="button-back" onClick={props.voltarQuestion04}>
            <img className="button-back-icone" src="./images/back.svg" alt="" />
            <p className="button-back-texte">VOLTAR</p>
          </div>
          <div className={`button-continuee ${address === "" ? 'disabled' : ''}`}
            onClick={() => {
              if (address !== "") {
                goToPreview();
              }
            }}>

            <p className="button-continue-text">CONTINUAR</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Question04;
