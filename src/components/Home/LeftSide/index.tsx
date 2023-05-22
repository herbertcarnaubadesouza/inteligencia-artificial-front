import React from 'react';
import './leftside.scss';

type LeftSideProps = {
  isQuestionVisible: boolean;
  isQuestion02Visible: boolean;
};

function LeftSide({ isQuestionVisible, isQuestion02Visible }: LeftSideProps) {
  return (
    <>
      <div className="left-side-container">
        <img src="./images/logo.svg" className="logo"></img>
        <div className="progressBar-container">
          <div className={`progress ${isQuestionVisible ? 'style-one' : ''} ${isQuestion02Visible ? 'style-two' : ''}`}></div>
          <div className="icons-container">
            <div className="block-image-left-side">
              <img src="./images/bag.svg"></img>
              <div className={`tooltip ${isQuestionVisible ? 'style-one' : ''} ${isQuestion02Visible ? 'style-two' : ''}`}>
                <p>Vamos lá!</p>
                <img src="./images/rocket.png"></img>
              </div>
            </div>

            <div className="block-image-left-side">
              <img src="./images/constructing.svg"></img>
              <div className={`tooltip-two ${isQuestionVisible ? 'style-one' : ''} ${isQuestion02Visible ? 'style-two' : ''}`}>
                <p>Bom trabalho!</p>
                <img src="./images/ok.png"></img>
              </div>
            </div>

            <div className="block-image-left-side">
              <img src="./images/location.svg"></img>
            </div>
            <div className="block-image-left-side">
              <img src="./images/tag.svg"></img>
            </div>
            <div className="block-image-left-side">
              <img src="./images/diamond.svg"></img>
            </div>
            <div className="block-image-left-side">
              <img src="./images/email.svg"></img>
            </div>
            <div className="block-image-left-side">
              <img src="./images/doc.svg"></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LeftSide;
