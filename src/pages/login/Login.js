import React from 'react';
import { Box, Button, TextField, Typography, Grid, InputAdornment, Card } from '@mui/material';
import { AccountCircle, Lock } from '@mui/icons-material';
import { Link } from 'react-router-dom';  


function Login() {
  return (
    <div className="App">
      <header className="App-header">
        <Typography variant="h4" sx={{ mb: 4 }}>
          Connexion
        </Typography>

        <Box sx={{ width: "100%", maxWidth: 400, margin: '0 auto', padding: 4 }}>
          <Card sx={{ padding: 3, boxShadow: 3 }}> 
            <form>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    id="username"
                    name="username"
                    fullWidth
                    label="Nom d'utilisateur"
                    variant="outlined"
                    placeholder="Entrez votre nom d'utilisateur"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <AccountCircle />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    id="password"
                    name="password"
                    fullWidth
                    label="Mot de passe"
                    type="password"
                    variant="outlined"
                    placeholder="Entrez votre mot de passe"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Lock />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
              </Grid>

              {/* Boutons de connexion et d'annulation */}
              <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', marginTop: 3 }}>
                <Button variant="contained" color="primary" fullWidth component={Link} to="/">
                  Se connecter
                </Button>
              </Box>

              <Box sx={{ textAlign: 'center', marginTop: 2 }}>
                <Button variant="text" color="secondary">
                  Mot de passe oublié ?
                </Button>
              </Box>
            </form>
          </Card>
        </Box>
      </header>
    </div>
  );
}

export default Login;
