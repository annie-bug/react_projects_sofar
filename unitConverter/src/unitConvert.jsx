import React from 'react'
import { useState } from 'react';

function unitConvert() {
    const [value, setValue] = useState(1);
    const [unitFrom, setUnitFrom] = useState('cm');
    const [unitTo, setUnitTo] = useState('m');
    const [result, setResult] = useState(null);

    const convertUnits = ()=>{
        const numericVal = parseFloat(value);
        if(isNaN(numericVal)){
            setResult("Please enter a valid number")
            return;
        }
        let conversionRate = 1;
        if(unitFrom === 'cm' && unitTo === 'm'){
            conversionRate = 0.01;
        }else if(unitFrom === 'm' && unitTo === 'cm'){
            conversionRate = 100;
        }else if(unitFrom === unitTo){
            conversionRate = 1;
        }
        setResult(numericVal * conversionRate);
    }
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-900'>
        <div className="p-8 bg-gray-800 rounded-lg shadow-md w-full sm:w-96">
            <h2 className='text-2xl font-semibold mb-6 text-center text-gray-100'>Unit Converter</h2>

            {/* input field */}
            <input type="number" className='w-full p-3 mb-4 bg-gray-700 text-gray-300 placeholder-gray-500 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300' placeholder='Enter value' value={value} onChange={(e)=>{setValue(e.target.value)}}/>

            {/* from unit dropdown */}
            <select className='w-full p-3 mb-4 bg-gray-700 text-gray-300 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300' value={unitFrom} onChange={(e)=>setUnitFrom(e.target.value)}>
                <option value="cm">Centimeter (cm)</option>
                <option value="m">Meter (m)</option>
            </select>

            {/* to unit dropdown */}
            <select className='w-full p-3 mb-4 bg-gray-700 text-gray-300 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300' value={unitTo} onChange={(e)=>setUnitTo(e.target.value)}>
                <option value="m">Meter (m)</option>
                <option value="cm">Centimeter (cm)</option>
            </select>

            {/* convert button */}
            <button className='w-full py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 hover:shadow-lg transition-all duration-300 ease-in-out' onClick={convertUnits}>Convert</button>

            {/* result display  using conditional rendering*/}

            {result !== null && (
                <div className='mt-6 text-center'>
                    <p className='text-xl font-semibold text-gray-100'>Result: <span className='text-indigo-400'>{result}</span></p>
                </div>
            )}
        </div>
    </div>
  )
}

export default unitConvert