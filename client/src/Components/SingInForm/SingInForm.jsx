import React, { useState } from 'react';
import axios from 'axios'
import { connect } from 'react-redux';
import {getUserRegistered} from '../../Actions/actions'
import { useNavigate, Link } from 'react-router-dom'

function SignupForm({ getUserRegistered }){


  const [input, setInput] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    nombre: '',
    edad: '',
  })

  const [error, setErrors] = useState([])
  const history = useNavigate()


  const handleInputValueChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
  }

  function validate(input) {

    setErrors([]);

    // Validar que todos los campos estén completos
    if (!input.email || !input.password || !input.confirmPassword || !input.nombre || !input.edad) {
      setErrors(prevErrors => [...prevErrors, 'Por favor, completa todos los campos.']);
    }

    // Validar el formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(input.email)) {

      setErrors(prevErrors => [...prevErrors, 'Por favor, ingresa un email válido.']);
    }
    // Validar longitud de contraseña
    if (input.password.length < 8) {
      setErrors(prevErrors => [...prevErrors, 'La contraseña debe tener al menos 8 caracteres.']);
    }
    // Validar coincidencia de contraseña y confirmación de contraseña
    if (input.password !== input.confirmPassword) {

      setErrors(prevErrors => [...prevErrors, 'Las contraseñas no coinciden.']);
    }
    // Validar edad como número positivo
    const parsedEdad = parseInt(input.edad, 10);
    if (isNaN(parsedEdad) || parsedEdad <= 0) {

      setErrors(prevErrors => [...prevErrors, 'Por favor, ingresa una edad válida.']);
    }

  }

  const handleSubmit = (e) => {
    e.preventDefault();

    validate(input)
    if (error.length === 0) {
      getUserRegistered(input);
      history('/chat')
    } else {
      console.log('todavia hay errores')
      return
    }
  }
  return (
    <div className="flex justify-center items-center min-h-screen bg-zinc-800">
      <form onSubmit={handleSubmit} className="w-full max-w-xs bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold text-center mb-6">Registrarse</h1>
        <div className="mb-4">
          <label htmlFor="nombre" className="block font-semibold mb-2">Nombre</label>
          <input
            type="text"
            id="nombre"
            className="w-full px-3 py-2 rounded-md border-gray-300 focus:outline-none focus:border-indigo-500"
            name='nombre'
            value={input.nombre}
            onChange={handleInputValueChange} />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block font-semibold mb-2">Email</label>
          <input
            type="email"
            id="email"
            className="w-full px-3 py-2 rounded-md border-gray-300 focus:outline-none focus:border-indigo-500"
            name='email'
            value={input.email}
            onChange={handleInputValueChange} />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block font-semibold mb-2">Contraseña</label>
          <input
            type="password"
            id="password"
            className="w-full px-3 py-2 rounded-md border-gray-300 focus:outline-none focus:border-indigo-500"
            name='password'
            value={input.password}
            onChange={handleInputValueChange} />
        </div>
        <div className="mb-4">
          <label htmlFor="confirmPassword" className="block font-semibold mb-2">Confirmar Contraseña</label>
          <input
            type="password"
            id="confirmPassword"
            className="w-full px-3 py-2 rounded-md border-gray-300 focus:outline-none focus:border-indigo-500"
            name='confirmPassword'
            value={input.confirmPassword}
            onChange={handleInputValueChange} />
        </div>
        <div className="mb-4">
          <label htmlFor="edad" className="block font-semibold mb-2">Edad</label>
          <input
            type="number"
            id="edad"
            className="w-full px-3 py-2 rounded-md border-gray-300 focus:outline-none focus:border-indigo-500"
            name='edad'
            value={input.edad}
            onChange={handleInputValueChange} />
        </div>
        {error.length > 0 ? error.map((e) => <p className='text-red-500 font-bold my-2 border border-red-500 p-2'>{`* ${e}`}</p>) : null}
        <button
          type="submit"
          className="w-full bg-indigo-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300"
          onClick={handleSubmit}>
          Registrarse
        </button>
      </form>
    </div>
  );
}



export default connect(null,{ getUserRegistered })(SignupForm)
