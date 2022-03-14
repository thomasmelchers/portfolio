import React, {useState} from 'react'

import { AppBar, IconButton, Toolbar, Box, Typography, Tooltip, Menu, MenuItem, Modal } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from 'react-router-dom';
import ModalMenuItem from "./ModalMenuItem";

const Navbar = () => {
    const pages = ["Home", "About Me", "Skills", "Works", "Contact"];

  // HANDLING THE MENU MODAL
  const [open, setOpen] = useState(false)
  const openMenuItem = (event) => {
    setOpen(true)
  }
  const closeMenuItem = () => {
    setOpen(false)
  }

  return (
    <header>
      <AppBar elevation={0} sx={{ background: "none", borderStyle: 'dotted' }}>
        <Toolbar style={{ width: "80%", margin: "0 auto" }}>
          <Link to="/" style={{ textDecoration: "none", flexGrow: 1 }}>
            <Typography
              sx={{
                fontFamily: "Pacifico",
                fontSize: {xs: '2rem', lg: "2.5rem"},
                color: "white",
                textAlign: "left"
              }}
            >
              Thomas{" "}
              <span style={{ color: "red", fontFamily: "Pacifico" }}>
                Melchers
              </span>{" "}
            </Typography>
          </Link>

          <Box sx={{ display: { xs: "none", lg: "flex" } }}>
            {pages.map((page) => (
              <Box key={page} ml={3}>
                {/* <Link to="" style={{ textDecoration: "none", marginLeft: 2 }}> */}
                  <Typography
                    style={{
                      /* fontFamily: "Fredoka", */
                      fontSize: "1.7rem",
                      fontWeight: "650",
                      color: "white",
                    }}
                  >
                    {page}
                  </Typography>
                {/* </Link> */}
              </Box>
            ))}
          </Box>

          <Box sx={{ display: { xs: "flex", lg: "none" } }}>
            <Tooltip title='Open settings'>
              <IconButton onClick={openMenuItem} >
                <MenuIcon style={{color: 'white', fontSize: '2rem', fontWeight: '500'}} />
              </IconButton>
            </Tooltip>

              <ModalMenuItem open={open} closeMenuItem={closeMenuItem} pages={pages}/> 
           
          </Box>
        </Toolbar>
      </AppBar>
    </header>
  )
}

export default Navbar