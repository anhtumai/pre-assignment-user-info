import { Link } from "react-router-dom";
import { AppBar, Toolbar, Button, Typography, Box } from "@mui/material";

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              fontSize: "17px",
            }}
          >
            Integrify
          </Typography>
          <Button
            color="inherit"
            component={Link}
            to="/"
            sx={{
              fontSize: "17px",
            }}
          >
            Home
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
