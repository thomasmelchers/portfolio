import React, {useState} from 'react'
import { AppBar, IconButton, Toolbar, Box, Typography, Tooltip, Menu, MenuItem, Modal } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
/* import ModalMenuItem from "./ModalMenuItem"; */

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
    <div></div>
  )
}

export default Navbar