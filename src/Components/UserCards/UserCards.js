import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function userCards(props) {
  const { userData } = props;

  const allCards = userData.map((user) => {
    return (
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {user.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Born on {user.dob} is graduated from {user.college} and is{" "}
              {user.age} years old.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  });

  return (
    <div>
      {userData.length > 0 ? <div>{allCards}</div> : <> No data to display </>}
    </div>
  );
}
