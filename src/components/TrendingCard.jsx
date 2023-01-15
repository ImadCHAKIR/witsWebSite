import React from 'react'

const TrendingCard = (props) => {
  return (
    <div className="flex flex-row justify-center" style={{minWidth:"20rem"}}>
        <div className="flex flex-row justify-around"  style={{width:"60%"}}>
            <div className='w-1/3'>
                <span className="text-3xl font-bold opacity-30 text-blue-400">{props.data.id}</span>
            </div>
            <div className=' flex flex-col w-2/3 justify-around'>
                <div className="flex flex-row items-center">
                    <img src={props.data.image} alt="" className='rounded-full h-5 w-5' />
                    <h2 className='px-3 font-semibold'>{props.data.userName}</h2>
                </div>
                <div>
                    <h3 className='font-bold text-xl'>{props.data.title}</h3>
                </div>
                <div>
                    <p className='opacity-60 text-xs'>{props.data.date} . {props.data.readTime}</p>
                </div>
            </div>
        </div>       
    </div>
  )
}

export default TrendingCard