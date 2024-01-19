alert('Brota no jogo do cleitin calabreso!');
let numeroSecreto = 2;
console.log(numeroSecreto)
let chute = prompt('Escolha teu número mala, entre 1 e 500'); //o let dessa linha está sendo usado para deixar armazenado o número que a pessoa digitar

// se o chute for igual ao número secreto
if (chute == numeroSecreto) {
    alert(`Boa Bahia, o número é ${numeroSecreto}`);
} else {
    if(chute > numeroSecreto) {
        alert(`O Número Secreto é Maior que ${chute}`)
    } else {
        alert(`O Número Secreto é Maior que ${chute}`)
    }
}