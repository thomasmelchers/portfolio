import React from "react";
import {
  Grid,
  CardMedia,
  Card,
  CardContent,
  Typography,
} from "@mui/material";

import GitHubIcon from "@mui/icons-material/GitHub";
/* import LaunchIcon from "@mui/icons-material/Launch"; */


const style = {
  root: {
    width: "100%",
    height: "60vh",
    border: "2px solid #CCD7F5",
    borderRadius: "8px",
  },
  icon: {
    textDecoration: "none",
  },
};


const CardWork = ({ data }) => {


  const { id, projectName, image, technologies, github, url, role, status } = data

      return (
        <Card
          sx={{
            border: "2px solid #CCD7F5",
            borderRadius: "8px",
            width: "100%",
            height: "60vh",
          }}
        >
          <CardMedia
            component="img"
            image={image}
            alt={projectName}
            sx={{
                height: "100%",
                borderRadius: "8px 8px 0 0",
            }}
          />
          <CardContent
            sx={{
              height: { xs: "45%", lg: "53%" },
              /* backgroundColor: "#CCD7F5" */ backgroundColor: "#0A1A2E",
            }}
          >
            <Grid
              container
              direction="column"
              justifyContent="space-around"
              sx={{ height: "10%" }}
            >
              <Grid item>
                <h3
                  color="secondary"
                  sx={{ textTransform: "uppercase", fontWeight: 600 }}
                >
                  {projectName}
                </h3>
              </Grid>
              
            </Grid>
          </CardContent>
        </Card>
      );
    }
  
  // return <>{display}</>;


export default CardWork;
