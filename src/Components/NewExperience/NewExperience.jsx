import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const expStyle = {
  width: { xs: "80%", md: "75%" },
  padding: "20px",
  borderRadius: "10px",
  backgroundColor: "#1B467A",
  margin: { xs: "10px", md: "12px", xl: "15px" },
  transition: "all 0.8s ease-out",
  "&:hover": {
    transform: "translate(-10px, -10px)",
    boxShadow: "10px 5px 5px #FFC90080",
  },
};

const NewExperience = ({ experience }) => {
  const [hovered, setHovered] = useState(false);

  const handleHover = () => {
    setHovered(!hovered);
  };

  const { title, location, period, description, position, logo, url, technologies } =
    experience;

  const info = `${location} | ${period}`;

  return (
    <Box sx={expStyle} onMouseEnter={handleHover} onMouseLeave={handleHover}>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none" }}
      >
        <Box display="flex" sx={{ height: "12rem" }}>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="flex-end"
            sx={{ height: "100%", width: "45%" }}
          >
            <img
              alt={title}
              src={logo}
              style={{ height: "100px" }}
            />
          </Box>

          <Box
            ml={5}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            sx={{ height: "100%", width: "100%" }}
          >
            <div style={{ width: "100%" }}>
              {!hovered ? (
                <>
                  <Typography
                    color="primary"
                    textTransform="uppercase"
                    fontSize="1.5rem"
                    fontWeight="600"
                    opacity={hovered ? 0 : 1}
                    transition="opacity 0.8s ease-out"
                  >
                    {position}
                  </Typography>
                  <Typography
                    color="secondary"
                    marginBottom="10px"
                    opacity={hovered ? 0 : 1}
                    transition="opacity 0.8s ease-out"
                  >
                    {info}
                  </Typography>
                  <div style={{display: 'flex', flexWrap: 'wrap'}}>
                  {technologies.map((techno, index) => (
                    <Box key={index}  style={{display: 'flex', padding: "5px 15px 5px 5px", borderRadius: "5px", backgroundColor:"#FFC900", marginRight: "5px", marginTop: "10px"}}>
                      <ChevronRightIcon sx={{color:"#0A1A2E"}} />
                      <Typography color="#0A1A2E"> {techno}</Typography>
                    </Box>
                  ))}

                  </div>
                </>
              ) : (
                <Typography
                  color="primary"
                  fontSize="1rem"
                  textAlign="justify"
                  opacity={hovered ? 1 : 0}
                  transition="opacity 0.8s ease-out"
                >
                  {description}
                </Typography>
              )}
            </div>
          </Box>
        </Box>
      </a>
    </Box>
  );
};

export default NewExperience;
