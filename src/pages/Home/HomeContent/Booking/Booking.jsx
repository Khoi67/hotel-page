import React from "react";
import { Button, Box, Typography } from "@mui/material";
import { Select, Space, DatePicker } from "antd";
import { CalendarOutlined } from "@ant-design/icons";
import useMediaQuery from "@mui/material/useMediaQuery";
const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY", "DD-MM-YYYY", "DD-MM-YY"];

const handleChange = (value) => {
  console.log(`selected ${value}`);
};

function Booking() {
  const matches = useMediaQuery("(min-width:800px)");

  return (
    <Box>
      {!matches ? (
        <Box
          sx={{
            bgcolor: "#ecf0f1",
            height: "100%",
            width: "100%",
            padding: "16px 32px",
          }}
        >
          <Space
            style={{
              display: "inline-block",
              width: "100%",
              marginBottom: '16px'
            }}
          >
            <Typography
              style={{
                fontSize: "0.5rem",
              }}
            >
              SELECT A PROPERTY
            </Typography>
            <Select
              style={{
                fontFamily: "Raleway, sans-serif",
                width: "100%",
              }}
              defaultValue="PARKROYAL Saigon"
              onChange={handleChange}
              size="large"
              options={[
                {
                  value: "PARKROYAL Saigon",
                  label: "PARKROYAL Saigon",
                },
                {
                  value: "PARKROYAL Hanoi",
                  label: "PARKROYAL Hanoi",
                },
              ]}
            />
          </Space>
          <Space
            style={{
              display: "inline-block",
              width: "100%",
              marginBottom: '16px'
            }}
          >
            <Typography
              style={{
                fontSize: "0.5rem",
              }}
            >
              CHECK IN
            </Typography>
            <DatePicker
              style={{
                width: "100%",
              }}
              format={dateFormatList}
              suffixIcon={<CalendarOutlined style={{ color: "red" }} />}
            />
          </Space>
          <Space
            style={{
              display: "inline-block",
              width: "100%",
              marginBottom: '24px'
            }}
          >
            <Typography
              style={{
                fontSize: "0.5rem",
              }}
            >
              CHECK OUT
            </Typography>
            <DatePicker
              style={{
                width: "100%",
              }}
              format={dateFormatList}
              suffixIcon={<CalendarOutlined style={{ color: "red" }} />}
            />
          </Space>
          <Space
            style={{
              display: "inline-block",
              width: "100%",
            }}
          >
            <Button
              sx={{
                width: '100%',
                color: "white",
                border: "1px solid #d8003b",
                backgroundColor: "#d8003b",
                "&:hover": {
                  border: "#d8003b",
                  backgroundColor: "white",
                  color: "#d8003b",
                },
              }}
              variant="outlined"
            >
              BOOK NOW
            </Button>
          </Space>
        </Box>
      ) : (
        <Box
          sx={{
            bgcolor: "#ecf0f1",
            display: "flex",
            justifyContent: "center",
            height: "100px",
          }}
        >
          <Space
            style={{
              flexDirection: "column",
              padding: "16px",
              alignItems: "unset",
            }}
          >
            <Typography>SELECT A PROPERTY</Typography>
            <Select
              style={{
                fontFamily: "Raleway, sans-serif",
                width: "300px",
              }}
              defaultValue="PARKROYAL Saigon"
              onChange={handleChange}
              size="large"
              options={[
                {
                  value: "PARKROYAL Saigon",
                  label: "PARKROYAL Saigon",
                },
                {
                  value: "PARKROYAL Hanoi",
                  label: "PARKROYAL Hanoi",
                },
              ]}
            />
          </Space>
          <Space
            style={{
              flexDirection: "column",
              padding: "16px",
              alignItems: "unset",
            }}
          >
            <Typography>CHECK IN</Typography>
            <DatePicker
              size={"large"}
              format={dateFormatList}
              suffixIcon={<CalendarOutlined style={{ color: "red" }} />}
            />
          </Space>
          <Space
            style={{
              flexDirection: "column",
              padding: "16px",
              alignItems: "unset",
            }}
          >
            <Typography>CHECK OUT</Typography>
            <DatePicker
              size={"large"}
              format={dateFormatList}
              suffixIcon={<CalendarOutlined style={{ color: "red" }} />}
            />
          </Space>
          <Space
            style={{
              padding: "26px 16px 0 16px",
            }}
          >
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
              }}
              variant="outlined"
            >
              BOOK NOW
            </Button>
          </Space>
        </Box>
      )}
    </Box>
  );
}

export default Booking;
