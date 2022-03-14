import React from "react";
import { Modal, Typography, Box } from "@mui/material";

const ModalMenuItem = ({ open, closeMenuItem, pages }) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: '80%',
    height: '80%',
    bgcolor: "background.paper",
    border: "2px solid #000",
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
    color: 'green'
  }

  return (
    <Modal
      open={open}
      onClose={closeMenuItem}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
            <Box>
              <Typography style={closeStyle} onClick={closeMenuItem}>+</Typography>
          </Box>
      {pages.map((page) => (
          
          <Box key={page} style={{height: '20%', borderBottom: 'solid green'}} display='flex' justifyContent='center' alignItems='center'>
              <Typography  id="modal-modal-title" variant="h6" component="h2" textAlign='center'>
              {page}
              </Typography>
              </Box>
            ))}

        
        
      </Box>
    </Modal>
  );
};

export default ModalMenuItem;
