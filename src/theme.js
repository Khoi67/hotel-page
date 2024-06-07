import { experimental_extendTheme as extendTheme } from "@mui/material/styles";

const APP_BAR_HEIGHT = "80px";
const BOARD_BAR_HEIGHT = "60px";
const BOARD_CONTENT_HEIGHT = `calc(100vh - ${APP_BAR_HEIGHT} - ${BOARD_BAR_HEIGHT})`;
// Create a theme instance.
const theme = extendTheme({
  trello: {
    appBarHeight: APP_BAR_HEIGHT,
    boardBarHeight: BOARD_BAR_HEIGHT,
    boardContentHeight: BOARD_CONTENT_HEIGHT,
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          "*::-webkit-scrollbar": {
            width: "8px",
            height: "8px",
          },
          "*::-webkit-scrollbar-thumb": {
            backgroundColor: "#dcdde1",
            borderRadius: "8px",
          },
          "*::-webkit-scrollbar-thumb:hover": {
            backgroundColor: "white",
          },
        },
        li: {
          display: "flex",
          width: "100%",
          fontSize: "14px",
          strong: {
            marginRight: "5px",
            minWidth: "180px",
            display: "inline-block",
            position: "relative",
          },
          span: {
            width: "320px",
            display: 'inline-block'
          },
          a: {
            color: "#D8003B"
          },
        },
      },
    },
    // Name of the component
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          textTransform: "none",
          borderWidth: "0.5px",
          "&:hover": { borderWidth: "0.5px" },
          a: {
            textDecoration: "none",
            color: "black",
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: { fontSize: "0.875rem" },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          "&.MuiTypography-body1": {
            fontSize: "0.875rem",
            fontFamily: "Roboto, Helvetica,Arial,sans-serif",
            a: {
              textDecoration: 'none',
              color: 'black',
              "&:hover": {
                textDecoration: 'underline'
              }
            },
            p: {
              marginBottom: '10px'
            }
          },
          fontFamily: "Raleway, sans-serif",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          fontSize: "0.875rem",
          "& fieldset": { borderWidth: "0.1px !important" },
          "&:hover fieldset": { borderWidth: "2px !important" },
          "&.Mui-focused fieldset": { borderWidth: "2px !important" },
        },
      },
    },
    MuiPopover: {
      styleOverrides: {
        root: {
          pointerEvents: "none",
        },
      },
    },
    MuiButtonBase: {
      styleOverrides: {
        root: {
          "&.Mui-selected": {
            color: "#D8003B !important",
            backgroundColor: "white",
          },
          "&.MuiTab-root": {
            alignItems: "flex-start",
            borderBottom: "1px solid #D8003B",
            "&:hover": {
              color: "#D8003B",
            },
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          backgroundColor: "#eee9e5",
        },
      },
    },
  },
});

export default theme;
