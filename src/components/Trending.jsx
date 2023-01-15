import React from 'react'
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingCard from './TrendingCard'

const Trending = (props) => {
  return (
    <div className='bg-gray-100 px-14 py-8 shadow-lg drop-shadow-md'>
        <div className='flex flex-col'>
            <div className='flex flex-crow'>
                <TrendingUpIcon/>
                <h1 className='px-5 font-semibold'>TRENDING ON WITS</h1>
            </div>
            <div className='flex flex-wrap px-3 py-2 justify-around'>
                {props.trending.map((item)=>{
                    return <TrendingCard data={item} key={item.id}/> 
                })}
            </div>
        </div>
        
    </div>
  )
}

export default Trending