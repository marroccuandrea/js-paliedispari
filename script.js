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
function isPalindroma(parola) {
    // Converte la parola in minuscolo per rendere il confronto non case-sensitive
    parola = parola.toLowerCase();
    
    // Converte la parola in un array di caratteri, inverte l'array e lo riunisce in una stringa
    let parolaInvertita = parola.split('').reverse().join('');

    // Verifica se la parola originale e la sua inversione sono uguali
    return parola === parolaInvertita;
}







// Pari e dispari