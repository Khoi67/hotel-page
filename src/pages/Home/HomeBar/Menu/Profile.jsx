import React from "react";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import ListItemText from "@mui/material/ListItemText";

function Profile() {
  let currentlyHovering = false;
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    if (anchorEl !== event.currentTarget) {
      setAnchorEl(event.currentTarget);
    }
  }

  function handleHover() {
    currentlyHovering = true;
  }

  function handleClose() {
    setAnchorEl(null);
  }

  function handleCloseHover() {
    currentlyHovering = false;
    setTimeout(() => {
      if (!currentlyHovering) {
        handleClose();
      }
    }, 50);
  }

  return (
    <Box>
      <Tooltip>
        <IconButton
          size="small"
          sx={{ padding: 0 }}
          aria-owns={anchorEl ? "basic-menu-profile" : undefined}
          aria-haspopup="true"
          onClick={handleClick}
          onMouseOver={handleClick}
          onMouseLeave={handleCloseHover}
        >
          <Avatar
            sx={{ width: 34, height: 34 }}
            alt="Khoi"
            src="https://lh3.googleusercontent.com/a/ACg8ocJwH-5Ua3iHcSyJ7UsvP-7loQ0mshhpiYOn1x9IpgSh5CY=s288-c-no"
          />
        </IconButton>
      </Tooltip>
      <Menu
        id="basic-menu-profile"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        MenuListProps={{
          onMouseEnter: handleHover,
          onMouseLeave: handleCloseHover,
          style: { pointerEvents: "auto" },
        }}
        // getContentAnchorEl={null}
        anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
      >
        <MenuItem>
          <Avatar sx={{ width: 28, height: 28, mr: 2 }} />
          <ListItemText>Profile</ListItemText>
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          <ListItemText>Add another account</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          <ListItemText>Settings</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          <ListItemText>Logout</ListItemText>
        </MenuItem>
      </Menu>
    </Box>
  );
}
export default Profile;
