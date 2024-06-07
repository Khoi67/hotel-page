import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Box, Container, Typography } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function FAQ() {

  return (
    <Box>
      <Container>
        <Typography variant="h4" marginTop={"16px"} marginBottom={"16px"}>
          Frequently Asked Questions (FAQ)
        </Typography>
        <Box gap={2} display={"grid"}>
          <Accordion sx={{ backgroundColor: "#f7f2e8", padding: 2 }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography fontWeight={"bold"}>
                What is the nearest airport to PARKROYAL Saigon?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                The nearest airport to PARKROYAL Saigon would be Tan Son Nhat
                International Airport.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ backgroundColor: "#f7f2e8", padding: 2 }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography fontWeight={"bold"}>
                How long does it take to travel to PARKROYAL Saigon from the
                Airport?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                It will take an approximate driving time of 5 minutes from Tan
                Son Nhat International Airport to PARKROYAL Saigon, depending on
                traffic and weather conditions.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ backgroundColor: "#f7f2e8", padding: 2 }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography fontWeight={"bold"}>
                How do I get to PARKROYAL Saigon from the nearest Airport?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                From Tan Son Nhat International Airport you can get to PARKROYAL
                Saigon by: Luxury Hotel Limousine or Vans (5 minutes) City Taxi
                / Grab (5 minutes)
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Container>
    </Box>
  );
}

export default FAQ;
