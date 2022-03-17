import {
  Grid,
  CardMedia,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";


const style ={
  root:{
    height: {xs: '43vh' ,lg: '37vh'},
    '&:hover': {
      transform: 'scale(1.05)',
      cursor: 'pointer',
    } 
  }
}

const CardWork = ({ data }) => {
  let display;

  if (data) {
    display = data.map((item) => {
      let {
        id,
        projectName,
        image,
        technologies,
        github,
        url,
        description,
        role,
      } = item;
      return (
        <Grid item xs={12} lg={2.75} key={id} m={1}>
          <Card sx={style.root}>
            <a href={url} target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
            <CardMedia
              component="img"
              image={image}
              alt={projectName}
              sx={{height:{xs: '60%', lg: "50%"}}}
            />
            <CardContent sx={{ height:{xs: '40%', lg: "50%"}, backgroundColor: "#CCD7F5" }}>
              <Grid container direction='column' justifyContent='space-around' sx={{ height: '85%'}}>
                <Grid item>
                  <Typography variant='h6' color='secondary' sx={{textTransform: 'uppercase', fontWeight: 600}}>{projectName}</Typography>
                </Grid>
                <Grid item >
                <Typography color='#0A1A2E'>{technologies}</Typography>
                <Typography color='#0A1A2E'>{role}</Typography>
                </Grid>
                <Grid item >
                  <a href={github} target="_blank" rel="noopener noreferrer" style={{color:'#0A1A2E', textDecoration: 'none'}}> <GitHubIcon /></a>
                  {/* <a href={url} style={{color:'#0A1A2E', textDecoration: 'none'}}> <LaunchIcon /></a> */}
                </Grid>
              </Grid>
            </CardContent></a>
          </Card>
        </Grid>
      );
    });
  }
  return <>{display}</>;
};

export default CardWork;
