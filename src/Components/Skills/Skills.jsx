import React from "react";
import { Grid, Typography } from "@mui/material";

import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const frame = {
  borderRadius: '20px',
  backgroundColor: '#FFC900',
  padding: {xs: '7px', md: '15px'},
  paddingRight: {xs: '10px', md: '20px'},
  marginBottom: '10px',
  
}

const Skills = ({ skill }) => {
  return (
    <Grid container justifyContent="flex-start" sx={frame}>
      <ChevronRightIcon sx={{ fontSize:{xs: '15px', md: '25px'} ,color: '#1B467A'}} />
      <Typography sx={{fontSize:{xs:'0.7rem', md:'0.9rem', lg:'1rem'}, color: '#0A1A2E', fontWeight: 600}}> {skill}</Typography>
    </Grid>
  );
};

export default Skills;
