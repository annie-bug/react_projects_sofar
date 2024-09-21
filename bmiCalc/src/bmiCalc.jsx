import React from 'react'
import { useState } from 'react'

function bmiCalc() {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [message, setMessage] = useState('');
    const [bmi, setBMI] = useState(null);

    const getBMI = ()=>{
        if(weight && height){
            const bmiVal = (weight / (height * height)).toFixed(2);
            setBMI(bmiVal);

            if(bmiVal < 18.5){
                setMessage("Underweight");
            }
            else if(bmiVal >= 18.5 && bmiVal <= 24.9){
                setMessage("Normal weight");
            }else{
                setMessage("Overweight");
            }
        }
    };
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-900'>
        <div className="p-8 bg-gray-800 rounded-lg shadow-mg w-80 sm:w-96">
            <h2 className="text-2xl font-semibold mb-6 text-center text-gray-100">BMI Calculator</h2>

            {/* Input Fields */}
            <input type="number" className='w-full p-3 mb-4 bg-gray-700 text-gray-300 placeholder-gray-500 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500' placeholder='Weight (kg)' value={weight} onChange={(e)=>setWeight(e.target.value)}/>

            <input type="number" className='w-full p-3 mb-4 bg-gray-700 text-gray-300 placeholder-gray-500 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500' placeholder='Height (m)' value={height} onChange={(e)=>setHeight(e.target.value)}/>

            {/* Calculate Button */}
            <button className='w-full py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition duration-300' onClick={getBMI}>Calculate BMI</button>

            {/* Message section & Display BMI*/}
            {/* Condtional rendering */}
            {bmi && (
                <div className='mt-6 text-center'>
                    <p className='text-xl font-semibold text-gray-100'>Your BMI: <span className='text-indigo-400'>{bmi}</span></p>
                    <p
                        className={`text-lg mt-2 ${
                            message === 'Underweight' ? 'text-yellow-400' : message === 'Normal weight' ? 'text-green-400' : 'text-red-400'
                        }`}>{message}</p>
                </div>
            )}
        </div>
    </div>
  )
}

export default bmiCalc