var CryptoJS = require("crypto-js");
var readline = require('readline');

var leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

leitor.question("Qual sua chave secreta?\n", function(secret) {
    leitor.question("Qual o cipher para abrirmos com essa chave?\n", function(cipherText) {

        // Decrypt
        var bytes  = CryptoJS.AES.decrypt(cipherText, secret);
        var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

        console.log("Cartão aberto: " , decryptedData);
        
        leitor.close();
    });
});