import Container from '@mui/material/Container'
import HomeBar from './HomeBar/HomeBar'
import HomeContent from './HomeContent/HomeContent'
import HomeCarousel from './HomeCarousel/HomeCarousel'
import HomeFooter from './HomeContent/HomeFooter/HomeFooter'

function Home() {
  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{
        height: '100vh',
        gap:  2
      }}
    >
      <HomeBar />
      <HomeCarousel />
      <HomeContent />
    </Container>
  )
}

export default Home