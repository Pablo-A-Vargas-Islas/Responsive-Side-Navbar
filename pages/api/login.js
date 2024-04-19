//api/loging.js

import conn from "./connection.js";

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

  
