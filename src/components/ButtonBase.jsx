import * as React from 'react';
import Card from './Card';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { ThemeProvider } from '@mui/material/styles';

const ButtonBases= (props) =>{
  const slideLeft = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - slider.children[0].clientWidth;
  };

  const slideRight = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + slider.children[0].clientWidth;
  };
  
  return (
    <div className='flex justify-between' style={{height:250}}>
      <ThemeProvider theme={props.theme}>
        <IconButton 
            color="secondary" 
            component="label"
            sx={{
              bgcolor: props.theme.palette.foor.main,
              borderRadius: 0, 
            }}
            onClick={slideLeft} 
            className='absolute z-20 opacity-30'
          >
          <ArrowBackIosIcon className='cursor-pointer' fontSize='large'/>
        </IconButton>

        <div
          id='slider'
          className='absolute w-screen h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide'
        >
          {props.data.map((item) => (
            <Card image={item} key={item.id}/>
          ))}
        </div>
        
        <IconButton 
          color="secondary" 
          component="label"
          sx={{
            bgcolor: props.theme.palette.foor.main,
            borderRadius: 0,
          }}
          onClick={slideRight}
          className='absolute z-20 opacity-30'
        >
          <ArrowForwardIosIcon className='cursor-pointer' fontSize='large'/>
        </IconButton>
      </ThemeProvider>
    </div>
    

    // <Box sx={{ display: 'flex', minWidth: 300, width: '100%' }}>
    //   <ThemeProvider theme={props.theme}>
    //     <IconButton 
    //       color="black" 
    //       component="label"
    //       sx={{
    //         bgcolor: props.theme.palette.secondary.main,
    //         borderRadius: 0,
    //       }}
    //     >
    //       <ArrowBackIosNewIcon />
    //     </IconButton>
        
    //     <div className='flex flex-row absolute overflow-x-scroll' style={{ width: '150%' }}>
    //       {props.data.map((image) => (
    //         <Card image={image}/>
    //       ))}
    //     </div>
        

    //     <IconButton 
    //       color="black" 
    //       component="label"
    //       sx={{
    //         bgcolor: props.theme.palette.secondary.main,
    //         borderRadius: 0,
    //       }}
    //     >
    //       <ArrowForwardIosIcon />
    //     </IconButton>
    //   </ThemeProvider>
    // </Box>
  );
}

// function LeftArrow() {
//   const { isFirstItemVisible, scrollPrev } =
//     React.useContext(VisibilityContext);

//   return (
//     <div disabled={isFirstItemVisible} onClick={() => scrollPrev()}>
//       Left
//     </div>
//   );
// }

// function RightArrow() {
//   const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext);

//   return (
//     <div disabled={isLastItemVisible} onClick={() => scrollNext()}>
//       Right
//     </div>
//   );
// }

export default ButtonBases