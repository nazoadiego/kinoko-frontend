import React from 'react'
const BasicUsage = () => {
  return (
    <>
    <div className="text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Basic Usage</h2>
          <p className="mt-2 mb-8 sm:mb-4 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              Basic Usage
          </p>
    </div>

    <div className='flex flex-col md:flex-row gap-[2rem] justify-center items-center flex-wrap mt-[3rem] mb-[5rem]'>
        <div className='flex flex-col justify-center items-center '>
            <div className='bg-white w-24 h-24 rounded-xl relative gap-10'></div>
            <p className="text-white mt-3">Create new task</p>
        </div>
        <div className='border-t-0 md:border-r-0 md:min-h-[3rem] min-h-[6rem] min-w-0 md:h-0 md:min-w-[7rem] border-r-[6px] md:border-t-[6px] border-dotted border-[#8c4af2]'></div>
        <div className='flex flex-col justify-center items-center '>
            <div className='bg-white w-24 h-24 rounded-xl relative gap-10'></div>
            <p className="text-white mt-3">Set the duration</p>
        </div>
        <div className='border-t-0 md:border-r-0 md:min-h-[3rem] min-h-[6rem] min-w-0 md:h-0 md:min-w-[7rem] border-r-[6px] md:border-t-[6px]  border-dotted border-[#8c4af2]'></div>
        <div className='flex flex-col justify-center items-center '>
            <div className='bg-white w-24 h-24 rounded-xl relative gap-10'></div>
            <p className="text-white mt-3">Start timeboxing</p>
        </div>
    </div>
    </>
  )
}

export default BasicUsage


//na dużym ekranie
//   height:0;
//  min-width:7rem;
//  border-top:5px dotted #8c4af2;

// na małym ekraniku
//   border-top:0;
//  border-right:5px dotted #8c4af2;
//    min-height:6rem;
//    min-width:0;

