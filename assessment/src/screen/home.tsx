import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Box } from "@mui/material";

const useStyles = makeStyles({
  card: {
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
});

const Home: React.FC = () => {
  const classes = useStyles();

  return (
    <Box>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h4" component="h1" align="center">
            Hello Pasit
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Home;
