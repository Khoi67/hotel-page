import { Box, Container, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import Divider from "@mui/material/Divider";

function LogoFooter() {
  const matches = useMediaQuery("(min-width:1100px)");

  return (
    <Box marginTop={"32px"}>
      {!matches ? (
        <Container>
          <Box
            sx={{
              display: "flex",
            }}
          >
            <Box>
              <Typography textAlign={"center"} fontSize={"12px !important"}>
                HOTELS AND RESORTS
              </Typography>
              <Box sx={{ display: "block", textAlign: 'center' }}>
                <a href="">
                  <img
                    src="https://www.panpacific.com/content/dam/pphg-revamp/logos/logo-pp-hr.svg"
                    width={"150"}
                    height={"80"}
                  />
                </a>
                <a href="">
                  <img
                    src="https://www.panpacific.com/content/dam/pphg-revamp/logos/logo-prc-hr-new-small.svg"
                    width={"150"}
                    height={"80"}
                  />
                </a>
                <a href="">
                  <img
                    src="https://www.panpacific.com/content/dam/pphg-revamp/logos/logo-pr-hr.svg"
                    width={"150"}
                    height={"80"}
                  />
                </a>
              </Box>
            </Box>
            <Divider orientation="vertical" variant="middle" flexItem />
            <Box>
              <Typography textAlign={"center"} fontSize={"12px !important"}>
                SERVICED SUITES{" "}
              </Typography>
              <Box sx={{ display: "block", textAlign: 'center' }}>
                <a href="">
                  <img
                    src="https://www.panpacific.com/content/dam/pphg-revamp/logos/logo-pp-ss.svg"
                    width={"150"}
                    height={"80"}
                  />
                </a>
                <a href="">
                  <img
                    src="https://www.panpacific.com/content/dam/pphg-revamp/logos/logo-pr-ss.svg"
                    width={"150"}
                    height={"80"}
                  />
                </a>
              </Box>
            </Box>
            <Divider orientation="vertical" variant="middle" flexItem />
            <Box>
              <Typography textAlign={"center"} fontSize={"12px !important"}>
                WELLNESS AND LIFESTYLE
              </Typography>
              <Box sx={{ display: "block", textAlign: 'center' }}>
                <a href="">
                  <img
                    src="https://www.panpacific.com/content/dam/pphg-revamp/logos/logo-st-gregory.svg"
                    width={"150"}
                    height={"80"}
                  />
                </a>
                <a href="">
                  <img
                    src="https://www.panpacific.com/content/dam/pphg-revamp/logos/logo-si-chuan-dou-hua.svg"
                    width={"150"}
                    height={"80"}
                  />
                </a>
              </Box>
            </Box>
          </Box>
        </Container>
      ) : (
        <Container>
          <Box
            sx={{
              display: "flex",
            }}
          >
            <Box>
              <Typography textAlign={"center"} fontSize={"12px !important"}>
                HOTELS AND RESORTS
              </Typography>
              <Box sx={{ display: "flex" }}>
                <a href="">
                  <img
                    src="https://www.panpacific.com/content/dam/pphg-revamp/logos/logo-pp-hr.svg"
                    width={"150"}
                    height={"80"}
                  />
                </a>
                <a href="">
                  <img
                    src="https://www.panpacific.com/content/dam/pphg-revamp/logos/logo-prc-hr-new-small.svg"
                    width={"150"}
                    height={"80"}
                  />
                </a>
                <a href="">
                  <img
                    src="https://www.panpacific.com/content/dam/pphg-revamp/logos/logo-pr-hr.svg"
                    width={"150"}
                    height={"80"}
                  />
                </a>
              </Box>
            </Box>
            <Divider orientation="vertical" variant="middle" flexItem />
            <Box>
              <Typography textAlign={"center"} fontSize={"12px !important"}>
                SERVICED SUITES{" "}
              </Typography>
              <Box sx={{ display: "flex" }}>
                <a href="">
                  <img
                    src="https://www.panpacific.com/content/dam/pphg-revamp/logos/logo-pp-ss.svg"
                    width={"150"}
                    height={"80"}
                  />
                </a>
                <a href="">
                  <img
                    src="https://www.panpacific.com/content/dam/pphg-revamp/logos/logo-pr-ss.svg"
                    width={"150"}
                    height={"80"}
                  />
                </a>
              </Box>
            </Box>
            <Divider orientation="vertical" variant="middle" flexItem />
            <Box>
              <Typography textAlign={"center"} fontSize={"12px !important"}>
                WELLNESS AND LIFESTYLE
              </Typography>
              <Box sx={{ display: "flex" }}>
                <a href="">
                  <img
                    src="https://www.panpacific.com/content/dam/pphg-revamp/logos/logo-st-gregory.svg"
                    width={"150"}
                    height={"80"}
                  />
                </a>
                <a href="">
                  <img
                    src="https://www.panpacific.com/content/dam/pphg-revamp/logos/logo-si-chuan-dou-hua.svg"
                    width={"150"}
                    height={"80"}
                  />
                </a>
              </Box>
            </Box>
          </Box>
        </Container>
      )}
    </Box>
  );
}

export default LogoFooter;
