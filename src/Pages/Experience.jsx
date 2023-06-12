import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { Link } from "react-scroll";
import PageTitle from "../Components/PageTitle/PageTitle";
import ArrowDown from "../Components/ArrowDown/ArrowDown";
import LgExperience from "../Components/Experiences/LgExperience";
import XsExperience from "../Components/Experiences/XsExperience";
import Technologies from "../Components/Shared/Technologies/Technologies";
import { experiencesData, personnalProjectsData } from "../Data/Data" 



const Experience = () => {
  

  const reverseExperienceData = [...experiencesData].reverse()
  const { role, tasks, period, intro, description, technologies } = personnalProjectsData[0]

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
                      <Grid container justifyContent="center">
                        <Grid item xs={8}>
                          <Typography
                            color="primary"
                            sx={{
                              textTransform: "uppercase",
                              fontSize: "1.5rem",
                              fontWeight: "600",
                            }}
                          >
                            Private Projects
                          </Typography>
                          <Typography
                            mt={1}
                            color="primary"
                            sx={{ fontSize: "1.5rem", fontWeight: 500 }}
                          >
                            {role}
                          </Typography>
                          <Typography color="primary" fontWeight={500}>
                            {tasks}
                          </Typography>
                          <Typography color="secondary">{period}</Typography>
                          <Typography
                            mt={3}
                            color="primary"
                            sx={{ fontSize: "1rem", textAlign: "justify" }}
                          >
                            {intro}
                          </Typography>
                          {description.map((desc, index) => (<Typography key={index} color="primary"
                            sx={{ fontSize: "1rem", textAlign: "justify", mt: 1 }}>{desc}</Typography>))}
                        </Grid>
                        <Grid item xs={8} mt={3}>
                          <Technologies technologies={technologies} />
                        </Grid>
                      </Grid>
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
