import React from 'react'

const Cards = () => {
  return (
    <div className='w-full h-screen flex items-center px-32 gap-5'>
        <div className='card-container h-[50vh] w-1/2'>
           <div className='relative card w-full h-full bg-[#004d43] rounded-xl flex justify-center items-center'>
            <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
            <button className='absolute px-5 py-1 border-2 rounded-full left-10 bottom-7'>©️2024</button>
           </div>
        </div>
        <div className='card-container w-1/2 h-[50vh] flex gap-5'>
        <div className='relative card w-1/2 h-full bg-zinc-800 rounded-xl flex justify-center items-center'>
        <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
        <button className='absolute px-3 py-1 border-2 rounded-full left-10 bottom-7'>©️Rating5.0</button>
        </div>
        <div className='relative card w-1/2 h-full bg-zinc-700 rounded-xl flex justify-center items-center'>
            <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
            <button className='absolute px-3 py-1 border-2 rounded-full left-10 bottom-7'>Bootcamp</button>
        </div>
        </div>
    </div>
  )
}

export default Cards