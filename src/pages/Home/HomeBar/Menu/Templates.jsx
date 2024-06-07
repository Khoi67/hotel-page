import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from '@mui/material/Tooltip';


function Templates() {
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
      <Button
        sx={{ color: "black" }}
        id="basic-button-templates"
        aria-owns={anchorEl ? 'basic-menu-templates' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
        onMouseOver={handleClick}
        onMouseLeave={handleCloseHover}
      >
        <a
          href="https://www.panpacific.com/en/panpacific-discovery/triple-discovery-dollars.html?r=PRSGN"
          target="_blank"
        >
          PAN PACIFIC DISCOVERY
        </a>
        
      </Button>
      <Menu
        id="basic-menu-templates"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        MenuListProps={{
          onMouseEnter: handleHover,
          onMouseLeave: handleCloseHover,
          style: { pointerEvents: "auto" }
        }}
        // getContentAnchorEl={null}
        anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
      >
        <MenuItem>
          <Tooltip>
            <img src="https://www.panpacific.com/content/dam/pphg-revamp/en/global/members/triple-discovery-dollars/triple-worth-your-while-2024-kv-220x306px.png" alt="" />
          </Tooltip>
        </MenuItem>
      </Menu>
    </Box>
  );
}
export default Templates;
