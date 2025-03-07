import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Menu, MenuItem, IconButton, Box } from '@mui/material';
import { MoreVert, Home, List, Task, Timeline, Assignment,Logout } from '@mui/icons-material';
import { Link, NavLink } from 'react-router-dom';  

function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#1E88E5' }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Gestion des tâches
        </Typography>

        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button
            color="inherit"
            component={NavLink}
            to="/"
          >
            <Home sx={{ mr: 1 }} /> Utilisateur
          </Button>
          
          <Button
            color="inherit"
            component={NavLink}
            to="/liste"
          >
            <List sx={{ mr: 1 }} /> Liste
          </Button>
          
          <Button
            color="inherit"
            component={NavLink}
            to="/project"
          >
            <Assignment sx={{ mr: 1 }} /> Projet
          </Button>

          <Button
            color="inherit"
            component={NavLink}
            to="/task"
          >
            <Task sx={{ mr: 1 }} /> Tâches
          </Button>

          <Button
            color="inherit"
            component={NavLink}
            to="/progression"
          >
            <Timeline sx={{ mr: 1 }} /> Progression
          </Button>
        </Box>
        <IconButton edge="end" color="inherit" onClick={handleClick}>
          <MoreVert />
        </IconButton>

        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose} component={Link} to="/listeprojet">
          <List sx={{ mr: 1 }} /> Liste des projets
          </MenuItem>
          <MenuItem onClick={handleClose} component={Link} to="/login"><Logout sx={{ mr: 1 }}/>Déconnexion</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
