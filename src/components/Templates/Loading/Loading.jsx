import React, { useEffect, useState } from 'react';
import Lottie from 'react-lottie';
import animationData from './foxy.json';
import './loading.css';
import { ClipLoader } from 'react-spinners';
const Loading = ({ children }) => {
  const [timeRemaining, setTimeRemaining] = useState(15); // Tempo restante em segundos (30 segundos)

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining((prevTime) => prevTime - 1);
    }, 15000);

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
    <div className="div-loading">
      <div className="loading-container">
        <Lottie
          options={defaultOptions}
          height={300}
          width={300}
          style={{
            position: 'fixed',
            marginLeft: '165px',
            top: '45%',
            transform: 'translate(-50%, -50%)',
            zIndex: 10000,
          }}
        />
        <div className="btn" />
        <div className="btn-1">
          <div className="btn-2">{children}</div>
          <div className="btn-3">
            Tempo restante: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
          </div>
          <ClipLoader
            color="#000000"
            cssOverride={112121}
            loading
            size={25}
            speedMultiplier={0.9}
          />
        </div>
      </div>
    </div>
  );
};

export default Loading;
