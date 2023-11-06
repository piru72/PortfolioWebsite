import React from 'react';

function CipherOptions({ onButtonClick }) {
  return (
    <div>
      <button onClick={() => onButtonClick('monoalphabetic')}>Monoalphabetic Cipher</button>
      <button onClick={() => onButtonClick('polyalphabetic')}>Polyalphabetic Cipher</button>
      <button onClick={() => onButtonClick('rowtransposition')}>Row Transposition Cipher</button>
      <button onClick={() => onButtonClick('columntransposition')}>Column Transposition Cipher</button>
    </div>
  );
}

export default CipherOptions;
