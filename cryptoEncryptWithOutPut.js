var CryptoJS = require("crypto-js");
var readline = require('readline');

var leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

leitor.question("Qual seu número de cartão de crédito para criptografarmos?\n", function(pan) {
    leitor.question("Qual sua chave para criptografarmos seu cartão?\n", function(secret) {
        
        // Encrypt
        var ciphertext = CryptoJS.AES.encrypt(pan, secret).toString();

        console.log("Cipher gerado: " , ciphertext);
        
        leitor.close();
    });
});