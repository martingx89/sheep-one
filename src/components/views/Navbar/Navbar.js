import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import {
  PAGE_TITLE_LONG,
  PAGE_TITLE_SHORT,
} from "../../../constants/pageSetup";
import { NavItem } from "../../common/NavItem/NavItem";
import { NavLink } from "../../common/NavLink/NavLink";
import { Logo } from "../../common/Logo/Logo";
import { AppToolbar } from "../../common/AppToolbar/AppToolbar";
import { AppBar } from "../../common/AppBar/AppBar";

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <AppToolbar disableGutters variant="dense">
        <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{
            mr: 2,
            display: { xs: "none", md: "flex" },
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          <Logo to={"/"}>{PAGE_TITLE_LONG}</Logo>
        </Typography>

        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: "block", md: "none" },
            }}
          >
            <MenuItem>
              <NavItem to="/" onClick={handleCloseNavMenu}>
                Home
              </NavItem>
            </MenuItem>
            <MenuItem>
              <NavItem to="/rules" onClick={handleCloseNavMenu}>
                Regulamin
              </NavItem>
            </MenuItem>
            <MenuItem>
              <NavItem smooth to="/#contact" onClick={handleCloseNavMenu}>
                Kontakt
              </NavItem>
            </MenuItem>
          </Menu>
        </Box>
        <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
        <Typography
          variant="h5"
          noWrap
          component="div"
          sx={{
            mr: 2,
            display: { xs: "flex", md: "none" },
            flexGrow: 1,
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          <Logo to={"/"}>{PAGE_TITLE_SHORT}</Logo>
        </Typography>
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "none", md: "flex" },
            justifyContent: "flex-end",
          }}
        >
          <MenuItem>
            <NavItem to="/" onClick={handleCloseNavMenu}>
              Home
            </NavItem>
          </MenuItem>
          <MenuItem>
            <NavItem to="/rules" onClick={handleCloseNavMenu}>
              Regulamin
            </NavItem>
          </MenuItem>
          <MenuItem>
            <NavItem smooth to="/#contact" onClick={handleCloseNavMenu}>
              Kontakt
            </NavItem>
          </MenuItem>
        </Box>
      </AppToolbar>
    </AppBar>
  );
};
export default Navbar;
