import React from "react";
import { Box, Grid } from "@mui/material";
import { Link } from "react-scroll";
import PageTitle from "../Components/PageTitle/PageTitle";
import ArrowDown from "../Components/ArrowDown/ArrowDown";
import Skills from "../Components/Skills/Skills";
import NewExperience from "../Components/NewExperience/NewExperience";
import { skillsData, experiencesData } from "../Data/Data" 


const Experience = () => {
  const skillsGrid = {
    marginRight: { xs: "7px" },
  };

  const reverseExperienceData = [...experiencesData].reverse()
  console.table("reverse", reverseExperienceData)

  return (
    <Box style={{ backgroundColor: "#0A1A2E" }}>
      <Grid
        container
        sx={{ height: { xs: "190vh", md: "130vh" }}}
        px="10%" /* direction="column" */
      >
        <Grid
          container
          item
          mt="6vh"
          xs={12}
          sx={{ height: { xs: "170vh", md: "110vh" }}}
        >
          <Grid container direction="column" justifyContent="space-around">
            <Grid item>
              <Grid container justifyContent="flex-start">
                <PageTitle
                  numberTitle={"02."}
                  pageTitle={"Experience"}
                ></PageTitle>
              </Grid>
            </Grid>

            <Grid item>
              <Grid container>
                <Grid item xs={12} md={8} sx={{ marginBottom: { xs: "20px" } }}>
                  <Grid container justifyContent="center">
                    {reverseExperienceData.map((exp, index) => (
                      <NewExperience
                      key={index}
                      title={exp.title}
                      location={exp.location}
                      time={exp.period}
                      description={exp.description} />
                    ))}  
                  </Grid>
                </Grid>

                <Grid item xs={12} md={4}>
                  <Grid
                    container
                    direction={{ xs: "row", md: "column" }}
                    justifyContent="center"
                    alignItems="center"
                    sx={{ height: "100%" }}
                  >
                    {skillsData.map((skills, index) => (
                      <Grid item sx={skillsGrid} key={index}>
                        <Skills skill={skills} />
                      </Grid>
                    ))}
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
