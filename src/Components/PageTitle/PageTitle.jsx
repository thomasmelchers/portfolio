import React from 'react'
import { Typography } from '@mui/material'

const PageTitle = ({numberTitle, pageTitle}) => {
  return (
    <Typography variant='h4' color='primary'> <span style={{color: '#FFC900', marginRight: 25, fontSize: '1.7rem'}}> {numberTitle}</span>{pageTitle}</Typography>
  )
}

export default PageTitle