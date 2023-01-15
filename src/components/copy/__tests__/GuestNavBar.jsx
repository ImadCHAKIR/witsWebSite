import React from 'react'
import { Button,Popover} from '@mui/material'
import { ThemeProvider } from '@mui/material/styles';
import Login from '../../pages/Login';

const GuestNavBar = (props) => {
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
            <div className='flex justify-center w-1/6 items-center'>
                <img src={props.img} className="w-2/6" alt="logo"/>
            </div>
            <ul className='flex flex-row justify-around w-3/6 items-center'>
                <li className='border-black border-solid hover:border-b'>Home</li>
                <li className='border-black border-solid hover:border-b'>About</li>
                <li className='border-black border-solid hover:border-b'>Roadmap</li>
                <li className='border-black border-solid hover:border-b'>ShowCase</li>
                <li className='border-black border-solid hover:border-b'>Team</li>
                <li className='border-black border-solid hover:border-b'>FAQ</li>
            </ul>
            <div className='flex justify-around items-center w-1/6'>
                <ThemeProvider theme={props.theme}>
                    <Button onClick={handleClick} variant="contained" color='primary' style={{color:'white'}} href='/login'>Log in</Button>
                    {/* <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                    >
                    <div className='flex flex-col items-center w-72 h-64 justify-between bg-gray-100'>
                        <Login/>
                    </div>
                    </Popover> */}
                    <Button variant="outlined" color='primary' href='./signup'>Sign up</Button>
                </ThemeProvider>
            </div>
        </section>
  )
}

export default GuestNavBar