import React from 'react'
import { Box, Typography } from "@mui/material"

import ChevronRightIcon from "@mui/icons-material/ChevronRight";


const Technologies = ({technologies}) => {
  return (

    <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: {xs: "center", lg: "start"} }}>
      {technologies.map((techno, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            padding: "5px 15px 5px 5px",
            borderRadius: "5px",
            backgroundColor: "#FFC900",
            margin: "10px 5px 0 0",
          }}
        >
          <ChevronRightIcon sx={{ color: "#0A1A2E" }} />
          <Typography color="#0A1A2E" > {techno}</Typography>
        </Box>
      ))}
    </Box>
    
  );
}

export default Technologies