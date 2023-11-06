import React from 'react';
import InputField from './InputField';
import { handleInputChange, handleProcessClick, handleClearClick } from '../controllers/ButtonEvents';

function ColumnTranspositionCipherForm({ inputValue, setInputValue, outputValue, setOutputValue }) {
  return (
    <div>
      <h1>Column Transposition Cipher Example</h1>
      <InputField
        value={inputValue}
        onChange={(event) => handleInputChange(event, setInputValue)}
        placeholder="Enter text..."
      />
      <button onClick={() => handleProcessClick(inputValue, setOutputValue)}>Cipher Input</button>
      <button onClick={() => handleClearClick(setOutputValue)}>Clear Output</button>
      <div id="outputBox">
        <p></p>
        <div>{outputValue}</div>
      </div>

      <div className="container">
        <div className="content">
          <h1>Columnar Transposition Cipher</h1>
          <p>
            In the Columnar Transposition Cipher, each character in the plain text is written horizontally with a specified alphabet width. The cipher is written vertically, creating an entirely different cipher text.
          </p>
          <p>
            <strong>Plain Text:</strong> meet me after the party
          </p>
          <p>
            <strong>Keyword:</strong> HACK
          </p>
          <p>
            <strong>Order of Alphabets in HACK:</strong> 3124
          </p>
          <p>
            <strong>Cipher Text:</strong> e e e e t e a r p y m m t h r t f t a x
          </p>
        </div>
      </div>
    </div>
  );
}

export default ColumnTranspositionCipherForm;
