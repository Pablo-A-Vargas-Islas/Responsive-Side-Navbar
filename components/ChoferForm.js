import { useState } from 'react';

const ChoferForm = ({ onSubmit }) => {
  const [nombre, setNombre] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');
  const [direccion, setDireccion] = useState('');
  const [telefono, setTelefono] = useState('');
  const [fechaIngreso, setFechaIngreso] = useState('')
  const [foto, setFoto] = useState(null);
  const [actaNacimiento, setActaNacimiento] = useState(null);
  const [curp, setCurp] = useState('');
  const [contrato, setContrato] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('nombre', nombre);
    formData.append('fechaNacimiento', fechaNacimiento);
    formData.append('direccion', direccion);
    formData.append('telefono', telefono);
    formData.append('fechaIngreso', fechaIngreso);
    formData.append('foto', foto);
    formData.append('actaNacimiento', actaNacimiento);
    formData.append('curp', curp);
    formData.append('contrato', contrato);

    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nombre:</label>
        <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
      </div>
      <div>
        <label>Fecha de Nacimiento:</label>
        <input type="date" value={fechaNacimiento} onChange={(e) => setFechaNacimiento(e.target.value)} />
      </div>
      <div>
        <label>Dirección:</label>
        <input type="text" value={direccion} onChange={(e) => setDireccion(e.target.value)} />
      </div>
      <div>
        <label>Teléfono:</label>
        <input type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
      </div>
      <div>
        <label>Fecha de ingreso:</label>
        <input type="date" value={fechaIngreso} onChange={(e) => setFechaIngreso(e.target.value)} />
      </div>
      <div>
        <label>Foto:</label>
        <input type="file" accept="image/*" onChange={(e) => setFoto(e.target.files[0])} />
      </div>
      <div>
        <label>Acta de Nacimiento (PDF):</label>
        <input type="file" accept=".pdf" onChange={(e) => setActaNacimiento(e.target.files[0])} />
      </div>
      <div>
        <label>CURP:</label>
        <input type="text" value={curp} onChange={(e) => setCurp(e.target.value)} />
      </div>
      <div>
        <label>Contrato:</label>
        <input type="text" value={contrato} onChange={(e) => setContrato(e.target.value)} />
      </div>
      <button type="submit">Registrar Chofer</button>
    </form>
  );
};

export default ChoferForm;
