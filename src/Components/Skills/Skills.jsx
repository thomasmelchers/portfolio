import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const Skills = ({ skill, justifyContent }) => {
  return (
    <Grid container justifyContent="flex-start">
      <ChevronRightIcon color="secondary" />
      <Typography color="primary" sx={{fontSize:{xs:'0.7rem', md:'0.9rem', lg:'1rem'}}}> {skill}</Typography>
    </Grid>
  );
};

export default Skills;
