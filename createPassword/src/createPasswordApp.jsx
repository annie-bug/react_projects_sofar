import React from 'react'
import { useRef } from 'react';
import { useCallback } from 'react';
import { useState } from 'react'

function createPasswordApp() {
    const [length, setLength] = useState(6);
    const [numbersAllowed, setNumbersAllowed] = useState(false);
    const [charAllowed, setCharAllowed] = useState(false);
    const [password, setPassword] = useState('');

    const passwordRef = useRef(null);

    const generatePass = useCallback(()=>{
        let pass = "";
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        if(numbersAllowed){
            str += '1234567890';
        }
        if(charAllowed){
            str += '!@#$%^&*()-_+=[]{}`~';
        }
        for(let i = 0; i<length; i++){
            let char = Math.floor(Math.random()*str.length+1)
            pass += str.charAt(char);
        }
        setPassword(pass);
    }, [length, numbersAllowed, charAllowed, setPassword])

    const copyToClipBoard = useCallback(()=>{
        passwordRef.current?.select()
        passwordRef.current?.setSelectionRange(0, 101);
        window.navigator.clipboard.writeText(password)
      }, [password])
  return (
    <>
    <div className='min-h-screen flex flex-col justify-center items-center bg-gray-100 p-4'>
        <div className='bg-white p-6 rounded-lg shadow-lg w-full max-w-md'>
            <h1 className='text-2xl font-bold mb-4 text-center'>Password Generator</h1>

            <div className='mb-4'>
                <input type="text" 
                readOnly
                className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                placeholder='Generated password'
                value={password}
                ref={passwordRef}/>
            </div>

            <div className='mb-4 flex justify-between items-center'>
                <button className='bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition'
                onClick={copyToClipBoard}>Copy Password</button>
                <button className='bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition'
                onClick={generatePass}>Generate Password</button>
            </div>

            <div className='mb-4'>
                <label className='block text-sm font-medium mb-1'>Passwoed Length: {length}</label>
                <input type="range" 
                className='w-full cursor-pointer'
                min={6}
                max={20}
                value={length}
                onChange={(e)=>{setLength(e.target.value)}}/>
            </div>

            <div className='mb-4 flex items-center'>
                <input type="checkbox" 
                className='mr-2'
                defaultChecked={numbersAllowed}
                onChange={()=>{setNumbersAllowed((prev)=>!prev)}}/>
                <label className='text-sm'>Include Numbers</label>
            </div>

            <div className='mb-4 flex items-center'>
                <input type="checkbox" 
                className='mr-2'
                defaultChecked={charAllowed}
                onChange={()=>{setCharAllowed((prev)=>!prev)}}/>
                <label className='text-sm'>Include Special Characters</label>
            </div>
        </div>
    </div>
    </>
  )
}

export default createPasswordApp