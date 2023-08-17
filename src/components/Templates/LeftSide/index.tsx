import { ThemeProvider } from 'styled-components';
import { FontOne, FontThree, FontTwo, PaletteOne } from '../Theme';
import './leftside.scss';

import Template01 from '../Template01';
import Template02 from '../Template02';
import Template03 from '../Template03';

import axios from 'axios';
import { useEffect, useState } from 'react';

import { useContext } from 'react';
import { TemplateContext } from '../useContext/TemplateContext';

export function useLeftSide() {

  const { TemplateEscolhido,
    setTemplateEscolhido,
  } = useContext(TemplateContext);


  const initializeTemplate = () => {
    localStorage.setItem("TemplateEscolhido", "TEMPLATE01");
    const TemplateEscolhidoLocal = localStorage.getItem("TemplateEscolhido");
    setTemplateEscolhido("TEMPLATE01");
  }

  initializeTemplate();

  const [isVisible01, setIsVisible01] = useState(false);
  const [isVisible02, setIsVisible02] = useState(false);
  const [isVisible03, setIsVisible03] = useState(false);
  const [currentPalette, setCurrentPalette] = useState(PaletteOne);
  const [currentFont, setCurrentFont] = useState(FontOne);


  const showTemplate01 = () => {
    setIsVisible01(true);
    setIsVisible02(false);
    setIsVisible03(false);

    const lastClickedFont = localStorage.getItem("currentFont");
    if (lastClickedFont) {
      setCurrentFont(JSON.parse(lastClickedFont));
    }

    // Recuperar a última paleta clicada do localStorage
    const lastClickedPalette = localStorage.getItem("currentPalette");
    if (lastClickedPalette) {
      setCurrentPalette(JSON.parse(lastClickedPalette));
    }

    localStorage.setItem("TemplateEscolhido", "TEMPLATE01");
    const TemplateEscolhidoLocal = localStorage.getItem("TemplateEscolhido");
    setTemplateEscolhido(TemplateEscolhidoLocal);
  };
  ;


  const showTemplate02 = () => {
    setIsVisible01(false);
    setIsVisible02(true);
    setIsVisible03(false);
    setCurrentPalette(PaletteOne);
    setCurrentFont(FontTwo);

    const lastClickedFont = localStorage.getItem("currentFont");
    if (lastClickedFont) {
      setCurrentFont(JSON.parse(lastClickedFont));
    }

    // Recuperar a última paleta clicada do localStorage
    const lastClickedPalette = localStorage.getItem("currentPalette");
    if (lastClickedPalette) {
      setCurrentPalette(JSON.parse(lastClickedPalette));
    }
    localStorage.setItem("TemplateEscolhido", "TEMPLATE02");
    const TemplateEscolhidoLocal = localStorage.getItem("TemplateEscolhido");
    setTemplateEscolhido(TemplateEscolhidoLocal);
  };

  const showTemplate03 = () => {
    setIsVisible01(false);
    setIsVisible02(false);
    setIsVisible03(true);
    setCurrentPalette(PaletteOne);
    setCurrentFont(FontThree);

    const lastClickedFont = localStorage.getItem("currentFont");
    if (lastClickedFont) {
      setCurrentFont(JSON.parse(lastClickedFont));
    }

    // Recuperar a última paleta clicada do localStorage
    const lastClickedPalette = localStorage.getItem("currentPalette");
    if (lastClickedPalette) {
      setCurrentPalette(JSON.parse(lastClickedPalette));
    }

    localStorage.setItem("TemplateEscolhido", "TEMPLATE03");
    const TemplateEscolhidoLocal = localStorage.getItem("TemplateEscolhido");
    setTemplateEscolhido(TemplateEscolhidoLocal);
  };


  useEffect(() => {
    if (TemplateEscolhido === "TEMPLATE01" || !TemplateEscolhido) {
      setIsVisible01(true);
    }
    if (TemplateEscolhido === "TEMPLATE02") {
      setIsVisible02(true);
    }
    if (TemplateEscolhido === "TEMPLATE03") {
      setIsVisible03(true);
    }
  }, []);


  const jsx = (
    <ThemeProvider theme={{ ...currentPalette, font: currentFont }}>
      <div className="template-side-container">
        {isVisible01 && <Template01 isVisible01={isVisible01} />}
        {isVisible02 && <Template02 isVisible02={isVisible02} />}
        {isVisible03 && <Template03 isVisible03={isVisible03} />}
      </div>
    </ThemeProvider>
  );


  return {
    jsx,
    showTemplate01,
    showTemplate02,
    showTemplate03,
    isVisible01,
    isVisible02,
    isVisible03,
    setCurrentPalette,
    setCurrentFont,
    currentPalette,
    currentFont,
  };
}
