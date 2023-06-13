import React from "react";
import { Button } from "@mui/material";

const Btn = ({ variant, buttonName, type, size, color, mt, onClick }) => {
  return (

    <Button variant={variant} onClick={onClick} type={type} size={size} color='secondary'>
      {buttonName}
    </Button>
    
  );
};

export default Btn;
