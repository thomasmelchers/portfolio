import React, { useState } from 'react'
import { Grid, Button } from "@mui/material"
import { useSwipeable } from 'react-swipeable';

import Card from "./Card";
import ModalProjects from "./ModalProjects"

import { projectsData } from "../../Data/Data";

const Carrousel = () => {

const [currentIndex, setCurrentIndex] = useState(0)
const [isOpen, setIsOpen] = useState(false)

const isLastSlide = currentIndex === projectsData.length -1
const isFirstSlide = currentIndex === 0

const handleNext = () => {
    setCurrentIndex((prevIndex) => ((isLastSlide)?  0 : prevIndex + 1))
}

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (isFirstSlide? projectsData.length -1 : prevIndex - 1))
  }

  const slideBefore = () => {
    const slideNb = isLastSlide? 0 : currentIndex + 1 
    return slideNb
  }

  const slideNext = () => {
    const slideNb = isFirstSlide? projectsData.length -1 : currentIndex -1
    return slideNb
  }

  //SWIPEABLE
  const handleSwipeLeft = () => {
    handleNext();
  };

  const handleSwipeRight = () => {
    handlePrev();
  };

  const handlers = useSwipeable({
    onSwipedLeft: handleSwipeLeft,
    onSwipedRight: handleSwipeRight
  });

  // CARROUSEL DISPLAY CARD
  const cardLeft = { transform: "translateX(-5%) scale(0.5)", transition: "500ms", opacity: 0.3, backgroundColor: "yellow", width: "20vw" }
  const cardRight = { transform: "translateX(5%) scale(0.5)", transition: "500ms", opacity: 0.3, backgroundColor: "white", width: "20vw" }
  return (
    <div {...handlers}>
      <Grid container alignItem="center" sx={{ height: "100%" }}>
        <Grid
          container
          justifyContent="flex-start"
          alignItems="center"
          item
          display={{ xs: "none", md: "flex" }}
          md={1}
        >
          <Button onClick={handlePrev}>Prev</Button>
        </Grid>


        <Grid container alignItems="center" item xs={12} md={10}>
            <Grid item md={3} display={{ xs: "none", md: "flex" }} sx={cardLeft}>
                <Card data={projectsData[slideNext()]} />
            </Grid>

            <Grid item xs={12} md={6} onClick={() => setIsOpen(true)} sx={{cursor: "pointer",}}>
                <Card data={projectsData[currentIndex]}/>
            </Grid>

            <Grid item md={3} display={{ xs: "none", md: "flex" }} sx={cardRight}>
                <Card data={projectsData[slideBefore()]} />
            </Grid>
        </Grid>

        <Grid
          container
          justifyContent="flex-end"
          alignItems="center"
          item
          display={{ xs: "none", md: "flex" }}
          md={1}
        >
          <Button onClick={handleNext}>Next</Button>
        </Grid>
      </Grid>
      <ModalProjects isOpen={isOpen} setIsOpen={setIsOpen} data={projectsData[currentIndex]}/>
    </div>
  );
}

export default Carrousel