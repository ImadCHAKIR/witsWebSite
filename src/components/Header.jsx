import React, { useState } from 'react';
import NavBar from './NavBar';
// import IconButton from '@mui/material/IconButton';
// import SearchIcon from '@mui/icons-material/Search';
// import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
// import GuestNavBar from './__tests__/GuestNavBar';
// import UserNavBar from './__tests__/UserNavBar';
// import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
// import { ThemeProvider } from '@mui/material/styles';

export default function Header(props) {
  const { sections } = props;
  
  return (
    <React.Fragment>
        <NavBar/>
        <Toolbar
            component="nav"
            variant="dense"
            sx={{ justifyContent: 'space-between', overflowX: 'auto' }}
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