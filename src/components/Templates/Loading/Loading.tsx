import React from 'react';
import Lottie from 'react-lottie';
import animationData from './foxy.json';

const Loading = () => {
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
      <div style={{ paddingLeft: '5rem', paddingRight: '5rem', padding: '10rem', borderRadius: '1rem', backgroundColor: '#fff', boxShadow: '0 0 8px #000000' }}>
        <Lottie options={defaultOptions} height={400} width={400} style={{ position: 'absolute', top: '50%', left: '45%', transform: 'translate(-50%, -50%)', zIndex: 10000 }} />
      </div>
    </div>
  );
}

export default Loading;
