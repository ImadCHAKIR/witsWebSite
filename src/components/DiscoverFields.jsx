import React from 'react'
import { Button } from '@mui/material'

const DiscoverFields = (props) => {
  return (
    <div className='bg-gray-100 px-14 py-8 shadow-lg drop-shadow-md'>
        <div className='flex flex-col'>
            <div className='flex flex-crow'>
                <h1 className='px-5 font-semibold'>DISCOVER MORE OF WHAT MATTERS TO YOU</h1>
            </div>
            <div className='flex flex-wrap px-3 py-2 justify-around'>
                {props.fields.map((item,index)=>{
                    return <Button variant="outlined" key={index}>{item}</Button>
                })}
            </div>
        </div>
        
    </div>
  )
}

export default DiscoverFields