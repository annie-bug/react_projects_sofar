import React, { useEffect, useState } from 'react'

function timer() {

    const [time, setTime] = useState(30 * 60);
    const [isActive, setIsActive] = useState(false);
    const [isBreak, setIsBreak] = useState(false);

    const formatTime = (seconds)=>{
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes < 10 ? '0' : ''}${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    };

    useEffect(()=>{
        let timer = null;
        if(isActive && time>0){
            timer = setTimeout(()=>{
                setTime((prevTime)=>prevTime - 1);
            }, 1000);
        }else if(time === 0 && isActive){
            setIsActive(false);
            if(!isBreak){
                setTime(5 * 60);
                setIsBreak(true);
            }
            else{
                setTime(30 * 60);
                setIsBreak(false);
            }
        }
        return ()=> clearTimeout(timer);
    }, [time, isActive, isBreak]);

    const startTimer = ()=>setIsActive(true)
    const pauseTimer = ()=>setIsActive(false);
    const resetTimer = ()=>{
        setIsActive(false);
        setTime(isBreak ? 5 * 60 : 30 * 60);
    }

  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gray-900'>
        <h1 className='text-4xl font-bold text-white mb-8 font-mono'>{isBreak ? 'Break Time' : 'Work Time'}</h1>

        <div className='mb-8'>
            <div className='text-6xl font-mono text-green-400 led-text'>
                {formatTime(time)}
            </div>
        </div>

        <div className='flex space-x-4'>
            {!isActive && (<button className='px-4 py-2 bg-green-500 text-white rounded-lg font-mono transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-900' onClick={startTimer}>Start</button>)}
            
        
            {isActive && (<button className='px-4 py-2 bg-yellow-500 text-white rounded-lg font-mono transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-yellow-900' onClick={pauseTimer}>Pause</button>)}
            

            {/* reset button */}
            <button className='px-4 py-2 bg-red-500 text-white rounded-lg font-mono transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-900' onClick={resetTimer}>Reset</button>
        </div>
    </div>
  )
}

export default timer