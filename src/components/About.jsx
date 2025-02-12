import React from 'react'

const About = () => {
  return (
    <div className='w-full p-20 bg-[#CDEA68] rounded-tl-3xl text-black'>
        <h1 className='font-"Neue_Montreal" leading-[5vw] text-6xl p-20 tracking-tight'>Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell prodducts, exxplain complex ideas, and hire great people.</h1>
        <div className='flex gap-5 w-full border-t-[1px] border-[#a1b562] mt-20'>
            <div className='w-1/2 '>
                <h1 className='text-6xl pt-10'>Our approch:</h1>
                <button className='uppercase flex gap-10 items-center px-10 py-6 rounded-full mt-10 text-white bg-zinc-900 hover:bg-gray-400 hover:text-white'>Read More
                <div className='w-3 h-3 bg-zinc-100 rounded-full'></div>
                </button>
            </div>
            <div className='w-1/2 h-[70vh] rounded-3xl bg-cover bg-center mt-10'>
                <img src='https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg'></img>
            </div>
        </div>
    </div>
  )
}

export default About