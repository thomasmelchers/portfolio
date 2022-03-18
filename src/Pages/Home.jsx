import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import Button from "../Components/Button/Button";
import ArrowDown from "../Components/ArrowDown/ArrowDown";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <Box style={{ backgroundColor: "#0A1A2E" }}>
      <Grid
        container
        style={{ height: "100vh" }}
      >
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="flex-start"
          item
          xs={12}
          style={{ height: "90vh"}}
          pl={"10%"}
        >
          <Typography color='secondary' sx={{ fontSize: {xs:"1rem", md:'1.4rem', lg: '1.7rem'} }}>Hello, my name is</Typography>
          <Typography color='primary' sx={{ fontSize: {xs: "2rem", md:"4.5rem", lg: "6rem"}, fontWeight: 800 }}>
            Thomas MELCHERS.
          </Typography>
          <Typography color='primary' sx={{ fontSize: {xs: "1.5rem", md:"2.5rem", lg: "3rem"}, fontWeight: 600 }} mb={4}>
            I am a <span style={{color: '#FFC900'}}>Junior Web Developer</span>
          </Typography>
          <Link to="About Me" spy={true} smooth={true} offset={0} duration={500}><Button variant={'outlined'} size={'large'} buttonName={'About Me'}/></Link>
        </Grid>

        <Grid
          container
          justifyContent="center"
          alignItems="center"
          item
          xs={12}
          style={{ height: "10vh" }}
        >
          <Link to="About Me" spy={true} smooth={true} offset={0} duration={500}><ArrowDown /></Link>
        </Grid>

      </Grid>
    </Box>
  );
};

export default Home;
