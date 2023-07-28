import React, { createContext, useState } from 'react';
import EditText from '../ComponentEditText';

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
  const [faleConoscoText, setFaleConoscoText] = useState('');
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

  const [isInputFocused01, setIsInputFocused01] = useState(false);
  const [isInputFocused02, setIsInputFocused02] = useState(false);
  const [isInputFocused03, setIsInputFocused03] = useState(false);
  const [isInputFocused04, setIsInputFocused04] = useState(false);
  const [isInputFocused05, setIsInputFocused05] = useState(false);
  const [isInputFocused06, setIsInputFocused06] = useState(false);
  const [isInputFocused07, setIsInputFocused07] = useState(false);
  const [isInputFocused08, setIsInputFocused08] = useState(false);
  const [isInputFocused09, setIsInputFocused09] = useState(false);
  const [isInputFocused10, setIsInputFocused10] = useState(false);
  const [isInputFocused11, setIsInputFocused11] = useState(false);
  const [isInputFocused12, setIsInputFocused12] = useState(false);
  const [isInputFocused13, setIsInputFocused13] = useState(false);
  const [isInputFocused14, setIsInputFocused14] = useState(false);
  const [isInputFocused15, setIsInputFocused15] = useState(false);
  const [isInputFocused16, setIsInputFocused16] = useState(false);
  const [isInputFocused17, setIsInputFocused17] = useState(false);
  const [isInputFocused18, setIsInputFocused18] = useState(false);
  const [isInputFocused19, setIsInputFocused19] = useState(false);
  const [isInputFocused20, setIsInputFocused20] = useState(false);
  const [isInputFocused21, setIsInputFocused21] = useState(false);
  const [isInputFocused22, setIsInputFocused22] = useState(false);
  const [isInputFocused23, setIsInputFocused23] = useState(false);
  const [isInputFocused24, setIsInputFocused24] = useState(false);
  const [isInputFocused25, setIsInputFocused25] = useState(false);
  const [isInputFocused26, setIsInputFocused26] = useState(false);
  const [inputEdit, setInputEdit] = useState(false);

  const handleInputFocus01 = () => {
    setIsInputFocused01(true);

    const element = document.getElementById('01');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleInputBlur01 = () => {
    setIsInputFocused01(false);
  };

  const handleInputFocus02 = () => {
    setIsInputFocused02(true);
    const element = document.getElementById('02');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleInputBlur02 = () => {
    setIsInputFocused02(false);
    setInputEdit(false);
  };

  const handleInputFocus03 = () => {
    setIsInputFocused03(true);
    const element = document.getElementById('03');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleInputBlur03 = () => {
    setIsInputFocused03(false);
  };

  const handleInputFocus04 = () => {
    setIsInputFocused04(true);
    const element = document.getElementById('04');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleInputBlur04 = () => {
    setIsInputFocused04(false);
  };

  const handleInputFocus05 = () => {
    setIsInputFocused05(true);
    const element = document.getElementById('05');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleInputBlur05 = () => {
    setIsInputFocused05(false);
  };

  const handleInputFocus06 = () => {
    setIsInputFocused06(true);
    const element = document.getElementById('06');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleInputBlur06 = () => {
    setIsInputFocused06(false);
  };

  const handleInputFocus07 = () => {
    setIsInputFocused07(true);
    const element = document.getElementById('07');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleInputBlur07 = () => {
    setIsInputFocused07(false);
  };

  const handleInputFocus08 = () => {
    setIsInputFocused08(true);
    const element = document.getElementById('08');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleInputBlur08 = () => {
    setIsInputFocused08(false);
  };

  const handleInputFocus09 = () => {
    setIsInputFocused09(true);
    const element = document.getElementById('09');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleInputBlur09 = () => {
    setIsInputFocused09(false);
  };

  const handleInputFocus10 = () => {
    setIsInputFocused10(true);
    const element = document.getElementById('10');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleInputBlur10 = () => {
    setIsInputFocused10(false);
  };

  const handleInputFocus11 = () => {
    setIsInputFocused11(true);
    const element = document.getElementById('11');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleInputBlur11 = () => {
    setIsInputFocused11(false);
  };

  const handleInputFocus12 = () => {
    setIsInputFocused12(true);
    const element = document.getElementById('12');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleInputBlur12 = () => {
    setIsInputFocused12(false);
  };

  const handleInputFocus13 = () => {
    setIsInputFocused13(true);
    const element = document.getElementById('13');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleInputBlur13 = () => {
    setIsInputFocused13(false);
  };

  const handleInputFocus14 = () => {
    setIsInputFocused14(true);
    const element = document.getElementById('14');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleInputBlur14 = () => {
    setIsInputFocused14(false);
  };

  const handleInputFocus15 = () => {
    setIsInputFocused15(true);
    const element = document.getElementById('15');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleInputBlur15 = () => {
    setIsInputFocused15(false);
  };

  const handleInputFocus16 = () => {
    setIsInputFocused16(true);
    const element = document.getElementById('16');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleInputBlur16 = () => {
    setIsInputFocused16(false);
  };

  const handleInputFocus17 = () => {
    setIsInputFocused17(true);
    const element = document.getElementById('17');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleInputBlur17 = () => {
    setIsInputFocused17(false);
  };

  const handleInputFocus18 = () => {
    setIsInputFocused18(true);
    const element = document.getElementById('18');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleInputBlur18 = () => {
    setIsInputFocused18(false);
  };

  const handleInputFocus19 = () => {
    setIsInputFocused19(true);
    const element = document.getElementById('19');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleInputBlur19 = () => {
    setIsInputFocused19(false);
  };

  const handleInputFocus20 = () => {
    setIsInputFocused20(true);
    const element = document.getElementById('20');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleInputBlur20 = () => {
    setIsInputFocused20(false);
  };

  const handleInputFocus21 = () => {
    setIsInputFocused21(true);
    const element = document.getElementById('21');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleInputBlur21 = () => {
    setIsInputFocused21(false);
  };

  const handleInputFocus22 = () => {
    setIsInputFocused22(true);
    const element = document.getElementById('22');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleInputBlur22 = () => {
    setIsInputFocused22(false);
  };

  const handleInputFocus23 = () => {
    setIsInputFocused23(true);
    const element = document.getElementById('23');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleInputBlur23 = () => {
    setIsInputFocused23(false);
  };

  const handleInputFocus24 = () => {
    setIsInputFocused24(true);
    const element = document.getElementById('24');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleInputBlur24 = () => {
    setIsInputFocused24(false);
  };

  const handleInputFocus25 = () => {
    setIsInputFocused25(true);
    const element = document.getElementById('25');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleInputBlur25 = () => {
    setIsInputFocused25(false);
  };

  const handleInputFocus26 = () => {
    setIsInputFocused26(true);
    const element = document.getElementById('26');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleInputBlur26 = () => {
    setIsInputFocused26(false);
  };
  function handleclickh1() {
    setInputEdit(true);
  }

  function handleclickh1Close() {
    setInputEdit(false);
  }

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
    isInputFocused01,
    isInputFocused02,
    isInputFocused03,
    isInputFocused04,
    isInputFocused05,
    isInputFocused06,
    isInputFocused07,
    isInputFocused08,
    isInputFocused09,
    isInputFocused10,
    isInputFocused11,
    isInputFocused12,
    isInputFocused13,
    isInputFocused14,
    isInputFocused15,
    isInputFocused16,
    isInputFocused17,
    isInputFocused18,
    isInputFocused19,
    isInputFocused20,
    isInputFocused21,
    isInputFocused22,
    isInputFocused23,
    isInputFocused24,
    isInputFocused25,
    isInputFocused26,
    inputEdit,
    setInputEdit,
    handleclickh1,
    handleclickh1Close,
  };

  return (
    <TemplateContext.Provider value={templateState}>
      {children}
    </TemplateContext.Provider>
  );
};
