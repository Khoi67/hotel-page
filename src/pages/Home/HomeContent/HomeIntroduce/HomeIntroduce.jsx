import {
  Box,
  Typography,
  Container,
  Divider,
  Card,
  CardContent,
  CardMedia,
  Button,
  Grid,
} from "@mui/material";
import BedroomParentIcon from "@mui/icons-material/BedroomParent";
import VerticalTabs from "./VerticalTab/VerticalTabs";
import useMediaQuery from "@mui/material/useMediaQuery";
import Reviewer from "../Reviewer/Reviewer";
import FAQ from "./FAQ/FAQ";
import Moments from "./Moments/Moments";

function HomeIntroduce() {
  const matches = useMediaQuery("(min-width:800px)");

  return (
    <Box  
      sx={{
        width: "100%",
      }}
    >
      <Container>
        <Typography
          variant="h3"
          sx={{
            color: "#D8003B",
            padding: "26px",
            textAlign: "center",
          }}
        >
          PARKROYAL Saigon Welcomes You
        </Typography>
        <Divider
          sx={{
            marginBottom: "26px",
          }}
        />
        <Typography
          sx={{
            textAlign: "justify",
            fontSize: "1rem !important",
            marginBottom: "26px",
          }}
        >
          One of the most dynamic destinations in Asia, Ho Chi Minh City is an
          alluring mix of old-world charm and bustling modernism – where
          beautiful French colonial architecture nestles comfortably amidst
          gleaming skyscrapers and modern landmarks. Be it sampling the street
          food at a local market or learning about the city’s revolutionary
          past, explore the heart and soul of Ho Chi Minh City and experience
          the warm hospitality that the Vietnamese are renowned for.
          <br />A mere five minutes away from Tan Son Nhat International
          Airport, the PARKROYAL Saigon Hotel in Ho Chi Minh City is the epitome
          of convenience and comfort. Located at the Tan Binh District, our
          hotel near Tan Son Nhat Airport also offers direct access to renowned
          attractions such as the Ben Thanh Market, Cu Chi Tunnels, Mekong Delta
          and Reunification Palace. For things to do in Saigon, simply approach
          our friendly PARKROYAL people, who will be more than happy to share
          their knowledge of Ho Chi Minh City.
        </Typography>
        <Typography variant="h4" marginBottom={"16px"}>
          View Our Offers
        </Typography>
        {!matches ? (
          <Grid container spacing={3} justifyContent={"center"}>
            <Grid item sx={3}>
              <Card sx={{ maxWidth: 350, backgroundColor: "#efeff2" }}>
                <CardContent sx={{ height: "200px" }}>
                  <Typography
                    gutterBottom
                    variant="h7"
                    component="div"
                    color={"#D8003B"}
                    sx={{
                      display: "flex",
                      gap: 1,
                      marginBottom: "16px",
                    }}
                  >
                    <BedroomParentIcon />
                    ROOMS AND SUITES
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "24px !important",
                      marginBottom: "10px",
                    }}
                  >
                    Live it Up with Club
                  </Typography>
                  <Typography>
                    Up to 30% off on Club Rooms and Suites
                  </Typography>
                </CardContent>
                <Box position={"relative"}>
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    height="250"
                    image="https://www.panpacific.com/content/dam/pphg-revamp/en/global/offers/live-it-up-with-club/2024-march/live_it_up_with_club_masthead.jpg"
                  />
                  <Button
                    sx={{
                      color: "white",
                      border: "1px solid #d8003b",
                      backgroundColor: "#d8003b",
                      "&:hover": {
                        opacity: "0.8",
                        color: "white",
                        border: "1px solid #d8003b",
                        backgroundColor: "#d8003b",
                      },
                      position: "absolute",
                      bottom: "32px",
                      left: "24px",
                      right: "24px",
                      padding: "10px 15px",
                    }}
                    variant="outlined"
                  >
                    MORE DETAILS
                  </Button>
                </Box>
              </Card>
            </Grid>
            <Grid item sx={3}>
              <Card sx={{ maxWidth: 350, backgroundColor: "#efeff2" }}>
                <CardContent sx={{ height: "200px" }}>
                  <Typography
                    gutterBottom
                    variant="h7"
                    component="div"
                    color={"#D8003B"}
                    sx={{
                      display: "flex",
                      gap: 1,
                      marginBottom: "16px",
                    }}
                  >
                    <BedroomParentIcon />
                    ROOMS AND SUITES
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "24px !important",
                      marginBottom: "10px",
                    }}
                  >
                    The Solar and Storage Live Vietnam 2024
                  </Typography>
                  <Typography>
                    Make your stay an unforgettable one with PARKROYAL SaiGon
                    exclusive offer.
                  </Typography>
                </CardContent>
                <Box position={"relative"}>
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    height="250"
                    image="https://www.panpacific.com/content/dam/pphg-revamp/en/prygn/offers/detail/prygn-offer-high-tea-staycation-hero-m.jpg"
                  />
                  <Button
                    sx={{
                      color: "white",
                      border: "1px solid #d8003b",
                      backgroundColor: "#d8003b",
                      "&:hover": {
                        opacity: "0.8",
                        color: "white",
                        border: "1px solid #d8003b",
                        backgroundColor: "#d8003b",
                      },
                      position: "absolute",
                      bottom: "32px",
                      left: "24px",
                      right: "24px",
                      padding: "10px 15px",
                    }}
                    variant="outlined"
                  >
                    MORE DETAILS
                  </Button>
                </Box>
              </Card>
            </Grid>
            <Grid item sx={3}>
              <Card sx={{ maxWidth: 350, backgroundColor: "#efeff2" }}>
                <CardContent sx={{ height: "200px" }}>
                  <Typography
                    gutterBottom
                    variant="h7"
                    component="div"
                    color={"#D8003B"}
                    sx={{
                      display: "flex",
                      gap: 1,
                      marginBottom: "16px",
                    }}
                  >
                    <BedroomParentIcon />
                    ROOMS AND SUITES
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "24px !important",
                      marginBottom: "10px",
                    }}
                  >
                    30 Days Advance Purchase
                  </Typography>
                  <Typography>
                    Comfortable accommodations, access to the hotel business
                    center, and meeting facilities equipped with
                    state-of-the-art technology.
                  </Typography>
                </CardContent>
                <Box position={"relative"}>
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    height="250"
                    image="https://www.panpacific.com/content/dam/pphg-revamp/en/prsgn/offers/detail/prsgn-future-energy-show-2022-hero-m.jpg"
                  />
                  <Button
                    sx={{
                      color: "white",
                      border: "1px solid #d8003b",
                      backgroundColor: "#d8003b",
                      "&:hover": {
                        opacity: "0.8",
                        color: "white",
                        border: "1px solid #d8003b",
                        backgroundColor: "#d8003b",
                      },
                      position: "absolute",
                      bottom: "32px",
                      left: "24px",
                      right: "24px",
                      padding: "10px 15px",
                    }}
                    variant="outlined"
                  >
                    MORE DETAILS
                  </Button>
                </Box>
              </Card>
            </Grid>
          </Grid>
        ) : (
          <Grid container spacing={3}>
            <Grid item sx={3}>
              <Card sx={{ maxWidth: 350, backgroundColor: "#efeff2" }}>
                <CardContent sx={{ height: "200px" }}>
                  <Typography
                    gutterBottom
                    variant="h7"
                    component="div"
                    color={"#D8003B"}
                    sx={{
                      display: "flex",
                      gap: 1,
                      marginBottom: "16px",
                    }}
                  >
                    <BedroomParentIcon />
                    ROOMS AND SUITES
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "24px !important",
                      marginBottom: "10px",
                    }}
                  >
                    Live it Up with Club
                  </Typography>
                  <Typography>
                    Up to 30% off on Club Rooms and Suites
                  </Typography>
                </CardContent>
                <Box position={"relative"}>
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    height="250"
                    image="https://www.panpacific.com/content/dam/pphg-revamp/en/global/offers/live-it-up-with-club/2024-march/live_it_up_with_club_masthead.jpg"
                  />
                  <Button
                    sx={{
                      color: "white",
                      border: "1px solid #d8003b",
                      backgroundColor: "#d8003b",
                      "&:hover": {
                        opacity: "0.8",
                        color: "white",
                        border: "1px solid #d8003b",
                        backgroundColor: "#d8003b",
                      },
                      position: "absolute",
                      bottom: "32px",
                      left: "24px",
                      right: "24px",
                      padding: "10px 15px",
                    }}
                    variant="outlined"
                  >
                    MORE DETAILS
                  </Button>
                </Box>
              </Card>
            </Grid>
            <Grid item sx={3}>
              <Card sx={{ maxWidth: 350, backgroundColor: "#efeff2" }}>
                <CardContent sx={{ height: "200px" }}>
                  <Typography
                    gutterBottom
                    variant="h7"
                    component="div"
                    color={"#D8003B"}
                    sx={{
                      display: "flex",
                      gap: 1,
                      marginBottom: "16px",
                    }}
                  >
                    <BedroomParentIcon />
                    ROOMS AND SUITES
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "24px !important",
                      marginBottom: "10px",
                    }}
                  >
                    The Solar and Storage Live Vietnam 2024
                  </Typography>
                  <Typography>
                    Make your stay an unforgettable one with PARKROYAL SaiGon
                    exclusive offer.
                  </Typography>
                </CardContent>
                <Box position={"relative"}>
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    height="250"
                    image="https://www.panpacific.com/content/dam/pphg-revamp/en/prygn/offers/detail/prygn-offer-high-tea-staycation-hero-m.jpg"
                  />
                  <Button
                    sx={{
                      color: "white",
                      border: "1px solid #d8003b",
                      backgroundColor: "#d8003b",
                      "&:hover": {
                        opacity: "0.8",
                        color: "white",
                        border: "1px solid #d8003b",
                        backgroundColor: "#d8003b",
                      },
                      position: "absolute",
                      bottom: "32px",
                      left: "24px",
                      right: "24px",
                      padding: "10px 15px",
                    }}
                    variant="outlined"
                  >
                    MORE DETAILS
                  </Button>
                </Box>
              </Card>
            </Grid>
            <Grid item sx={3}>
              <Card sx={{ maxWidth: 350, backgroundColor: "#efeff2" }}>
                <CardContent sx={{ height: "200px" }}>
                  <Typography
                    gutterBottom
                    variant="h7"
                    component="div"
                    color={"#D8003B"}
                    sx={{
                      display: "flex",
                      gap: 1,
                      marginBottom: "16px",
                    }}
                  >
                    <BedroomParentIcon />
                    ROOMS AND SUITES
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "24px !important",
                      marginBottom: "10px",
                    }}
                  >
                    30 Days Advance Purchase
                  </Typography>
                  <Typography>
                    Comfortable accommodations, access to the hotel business
                    center, and meeting facilities equipped with
                    state-of-the-art technology.
                  </Typography>
                </CardContent>
                <Box position={"relative"}>
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    height="250"
                    image="https://www.panpacific.com/content/dam/pphg-revamp/en/prsgn/offers/detail/prsgn-future-energy-show-2022-hero-m.jpg"
                  />
                  <Button
                    sx={{
                      color: "white",
                      border: "1px solid #d8003b",
                      backgroundColor: "#d8003b",
                      "&:hover": {
                        opacity: "0.8",
                        color: "white",
                        border: "1px solid #d8003b",
                        backgroundColor: "#d8003b",
                      },
                      position: "absolute",
                      bottom: "32px",
                      left: "24px",
                      right: "24px",
                      padding: "10px 15px",
                    }}
                    variant="outlined"
                  >
                    MORE DETAILS
                  </Button>
                </Box>
              </Card>
            </Grid>
          </Grid>
        )}
        <Typography variant="h4" marginBottom={"16px"} marginTop={"16px"}>
          Discover Our Rooms and Suits
        </Typography>
      </Container>
      <VerticalTabs />
      <Reviewer />
      <Moments />
      <FAQ />
    </Box>
  );
}

export default HomeIntroduce;
