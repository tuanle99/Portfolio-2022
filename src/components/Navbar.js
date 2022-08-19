import React, { useState } from "react";
import PropTypes from "prop-types";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  Button,
} from "@mui/material";
import Scroll from "react-scroll-to-element";

const drawerWidth = 240;
const navItems = ["Home", "About", "Resume", "Project", "Contact"];
const navTitle = "Tuan Le";

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleScroll = (e) => {
    console.log(e.target.value);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        {navTitle}
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <Scroll type="id" element={item} offset={-64}>
            <ListItem key={item} disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          </Scroll>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav" sx={{ minHeight: 64 }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              display: { xs: "none", sm: "block" },
              textAlign: "left",
            }}
          >
            {navTitle}
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
              textAlign: "center",
            }}
          >
            {navItems.map((item) => (
              <Button
                key={item}
                sx={{ color: "#fff" }}
                value={item}
                onClick={handleScroll}
              >
                <Scroll type="id" element={item} offset={-64}>
                  {item}
                </Scroll>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav" sx={{ minHeight: 64 }}>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

Navbar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Navbar;
