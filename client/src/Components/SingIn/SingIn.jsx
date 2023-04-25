import React, { useState } from 'react';

const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [nombre, setNombre] = useState('');
  const [edad, setEdad] = useState('');
  const [error, setError] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  }

  const handleNombreChange = (e) => {
    setNombre(e.target.value);
  }

  const handleEdadChange = (e) => {
    setEdad(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar que todos los campos estén completos
    if (!email || !password || !confirmPassword || !nombre || !edad) {
      setError('Por favor, completa todos los campos.');
      return;
    }

    // Validar el formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Por favor, ingresa un email válido.');
      return;
    }

    // Validar longitud de contraseña
    if (password.length < 8) {
      setError('La contraseña debe tener al menos 8 caracteres.');
      return;
    }

    // Validar coincidencia de contraseña y confirmación de contraseña
    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden.');
      return;
    }

    // Validar edad como número positivo
    const parsedEdad = parseInt(edad, 10);
    if (isNaN(parsedEdad) || parsedEdad <= 0) {
      setError('Por favor, ingresa una edad válida.');
      return;
    }

    // Aquí puedes enviar los datos del formulario al servidor para el registro

    // Reiniciar los campos y errores después de enviar los datos
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setNombre('');
    setEdad('');
    setError('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input type="email" value={email} onChange={handleEmailChange} />
      </label>
      <label>
        Contraseña:
        <input type="password" value={password} onChange={handlePasswordChange} />
      </label>
      <label>
        Confirmar Contraseña:
        <input type="password" value={confirmPassword} onChange={handleConfirmPasswordChange} />
      </label>
      <label>
        Nombre:
        <input type="text" value={nombre} onChange={handleNombreChange} />
      </label>
      <label>
        Edad:
        <input type="number" value={edad} onChange={handleEdadChange} />
      </label>
      {error && <p>{error}</p>}
      <button type="submit">Registrarse</button>
    </form>
  );
}

export default SignupForm;
