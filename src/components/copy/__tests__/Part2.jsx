import React from 'react';

const Part2 = (props) => {
    
    return (
        <div>
            <div className='border border-black rounded-full w-52 h-52 bg-black'>
                <button className="text-3xl w-fukk h-full font-bold text-center ">
                    <img src={props.img} alt='' className='peer w-full h-full rounded-full hover:opacity-50'/>
                    <p className='-translate-y-32 opacity-0 peer-hover:opacity-100 hover:opacity-100'>{props.title}</p>
                </button>
            </div>
        </div>
        
    );
}

export default Part2