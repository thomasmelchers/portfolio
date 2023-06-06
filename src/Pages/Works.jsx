import React from "react";
import { Box, Grid } from "@mui/material";
import ArrowDown from "../Components/ArrowDown/ArrowDown";
import { projectsData } from "../Data/Data";
import Card from "../Components/Card/Card";
import PageTitle from "../Components/PageTitle/PageTitle";
import {Link} from 'react-scroll'

const Works = ({id}) => {
  /* const role = Data.map((x)=>x.role.find((item => {if(item === 'Back-End'){console.log(x.id)}})
  )) */

  /* const techno = Data.map((x) =>
    x.technologies.find((item) => {
      if (item === "React") {
        console.log(Data[x.id - 1]);
      }
    })
  ); */
  return (
    <Box style={{ backgroundColor: "#0A1A2E" }}>
      <Grid container sx={{ height: {xs: '400vh',lg: "100vh"}}} px="10%">
        <Grid container item mt="6vh" xs={12} sx={{ height: {xs: '380vh', lg: "85vh"}}}>

          <Grid container direction="column" justifyContent='space-around'>

            <Grid item>
              <Grid container justifyContent="flex-start">
                <PageTitle
                  numberTitle={"03."}
                  pageTitle={"Projects"}
                ></PageTitle>
              </Grid>
            </Grid>

            <Grid item>
              <Grid container justifyContent="center" alignItems="center">
                <Card data={projectsData} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          item
          xs={12}
          sx={{ height: "9vh" }}
        >
          <Link to="Contact" spy={true} smooth={true} offset={0} duration={500}><ArrowDown /></Link>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Works;
