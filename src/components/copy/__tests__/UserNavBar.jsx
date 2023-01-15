import React from 'react'
import { Avatar,Popover,Button} from '@mui/material'
import { ThemeProvider } from '@mui/material/styles';
import { useToken } from '../../hooks';
import BarMenu from './BarMenu' 

const UserNavBar = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <section className='flex flex-row justify-between h-16 shadow-lg drop-shadow-md'>
            <div className='flex justify-between w-1/6 items-center '>
                <BarMenu/>
                <img src={props.img} className="w-2/6" alt="logo"/>
            </div>
            <ul className='flex flex-row justify-around w-3/6 items-center'>
                <li className='border-black border-solid hover:border-b cursor-pointer'>Home</li>
                <li className='border-black border-solid hover:border-b cursor-pointer'>About</li>
                <li className='border-black border-solid hover:border-b cursor-pointer'>Roadmap</li>
                <li className='border-black border-solid hover:border-b cursor-pointer'>ShowCase</li>
                <li className='border-black border-solid hover:border-b cursor-pointer'>Team</li>
                <li className='border-black border-solid hover:border-b cursor-pointer'>FAQ</li>
            </ul>
            <div className='flex justify-around items-center w-1/6'>
                <Avatar onClick={handleClick}>U</Avatar >
                <Popover
                  id={id}
                  open={open}
                  anchorEl={anchorEl}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                >
                  <div className='flex flex-col items-center w-72 h-64 justify-between bg-gray-100'>
                      <div className='flex flex-col items-center justify-around h-2/3'>
                        <Avatar>U</Avatar >
                        <h1>Admin</h1>
                        <h1>Admin@gmail.com</h1>
                        <Button variant='outlined'>Manage your account</Button>
                      </div>
              
                      <div className='border border-solid w-full text-center h-1/3'>
                        <Button href="./signout">Sign out</Button>
                        <h1 className='h-1/2'>Privacy Policy • Terms of Service</h1>
                      </div>
                  </div>
                </Popover>
            </div>
        </section>
  )
}

export default UserNavBar

