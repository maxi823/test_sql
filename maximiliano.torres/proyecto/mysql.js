
const connection = require('./db_connection');

// Función 1: getTelefonos
function getTelefonos() {
  const query = `SELECT nombre, apellido, telefono FROM paciente`;

  connection.query(query, (error, results) => {
    if (error) throw error;

    console.log("Listado de teléfonos de pacientes:");
    results.forEach(paciente => {
      console.log(`${paciente.nombre} ${paciente.apellido}: ${paciente.telefono}`);
    });
  });
}

// Función 2: getTelefonoPaciente
function getTelefonoPaciente(numero_historial) {
  const query = `
    SELECT telefono 
    FROM paciente 
    WHERE numero_historial = ?`;

  connection.query(query, [numero_historial], (error, results) => {
    if (error) throw error;

    if (results.length > 0) {
      console.log(`Teléfono del paciente: ${results[0].telefono}`);
    } else {
      console.log("Paciente no encontrado.");
    }
  });
}

// Función 3: getMedicosPaciente
function getMedicosPaciente(numero_historial) {
  const query = `
    SELECT DISTINCT m.nombre, m.apellido, m.matricula
    FROM medico m
    INNER JOIN ingreso i ON m.matricula = i.matricula_medico
    WHERE i.numero_historial = ?`;

  connection.query(query, [numero_historial], (error, results) => {
    if (error) throw error;

    console.log(`Médicos que atendieron al paciente ${numero_historial}:`);
    results.forEach(medico => {
      console.log(`${medico.nombre} ${medico.apellido} - Matrícula: ${medico.matricula}`);
    });
  });
}


 //module.exports = { getTelefonos, getTelefonoPaciente, getMedicosPaciente };

// 🧪 Pruebas (descomentá para probar)
 getTelefonos();
 getTelefonoPaciente(12345);
 getMedicosPaciente(12345);
