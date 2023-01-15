import React from 'react'
import { Button } from '@mui/material'

const Footer = () => {
  return (
    <div className='bg-gray-100 px-14 py-8 shadow-lg drop-shadow-md'>
        <div className='flex flex-wrap px-60 justify-around opacity-50'>
            <Button variant="label">Help</Button>
            <Button variant="label">Blog</Button>
            <Button variant="label">Careers</Button>
            <Button variant="label">Privacy</Button>
            <Button variant="label">Terms</Button>
            <Button variant="label">About</Button>
        </div>
    </div>
  )
}

export default Footer