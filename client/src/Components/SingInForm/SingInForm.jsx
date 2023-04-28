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

    // enviar los datos del formulario al servidor para el registro

    // Reiniciar los campos y errores después de enviar los datos
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setNombre('');
    setEdad('');
    setError('');
  }
  return (
    <div className="flex justify-center items-center min-h-screen bg-zinc-800">
      <form onSubmit={handleSubmit} className="w-full max-w-xs bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold text-center mb-6">Registrarse</h1>
        <div className="mb-4">
          <label htmlFor="nombre" className="block font-semibold mb-2">Nombre</label>
          <input type="text" id="nombre" className="w-full px-3 py-2 rounded-md border-gray-300 focus:outline-none focus:border-indigo-500" value={nombre} onChange={handleNombreChange} />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block font-semibold mb-2">Email</label>
          <input type="email" id="email" className="w-full px-3 py-2 rounded-md border-gray-300 focus:outline-none focus:border-indigo-500" value={email} onChange={handleEmailChange} />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block font-semibold mb-2">Contraseña</label>
          <input type="password" id="password" className="w-full px-3 py-2 rounded-md border-gray-300 focus:outline-none focus:border-indigo-500" value={password} onChange={handlePasswordChange} />
        </div>
        <div className="mb-4">
          <label htmlFor="confirmPassword" className="block font-semibold mb-2">Confirmar Contraseña</label>
          <input type="password" id="confirmPassword" className="w-full px-3 py-2 rounded-md border-gray-300 focus:outline-none focus:border-indigo-500" value={confirmPassword} onChange={handleConfirmPasswordChange} />
        </div>
        <div className="mb-4">
          <label htmlFor="edad" className="block font-semibold mb-2">Edad</label>
          <input type="number" id="edad" className="w-full px-3 py-2 rounded-md border-gray-300 focus:outline-none focus:border-indigo-500" value={edad} onChange={handleEdadChange} />
        </div>
        <button type="submit" className="w-full bg-indigo-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300">Registrarse</button>
      </form>
    </div>
  );
}

export default SignupForm;
