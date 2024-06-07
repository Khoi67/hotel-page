import { Box, Container, Rating, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1549388604-817d15aa0110",
    title: "Bed",
  },
  {
    img: "https://images.unsplash.com/photo-1525097487452-6278ff080c31",
    title: "Books",
  },
  {
    img: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
    title: "Sink",
  },
  {
    img: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3",
    title: "Kitchen",
  },
  {
    img: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3",
    title: "Blinds",
  },
  {
    img: "https://images.unsplash.com/photo-1574180045827-681f8a1a9622",
    title: "Chairs",
  },
  {
    img: "https://images.unsplash.com/photo-1530731141654-5993c3016c77",
    title: "Laptop",
  },
  {
    img: "https://images.unsplash.com/photo-1481277542470-605612bd2d61",
    title: "Doors",
  },
  {
    img: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7",
    title: "Coffee",
  },
  {
    img: "https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee",
    title: "Storage",
  },
  {
    img: "https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62",
    title: "Candle",
  },
  {
    img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4",
    title: "Coffee table",
  },
];

function Moments() {
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
            Every Moment Counts
          </Typography>
          <Typography>
            Live now and spread your joyous moments with <span><a href="https://www.instagram.com/explore/tags/parkroyal/" style={{ color: '#D8003B'}}>#PARKROYAL</a></span> 
          </Typography>
          <Box display={"flex"} width={"100%"}>
            <Box sx={{ width: "100%", height: 450, overflowY: "scroll" }}>
              <ImageList variant="masonry" cols={3} gap={8}>
                {itemData.map((item) => (
                  <ImageListItem key={item.img}>
                    <img
                      srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                      src={`${item.img}?w=248&fit=crop&auto=format`}
                      alt={item.title}
                      loading="lazy"
                    />
                  </ImageListItem>
                ))}
              </ImageList>
            </Box>
          </Box>
        </Container>
      ) : (
        <Container>
          <Typography variant="h4" marginTop={"16px"} marginBottom={"16px"}>
            Every Moment Counts
          </Typography>
          <Typography>
            Live now and spread your joyous moments with <span><a href="https://www.instagram.com/explore/tags/parkroyal/" style={{ color: '#D8003B'}}>#PARKROYAL</a></span> 
          </Typography>
          <Box sx={{ width: "100%", height: 500, overflowX: "scroll" }}>
            <ImageList variant="masonry" cols={5} gap={8}>
              {itemData.map((item) => (
                <ImageListItem key={item.img}>
                  <img
                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    src={`${item.img}?w=248&fit=crop&auto=format`}
                    alt={item.title}
                    loading="lazy"
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </Box>
        </Container>
      )}
    </Box>
  );
}

export default Moments;
