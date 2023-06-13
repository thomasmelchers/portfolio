import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { Link } from "react-scroll";

import Typewriter from "typewriter-effect";

import Button from "../Components/Button/Button";
import ArrowDown from "../Components/Shared/ArrowDown/ArrowDown";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";


const icon = {
  root: {
    "&:hover": {
      color: "secondary.main",
    },
  },
};


const Home = () => {

  return (

    <Box style={{ backgroundColor: "#0A1A2E" }}>
      <Grid container style={{ height: "100vh" }}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="flex-start"
          item
          xs={12}
          style={{ height: "90vh" }}
          pl={"10%"}
        >
          <Typography
            color="secondary"
            sx={{ fontSize: { xs: "1rem", md: "1.4rem", lg: "1.7rem" } }}
          >
            Hello, my name is
          </Typography>
          <Typography
            color="primary"
            sx={{
              fontSize: { xs: "2rem", md: "4.5rem", lg: "6rem" },
              fontWeight: 800,
            }}
          >
            Thomas MELCHERS.
          </Typography>
          <Grid container justifyContent="flex-start">
            <Typography
              color="primary"
              sx={{
                fontSize: { xs: "1.5rem", md: "2.5rem", lg: "3rem" },
                fontWeight: 600,
              }}
              mb={4}
            >
              I am a{" "}
            </Typography>
            <Typography
              sx={{
                ml: { xs: 1, lg: 2 },
                fontSize: { xs: "1.5rem", md: "2.5rem", lg: "3rem" },
                fontWeight: 600,
                color: "#FFC900",
              }}
            >
              {" "}
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Junior Developer")
                    .pauseFor(1500)
                    .deleteAll()
                    .typeString("Historian")
                    .pauseFor(1500)
                    .deleteAll()
                    .typeString("Junior Developer.")
                    .start();
                }}
              />
            </Typography>
          </Grid>
          <Link
            to="About Me"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <Button
              variant={"outlined"}
              size={"large"}
              buttonName={"About Me"}
            />
          </Link>
          <Grid container mt={3}>
            <Grid item mr={1}>
              <a
                href="https://github.com/thomasmelchers"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ textDecoration: "none" }}
              >
                {" "}
                <GitHubIcon color="primary" fontSize="large" sx={icon.root} />
              </a>
            </Grid>
            <Grid item>
              <a
                href="https://www.linkedin.com/in/thomasmelchers/"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ textDecoration: "none" }}
              >
                {" "}
                <LinkedInIcon color="primary" fontSize="large" sx={icon.root} />
              </a>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          container
          justifyContent="center"
          alignItems="center"
          item
          xs={12}
          style={{ height: "10vh" }}
        >
          <Link
            to="About Me"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <ArrowDown />
          </Link>
        </Grid>
      </Grid>
    </Box>
    
  );
};

export default Home;
