import React from "react";
import { Box, Grid } from "@mui/material";
import ArrowDown from "../Components/ArrowDown/ArrowDown";

const Contact = () => {
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
          sx={{ borderStyle: "dotted", borderColor: "yellow", height: "85vh" }}
        ></Grid>
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
