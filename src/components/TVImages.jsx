import React from 'react'
import { useEffect } from 'react';

const TVImages = ({data, width, height}) => {
    const [imag,setImag] = React.useState(data.at(0).img);
    const [n,setN] = React.useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
          setImag(data.at(n).img)
          setN((n+1)%data.length)
        }, 2000);
      
        return () => clearInterval(interval);
      }, [n, data]);

    return (
        <div style={{width:width,height:height}}>
            <img src={imag} alt='' className='w-full h-full'/>
        </div>
    )
}

export default TVImages
