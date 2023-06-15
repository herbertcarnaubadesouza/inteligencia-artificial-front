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
          <div className={`progress ${isQuestionVisible ? 'style-one' : ''} ${isQuestion02Visible ? 'style-two' : ''} ${isQuestion03Visible ? 'style-tree' : ''} ${isQuestion04Visible ? 'style-four' : ''} ${isQuestion05Visible ? 'style-five' : ''} ${isQuestion06Visible ? 'style-six' : ''}  ${isQuestion07Visible ? 'style-seven' : ''}`}></div>
          <div className="icons-container">
            <div className="block-image-left-side">
              <img src="./images/bag.svg"></img>
              <div className={`tooltip ${isQuestionVisible ? 'style-one' : ''} ${isQuestion02Visible ? 'style-two' : ''} ${isQuestion03Visible ? 'style-tree' : ''} ${isQuestion04Visible ? 'style-four' : ''} ${isQuestion05Visible ? 'style-five' : ''} ${isQuestion06Visible ? 'style-six' : ''}  ${isQuestion07Visible ? 'style-seven' : ''}`}>
                <p>Vamos lá!</p>
                <img src="./images/rocket.png"></img>
              </div>
            </div>

            <div className="block-image-left-side">
              <img src="./images/constructing.svg"></img>
              <div className={`tooltip-two ${isQuestionVisible ? 'style-one' : ''} ${isQuestion02Visible ? 'style-two' : ''} ${isQuestion03Visible ? 'style-tree' : ''} ${isQuestion04Visible ? 'style-four' : ''} ${isQuestion05Visible ? 'style-five' : ''} ${isQuestion06Visible ? 'style-six' : ''}  ${isQuestion07Visible ? 'style-seven' : ''}`}>
                <p>Bom trabalho!</p>
                <img src="./images/ok.png"></img>
              </div>
            </div>

            <div className="block-image-left-side">
              <img src="./images/location.svg"></img>
              <div className={`tooltip-tree ${isQuestionVisible ? 'style-one' : ''} ${isQuestion02Visible ? 'style-two' : ''} ${isQuestion03Visible ? 'style-tree' : ''} ${isQuestion04Visible ? 'style-four' : ''} ${isQuestion05Visible ? 'style-five' : ''} ${isQuestion06Visible ? 'style-six' : ''}  ${isQuestion07Visible ? 'style-seven' : ''}`}>
                <p>Você faz isso parecer fácil!</p>
                <img src="./images/emoji.png"></img>
              </div>
            </div>
            <div className="block-image-left-side">
              <img src="./images/tag.svg"></img>
              <div className={`tooltip-four ${isQuestionVisible ? 'style-one' : ''} ${isQuestion02Visible ? 'style-two' : ''} ${isQuestion03Visible ? 'style-tree' : ''} ${isQuestion04Visible ? 'style-four' : ''} ${isQuestion05Visible ? 'style-five' : ''} ${isQuestion06Visible ? 'style-six' : ''}  ${isQuestion07Visible ? 'style-seven' : ''}`}>
                <p>Não desista agora!</p>
                <img src="./images/hang.png"></img>
              </div>
            </div>
            <div className="block-image-left-side">
              <img src="./images/diamond.svg"></img>
              <div className={`tooltip-five ${isQuestionVisible ? 'style-one' : ''} ${isQuestion02Visible ? 'style-two' : ''} ${isQuestion03Visible ? 'style-tree' : ''} ${isQuestion04Visible ? 'style-four' : ''} ${isQuestion05Visible ? 'style-five' : ''} ${isQuestion06Visible ? 'style-six' : ''}  ${isQuestion07Visible ? 'style-seven' : ''}`}>
                <p>Espetacular, continue assim!</p>
                <img src="./images/biceps.png"></img>
              </div>
            </div>
            <div className="block-image-left-side">
              <img src="./images/email.svg"></img>
              <div className={`tooltip-six ${isQuestionVisible ? 'style-one' : ''} ${isQuestion02Visible ? 'style-two' : ''} ${isQuestion03Visible ? 'style-tree' : ''} ${isQuestion04Visible ? 'style-four' : ''} ${isQuestion05Visible ? 'style-five' : ''} ${isQuestion06Visible ? 'style-six' : ''}  ${isQuestion07Visible ? 'style-seven' : ''}`}>
                <p>Você está quase terminando!</p>
                <img src="./images/finish.png"></img>
              </div>
            </div>
            <div className="block-image-left-side">
              <img src="./images/doc.svg"></img>
              <div className={`tooltip-seven ${isQuestionVisible ? 'style-one' : ''} ${isQuestion02Visible ? 'style-two' : ''} ${isQuestion03Visible ? 'style-tree' : ''} ${isQuestion04Visible ? 'style-four' : ''} ${isQuestion05Visible ? 'style-five' : ''} ${isQuestion06Visible ? 'style-six' : ''}  ${isQuestion07Visible ? 'style-seven' : ''}`}>
                <p>Agora só mais um!</p>
                <img src="./images/happy.png"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LeftSide;
