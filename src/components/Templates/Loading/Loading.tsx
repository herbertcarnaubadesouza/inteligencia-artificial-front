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
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '78.6VW', backgroundColor: 'rgb(255, 255, 255, 0.5)', position: 'fixed', top: 0, left: 0, zIndex: 1000 }}>
      <div style={{ paddingLeft: '3rem', paddingRight: '3rem', padding: '10rem', borderRadius: '1rem', backgroundColor: '#fff', boxShadow: '0 0 8px #000000' }}>
        <Lottie options={defaultOptions} height={400} width={400} style={{ position: 'absolute', top: '45%', left: '45%', transform: 'translate(-50%, -50%)', zIndex: 10000 }} />
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: '8rem', marginBottom: '-6rem' }}>
          <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
            Aguarde, seu site está sendo gerado
          </div>

          <div style={{ fontSize: '1.2rem', marginTop: '0.5rem' }}>
            Tempo restante: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
          </div>
        </div>
      </div>

    </div>
  );
};

export default Loading;
