import { useState, useEffect } from 'react';
import './edit.scss';
import { Link } from 'react-router-dom';
import { Pen, X } from '@phosphor-icons/react';

import Template01 from '../Template01/index';
import { useContext } from 'react';
import { TemplateContext } from '../useContext/TemplateContext';
import { useNavigate } from 'react-router-dom';

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
    randomSubTitleHeaderText2,
    setRandomSubTitleHeaderText2,
    whyChooseUs,
    whyChooseUsOption01,
    whyChooseUsOption02,
    whyChooseUsOption03,
    setWhyChooseUs,
    setWhyChooseUsOption01,
    setWhyChooseUsOption02,
    setWhyChooseUsOption03,
    numbers01,
    numbers02,
    numbers03,
    numbers04,
    setNumbers01,
    setNumbers02,
    setNumbers03,
    setNumbers04,
    compromissoOption1TextDescripition1,
    compromissoOption2TextDescripition2,
    compromissoOption3TextDescripition3,
    compromissoOption1Text,
    compromissoOption2Text,
    compromissoOption3Text,
    setCompromissoOption1Text,
    setCompromissoOption2Text,
    setCompromissoOption3Text,
    setCompromissoOption1TextDescripition1,
    setCompromissoOption2TextDescripition2,
    setCompromissoOption3TextDescripition3,
    handleInputFocus01,
    handleInputBlur01,
    handleInputFocus02,
    handleInputBlur02,
    handleInputFocus03,
    handleInputBlur03,
    handleInputFocus04,
    handleInputBlur04,
    handleInputFocus05,
    handleInputBlur05,
    handleInputFocus06,
    handleInputBlur06,
    handleInputFocus07,
    handleInputBlur07,
    handleInputFocus08,
    handleInputBlur08,
    handleInputFocus09,
    handleInputBlur09,
    handleInputFocus10,
    handleInputBlur10,
    handleInputFocus11,
    handleInputBlur11,
    handleInputFocus12,
    handleInputBlur12,
    handleInputFocus13,
    handleInputBlur13,
    handleInputFocus14,
    handleInputBlur14,
    handleInputFocus15,
    handleInputBlur15,
    handleInputFocus16,
    handleInputBlur16,
    handleInputFocus17,
    handleInputBlur17,
    handleInputFocus18,
    handleInputBlur18,
    handleInputFocus19,
    handleInputBlur19,
    handleInputFocus20,
    handleInputBlur20,
    handleInputFocus21,
    handleInputBlur21,
    handleInputFocus22,
    handleInputBlur22,
    handleInputFocus23,
    handleInputBlur23,
    handleInputFocus24,
    handleInputBlur24,
    handleInputFocus25,
    handleInputBlur25,
    handleInputFocus26,
    handleInputBlur26,
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

      localStorage.setItem('bannerTemplateAbout', imageUrlAbout);
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

      localStorage.setItem('bannerTemplateParallax01', imageUrlParallax);
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

      localStorage.setItem('bannerTemplateParallax02', imageUrlParallaxSegunda);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };
  const handleSaveSection01 = () => {
    localStorage.setItem('nomeEmpresaTemplate', nomeEmpresaTemplate);
    localStorage.setItem('nomeEmpresa', nomeEmpresaTemplate);

    localStorage.setItem('numeroCellText', numeroCellText);
    localStorage.setItem('faleConoscoText', faleConoscoText);
    localStorage.setItem('bannerTemplateHeader', imageUrlHeader);
    localStorage.setItem('bannerTemplateHeadertemplate02', imageUrlHeader);
    localStorage.setItem('bannerTemplateHeaderTemplate03', imageUrlHeader);
    localStorage.setItem(
      'randomSubTitleHeaderTexttemplate02',
      randomSubTitleHeaderText,
    );
    localStorage.setItem('randomSubTitleHeaderText', randomSubTitleHeaderText);
  };

  const handleSaveSection02 = () => {
    localStorage.setItem('randomTextoAbout', randomTextoAboutText);
    localStorage.setItem('randomTextoAbouttemplate02', randomTextoAboutText);
    localStorage.setItem('randomTextoAboutTemplate03', randomTextoAboutText);

    localStorage.setItem(
      'randomSubTitleHeaderTexttemplate02',
      randomSubTitleHeaderText2,
    );

    localStorage.setItem('bannerTemplateAbout', imageUrlAbout);
    localStorage.setItem('bannerTemplateAbouttemplate02', imageUrlAbout);
    localStorage.setItem('bannerTemplateAboutTemplate03', imageUrlAbout);
    localStorage.setItem('randomTextoAbouttemplate02', randomTextoAboutText);
  };

  const handleSaveSection03 = () => {
    localStorage.setItem('randomSloganParallaxText', randomSloganParallaxText);
    localStorage.setItem('randomParallax01', randomParallax01Text);
    localStorage.setItem('bannerTemplateParallax01', imageUrlParallax);
  };
  const handleSaveSection04 = () => {
    localStorage.setItem('randomAboutFirma', randomAboutFirmaText);

    localStorage.setItem('areaAtuacaoOptions1Text', areaAtuacaoOptions1Text);
    localStorage.setItem('areaAtuacaoOptions2Text', areaAtuacaoOptions2Text);
    localStorage.setItem('areaAtuacaoOptions3Text', areaAtuacaoOptions3Text);
    localStorage.setItem('areaAtuacaoOptions4Text', areaAtuacaoOptions4Text);
    localStorage.setItem('areaAtuacaoOptions5Text', areaAtuacaoOptions5Text);
    localStorage.setItem('areaAtuacaoOptions6Text', areaAtuacaoOptions6Text);

    localStorage.setItem(
      'randomAreaAtuacaoOptions1Text',
      randomAreaAtuacaoOptions1Text,
    );
    localStorage.setItem(
      'randomAreaAtuacaoOptions2Text',
      randomAreaAtuacaoOptions2Text,
    );
    localStorage.setItem(
      'randomAreaAtuacaoOptions3Text',
      randomAreaAtuacaoOptions3Text,
    );
    localStorage.setItem(
      'randomAreaAtuacaoOptions4Text',
      randomAreaAtuacaoOptions4Text,
    );
    localStorage.setItem(
      'randomAreaAtuacaoOptions5Text',
      randomAreaAtuacaoOptions5Text,
    );
    localStorage.setItem(
      'randomAreaAtuacaoOptions6Text',
      randomAreaAtuacaoOptions6Text,
    );

    localStorage.setItem(
      'randomAreaAtuacaoOptions1Texttemplate02',
      randomAreaAtuacaoOptions1Text,
    );
    localStorage.setItem(
      'randomAreaAtuacaoOptions2Texttemplate02',
      randomAreaAtuacaoOptions2Text,
    );
    localStorage.setItem(
      'randomAreaAtuacaoOptions3Texttemplate02',
      randomAreaAtuacaoOptions3Text,
    );
    localStorage.setItem(
      'randomAreaAtuacaoOptions4Texttemplate02',
      randomAreaAtuacaoOptions4Text,
    );
    localStorage.setItem(
      'randomAreaAtuacaoOptions5Texttemplate02',
      randomAreaAtuacaoOptions5Text,
    );
    localStorage.setItem(
      'randomAreaAtuacaoOptions6Texttemplate02',
      randomAreaAtuacaoOptions6Text,
    );

    localStorage.setItem('whyChooseUs', whyChooseUs);
    localStorage.setItem('whyChooseUsOption01', whyChooseUsOption01);
    localStorage.setItem('whyChooseUsOption02', whyChooseUsOption02);
    localStorage.setItem('whyChooseUsOption03', whyChooseUsOption03);

    localStorage.setItem('numbers01', numbers01);
    localStorage.setItem('numbers02', numbers02);
    localStorage.setItem('numbers03', numbers03);
    localStorage.setItem('numbers04', numbers04);
  };

  const handleSaveSection05 = () => {
    localStorage.setItem('faleConoscoProfText', faleConoscoProfText);
    localStorage.setItem('randomFooter', randomFooterText);
    localStorage.setItem('bannerTemplateParallax02', imageUrlParallaxSegunda);
    localStorage.setItem('numeroCellText', numeroCellText);
    localStorage.setItem('randomAboutFirmatemplate02', randomAboutFirmaText);

    localStorage.setItem('randomAboutFirmatemplate02', randomAboutFirmaText);

    localStorage.setItem('randomAboutFirmatemplate02', randomAboutFirmaText);
  };

  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const handleFileChange = (event) => {
    const file = event.target.files?.[0];
    setSelectedFile(file || null);

    if (file) {
      setIsFileSelected(true);
    }
  };

  const handleClick = () => {
    const fileInput = document.getElementById('fileInput');
    if (fileInput) {
      fileInput.click();
    }
  };

  const fileInputAbout = () => {
    const fileInputAbout = document.getElementById('fileInputAbout');
    if (fileInputAbout) {
      fileInputAbout.click();
    }
  };

  const fileInputFooter = () => {
    const fileInputFooter = document.getElementById('fileInputFooter');
    if (fileInputFooter) {
      fileInputFooter.click();
    }
  };

  const fileInputParralax = () => {
    const fileInputParralax = document.getElementById('fileInputParralax');
    if (fileInputParralax) {
      fileInputParralax.click();
    }
  };
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/preview');
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
            <div className="template-buttons-container-h2">
              <img src="./images/tinta.png" alt="" />
              <h2 className="style-h2"> Edição de Textos</h2>
            </div>
            {TemplateEscolhido === '' || TemplateEscolhido === 'TEMPLATE01' ? (
              <>
                <div className={'container-secao01'}>
                  <h1>Personalizar seção 01 </h1>
                  <label>Nome da empresa</label>
                  <input
                    type="text"
                    value={nomeEmpresaTemplate}
                    onChange={(e) => setNomeEmpresaTemplate(e.target.value)}
                    onFocus={handleInputFocus01}
                    onBlur={handleInputBlur01}
                  />
                  <label>Mensagem distintiva</label>
                  <input
                    type="text"
                    value={randomSubTitleHeaderText}
                    onChange={(e) =>
                      setRandomSubTitleHeaderText(e.target.value)
                    }
                    onFocus={handleInputFocus02}
                    onBlur={handleInputBlur02}
                  />
                  <label>Personalizar texto do botão</label>
                  <input
                    type="text"
                    value={faleConoscoText}
                    onChange={(e) => setFaleConoscoText(e.target.value)}
                    onFocus={handleInputFocus03}
                    onBlur={handleInputBlur03}
                  />
                  <label>Personalizar imagem de fundo</label>

                  <div className="PrintContainer">
                    <label htmlFor="fileInput" className="LabelUpload">
                      Arraste e jogue seu anexo aqui
                    </label>
                    <input
                      type="file"
                      accept=".pdf, .jpeg, .jpg, .png"
                      onChange={handleImageChange}
                      id="fileInput"
                      style={{ display: 'none' }}
                    />
                    <button className="UploadButtone" onClick={handleClick}>
                      Escolher arquivo
                    </button>

                    <p className="UploadInfo">
                      Formatos aceitos PDF, JPEG e PNG
                    </p>
                  </div>
                  <button onClick={handleSaveSection01}>Salvar</button>
                </div>
                <div className={'container-secao02'}>
                  <h1>Personalizar seção 02</h1>
                  <label>Personalizar descrição da empresa</label>
                  <textarea
                    id="textarea"
                    value={randomTextoAboutText}
                    onChange={(e) => setRandomTextoAboutText(e.target.value)}
                    onFocus={handleInputFocus04}
                    onBlur={handleInputBlur04}
                  ></textarea>
                  <label>Personalizar imagem de fundo</label>

                  <div className="PrintContainer">
                    <label htmlFor="fileInput" className="LabelUpload">
                      Arraste e jogue seu anexo aqui
                    </label>
                    <input
                      type="file"
                      accept=".pdf, .jpeg, .jpg, .png"
                      onChange={handleImageChangeAbout}
                      id="fileInputAbout"
                      style={{ display: 'none' }}
                    />
                    <button className="UploadButtone" onClick={fileInputAbout}>
                      Escolher arquivo
                    </button>

                    <p className="UploadInfo">
                      Formatos aceitos PDF, JPEG e PNG
                    </p>
                  </div>
                  <button onClick={handleSaveSection02}>Salvar</button>
                </div>
                <div className={'container-secao03'}>
                  <h1>Personalizar seção 03</h1>
                  <label>Mensagem distintiva</label>
                  <input
                    type="textarea"
                    value={randomSloganParallaxText}
                    onChange={(e) =>
                      setRandomSloganParallaxText(e.target.value)
                    }
                    onFocus={handleInputFocus06}
                    onBlur={handleInputBlur06}
                  />
                  <label>Personalizar texto de destaque</label>
                  <textarea
                    id="textarea"
                    type="textarea"
                    value={randomParallax01Text}
                    onChange={(e) => setRandomParallax01Text(e.target.value)}
                    onFocus={handleInputFocus07}
                    onBlur={handleInputBlur07}
                  />
                  <label>Personalizar imagem de fundo</label>

                  <div className="PrintContainer">
                    <label htmlFor="fileInput" className="LabelUpload">
                      Arraste e jogue seu anexo aqui
                    </label>
                    <input
                      type="file"
                      accept=".pdf, .jpeg, .jpg, .png"
                      onChange={handleImageChangeParallax}
                      id="fileInputParralax"
                      style={{ display: 'none' }}
                    />
                    <button
                      className="UploadButtone"
                      onClick={fileInputParralax}
                    >
                      Escolher arquivo
                    </button>

                    <p className="UploadInfo">
                      Formatos aceitos PDF, JPEG e PNG
                    </p>
                  </div>
                  <button onClick={handleSaveSection03}>Salvar</button>
                </div>
                <div className={'container-secao04'}>
                  <h1>Editar secão 04</h1>

                  <label>Descrtivo da área de atuação</label>
                  <input
                    type="textarea"
                    value={randomAboutFirmaText}
                    onChange={(e) => setRandomAboutFirmaText(e.target.value)}
                    onFocus={handleInputFocus08}
                    onBlur={handleInputBlur08}
                  />

                  <h3>Titulo especialidades</h3>
                  <label htmlFor="imageInput">01</label>
                  <input
                    type="textarea"
                    value={areaAtuacaoOptions1Text}
                    onChange={(e) => setAreaAtuacaoOptions1Text(e.target.value)}
                    onFocus={handleInputFocus10}
                    onBlur={handleInputBlur10}
                  />
                  <label htmlFor="imageInput">02</label>
                  <input
                    type="textarea"
                    value={areaAtuacaoOptions2Text}
                    onChange={(e) => setAreaAtuacaoOptions2Text(e.target.value)}
                    onFocus={handleInputFocus12}
                    onBlur={handleInputBlur12}
                  />
                  <label htmlFor="imageInput">03</label>
                  <input
                    type="textarea"
                    value={areaAtuacaoOptions3Text}
                    onChange={(e) => setAreaAtuacaoOptions3Text(e.target.value)}
                    onFocus={handleInputFocus14}
                    onBlur={handleInputBlur14}
                  />
                  <label htmlFor="imageInput">04</label>
                  <input
                    type="textarea"
                    value={areaAtuacaoOptions4Text}
                    onChange={(e) => setAreaAtuacaoOptions4Text(e.target.value)}
                    onFocus={handleInputFocus16}
                    onBlur={handleInputBlur16}
                  />
                  <label htmlFor="imageInput">05</label>
                  <input
                    type="textarea"
                    value={areaAtuacaoOptions5Text}
                    onChange={(e) => setAreaAtuacaoOptions5Text(e.target.value)}
                    onFocus={handleInputFocus18}
                    onBlur={handleInputBlur18}
                  />
                  <label htmlFor="imageInput">06</label>
                  <input
                    type="textarea"
                    value={areaAtuacaoOptions6Text}
                    onChange={(e) => setAreaAtuacaoOptions6Text(e.target.value)}
                    onFocus={handleInputFocus20}
                    onBlur={handleInputBlur20}
                  />

                  <h3>Descriçoes especialidades</h3>
                  <label htmlFor="imageInput">01</label>
                  <textarea
                    id="textarea"
                    type="textarea"
                    value={randomAreaAtuacaoOptions1Text}
                    onChange={(e) =>
                      setRandomAreaAtuacaoOptions1Text(e.target.value)
                    }
                    onFocus={handleInputFocus11}
                    onBlur={handleInputBlur11}
                  />

                  <label htmlFor="imageInput">02</label>
                  <textarea
                    id="textarea"
                    type="textarea"
                    value={randomAreaAtuacaoOptions2Text}
                    onChange={(e) =>
                      setRandomAreaAtuacaoOptions2Text(e.target.value)
                    }
                    onFocus={handleInputFocus13}
                    onBlur={handleInputBlur13}
                  />
                  <label htmlFor="imageInput">03</label>
                  <textarea
                    id="textarea"
                    type="textarea"
                    value={randomAreaAtuacaoOptions3Text}
                    onChange={(e) =>
                      setRandomAreaAtuacaoOptions3Text(e.target.value)
                    }
                    onFocus={handleInputFocus15}
                    onBlur={handleInputBlur15}
                  />
                  <label htmlFor="imageInput">04</label>
                  <textarea
                    id="textarea"
                    type="textarea"
                    value={randomAreaAtuacaoOptions4Text}
                    onChange={(e) =>
                      setRandomAreaAtuacaoOptions4Text(e.target.value)
                    }
                    onFocus={handleInputFocus17}
                    onBlur={handleInputBlur17}
                  />
                  <label htmlFor="imageInput">05</label>
                  <textarea
                    id="textarea"
                    type="textarea"
                    value={randomAreaAtuacaoOptions5Text}
                    onChange={(e) =>
                      setRandomAreaAtuacaoOptions5Text(e.target.value)
                    }
                    onFocus={handleInputFocus19}
                    onBlur={handleInputBlur19}
                  />
                  <label htmlFor="imageInput">06</label>
                  <textarea
                    id="textarea"
                    type="textarea"
                    value={randomAreaAtuacaoOptions6Text}
                    onChange={(e) =>
                      setRandomAreaAtuacaoOptions6Text(e.target.value)
                    }
                    onFocus={handleInputFocus21}
                    onBlur={handleInputBlur21}
                  />
                  <button onClick={handleSaveSection04}>Salvar</button>
                </div>
                <div className={'container-secao05'}>
                  <h1>Editar secão 05</h1>
                  <label>Texto chamativo</label>
                  <input
                    type="text"
                    value={faleConoscoProfText}
                    onChange={(e) => setFaleConoscoProfText(e.target.value)}
                    onFocus={handleInputFocus23}
                    onBlur={handleInputBlur23}
                  />

                  <label>Texto descritivo</label>
                  <textarea
                    id="textarea"
                    type="text"
                    value={randomFooterText}
                    onChange={(e) => setRandomFooterText(e.target.value)}
                    onFocus={handleInputFocus24}
                    onBlur={handleInputBlur24}
                  />
                  <label>Numero de Contato</label>
                  <input
                    type="text"
                    value={numeroCellText}
                    onChange={(e) => {
                      const formattedValue = e.target.value.replace(/\D/g, ''); // Remove tudo que não é dígito (número)
                      setNumeroCellText(formattedValue);
                    }}
                    onFocus={handleInputFocus25}
                    onBlur={handleInputBlur25}
                    pattern="\(\d{2}\) \d{1} \d{4}-\d{4}"
                    title="Insira um número de telefone válido (XX) X XXXX-XXXX"
                  />

                  <label>Personalizar imagem de fundo</label>
                  <div className="PrintContainer">
                    <label htmlFor="fileInput" className="LabelUpload">
                      Arraste e jogue seu anexo aqui
                    </label>
                    <input
                      type="file"
                      accept=".pdf, .jpeg, .jpg, .png"
                      onChange={handleImageChangeFooter}
                      id="fileInputFooter"
                      style={{ display: 'none' }}
                    />
                    <button className="UploadButtone" onClick={fileInputFooter}>
                      Escolher arquivo
                    </button>

                    <p className="UploadInfo">
                      Formatos aceitos PDF, JPEG e PNG
                    </p>
                  </div>
                  <button onClick={handleSaveSection05}>Salvar</button>
                </div>
              </>
            ) : null}
            {TemplateEscolhido === 'TEMPLATE02' ? (
              <>
                <div className={'container-secao01'}>
                  <h1>Personalizar seção 01 </h1>
                  <label>Nome da empresa</label>
                  <input
                    type="text"
                    value={nomeEmpresaTemplate}
                    onChange={(e) => setNomeEmpresaTemplate(e.target.value)}
                    onFocus={handleInputFocus01}
                    onBlur={handleInputBlur01}
                  />

                  <label>Numero de Contato</label>
                  <input
                    type="text"
                    value={numeroCellText}
                    onChange={(e) => {
                      const formattedValue = e.target.value.replace(/\D/g, ''); // Remove tudo que não é dígito (número)
                      setNumeroCellText(formattedValue);
                    }}
                    pattern="\(\d{2}\) \d{1} \d{4}-\d{4}"
                    title="Insira um número de telefone válido (XX) X XXXX-XXXX"
                    onFocus={handleInputFocus02}
                    onBlur={handleInputBlur02}
                  />
                  <label>Personalizar imagem de fundo</label>
                  <div className="PrintContainer">
                    <label htmlFor="fileInput" className="LabelUpload">
                      Arraste e jogue seu anexo aqui
                    </label>
                    <input
                      type="file"
                      accept=".pdf, .jpeg, .jpg, .png"
                      onChange={handleImageChange}
                      id="fileInput"
                      style={{ display: 'none' }}
                    />
                    <button className="UploadButtone" onClick={handleClick}>
                      Escolher arquivo
                    </button>

                    <p className="UploadInfo">
                      Formatos aceitos PDF, JPEG e PNG
                    </p>
                  </div>
                  <button onClick={handleSaveSection01}>Salvar</button>
                </div>
                <div className={'container-secao02'}>
                  <h1>Personalizar seção 02</h1>
                  <label>Personalizar descrição da empresa</label>
                  <textarea
                    id="textarea"
                    value={randomTextoAboutText}
                    onChange={(e) => setRandomTextoAboutText(e.target.value)}
                    onFocus={handleInputFocus03}
                    onBlur={handleInputBlur03}
                  ></textarea>
                  <label>Mensagem distintiva</label>
                  <input
                    type="text"
                    value={randomSubTitleHeaderText2}
                    onChange={(e) =>
                      setRandomSubTitleHeaderText2(e.target.value)
                    }
                    onFocus={handleInputFocus04}
                    onBlur={handleInputBlur04}
                  />
                  <label>Personalizar imagem de fundo</label>

                  <div className="PrintContainer">
                    <label htmlFor="fileInput" className="LabelUpload">
                      Arraste e jogue seu anexo aqui
                    </label>
                    <input
                      type="file"
                      accept=".pdf, .jpeg, .jpg, .png"
                      onChange={handleImageChangeAbout}
                      id="fileInputAbout"
                      style={{ display: 'none' }}
                    />
                    <button className="UploadButtone" onClick={fileInputAbout}>
                      Escolher arquivo
                    </button>

                    <p className="UploadInfo">
                      Formatos aceitos PDF, JPEG e PNG
                    </p>
                  </div>
                  <button onClick={handleSaveSection02}>Salvar</button>
                </div>

                <div className={'container-secao03'}>
                  <h1>Editar secão 03</h1>

                  <h3>Titulo especialidades</h3>
                  <label htmlFor="imageInput">01</label>
                  <input
                    type="textarea"
                    value={areaAtuacaoOptions1Text}
                    onChange={(e) => setAreaAtuacaoOptions1Text(e.target.value)}
                    onFocus={handleInputFocus05}
                    onBlur={handleInputBlur05}
                  />
                  <label htmlFor="imageInput">02</label>
                  <input
                    type="textarea"
                    value={areaAtuacaoOptions2Text}
                    onChange={(e) => setAreaAtuacaoOptions2Text(e.target.value)}
                    onFocus={handleInputFocus06}
                    onBlur={handleInputBlur06}
                  />
                  <label htmlFor="imageInput">03</label>
                  <input
                    type="textarea"
                    value={areaAtuacaoOptions3Text}
                    onChange={(e) => setAreaAtuacaoOptions3Text(e.target.value)}
                    onFocus={handleInputFocus07}
                    onBlur={handleInputBlur07}
                  />
                  <label htmlFor="imageInput">04</label>
                  <input
                    type="textarea"
                    value={areaAtuacaoOptions4Text}
                    onChange={(e) => setAreaAtuacaoOptions4Text(e.target.value)}
                    onFocus={handleInputFocus08}
                    onBlur={handleInputBlur08}
                  />
                  <label htmlFor="imageInput">05</label>
                  <input
                    type="textarea"
                    value={areaAtuacaoOptions5Text}
                    onChange={(e) => setAreaAtuacaoOptions5Text(e.target.value)}
                    onFocus={handleInputFocus09}
                    onBlur={handleInputBlur09}
                  />
                  <label htmlFor="imageInput">06</label>
                  <input
                    type="textarea"
                    value={areaAtuacaoOptions6Text}
                    onChange={(e) => setAreaAtuacaoOptions6Text(e.target.value)}
                    onFocus={handleInputFocus10}
                    onBlur={handleInputBlur10}
                  />

                  <h3>Descriçoes especialidades</h3>
                  <label htmlFor="imageInput">01</label>
                  <textarea
                    id="textarea"
                    type="textarea"
                    value={randomAreaAtuacaoOptions1Text}
                    onChange={(e) =>
                      setRandomAreaAtuacaoOptions1Text(e.target.value)
                    }
                    onFocus={handleInputFocus11}
                    onBlur={handleInputBlur11}
                  />

                  <label htmlFor="imageInput">02</label>
                  <textarea
                    id="textarea"
                    type="textarea"
                    value={randomAreaAtuacaoOptions2Text}
                    onChange={(e) =>
                      setRandomAreaAtuacaoOptions2Text(e.target.value)
                    }
                    onFocus={handleInputFocus12}
                    onBlur={handleInputBlur12}
                  />
                  <label htmlFor="imageInput">03</label>
                  <textarea
                    id="textarea"
                    type="textarea"
                    value={randomAreaAtuacaoOptions3Text}
                    onChange={(e) =>
                      setRandomAreaAtuacaoOptions3Text(e.target.value)
                    }
                    onFocus={handleInputFocus13}
                    onBlur={handleInputBlur13}
                  />
                  <label htmlFor="imageInput">04</label>
                  <textarea
                    id="textarea"
                    type="textarea"
                    value={randomAreaAtuacaoOptions4Text}
                    onChange={(e) =>
                      setRandomAreaAtuacaoOptions4Text(e.target.value)
                    }
                    onFocus={handleInputFocus14}
                    onBlur={handleInputBlur14}
                  />
                  <label htmlFor="imageInput">05</label>
                  <textarea
                    id="textarea"
                    type="textarea"
                    value={randomAreaAtuacaoOptions5Text}
                    onChange={(e) =>
                      setRandomAreaAtuacaoOptions5Text(e.target.value)
                    }
                    onFocus={handleInputFocus15}
                    onBlur={handleInputBlur15}
                  />
                  <label htmlFor="imageInput">06</label>
                  <textarea
                    id="textarea"
                    type="textarea"
                    value={randomAreaAtuacaoOptions6Text}
                    onChange={(e) =>
                      setRandomAreaAtuacaoOptions6Text(e.target.value)
                    }
                    onFocus={handleInputFocus16}
                    onBlur={handleInputBlur16}
                  />
                  <button onClick={handleSaveSection04}>Salvar</button>
                </div>
                <div className={'container-secao04'}>
                  <h1>Editar secão 04</h1>
                  <label>Personalizar Titulo</label>
                  <input
                    type="text"
                    value={whyChooseUs}
                    onChange={(e) => setWhyChooseUs(e.target.value)}
                    onFocus={handleInputFocus17}
                    onBlur={handleInputBlur17}
                  />
                  <label>Personalizar Habilidades e Expertise 01 </label>
                  <input
                    type="text"
                    value={whyChooseUsOption01}
                    onChange={(e) => setWhyChooseUsOption01(e.target.value)}
                    onFocus={handleInputFocus18}
                    onBlur={handleInputBlur18}
                  />
                  <label>Personalizar Habilidades e Expertise 02 </label>
                  <input
                    type="text"
                    value={whyChooseUsOption02}
                    onChange={(e) => setWhyChooseUsOption02(e.target.value)}
                    onFocus={handleInputFocus19}
                    onBlur={handleInputBlur19}
                  />
                  <label>Personalizar Habilidades e Expertise 03 </label>
                  <input
                    type="text"
                    value={whyChooseUsOption03}
                    onChange={(e) => setWhyChooseUsOption03(e.target.value)}
                    onFocus={handleInputFocus20}
                    onBlur={handleInputBlur20}
                  />

                  <label>Personalizar números de Clientes </label>
                  <input
                    type="text"
                    value={numbers01}
                    onChange={(e) => setNumbers01(e.target.value)}
                    onFocus={handleInputFocus21}
                    onBlur={handleInputBlur21}
                  />
                  <label>Personalizar Anos no Mercado </label>
                  <input
                    type="text"
                    value={numbers02}
                    onChange={(e) => setNumbers02(e.target.value)}
                    onFocus={handleInputFocus22}
                    onBlur={handleInputBlur22}
                  />
                  <label>Personalizar números de Profissionais</label>
                  <input
                    type="text"
                    value={numbers03}
                    onChange={(e) => setNumbers03(e.target.value)}
                    onFocus={handleInputFocus23}
                    onBlur={handleInputBlur23}
                  />
                  <label>Personalizar % de Satisfação</label>
                  <input
                    type="text"
                    value={numbers04}
                    onChange={(e) => setNumbers04(e.target.value)}
                    onFocus={handleInputFocus24}
                    onBlur={handleInputBlur24}
                  />

                  <label>Personalizar imagem de fundo</label>
                  <div className="PrintContainer">
                    <label htmlFor="fileInput" className="LabelUpload">
                      Arraste e jogue seu anexo aqui
                    </label>
                    <input
                      type="file"
                      accept=".pdf, .jpeg, .jpg, .png"
                      onChange={handleImageChangeParallax}
                      id="fileInputParralax"
                      style={{ display: 'none' }}
                    />
                    <button
                      className="UploadButtone"
                      onClick={fileInputParralax}
                    >
                      Escolher arquivo
                    </button>

                    <p className="UploadInfo">
                      Formatos aceitos PDF, JPEG e PNG
                    </p>
                  </div>
                  <button onClick={handleSaveSection04}>Salvar</button>
                </div>
                <div className={'container-secao05'}>
                  <h1>Personalizar seção 05 </h1>
                  <label>Personalizar texto do botão</label>
                  <input
                    type="text"
                    value={faleConoscoText}
                    onChange={(e) => setFaleConoscoText(e.target.value)}
                    onFocus={handleInputFocus25}
                    onBlur={handleInputBlur25}
                  />

                  <button onClick={handleSaveSection01}>Salvar</button>
                </div>
              </>
            ) : null}
            {TemplateEscolhido === 'TEMPLATE03' ? (
              <>
                <div className={'container-secao01'}>
                  <h1>Personalizar seção 01 </h1>
                  <label>Nome da empresa</label>
                  <input
                    type="text"
                    value={nomeEmpresaTemplate}
                    onChange={(e) => setNomeEmpresaTemplate(e.target.value)}
                    onFocus={handleInputFocus01}
                    onBlur={handleInputBlur01}
                  />
                  <label>Mensagem distintiva</label>
                  <input
                    type="text"
                    value={randomSubTitleHeaderText}
                    onChange={(e) =>
                      setRandomSubTitleHeaderText(e.target.value)
                    }
                    onFocus={handleInputFocus02}
                    onBlur={handleInputBlur02}
                  />
                  <label>Personalizar texto do botão</label>
                  <input
                    type="text"
                    value={faleConoscoText}
                    onChange={(e) => setFaleConoscoText(e.target.value)}
                    onFocus={handleInputFocus03}
                    onBlur={handleInputBlur03}
                  />

                  <label>Personalizar imagem de fundo</label>
                  <div className="PrintContainer">
                    <label htmlFor="fileInput" className="LabelUpload">
                      Arraste e jogue seu anexo aqui
                    </label>
                    <input
                      type="file"
                      accept=".pdf, .jpeg, .jpg, .png"
                      onChange={handleImageChange}
                      id="fileInput"
                      style={{ display: 'none' }}
                    />
                    <button className="UploadButtone" onClick={handleClick}>
                      Escolher arquivo
                    </button>

                    <p className="UploadInfo">
                      Formatos aceitos PDF, JPEG e PNG
                    </p>
                  </div>
                  <button onClick={handleSaveSection01}>Salvar</button>
                </div>
                <div className={'container-secao02'}>
                  <h1>Personalizar seção 02</h1>
                  <label>Personalizar descrição da empresa</label>
                  <textarea
                    id="textarea"
                    value={randomTextoAboutText}
                    onChange={(e) => setRandomTextoAboutText(e.target.value)}
                    onFocus={handleInputFocus04}
                    onBlur={handleInputBlur04}
                  ></textarea>

                  <label>Personalizar imagem de fundo</label>
                  <div className="PrintContainer">
                    <label htmlFor="fileInput" className="LabelUpload">
                      Arraste e jogue seu anexo aqui
                    </label>
                    <input
                      type="file"
                      accept=".pdf, .jpeg, .jpg, .png"
                      onChange={handleImageChangeAbout}
                      id="fileInputAbout"
                      style={{ display: 'none' }}
                    />
                    <button className="UploadButtone" onClick={fileInputAbout}>
                      Escolher arquivo
                    </button>

                    <p className="UploadInfo">
                      Formatos aceitos PDF, JPEG e PNG
                    </p>
                  </div>
                  <button onClick={handleSaveSection02}>Salvar</button>
                </div>
                <div className={'container-secao03'}>
                  <h1>Editar secão 03</h1>

                  <label>Personalizar números de Clientes </label>
                  <input
                    type="text"
                    value={numbers01}
                    onChange={(e) => setNumbers01(e.target.value)}
                    onFocus={handleInputFocus05}
                    onBlur={handleInputBlur05}
                  />
                  <label>Personalizar Anos no Mercado </label>
                  <input
                    type="text"
                    value={numbers02}
                    onChange={(e) => setNumbers02(e.target.value)}
                    onFocus={handleInputFocus06}
                    onBlur={handleInputBlur06}
                  />
                  <label>Personalizar números de Empreendimentos</label>
                  <input
                    type="text"
                    value={numbers03}
                    onChange={(e) => setNumbers03(e.target.value)}
                    onFocus={handleInputFocus07}
                    onBlur={handleInputBlur07}
                  />
                  <label>Personalizar % de Satisfação</label>
                  <input
                    type="text"
                    value={numbers04}
                    onChange={(e) => setNumbers04(e.target.value)}
                    onFocus={handleInputFocus08}
                    onBlur={handleInputBlur08}
                  />

                  <button onClick={handleSaveSection04}>Salvar</button>
                </div>

                <div className={'container-secao04'}>
                  <h1>Editar secão 04</h1>

                  <h3>Titulo especialidades</h3>
                  <label htmlFor="imageInput">01</label>
                  <input
                    type="textarea"
                    value={areaAtuacaoOptions1Text}
                    onChange={(e) => setAreaAtuacaoOptions1Text(e.target.value)}
                    onFocus={handleInputFocus09}
                    onBlur={handleInputBlur09}
                  />
                  <label htmlFor="imageInput">02</label>
                  <input
                    type="textarea"
                    value={areaAtuacaoOptions2Text}
                    onChange={(e) => setAreaAtuacaoOptions2Text(e.target.value)}
                    onFocus={handleInputFocus10}
                    onBlur={handleInputBlur10}
                  />
                  <label htmlFor="imageInput">03</label>
                  <input
                    type="textarea"
                    value={areaAtuacaoOptions3Text}
                    onChange={(e) => setAreaAtuacaoOptions3Text(e.target.value)}
                    onFocus={handleInputFocus11}
                    onBlur={handleInputBlur11}
                  />
                  <label htmlFor="imageInput">04</label>
                  <input
                    type="textarea"
                    value={areaAtuacaoOptions4Text}
                    onChange={(e) => setAreaAtuacaoOptions4Text(e.target.value)}
                    onFocus={handleInputFocus12}
                    onBlur={handleInputBlur12}
                  />
                  <label htmlFor="imageInput">05</label>
                  <input
                    type="textarea"
                    value={areaAtuacaoOptions5Text}
                    onChange={(e) => setAreaAtuacaoOptions5Text(e.target.value)}
                    onFocus={handleInputFocus13}
                    onBlur={handleInputBlur13}
                  />
                  <label htmlFor="imageInput">06</label>
                  <input
                    type="textarea"
                    value={areaAtuacaoOptions6Text}
                    onChange={(e) => setAreaAtuacaoOptions6Text(e.target.value)}
                    onFocus={handleInputFocus14}
                    onBlur={handleInputBlur14}
                  />

                  <h3>Descriçoes especialidades</h3>
                  <label htmlFor="imageInput">01</label>
                  <textarea
                    id="textarea"
                    type="textarea"
                    value={randomAreaAtuacaoOptions1Text}
                    onChange={(e) =>
                      setRandomAreaAtuacaoOptions1Text(e.target.value)
                    }
                    onFocus={handleInputFocus15}
                    onBlur={handleInputBlur15}
                  />

                  <label htmlFor="imageInput">02</label>
                  <textarea
                    id="textarea"
                    type="textarea"
                    value={randomAreaAtuacaoOptions2Text}
                    onChange={(e) =>
                      setRandomAreaAtuacaoOptions2Text(e.target.value)
                    }
                    onFocus={handleInputFocus16}
                    onBlur={handleInputBlur16}
                  />
                  <label htmlFor="imageInput">03</label>
                  <textarea
                    id="textarea"
                    type="textarea"
                    value={randomAreaAtuacaoOptions3Text}
                    onChange={(e) =>
                      setRandomAreaAtuacaoOptions3Text(e.target.value)
                    }
                    onFocus={handleInputFocus17}
                    onBlur={handleInputBlur17}
                  />
                  <label htmlFor="imageInput">04</label>
                  <textarea
                    id="textarea"
                    type="textarea"
                    value={randomAreaAtuacaoOptions4Text}
                    onChange={(e) =>
                      setRandomAreaAtuacaoOptions4Text(e.target.value)
                    }
                    onFocus={handleInputFocus18}
                    onBlur={handleInputBlur18}
                  />
                  <label htmlFor="imageInput">05</label>
                  <textarea
                    id="textarea"
                    type="textarea"
                    value={randomAreaAtuacaoOptions5Text}
                    onChange={(e) =>
                      setRandomAreaAtuacaoOptions5Text(e.target.value)
                    }
                    onFocus={handleInputFocus19}
                    onBlur={handleInputBlur19}
                  />
                  <label htmlFor="imageInput">06</label>
                  <textarea
                    id="textarea"
                    type="textarea"
                    value={randomAreaAtuacaoOptions6Text}
                    onChange={(e) =>
                      setRandomAreaAtuacaoOptions6Text(e.target.value)
                    }
                    onFocus={handleInputFocus20}
                    onBlur={handleInputBlur20}
                  />
                  <div className="PrintContainer">
                    <label htmlFor="fileInput" className="LabelUpload">
                      Arraste e jogue seu anexo aqui
                    </label>
                    <input
                      type="file"
                      accept=".pdf, .jpeg, .jpg, .png"
                      onChange={handleImageChangeParallax}
                      id="fileInputParralax"
                      style={{ display: 'none' }}
                    />
                    <button
                      className="UploadButtone"
                      onClick={fileInputParralax}
                    >
                      Escolher arquivo
                    </button>

                    <p className="UploadInfo">
                      Formatos aceitos PDF, JPEG e PNG
                    </p>
                  </div>
                  <button onClick={handleSaveSection04}>Salvar</button>
                </div>

                <div className={'container-secao01'}>
                  <h1>Personalizar seção 05 </h1>
                  <label>Texto chamativo</label>
                  <textarea
                    id="textarea"
                    type="text"
                    value={randomFooterText}
                    onChange={(e) => setRandomFooterText(e.target.value)}
                    onFocus={handleInputFocus21}
                    onBlur={handleInputBlur21}
                  />
                  <div className="PrintContainer">
                    <label htmlFor="fileInput" className="LabelUpload">
                      Arraste e jogue seu anexo aqui
                    </label>
                    <input
                      type="file"
                      accept=".pdf, .jpeg, .jpg, .png"
                      onChange={handleImageChangeFooter}
                      id="fileInputFooter"
                      style={{ display: 'none' }}
                    />
                    <button className="UploadButtone" onClick={fileInputFooter}>
                      Escolher arquivo
                    </button>

                    <p className="UploadInfo">
                      Formatos aceitos PDF, JPEG e PNG
                    </p>
                  </div>

                  <button onClick={handleSaveSection05}>Salvar</button>
                </div>
              </>
            ) : null}
          </div>
        </div>
        <div className="nav-container-donwe">
          <div className="button-continue-donw" onClick={handleNavigate}>
            <img
              className="button-back-icon-donw"
              src="./images/back.svg"
              alt=""
            />

            <p className="button-continue-text-donw">Voltar</p>
          </div>
          <div className="button-continue-donw">
            <Link to="/Edit">
              <p className="button-continue-text-donw">Continuar</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditText;
