import * as React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

function Sidebar(props) {
  const { archives, description, social, title } = props;

  return (
    
    <Grid item xs={12} md={4}>
      <Paper elevation={0} sx={{ p: 2, bgcolor: 'grey.200' }}>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography>{description}</Typography>
      </Paper>
      <div className='flex flex-row justify-between items-center mb-10 text-center mt-16'>
            <div className='w-1/12 border-t-2 border-black border-solid ml-1 mr-5'></div>
            <p >DISCOVER MORE OF WHAT MATTERS TO YOU</p>
            <div className='w-1/12 border-t-2 border-black border-solid ml-5 mr-1'></div>
      </div>
      <div className='flex flex-row w-full justify-between flex-wrap'>
        {archives.map((archive) => (
          <Link display="block" variant="body1" href={archive.url} key={archive.title} sx={{margin:'5px'}}>
            {archive.title}
          </Link>
        ))}
      </div>
      

      <div className='flex flex-row justify-between items-center mb-10 text-center mt-16'>
            <div className='w-4/12 border-t-2 border-black border-solid ml-1 mr-5'></div>
            <p >Social</p>
            <div className='w-4/12 border-t-2 border-black border-solid ml-5 mr-1'></div>
      </div>
      <div className='flex flex-row w-full justify-between'>
        {social.map((network) => (
          <Link
            display="block"
            variant="body1"
            href="#"
            key={network.name}
          >
            <Stack direction="row" spacing={1} alignItems="center">
              <network.icon />
              <span>{network.name}</span>
            </Stack>
          </Link>
        ))}
      </div>
    </Grid>
    
  );
}

Sidebar.propTypes = {
  archives: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
  social: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.elementType.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default Sidebar;
