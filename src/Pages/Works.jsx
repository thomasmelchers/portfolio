import React from "react";
import { Box, Grid } from "@mui/material";
import {Link} from 'react-scroll'

import ArrowDown from "../Components/Shared/ArrowDown/ArrowDown";

import PageTitle from "../Components/Shared/PageTitle/PageTitle";
import Carrousel from "../Components/Projects/Carrousel";


const Works = () => {

  return (
    <Box style={{ backgroundColor: "#0A1A2E" }}>
      <Grid container sx={{ height: "100vh" }} >
        {/* {xs: '400vh',lg: "100vh"} */}
        <Grid container item mt="6vh" xs={12} sx={{ height: "auto" }}>
          {/* {xs: '380vh', lg: "85vh"} */}
          <Grid container direction="column">
            <Grid item px="10%"> 
              <Grid container justifyContent="flex-start">
                <PageTitle
                  numberTitle={"03."}
                  pageTitle={"Projects"}
                ></PageTitle>
              </Grid>
            </Grid>

            <Grid item mt={3} sx={{ height: {xs: "75%", md: "90%"} }} px="5%">
              <Carrousel />
            </Grid>
          </Grid>
        </Grid>
        {/* 
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          item
          xs={12}
          sx={{ height: "9vh" }}
        >
          <Link to="Contact" spy={true} smooth={true} offset={0} duration={500}>
            <ArrowDown />
          </Link>
        </Grid> */}
      </Grid>
    </Box>
  );
};

export default Works;
