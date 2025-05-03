import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#0a0f2c] via-[#1a2040] to-[#0a0f2c] text-white text-center px-4">
      <h1 className="text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text mb-6">
        404
      </h1>
      <p className="text-lg text-gray-400 mb-8">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="py-3 px-6 bg-gradient-to-r from-indigo-600 to-blue-950 rounded-lg text-white font-semibold hover:from-indigo-700 hover:to-blue-800 transition"
      >
        Go to Home
      </Link>
    </div>
  );
};

export default NotFound;
