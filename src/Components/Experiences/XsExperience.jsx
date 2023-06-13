import React from 'react'
import { Grid, Typography } from "@mui/material";

import Technologies from '../Shared/Technologies/Technologies';

const XsExperience = ({experience}) => {

    const { title, location, period, description, position, logo, url, technologies } =
    experience;
    
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        textDecoration: "none",
        borderRadius: "10px",
        backgroundColor: "#1B467A",
        margin: "1rem",
        padding: "2rem 1rem",
        cursor: "pointer",
      }}
    >
      <Grid container justifyContent="center">
        <Grid
          container
          item
          xs={12}
          justifyContent="center"
          alignItems="center"
          sx={{ height: "auto", marginBottom: "1.5rem" }}
        >
          <img src={logo} alt={title} width={"225px"} height={"auto"} />
        </Grid>

        <Grid item xs={10} flexDirection="column" justifyContent="center">
          <Typography
            color="primary"
            sx={{
              textTransform: "uppercase",
              fontSize: "1.5rem",
              fontWeight: "600",
            }}
          >
            {title}
          </Typography>
          <Typography
            color="primary"
            sx={{ fontSize: "1.5rem", fontWeight: 500 }}
          >
            {position}
          </Typography>
          <Typography color="secondary">
            {location} | {period}
          </Typography>
        </Grid>
        <Grid item xs={10} mt={3}>
          <Typography
            color="primary"
            sx={{ fontSize: "1rem", textAlign: "justify" }}
          >
            {description}
          </Typography>
        </Grid>

        <Grid item xs={10} mt={3}>
          <Technologies technologies={technologies} />
        </Grid>
      </Grid>
    </a>
  );
}

export default XsExperience