import './rightside.scss';

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

function RightSide() {
  const leftSide = useLeftSide();
  const [currentPaletteName, setCurrentPaletteName] = useState('');
  const [currentFontName, setCurrentFontName] = useState('');

  const handlePaletteClick = (palette: any) => {
    leftSide.setCurrentPalette(palette);
    setCurrentPaletteName(palette.name);
  };

  const handleFontClick = (font: any) => {
    leftSide.setCurrentFont(font);
    setCurrentFontName(font.name);
  };
  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);

  }



  return (
    <>
      {leftSide.jsx}
      <div className={`${isOpen ? 'openEmbaçado' : 'none'}`} >
      </div>
      <div className='buttonContainer'>
        <button onClick={toggleMenu}> <img src={isOpen ? './images/X.png' : './images/menu.png'} alt="" />
        </button>
      </div>
      <div className={`template-rightside-container ${isOpen ? 'open' : ''}`} >

        <div className="template-top-container">

          <div className="template-buttons-container-h2">
            <img src="./images/tinta.png" alt="" />
            <h2 className="style-h2"> Estilização</h2>
          </div>
          <div className="container-rigth-versao">
            <p className="template-label">Versão gerada</p>
            <div className="template-buttons-container">
              <div
                className={`template-button-versao ${leftSide.isVisible01 ? 'clicked' : ''
                  }`}
                onClick={leftSide.showTemplate01}
              >
                <p className="button-text-versao">Versão 01</p>
              </div>
              <div
                className={`template-button-versao ${leftSide.isVisible02 ? 'clicked' : ''
                  }`}
                onClick={leftSide.showTemplate02}
              >
                <p className="button-text-versao">Versão 02 </p>
              </div>
              <div
                className={`template-button-versao ${leftSide.isVisible03 ? 'clicked' : ''
                  }`}
                onClick={leftSide.showTemplate03}
              >
                <p className="button-text-versao">Versão 03</p>
              </div>
            </div>
          </div>

          <div className="container-rigth-cores">
            <p className="template-label">Paleta de cores</p>
            <div className="template-buttons-container">
              <div
                id="palette-one"
                className={`template-button-cores ${currentPaletteName === 'palette-one' ? 'clicked' : ''
                  }`}
                onClick={() => handlePaletteClick(PaletteOne)}
              >
                <img src="./images/palette.png" alt="" className="pallette" />
              </div>
              <div
                id="palette-two"
                className={`template-button-cores ${currentPaletteName === 'palette-two' ? 'clicked' : ''
                  }`}
                onClick={() => handlePaletteClick(PaletteTwo)}
              >
                <img src="./images/palette2.png" alt="" className="pallette" />
              </div>
            </div>

            <div className="template-buttons-container">
              <div
                id="palette-tree"
                className={`template-button-cores ${currentPaletteName === 'palette-tree' ? 'clicked' : ''
                  }`}
                onClick={() => handlePaletteClick(PaletteTree)}
              >
                <img src="./images/palette3.png" alt="" className="pallette" />
              </div>
              <div
                id="palette-four"
                className={`template-button-cores ${currentPaletteName === 'palette-four' ? 'clicked' : ''
                  }`}
                onClick={() => handlePaletteClick(PaletteFour)}
              >
                <img src="./images/palette4.png" alt="" className="pallette" />
              </div>
            </div>
          </div>

          <div className="container-rigth-fonte">
            <p className="template-label">Par de fontes</p>
            <div className="template-buttons-container">
              <div
                className={`font-button-fonte ${currentFontName === 'font-one' ? 'clicked' : ''
                  }`}
                onClick={() => handleFontClick(FontOne)}
              >
                <p className="font-text">
                  Roboto <span className="text-menor">Poppins</span>
                </p>
              </div>
              <div
                className={`font-button-fonte ${currentFontName === 'font-two' ? 'clicked' : ''
                  }`}
                onClick={() => handleFontClick(FontTwo)}
              >
                <p className="font-text">
                  Montserrat
                  <span className="text-menor">Poppins</span>
                </p>
              </div>
            </div>
            <div className="template-buttons-container">
              <div
                className={`font-button-fonte ${currentFontName === 'font-three' ? 'clicked' : ''
                  }`}
                onClick={() => handleFontClick(FontThree)}
              >
                <p className="font-text">
                  Source Serif <span className="text-menor">Poppins</span>
                </p>
              </div>
              <div
                className={`font-button-fonte ${currentFontName === 'font-four' ? 'clicked' : ''
                  }`}
                onClick={() => handleFontClick(FontFour)}
              >
                <p className="font-text">
                  Sora <span className="text-menor">Poppins</span>
                </p>
              </div>
            </div>
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
              <p className="button-continue-text-donw">Continuar</p>
            </div>
          </div>
        </div>

      </div>

    </>
  );
}

export default RightSide;