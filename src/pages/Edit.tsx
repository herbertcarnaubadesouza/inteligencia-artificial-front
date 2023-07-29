// Arquivo Home.js ou Home.tsx
import React, { useEffect, useState } from 'react';
import RightSideTextEdit from '../components/Templates/RightSideTextEdit';
import EditText from '../components/Templates/ComponentEditText';
import { TemplateProvider } from '../components/Templates/useContext/TemplateContext';
import Loading from '../components/Templates/Loading/Loading';
function Preview() {
  const [isQuestionVisible, setIsQuestionVisible] = useState(true);
  const [isQuestion02Visible, setIsQuestion02Visible] = useState(false);


  useEffect(() => {

    const editLocal = localStorage.setItem("editLocal", "editLocal")
  }, [])

  const ocultarQuestion = () => {
    setIsQuestionVisible(false);
    setIsQuestion02Visible(true);
  };

  const exibirQuestion02 = () => {
    setIsQuestion02Visible(true);
  };

  const localStorageValue = localStorage.getItem('loading');
  const [loading, setLoading] = useState(true);

  // TELA LOADING
  useEffect(() => {
    if (localStorageValue !== null) {
      setLoading(localStorageValue === 'true');
    }

    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 150);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  // Salvar o estado no localStorage
  useEffect(() => {
    localStorage.setItem('loading', loading.toString());
  }, [loading]);

  // Limpar o estado do localStorage ao encerrar o navegador
  window.addEventListener('beforeunload', () => {
    localStorage.removeItem('loading');
  });



  return (
    <>
      <div className="main-container">
        <TemplateProvider>
          {loading ? <Loading>

            Estamos quase lá!

          </Loading> : null}
          <RightSideTextEdit
          />
          <EditText />
        </TemplateProvider>

      </div>
    </>
  );
}

export default Preview;
