import React, { useState } from 'react'

function searchBar() {

    const [query, setQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    const items = [
        'Apple', 'Banana', 'Orange', 'Mango', 'Pineapple', 'Peach', 'Watermelon', 'Grapes', 'Strawberry', 'Blueberry'
    ];

    const handleChange = (e)=>{
        const value = e.target.value;
        setQuery(value);

        if(value){
            const filteredSuggestions = items.filter((item)=>item.toLowerCase().includes(value.toLowerCase()))
            setSuggestions(filteredSuggestions);
        }else{
            setSuggestions([]);
        }
    }
    const handleSuggestionClick = (suggestion)=>{
        setQuery(suggestion);
        setSuggestions([]);
    }
  return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-500 to-slate-800 p-8'>
        <div className="relative w-full max-w-md">
            <input type="text" placeholder='Search for a fruit..' className='w-full border border-gray-300 rounded-lg shadow-xl focus:outline-none focus:ring-2 focus:ring-white py-2 px-4 transition duration-200 placeholder:font-mono font-semibold' value={query} onChange={handleChange}/>

            {/* suggestions dropdown using conditional rendering*/}
            {suggestions.length > 0 && (
                <ul className="absolute top-full mt-2 w-full bg-white border border-gray-400 rounded-lg z-10">
                    {suggestions.map((suggestion, index)=>(
                        <li key={index} className='px-4 py-2 hover:bg-blue-100 cursor-pointer transition duration-200' onClick={()=>{handleSuggestionClick(suggestion)}}>{suggestion}</li>
                    ))}
                </ul>
            )}
        </div>
    </div>
  )
}

export default searchBar