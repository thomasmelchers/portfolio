import React from 'react'
import { Grid, Typography } from "@mui/material"

import Technologies from "../Shared/Technologies/Technologies";

import { personnalProjectsData } from "../../Data/Data" 


const PrivateExperience = () => {

    const { role, tasks, period, intro, description, technologies } = personnalProjectsData[0]

  return (

    <Grid container justifyContent="center">
      <Grid item xs={10}>
        <Typography
          color="primary"
          sx={{
            textTransform: "uppercase",
            fontSize: "1.5rem",
            fontWeight: "600",
          }}
        >
          Private Projects
        </Typography>
        <Typography
          mt={1}
          color="primary"
          sx={{ fontSize: "1.5rem", fontWeight: 500 }}
        >
          {role}
        </Typography>
        <Typography color="primary" fontWeight={500}>
          {tasks}
        </Typography>
        <Typography color="secondary">{period}</Typography>
        <Typography
          mt={3}
          color="primary"
          sx={{ fontSize: "1rem", textAlign: "justify" }}
        >
          {intro}
        </Typography>
        {description.map((desc, index) => (
          <Typography
            key={index}
            color="primary"
            sx={{ fontSize: "1rem", textAlign: "justify", mt: 1 }}
          >
            {desc}
          </Typography>
        ))}
      </Grid>
      <Grid item xs={10} mt={3}>
        <Technologies technologies={technologies} />
      </Grid>
    </Grid>
    
  );
}

export default PrivateExperience