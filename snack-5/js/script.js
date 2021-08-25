//Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array

var oddNumbers = [];

for (var i = 1; i <= 6; i++) {
    var userNum = parseInt(prompt("Inserisci un numero."));
    if (userNum % 2 != 0) {
        oddNumbers.push(userNum)
    }
}

alert("Hai inserito i seguenti numeri dispari " + oddNumbers);