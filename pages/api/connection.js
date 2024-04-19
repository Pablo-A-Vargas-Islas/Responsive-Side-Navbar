// //api/connection.js

// import { Pool } from "pg";

// let conn;

// // Función asincrónica para inicializar la conexión
// async function initializeConnection() {
//   conn = new Pool({
//     user: "postgres",
//     password: "postgres",
//     host: "rds-ejemplo.cle0q44yg71c.us-east-2.rds.amazonaws.com",
//     port: "5432",
//     database: "postgres",
//   });

//   // Espera a que se complete la inicialización de la conexión
//   await conn.connect();
// }

// // Inicializa la conexión al importar este módulo
// initializeConnection();

// // Exporta la conexión después de que se haya completado la inicialización
// export default conn;

//api/connection.js

import { Pool } from "pg";

let conn;

// Función asincrónica para inicializar la conexión
async function initializeConnection() {
  conn = new Pool({
    user: "postgres",
    password: "servgago",
    host: "77.37.67.109",
    port: "5432",
    database: "postgres",
  });

  // Espera a que se complete la inicialización de la conexión
  await conn.connect();
}

// Inicializa la conexión al importar este módulo
initializeConnection();

// Exporta la conexión después de que se haya completado la inicialización
export default conn;