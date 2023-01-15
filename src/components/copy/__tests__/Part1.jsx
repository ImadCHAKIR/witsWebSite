import React from 'react';

const Part1 = (props) => {
    
    return (
        <div className='border border-black rounded-t-3xl w-72 h-96 m-5 '>
            <img src={props.img} alt='' className='w-full rounded-t-3xl h-2/5'/>
            <div className='flex flex-col justify-between h-3/5'>
                <div className='flex flex-col'>
                    <h className="text-3xl font-bold m-2 text-center">{props.title}</h>
                    <p className='text-1xl text-justify m-2'>&emsp;&emsp;{props.text}</p>
                </div>
                <div className='flex justify-end'>
                    <button href='#' className='bg-gray-500 hover:bg-slate-800 rounded-3xl w-1/3 mb-3 mr-3 font-bold text-white h-4/6'>Button</button>
                </div>
            </div>
        </div>
    );
}

export default Part1