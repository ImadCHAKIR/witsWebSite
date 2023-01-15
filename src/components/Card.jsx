import React from 'react'
import { styled } from '@mui/material/styles';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';

const ImageButton = styled(ButtonBase)(({ theme }) => ({
    position: 'relative',
    height: 250,
    [theme.breakpoints.down('sm')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &.Mui-focusVisible': {
      zIndex: 1,
      '& .MuiImageBackdrop-root': {
        opacity: 0.15,
      },
      '& .MuiImageMarked-root': {
        opacity: 0,
      },
      '& .MuiTypography-root': {
        border: '4px solid currentColor',
      },
    },
  }));
  
  const ImageSrc = styled('span')({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  });
  
  const Image = styled('span')({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: "white",
  });
  
  const ImageBackdrop = styled('span')({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: "black",
    opacity: 0.4,
  });
  
  const ImageMarked = styled('span')({
    height: 3,
    width: 18,
    backgroundColor: "white",
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
  });

const Card = (props) => {
  console.log('image here: ' +props.image.img);
  return (    
      <ImageButton
          focusRipple
          key={props.image.title}
          style={{
            width: '33%',
          }}
        >
          <ImageSrc style={{ backgroundImage: `url(${props.image.img})` }} />
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={{
                position: 'relative',
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
              }}
            >
              {props.image.title}
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
      </ImageButton>
  )
}

export default Card
