import React, { useState } from 'react';
import { SendPasswordResetEmail } from '../Firebase/Authentication/auth';

const AdminForgetPassword = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async(e) => {
    e.preventDefault();
     const res = await SendPasswordResetEmail({email});
    if(res){
      alert("❌ Invalid Email Address");
    }else{
      alert("✅ Password Reset Link Sent to Your Email Address");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0a0f2c] via-[#1a2040] to-[#0a0f2c] text-white">
      <div className="bg-gradient-to-br from-[#101736] to-[#1a2040] p-8 rounded-2xl shadow-2xl w-full max-w-md backdrop-blur-md border border-indigo-800">
        <h2 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-600 mb-6">
          Forgot Password
        </h2>
        <p className="text-sm text-gray-400 text-center mb-6">
          Enter your email to receive a password reset link
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full p-3 bg-[#1e2546] border border-[#3f4c77] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-purple-700 via-indigo-800 to-blue-950 text-white font-semibold rounded-lg hover:from-purple-800 hover:to-indigo-900 transition-all duration-300"
          >
            Send Reset Link
          </button>
        </form>
        <p className="mt-6 text-center text-gray-400">
          <a href="/admin" className="text-indigo-400 hover:text-indigo-300 transition">
            Back to Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default AdminForgetPassword;
