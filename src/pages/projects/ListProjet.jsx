import { Box, Typography, IconButton } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";
import React from "react";
import Swal from "sweetalert2"; 

const rows = [
  { id: 1, name: 'School Master', description: 'Projet de gestion scolaire', date1: '12-03-2025', date2: '30-03-2025' },
  { id: 2, name: 'Swift POS', description: 'Projet de gestion des entrées et sorties', date1: '12-04-2025', date2: '30-04-2025' },
  { id: 3, name: 'Voice recognize', description: 'Projet de reconaissance vocal', date1: '12-04-2025', date2: '15-04-2025' },
  { id: 4, name: 'School', description: 'Projet de gestion scolaire', date1: '12-03-2025', date2: '30-03-2025' },
];

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'name', headerName: 'Nom du projet', width: 200 },
  { field: 'description', headerName: 'Description', width: 300 },
  { field: 'date1', headerName: 'Date début', width: 200 },
  { field: 'date2', headerName: 'Date fin', width: 200 },
  {
    field: 'action',
    headerName: 'Action',
    width: 150,
    renderCell: () => (
      <div>
        <IconButton color="primary">
          <EditIcon />
        </IconButton>
        
        <IconButton
          color="error"
          onClick={() => handleDelete()} 
        >
          <DeleteIcon />
        </IconButton>
      </div>
    ),
  },
];

const handleDelete = () => {
  Swal.fire({
    title: 'Êtes-vous sûr ?',
    text: 'Voulez-vous vraiment supprimer ce projet ?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Oui, supprimer',
    cancelButtonText: 'Annuler',
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Supprimé !',
        'Le projet a été supprimé.',
        'success'
      );
    }
  });
};
function ListProjet() {
  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" color="primary">
        Liste des projets
      </Typography>

      <div style={{ width: '100%', height: 400, padding: 6 }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
        />
      </div>
    </Box>
  );
}

export default ListProjet;
