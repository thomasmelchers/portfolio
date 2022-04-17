import {
  Grid,
  CardMedia,
  Card,
  CardContent,
  Typography,
  Badge
} from "@mui/material";
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";


const style ={
  root:{
    position: 'relative',
    height: {xs: '43vh' ,lg: '37vh'},
    '&:hover': {
      transform: 'scale(1.05)',
      cursor: 'pointer',
    }, 
    border: '2px solid #CCD7F5',
    borderRadius: '8px'
  },
  icon: {
    textDecoration: 'none'
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
        status
      } = item;
      return (
        <Grid item xs={12} lg={2.75} key={id} m={1.5}>
          <Card sx={style.root} >
          {(status === 'In Progress') && <Typography /* color='#0A1A2E' */ color='tertiary' sx={{fontSize: '0.9rem', backgroundColor: 'secondary.main', borderRadius: 15, width: '30%', position: 'absolute', top: 7, right: 7, zIndex: 2, }}>{status}</Typography>}
            <a href={url} target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
            <CardMedia
              component="img"
              image={image}
              alt={projectName}
              sx={{height:{xs: '55%', lg: "47%"}, borderRadius: '8px 8px 0 0'}}
            />
            <CardContent sx={{ height:{xs: '45%', lg: "53%"}, /* backgroundColor: "#CCD7F5" */ backgroundColor:'#0A1A2E'}}>
              <Grid container direction='column' justifyContent='space-around' sx={{ height: '85%'}}>
                <Grid item>
                  <Typography variant='h6' color='secondary' sx={{textTransform: 'uppercase', fontWeight: 600}}>{projectName}</Typography>
                </Grid>
                <Grid item >
                <Typography /* color='#0A1A2E' */ color='primary' sx={{fontSize: '0.9rem'}}>{technologies}</Typography>
                <Typography /* color='#0A1A2E' */ color='primary'>{role}</Typography>
                </Grid>
                <Grid item >
                  <a href={github} target="_blank" rel="noopener noreferrer" sx={style.icon}> <GitHubIcon color='secondary'/></a>
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
