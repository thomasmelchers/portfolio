import React, { useRef } from "react";
import { Box, Grid, TextField, TextareaAutosize } from "@mui/material";
import ArrowDown from "../Components/ArrowDown/ArrowDown";
import Button from "../Components/Button/Button";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  console.log(form);

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
  };

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
              p={10}
              sx={{
                borderStyle: "solid",
                borderColor: "#FFC900",
                borderRadius: 10,
                bgcolor: "primary.main",
              }}
            >
              <Box>
                <Grid container justifyContent='space-between'>
                  <Grid item xs={12} md={5}>

                    <Grid container justifyContent="space-between">
                      <Grid item xs={12} md={5.5} mb={{xs: 2.5, md: 4}}>
                        <TextField
                          id="firstname"
                          name="firstname"
                          label="Firstname"
                          variant="outlined"
                          type="text"
                          fullWidth
                          required
                          color="secondary"
                        />
                      </Grid>
                      <Grid item xs={12} md={5.5} mb={{xs: 2.5, md: 4}}>
                        <TextField
                          id="name"
                          name="name"
                          label="Name"
                          variant="outlined"
                          type="text"
                          fullWidth
                          required
                          color="secondary"
                        />
                      </Grid>
                    </Grid>

                    <Grid container mb={{xs: 2.5, md: 4}}>
                      <Grid item xs={12}>
                        <TextField
                          id="company"
                          name="company"
                          label="Company's name"
                          variant="outlined"
                          type="text"
                          color="secondary"
                          fullWidth
                          required
                        />
                      </Grid>
                    </Grid>

                    <Grid container mb={{xs: 2.5, md: 4}}>
                      <Grid item xs={12}>
                        <TextField
                          id="object"
                          name="object"
                          label="Email Object"
                          variant="outlined"
                          type="email"
                          color="secondary"
                          fullWidth
                          required
                        />
                      </Grid>
                    </Grid>

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
                  </Grid>

                  <Grid item xs={12} md={5}>
                    <Grid container mb={{xs: 2.5, md: 4}}>
                      <Grid item xs={12} md={12}>
                        <TextareaAutosize
                          id="message"
                          name="message"
                          label="Message"
                          placeholder="message"
                          variant="standard"
                          minRows={12}
                          style={{
                            width: "96%",
                            padding: "2%",
                            borderRadius: 10,
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
              </Box>
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
