import { Box } from '@mui/material'
import DirectionMap from './DirectionMap/DirectionMap'
import LogoFooter from './LogoFooter/LogoFooter'
import AboutUs from './AboutUs/AboutUs'

function HomeFooter() {
  return (
    <Box
      sx={{
        width: "100%",
        marginTop: '32px'
      }}
    >
      <DirectionMap />
      <LogoFooter />
      <AboutUs />
    </Box>
  )
}

export default HomeFooter