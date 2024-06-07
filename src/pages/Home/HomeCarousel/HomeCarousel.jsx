import React from "react";
import { Carousel } from "antd";

const contentStyle = {
  width: "100%",
  height: (theme) => theme.trello.boardBarHeight,
  lineHeight: (theme) => theme.trello.boardBarHeight,
  textAlign: "center",
};
function HomeCarousel() {
  return (
    <Carousel autoplay>
      <div>
        <img
          style={contentStyle}
          src="https://www.panpacific.com/content/dam/pphg-revamp/en/global/offers/live-it-up-with-club/2024-march/pphg_masthead_live_it_up_with_club_image.png"
        />
      </div>
      <div>
        <img
          style={contentStyle}
          src="https://www.panpacific.com/content/dam/pphg-revamp/en/prsgn/homepage/hero/prsgn-masthead-3.jpg"
        />
      </div>
      <div>
        <img
          style={contentStyle}
          src="https://www.panpacific.com/content/dam/pphg-revamp/en/prsgn/homepage/hero/COVERGIRL.png"
        />
      </div>
      <div>
        <img
          style={contentStyle}
          src="https://www.panpacific.com/content/dam/pphg-revamp/en/prsgn/homepage/hero/prsgn-masthead-2.jpg"
        />
      </div>
    </Carousel>
  );
}

export default HomeCarousel;
