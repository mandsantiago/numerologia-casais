// Funções de Cálculos Numerológicos

/**
 * Calcula o número do destino baseado na data de nascimento
 * @param {string} birthDate - Data no formato YYYY-MM-DD ou DD/MM/YYYY
 * @returns {number} - Número do destino (1-9, 11, 22, 33)
 */
export function calculateDestinyNumber(birthDate) {
    // Remove caracteres não numéricos e converte para string de dígitos
    const digits = birthDate.replace(/\D/g, '');
    
    // Soma todos os dígitos
    let sum = 0;
    for (let digit of digits) {
        sum += parseInt(digit);
    }
    
    // Reduz até obter um único dígito ou número mestre
    return reduceToSingleDigit(sum);
}

/**
 * Reduz um número até obter um único dígito ou número mestre (11, 22, 33)
 * @param {number} num - Número a ser reduzido
 * @returns {number} - Número reduzido
 */
export function reduceToSingleDigit(num) {
    // Verifica se é um número mestre
    if (num === 11 || num === 22 || num === 33) {
        return num;
    }
    
    // Reduz até obter um único dígito
    while (num > 9) {
        let sum = 0;
        while (num > 0) {
            sum += num % 10;
            num = Math.floor(num / 10);
        }
        num = sum;
        
        // Verifica novamente se é um número mestre
        if (num === 11 || num === 22 || num === 33) {
            return num;
        }
    }
    
    return num;
}

/**
 * Tabela pitagórica para conversão de letras em números
 */
const pythagoreanTable = {
    'A': 1, 'B': 2, 'C': 3, 'D': 4, 'E': 5, 'F': 6, 'G': 7, 'H': 8, 'I': 9,
    'J': 1, 'K': 2, 'L': 3, 'M': 4, 'N': 5, 'O': 6, 'P': 7, 'Q': 8, 'R': 9,
    'S': 1, 'T': 2, 'U': 3, 'V': 4, 'W': 5, 'X': 6, 'Y': 7, 'Z': 8
};

/**
 * Calcula o número da expressão baseado no nome completo
 * @param {string} fullName - Nome completo da pessoa
 * @returns {number} - Número da expressão
 */
export function calculateExpressionNumber(fullName) {
    const cleanName = fullName.toUpperCase().replace(/[^A-Z]/g, '');
    let sum = 0;
    
    for (let letter of cleanName) {
        if (pythagoreanTable[letter]) {
            sum += pythagoreanTable[letter];
        }
    }
    
    return reduceToSingleDigit(sum);
}

/**
 * Calcula o número da alma baseado nas vogais do nome
 * @param {string} fullName - Nome completo da pessoa
 * @returns {number} - Número da alma
 */
export function calculateSoulNumber(fullName) {
    const vowels = 'AEIOU';
    const cleanName = fullName.toUpperCase().replace(/[^A-Z]/g, '');
    let sum = 0;
    
    for (let letter of cleanName) {
        if (vowels.includes(letter) && pythagoreanTable[letter]) {
            sum += pythagoreanTable[letter];
        }
    }
    
    return reduceToSingleDigit(sum);
}

/**
 * Calcula o número da personalidade baseado nas consoantes do nome
 * @param {string} fullName - Nome completo da pessoa
 * @returns {number} - Número da personalidade
 */
export function calculatePersonalityNumber(fullName) {
    const vowels = 'AEIOU';
    const cleanName = fullName.toUpperCase().replace(/[^A-Z]/g, '');
    let sum = 0;
    
    for (let letter of cleanName) {
        if (!vowels.includes(letter) && pythagoreanTable[letter]) {
            sum += pythagoreanTable[letter];
        }
    }
    
    return reduceToSingleDigit(sum);
}

/**
 * Calcula todos os números numerológicos de uma pessoa
 * @param {string} fullName - Nome completo
 * @param {string} birthDate - Data de nascimento
 * @returns {object} - Objeto com todos os números calculados
 */
export function calculateAllNumbers(fullName, birthDate) {
    return {
        destiny: calculateDestinyNumber(birthDate),
        expression: calculateExpressionNumber(fullName),
        soul: calculateSoulNumber(fullName),
        personality: calculatePersonalityNumber(fullName)
    };
}

