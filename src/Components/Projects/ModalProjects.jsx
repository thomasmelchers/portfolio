import React from 'react'
import { Modal, Box, Grid, Typography } from "@mui/material"

import Technologies from "../Shared/Technologies/Technologies"
import ContentProject from './ContentProject';
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkIcon from '@mui/icons-material/Link';

const ModalProjects = ({isOpen, setIsOpen, data}) => {

    const { id, projectName, image, description, technologies, github, url, role, tasks, status } = data
    console.log(data)
  return (
    <Modal
      open={isOpen}
      onClose={() => setIsOpen(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: { xs: "100%", md: "75%" },
          height: { xs: "auto", md: "75%" },
          bgcolor: "#0A1A2E",
          border: "2px solid #FFC900",
          borderRadius: "10px",
          boxShadow: 24,
          overflow: {md: "scroll"},
          p: 2,
        }}
      >
        <Grid container justifyContent="center" height="auto" >
          <Grid item xs={12}>
            <Box
              display="flex"
              justifyContent="flex-end"
              pt={-1}
              pr={1}
              sx={{ width: "100%" }}
            >
              <Typography
                onClick={() => setIsOpen(false)}
                sx={{
                  transform: "rotate(45deg)",
                  fontWeight: "800",
                  fontSize: "2rem",
                  color: "#FFC900",
                  // position: "absolute",
                  // top: {xs: "-1%", md: "-3%"},
                  // right: {xs: "5%", md: "1%"},
                  cursor: "pointer",
                }}
              >
                +
              </Typography>
            </Box>

            <Grid item xs={12}>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    width: "80%",
                    height: {xs: "auto", md: "30vh"},
                  }}
                >
                  <img
                    src={image}
                    alt={projectName}
                    // style={{ width: "auto", height: "100%" }}
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>
              </div>
            </Grid>

            <Grid item xs={12} mt={4}>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    
                    width: "80%",
                    height: { xs: "auto", md: "40vh" },
                  }}
                >
                  <div>
                    <Typography variant="h2" color="primary">{projectName}</Typography>
                  </div>

                  <div style={{marginTop: "1.5rem"}}>
                    <ContentProject description="Roles" content={role} />
                    
                  </div>

                  <div style={{marginTop: "1rem"}}>
                  <ContentProject description="Tasks" content={tasks} />
                  </div>

                  <div style={{marginTop: "1.5rem"}}>
                    {/* <span style={{color: "#616775", fontSize: "1.5rem", marginBottom: "1rem"}}>Project's description:</span> */}
                    <Typography color="primary" sx={{textAlign: "justify"}}>{description}</Typography>
                  </div>

                  <Box sx={{marginTop: 3}}>
                    <Technologies technologies={technologies} />
                  </Box>

                  <div>
                    
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "flex-end",
                        }}
                      >
                      <a
                      href={github}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "none" }}
                    >
                        <Box
                          color="#0A1A2E"
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            padding: "5px 20px",
                            borderRadius: "30px",
                            backgroundColor: "#CCD7F5",
                            margin: "10px",
                            transition: "0.5s ease",
                            "&:hover":{
                              backgroundColor: "#0A1A2E",
                              color:"#FFC900",
                              border: "1px solid #FFC900"
                            }
                          }}
                        >
                          <GitHubIcon
                            
                            fontSize="large"
                            sx={{ marginRight: "0.5rem" }}
                          />
                          <Typography >Github</Typography>
                        </Box>
                        </a>

                      {(url !== "")? (
                        <a
                        href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "none" }}
                        >
                        <Box
                          color="#0A1A2E"
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            padding: "5px 20px",
                            borderRadius: "30px",
                            backgroundColor: "#FFC900",
                            margin: "10px",
                            transition: "0.5s ease",
                            "&:hover":{
                              backgroundColor: "#0A1A2E",
                              color:"#FFC900",
                              border: "1px solid #FFC900"
                            }
                          }}
                        >
                          <LinkIcon
                            // color="tertiary"
                            fontSize="large"
                            sx={{ marginRight: "0.5rem" }}
                          />
                          <Typography  sx={{fontWeight: 600}}>Go Live</Typography>
                        </Box></a>) : null }
                      </div>
                    
                  </div>
                </Box>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
}

export default ModalProjects