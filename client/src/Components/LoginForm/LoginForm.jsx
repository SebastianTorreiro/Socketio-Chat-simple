import React, { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de inicio de sesión aquí, puedes enviar los datos a un servidor para autenticación
    console.log("Email:", email);
    console.log("Password:", password);
    // Limpia los campos de formulario después del envío
    setEmail("");
    setPassword("");
  };

 
  return (
    <div className="flex justify-center items-center min-h-screen bg-zinc-800">
      <form onSubmit={handleSubmit} className="w-full max-w-xs bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold text-center mb-6">Iniciar sesión</h1>
        <div className="mb-4">
          <label htmlFor="email" className="block font-semibold mb-2">Email</label>
          <input type="email" id="email" className="w-full px-3 py-2 rounded-md border-gray-300 focus:outline-none focus:border-indigo-500" value={email} onChange={handleEmailChange} />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block font-semibold mb-2">Contraseña</label>
          <input type="password" id="password" className="w-full px-3 py-2 rounded-md border-gray-300 focus:outline-none focus:border-indigo-500" value={password} onChange={handlePasswordChange} />
        </div>
        <button type="submit" className="w-full bg-indigo-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300">Iniciar sesión</button>
      </form>
    </div>
  );
}


export default LoginForm;