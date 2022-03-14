import React from 'react'
import { IconButton } from '@mui/material'
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';

const ArrowDown = () => {
  return (
    <IconButton>
        <ArrowBackIosNewOutlinedIcon style={{transform: 'rotate(-90deg)', color:'white', fontSize: '4rem' }}/>
    </IconButton>
  )
}

export default ArrowDown