import React, { useState } from "react";
import axios from 'axios';

const LoginForm = () => {

  const API = process.env.REACT_APP_API



  const [input, setInput] = useState({
    email: '',
    password: '',
  })


  const handleInputChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(input)
    // Lógica de inicio de sesión aquí, puedes enviar los datos a un servidor para autenticación
  //  const loginauthentication = await axios.post(API + '/', input)

    // Limpia los campos de formulario después del envío
    

  };


  return (
    <div className="flex justify-center items-center min-h-screen bg-zinc-800">
      <form onSubmit={handleSubmit} className="w-full max-w-xs bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold text-center mb-6">Iniciar sesión</h1>
        <div className="mb-4">
          <label htmlFor="email" className="block font-semibold mb-2" >Email</label>
          <input
            type="email"
            id="email"
            className="w-full px-3 py-2 rounded-md border-gray-300 focus:outline-none focus:border-indigo-500"
            name='email'
            value={input.email}
            onChange={handleInputChange} />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block font-semibold mb-2"  >Contraseña</label>
          <input
            type="password"
            id="password"
            className="w-full px-3 py-2 rounded-md border-gray-300 focus:outline-none focus:border-indigo-500"
            name='password'
            value={input.password}
            onChange={handleInputChange} />
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300">
          Iniciar sesión
        </button>
      </form>
    </div>
  );
}


export default LoginForm;