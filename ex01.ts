/* Utilizando o conceito de Interfaces do TypeScript, construa uma Interface chamada IVeiculos que possua 3 atributos
, em seguida crie 2 objetos que possua essa tipagem e exiba os atributos em tela. Veja os exemplos abaixo: */

interface iVeiculos {
    nome: string;
    marca: string;
    ano: number;
}

let veiculo1: iVeiculos ={
    nome:"Avião",
    marca:"Boing",
    ano:2024
}

console.log(`O primeiro veículo é um ${veiculo1.nome}`)
console.log(`A marca do veículo é ${veiculo1.marca}`)
console.log(`O ano do veículo é ${veiculo1.ano}`)