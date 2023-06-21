import React, { useEffect, useState } from 'react';
import Lottie from 'react-lottie';
import animationData from './foxy.json';

const Loading = () => {
  const [timeRemaining, setTimeRemaining] = useState(300); // Tempo restante em segundos (5 minutos)

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
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 1000
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          justifyContent: 'center',
          paddingLeft: '5rem',
          paddingRight: '5rem',
          padding: '10rem',
          borderRadius: '1rem',
          backgroundColor: '#fff',
          boxShadow: '0 0 8px #000000'
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Lottie
            options={defaultOptions}
            height={400}
            width={400}
            style={{
              marginBottom: '1rem'
            }}
          />
        </div>

        <div>
          <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
            Aguarde, seu site está sendo gerado
          </div>

          <div style={{ fontSize: '1.2rem', marginTop: '0.5rem' }}>
            Tempo restante: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
          </div>
        </div>

        <style>
          {`
            @keyframes spin {
              0% {
                transform: rotate(0deg);
              }
              100% {
                transform: rotate(360deg);
              }
            }
          `}
        </style>
      </div>
    </div>
  );
};

export default Loading;
