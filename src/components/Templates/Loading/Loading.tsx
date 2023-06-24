import React, { useEffect, useState } from 'react';
import Lottie from 'react-lottie';
import animationData from './foxy.json';
import './loading.css';

const Loading = () => {
  const [timeRemaining, setTimeRemaining] = useState(30); // Tempo restante em segundos (30 segundos)

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(prevTime => prevTime - 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div
      className="div-loading"

    >
      <div
        className="loading-container"

      >
        <Lottie

          options={defaultOptions}
          height={500}
          width={500}
          style={{ position: 'fixed', marginLeft: '290px', top: '45%', transform: 'translate(-50%, -50%)', zIndex: 10000 }}
        />
        <div
          className="btn"

        />
        <div
          className="btn-1"

        >
          <div
            className="btn-2"
          >
            Aguarde, seu site está sendo gerado
          </div>
          <div
            className="btn-3"
          >
            Tempo restante: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
