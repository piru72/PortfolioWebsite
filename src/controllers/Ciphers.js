import { getMonoAlphaBeticMapping } from './Mapper.js';

export function applyMonoalphabetic(plainText) {
    
    var monoalphabeticMapping = getMonoAlphaBeticMapping();
    var cipherText = '';

    for (var i = 0; i < plainText.length; i++) {
        var currentChar = plainText[i];
        var cipherChar = monoalphabeticMapping[currentChar];
        cipherText += cipherChar;
    }
    return cipherText;
}

export function applyPolyalphabetic(plainText, key) {

}

export function applyRowTransposition(plainText, key) {
    
}

export function applyColumnTransposition(plainText, key) {
    
}





