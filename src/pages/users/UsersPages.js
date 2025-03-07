import React, { useState } from 'react';
import { Button, Typography, TextField, Grid, Box, Dialog, DialogActions, DialogContent, DialogTitle, Select, MenuItem, InputLabel, FormControl } from '@mui/material'; 
import EditIcon from '@mui/icons-material/Edit'; 

function UsersPage() {

  const [open, setOpen] = useState(false);

  const [formValues, setFormValues] = useState({
    champ1: '',
    champ2: '', 
    champ3: '', 
    champ4: '', 
    champ5: '', 
    champ6: '', 
    select1: '', 
    select2: '', 
  });

  const handleInputChange = (e) => {
    // Récupération de la valeur du champ modifié (name et value)
    const { name, value } = e.target;

    // Mise à jour de l'état formValues avec la nouvelle valeur du champ modifié
    setFormValues((prevValues) => ({
      ...prevValues,  
      [name]: value,  
    }));
  };

  // Fonction pour ouvrir le modal 
  const handleClickOpen = () => {
    setOpen(true); 
  };

  // Fonction pour fermer le modal
  const handleClose = () => {
    setOpen(false); 
  };

  return (
    <div className="App">
      <header className="App-header">

        <Typography variant="h4" color="primary">
          Enregistrer un utilisateur
        </Typography>

        <Box sx={{ width: '100%', maxWidth: 600, margin: '0 auto', padding: 4 }}>
          <form>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="champ1" 
                  label="Nom" 
                  value={formValues.champ1} 
                  onChange={handleInputChange} 
                  fullWidth
                  variant="outlined"
                  name="champ1" 
                  placeholder="Entrez la valeur du champ 1" 
                  InputLabelProps={{
                    shrink: true, 
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="champ2" 
                  label="Prénom" 
                  value={formValues.champ2} 
                  onChange={handleInputChange} 
                  fullWidth
                  variant="outlined"
                  name="champ2" 
                  placeholder="Entrez la valeur du champ 2" 
                  InputLabelProps={{
                    shrink: true, 
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="champ3" 
                  label="Email" 
                  value={formValues.champ3} 
                  onChange={handleInputChange} 
                  fullWidth
                  variant="outlined"
                  name="champ3" 
                  placeholder="Entrez la valeur du champ 3" 
                  InputLabelProps={{
                    shrink: true, 
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="champ4" 
                  label="Téléphone" 
                  value={formValues.champ4} 
                  onChange={handleInputChange} 
                  fullWidth
                  variant="outlined"
                  name="champ4" 
                  placeholder="Entrez la valeur du champ 4" 
                  InputLabelProps={{
                    shrink: true, 
                  }}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  id="champ5"
                  label="Adresse" 
                  value={formValues.champ5} 
                  onChange={handleInputChange} 
                  fullWidth
                  variant="outlined"
                  name="champ5" 
                  placeholder="Entrez la valeur du champ 5" 
                  InputLabelProps={{
                    shrink: true, 
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="champ6" 
                  label="Nom d'utilisateur" 
                  value={formValues.champ6} 
                  onChange={handleInputChange} 
                  fullWidth
                  variant="outlined"
                  name="champ6" 
                  placeholder="Entrez la valeur du champ 6"
                  InputLabelProps={{
                    shrink: true, 
                  }}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel id="select1-label">Sélectionnez une option 1</InputLabel>
                  <Select
                    labelId="select1-label" 
                    id="select1" 
                    value={formValues.select1} 
                    onChange={handleInputChange} 
                    label="Sélectionnez une option 1"
                    name="select1" 
                  >
                    <MenuItem value="">
                      <em>Aucune</em>
                    </MenuItem>
                    <MenuItem value={1}>Option 1</MenuItem>
                    <MenuItem value={2}>Option 2</MenuItem>
                    <MenuItem value={3}>Option 3</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel id="select2-label">Sélectionnez une option 2</InputLabel>
                  <Select
                    labelId="select2-label" 
                    id="select2" 
                    value={formValues.select2} 
                    onChange={handleInputChange} 
                    label="Sélectionnez une option 2"
                    name="select2" 
                  >
                    <MenuItem value="">
                      <em>Aucune</em>
                    </MenuItem>
                    <MenuItem value={1}>Option 1</MenuItem>
                    <MenuItem value={2}>Option 2</MenuItem>
                    <MenuItem value={3}>Option 3</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </form>

          <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 2 }}>
            <Button variant="contained" color="primary">
              Enregistrer
            </Button>
            <Button variant="contained" color="secondary" onClick={handleClickOpen} startIcon={<EditIcon />}>
              Ouvrir Modal
            </Button>
          </Box>
        </Box>

        {/* Affiche les valeurs saisies dans les champs 
        <Box sx={{ marginTop: 4 }}>
          <Typography variant="h6">Valeurs saisies :</Typography>
          <Typography>Champ 1 : {formValues.champ1}</Typography>
          <Typography>Champ 2 : {formValues.champ2}</Typography>
          <Typography>Champ 3 : {formValues.champ3}</Typography>
          <Typography>Champ 4 : {formValues.champ4}</Typography>
          <Typography>Champ 5 : {formValues.champ5}</Typography>
          <Typography>Champ 6 : {formValues.champ6}</Typography>
          <Typography>Select 1 : {formValues.select1}</Typography>
          <Typography>Select 2 : {formValues.select2}</Typography>
        </Box>*/}

        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Modifier les informations</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="field1"
              label="Champ 1"
              type="text"
              fullWidth
              variant="outlined"
            />
            <TextField
              margin="dense"
              id="field2"
              label="Champ 2"
              type="text"
              fullWidth
              variant="outlined"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Annuler
            </Button>
            <Button onClick={handleClose} color="primary">
              Enregistrer
            </Button>
          </DialogActions>
        </Dialog>
      </header>
    </div>
  );
}

export default UsersPage;
