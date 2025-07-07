// Import named exports from calculadora.js
import { suma, resta, division, multiplicacion } from './calculadora.js';
// Import the default export (info function)
import infoCalculadora from './calculadora.js'; // You can name the default import anything you like

// Function to perform and display a calculation
function calcular(nombreCalculo, valor1, valor2) {
    let resultado;
    switch (nombreCalculo.toLowerCase()) {
        case 'suma':
            resultado = suma(valor1, valor2);
            break;
        case 'resta':
            resultado = resta(valor1, valor2);
            break;
        case 'division':
            resultado = division(valor1, valor2);
            break;
        case 'multiplicacion':
            resultado = multiplicacion(valor1, valor2);
            break;
        default:
            resultado = "Error: Cálculo no reconocido. Opciones: suma, resta, division, multiplicacion.";
    }
    console.log(`Resultado de ${nombreCalculo}: ${resultado}`);
}

// --- Pruebas de funcionamiento ---

console.log("--- Información del módulo de cálculo ---");
console.log(infoCalculadora()); // Call the default exported info function
console.log("\n--- Realizando cálculos ---");

// Prueba 1: Suma
calcular('Suma', 10, 5); // Expected: 15
calcular('Suma', 7, 'a'); // Expected: Error

// Prueba 2: Resta
calcular('Resta', 20, 8); // Expected: 12
calcular('Resta', 'b', 5); // Expected: Error

// Prueba 3: Division
calcular('Division', 100, 4); // Expected: 25
calcular('Division', 10, 0); // Expected: Error (división por cero)
calcular('Division', 50, 'c'); // Expected: Error

// Prueba 4: Multiplicacion
calcular('Multiplicacion', 6, 7); // Expected: 42
calcular('Multiplicacion', 3, null); // Expected: Error

// Prueba de cálculo no válido
calcular('Potencia', 2, 3); // Expected: Error