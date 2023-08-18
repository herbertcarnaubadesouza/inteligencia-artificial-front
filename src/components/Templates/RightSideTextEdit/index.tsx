
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useLeftSide } from '../LeftSide';
import {
  FontFour,
  FontOne,
  FontThree,
  FontTwo,
  PaletteFour,
  PaletteOne,
  PaletteTree,
  PaletteTwo,
} from '../Theme'; // Importe o caminho correto para o seu arquivo Theme.ts

import { TemplateContext } from '../useContext/TemplateContext';
import { useContext } from 'react';


function RightSideTextEdit() {
  const leftSide = useLeftSide();
  const [currentPaletteName, setCurrentPaletteName] = useState('');
  const [currentFontName, setCurrentFontName] = useState('');


  const { TemplateEscolhido,
    setTemplateEscolhido,
  } = useContext(TemplateContext);


  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);

  }

  useEffect(() => {
    // Buscar do localStorage ao montar o componente
    const storedPalette = localStorage.getItem('currentPalette');
    const storedFont = localStorage.getItem('currentFont');
    const storedTemplate = localStorage.getItem('TemplateEscolhido');


    if (storedTemplate) {
      setTemplateEscolhido(storedTemplate);
      console.log(TemplateEscolhido)

    }

    if (storedPalette) {
      leftSide.setCurrentPalette(JSON.parse(storedPalette));

    }

    if (storedFont) {
      leftSide.setCurrentFont(JSON.parse(storedFont));

    }
  }, []);



  return (
    <>
      {leftSide.jsx}


    </>
  );
}

export default RightSideTextEdit;