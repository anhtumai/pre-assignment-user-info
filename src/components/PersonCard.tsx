import { Link } from "react-router-dom";

import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  Typography,
  Button,
  Link as AnchorLink,
} from "@mui/material";

function PersonCard({ person }: { person: Person }) {
  return (
    <Card
      sx={{
        width: "240px",
        bgcolor: "background.paper",
        border: 1,
        borderColor: "grey.300",
        borderRadius: 2,
        boxShadow: 3,
        minHeight: "330px",
        position: "relative",
      }}
    >
      <CardContent>
        <Avatar
          sx={{
            bgcolor: "#e8e4e4",
            color: "#484444",
            width: "105px",
            height: "105px",
            margin: "auto",
            marginTop: "6px",
            fontSize: "36px",
          }}
        >
          {person.name[0].toUpperCase()}
        </Avatar>
        <Typography
          variant="h6"
          component="h6"
          align="center"
          color="#484444"
          sx={{
            marginTop: "16.5px",
            fontSize: "21px",
            fontWeight: 700,
          }}
        >
          {person.name}
        </Typography>
        <Typography
          align="center"
          color="#979797"
          sx={{
            marginTop: "4.5px",
            fontSize: "15px",
            fontStyle: "italic",
          }}
        >
          @{person.username}
        </Typography>
        <AnchorLink
          href={`http://${person.website}`}
          sx={{
            fontSize: "15px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "7.5px",
          }}
        >
          http://{person.website}
        </AnchorLink>
      </CardContent>
      <CardActions
        sx={{
          position: "absolute",
          bottom: 0,
        }}
      >
        <Button
          variant="contained"
          size="small"
          component={Link}
          to={`/people/${person.id}`}
          sx={{
            fontSize: "18px",
            left: "50%",
            marginLeft: "-30.7px",
          }}
        >
          More details
        </Button>
      </CardActions>
    </Card>
  );
}

export default PersonCard;
