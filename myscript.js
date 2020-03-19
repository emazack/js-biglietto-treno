// il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
var km;
var eta;

// Chiedo l'età del passeggero
eta = prompt("Inserisci la tua età");
// Chiedo Il numero di chilometri che vuole percorrere
km = prompt("Inserisci il numero di chilometri da percorrere");
// Calcolare il prezzo del biglietto in base ai chilometri
var prezzobase;
prezzobase = km * 0.21;
// creare lo sconto se possibile
var scontoGiovane;
scontoGiovane = (prezzobase * 20)/100
var scontoAnziani;
scontoAnziani = (prezzobase * 40)/100

// fornire/calcolare ed applicare lo sconto se possibile
var prezzoGiovane;
var prezzoAnziani;
if (eta < 18) {
  prezzoGiovane = prezzobase - scontoGiovane;
  document.getElementById('biglietto').innerHTML = prezzoGiovane + " Euro";
} else if (eta > 65) {
  prezzoAnziani = prezzobase - scontoAnziani;
  document.getElementById('biglietto').innerHTML = prezzoAnziani + " Euro";
} else {
  document.getElementById('biglietto').innerHTML = prezzobase + " Euro";
}
