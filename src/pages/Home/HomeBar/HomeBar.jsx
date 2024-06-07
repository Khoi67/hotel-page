import {
  Badge,
  Box,
  Button,
  InputAdornment,
  TextField,
  Tooltip,
} from "@mui/material";
import Workspaces from "./Menu/Workspaces";
import Recent from "./Menu/Recent";
import Starred from "./Menu/Starred";
import Templates from "./Menu/Templates";
import Profile from "./Menu/Profile";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Dropdown } from "antd";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import {
  HomeOutlined,
  MoonOutlined,
  HeartOutlined,
  SettingOutlined,
} from "@ant-design/icons";

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem("THE HOTEL", "sub1", <HomeOutlined />, [
    getItem("Hotel Policy", "1"),
    getItem("Destination Insights", "2"),
    getItem("We Recommend", "3"),
  ]),
  getItem("SLEEP", "sub2", <MoonOutlined />, [
    getItem("Superior Room", "5"),
    getItem("Deluxe Room", "6"),
    getItem("Junior Suit", "7"),
    getItem("Excutive Suit", "8"),
  ]),
  getItem("EAT + DRINK", "sub3", <HeartOutlined />, [
    getItem("Lotus Bar", "9"),
    getItem("Garden Brasserie", "10"),
    getItem("In-roon Dining", "11"),
  ]),
  getItem("PAN PACIFIC DISCOVERY", "sub4", <SettingOutlined />, [
    getItem("PAN PACIFIC DISCOVERY", "12"),
  ]),
];

function HomeBar() {
  const matches = useMediaQuery("(min-width:1000px)");
  const [searchValue, setSearchValue] = useState("");
  return (
    <Box
      sx={{
        width: "100%",
        height: (theme) => theme.trello.appBarHeight,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 2,
        paddingX: 2,
      }}
    >
      {!matches ? (
        <Box sx={{ display: "contents", alignItems: "center", gap: 2 }}>
          <Box>
            <a href="#">
              <img
                src="https://www.panpacific.com/content/dam/pphg-revamp/logos/logo-prsgn.svg"
                width={"230"}
                height={"80"}
              />
            </a>
          </Box>
          <Box sx={{ display: "flex", gap: 1 }}>
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
              size="small"
            >
              BOOK NOW
            </Button>
            <Button id="basic-button" size="small" sx={{ mr: 2, ml: 2 }}>
              <Dropdown
                menu={{
                  items,
                }}
                trigger={["click"]}
                width="max-content"
              >
                <a onClick={(e) => e.preventDefault()}>
                  <MenuIcon sx={{ color: "#d8003b" }} />
                </a>
              </Dropdown>
            </Button>
          </Box>
        </Box>
      ) : (
        <Box sx={{ display: "flex", alignItems: "center", gap: 2, width: '100%' }}>
          <Box>
            <a href="#">
              <img
                src="https://www.panpacific.com/content/dam/pphg-revamp/logos/logo-prsgn.svg"
                width={"230"}
                height={"80"}
              />
            </a>
          </Box>
          <Box sx={{ display: "flex", gap: 1, width: '100%' }}>
            <Workspaces />
            <Recent />
            <Starred />
            <Templates />
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
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
            }}
          >
            <TextField
              id="outlined-search"
              label="Search..."
              type="text"
              size="small"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon sx={{ color: "black" }} />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <CloseIcon
                      fontSize="small"
                      sx={{
                        color: searchValue ? "black" : "transparent",
                        cursor: "pointer",
                      }}
                      onClick={() => setSearchValue("")}
                    />
                  </InputAdornment>
                ),
              }}
              sx={{
                minWidth: "120px",
                maxWidth: "170px",
                "& label": { color: "black" },
                "& input": { color: "black" },
                "& label.Mui-focused": { color: "black" },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "black" },
                  "&:hover fieldset": { borderColor: "black" },
                  "&.Mui-focused fieldset": { borderColor: "black" },
                },
              }}
            />
            <Tooltip title="Notification">
              <Badge color="warning" variant="dot" sx={{ cursor: "pointer" }}>
                <NotificationsNoneIcon sx={{ color: "black" }} />
              </Badge>
            </Tooltip>
            <Tooltip title="Help">
              <HelpOutlineIcon sx={{ cursor: "pointer", color: "black" }} />
            </Tooltip>
            <Profile />
          </Box>
        </Box>
      )}
    </Box>
  );
}

export default HomeBar;
