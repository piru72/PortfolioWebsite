import { getMonoAlphaBeticMapping } from './Mapper.ts';

export function applyMonoalphabetic(plainText : string) : string {
    
    var monoalphabeticMapping = getMonoAlphaBeticMapping();
    var cipherText = '';

    for (var i = 0; i < plainText.length; i++) {
        var currentChar = plainText[i];
        var cipherChar = monoalphabeticMapping[currentChar];
        cipherText += cipherChar;
    }
    return cipherText;
}




