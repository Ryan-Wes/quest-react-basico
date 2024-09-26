import React from 'react';

const TextoColorido = ({ text, color }) => {
    return (
      <p style={{ color: color, textTransform: 'uppercase' }}>
        {text}
      </p>
    );
  };
  
  export default TextoColorido;
