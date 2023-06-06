import { useEffect, useState } from 'react';
import './rightside.scss';

import { useLeftSide } from '../LeftSide';
import { PaletteOne, PaletteTwo, PaletteTree, PaletteFour, FontOne, FontTwo, FontThree, FontFour } from '../Theme'; // Importe o caminho correto para o seu arquivo Theme.ts

function RightSide() {
  const leftSide = useLeftSide();

  const handlePaletteOneClick = () => {
    leftSide.setCurrentPalette(PaletteOne);
  };

  const handlePaletteTwoClick = () => {
    leftSide.setCurrentPalette(PaletteTwo);
  };

  const handlePaletteTreeClick = () => {
    leftSide.setCurrentPalette(PaletteTree);
  };

  const handlePaletteFourClick = () => {
    leftSide.setCurrentPalette(PaletteFour);
  };

  const handleFontOneClick = () => {
    leftSide.setCurrentFont(FontOne);
  }

  const handleFontTwoClick = () => {
    leftSide.setCurrentFont(FontTwo);
  }

  const handleFontThreeClick = () => {
    leftSide.setCurrentFont(FontThree);
  }

  const handleFontFourClick = () => {
    leftSide.setCurrentFont(FontFour);
  }

  return (
    <>
      {leftSide.jsx}
      <div className="template-rightside-container">
        <div className="template-top-container">

          <div>
            <div className="template-buttons-container">
              <div className={`template-button ${leftSide.isVisible01 ? 'clicked' : ''} `} onClick={leftSide.showTemplate01}>
                <p className="button-text">Estilo 01</p>
              </div>
              <div className={`template-button ${leftSide.isVisible02 ? 'clicked' : ''} `} onClick={leftSide.showTemplate02}>
                <p className="button-text">Estilo 02</p>
              </div>
              <div className={`template-button ${leftSide.isVisible03 ? 'clicked' : ''} `} onClick={leftSide.showTemplate03}>
                <p className="button-text">Estilo 03</p>
              </div>
            </div>
          </div>

          <div>
            <p className="template-label">PALETA DE CORES</p>
            <div className="template-buttons-container">
              <div id="palette-one" className="template-button" onClick={handlePaletteOneClick}>
                <img src="./images/palette.png" alt="" className="pallette" />
              </div>
              <div id="palette-two" className="template-button" onClick={handlePaletteTwoClick}>
                <img src="./images/palette2.png" alt="" className="pallette" />
              </div>
            </div>

            <div className="template-buttons-container">
              <div id="palette-tree" className="template-button" onClick={handlePaletteTreeClick}>
                <img src="./images/palette3.png" alt="" className="pallette" />
              </div>
              <div id="palette-four" className="template-button" onClick={handlePaletteFourClick}>
                <img src="./images/palette4.png" alt="" className="pallette" />
              </div>
            </div>
          </div>

          <div>
            <p className="template-label">TIPOGRAFIA</p>
            <div className="template-buttons-container">
              <div className="font-button" onClick={handleFontOneClick}>
                <p className="font-text">Roboto</p>
              </div>
              <div className="font-button" onClick={handleFontTwoClick}>
                <p className="font-text">Montserrat</p>
              </div>
            </div>
            <div className="template-buttons-container">
              <div className="font-button" onClick={handleFontThreeClick}>
                <p className="font-text">Source Serif</p>
              </div>
              <div className="font-button" onClick={handleFontFourClick}>
                <p className="font-text">Sora</p>
              </div>
            </div>
          </div>
        </div>

        <div className="down-container">
          <div className="linha"></div>
          <div className="nav-container">
            <div className="button-back">
              <img
                className="button-back-icon"
                src="./images/back.svg"
                alt=""
              />
              <p className="button-back-text">Voltar</p>
            </div>
            <div className="button-continue">
              <p className="button-continue-text">Continuar</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RightSide;
