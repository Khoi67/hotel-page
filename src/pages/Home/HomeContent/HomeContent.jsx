import Box from "@mui/material/Box";
import Booking from "./Booking/Booking";
import HomeIntroduce from "./HomeIntroduce/HomeIntroduce";
import HomeFooter from "./HomeFooter/HomeFooter";

function HomeContent() {
  return (
    <Box
      sx={{
        width: "100%",
        height: (theme) => theme.trello.boardContentHeight
      }}
    >
      <Booking />
      <HomeIntroduce />
      <HomeFooter />
    </Box>
  );
}

export default HomeContent;
