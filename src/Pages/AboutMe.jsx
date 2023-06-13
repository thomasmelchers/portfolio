import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { Link } from "react-scroll";

import ArrowDown from "../Components/Shared/ArrowDown/ArrowDown";
import PageTitle from "../Components/Shared/PageTitle/PageTitle";

const AboutMe = () => {

  return (
  
  <Box style={{ backgroundColor: "#0A1A2E" }}>
      <Grid
        container
        style={{ height: "100vh" }}
        px="10%" /* direction="column" */
      >
        <Grid container item mt="6vh" xs={12} sx={{ height: "85vh" }}>
          <Grid container>
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="flex-start"
              item
              xs={12}
              md={8}
            >
              <PageTitle numberTitle={"01."} pageTitle={"About Me"}></PageTitle>
              <Typography
                color="primary"
                mt={5}
                textAlign="justify"
                fontSize="1.2rem"
                sx={{ display: { xs: "none", lg: "flex" } }}
              >
                Hello, my name is Thomas. I am a Junior Web Developer and a
                Historian. After some experiences in the cultural and tourism
                sector, I have decided to redirect my career through web
                development. This interest started a few years ago when I
                created several websites for an University NPO or to promote the
                touristic activities of a friend. In April 2022, I completed a
                training at BeCode where I have learned the basics thanks to a
                self-learning and an active pedagogy. During 7 months, I have
                conceived individual or group projects. I have practiced my
                skills in a start-up which develop a healthcare solution for
                patients suffering of cancer or chronic diseases. There I have
                collaborated with an international team and I have completed
                some fullstask tasks such as implementing new functionalities on
                an admin dashboard or integrating a new theme in accord of the
                UI design.
              </Typography>
              <Typography
                color="primary"
                mt={5}
                textAlign="justify"
                fontSize="1rem"
                sx={{ display: { lg: "none", xs: "flex" } }}
              >
                Hello, my name is Thomas. I am a Junior Web Developer. I decided
                to redirect my career through web development in September 2021.
                I have completed a seven-month bootcamp at BeCode which promotes
                a self-learning and active pedagogy and then a two-month
                internship as a fullstack developer in a start-up.
              </Typography>
              <Typography
                color="secondary"
                fontWeight={550}
                mt={3}
                textAlign="justify"
                fontSize={{ xs: "1rem", md: "1.2rem" }}
              >
                Today, I am looking for a new challenge where I can use my
                skills to help a company to develop its digital solution.
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}></Grid>
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
            to="Experience"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <ArrowDown rotate="rotate(-90deg)" />
          </Link>
        </Grid>
      </Grid>
    </Box>

  );
};

export default AboutMe;
