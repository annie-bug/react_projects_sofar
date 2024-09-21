import React from 'react'
import { useState } from 'react';

function tipCalc() {
    const [bill, setBill] = useState('');
    const [tipPercentage, setTipPercentage] = useState(15);
    const [people, setPeople] = useState(1);
    const [tipAmount, setTipAmount] = useState(0);
    const [totalPerPerson, setTotalPerPerson] = useState(0);

    const calculateTip = ()=>{
        const billAmount = parseFloat(bill);
        const numPeople = parseInt(people);

        if(isNaN(billAmount) || isNaN(numPeople) || numPeople<=0){
            return;
        }

        const tip = (billAmount *(tipPercentage/100));
        const total = billAmount + tip;
        setTipAmount(tip.toFixed(2));
        setTotalPerPerson((total/numPeople).toFixed(2));
    };
  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-900 p-4'>
        <div className="bg-gray-800 text-white p-8 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-3xl font-semibold text-center mb-6 text-indigo-400">Tip Calculator</h2>

            {/* Bill Input */}
            <div className="mb-4">
                <label className="block mb-2 text-gray-400">Bill Amount</label>
                <input type="number" className='w-full p-3 bg-gray-700 text-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition duration-200' placeholder='Enter bill amount' value={bill} onChange={(e)=>{setBill(e.target.value)}}/>
            </div>

            {/* Tip Percentage */}
            <div className="mb-4">
                <label className="block mb-2 text-gray-400">Tip Percentage</label>
                <input type="range" className='w-full' min='0' max='100' onChange={(e)=>{setTipPercentage(e.target.value)}}/>
                <p className='text-center mt-2 text-indigo-400 text-lg'>{tipPercentage}%</p>
            </div>

            {/* Number of People */}
            <div className="mb-6">
                <label className="block mb-2 text-gray-400">Number of People</label>
                <input type="number" placeholder='Enter number of perople' className='w-full p-3 bg-gray-700 text-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition duration-200' value={people} onChange={(e)=>{setPeople(e.target.value)}}/>
            </div>

            {/* Calculate Button */}
            <button className='w-full bg-indigo-600 hover:bg-indigo-700 text-white p-3 rounded-lg shadow-md transition-all duration-300 ease-in-out transform hover:scale-105' onClick={calculateTip}>Calculate Tip</button>

            {/* Display results */}
            <div className="mt-6 text-center">
                <p className="text-xl text-gray-300">Tip Amount: <span className='text-indigo-400'>{tipAmount}</span></p>
                <p className="text-xl text-gray-300 mt-2">Total per person: <span className='text-indigo-400'>{totalPerPerson}</span></p>
            </div>
        </div>
    </div>
  )
}

export default tipCalc