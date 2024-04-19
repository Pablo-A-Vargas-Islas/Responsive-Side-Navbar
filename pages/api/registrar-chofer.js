import multiparty from 'multiparty';
import fs from 'fs';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import dbConnection from '../api/connection'; // Importa la conexión a la base de datos

export const config = {
  api: {
    bodyParser: false,
  },
};

const uploadDir = './public'; // Ruta donde se guardarán las imágenes

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true }); // Crea la carpeta de manera recursiva si no existe
}

const handler = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido', message: 'Solo se permiten solicitudes POST' });
  }

  const form = new multiparty.Form({
    uploadDir: uploadDir,
  });

  form.parse(req, async (err, fields, files) => {
    if (err) {
      return res.status(500).json({ error: 'Error al procesar la solicitud', message: err.message });
    }

    const { nombre, fechaNacimiento, direccion, telefono, fechaIngreso, curp } = fields;
    const { foto, actaNacimiento } = files;

    // Genera nombres únicos para los archivos
    const nombreSinEspacios = nombre[0].replace(/\s+/g, '');
    const fotoNombreNuevo = `Foto_${nombreSinEspacios}${path.extname(foto[0].path)}`;
    const fotoRutaNueva = path.join(fotoNombreNuevo).replace(/\\/g, '/');
    const actaNacimientoNombreNuevo = `ActaNacimiento_${nombreSinEspacios}${path.extname(actaNacimiento[0].path)}`;
    const actaNacimientoRutaNueva = path.join(actaNacimientoNombreNuevo).replace(/\\/g, '/');

    // Cambia el nombre del archivo de la foto
    fs.renameSync(foto[0].path, path.join(uploadDir, fotoRutaNueva));

    // Cambia el nombre del archivo del acta de nacimiento
    fs.renameSync(actaNacimiento[0].path, path.join(uploadDir, actaNacimientoRutaNueva));

    // Guarda la ruta de los archivos en la base de datos
    try {
      const query = `INSERT INTO choferes (nombre, fecha_nacimiento, direccion, telefono, fecha_ingreso, curp, foto, contrato) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`;
      await dbConnection.query(query, [nombre[0], fechaNacimiento[0], direccion[0], telefono[0], fechaIngreso[0], curp[0], fotoRutaNueva, actaNacimientoRutaNueva]);
      return res.status(200).json({ success: true, message: 'Chofer registrado exitosamente' });
    } catch (error) {
      console.error('Error al registrar chofer en la base de datos:', error.message);
      return res.status(500).json({ error: 'Error Interno del Servidor', message: 'Error al registrar chofer en la base de datos' });
    }
  });
};

export default handler;
