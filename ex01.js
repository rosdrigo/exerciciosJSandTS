/*Elabore um algoritmo em JavaScript, que a partir do Salário Bruto, o Adicional Noturno, as Horas Extras e os Descontos de um Colaborador,
 e exiba na tela o Salário Líquido. Utilize nesse exercício Arrow Function. Veja o exemplo abaixo:
 
 SALÁRIO LÍQUIDO = SALÁRIO BRUTO + ADICIONAL NOTURNO + (HORAS EXTRAS * 5) - DESCONTOS
 */

let salarioLiquido  = (salarioBruto,adicionalNoturno,horaExtra,desconto) => {return salarioBruto+adicionalNoturno+(horaExtra*5)-desconto}

console.log(`Salario Líquido: ${salarioLiquido(2000.00,500.00,100.00,200.00)}`)