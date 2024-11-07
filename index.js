const prompt = require('prompt-sync')();

// Entrada de dados: quantidade de vitórias e derrotas do jogador
let vitorias = parseInt(prompt("Digite a quantidade de vitórias: "));
let derrotas = parseInt(prompt("Digite a quantidade de derrotas: "));

// Função para calcular o saldo de vitórias e determinar o nível do jogador
function calcularNivel(vitorias, derrotas) {
    // Calcula o saldo de vitórias
    let saldoVitorias = vitorias - derrotas;

    // Determina o nível do jogador com base no número de vitórias
    let nivel;
    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 10 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    // Retorna o resultado
    return { saldoVitorias, nivel };
}

// Chama a função para calcular o saldo de vitórias e determinar o nível
let resultado = calcularNivel(vitorias, derrotas);

// Exibe a mensagem final com o saldo e o nível do jogador
console.log(`O Herói tem de saldo de ${resultado.saldoVitorias} está no nível de ${resultado.nivel}`);
