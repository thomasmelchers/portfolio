import React from "react";
import { Modal, Typography, Box } from "@mui/material";

const ModalMenuItem = ({ open, closeMenuItem, pages }) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: '50%',
    height: '50%',
    bgcolor: "#CCD7F5",
    border: "2px solid #FFC900",
    borderRadius: 8,
    boxShadow: 24,
    p: 4,
    px: 10
  };

  const closeStyle = {
    fontWeight: '800',
    fontSize: '2rem',
    cursor: 'pointer',
    transform: 'rotate(45deg)',
    position: 'absolute',
    top: '1%',
    right: '4%',
  }

  return (
    <Modal
      open={open}
      onClose={closeMenuItem}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      backgroundColor='primary'
    >
      <Box sx={style}>
            <Box>
              <Typography color='secondary' style={closeStyle} onClick={closeMenuItem}>+</Typography>
          </Box>
      {pages.map((page) => (
          
          <Box key={page} style={{height: '20%', borderBottom: 'solid #FFC900'}} display='flex' justifyContent='center' alignItems='center'>
              <Typography id="modal-modal-title" variant="h6" component="h2" textAlign='center' sx={{color:'#0A1A2E', fontWeight:'500', fontSize:'1.5rem'}}>
              {page}
              </Typography>
              </Box>
            ))}

        
        
      </Box>
    </Modal>
  );
};

export default ModalMenuItem;
