"use strict"
/*La mia lista della spesa, insersico in una array la mia spesa */
const ListaSpesa = [
    "pane",
    "pasta",
    "riso",
    "prosciutto",
    "salame",
    "maionese",
    "coca cola",
    "acqua",
    "fanta",
    "ginger"
]
console.log(ListaSpesa);

let contatore = 0
console.log(contatore);

const lista = document.querySelector(".lista");

/* utilizzo del ciclo while per ciclare la mia lista della spesa */
while (contatore <= ListaSpesa.length -1) {
    console.log(ListaSpesa[contatore])
    const elemento = document.createElement("li");
    console.log(elemento);
    lista.append(elemento);
    elemento.append(ListaSpesa[contatore]);

    contatore++
}
