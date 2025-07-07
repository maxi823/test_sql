// db_connection.js
import mysql from'mysql2';

// Configura tus datos de conexión
const connection = mysql.createConnection({
  host: 'localhost',       // o la IP de tu servidor MySQL
  user: 'admin',            // tu usuario de MySQL
  password: 'root',            // tu contraseña (déjalo vacío si no tienes)
  database: 'clinica'      // base de datos que quieres usar
});
// Conectar y verificar
connection.connect((err) => {
  if (err) {
    return console.error('Error conectando a la base de datos: ' + err.message);
  }
  console.log('Conexión exitosa a la base de datos MySQL!');
});

// Exportamos la conexión para usarla en otros archivos
export default  connection;

