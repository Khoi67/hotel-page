import { Box, Button, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import XIcon from "@mui/icons-material/X";

function AboutUs() {
  return (
    <Box
      sx={{
        marginTop: "32px",
        backgroundColor: "#efeff2",
      }}
    >
      <Container>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={3}>
            <Grid xs={4}>
              <List
                sx={{
                  width: "100%",
                }}
              >
                <ListItemText>
                  <Typography
                    variant="h6"
                    color={"#d8003b"}
                    marginBottom={"10px"}
                  >
                    About Us
                  </Typography>
                  <Typography>
                    <a href="">Group Homepage</a>
                  </Typography>
                  <Typography>
                    <a href="">About Us</a>
                  </Typography>
                  <Typography>
                    <a href="">Our Culture and Commitment</a>
                  </Typography>
                  <Typography>
                    <a href="">Corporate Responsibility</a>
                  </Typography>
                  <Typography>
                    <a href="">Development Opportunities</a>
                  </Typography>
                  <Typography>
                    <a href="">Newsroom</a>
                  </Typography>
                  <Typography>
                    <a href="">Awards and Accolades</a>
                  </Typography>
                  <Typography>
                    <a href="">Careers</a>
                  </Typography>
                </ListItemText>
              </List>
            </Grid>
            <Grid xs={4}>
              <List
                sx={{
                  width: "100%",
                }}
              >
                <ListItemText>
                  <Typography
                    variant="h6"
                    color={"#d8003b"}
                    marginBottom={"10px"}
                  >
                    Contact Us
                  </Typography>
                  <Typography>
                    309B-311 Nguyen Van Troi Street, Tan Binh District, Ho Chi
                    Minh City, Vietnam
                  </Typography>
                  <Typography>
                    Telephone:{" "}
                    <a
                      href="tel:+84%2028%203842%201111"
                      style={{ color: "#d8003b", textDecoration: "underline" }}
                    >
                      +84 28 3842 1111
                    </a>
                  </Typography>
                  <Typography>
                    Toll-free:{" "}
                    <a
                      href="tel:120 32 199"
                      style={{ color: "#d8003b", textDecoration: "underline" }}
                    >
                      120 32 199
                    </a>
                  </Typography>
                  <Typography>Fax: +84 28 3842 4365</Typography>
                  <Typography>
                    Email:{" "}
                    <a
                      href="mailto:enquiry.prsgn@parkroyalhotels.com"
                      style={{ color: "#d8003b", textDecoration: "underline" }}
                    >
                      enquiry.prsgn@parkroyalhotels.com
                    </a>
                  </Typography>
                </ListItemText>
              </List>
            </Grid>
            <Grid xs={4}>
              <List
                sx={{
                  width: "100%",
                }}
              >
                <ListItemText>
                  <Typography
                    variant="h6"
                    color={"#d8003b"}
                    marginBottom={"10px"}
                  >
                    Sign Up for Our Newsletter
                  </Typography>
                  <Typography>
                    Be the first to know about our exclusive deals.
                  </Typography>
                  <Button
                    sx={{
                      color: "white",
                      border: "1px solid #d8003b",
                      backgroundColor: "#d8003b",
                      "&:hover": {
                        border: "#d8003b",
                        backgroundColor: "white",
                        color: "#d8003b",
                      },
                      width: "100%",
                      marginBottom: '10px'
                    }}
                    variant="outlined"
                  >
                    JOIN NOW
                  </Button>
                  <Typography
                    sx={{ display: "flex", justifyContent: "space-between", color: "#d8003b" }}
                  >
                    Follow Us On
                    <Typography>
                      <a href="https://www.facebook.com/parkroyalsaigon/" style={{ color: "#d8003b" }}><FacebookOutlinedIcon /></a>
                      <a href="https://twitter.com/PARKROYALSaigon" style={{ color: "#d8003b" }}><XIcon /></a>
                    </Typography>
                  </Typography>
                </ListItemText>
              </List>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

export default AboutUs;
