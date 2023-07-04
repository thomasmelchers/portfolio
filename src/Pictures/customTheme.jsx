import { createTheme } from '@mui/material'
import { red } from '@mui/material/colors'


const primaryColor = '#CCD7F5' // grey
const secondaryColor = '#FFC900' // yellow
const thirdColor = '#0A1A2E' // navy for background
// const fourthColor = '#FFF89A' // light yellow
const dangerColor = red[900]

const customTheme = createTheme({
    palette:{
        primary: {
            main: primaryColor,
        },
    
        secondary: {
            main: secondaryColor,
        },
        tertiary: {
            main: thirdColor,
        },
        error: {
            main: dangerColor
        }
    },

    typography: {
        fontFamily: 
            ['Nunito', 'sans-serif'].join(',')
    }
})

export default customTheme