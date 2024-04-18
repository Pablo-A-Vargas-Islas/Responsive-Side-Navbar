//api/loging.js

import { Pool } from "pg";

// Declarar conn sin inicializar
let conn;

// Función para inicializar la conexión
async function initPool() {
  conn = new Pool({
    user: "postgres",
    password: "postgres",
    host: "rds-ejemplo.cle0q44yg71c.us-east-2.rds.amazonaws.com",
    port: "5432",
    database: "postgres",
  });

  // Esperar a que la conexión se establezca
  await conn.connect();
}

// Inicializar la conexión
initPool();

export default async function handler(req, res) {
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Método no permitido', message: 'Solo se permiten solicitudes POST' });
    }
  
    const { username, password } = req.body;

  try {
    const query = 'SELECT * FROM usuarios WHERE usuario = $1 AND contraseña = $2';
    const { rows } = await conn.query(query, [username, password]);

    if (rows.length > 0) {
      return res.status(200).json({ success: true, message: 'Inicio de sesión exitoso' });
    } else {
      return res.status(401).json({ error: 'Unauthorized', message: 'Credenciales incorrectas' });
    }
  } catch (error) {
    console.error('Error al verificar las credenciales:', error.message);
    return res.status(500).json({ error: 'Internal Server Error', message: 'Error al verificar las credenciales' });
  }
  }
  