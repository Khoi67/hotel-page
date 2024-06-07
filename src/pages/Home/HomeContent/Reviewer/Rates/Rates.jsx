import React from "react";
import Card from "@mui/material/Card";
import { Box, Typography } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Rating from "@mui/material/Rating";

function Rates() {
  return (
    <Box sx={{
        width: "100%",
        display: "flex",
        paddingX: 2,
        gap: 1,
        height: 250
    }}>
      <Card sx={{ maxWidth: 250, border: "1px solid #D8003B" }}>
        <CardContent>
          <Rating
            name="read-only"
            defaultValue={5}
            size="small"
            readOnly
            sx={{
              color: "#D8003B",
            }}
          />
          <Typography variant="body2" color="text.secondary">
            The hotel staff were all wonderful, very friendly and always made
            sure I was well looked after. The doorman would alway chat, the
            restaurant staff made sure I had everything I...
          </Typography>
          <br />
          <Typography gutterBottom variant="h7" component="div">
            Margaret Geraldine
          </Typography>
        </CardContent>
      </Card>
      <Card sx={{ maxWidth: 250, border: "1px solid #D8003B" }}>
        <CardContent>
          <Rating
            name="read-only"
            defaultValue={5}
            size="small"
            readOnly
            sx={{
              color: "#D8003B",
            }}
          />
          <Typography variant="body2" color="text.secondary">
            The hotel staff were all wonderful, very friendly and always made
            sure I was well looked after. The doorman would alway chat, the
            restaurant staff made sure I had everything I...
          </Typography>
          <br />
          <Typography gutterBottom variant="h7" component="div">
            Margaret Geraldine
          </Typography>
        </CardContent>
      </Card>
      <Card sx={{ maxWidth: 250, border: "1px solid #D8003B" }}>
        <CardContent>
          <Rating
            name="read-only"
            defaultValue={5}
            size="small"
            readOnly
            sx={{
              color: "#D8003B",
            }}
          />
          <Typography variant="body2" color="text.secondary">
            The hotel staff were all wonderful, very friendly and always made
            sure I was well looked after. The doorman would alway chat, the
            restaurant staff made sure I had everything I...
          </Typography>
          <br />
          <Typography gutterBottom variant="h7" component="div">
            Margaret Geraldine
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Rates;
