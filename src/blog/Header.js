import * as React from 'react';

import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import owl from '../assets/Images/owl.png' 
import logo from '../assets/Images/logoWITS.png'
import { Avatar,Popover} from '@mui/material'
import { useToken } from '../hooks';

const CheckStatus = () => {
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
        <div className='flex flex-row justify-around w-1/5'>
          <Button variant="outlined" size="small" href='./signup' sx={{color: 'grey'}}>
              Sign up
          </Button>
          <Button variant="contained" size="small" href='./login' sx={{background:'black',":hover":{background:'grey'}}}>
              Login
          </Button>
        </div>  
      );
  }

  return (
    <div className='flex justify-around items-center'>
        <div className='flex flex-row justify-end'>
          <a href="./signout" className=' rounded-xl px-4 py-1 hover:bg-slate-100'>Discover</a>
          {token==='user' && 
            <a href="./signout" className=' rounded-xl px-4 py-1 hover:bg-slate-100'>My articles</a>
          }
          <a href="./signout" className=' rounded-xl px-4 py-1 hover:bg-slate-100 mr-4'>F.A.Q</a>
        </div>
        <Avatar onClick={handleClick}>{token.slice(0,1).toUpperCase()}</Avatar >
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorReference="anchorPosition"
          anchorPosition={{ top: 60, left: 1015 }}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          
        >
          <div className='flex flex-col items-center w-72 h-64 justify-between shadow'>
              <div className='flex flex-col items-center justify-around h-2/3'>
                <Avatar>{token.slice(0,1).toUpperCase()}</Avatar >
                <h1>{token.toUpperCase()}</h1>
                <button className=' border rounded-xl px-4 py-1 hover:bg-slate-100'>Manage your account</button>
              </div>
      
              <div className='border border-solid w-full text-center h-1/3 flex justify-center items-center'>
                <a href="./signout" className=' border rounded-xl px-4 py-1 hover:bg-slate-100'>Sign out</a>
              </div>

              {token==='admin' &&
                <div className='border border-solid w-full text-center h-1/3 flex justify-center items-center'>
                    <a href="./admin" className=' border rounded-xl px-4 py-1 hover:bg-slate-100'>Dashboard</a>         
                </div>
              } 

              <div className='border border-solid w-full text-center h-1/3 flex justify-center items-center'>
                <button className='text-sm' href='#'>Privacy Policy </button>
                <button className='text-sm' href='#'>&ensp; • &ensp;</button>
                <button className='text-sm' href='#'> Terms of Service</button>
              </div>
          </div>
        </Popover>  
    </div>    
  );
}

function Header(props) {
  const {token , setToken} = useToken();
  const { sections, posts } = props;
  const [searchInput, setSearchInput] = React.useState("");
  
  const labelPosts =[]
  posts.data.map(item=>labelPosts.push({"label":item.title}))

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };


  return (
    <React.Fragment>
      <div className='border-b-black flex flex-row items-center border-b-2 justify-between sticky top-0 z-50 bg-white'>
        <div className='flex w-1/6 items-center '>
            <img src={owl} className="w-2/6" alt="logo"/>
            <img src={logo} className="w-3/6" alt="logo"/>
        </div>

        <div className="search-box">
          <Autocomplete
            freeSolo
            loading={posts.loading}
            id="combo-box-demo"
            options={labelPosts}
            sx={{ width: 300}}
            renderInput={(params) => <TextField {...params} label="Article" />}
          />
        </div>
        
        <CheckStatus/>  
      </div>

      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifycontent: 'space-between', overflowX: 'auto' }}
      >
        {sections.map((section) => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            sx={{ p: 1, flexShrink: 0 }}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </React.Fragment>
  );
}

export default Header;
