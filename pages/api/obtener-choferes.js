// obtener-choferes.js

import dbConnection from './connection'; // Importa la conexión a la base de datos

const handler = async (req, res) => {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Método no permitido', message: 'Solo se permiten solicitudes GET' });
  }

  try {
    // Realiza la consulta a la base de datos para obtener los choferes
    const query = 'SELECT * FROM choferes';
    const result = await dbConnection.query(query);

    // Envía la lista de choferes como respuesta
    return res.status(200).json({ choferes: result.rows });
  } catch (error) {
    console.error('Error al obtener los choferes de la base de datos:', error.message);
    return res.status(500).json({ error: 'Error Interno del Servidor', message: 'Error al obtener los choferes de la base de datos' });
  }
};

export default handler;
