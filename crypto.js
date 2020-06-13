var CryptoJS = require("crypto-js");
var secretKey = 'secret key 123';

// Encrypt
var ciphertext = CryptoJS.AES.encrypt('Efetuando teste de criptografia', secretKey).toString();

console.log("Cipher gerado: " , ciphertext);
 
// Decrypt
var bytes  = CryptoJS.AES.decrypt(ciphertext, secretKey);
var originalText = bytes.toString(CryptoJS.enc.Utf8);
 
console.log("Texto original: ", originalText); 