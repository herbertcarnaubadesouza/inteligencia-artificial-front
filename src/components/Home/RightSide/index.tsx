import { useEffect, useState } from 'react';
import { BeatLoader } from 'react-spinners';
import './rightside.scss';

import Question01 from '../../Question01';
import Question02 from '../Question02';
import LeftSide from '../LeftSide';

function RightSide() {
  const [showQuestion, setShowQuestion] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const [isQuestionVisible, setIsQuestionVisible] = useState(true);
  const [isQuestion02Visible, setIsQuestion02Visible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowQuestion(true), 1000);
    const timer2 = setTimeout(() => setShowLoading(true), 3800);
    const timer3 = setTimeout(() => setShowButtons(true), 8500);

    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  const ocultarQuestion = () => {
    setIsQuestionVisible(false);
    setIsQuestion02Visible(true);
  };

  const exibirQuestion02 = () => {
    setIsQuestion02Visible(true);
  };

  return (
    <>
      <LeftSide
        isQuestionVisible={isQuestionVisible}
        isQuestion02Visible={isQuestion02Visible}
      />
      <div className="rightside-container">
        {isQuestionVisible && (
          <Question01 ocultarQuestion={ocultarQuestion} />
        )}
        {isQuestion02Visible && (
          <Question02 exibirQuestion02={exibirQuestion02} />
        )}
      </div>
    </>
  );
}

export default RightSide;
