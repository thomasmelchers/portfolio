import React from 'react'
import { IconButton } from '@mui/material'
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';

const ArrowUp = () => {
  return (
    <IconButton>
        <ArrowBackIosNewOutlinedIcon color='primary' sx={{transform: 'rotate(90deg)', fontSize: '4rem', '&:hover':{
                        color: 'secondary.main'} }}/>
    </IconButton>
  )
}

export default ArrowUp