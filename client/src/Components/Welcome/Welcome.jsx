import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-zinc-800">
      <h1 className="text-5xl font-bold text-white mb-8">Bienvenido a nuestra página</h1>
      <p className="text-xl text-white text-center mb-8">Aquí encontrarás información interesante y útil sobre diversos temas.</p>
      <div className="flex gap-4">
        <Link to="/signup" className="bg-indigo-500 text-white font-semibold py-3 px-6 rounded-md hover:bg-indigo-600 transition duration-300 text-lg">Sing up </Link>
        <Link to="/login" className="bg-indigo-500 text-white font-semibold py-3 px-6 rounded-md hover:bg-indigo-600 transition duration-300 text-lg">Log in </Link>
      </div>
    </div>
  );
};

export default Welcome;
