import React, { useRef, useState } from "react";
import { Box, Grid, TextField, TextareaAutosize, Typography } from "@mui/material";
import ArrowDown from "../Components/ArrowDown/ArrowDown";
import Button from "../Components/Button/Button";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  console.log(form);

  const [isSended, setIsSended] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
      setIsSended(true)
  };


  console.log(isSended)
  return (
    <Box
      component="form"
      ref={form}
      noValidate
      onSubmit={sendEmail}
      style={{ backgroundColor: "#0A1A2E" }}
    >
      <Grid
        container
        style={{ height: "100vh" }}
        px={"10%"} /* direction="column" */
      >
        <Grid container item mt={{xs: "10vh",md:"6vh"}} xs={12} sx={{ height: {xs: "70vh",md: "85vh"} }}>
          <Grid container justifyContent="center" alignItems="center">
            <Grid
              item
              sx={12}
              md={8}
              lg={8}
              p={5}
              sx={{
                borderStyle: "solid",
                borderColor: "#FFC900",
                borderRadius: 10,
                bgcolor: "primary.main",
              }}
            >
              {(isSended === false)? <Box>
                <Grid container>

                  <Grid item xs={12}>
                      <Typography variant='h3' color='secondary' mb={{xs:1.5, md:3}} sx={{fontWeight: 500}}> Get In Touch</Typography>
                  </Grid>

                  <Grid container justifyContent='space-between'>
                  <Grid item xs={12} md={5.5}> 

                    {/* FIRSTNAME */}
                  <Grid container mb={{xs: 2.5, md: 4}}>
                      <Grid item xs={12} >
                        <TextField
                          id="firstname"
                          name="firstname"
                          label="Your Firstname"
                          variant="outlined"
                          type="text"
                          fullWidth
                          required
                          color="secondary"
                        />
                      </Grid>
                      </Grid>

                    {/* NAME */}
                      <Grid container mb={{xs: 2.5, md: 4}}>
                      <Grid item xs={12} >
                        <TextField
                          id="name"
                          name="name"
                          label="Your Name"
                          variant="outlined"
                          type="text"
                          fullWidth
                          required
                          color="secondary"
                        />
                      </Grid>
                    </Grid>

                    {/* COMPANY */}
                    <Grid container mb={{xs: 2.5, md: 4}}>
                      <Grid item xs={12}>
                        <TextField
                          id="company"
                          name="company"
                          label="the Company's Name"
                          variant="outlined"
                          type="text"
                          color="secondary"
                          fullWidth
                          required
                        />
                      </Grid>
                    </Grid>

                    {/* EMAIL */}
                    <Grid container mb={{xs: 2.5, md: 4}}>
                      <Grid item xs={12}>
                        <TextField
                          id="object"
                          name="object"
                          label="Your Email"
                          variant="outlined"
                          type="email"
                          color="secondary"
                          fullWidth
                          required
                        />
                      </Grid>
                    </Grid>

                    
                  </Grid>

                  <Grid item xs={12} md={5.5}>
                    <Grid container mb={{xs: 2.5, md: 4}}>

                    <Grid container mb={{xs: 2.5, md: 4}}>
                      <Grid item xs={12}>
                        <TextField
                          id="object"
                          name="object"
                          label=" Object"
                          variant="outlined"
                          type="text"
                          color="secondary"
                          fullWidth
                          required
                        />
                      </Grid>
                    </Grid>

                      <Grid item xs={12} md={12}>
                        <TextareaAutosize
                          id="message"
                          name="message"
                          label="Message"
                          placeholder="What is your message?"
                          variant="standard"
                          minRows={12}
                          style={{
                            width: "91%",
                            padding: "4%",
                            borderRadius: 12,
                            bgcolor: "primary.main",
                            outline: 'none'
                          }}
                          required
                        />
                      </Grid>
                    </Grid>

                    <Grid container justifyContent="center">
                      <Grid item xs={12}>
                        <Button
                          variant="contained"
                          type="submit"
                          size="large"
                          buttonName="Send Message"
                        ></Button>
                      </Grid>
                    </Grid>

                  </Grid>
                  </Grid>
                </Grid>
              </Box> : 

               <Typography color='#04947d'>Thank you for your message, it has been well delivered ! You will receive a response a soon as possible. </Typography>}
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
          <ArrowDown />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;
