import React, { useState } from 'react';
import './leftside.scss';
import { ThemeProvider } from 'styled-components';
import { PaletteOne, PaletteTwo, PaletteTree, PaletteFour, FontOne, FontTwo, FontThree, FontFour } from '../Theme';

import Template01 from '../Template01'
import Template02 from '../Template02'
import Template03 from '../Template03'

export function useLeftSide() {
  const [isVisible01, setIsVisible01] = useState(true);
  const [isVisible02, setIsVisible02] = useState(false);
  const [isVisible03, setIsVisible03] = useState(false);
  const [currentPalette, setCurrentPalette] = useState(PaletteOne);
  const [currentFont, setCurrentFont] = useState(FontOne);

  const showTemplate01 = () => {
    setIsVisible01(true);
    setIsVisible02(false);
    setIsVisible03(false);
    setCurrentPalette(PaletteOne);
    setCurrentFont(FontOne);
  };

  const showTemplate02 = () => {
    setIsVisible01(false);
    setIsVisible02(true);
    setIsVisible03(false);
    setCurrentPalette(PaletteOne);
    setCurrentFont(FontTwo);
  };

  const showTemplate03 = () => {
    setIsVisible01(false);
    setIsVisible02(false);
    setIsVisible03(true);
    setCurrentPalette(PaletteOne);
    setCurrentFont(FontThree);
  };

  const jsx = (
    <ThemeProvider theme={{ ...currentPalette, font: currentFont }}>
      <div className="template-side-container">
        {isVisible01 && (
          <Template01 isVisible01={isVisible01} />
        )}
        {isVisible02 && (
          <Template02 isVisible02={isVisible02} />
        )}
        {isVisible03 && (
          <Template03 isVisible03={isVisible03} />
        )}
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
    setCurrentFont
  };
}
