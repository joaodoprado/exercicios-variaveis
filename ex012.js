// Taxa de juros
let M = 90000;
let C = 60000;
let n = 24

let i = (M / C) ** (1 / n) - 1
i = i * 100

console.log(`O seu financiamento de ${C} reais teve uma taxa de juros de ${i.toFixed(3)}%, pois após ${n} meses você teve que pagar ${M} reais.`)