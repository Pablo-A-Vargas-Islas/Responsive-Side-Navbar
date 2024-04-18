import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Image from 'next/image'; // Importa el componente Image de Next.js

const Choferes = () => {
  const router = useRouter();
  const [choferes, setChoferes] = useState([]);

  // Función para obtener los choferes de la base de datos
  const obtenerChoferes = async () => {
    try {
      const response = await fetch('/api/obtener-choferes');
      const data = await response.json();
      setChoferes(data.choferes);
    } catch (error) {
      console.error('Error al obtener los choferes:', error);
    }
  };

  useEffect(() => {
    obtenerChoferes();
  }, []);

  // Función para manejar el clic en la tarjeta de registro
  const handleClickRegistro = () => {
    router.push('/registro-chofer');
  };

  return (
    <div>
      <h1>Choferes</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {/* Renderizar las tarjetas de los choferes existentes */}
        {choferes.map((chofer) => (
          <div key={chofer.id} style={{ margin: '10px', width: '200px' }}>
            {console.log('Ruta de la foto:', chofer.foto)}
            <Image src={chofer.foto} alt="Foto de chofer" width={200} height={200} /> {/* Reemplaza <img> con Image */}
            <p>{chofer.nombre}</p>
          </div>
        ))}
        {/* Renderizar la tarjeta de registro */}
        <div style={{ margin: '10px', width: '200px', cursor: 'pointer', border: '1px solid black', padding: '10px', textAlign: 'center' }} onClick={handleClickRegistro}>
          <p>Registrar Nuevo Chofer</p>
        </div>
      </div>
    </div>
  );
};

export default Choferes;