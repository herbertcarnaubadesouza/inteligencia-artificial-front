// Arquivo Home.js ou Home.tsx
import React, { useEffect, useState } from 'react';
import RightSide from '../components/Templates/RightSide';
import Loading from '../components/Templates/Loading/Loading';
function Preview() {
  const [isQuestionVisible, setIsQuestionVisible] = useState(true);
  const [isQuestion02Visible, setIsQuestion02Visible] = useState(false);

  const ocultarQuestion = () => {
    setIsQuestionVisible(false);
    setIsQuestion02Visible(true);
  };

  const exibirQuestion02 = () => {
    setIsQuestion02Visible(true);
  };

  const [loading, setLoading] = useState(true);
 // LOADING
 useEffect(() => {
  setLoading(true);

  const timeoutId = setTimeout(() => {
    setLoading(false);
  }, 300000);

  return () => {
    clearTimeout(timeoutId);
  };
}, []);


  return (
    <>
      <div className="main-container">
      {loading ? <Loading /> : null}
        <RightSide
        />
      </div>
    </>
  );
}

export default Preview;
