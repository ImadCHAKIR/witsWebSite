import React from 'react'
import { Button} from '@mui/material'
import { ThemeProvider } from '@mui/material/styles';
import TVImages from './TVImages'


const Intro = (props) => {
  return (
    <div className='h-96 shadow-lg bg-gray-100 flex flex-row'>
        <div className="w-1/2 flex flex-col items-center justify-around">
          <div className="items-center mx-10">
            <h1 className=' font-extrabold text-5xl'>Never stop learning because life never stops teaching</h1>
            <div className='flex items-center mt-6 mx-5'>
                <button className="rounded-full bg-slate-600 px-5 py-2 text-white font-bold hover:bg-slate-800">Start reading</button>
            </div>
          </div>
        </div>
        <div className="w-1/2 flex items-center justify-around">
          <TVImages data={props.data} width={'20rem'} height={'20rem'} />
        </div>
        

    </div>
  )
}



export default Intro