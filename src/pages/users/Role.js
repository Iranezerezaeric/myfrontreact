import React, { useState } from 'react';
import { Box, Typography, Grid, Card, CardContent, MenuItem, Select, FormControl, InputLabel, Button } from '@mui/material';

const users = [
  { id: 1, name: 'Utilisateur 1', email: 'utilisateur1@example.com', role: 'Admin' },
  { id: 2, name: 'Utilisateur 2', email: 'utilisateur2@example.com', role: 'Membre' },
  { id: 3, name: 'Utilisateur 3', email: 'utilisateur3@example.com', role: 'Membre' },
  { id: 4, name: 'Utilisateur 4', email: 'utilisateur4@example.com', role: 'Admin' },
  { id: 5, name: 'Utilisateur 5', email: 'utilisateur5@example.com', role: 'Utilisateur' },
];

const roles = ['Admin', 'Membre', 'Utilisateur'];

function RoleAssignment() {
  const [userRoles, setUserRoles] = useState(users);

  const handleRoleChange = (id, newRole) => {
    setUserRoles(userRoles.map(user => 
      user.id === id ? { ...user, role: newRole } : user
    ));
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        Attribution des rôles
      </Typography>

      <Grid container spacing={3}>
        {userRoles.map((user) => (
          <Grid item xs={12} sm={6} md={4} key={user.id}>
            <Card sx={{ boxShadow: 2 }}>
              <CardContent>
                <Typography variant="h6">{user.name}</Typography>
                <Typography variant="body2" color="textSecondary">{user.email}</Typography>
                
                <FormControl fullWidth sx={{ marginTop: 2 }}>
                  <InputLabel>Rôle</InputLabel>
                  <Select
                    value={user.role}
                    onChange={(e) => handleRoleChange(user.id, e.target.value)}
                    label="Rôle"
                  >
                    {roles.map((role, index) => (
                      <MenuItem key={index} value={role}>
                        {role}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 3 }}>
        <Button variant="contained" color="primary" >
          Sauvegarder les modifications
        </Button>
      </Box>
    </Box>
  );
}

export default RoleAssignment;
