// Arquivo Home.js ou Home.tsx
import React, { useEffect, useState } from 'react';
import RightSide from '../components/Templates/RightSide';
import Loading from '../components/Templates/Loading/Loading';
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


  const localStorageValue = localStorage.getItem('loading');
  const [loading, setLoading] = useState(true);

  // TELA LOADING
  useEffect(() => {
    if (localStorageValue !== null) {
      setLoading(localStorageValue === 'true');
    }

    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 15000);

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

  useEffect(() => {
    localStorage.removeItem("editLocal");
  }, []);

  return (
    <>


      <div className="main-container">
        {loading ? <Loading>

          Aguarde seu site está quase pronto!

        </Loading> : null}
        <TemplateProvider>

          <RightSide
          />
        </TemplateProvider>

      </div>
    </>
  );
}

export default Preview;
