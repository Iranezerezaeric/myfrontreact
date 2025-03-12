import React from 'react';
import { Box, Button, TextField, Typography, Card, InputAdornment } from '@mui/material';
import { AccountCircle, Lock } from '@mui/icons-material';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#F5F5F5',
        padding: 2,
      }}
    >
      <Card sx={{ display: 'flex', width: '100%', maxWidth: 700, borderRadius: 2, boxShadow: 5 }}>
        <Box
          sx={{
            flex: 1,
            padding: 3,
            backgroundColor: '#3F59F1',
            color: '#fff',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            borderRadius: '10px 0 0 10px',
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
            Bienvenue sur notre application
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: 3 }}>
            Connectez-vous pour  gérer vos tâches et projets, et plus encore. Notre application
            vous permet de collaborer efficacement avec votre équipe et de suivre vos progrès.
          </Typography>
        </Box>

        <Box
          sx={{
            flex: 1,
            padding: 3,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography variant="h5" sx={{ marginBottom: 3, fontWeight: 'bold' }}>
            Connexion
          </Typography>

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
            sx={{
              marginBottom: 2,
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#dcdcdc',
                },
              },
              '&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
                borderColor: '#3F59F1',
              },
            }}
          />

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
            sx={{
              marginBottom: 3,
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#dcdcdc',
                },
              },
              '&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
                borderColor: '#3F59F1',
              },
            }}
          />

          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{
              borderRadius: 2,
              padding: '10px 0',
              backgroundColor: '#3F59F1',
              '&:hover': {
                backgroundColor: '#6D8DFF',
              },
            }}
            component={Link} 
            to="/"
          >
            Se connecter
          </Button>

          <Box sx={{ textAlign: 'center', marginTop: 2 }}>
            <Link href="#" variant="body2" sx={{ color: 'primary', textDecoration: 'none' }}>
              Mot de passe oublié ?
            </Link>
          </Box>
        </Box>
      </Card>
    </Box>
  );
}

export default Login;
