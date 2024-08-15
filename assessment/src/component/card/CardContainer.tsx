import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { fircardContent, question, secoundCardContent } from "./cardContent";
import { Box } from "@mui/material";

export const CardContainer: React.FC = () => {
  const [currentCard, setCurrentCard] = useState(1);
  return (
    <Card sx={{ minWidth: 600, minHeight: 500 }} style={{ borderRadius: 40 }}>
      {currentCard === 1 && (
        <Box>
          <CardContent style={{ paddingTop: 100 }}>
            <Typography gutterBottom variant="h4">
              {fircardContent.header}
            </Typography>
            <Typography gutterBottom variant="h4">
              {fircardContent.subHeader}
            </Typography>
            <Box style={{ paddingTop: 100 }}>
              <Typography gutterBottom variant="h5">
                {fircardContent.description}
              </Typography>
              <Typography gutterBottom variant="h5">
                {fircardContent.subDescription}
              </Typography>
            </Box>
          </CardContent>
          <CardActions
            style={{
              flex: "row",
              alignItems: "center",
              justifyContent: "center",
              padding: 100,
            }}
          >
            <Button
              variant="contained"
              style={{ margin: 20, minWidth: 100, borderRadius: 30 }}
              onClick={() => setCurrentCard(2)}
            >
              <Typography variant="h6" style={{ margin: 10 }}>
                {fircardContent.button}
              </Typography>
            </Button>
          </CardActions>
        </Box>
      )}
      {currentCard === 2 && (
        <Box>
          <CardContent style={{ paddingTop: 100 }}>
            <Typography gutterBottom variant="h3" style={{ padding: 30 }}>
              {secoundCardContent.title}
            </Typography>
            <Typography gutterBottom variant="h4" style={{ paddingTop: 20 }}>
              {secoundCardContent.content1}
            </Typography>
            <Typography gutterBottom variant="h4" style={{ paddingTop: 20 }}>
              {secoundCardContent.content2}
            </Typography>
            <Typography gutterBottom variant="h4" style={{ paddingTop: 20 }}>
              {`${secoundCardContent.content3}${secoundCardContent.content4}${secoundCardContent.content5}`}
            </Typography>
            <Typography gutterBottom variant="h4" style={{ paddingTop: 20 }}>
              {secoundCardContent.content6}
            </Typography>
            <Typography gutterBottom variant="h4" style={{ paddingTop: 20 }}>
              {secoundCardContent.content7}
            </Typography>
            <Typography
              gutterBottom
              variant="h4"
              style={{ paddingTop: 20 }}
            ></Typography>
          </CardContent>
          <CardActions
            style={{
              flex: "row",
              alignItems: "center",
              justifyContent: "center",
              padding: 100,
            }}
          >
            <Button
              variant="contained"
              style={{ margin: 20, minWidth: 100, borderRadius: 30 }}
              onClick={() => setCurrentCard(3)}
            >
              <Typography variant="h6" style={{ margin: 10 }}>
                {secoundCardContent.button}
              </Typography>
            </Button>
          </CardActions>
        </Box>
      )}
      {currentCard === 3 && (
        <Box>
          <CardContent style={{ paddingTop: 100 }}>
            <Typography gutterBottom variant="h4" style={{ padding: 30 }}>
              {question.title}
            </Typography>
            <Typography gutterBottom variant="h4" style={{ paddingTop: 20 }}>
              {question.subTitle}
            </Typography>
          </CardContent>
          <CardActions
            style={{
              flex: "row",
              alignItems: "center",
              justifyContent: "center",
              padding: 100,
            }}
          >
            <Button
              variant="contained"
              style={{ margin: 20, minWidth: 100, borderRadius: 30 }}
              onClick={() => setCurrentCard(2)}
            >
              <Typography variant="h6" style={{ margin: 10 }}>
                {question.yesButton}
              </Typography>
            </Button>
            <Button
              variant="contained"
              style={{ margin: 20, minWidth: 100, borderRadius: 30 }}
              onClick={() => setCurrentCard(3)}
            >
              <Typography variant="h6" style={{ margin: 10 }}>
                {question.noButtonButton}
              </Typography>
            </Button>
          </CardActions>
        </Box>
      )}
    </Card>
  );
};
