import React, { createContext, useState } from 'react';

export const TemplateContext = createContext();

export const TemplateProvider = ({ children }) => {
  const [temaTemplateEscolhido, setTemaTemplateEscolhido] = useState(
    localStorage.getItem('textoClicado'),
  );
  const [endercoTemplate, setEndercoTemplate] = useState(
    localStorage.getItem('Endereco'),
  );
  const [nomeEmpresaTemplate, setNomeEmpresaTemplate] = useState(
    localStorage.getItem('nomeEmpresa') || '',
  );
  const [imageUrlHeader, setImageUrlHeader] = useState('');
  const [imageUrlAbout, setImageUrlAbout] = useState('');
  const [imageUrlParallax, setImageUrlParallax] = useState('');
  const [imageUrlParallaxSegunda, setImageUrlParallaxSegunda] = useState('');
  const [randomTitleFirmaText, setRandomTitleFirmaText] = useState('');
  const [randomSubTitleHeaderText, setRandomSubTitleHeaderText] = useState('');
  const [randomTextoAboutText, setRandomTextoAboutText] = useState('');
  const [randomSloganParallaxText, setRandomSloganParallaxText] = useState('');
  const [randomParallax01Text, setRandomParallax01Text] = useState('');
  const [randomAboutFirmaText, setRandomAboutFirmaText] = useState('');
  const [randomAreaAtuacaoOptions1Text, setRandomAreaAtuacaoOptions1Text] =
    useState('');
  const [randomAreaAtuacaoOptions2Text, setRandomAreaAtuacaoOptions2Text] =
    useState('');
  const [randomAreaAtuacaoOptions3Text, setRandomAreaAtuacaoOptions3Text] =
    useState('');
  const [randomAreaAtuacaoOptions4Text, setRandomAreaAtuacaoOptions4Text] =
    useState('');
  const [randomAreaAtuacaoOptions5Text, setRandomAreaAtuacaoOptions5Text] =
    useState('');
  const [randomAreaAtuacaoOptions6Text, setRandomAreaAtuacaoOptions6Text] =
    useState('');
  const [randomFooterText, setRandomFooterText] = useState('');
  const [faleConoscoText, setFaleConoscoText] = useState(
    'Agende sua Consulta Conosco!',
  );
  const [faleConoscoProfText, setFaleConoscoProfText] = useState('');
  const [areaAtuacaoOptions1Text, setAreaAtuacaoOptions1Text] = useState('');
  const [areaAtuacaoOptions2Text, setAreaAtuacaoOptions2Text] = useState('');
  const [areaAtuacaoOptions3Text, setAreaAtuacaoOptions3Text] = useState('');
  const [areaAtuacaoOptions4Text, setAreaAtuacaoOptions4Text] = useState('');
  const [areaAtuacaoOptions5Text, setAreaAtuacaoOptions5Text] = useState('');
  const [areaAtuacaoOptions6Text, setAreaAtuacaoOptions6Text] = useState('');
  const [numeroCellText, setNumeroCellText] = useState('');
  const [modalOpen, setModalOpen] = useState(true);
  const [modalOpen01, setModalOpen01] = useState(true);
  const [modalOpen02, setModalOpen02] = useState(true);
  const [modalOpen03, setModalOpen03] = useState(true);
  const [modalOpen04, setModalOpen04] = useState(true);
  const [modalOpen05, setModalOpen05] = useState(true);

  const [whyChooseUs, setWhyChooseUs] = useState('Porque nos escolher');

  const [whyChooseUsOption01, setWhyChooseUsOption01] = useState(
    'Experiência e especialização',
  );
  const [whyChooseUsOption02, setWhyChooseUsOption02] = useState(
    'Equipe altamente capacitada',
  );
  const [whyChooseUsOption03, setWhyChooseUsOption03] = useState(
    'Inovação e tecnologia',
  );

  const [numbers01, setNumbers01] = useState('2000+');

  const [numbers02, setNumbers02] = useState('10+');
  const [numbers03, setNumbers03] = useState('150+');
  const [numbers04, setNumbers04] = useState('99%');

  const [randomSubTitleHeaderText2, setRandomSubTitleHeaderText2] =
    useState('');

  const [TemplateEscolhido, setTemplateEscolhido] = useState(
    localStorage.getItem('TemplateEscolhido') || '',
  );

  const [compromissoOption1Text, setCompromissoOption1Text] = useState(
    'Atendimento humanizado',
  );
  const [
    compromissoOption1TextDescripition1,
    setCompromissoOption1TextDescripition1,
  ] = useState(
    'Comprometemo-nos a fornecer um atendimento atencioso, caloroso e personalizado, colocando o bem-estar dos pacientes em primeiro lugar.',
  );

  const [compromissoOption2Text, setCompromissoOption2Text] = useState(
    'Atendimento humanizado',
  );
  const [
    compromissoOption2TextDescripition2,
    setCompromissoOption2TextDescripition2,
  ] = useState(
    'Comprometemo-nos a fornecer um atendimento atencioso, caloroso e personalizado, colocando o bem-estar dos pacientes em primeiro lugar.',
  );

  const [compromissoOption3Text, setCompromissoOption3Text] = useState(
    'Atendimento humanizado',
  );
  const [
    compromissoOption3TextDescripition3,
    setCompromissoOption3TextDescripition3,
  ] = useState(
    'Comprometemo-nos a fornecer um atendimento atencioso, caloroso e personalizado, colocando o bem-estar dos pacientes em primeiro lugar.',
  );

  const templateState = {
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
  };

  return (
    <TemplateContext.Provider value={templateState}>
      {children}
    </TemplateContext.Provider>
  );
};
