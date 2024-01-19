alert('Brota no jogo do cleitin calabreso!');
let numeroSecreto = 2;
console.log(numeroSecreto)
let chute = prompt('Escolha teu número mala, entre 1 e 500'); //o let dessa linha está sendo usado para deixar armazenado o número que a pessoa digitar

// se o chute for igual ao número secreto
if (chute == numeroSecreto) {
    alert(`Boa Bahia, o número é ${numeroSecreto}`);
} else {
    if (chute > numeroSecreto) { //If está sendo usado para que tome decisões, quando o chute é maior que o número secreto ele retorna o alerta dizendo que o número secreto é menor que o chute(valor)
        alert(`O número secreto é menor que ${chute}`);
    } else { //aqui ele mostra o alerta se o chute for maior que número secreto
        alert(`O número secreto é menor que ${chute}`);
    }
}