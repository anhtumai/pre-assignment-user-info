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
        width: "160px",
        bgcolor: "background.paper",
        border: 1,
        borderColor: "grey.300",
        borderRadius: 2,
        boxShadow: 3,
        minHeight: "240px",
        position: "relative",
      }}
    >
      <CardContent>
        <Avatar
          sx={{
            bgcolor: "#e8e4e4",
            color: "#484444",
            width: "70px",
            height: "70px",
            margin: "auto",
            marginTop: "4px",
            fontSize: "24px",
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
            marginTop: "11px",
            fontSize: "14px",
            fontWeight: 700,
          }}
        >
          {person.name}
        </Typography>
        <Typography
          align="center"
          color="#979797"
          sx={{
            marginTop: "3px",
            fontSize: "10px",
            fontStyle: "italic",
          }}
        >
          @{person.username}
        </Typography>
        <AnchorLink
          href={`http://${person.website}`}
          sx={{
            fontSize: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "5px",
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
            fontSize: "12px",
            left: "50%",
            marginLeft: "-26px",
          }}
        >
          More details
        </Button>
      </CardActions>
    </Card>
  );
}

export default PersonCard;
