import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import ArrowDown from "../Components/ArrowDown/ArrowDown";
import PageTitle from "../Components/PageTitle/PageTitle";
import Skills from "../Components/Skills/Skills";
import {Link} from 'react-scroll'

const AboutMe = () => {
  return (
    <Box style={{ backgroundColor: "#0A1A2E" }}>
      <Grid
        container
        style={{ height: "100vh" }}
        px="10%" /* direction="column" */
      >
        <Grid
          container
          item
          mt="6vh"
          xs={12}
          sx={{ height: "85vh" }}
        >
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
                Hello, my name is Thomas. I enjoy creating applications which
                live on the web and playing with data. My interest started a few
                years ago when I still was a student. At the University, I
                invested some times working in a NPO where I created and
                administrated the website. The promotion of our activities was
                one the main purpose, social media were only at their
                beginnings. Later, I helped a friend to promote his activities
                as a tour guide in Sri Lanka by creating an other web
                application with all the information about its product.{" "}
              </Typography>
              <Typography
                color="primary"
                mt={5}
                textAlign="justify"
                fontSize="1rem"
                sx={{ display: { lg: "none", xs: "flex" } }}
              >
                Hello, my name is Thomas. I enjoy creating applications which
                live on the web and playing with data. My interest started a few
                years ago when I still was a student. I created a website to
                promote the activities of the NPO where I was involved. Then, I
                created a website for a travel guide and promote its activities.
              </Typography>
              <Typography
                color="primary"
                mt={3}
                textAlign="justify"
                fontSize="1.2rem"
                sx={{ display: { xs: "none", lg: "flex" } }}
              >
                Today, I am completing a training as web developer at BeCode in
                Brussels. Self-learning and active pedagogy were the two
                pillars. I have been training myself on individual and group
                projects.
                At the beginning, I focus on the back-end
                development and by designing the database's architecture. Then,
                I want it to have a better understanding of front-end. How do I
                fetch the data? How React is working? So now, I have got
                knowledge about both aspects of the web development and I am
                interested by both too. Among the programming languages that I
                have been learning, there are :
              </Typography>
              <Typography
                color="primary"
                textAlign="justify"
                mt={2}
                fontSize="1rem"
                sx={{ display: { lg: "none" } }}
              >
                Today, I am completing a training as web developer at BeCode in
                Brussels. Self-learning and active pedagogy were the two
                pillars. I have been training myself on individual and group
                projects that you can discover{" "}
                <Link to="Works" spy={true} smooth={true} offset={50} duration={500} sx={{ color: "#FFC900", cursor: 'pointer' }}>over here. </Link> So now, I
                have got knowledge about both aspects of the web development and
                I am interested by both too. Among the programming languages
                that I have been learning, there are :
              </Typography>
              <Grid container justifyContent="center" mt={2}>
                <Grid item xs={3}>
                  <Skills skill="HTML 5 & CSS 3" />
                  <Skills skill="JAVASCRIPT (ES6)" />
                  <Skills skill="REACT" />
                </Grid>
                <Grid item xs={3} pl={1.5}>
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
           <Link to="Works" spy={true} smooth={true} offset={50} duration={500}><ArrowDown rotate='rotate(-90deg)'/></Link>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutMe;
