function verificarNumeroPrimo(n) {
    if (n <= 1) return false; // 0 e 1 não são primos

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false; // caso o numero nao seja dividio por si mesmo e por 2 entao é primo
    }
    
    return true; // Se nenhum divisor for encontrado, então o número é primo
}

// Casos de teste
console.log(verificarNumeroPrimo(0)); // false
console.log(verificarNumeroPrimo(1)); // false
console.log(verificarNumeroPrimo(2)); // true
console.log(verificarNumeroPrimo(3)); // true
console.log(verificarNumeroPrimo(7)); // true
console.log(verificarNumeroPrimo(83)); // true
console.log(verificarNumeroPrimo(100)); // false
console.log(verificarNumeroPrimo(991)); // true
console.log(verificarNumeroPrimo(104729)); // true
console.log(verificarNumeroPrimo(14348907)); // false
