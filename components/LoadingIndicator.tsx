import React from 'react';

const LoadingIndicator = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh', // Centers the content vertically on the page
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            display: 'inline-block',
            border: '4px solid #007BFF',
            borderRadius: '50%',
            borderTop: '4px solid transparent',
            width: '40px',
            height: '40px',
            animation: 'spin 1s linear infinite',
          }}
        ></div>
        <p
          style={{
            marginTop: '10px',
            fontSize: '18px',
            fontWeight: 'bold',
            color: '#007BFF',
          }}
        >
          Loading...
        </p>
      </div>
    </div>
  );
};

export default LoadingIndicator;
