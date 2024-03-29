import React, { useState, useEffect } from 'react'

import { AppBar, IconButton, Toolbar, Box, Typography, Tooltip } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import {Link} from 'react-scroll'
import ModalMenuItem from "./ModalMenuItem";

const Navbar = () => {
    const pages = ["Home", "About Me", "Experience", "Projects", "Contact"];

  // HANDLING THE MENU MODAL
  const [open, setOpen] = useState(false)
  const openMenuItem = (event) => {
    setOpen(true)
  }
  const closeMenuItem = () => {
    setOpen(false)
  }

  // HANDLING NAVBAR SCROLL

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header>
      <AppBar elevation={0}  sx={{ background: scrolled? "#FFC900"  : "none", opacity:  scrolled? 0.9  : "none"}}>
        <Toolbar style={{ width: "80%", margin: "0 auto" }}>
          <Link to="Home" spy={true} smooth={true} offset={-100} duration={500} style={{ textDecoration: "none", flexGrow: 1, cursor: 'pointer' }}>
            <Typography color={scrolled? '#0A1A2E' : 'secondary'  }
              sx={{
                fontFamily: "Pacifico",
                fontSize: {xs: '2rem', lg: "2.5rem"},
                textAlign: "left"
              }}
            >
              TM{" "}
              {/* <span style={{color: '#FFC900', fontFamily: "Pacifico" }}>
                M
              </span>{" "} */}
            </Typography>
          </Link>

          <Box sx={{ display: { xs: "none", lg: "flex" } }}>
            {pages.map((page) => (
              <Box key={page} ml={3}>
                <Link to={page} spy={true} smooth={true} offset={0} duration={500} style={{ textDecoration: "none", marginLeft: 2, cursor: 'pointer' }}>
                  <Typography
                    color={scrolled? "#0A1A2E"  : "primary"}
                    sx={{
                      /* fontFamily: "Fredoka", */
                      fontSize: "1.1rem",
                      fontWeight: "800",
                      transition: "0.5s",
                      '&:hover':{
                        color: scrolled? "white"  : "secondary.main",
                        transform: 'scale(1.2)',
                        borderBottom: '3px solid #FFC900'
                      }
                    }}
                  >
                    {page}
                  </Typography>
                </Link>
              </Box>
            ))}
          </Box>

          <Box sx={{ display: { xs: "flex", lg: "none" } }}>
            <Tooltip title='Open settings'>
              <IconButton onClick={openMenuItem} >
                <MenuIcon color= {scrolled? '#0A1A2E' : 'primary'} sx={{fontSize: '2rem', fontWeight: '500'}} />
              </IconButton>
            </Tooltip>

              <ModalMenuItem open={open} closeMenuItem={closeMenuItem} pages={pages}/> 
           
          </Box>
          {/* <Box display='flex' justifyContent='flex-end' ml={5} sx={{mt:{xs: 0, lg: 2}}}>
            <a href='./resume.pdf' download style={{textDecoration: 'none'}}><Button variant={'outlined'} size={'large'} buttonName={'RESUME'}></Button></a>
            </Box> */}
        </Toolbar>
      </AppBar>
    </header>
  )
}

export default Navbar