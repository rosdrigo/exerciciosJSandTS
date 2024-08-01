/* Informe quatro valores (n1, n2, n3, n4). A seguir, calcule e mostre a diferença do produto
 entre o n1 e n2 pelo produto entre o n3 e o n4. Utiliza nesse exercício o conceito de Interpolação na exibição dos dados. Veja os exemplos abaixo: 
 CALCULO = (n1 * n2) – (n3 * n4)
*/
 
let diferenca = (n1,n2,n3,n4) => {return (n1*n2)-(n3*n4)}

console.log(`Diferença: ${diferenca(5.0,6.0,7.0,8.0)}`)
console.log(`Diferença: ${diferenca(5.0,6.0,-7.0,8.0)}`)