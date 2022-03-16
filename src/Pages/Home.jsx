import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import Button from "../Components/Button/Button";
import ArrowDown from "../Components/ArrowDown/ArrowDown";

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
          <Typography color='secondary' sx={{ fontSize: {xs:"1.3rem", md:'1.4rem', lg: '1.7rem'} }}>Hello, my name is</Typography>
          <Typography color='primary' sx={{ fontSize: {xs: "3rem", md:"4.5rem", lg: "6rem"}, fontWeight: 800 }}>
            Thomas MELCHERS.
          </Typography>
          <Typography color='primary' sx={{ fontSize: {xs: "2rem", md:"2.5rem", lg: "3rem"}, fontWeight: 600 }} mb={4}>
            I am Junior <span style={{color: '#FFC900'}}>Web Developer </span>
          </Typography>
          <Button variant={'outlined'} size={'large'} buttonName={'About Me'}/>
        </Grid>

        <Grid
          container
          justifyContent="center"
          alignItems="center"
          item
          xs={12}
          style={{ height: "10vh" }}
        >
          <ArrowDown />
        </Grid>

      </Grid>
    </Box>
  );
};

export default Home;
