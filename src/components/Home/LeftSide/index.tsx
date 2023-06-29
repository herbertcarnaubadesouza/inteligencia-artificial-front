import React from 'react';
import './leftside.scss';

type LeftSideProps = {
  isQuestionVisible: boolean;
  isQuestion02Visible: boolean;
  isQuestion03Visible: boolean;
  isQuestion04Visible: boolean;
  isQuestion05Visible: boolean;
  isQuestion06Visible: boolean;
  isQuestion07Visible: boolean;
};

function LeftSide({ isQuestionVisible, isQuestion02Visible, isQuestion03Visible, isQuestion04Visible, isQuestion05Visible, isQuestion06Visible, isQuestion07Visible }: LeftSideProps) {
  return (
    <>
      <div className="left-side-container">
        {/* <img src="./images/logo.svg" className="logo"></img> */}
        <div className="progressBar-container">
          <div className={`progress  ${isQuestionVisible ? 'style-one' : ''} ${isQuestion02Visible ? 'style-one' : ''} ${isQuestion03Visible ? 'style-tree' : ''} ${isQuestion04Visible ? 'style-four' : ''} ${isQuestion05Visible ? 'style-tree' : ''} ${isQuestion06Visible ? 'style-four' : ''}  ${isQuestion07Visible ? 'style-five' : ''}`}></div>

          <div className="icons-container">

            <div className="block-image-left-side">

              <img className={`iconProgressFour ${isQuestionVisible ? 'style-one' : ''} ${isQuestion02Visible ? 'style-one' : ''} ${isQuestion03Visible ? 'style-tree' : ''} ${isQuestion04Visible ? 'style-four' : ''} ${isQuestion05Visible ? 'style-tree' : ''} ${isQuestion06Visible ? 'style-four' : ''}  ${isQuestion07Visible ? 'style-five' : ''}`} src="./images/popper.svg"></img>
              <p className='text-icon'>Publicação do site</p>
              {/* <div className={`tooltip-four ${isQuestionVisible ? 'style-one' : ''} ${isQuestion02Visible ? 'style-two' : ''} ${isQuestion03Visible ? 'style-tree' : ''} ${isQuestion04Visible ? 'style-four' : ''} ${isQuestion05Visible ? 'style-five' : ''} ${isQuestion06Visible ? 'style-six' : ''}  ${isQuestion07Visible ? 'style-seven' : ''}`}>
                <p>Não desista agora!</p>
                <img src="./images/hang.png"></img>
              </div> */}
            </div>
            <div className="block-image-left-side">
              <img className={`iconProgressTree  ${isQuestionVisible ? 'style-one' : ''} ${isQuestion02Visible ? 'style-one' : ''} ${isQuestion03Visible ? 'style-tree' : ''} ${isQuestion04Visible ? 'style-four' : ''} ${isQuestion05Visible ? 'style-tree' : ''} ${isQuestion06Visible ? 'style-four' : ''}  ${isQuestion07Visible ? 'style-five' : ''}`} src="./images/magic.svg"></img>
              <p className='text-icon'>Um toque de mágica</p>
              {/* <div className={`tooltip-tree ${isQuestionVisible ? 'style-one' : ''} ${isQuestion02Visible ? 'style-two' : ''} ${isQuestion03Visible ? 'style-tree' : ''} ${isQuestion04Visible ? 'style-four' : ''} ${isQuestion05Visible ? 'style-five' : ''} ${isQuestion06Visible ? 'style-six' : ''}  ${isQuestion07Visible ? 'style-seven' : ''}`}>
                <p>Espetacular, continue assim!</p>
                <img src="./images/biceps.png"></img>
              </div> */}
            </div>

            <div className="block-image-left-side">
              <img className={`iconProgressOne  ${isQuestionVisible ? 'style-one' : ''} ${isQuestion02Visible ? 'style-one' : ''} ${isQuestion03Visible ? 'style-tree' : ''} ${isQuestion04Visible ? 'style-four' : ''} ${isQuestion05Visible ? 'style-tree' : ''} ${isQuestion06Visible ? 'style-four' : ''}  ${isQuestion07Visible ? 'style-five' : ''}`} src="./images/doc.svg"></img>
              <p className='text-icon'>Primeiras informações</p>
              {/* <div className={`tooltip-one ${isQuestionVisible ? 'style-one' : ''} ${isQuestion02Visible ? 'style-two' : ''} ${isQuestion03Visible ? 'style-tree' : ''} ${isQuestion04Visible ? 'style-four' : ''} ${isQuestion05Visible ? 'style-five' : ''} ${isQuestion06Visible ? 'style-six' : ''}  ${isQuestion07Visible ? 'style-seven' : ''}`}>
                <p>Agora só mais um!</p>
              </div> */}

              <img className={`progressRocket ${isQuestionVisible ? 'style-one' : ''} ${isQuestion02Visible ? 'style-one' : ''} ${isQuestion03Visible ? 'style-tree' : ''} ${isQuestion04Visible ? 'style-four' : ''} ${isQuestion05Visible ? 'style-tree' : ''} ${isQuestion06Visible ? 'style-four' : ''}  ${isQuestion07Visible ? 'style-five' : ''}`} src="./images/progressRocket.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LeftSide;
