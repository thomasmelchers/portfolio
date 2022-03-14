import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import Button from "../Components/Button/Button";
import ArrowDown from "../Components/ArrowDown/ArrowDown";
import { fontWeight } from "@mui/system";

const Home = () => {
  return (
    <Box style={{ backgroundColor: "green" }}>
      <Grid
        container
        style={{ height: "100vh", px: { xs: "2vh", md: "10vh" } }}
      >
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="flex-start"
          item
          xs={12}
          style={{ height: "90vh", borderStyle: "dotted" }}
          pl={"10%"}
        >
          <Typography sx={{ fontSize: "1.5rem" }}>Hello, my name is</Typography>
          <Typography sx={{ fontSize: "3rem", fontWeight: 800 }}>
            Thomas MELCHERS,
          </Typography>
          <Typography sx={{ fontSize: "2rem", fontWeight: 600 }} mb={2}>
            I am Junior Web Developer
          </Typography>
          <Button size={'large'} buttonName={'About Me'}/>
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
