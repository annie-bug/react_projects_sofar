import React from 'react'
import { useState } from 'react'

function game() {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState(true);
    const [winner, setWinner] = useState(null);

    const winningCombinations = [
        [0,1,2], [3,4,5], [6,7,8],
        [0,3,6], [1,4,7], [2,5,8],
        [0,4,8], [2,4,6]
    ];

    const checkWinner = (newBoard)=>{
        for(let combination of winningCombinations){
            const [a,b,c] = combination;
            if(newBoard[a] && newBoard[a] === newBoard[b] && newBoard[a] === newBoard[c]){
                return newBoard[a];
            }
        }
        return null;
    }


    const handleClick = (index)=>{
        if(board[index] || winner) return;

        const newBoard = [...board];
        newBoard[index] = isXNext ? 'X' : 'O';
        setBoard(newBoard);

        const gameWinner = checkWinner(newBoard);
        if(gameWinner){
            setWinner(gameWinner);
        }else{
            setIsXNext(!isXNext);
        }
    }

    const renderSquare = (index)=>(
        <div className='bg-slate-800 border-none rounded-lg flex items-center justify-center h-24 w-24 text-4xl font-bold transition duration-300 hover:bg-gray-700 cursor-pointer' onClick={()=>handleClick(index)}>{board[index]}
        </div>
    )

    const resetGame = ()=>{
        setBoard(Array(9).fill(null));
        setIsXNext(true);
        setWinner(null);
    }

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col justify-center items-center">
            <h1 className="text-5xl text-gray-400 font-semibold mb-6">Tic-Tac-Toe</h1>
            <div className="grid grid-cols-3 gap-3 mb-8">
                {board.map((_, index)=>renderSquare(index))} 
                {/* not using the current state or any of the possible states*/}
            </div>

            {winner ? (
                <div className='text-center'>
                    <p className='text-2xl font-semibold text-gray-500 mb-4'>Player {winner} Wins!</p>
                    <button onClick={resetGame} className='px-6 py-2 bg-slate-500 text-white font-bold rounded-full transition duration-300 hover:bg-slate-600 transform hover:scale-105'>Play Again</button>
                </div>
            ) : (
                <div className='text-xl font-medium text-gray-400'>{isXNext ? "Player X's turn" : "Player O's turn"}</div>
            )}
    </div>
    
  )
}

export default game