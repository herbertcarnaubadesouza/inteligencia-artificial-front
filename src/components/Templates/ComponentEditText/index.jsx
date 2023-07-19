import { useState, useEffect } from 'react';
import './edit.scss';
import { Link } from 'react-router-dom';
import { Pen, X } from '@phosphor-icons/react';

import Template01 from '../Template01/index';
import { useContext } from 'react';
import { TemplateContext } from '../useContext/TemplateContext';

function EditText() {
  const {
    temaTemplateEscolhido,
    setTemaTemplateEscolhido,
    endercoTemplate,
    setEndercoTemplate,
    nomeEmpresaTemplate,
    setNomeEmpresaTemplate,
    imageUrlHeader,
    setImageUrlHeader,
    imageUrlAbout,
    setImageUrlAbout,
    imageUrlParallax,
    setImageUrlParallax,
    imageUrlParallaxSegunda,
    setImageUrlParallaxSegunda,
    randomTitleFirmaText,
    setRandomTitleFirmaText,
    randomSubTitleHeaderText,
    setRandomSubTitleHeaderText,
    randomTextoAboutText,
    setRandomTextoAboutText,
    randomSloganParallaxText,
    setRandomSloganParallaxText,
    randomParallax01Text,
    setRandomParallax01Text,
    randomAboutFirmaText,
    setRandomAboutFirmaText,
    randomAreaAtuacaoOptions1Text,
    setRandomAreaAtuacaoOptions1Text,
    randomAreaAtuacaoOptions2Text,
    setRandomAreaAtuacaoOptions2Text,
    randomAreaAtuacaoOptions3Text,
    setRandomAreaAtuacaoOptions3Text,
    randomAreaAtuacaoOptions4Text,
    setRandomAreaAtuacaoOptions4Text,
    randomAreaAtuacaoOptions5Text,
    setRandomAreaAtuacaoOptions5Text,
    randomAreaAtuacaoOptions6Text,
    setRandomAreaAtuacaoOptions6Text,
    randomFooterText,
    setRandomFooterText,
    faleConoscoText,
    setFaleConoscoText,
    faleConoscoProfText,
    setFaleConoscoProfText,
    areaAtuacaoOptions1Text,
    setAreaAtuacaoOptions1Text,
    areaAtuacaoOptions2Text,
    setAreaAtuacaoOptions2Text,
    areaAtuacaoOptions3Text,
    setAreaAtuacaoOptions3Text,
    areaAtuacaoOptions4Text,
    setAreaAtuacaoOptions4Text,
    areaAtuacaoOptions5Text,
    setAreaAtuacaoOptions5Text,
    areaAtuacaoOptions6Text,
    setAreaAtuacaoOptions6Text,
    numeroCellText,
    setNumeroCellText,
    modalOpen,
    modalOpen01,
    modalOpen02,
    modalOpen03,
    modalOpen04,
    modalOpen05,
    setModalOpen,
    setModalOpen01,
    setModalOpen02,
    setModalOpen03,
    setModalOpen04,
    setModalOpen05,
    TemplateEscolhido,
    setTemplateEscolhido,
  } = useContext(TemplateContext);

  const handleImageChange = (event) => {
    const file = event.target.files?.[0];
    const reader = new FileReader();

    reader.onload = () => {
      const imageUrl = reader.result;
      setImageUrlHeader(imageUrl);

      localStorage.setItem('bannerTemplateHeader', imageUrl);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleImageChangeAbout = (event) => {
    const file = event.target.files?.[0];
    const reader = new FileReader();

    reader.onload = () => {
      const imageUrlAbout = reader.result;
      setImageUrlAbout(imageUrlAbout);

      localStorage.setItem('bannerTemplateHeader', imageUrlAbout);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleImageChangeParallax = (event) => {
    const file = event.target.files?.[0];
    const reader = new FileReader();

    reader.onload = () => {
      const imageUrlParallax = reader.result;
      setImageUrlParallax(imageUrlParallax);

      localStorage.setItem('bannerTemplateHeader', imageUrlParallax);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleImageChangeFooter = (event) => {
    const file = event.target.files?.[0];
    const reader = new FileReader();

    reader.onload = () => {
      const imageUrlParallaxSegunda = reader.result;
      setImageUrlParallaxSegunda(imageUrlParallaxSegunda);

      localStorage.setItem('bannerTemplateHeader', imageUrlParallaxSegunda);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };
  const handleSaveSection01 = () => {
    // Salvar os valores localmente ou executar a lógica necessária após o clique em salvar
    localStorage.setItem('nomeEmpresaTemplate', nomeEmpresaTemplate);
    localStorage.setItem('randomSubTitleHeaderText', randomSubTitleHeaderText);
    localStorage.setItem('faleConoscoText', faleConoscoText);
  };
  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="buttonContainer">
        <button onClick={toggleMenu}>
          {' '}
          <img src={isOpen ? './images/X.png' : './images/menu.png'} alt="" />
        </button>
      </div>
      <div className={`container-edit ${isOpen ? 'open' : ''}`}>
        <div className="openModal">
          <div className="scrolY">
            {TemplateEscolhido === '' || TemplateEscolhido === 'TEMPLATE01' ? (
              <>
                <div className={'container-secao01'}>
                  <h1>Personalizar seção 01 </h1>
                  <label>Nome da empresa</label>
                  <input
                    type="text"
                    value={nomeEmpresaTemplate}
                    onChange={(e) => setNomeEmpresaTemplate(e.target.value)}
                  />
                  <label>Mensagem distintiva</label>
                  <input
                    type="text"
                    value={randomSubTitleHeaderText}
                    onChange={(e) =>
                      setRandomSubTitleHeaderText(e.target.value)
                    }
                  />
                  <label>Personalizar texto do botão</label>
                  <input
                    type="text"
                    value={faleConoscoText}
                    onChange={(e) => setFaleConoscoText(e.target.value)}
                  />
                  <label>Personalizar imagem de fundo</label>
                  <input
                    type="file"
                    id="imageInput"
                    onChange={handleImageChange}
                  />
                  <button onClick={handleSaveSection01}>Salvar</button>
                </div>
                <div className={'container-secao02'}>
                  <h1>Personalizar seção 02</h1>
                  <label>Personalizar descrição da empresa</label>
                  <textarea
                    id="sobre"
                    value={randomTextoAboutText}
                    onChange={(e) => setRandomTextoAboutText(e.target.value)}
                  ></textarea>
                  <label>Personalizar imagem de fundo</label>
                  <input
                    type="file"
                    id="imageInput"
                    onChange={handleImageChangeAbout}
                  />
                </div>
                <div className={'container-secao03'}>
                  <h1>
                    Personalizar seção 03{' '}
                    <X
                      size={22}
                      weight="fill"
                      onClick={() => setModalOpen03(false)}
                    />
                  </h1>
                  <label>Mensagem distintiva</label>
                  <input
                    type="textarea"
                    value={randomSloganParallaxText}
                    onChange={(e) =>
                      setRandomSloganParallaxText(e.target.value)
                    }
                  />
                  <label>Personalizar texto de destaque</label>
                  <input
                    type="textarea"
                    value={randomParallax01Text}
                    onChange={(e) => setRandomParallax01Text(e.target.value)}
                  />
                  <label>Personalizar imagem de fundo</label>
                  <input
                    type="file"
                    id="imageInput"
                    onChange={handleImageChangeParallax}
                  />
                </div>
                <div className={'container-secao04'}>
                  <h1>
                    Editar secão 04{' '}
                    <X
                      size={22}
                      weight="fill"
                      onClick={() => setModalOpen04(false)}
                    />
                  </h1>

                  <label>Descrtivo da área de atuação</label>
                  <input
                    type="textarea"
                    value={randomAboutFirmaText}
                    onChange={(e) => setRandomAboutFirmaText(e.target.value)}
                  />

                  <h3>Titulo especialidades</h3>
                  <label htmlFor="imageInput">01</label>
                  <input
                    type="textarea"
                    value={areaAtuacaoOptions1Text}
                    onChange={(e) => setAreaAtuacaoOptions1Text(e.target.value)}
                  />
                  <label htmlFor="imageInput">02</label>
                  <input
                    type="textarea"
                    value={areaAtuacaoOptions2Text}
                    onChange={(e) => setAreaAtuacaoOptions2Text(e.target.value)}
                  />
                  <label htmlFor="imageInput">03</label>
                  <input
                    type="textarea"
                    value={areaAtuacaoOptions3Text}
                    onChange={(e) => setAreaAtuacaoOptions3Text(e.target.value)}
                  />
                  <label htmlFor="imageInput">04</label>
                  <input
                    type="textarea"
                    value={areaAtuacaoOptions4Text}
                    onChange={(e) => setAreaAtuacaoOptions4Text(e.target.value)}
                  />
                  <label htmlFor="imageInput">05</label>
                  <input
                    type="textarea"
                    value={areaAtuacaoOptions5Text}
                    onChange={(e) => setAreaAtuacaoOptions5Text(e.target.value)}
                  />
                  <label htmlFor="imageInput">06</label>
                  <input
                    type="textarea"
                    value={areaAtuacaoOptions6Text}
                    onChange={(e) => setAreaAtuacaoOptions6Text(e.target.value)}
                  />

                  <h3>Descriçoes especialidades</h3>
                  <label htmlFor="imageInput">01</label>
                  <input
                    type="textarea"
                    value={randomAreaAtuacaoOptions1Text}
                    onChange={(e) =>
                      setRandomAreaAtuacaoOptions1Text(e.target.value)
                    }
                  />

                  <label htmlFor="imageInput">02</label>
                  <input
                    type="textarea"
                    value={randomAreaAtuacaoOptions2Text}
                    onChange={(e) =>
                      setRandomAreaAtuacaoOptions2Text(e.target.value)
                    }
                  />
                  <label htmlFor="imageInput">03</label>
                  <input
                    type="textarea"
                    value={randomAreaAtuacaoOptions3Text}
                    onChange={(e) =>
                      setRandomAreaAtuacaoOptions3Text(e.target.value)
                    }
                  />
                  <label htmlFor="imageInput">04</label>
                  <input
                    type="textarea"
                    value={randomAreaAtuacaoOptions4Text}
                    onChange={(e) =>
                      setRandomAreaAtuacaoOptions4Text(e.target.value)
                    }
                  />
                  <label htmlFor="imageInput">05</label>
                  <input
                    type="textarea"
                    value={randomAreaAtuacaoOptions5Text}
                    onChange={(e) =>
                      setRandomAreaAtuacaoOptions5Text(e.target.value)
                    }
                  />
                  <label htmlFor="imageInput">06</label>
                  <input
                    type="textarea"
                    value={randomAreaAtuacaoOptions6Text}
                    onChange={(e) =>
                      setRandomAreaAtuacaoOptions6Text(e.target.value)
                    }
                  />
                </div>
                <div className={'container-secao05'}>
                  <h1>
                    Editar secão 05{' '}
                    <X
                      size={22}
                      weight="fill"
                      onClick={() => setModalOpen05(false)}
                    />
                  </h1>
                  <label>Texto chamativo</label>
                  <input
                    type="text"
                    value={faleConoscoProfText}
                    onChange={(e) => setFaleConoscoProfText(e.target.value)}
                  />
                  <label>Texto descritivo</label>
                  <input
                    type="text"
                    value={randomFooterText}
                    onChange={(e) => setRandomFooterText(e.target.value)}
                  />
                  <label>Personalizar imagem de fundo</label>
                  <input
                    type="file"
                    id="imageInput"
                    onChange={handleImageChangeFooter}
                  />
                </div>
              </>
            ) : null}
            {TemplateEscolhido === 'TEMPLATE02' ? (
              <>
                <h1>TEMPLATE02</h1>
              </>
            ) : null}
            {TemplateEscolhido === 'TEMPLATE03' ? (
              <>
                <h1>TEMPLATE03</h1>
              </>
            ) : null}
          </div>
        </div>
        <div className="down-container">
          <div className="nav-container-donw">
            <div className="button-back-donw">
              <img
                className="button-back-icon-donw"
                src="./images/back.svg"
                alt=""
              />
              <p className="button-back-text-donw">Voltar</p>
            </div>
            <div className="button-continue-donw">
              <p className="button-continue-text-donw">
                <Link to="/Edit">Continuar</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditText;
