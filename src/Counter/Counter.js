import React from 'react'
import { useState } from 'react'
// import "./style.css"
export const Counter = () => {
    const [count, Setcount] = useState(0)
  return (
    <div className='mt-40'>
        <h1 className='text-white text-2xl'>Counter Value is {count}</h1>
        <div>
        <button className='w-24 h-10 bg-orange-400 ml-4 mt-4 rounded-lg text-lg' onClick={() => Setcount(count +1)}>Increase +</button>
        <button className='w-24 h-10 bg-orange-400 ml-4 mt-4 rounded-lg text-lg' onClick={() => Setcount(count - 1)}>Decrease -</button>
        <button className='w-24 h-10 bg-orange-400 ml-4 mt-4 rounded-lg text-lg' onClick={() => Setcount(0)}>Reset</button>
        </div>
        
    </div>
  )
}
