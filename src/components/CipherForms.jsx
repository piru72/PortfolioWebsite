
import React from 'react';
import MonoalphabeticCipherForm from './MonoalphabeticCipherForm';
import PolyalphabeticCipherForm from './PolyAlphabeticCipherForm';
import RowTranspositionCipherForm from './RowTranspositioncipherForm';
import ColumnTranspositionCipherForm from './ColumnTranspositionCipher';

export function CipherForms({ activeForm, formData, setActiveForm }) {
    return (
        <div>
            {activeForm === 'monoalphabetic' && (
                <MonoalphabeticCipherForm
                    inputValue={formData[activeForm].plainText}
                    setInputValue={(value) => formData[activeForm].setPlainText(value)}
                    outputValue={formData[activeForm].ciphertext}
                    setOutputValue={(value) => formData[activeForm].setCiphertext(value)} />
            )}

            {activeForm === 'polyalphabetic' && (
                <PolyalphabeticCipherForm
                    inputValue={formData[activeForm].plainText}
                    setInputValue={(value) => formData[activeForm].setPlainText(value)}
                    outputValue={formData[activeForm].ciphertext}
                    setOutputValue={(value) => formData[activeForm].setCiphertext(value)} />)}

            {activeForm === 'rowtransposition' && (
                <RowTranspositionCipherForm
                    inputValue={formData[activeForm].plainText}
                    setInputValue={(value) => formData[activeForm].setPlainText(value)}
                    outputValue={formData[activeForm].ciphertext}
                    setOutputValue={(value) => formData[activeForm].setCiphertext(value)} />)}

            {activeForm === 'columntransposition' && (
                <ColumnTranspositionCipherForm
                    inputValue={formData[activeForm].plainText}
                    setInputValue={(value) => formData[activeForm].setPlainText(value)}
                    outputValue={formData[activeForm].ciphertext}
                    setOutputValue={(value) => formData[activeForm].setCiphertext(value)} />)}
        </div>
    );
}


export default CipherForms;
