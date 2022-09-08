import { Box, stepClasses, Typography } from '@mui/material'
import React from 'react'

const expStyle = {
    width: {xs: "80%", md: "50%"},
    padding: '20px',
    borderRadius: "10px",
    backgroundColor: '#1B467A',
    margin: {xs: '10px', md: '30px'},
    transition: '0.8s',
    '&:hover':{
        transform: 'translate(-10px, -10px)',
        boxShadow: '10px 5px 5px #FFC90080'
    }
  }


  const titleStyle = {
    textTransform: 'uppercase',
    fontSize: '1.5rem',
    fontWeight: '600',
    
  }

  const timeStyle = {
    marginBottom: '10px'
  }

  const descriptionStyle = {
    fontSize: '1rem',
    textAlign: 'justify'

  }

const NewExperience = ({title, description, time}) => {
  return (
    <Box sx={expStyle} >
        <Typography color='primary' sx={titleStyle}>{title}</Typography>
        <Typography color='secondary' sx={timeStyle}>Brussels | {time}</Typography>
        <Typography color='primary' sx={descriptionStyle}>{description}</Typography>
    </Box>
  )
}

export default NewExperience