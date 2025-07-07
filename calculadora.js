// Function to validate if a value is a number
function isValidNumber(value) {
    return typeof value === 'number' && !isNaN(value);
}

// Function 1: Suma
export function suma(a, b) {
    if (!isValidNumber(a) || !isValidNumber(b)) {
        return "Error: Ambos parámetros deben ser números para la suma.";
    }
    return a + b;
}

// Function 2: Resta
export function resta(a, b) {
    if (!isValidNumber(a) || !isValidNumber(b)) {
        return "Error: Ambos parámetros deben ser números para la resta.";
    }
    return a - b;
}

// Function 3: Division
export function division(a, b) {
    if (!isValidNumber(a) || !isValidNumber(b)) {
        return "Error: Ambos parámetros deben ser números para la división.";
    }
    if (b === 0) {
        return "Error: No se puede dividir por cero.";
    }
    return a / b;
}

// Function 4: Multiplicacion
export function multiplicacion(a, b) {
    if (!isValidNumber(a) || !isValidNumber(b)) {
        return "Error: Ambos parámetros deben ser números para la multiplicación.";
    }
    return a * b;
}

// Default export: info function
export default function info() {
    return "Con el presente módulo usted podrá realizar las operaciones básicas de matemática como sumar, restar, multiplicar y dividir.";
}