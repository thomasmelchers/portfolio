import React, { useRef, useState, useEffect } from "react";
import { Box, Grid, TextField, TextareaAutosize, Typography, Input } from "@mui/material";
import ArrowUp from "../Components/ArrowUp/ArrowUp";
import Button from "../Components/Button/Button";
import emailjs from "@emailjs/browser";
import Validation from "../Components/ContactForm/Validation";
import {Link} from 'react-scroll'


const textcolor = {
  root: {'&.MuiInput-input': {color : 'red'}}
}
const Contact = () => {
  const form = useRef();

  const [error, setError] = useState ({})
  const [isClicked, setIsClicked] = useState(false)
  const [isSended, setIsSended] = useState(false)
  const [values, setValues] = useState({
    firstname: '',
    name: '',
    company: '',
    email:'',
    object: '',
    message: '',
  })

  const handleChange = e => {
    setValues({
        ...values,
        // targeting the value for each name field in every form inputs
        [e.target.name]: e.target.value
    })
}

  const sendEmail = (e) => {
    e.preventDefault();

    setError(Validation(values))

    setIsClicked(true) 
    
  };
  
  useEffect(
    () => {
        if (Object.keys(error).length === 0 && isClicked) {
            emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_USER_ID
      )

      setIsSended(true)
          }
    },
    [error, isClicked]
  );

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
        sx={{ height: {xs: '120vh', lg:"100vh"} }}
        px={"10%"} /* direction="column" */
      >
        <Grid container item mt={{xs: "10vh",md:"6vh"}} xs={12} sx={{ height: {xs: "90vh", lg: "80vh"},/*  overflow: 'scroll' */ }}>
          <Grid container justifyContent="center" alignItems="center">
            <Grid
              item
              xs={12}
              md={8}
              lg={8}
              p={{xs:2, lg: 5}}
              px={{xs: 4}}
              sx={{
                borderStyle: "solid",
                borderColor: "secondary.main", //#CCD7F5
                borderRadius: 10,
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
                          color="primary"
                          values={values.firstname}
                          onChange={handleChange}
                          InputLabelProps = {{
                            sx: {color:"primary.main"} 
                          }}
                          inputProps = {{
                            sx: {color: "primary.main"}
                          }}
                          focused
                        />
                      </Grid> <Typography color="error" textAlign='left'>
                            {error.firstname}
                          </Typography>
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
                          color="primary"
                          values={values.name}
                          onChange={handleChange}
                          inputProps = {{
                            sx: {color: "primary.main"}
                          }}
                          focused
                        /><Typography color="error" textAlign='left'>
                        {error.name}
                      </Typography>
                      </Grid>
                    </Grid>

                    {/* COMPANY */}
                    <Grid container mb={{xs: 2.5, md: 4}}>
                      <Grid item xs={12}>
                        <TextField
                          id="company"
                          name="company"
                          label="Your Company's Name"
                          variant="outlined"
                          type="text"
                          color="primary"
                          fullWidth
                          required
                          values={values.company}
                          onChange={handleChange}
                          inputProps = {{
                            sx: {color: "primary.main"}
                          }}
                          focused
                        /><Typography color="error" textAlign='left'>
                        {error.company}
                      </Typography>
                      </Grid>
                    </Grid>

                    {/* EMAIL */}
                    <Grid container mb={{xs: 2.5, md: 4}}>
                      <Grid item xs={12}>
                        <TextField
                          id="object"
                          name="email"
                          label="Your Email"
                          variant="outlined"
                          type="email"
                          color="primary"
                          fullWidth
                          required
                          values={values.email}
                          onChange={handleChange}
                          inputProps = {{
                            sx: {color: "primary.main"}
                          }}
                          focused
                        /> <Typography color="error" textAlign='left'>
                        {error.email}
                      </Typography>
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
                          color="primary"
                          fullWidth
                          required
                          values={values.object}
                          onChange={handleChange}
                          inputProps = {{
                            sx: {color: "primary.main"}
                          }}
                          focused
                        /><Typography color="error" textAlign='left'>
                        {error.object}
                      </Typography>
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
                          values={values.message}
                          onChange={handleChange}
                        /><Typography color="error" textAlign='left'>
                        {error.message}
                      </Typography>
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
          sx={{ height: "9vh", display: {xs: 'none', lg: 'flex'} }}
        >
          <Link to="Home" spy={true} smooth={true} offset={0} duration={500} ><ArrowUp /></Link>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;
