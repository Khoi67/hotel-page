import React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import ListItemText from '@mui/material/ListItemText'


function Starred() {
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
        sx={{ color: 'black' }}
        id="basic-button-starred"
        aria-owns={anchorEl ? 'basic-menu-starred' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
        onMouseOver={handleClick}
        onMouseLeave={handleCloseHover}
      >
        <a
          href="https://www.panpacific.com/en/hotels-and-resorts/pr-saigon/dining.html"
          target="_blank"
        >
          EAT + DRINK
        </a>
        
      </Button>
      <Menu
        id="basic-menu-starred"
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
          <ListItemText>Lotus Bar</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText>Garden Brasserie</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText>In-room Dining</ListItemText>
        </MenuItem>
      </Menu>
    </Box>
  )
}
export default Starred
