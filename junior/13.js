let idadeTexto = prompt("Digite sua idade:")

let idadeNumero =
number(idadeTexto);

console.log("sua idade é",
idadeNumero);
if (isNaN(idadeNumero)) {
    console.log("o valor digitado não é um numero válido.");
}