// Arquivo Home.js ou Home.tsx
import React, { useEffect, useState } from 'react';
import RightSideTextEdit from '../components/Templates/RightSideTextEdit';
import EditText from '../components/Templates/ComponentEditText';
import { TemplateProvider } from '../components/Templates/useContext/TemplateContext';
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




  return (
    <>
      <div className="main-container">
        <TemplateProvider>

          <RightSideTextEdit
          />
          <EditText />
        </TemplateProvider>

      </div>
    </>
  );
}

export default Preview;
