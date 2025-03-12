import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Box, Menu, MenuItem, Badge, List, ListItem, ListItemText, Avatar } from '@mui/material';
import { MoreVert, Home, List as ListIcon, Task, Timeline, Assignment, Logout, Notifications as NotificationsIcon } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';

function Navbar() {
  // État des notifications
  const [anchorEl, setAnchorEl] = useState(null);
  const [notificationsAnchorEl, setNotificationsAnchorEl] = useState(null);
  const [notifications, setNotifications] = useState([
    { id: 1, message: "Nouvelle tâche assignée à vous", read: false },
    { id: 2, message: "Un projet a été mis à jour", read: false },
    { id: 3, message: "Le délai d'une tâche approche", read: false },
  ]);

  const user = {
    firstName: "Kana",
    lastName: "Erica",
  };

  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const handleNotificationsClick = (event) => setNotificationsAnchorEl(event.currentTarget);
  const handleNotificationsClose = () => setNotificationsAnchorEl(null);

  const markAsRead = (id) => {
    setNotifications(notifications.map(notification =>
      notification.id === id ? { ...notification, read: true } : notification
    ));
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#1E88E5' }}>
      <Toolbar>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Avatar alt={`${user.firstName} ${user.lastName}`}  sx={{ width: 40, height: 40 }} />
          <Typography variant="h6" sx={{ color: '#fff' }}>
            {user.firstName} {user.lastName}
          </Typography>
        </Box>

        <Typography variant="h6" sx={{ flexGrow: 1, textAlign: 'center' }}>
          Gestion des tâches
        </Typography>

        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button color="inherit" component={NavLink} to="/">
            <Home sx={{ mr: 1 }} /> Utilisateurs
          </Button>
          
          <Button color="inherit" component={NavLink} to="/liste">
            <ListIcon sx={{ mr: 1 }} /> Liste
          </Button>
          
          <Button color="inherit" component={NavLink} to="/project">
            <Assignment sx={{ mr: 1 }} /> Projet
          </Button>

          <Button color="inherit" component={NavLink} to="/task">
            <Task sx={{ mr: 1 }} /> Tâches
          </Button>

          <Button color="inherit" component={NavLink} to="/progression">
            <Timeline sx={{ mr: 1 }} /> Progression
          </Button>
        </Box>

        <IconButton color="inherit" onClick={handleNotificationsClick}>
          <Badge badgeContent={notifications.filter(n => !n.read).length} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>

        <Menu
          anchorEl={notificationsAnchorEl}
          open={Boolean(notificationsAnchorEl)}
          onClose={handleNotificationsClose}
        >
          <List sx={{ width: '300px', maxHeight: '400px', overflowY: 'auto' }}>
            {notifications.map((notification) => (
              <ListItem 
                button 
                key={notification.id} 
                onClick={() => markAsRead(notification.id)}
                sx={{ backgroundColor: notification.read ? 'transparent' : '#f0f0f0' }}
              >
                <ListItemText 
                  primary={notification.message} 
                  sx={{ fontWeight: notification.read ? 'normal' : 'bold' }}
                />
              </ListItem>
            ))}
          </List>
        </Menu>

        <IconButton edge="end" color="inherit" onClick={handleClick}>
          <MoreVert />
        </IconButton>

        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
          <MenuItem onClick={handleClose} component={NavLink} to="/listeprojet">
            <ListIcon sx={{ mr: 1 }} /> Liste des projets
          </MenuItem>
          
          <MenuItem onClick={handleClose} component={NavLink} to="/tasks">
            <Task sx={{ mr: 1 }} /> Liste des tâches
          </MenuItem>
          <MenuItem onClick={handleClose} component={NavLink} to="/role">
            <Assignment sx={{ mr: 1 }} /> Attribution des rôles
          </MenuItem>

          <MenuItem onClick={handleClose} component={NavLink} to="/login">
            <Logout sx={{ mr: 1 }} /> Déconnexion
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
