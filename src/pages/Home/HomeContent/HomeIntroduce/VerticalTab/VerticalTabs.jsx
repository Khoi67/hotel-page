import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";
import Container from "@mui/material/Container"


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: "16px 0" }}>
          <Typography>
            {children}
          </Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const matches = useMediaQuery("(min-width:1000px)");

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{
      backgroundColor: "#eee9e5"
    }}>
      <Container>
      {!matches
      ? (
      <Box
      sx={{
        display: "flex",
        flexDirection: "column-reverse",
        width: "100%"
      }}
    >
      <Tabs
        orientation="vertical"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ width: "100%", display: "ruby", textAlign: "center" }}
      >
        <Tab label="Superior Room" {...a11yProps(0)}/>
        <Tab label="Deluxe Room" {...a11yProps(1)} />
        <Tab label="Orchid Club Deluxe Room" {...a11yProps(2)} />
        <Tab label="Junior Suite" {...a11yProps(3)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <img
          src="https://www.panpacific.com/content/dam/pphg-revamp/en/prsgn/sleep/superior-room/prsgn-01-Superior-Room-hero-1-test.jpg"
          alt=""
          style={{ width: "100%" }}
        />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <img
          src="https://www.panpacific.com/content/dam/pphg-revamp/zh/prsgn/sleep/deluxe-room/prsgn-02-Deluxe-Room-hero-2.jpg"
          alt=""
          style={{ width: "100%" }}
        />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <img
          src="https://www.panpacific.com/content/dam/pphg-revamp/en/prsgn/sleep/orchid-deluxe-room/prsgn-04-Orchid-Deluxe-Room-hero-1.jpg"
          alt=""
          style={{ width: "100%" }}
        />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <img
          src="https://www.panpacific.com/content/dam/pphg-revamp/en/prsgn/sleep/junior-suite/prsgn-05-Junior-Suite-hero-1.jpg"
          alt=""
          style={{ width: "100%" }}
        />
      </TabPanel>
    </Box>
    )
    : (
      <Box
      sx={{
        display: "flex",
        flexDirection: "row-reverse",
        width: "100%"
      }}
    >
      <Tabs
        orientation="vertical"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ width: "100%", padding: "40px" }}
      >
        <Tab label="Superior Room" {...a11yProps(0)}/>
        <Tab label="Deluxe Room" {...a11yProps(1)} />
        <Tab label="Orchid Club Deluxe Room" {...a11yProps(2)} />
        <Tab label="Junior Suite" {...a11yProps(3)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <img
          src="https://www.panpacific.com/content/dam/pphg-revamp/en/prsgn/sleep/superior-room/prsgn-01-Superior-Room-hero-1-test.jpg"
          alt=""
          style={{ width: "100%" }}
        />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <img
          src="https://www.panpacific.com/content/dam/pphg-revamp/zh/prsgn/sleep/deluxe-room/prsgn-02-Deluxe-Room-hero-2.jpg"
          alt=""
          style={{ width: "100%" }}
        />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <img
          src="https://www.panpacific.com/content/dam/pphg-revamp/en/prsgn/sleep/orchid-deluxe-room/prsgn-04-Orchid-Deluxe-Room-hero-1.jpg"
          alt=""
          style={{ width: "100%" }}
        />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <img
          src="https://www.panpacific.com/content/dam/pphg-revamp/en/prsgn/sleep/junior-suite/prsgn-05-Junior-Suite-hero-1.jpg"
          alt=""
          style={{ width: "100%" }}
        />
      </TabPanel>
    </Box>
    )
    }
    </Container>
    </Box>

  );
}
