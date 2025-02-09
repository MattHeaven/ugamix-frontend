import React from 'react';
import { Link } from "react-router-dom";


function NotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center bg-black text-white">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="text-lg text-gray-400 mt-4">Oops! The page you’re looking for doesn’t exist.</p>
      <Link to="/" className="mt-6 px-6 py-2 bg-[#ffe67b] text-black rounded-lg hover:bg-gray-700">
        Go Home
      </Link>
    </div>
  )
}

export default NotFound