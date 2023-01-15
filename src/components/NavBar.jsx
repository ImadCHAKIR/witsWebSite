import React from 'react'
import { useToken } from '../hooks';

import { Avatar,Popover,Button} from '@mui/material'

import owl from '../assets/Images/owl.png' 
import logo from '../assets/Images/logoWITS.png'

const NavBar = (props) => {
    const {token , setToken} = useToken();
    const [searchInput, setSearchInput] = React.useState("");

    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    };
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    if(!token){
        return (
            <div className='border-b-black flex flex-row items-center border-b-2 justify-between sticky top-0 z-50 bg-white'>
                <div className='flex w-1/6 items-center '>
                    <img src={owl} className="w-2/6" alt="logo"/>
                    <img src={logo} className="w-3/6" alt="logo"/>
                </div>

                <div className="search-box">
                <input
                type="search"
                placeholder="Search ... "
                onChange={handleChange}
                value={searchInput} 
                className=' w-96'/>
                </div>

                <div className='flex flex-row justify-around w-1/5'>
                <Button variant="outlined" size="small" href='./signup' sx={{color: 'grey',borderBlockColor:'grey'}}>
                    Sign up
                </Button>
                <Button variant="contained" size="small" href='./login' sx={{backgroundColor: 'grey',}}>
                    Login
                </Button>
                </div>  
            </div>
            
        );
    }

    return (
        <div className='border-b-black flex flex-row items-center border-b-2 justify-between sticky top-0 z-50 bg-white'>
            <div className='flex w-1/6 items-center '>
                <img src={owl} className="w-2/6" alt="logo"/>
                <img src={logo} className="w-3/6" alt="logo"/>
            </div>

            <div className="search-box">
            <input
            type="search"
            placeholder="Search ... "
            onChange={handleChange}
            value={searchInput} 
            className=' w-96'/>
            </div>

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
        </div>
    );
}

export default NavBar