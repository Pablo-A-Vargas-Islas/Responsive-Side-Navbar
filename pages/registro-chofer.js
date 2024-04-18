import React, { useState } from 'react';
import ChoferForm from '../components/ChoferForm';
import Alert from '../components/Alert';

const RegistroChofer = () => {
  const [alertMessage, setAlertMessage] = useState('');
  const [alertType, setAlertType] = useState('');

  const handleSubmit = async (formData) => {
    try {
      const response = await fetch('/api/registrar-chofer', {
        method: 'POST',
        body: formData,
      });
      if (response.ok) {
        // Maneja respuesta exitosa
        setAlertMessage('¡Chofer registrado exitosamente!');
        setAlertType('success');
      } else {
        // Maneja error de respuesta
        setAlertMessage('Error al registrar el chofer. Inténtalo de nuevo.');
        setAlertType('error');
      }
    } catch (error) {
      console.error('Error al registrar chofer:', error);
      setAlertMessage('Error al registrar el chofer. Inténtalo de nuevo.');
      setAlertType('error');
    }
  };

  return (
    <div>
      {alertMessage && <Alert message={alertMessage} type={alertType} />}
      <h1>Registrar Chofer</h1>
      <ChoferForm onSubmit={handleSubmit} />
    </div>
  );
};

export default RegistroChofer;