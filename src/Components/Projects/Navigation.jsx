import React from 'react'

const navigation = {
    caroussel: {
        width: "100%",
        height: "auto",
        listStyle: "none",
        display: "flex",
        justifyContent: "center",
        marginTop: "1rem",
        paddingInlineStart: 0,
    },
    bullet: {
        width: "15px",
        height: "15px",
        borderRadius: "50%",
        backgroundColor: "#CCD7F5",
        margin: "0 0.5rem",
        cursor: "pointer",
        
    },
    bulletActive: {
        backgroundColor: '#FFC900',
    }
}

const Navigation = ({ totalSlides, currentSlide, onBulletClick }) => {
    const bullets = Array.from(Array(totalSlides).keys())
  
    return (
    <ul style={navigation.caroussel}>
      {bullets.map((index) => (
        <li
          key={index}
          style={currentSlide === index
            ? { ...navigation.bullet, ...navigation.bulletActive }
            : navigation.bullet}
          onClick={() => onBulletClick(index)}
        />
      ))}
    </ul>
  )
}

export default Navigation