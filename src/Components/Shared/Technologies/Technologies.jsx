import React from 'react'
import { Box, Typography } from "@mui/material"
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const Technologies = ({technologies}) => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {technologies.map((techno, index) => (
        <Box
          key={index}
          style={{
            display: "flex",
            padding: "5px 15px 5px 5px",
            borderRadius: "5px",
            backgroundColor: "#FFC900",
            margin: "10px 5px 0 0",
          }}
        >
          <ChevronRightIcon sx={{ color: "#0A1A2E" }} />
          <Typography color="#0A1A2E"> {techno}</Typography>
        </Box>
      ))}
    </div>
  );
}

export default Technologies