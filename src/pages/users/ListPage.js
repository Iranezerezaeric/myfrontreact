// src/pages/users/ListPage.js
import React from 'react';
import { Box, Typography, Grid, Card, CardContent,IconButton} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';  
import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";


// Exemple de données statiques pour la liste des utilisateurs
const rows = [
  { id: 1, name: 'Utilisateur 1', email: 'utilisateur1@example.com', age: 25, number:79342132,adresse:'Kanyosha av1 no14' },
  { id: 2, name: 'Utilisateur 2', email: 'utilisateur2@example.com', age: 30, number:79342132 ,adresse:'Kanyosha av1 no14'},
  { id: 3, name: 'Utilisateur 3', email: 'utilisateur3@example.com', age: 35, number:79342132 ,adresse:'Kanyosha av1 no14'},
  { id: 4, name: 'Utilisateur 4', email: 'utilisateur4@example.com', age: 40, number:79342132 ,adresse:'Kanyosha av1 no14'},
  { id: 5, name: 'Utilisateur 5', email: 'utilisateur5@example.com', age: 45, number:79342132 ,adresse:'Kanyosha av1 no14'},
];

// Colonnes du DataGrid
const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'name', headerName: 'Nom', width: 180 },
  { field: 'email', headerName: 'Email', width: 250 },
  { field: 'age', headerName: 'Âge', type: 'number', width: 150 },
  { field: 'number', headerName: 'Téléphone', type: 'number', width: 150 },
  { field: 'adresse', headerName: 'Adresse', width: 200 },

  {
    field: 'action',
    headerName: 'Action',
    width: 150,
    renderCell: () => (
      <div>
        <IconButton color="primary" >
          <EditIcon />
        </IconButton>
        
        <IconButton color="error" >
          <DeleteIcon />
        </IconButton>
      </div>
    ),
  },
];

// Données statiques pour les cartes
const cardsData = [
  { title: 'Nombre d\'utilisateurs', content: '50', color: '#4caf50' },
  { title: 'Utilisateurs actifs', content: '40', color: '#3f51b5' }, 
  { title: 'Utilisateurs arrêtés', content: '10', color: '#f44336' }, 
];

function ListPage() {
  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        Liste des utilisateurs
      </Typography>

      {/* Cards */}
      <Grid container spacing={3} sx={{ marginBottom: 3 }}>
        {cardsData.map((card, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <Card
              sx={{
                backgroundColor: card.color,  
                boxShadow: 1,  
                borderRadius: 2,  
                height: '130px',  
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: '#fff',  
                transition: 'transform 0.3s ease',  // Transition pour un effet au survol
                '&:hover': {
                  transform: 'scale(1.05)',  // Agrandissement au survol
                  boxShadow: 3,  // Ombre plus marquée au survol
                },
              }}
            >
              <CardContent sx={{ textAlign: 'center' }}>
                <Typography variant="h6" sx={{ marginBottom: 2 }}>
                  {card.title}
                </Typography>
                <Typography variant="h4">
                  {card.content}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Tableau avec DataGrid */}
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={rows}  
          columns={columns}  
          pageSize={5}  
          rowsPerPageOptions={[5]}  // Options de pagination
        />
      </div>
    </Box>
  );
}

export default ListPage;
