import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "@mui/material";
import { NavLink } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

export function Header(props) {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpen(open);
  };

  const list = (
    <List>
      <ListItem button>
        <div>
        <Link component={NavLink} to="/register" className="linkItem">
          <span className="drawerItem">Register</span>
        </Link>
        </div>
      </ListItem>
      <ListItem button>
        <div>
        <Link component={NavLink} to="/login" className="linkItem">
          <span className="drawerItem">Login</span>
        </Link>
        </div>
      </ListItem>
    </List>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="error">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Drawer anchor="left" open={open} onClose={toggleDrawer(false)} sx={{
          '& .MuiDrawer-paper': {  
            width: 300,
          },
        }}>
            <div
              role="presentation"
              onClick={toggleDrawer(false)}
              onKeyDown={toggleDrawer(false)}
            >
              {list}
            </div>
          </Drawer>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <h1 className="title">Inspiration for your big day!</h1>
          </Typography>
          <Button color="inherit">
            <Link component={NavLink} to="/login" color={"inherit"}>
              Login
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
