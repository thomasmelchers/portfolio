import React from 'react'
import { IconButton } from '@mui/material'
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';

const ArrowDown = () => {
  return (
    <IconButton>
        <ArrowBackIosNewOutlinedIcon color='primary' style={{transform: 'rotate(-90deg)', fontSize: '4rem' }}/>
    </IconButton>
  )
}

export default ArrowDown