import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import ArrowDown from "../Components/ArrowDown/ArrowDown";
import PageTitle from "../Components/PageTitle/PageTitle";
import Skills from "../Components/Skills/Skills";
import { Link } from "react-scroll";

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
                Hello, my name is Thomas. I enjoy creating web applications and
                playing with data. This interest started a few years ago when I
                still was a university student. At that time, I devoted my times
                to work for an NPO for which I created and administrated a
                website. Its main objective was the promotion of our activities,
                as social medias only were at their beginnings. Later on, I
                helped a friend to promote his activities as a tour guide in Sri
                Lanka by creating an other web application with all the
                information about his products.{" "}
              </Typography>
              <Typography
                color="primary"
                mt={5}
                textAlign="justify"
                fontSize="1rem"
                sx={{ display: { lg: "none", xs: "flex" } }}
              >
                Hello, my name is Thomas. I enjoy creating web applications and playing with data. This interest started a few
                years ago when I still was a student. I created a website to
                promote the activities of an NPO where I was involved. Later on, I
                created a website for a travel guide to promote his activities.
              </Typography>
              <Typography
                color="primary"
                mt={3}
                textAlign="justify"
                fontSize="1.2rem"
                sx={{ display: { xs: "none", lg: "flex" } }}
              >
                Today, I am completing a training as web developer at BeCode in
                Brussels. Self-learning and active pedagogy are its two pillars.
                I have been training myself on individual and group projects. At
                the beginning, I focused on back-end development and designing
                databases architecture. After that, I want it to have a better
                understanding of front-end development. How do I fetch the data?
                How does React work? Therefore, I have now gained knowledge in
                both aspects of web development and I am interested in both.
                Those are the programming languages learned :
              </Typography>
              <Typography
                color="primary"
                textAlign="justify"
                mt={2}
                fontSize="1rem"
                sx={{ display: { lg: "none" } }}
              >
                Today, I am completing a training as web developer at BeCode in
                Brussels. Self-learning and active pedagogy are its two
                pillars. I have been training myself on individual and group
                projects. Therefore, I have now gained knowledge in both aspects of
                development and I am interested in both. Those are the programming languages learned :
              </Typography>
              <Grid container justifyContent="center" mt={2}>
                <Grid item xs={4} sx={{ paddingLeft: {xs: 3, lg: 5}}}>
                  <Skills skill="HTML 5 & CSS 3" />
                  <Skills skill="JAVASCRIPT (ES6)" />
                  <Skills skill="REACT" />
                </Grid>
                <Grid item xs={4} sx={{paddingLeft: {xs: 5, lg: 8}}}>
                  <Skills skill="SQL" />
                  <Skills skill="GRAPHQL" />
                </Grid>
                <Grid item xs={4}>
                  <Skills skill="NODE & EXPRESS.JS" />
                  <Skills skill="PHP" />
                  <Skills skill="MONGDO DB" />
                </Grid>
              </Grid>
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
          <Link to="Projects" spy={true} smooth={true} offset={0} duration={500}>
            <ArrowDown rotate="rotate(-90deg)" />
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutMe;
