import React from "react";
import { Button } from "@mui/material";

const Btn = ({ buttonName, type, size, color, mt, onClick }) => {
  return (
    <Button variant="outlined" onClick={onClick} type={type} size={size} >
      {buttonName}
    </Button>
  );
};

export default Btn;
