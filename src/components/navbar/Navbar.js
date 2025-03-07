// src/components/navbar/Navbar.js
import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Menu, MenuItem, IconButton } from '@mui/material';
import { MoreVert } from '@mui/icons-material';
import { Link } from 'react-router-dom';  

function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Gestion des taches
        </Typography>

        <Button color="inherit" component={Link} to="/">
          Utilisateur
        </Button>
        <Button color="inherit" component={Link} to="/liste">
          Liste
        </Button>
        <Button color="inherit" component={Link} to="/project">
          Projet
        </Button>
        <Button color="inherit" component={Link} to="/task">
          Taches
        </Button>
        <Button color="inherit" component={Link} to="/progression">
          Progression des taches
        </Button>
        <IconButton edge="end" color="inherit" onClick={handleClick}>
          <MoreVert />
        </IconButton>

        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Déconnexion</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
