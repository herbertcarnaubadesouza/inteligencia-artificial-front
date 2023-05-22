// Arquivo Home.js ou Home.tsx
import React, { useState } from 'react';
import RightSide from '../components/Home/RightSide';

function Home() {
  const [isQuestionVisible, setIsQuestionVisible] = useState(true);
  const [isQuestion02Visible, setIsQuestion02Visible] = useState(false);

  const ocultarQuestion = () => {
    setIsQuestionVisible(false);
    setIsQuestion02Visible(true);
  };

  const exibirQuestion02 = () => {
    setIsQuestion02Visible(true);
  };

  return (
    <>
      <div className="main-container">
        <RightSide
        />
      </div>
    </>
  );
}

export default Home;
