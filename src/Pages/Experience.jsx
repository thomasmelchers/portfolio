import React from "react";
import { Box, Grid } from "@mui/material";
import { Link } from "react-scroll";

import PageTitle from "../Components/PageTitle/PageTitle";
import ArrowDown from "../Components/Shared/ArrowDown/ArrowDown";
import LgExperience from "../Components/Experiences/LgExperience";
import XsExperience from "../Components/Experiences/XsExperience";
import PrivateExperience from "../Components/Experiences/PrivateExperience";

import { experiencesData,  } from "../Data/Data" 


const Experience = () => {

  const reverseExperienceData = [...experiencesData].reverse()
  
  return (

    //{xs: "500vh", md: "250vh", lg: "160vh"}
    <Box sx={{ backgroundColor: "#0A1A2E", height: "auto" }}>
      <Grid container px="10%">
        <Grid
          container
          item
          mt="6vh"
          xs={12}
          sx={{ height: "auto" }}
          // { xs: "400vh", md: "200vh", lg: "140vh" }
        >
          <Grid container direction="column" justifyContent="flex-start">
            <Grid item>
              <Grid container justifyContent="flex-start">
                <PageTitle
                  numberTitle={"02."}
                  pageTitle={"Experiences"}
                ></PageTitle>
              </Grid>
            </Grid>

            <Grid item mt={3}>
              <Grid
                container
                justifyContent={{ lg: "space-between" }}
                alignItems={{ lg: "center" }}
                sx={{ width: "100%", height: "100%" }}
              >
                <Grid
                  item
                  xs={12}
                  lg={8}
                  sx={{
                    marginBottom: { xs: "20px" },
                    height: { xs: "auto" },
                  }}
                >
                  <Grid
                    container
                    justifyContent="center"
                    sx={{ display: { xs: "none", lg: "flex" } }}
                  >
                    {reverseExperienceData.map((exp, index) => (
                      <LgExperience key={index} experience={exp} />
                    ))}
                  </Grid>
                  <Grid
                    container
                    justifyContent="center"
                    sx={{ display: { xs: "flex", lg: "none" } }}
                  >
                    {reverseExperienceData.map((exp, index) => (
                      <XsExperience key={index} experience={exp} />
                    ))}
                  </Grid>
                </Grid>

                <Grid item xs={12} lg={4} sx={{ height: "auto" }}>
                  <Grid
                    container
                    justifyContent="center"
                    alignItems="center"
                    sx={{
                      width: "100%",
                      height: "auto"
                    }}
                  >
                    <Grid
                      item
                      sx={{
                        width: "100%",
                        borderRadius: "10px",
                        backgroundColor: "#1B467A",
                        margin: "1rem",
                        padding: "2rem 1rem",
                      }}
                    >
                      <PrivateExperience />
                    </Grid>
                  </Grid>
                </Grid>
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
          <Link
            to="Projects"
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

export default Experience;
