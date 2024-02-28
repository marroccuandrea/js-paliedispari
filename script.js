// Parola palindroma
const inputParola = document.getElementById('input-parola');
const btn = document.getElementById('check');
const output = document.getElementById('risultato');

//FUNZIONI
btn.addEventListener('click', function(){
    // Ottiene il valore inserito dall'utente
    const parola = document.getElementById("input-parola").value;

    // Verifica se la parola inserita è palindroma
    if (isPalindroma(parola)) {
        document.getElementById("risultato").innerHTML = "La parola inserita è palindroma!";
    }else{
        document.getElementById("risultato").innerHTML = "La parola inserita non è palindroma.";
    }
})

function isPalindroma(parola){
    // Divido la parola a metà
    for(let i = 0; i < parola.length / 2; i++){
        // Confronto le due parti della parola l'una con l'altra
        if(parola[i] !== parola[parola.length - 1 - i]){
            return false;
        }
    }
    return true;
}



// Pari e dispari

// 1 - 2

let scegliPariDispari = prompt("scegli pari o dispari");
let numeroUtente = parseInt (prompt("scegli un numero da 1 a 5"));


// 3

function getRandomNumber(min, max){

    return Math.floor(Math.random() * (max - min + 1) + min);
    
}

let numPC = getRandomNumber (1, 5);



// 4

function sommaNum(numA, numB){

    let somma = numA + numB;
    

    if (somma % 2 === 0) {
        somma = "pari";
    }

    else{
        somma = "dispari";
    }

    return somma;
}

// 5

let pariDispari = sommaNum (numeroUtente, numPC);
console.log(`risultato somma = ${pariDispari}`); 

if (pariDispari === scegliPariDispari) {
    risultato = "Hai vinto!";
    console.log(risultato);
}
else {
    risultato = "Hai perso!";
    console.log(risultato);

}

// 6
document.getElementById('risultato2').innerHTML = `
Il giocatore ha giocato ${scegliPariDispari} con il numero ${numeroUtente} <br>
Il pc ha giocato ${numPC} <br>
${risultato}
`