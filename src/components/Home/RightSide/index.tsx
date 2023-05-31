import { useEffect, useState } from 'react';
import { BeatLoader } from 'react-spinners';
import './rightside.scss';

import Question01 from '../../Question01';
import Question02 from '../Question02';
import Question03 from '../Question03';
import Question04 from '../Question04';
import Question05 from '../Question05';
import Question06 from '../Question06';
import Question07 from '../Question07';
import LeftSide from '../LeftSide';

function RightSide() {
  const [showQuestion, setShowQuestion] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const [isQuestionVisible, setIsQuestionVisible] = useState(true);
  const [isQuestion02Visible, setIsQuestion02Visible] = useState(false);
  const [isQuestion03Visible, setIsQuestion03Visible] = useState(false);
  const [isQuestion04Visible, setIsQuestion04Visible] = useState(false);
  const [isQuestion05Visible, setIsQuestion05Visible] = useState(false);
  const [isQuestion06Visible, setIsQuestion06Visible] = useState(false);
  const [isQuestion07Visible, setIsQuestion07Visible] = useState(false);

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

  const ocultarQuestion02 = () => {
    setIsQuestionVisible(false);
    setIsQuestion02Visible(false);
    setIsQuestion03Visible(true)
  };

  const ocultarQuestion03 = () => {
    setIsQuestionVisible(false);
    setIsQuestion02Visible(false);
    setIsQuestion03Visible(false);
    setIsQuestion04Visible(true);
  };

  const ocultarQuestion04 = () => {
    setIsQuestionVisible(false);
    setIsQuestion02Visible(false);
    setIsQuestion03Visible(false);
    setIsQuestion04Visible(false);
    setIsQuestion05Visible(true);
  };

  const ocultarQuestion05 = () => {
    setIsQuestionVisible(false);
    setIsQuestion02Visible(false);
    setIsQuestion03Visible(false);
    setIsQuestion04Visible(false);
    setIsQuestion05Visible(false);
    setIsQuestion06Visible(true);
  };

  const ocultarQuestion06 = () => {
    setIsQuestionVisible(false);
    setIsQuestion02Visible(false);
    setIsQuestion03Visible(false);
    setIsQuestion04Visible(false);
    setIsQuestion05Visible(false);
    setIsQuestion06Visible(false);
    setIsQuestion07Visible(true);
  };

  const voltarQuestion02 = () => {
    setIsQuestionVisible(true);
    setIsQuestion02Visible(false);
    setIsQuestion03Visible(false);
    setIsQuestion04Visible(false);
    setIsQuestion05Visible(false);
    setIsQuestion06Visible(false);
    setIsQuestion07Visible(false);
  };

  const voltarQuestion03 = () => {
    setIsQuestionVisible(false);
    setIsQuestion02Visible(true);
    setIsQuestion03Visible(false);
    setIsQuestion04Visible(false);
    setIsQuestion05Visible(false);
    setIsQuestion06Visible(false);
    setIsQuestion07Visible(false);
  };

  const voltarQuestion04 = () => {
    setIsQuestionVisible(false);
    setIsQuestion02Visible(false);
    setIsQuestion03Visible(true);
    setIsQuestion04Visible(false);
    setIsQuestion05Visible(false);
    setIsQuestion06Visible(false);
    setIsQuestion07Visible(false);
  };

  const voltarQuestion05 = () => {
    setIsQuestionVisible(false);
    setIsQuestion02Visible(false);
    setIsQuestion03Visible(false);
    setIsQuestion04Visible(true);
    setIsQuestion05Visible(false);
    setIsQuestion06Visible(false);
    setIsQuestion07Visible(false);
  };

  const voltarQuestion06 = () => {
    setIsQuestionVisible(false);
    setIsQuestion02Visible(false);
    setIsQuestion03Visible(false);
    setIsQuestion04Visible(false);
    setIsQuestion05Visible(true);
    setIsQuestion06Visible(false);
    setIsQuestion07Visible(false);
  };

  const voltarQuestion07 = () => {
    setIsQuestionVisible(false);
    setIsQuestion02Visible(false);
    setIsQuestion03Visible(false);
    setIsQuestion04Visible(false);
    setIsQuestion05Visible(false);
    setIsQuestion06Visible(true);
    setIsQuestion07Visible(false);
  };

  return (
    <>
      <LeftSide
        isQuestionVisible={isQuestionVisible}
        isQuestion02Visible={isQuestion02Visible}
        isQuestion03Visible={isQuestion03Visible}
        isQuestion04Visible={isQuestion04Visible}
        isQuestion05Visible={isQuestion05Visible}
        isQuestion06Visible={isQuestion06Visible}
        isQuestion07Visible={isQuestion07Visible}
      />
      <div className="rightside-container">
        {isQuestionVisible && (
          <Question01 ocultarQuestion={ocultarQuestion} />
        )}
        {isQuestion02Visible && (
          <Question02 ocultarQuestion02={ocultarQuestion02}
            voltarQuestion02={voltarQuestion02} />
        )}
        {isQuestion03Visible && (
          <Question03 ocultarQuestion03={ocultarQuestion03}
            voltarQuestion03={voltarQuestion03} />
        )}
        {isQuestion04Visible && (
          <Question04 ocultarQuestion04={ocultarQuestion04}
            voltarQuestion04={voltarQuestion04} />
        )}
        {isQuestion05Visible && (
          <Question05 ocultarQuestion05={ocultarQuestion05}
            voltarQuestion05={voltarQuestion05} />
        )}
        {isQuestion06Visible && (
          <Question06 ocultarQuestion06={ocultarQuestion06}
            voltarQuestion06={voltarQuestion06} />
        )}
        {isQuestion07Visible && (
          <Question07 voltarQuestion07={voltarQuestion07} />
        )}
      </div>
    </>
  );
}

export default RightSide;
