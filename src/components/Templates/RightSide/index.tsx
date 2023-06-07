import './rightside.scss';

import { useState } from 'react';
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

function RightSide() {
  const leftSide = useLeftSide();

  const [clickedPalette, setClickedPalette] = useState(null);
  const [clickedFont, setClickedFont] = useState(null);

  const [clickedPaletteName, setClickedPaletteName] = useState('');
  const [clickedFontName, setClickedFontName] = useState('');

  const handlePaletteOneClick = () => {
    leftSide.setCurrentPalette(PaletteOne);
    setClickedPaletteName('PaletteOne');
  };

  const handlePaletteTwoClick = () => {
    leftSide.setCurrentPalette(PaletteTwo);
    setClickedPaletteName('PaletteTwo');
  };

  const handlePaletteTreeClick = () => {
    leftSide.setCurrentPalette(PaletteTree);
    setClickedPaletteName('PaletteTree');
  };

  const handlePaletteFourClick = () => {
    leftSide.setCurrentPalette(PaletteFour);
    setClickedPaletteName('PaletteFour');
  };

  const handleFontOneClick = () => {
    leftSide.setCurrentFont(FontOne);
    setClickedFontName('FontOne');
  };

  const handleFontTwoClick = () => {
    leftSide.setCurrentFont(FontTwo);
    setClickedFontName('FontTwo');
  };

  const handleFontThreeClick = () => {
    leftSide.setCurrentFont(FontThree);
    setClickedFontName('FontThree');
  };

  const handleFontFourClick = () => {
    leftSide.setCurrentFont(FontFour);
    setClickedFontName('FontFour');
  };

  return (
    <>
      {leftSide.jsx}
      <div className="template-rightside-container">
        <div className="template-top-container">
          <div>
            <div className="template-buttons-container">
              <div
                className={`template-button ${
                  leftSide.isVisible01 ? 'clicked' : ''
                } `}
                onClick={leftSide.showTemplate01}
              >
                <p className="button-text">Estilo 01</p>
              </div>
              <div
                className={`template-button ${
                  leftSide.isVisible02 ? 'clicked' : ''
                } `}
                onClick={leftSide.showTemplate02}
              >
                <p className="button-text">Estilo 02</p>
              </div>
              <div
                className={`template-button ${
                  leftSide.isVisible03 ? 'clicked' : ''
                } `}
                onClick={leftSide.showTemplate03}
              >
                <p className="button-text">Estilo 03</p>
              </div>
            </div>
          </div>

          <div>
            <p className="template-label">PALETA DE CORES</p>

            <div
              className={`template-buttons-container ${
                clickedPaletteName === 'PaletteOne' ||
                clickedPaletteName === 'PaletteTwo'
                  ? 'clicked'
                  : ''
              } `}
            >
              <div
                id="palette-one"
                className={`template-button ${
                  clickedPaletteName === 'PaletteOne' ? 'clicked' : ''
                }`}
                onClick={handlePaletteOneClick}
              >
                <img src="./images/palette.png" alt="" className="pallette" />
              </div>
              <div
                id="palette-two"
                className={`template-button ${
                  clickedPaletteName === 'PaletteTwo' ? 'clicked' : ''
                }`}
                onClick={handlePaletteTwoClick}
              >
                <img src="./images/palette2.png" alt="" className="pallette" />
              </div>
            </div>

            <div
              className={`template-buttons-container ${
                clickedPaletteName === 'PaletteTree' ||
                clickedPaletteName === 'PaletteFour'
                  ? 'clicked'
                  : ''
              } `}
            >
              <div
                id="palette-tree"
                className={`template-button ${
                  clickedPaletteName === 'PaletteTree' ? 'clicked' : ''
                }`}
                onClick={handlePaletteTreeClick}
              >
                <img src="./images/palette3.png" alt="" className="pallette" />
              </div>
              <div
                id="palette-four"
                className={`template-button ${
                  clickedPaletteName === 'PaletteFour' ? 'clicked' : ''
                }`}
                onClick={handlePaletteFourClick}
              >
                <img src="./images/palette4.png" alt="" className="pallette" />
              </div>
            </div>
          </div>

          <div>
            <p className="template-label">TIPOGRAFIA</p>

            <div
              className={`template-buttons-container ${
                clickedFontName === 'FontOne' || clickedFontName === 'FontTwo'
                  ? 'clicked'
                  : ''
              } `}
            >
              <div
                className={`font-button ${
                  clickedFontName === 'FontOne' ? 'clicked' : ''
                }`}
                onClick={handleFontOneClick}
              >
                <p className="font-text">Roboto</p>
              </div>
              <div
                className={`font-button ${
                  clickedFontName === 'FontTwo' ? 'clicked' : ''
                }`}
                onClick={handleFontTwoClick}
              >
                <p className="font-text">Montserrat</p>
              </div>
            </div>

            <div
              className={`template-buttons-container ${
                clickedFontName === 'FontThree' ? 'clicked' : ''
              } `}
            >
              <div
                className={`font-button ${
                  clickedFontName === 'FontThree' ? 'clicked' : ''
                }`}
                onClick={handleFontThreeClick}
              >
                <p className="font-text">Source Serif</p>
              </div>
              <div
                className={`font-button ${
                  clickedFontName === 'FontFour' ? 'clicked' : ''
                }`}
                onClick={handleFontFourClick}
              >
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
