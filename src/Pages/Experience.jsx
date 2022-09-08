import React from "react";
import { Box, Grid } from "@mui/material";
import PageTitle from "../Components/PageTitle/PageTitle";
import ArrowDown from "../Components/ArrowDown/ArrowDown";
import Skills from "../Components/Skills/Skills";
import { Link } from "react-scroll";
import NewExperience from "../Components/NewExperience/NewExperience";

const Experience = () => {
  const skillsGrid = {
    marginRight: { xs: "7px" },
  };

  return (
    <Box style={{ backgroundColor: "#0A1A2E" }}>
      <Grid
        container
        sx={{ height: {xs: '180vh', md: "100vh"} }}
        px="10%" /* direction="column" */
      >
        <Grid
          container
          item
          mt="6vh"
          xs={12}
          sx={{ height: {xs: "160vh", md: "85vh"} }}
        >
          <Grid
            container
            direction="column"
            justifyContent="space-around"
          >
            <Grid item>
              <Grid container justifyContent="flex-start">
                <PageTitle
                  numberTitle={"02."}
                  pageTitle={"Experience"}
                ></PageTitle>
              </Grid>
            </Grid>

            <Grid item >
              <Grid container >
                <Grid item xs={12} md={8} sx={{ marginBottom:{xs: '20px'}}}>
                  <Grid container justifyContent="center" >
                    <NewExperience
                      title={"Becode"}
                      time={"September 2021 to April 2022"}
                      description={
                        "A seven-month intensive bootcamp based on a self-learning and active pedagogy. There I have developed individual and team projects by following an agile methodology."
                      }
                    ></NewExperience>
                    <NewExperience
                      title={"Actyv"}
                      time={"March to April 2022"}
                      description={
                        "During the BeCode training in a team of four, we have completed our first client project. We have built a showcase website to present the purpose of a cultural immersion NPO and help the founder to find new partners. "
                      }
                    ></NewExperience>
                    <NewExperience
                      title={"Nutrinomics"}
                      time={"May to June 2022"}
                      description={
                        "A two-month internship as a fullstack developer in a healthcare technology start-up improving the quality of life and the nutritional status of patiens suffering of cancer and chronic diseases."
                      }
                    ></NewExperience>
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
                    <Grid item sx={skillsGrid}>
                      <Skills skill="HTML 5 & CSS 3" />
                    </Grid>
                    <Grid item sx={skillsGrid}>
                      <Skills skill="JAVASCRIPT (ES6)" />
                    </Grid>
                    <Grid item sx={skillsGrid}>
                      <Skills skill="TYPESCRIPT" />
                    </Grid>
                    <Grid item sx={skillsGrid}>
                      <Skills skill="REACT" />
                    </Grid>
                    <Grid item sx={skillsGrid}>
                      <Skills skill="SQL" />
                    </Grid>
                    <Grid item sx={skillsGrid}>
                      <Skills skill="GRAPHQL" />
                    </Grid>
                    <Grid item sx={skillsGrid}>
                      <Skills skill="NODE & EXPRESS.JS" />
                    </Grid>
                    <Grid item sx={skillsGrid}>
                      <Skills skill="PHP" />
                    </Grid>
                    <Grid item sx={skillsGrid}>
                      <Skills skill="MONGDO DB" />
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
