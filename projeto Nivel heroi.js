// Desafio Classificador de nível de Herói

// Variáveis do herói
let nomeHeroi = "Hercules"; // você pode trocar pelo nome que quiser
let xpHeroi = 7500; // você pode trocar o valor da experiência (XP)

// Variável para armazenar o nível do herói
let nivel = "";

// Estruturas de decisão para classificar o nível
if (xpHeroi < 1000) {
    nivel = "Ferro";
} else if (xpHeroi >= 1001 && xpHeroi <= 2000) {
    nivel = "Bronze";
} else if (xpHeroi >= 2001 && xpHeroi <= 5000) {
    nivel = "Prata";
} else if (xpHeroi >= 5001 && xpHeroi <= 7000) {
    nivel = "Ouro";
} else if (xpHeroi >= 7001 && xpHeroi <= 8000) {
    nivel = "Platina";
} else if (xpHeroi >= 8001 && xpHeroi <= 9000) {
    nivel = "Ascendente";
} else if (xpHeroi >= 9001 && xpHeroi <= 10000) {
    nivel = "Imortal";
} else if (xpHeroi >= 10001) {
    nivel = "Radiante";
} 

// Saída final
console.log(`O Herói de nome ${nomeHeroi} está no nível de ${nivel}`);
