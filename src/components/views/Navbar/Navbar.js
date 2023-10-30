import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Button from '@mui/material/Button';
import { PAGE_TITLE_LONG, PAGE_TITLE_SHORT } from '../../../constants/pageSetup';
import { NavLink, Link } from 'react-router-dom';
// import styled from 'styled-components';
import { colorAccent, colorApp, colorDark, colorLight } from '../../../constants/colors';
import { styled } from '@mui/styles';

const pages = ['Home', 'Regulamin', 'Trasy', 'O nas', 'Kontakt'];
const paths = ['', 'statue', 'catalog', 'about', 'contact'];

const StyledNavLink = styled(NavLink)({
  textDecoration: 'none',
  color: colorLight,
  '&:hover': {
    color: colorDark,
  },
  '&.active': {
    fontWeight: 'bold',
    color: colorAccent,
  },
});

const StyledLink = styled(Link)({
  textDecoration: 'none',
  color: 'black',
  display: 'block',
  margin: '2px',
  '&:hover': {
    color: colorLight,
  },
});

const StyledLogo = styled(Link)({
  textDecoration: 'none',
  color: colorDark,
  display: 'block',
  margin: '2px',
});

const StyledAppBar = styled('div')({
  backgroundColor: colorApp,
  borderBottom: '3px solid transparent',
  borderRadius: '3px',
  boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.25)',
  margin: '5px',
  height: '50px',
});

const StyledToolBar = styled(Toolbar)({
  color: colorLight,
  height: '50px',
});

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <StyledAppBar position='static'>
      <Container maxWidth='xl'>
        <StyledToolBar disableGutters variant='dense'>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant='h6'
            noWrap
            component='div'
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}>
            <StyledLogo to={paths[0]}>{PAGE_TITLE_LONG}</StyledLogo>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleOpenNavMenu}
              color='inherit'>
              <MenuIcon />
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}>
              {pages.map((page, index) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign='center'>
                    <StyledLink to={paths[index]}>{page}</StyledLink>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant='h5'
            noWrap
            component='div'
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}>
            <StyledLogo to={paths[0]}>{PAGE_TITLE_SHORT}</StyledLogo>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
            {pages.map((page, index) => (
              <Button key={page} onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>
                <StyledNavLink to={paths[index]}>{page}</StyledNavLink>
              </Button>
            ))}
          </Box>
        </StyledToolBar>
      </Container>
    </StyledAppBar>
  );
};
export default Navbar;
