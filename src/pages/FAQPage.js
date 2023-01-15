import * as React from 'react';
import { createTheme } from '@mui/material/styles';
import { Box, useTheme } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../theme";
import { faqData } from "../data/Data";
import Header from '../blog/Header';

const sections = [
  { title: 'Technology', url: '#' },
  { title: 'Design', url: '#' },
  { title: 'Culture', url: '#' },
  { title: 'Business', url: '#' },
  { title: 'Politics', url: '#' },
  { title: 'Opinion', url: '#' },
  { title: 'Science', url: '#' },
  { title: 'Health', url: '#' },
  { title: 'Style', url: '#' },
  { title: 'Travel', url: '#' },
];

const mainFeaturedPost = {
  title: 'Stay curious',
  description:
    "Discover stories, thinking, and expertise from writers on any topic.",
  image: 'https://source.unsplash.com/random',
  imageText: 'main image description',
  linkText: 'Start reading',
};

const theme = createTheme();

export default function FAQPage() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    
    return (
      <div>
        <Header sections={sections}/>
        <Box m="20px">
          {faqData.map(item =>{
              return(
                <Accordion defaultExpanded>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                      {item.question}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      {item.answer}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              )
            })
          }
        </Box>
      </div>
    );
}
