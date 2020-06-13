var CryptoJS = require("crypto-js");
 
var data = [{pan: 5460891234567898}, {cve: 542}]
var secretKey = 'secret key 123';

// Encrypt
var ciphertext = CryptoJS.AES.encrypt(JSON.stringify(data), secretKey).toString();
  
console.log(ciphertext);

// Decrypt
var bytes  = CryptoJS.AES.decrypt(ciphertext, secretKey);
var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
 
console.log(decryptedData);