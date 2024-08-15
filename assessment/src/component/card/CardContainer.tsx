import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export const CardContainer: React.FC = () => {
  return (
    <Card sx={{ minWidth: 600, minHeight: 500 }} style={{ borderRadius: 40 }}>
      <CardContent style={{ paddingTop: 100 }}>
        <Typography gutterBottom variant="h4">
          โลมาเป็นปลาหรือไม่
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
        <Button variant="contained" style={{ margin: 20, minWidth: 100 }}>
          <Typography variant="h6">ใช่</Typography>
        </Button>
        <Button variant="contained" style={{ margin: 20, minWidth: 100 }}>
          <Typography variant="h6">ไม่ใช่</Typography>
        </Button>
      </CardActions>
    </Card>
  );
};
