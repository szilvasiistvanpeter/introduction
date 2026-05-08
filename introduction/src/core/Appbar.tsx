import * as React from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  MenuItem,
  Button,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import TerminalIcon from '@mui/icons-material/Terminal';

interface Page {
  name: string;
  path: string;
}

const pages: Page[] = [
  { name: 'Rólam', path: '/' },
  { name: 'Munkahelyek', path: '/jobs' },
  { name: 'Sulik', path: '/schools' },
  { name: 'Kapcsolat', path: '/contact' },
  { name: 'Projektről', path: '/project' },
];

export default function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const location = useLocation();

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="sticky"
      sx={{ bgcolor: '#0a1929', borderBottom: '1px solid #1e4976' }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <TerminalIcon
            sx={{
              display: { xs: 'none', md: 'flex' },
              mr: 1,
              color: '#42a5f5',
            }}
          />

          <Typography
            variant="h6"
            noWrap
            component={RouterLink}
            to="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Szilva
          </Typography>

          {/* Mobil nézet */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="menu"
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
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              keepMounted
              transformOrigin={{ vertical: 'top', horizontal: 'left' }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.name}
                  onClick={handleCloseNavMenu}
                  component={RouterLink}
                  to={page.path}
                  selected={location.pathname === page.path}
                >
                  <Typography
                    sx={{
                      fontFamily: 'monospace',
                      fontWeight: 700,
                      color: 'inherit',
                      textDecoration: 'none',
                      textAlign: 'center',
                      width: '100%',
                    }}
                  >
                    {page.name}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Desktop nézet */}
          <Box
            sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, gap: 1 }}
          >
            {pages.map((page) => {
              const isActive = location.pathname === page.path;
              return (
                <Button
                  key={page.name}
                  component={RouterLink}
                  to={page.path}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: isActive ? '#42a5f5' : 'white',
                    display: 'block',
                    textTransform: 'none',
                    fontWeight: isActive ? 700 : 400,
                    borderBottom: isActive
                      ? '2px solid #42a5f5'
                      : '2px solid transparent',
                    borderRadius: 0,
                    '&:hover': { bgcolor: 'rgba(66, 165, 245, 0.08)' },
                  }}
                >
                  {page.name}
                </Button>
              );
            })}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Avatar
              alt="Szilva"
              src="/me.jpg"
              sx={{ border: '2px solid #1e4976' }}
            />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
