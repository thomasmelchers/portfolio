import React, { useState } from 'react'
import { Box, Grid, Button, Collapse } from "@mui/material"

import Card from "../Card/Card";

import { projectsData } from "../../Data/Data";

const Carrousel = () => {

const [currentIndex, setCurrentIndex] = useState(0);
const isLastSlide = currentIndex === projectsData.length -1
const isFirstSlide = currentIndex === 0

const handleNext = () => {
    setCurrentIndex((prevIndex) => ((isLastSlide)?  0 : prevIndex + 1))
}

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (isFirstSlide? projectsData.length -1 : prevIndex - 1))
  }

  const slideBefore = () => {
    const slideNb = isFirstSlide? projectsData.length -1 : currentIndex -1
    return slideNb
  }

  const slideNext = () => {
    const slideNb = isLastSlide? 0 : currentIndex + 1 
    return slideNb
  }



  const cardActive = {

  }

  const cardLeft = { transform: "translateX(-30%) scale(0.8)", transition: "500ms", opacity: 0.3, backgroundColor: "yellow" }
  const cardRight = { transform: "translateX(30%) scale(0.8)", transition: "500ms", opacity: 0.3, backgroundColor: "white" }
  return (
    <Grid container alignItem="center" sx={{height: "100%"}}>
        <Grid container justifyContent="flex-start" alignItems="center" item display={{xs: "none", md: "flex"}} md={2}>
            <Button onClick={handlePrev}>Prev</Button>
        </Grid>
        <Grid container justifyContent="center" alignItems="center" item md={8} >
            {/* sx={{position: "relative"}} */}
            <Box display="flex" justifyContent="space-around" sx={{objectFit: "cover"}}>
                {/* position: "absolute", */}

                <Box display={{xs: "none", md: "flex"}} sx={cardLeft}>
                    <Card data={projectsData[slideBefore()]} />
                </Box>
                <Box>
                    <Card data={projectsData[currentIndex]} />
                </Box>
                <Box display={{xs: "none", md: "flex"}} sx={cardRight}>
                    <Card data={projectsData[slideNext()]} />
                </Box>

            </Box>
        </Grid>
        <Grid container justifyContent="flex-end" alignItems="center" item display={{xs: "none", md: "flex"}} md={2}>
        <Button onClick={handleNext}>Next</Button>
        </Grid>
    </Grid>
  )
}

export default Carrousel