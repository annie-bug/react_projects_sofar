import React, { useState } from 'react'

function mainForm() {

  const [formData, setFormData] = useState({
    naam: '',
    email: '',
    password: '',
    address: '',
    city: '',
    state: '',
    pin: '',
    contact: ''
  });

  const handleChange = (e)=>{
    setFormData({...formData, [e.target.name]: e.target.value});
  };
  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div className='min-h-screen bg-gradient-to-r from-blue-300 to-purple-400 flex justify-center items-center p-4'>
      <div className="bg-gray-200 p-10 rounded-xl shadow-2xl max-w-3xl">
        <h1 className='text-3xl font-serif font-thin text-gray-600 mb-8 text-center'>Rookie Form</h1>


        <form className='space-y-6' onSubmit={handleSubmit}>
        {/* Form starts here */}
        {/* Name */}
        <div className="flex flex-col">
          <label htmlFor="name" className='font-semibold text-gray-700 mb-2'>Name:</label>
          <input type="text" placeholder='Enter your name' className='border border-gray-300 rounded-lg px-4 py-2 shadow-md focus:outline-none focus:ring-1 focus:ring-blue-400 placeholder:font-serif' id='name' name='naam' value={formData.naam} onChange={handleChange}/>
        </div>

        {/* email */}
        <div className="flex flex-col">
          <label htmlFor="email" className='font-semibold text-gray-700 mb-2'>Email:</label>
          <input type="email" name="" id="" placeholder='Enter your email' className='border border-gray-300 rounded-lg py-2 px-4 shadow-md placeholder:font-serif focus:outline-none focus:ring-1 focus:ring-blue-400' id='email' name='email' value={formData.email} onChange={handleChange}/>
        </div>

        {/* Password */}
        <div className="flex flex-col">
          <label htmlFor="password" className='mb-2 font-semibold text-gray-700'>Password:</label>
          <input type="password" placeholder='Enter a password' className='border border-gray-300 rounded-lg px-4 py-2 placeholder:font-serif focus:outline-none focus:ring-1 focus:ring-blue-400 shadow-md' id='password' name='password' value={formData.password} onChange={handleChange}/>
        </div>

        {/* Address */}
        <div className="flex flex-col">
          <label htmlFor="address" className='mb-2 font-semibold text-gray-700'>Address:</label>
          <input type="text" placeholder='Enter your address' className='border border-gray-300 rounded-lg shadow-md px-4 py-2 placeholder:font-serif focus:outline-none focus:ring-1 focus:ring-blue-400' id='address' name='address' value={formData.address} onChange={handleChange}/>
        </div>

        {/* city */}
        <div className="flex flex-col">
          <label htmlFor="city" className='font-semibold mb-2 text-gray-700'>City:</label>
          <input type="text" placeholder='Mention city' className='border border-gray-300 rounded-lg shadow-md px-4 py-2 placeholder:font-serif focus:outline-none focus:ring-1 focus:ring-blue-400' id='city' name='city' value={formData.city} onChange={handleChange}/>
        </div>

        {/* state */}
        <div className="flex flex-col">
          <label htmlFor="state" className='mb-2 font-semibold text-gray-700'>State:</label>
          <input type="text" placeholder='Mention state' className='border border-gray-300 rounded-lg shadow-md px-4 py-2 placeholder:font-serif focus:outline-none focus:ring-1 focus:ring-blue-400' id='state' name='state' value={formData.state} onChange={handleChange}/>
        </div>

        {/* pin code */}
        <div className="flex flex-col">
          <label htmlFor="pin" className='mb-2 font-semibold text-gray-700'>PIN Code:</label>
          <input type="number" placeholder='Mention pin code' className='border border-gray-300 rounded-lg shadow-md px-4 py-2 placeholder:font-serif focus:outline-none focus:ring-1 focus:ring-blue-400' id='pin' name='pin' value={formData.pin} onChange={handleChange}/>
        </div>

        {/* contact details */}
        <div className="flex flex-col">
          <label htmlFor="contact" className='mb-2 font-semibold text-gray-700'>Contact:</label>
          <input type="number" placeholder='Enter contact info' className='border border-gray-300 rounded-lg shadow-md px-4 py-2 placeholder:font-serif focus:outline-none focus:ring-1 focus:ring-blue-400' id='contact' name='contact' value={formData.contact} onChange={handleChange}/>
        </div>

        {/* submit button */}
        <div className="flex justify-center">
          <button type='submit' className='bg-gradient-to-r from-gray-500 to-indigo-300 hover:bg-gradient-to-l text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300 transform hover:scale-105'>Submit</button>
        </div>
        </form>
      </div>
    </div>
  )
}

export default mainForm