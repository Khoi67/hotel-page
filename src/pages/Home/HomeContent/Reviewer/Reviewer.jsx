import { Box, Container, Rating, Typography } from "@mui/material";
import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

const steps = [
  {
    label: (
      <Rating
        name="read-only"
        defaultValue={5}
        readOnly
        sx={{
          color: "#D8003B",
          display: "flex",
        }}
      />
    ),
    description: `The Garden Brasserie staff of Ms Linh and Ms Hang made our stay very memorable.`,
  },
  {
    label: (
      <Rating
        name="read-only"
        defaultValue={5}
        readOnly
        sx={{
          color: "#D8003B",
          display: "flex",
        }}
      />
    ),
    description:
      "Only stayed 1 night due to flight changes. We will stay here again whenever we come to Saigon. The staff were courteous, reception staff were very efficient on check in and...",
  },
  {
    label: (
      <Rating
        name="read-only"
        defaultValue={5}
        readOnly
        sx={{
          color: "#D8003B",
          display: "flex",
        }}
      />
    ),
    description: `The hotel staff were all wonderful, very friendly and always made sure I was well looked after. The doorman would alway chat, the restaurant staff made sure I had everything I...`,
  }
];

function Reviewer() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = steps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const matches = useMediaQuery("(min-width:1000px)");
  return (
    <Box
      sx={{
        gap: 2,
        paddingX: 2,
        overflowX: "auto",
      }}
    >
      {!matches ? (
        <Container>
          <Typography variant="h4" marginTop={"16px"} marginBottom={"16px"}>
            Guest Review
          </Typography>
          <Box display={"flex"} width={"100%"}>
            <Box
              sx={{
                width: "50%",
                paddingLeft: '60px',
                alignContent: "center",
              }}
            >
              <span
                style={{
                  fontSize: "60px",
                  fontWeight: "700",
                  color: "#D8003B",
                  marginRight: "8px",
                }}
              >
                4.3
              </span>
              <span style={{ fontSize: "16px", fontWeight: "600" }}>
                Out of 5 Stars
              </span>
              <Rating
                name="read-only"
                defaultValue={4.5}
                precision={0.5}
                readOnly
                sx={{
                  color: "#D8003B",
                  display: "flex",
                }}
              />
              <p>(1269 Verified Reviews)</p>
            </Box>
            <Box width={"50%"}>
              <Box sx={{ maxWidth: 400, flexGrow: 1, border: '1px solid #D8003B' }}>
                <Paper
                  square
                  elevation={0}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    height: 50,
                    pl: 2,
                    bgcolor: "background.default",
                  }}
                >
                  <Typography>{steps[activeStep].label}</Typography>
                </Paper>
                <Box sx={{ height: 255, maxWidth: 400, width: "100%", p: 2 }}>
                  {steps[activeStep].description}
                </Box>
                <MobileStepper
                  variant="progress"
                  steps={maxSteps}
                  position="static"
                  activeStep={activeStep}
                  nextButton={
                    <Button
                      size="small"
                      onClick={handleNext}
                      disabled={activeStep === maxSteps - 1}
                    >
                      Next
                      {theme.direction === "rtl" ? (
                        <KeyboardArrowLeft />
                      ) : (
                        <KeyboardArrowRight />
                      )}
                    </Button>
                  }
                  backButton={
                    <Button
                      size="small"
                      onClick={handleBack}
                      disabled={activeStep === 0}
                    >
                      {theme.direction === "rtl" ? (
                        <KeyboardArrowRight />
                      ) : (
                        <KeyboardArrowLeft />
                      )}
                      Back
                    </Button>
                  }
                />
              </Box>
            </Box>
          </Box>
        </Container>
      ) : (
        <Container>
          <Typography variant="h4" marginTop={"16px"} marginBottom={"16px"}>
            Guest Review
          </Typography>
          <Box display={"flex"} width={"100%"}>
            <Box
              sx={{
                width: "50%",
                paddingLeft: '60px',
                alignContent: "center",
              }}
            >
              <span
                style={{
                  fontSize: "60px",
                  fontWeight: "700",
                  color: "#D8003B",
                  marginRight: "8px",
                }}
              >
                4.3
              </span>
              <span style={{ fontSize: "16px", fontWeight: "600" }}>
                Out of 5 Stars
              </span>
              <Rating
                name="read-only"
                defaultValue={4.5}
                precision={0.5}
                readOnly
                sx={{
                  color: "#D8003B",
                  display: "flex",
                }}
              />
              <p>(1269 Verified Reviews)</p>
            </Box>
            <Box width={"50%"}>
              <Box sx={{ maxWidth: 400, flexGrow: 1,  border: '1px solid #D8003B' }}>
                <Paper
                  square
                  elevation={0}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    height: 50,
                    pl: 2
                  }}
                >
                  <Typography>{steps[activeStep].label}</Typography>
                </Paper>
                <Box sx={{ height: 255, maxWidth: 400, width: "100%", p: 2 }}>
                  {steps[activeStep].description}
                </Box>
                <MobileStepper
                  variant="progress"                
                  steps={maxSteps}
                  position="static"
                  activeStep={activeStep}
                  nextButton={
                    <Button
                      size="small"
                      onClick={handleNext}
                      disabled={activeStep === maxSteps - 1}
                    >
                      Next
                      {theme.direction === "rtl" ? (
                        <KeyboardArrowLeft />
                      ) : (
                        <KeyboardArrowRight />
                      )}
                    </Button>
                  }
                  backButton={
                    <Button
                      size="small"
                      onClick={handleBack}
                      disabled={activeStep === 0}
                    >
                      {theme.direction === "rtl" ? (
                        <KeyboardArrowRight />
                      ) : (
                        <KeyboardArrowLeft />
                      )}
                      Back
                    </Button>
                  }
                />
              </Box>
            </Box>
          </Box>
        </Container>
      )}
    </Box>
  );
}

export default Reviewer;
