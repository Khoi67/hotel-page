import { Box, Container, Typography, useMediaQuery } from "@mui/material";
import React from "react";

function DirectionMap() {
  const matches = useMediaQuery("(min-width:1100px)");

  return (
    <Box sx={{ backgroundColor: "#efeff2" }}>
      {!matches ? (
        <Container>
          <Box width={'100%'}>
            <Box width={"100%"} padding={"30px 30px 0 30px"}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.1534170326577!2d106.6654659737752!3d10.799559458769163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528d5ff3c8957%3A0x8b4929466e979253!2zUGFya3JveWFsIFPDoGkgR8Oybg!5e0!3m2!1svi!2s!4v1713770342342!5m2!1svi!2s"
                width={'100%'}
                height={450}
                style={{ border: 0}}
              ></iframe>
            </Box>
            <Box
              sx={{
                padding: "30px",
                width: "100%"
              }}
            >
              <Typography variant="h4">PARKROYAL Saigon</Typography>
              <ul
                style={{
                  listStyle: "none",
                  paddingLeft: 0,
                }}
              >
                <li>
                  <strong>Address</strong>
                  <span>
                    309B-311 Nguyen Van Troi Street, Tan Binh District, Ho Chi
                    Minh City, Vietnam
                  </span>
                </li>
                <li>
                  <strong>Telephone</strong>
                  <a href="tel:+84%2028%203842%201111">+84 28 3842 1111</a>
                </li>

                <li>
                  <strong>Toll-Free (Within Vietnam)</strong>
                  <a href="tel:120%2032%20199">120 32 199</a>
                </li>

                <li>
                  <strong>Toll-Free (Within Vietnam)</strong>
                  <a href="tel:122%2080%20955">122 80 955</a>
                </li>

                <li>
                  <strong>Fax</strong>
                  <span>+84 28 3842 4365</span>
                </li>
                <li>
                  <strong>Email</strong>
                  <span>
                    <a href="mailto:enquiry.prsgn@parkroyalhotels.com">
                      enquiry.prsgn@parkroyalhotels.com
                    </a>
                  </span>
                </li>

                <li>
                  <strong>General Manager Email</strong>
                  <span>
                    <a href="mailto:gm.prsgn@parkroyalhotels.com">
                      gm.prsgn@parkroyalhotels.com
                    </a>
                  </span>
                </li>

                <li>
                  <strong>Getting Here</strong>
                  <span>
                    <a
                      target="_blank"
                      href="https://www.panpacific.com/prsgn/gettinghere.html"
                      rel="noopener noreferrer"
                    >
                      https://www.panpacific.com/prsgn/gettinghere
                    </a>
                  </span>
                </li>
              </ul>
            </Box>
          </Box>
        </Container>
      ) : (
        <Container>
          <Box
            sx={{
              display: "flex",
              width: "100%",
            }}
          >
            <Box width={"100%"}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.1534170326577!2d106.6654659737752!3d10.799559458769163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528d5ff3c8957%3A0x8b4929466e979253!2zUGFya3JveWFsIFPDoGkgR8Oybg!5e0!3m2!1svi!2s!4v1713770342342!5m2!1svi!2s"
                width={600}
                height={450}
                style={{ border: 0 }}
              ></iframe>
            </Box>
            <Box
              sx={{
                padding: "50px",
                width: "100%",
              }}
            >
              <Typography variant="h4">PARKROYAL Saigon</Typography>
              <ul
                style={{
                  listStyle: "none",
                  paddingLeft: 0,
                }}
              >
                <li>
                  <strong>Address</strong>
                  <span>
                    309B-311 Nguyen Van Troi Street, Tan Binh District, Ho Chi
                    Minh City, Vietnam
                  </span>
                </li>
                <li>
                  <strong>Telephone</strong>
                  <a href="tel:+84%2028%203842%201111">+84 28 3842 1111</a>
                </li>

                <li>
                  <strong>Toll-Free (Within Vietnam)</strong>
                  <a href="tel:120%2032%20199">120 32 199</a>
                </li>

                <li>
                  <strong>Toll-Free (Within Vietnam)</strong>
                  <a href="tel:122%2080%20955">122 80 955</a>
                </li>

                <li>
                  <strong>Fax</strong>
                  <span>+84 28 3842 4365</span>
                </li>
                <li>
                  <strong>Email</strong>
                  <span>
                    <a href="mailto:enquiry.prsgn@parkroyalhotels.com">
                      enquiry.prsgn@parkroyalhotels.com
                    </a>
                  </span>
                </li>

                <li>
                  <strong>General Manager Email</strong>
                  <span>
                    <a href="mailto:gm.prsgn@parkroyalhotels.com">
                      gm.prsgn@parkroyalhotels.com
                    </a>
                  </span>
                </li>

                <li>
                  <strong>Getting Here</strong>
                  <span>
                    <a
                      target="_blank"
                      href="https://www.panpacific.com/prsgn/gettinghere.html"
                      rel="noopener noreferrer"
                    >
                      https://www.panpacific.com/prsgn/gettinghere
                    </a>
                  </span>
                </li>
              </ul>
            </Box>
          </Box>
        </Container>
      )}
    </Box>
  );
}

export default DirectionMap;
