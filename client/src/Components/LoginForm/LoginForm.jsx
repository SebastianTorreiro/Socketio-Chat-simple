import React, { useState } from "react";
import axios from 'axios';
import { getUserLogin } from '../../Actions/actions'
import { connect } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom'


function LoginForm({ getUserLogin }) {


  const [input, setInput] = useState({
    email: '',
    password: '',
  })
  const history = useNavigate()
  const [error, setError] = useState(null)

  const handleInputChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    // setError(null)
    e.preventDefault();
    // console.log(input)
    // Lógica de inicio de sesión aquí, puedes enviar los datos a un servidor para autenticación
    try {
      const esto = await getUserLogin(input)
      history('/chat')
    } catch (error) {
      setError(error.response.data.error)
    }



  };


  return (
    <div className="flex justify-center items-center min-h-screen bg-zinc-800">
      <form onSubmit={handleSubmit} className="w-full max-w-xs bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold text-center mb-6">Iniciar sesión</h1>
        <div className="mb-4">
          <label htmlFor="email" className="block font-semibold mb-2" >Email</label>
          <input
            autoComplete={"off"}
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
            autoComplete={"off"}
            type="password"
            id="password"
            className="w-full px-3 py-2 rounded-md border-gray-300 focus:outline-none focus:border-indigo-500"
            name='password'
            value={input.password}
            onChange={handleInputChange} />
        </div>

        {error ? <p className='text-red-500 font-bold my-2 border border-red-500 p-2'>{`* ${error}`}</p> : null}
        <button
          type="submit"
          className="w-full bg-indigo-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300">
          Iniciar sesión
        </button>
        <p className="text-sm text-gray-500 mt-4 ml-4">¿No tienes una cuenta? <Link to="/signup" className="text-indigo-500 hover:text-indigo-600">Regístrate</Link></p>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {}
}

export default connect(mapStateToProps, { getUserLogin })(LoginForm)
