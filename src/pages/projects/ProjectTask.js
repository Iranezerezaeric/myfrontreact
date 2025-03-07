import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import React from "react";

function projectTask(){

    return(
        <div className="App">
            <header className="App-header">
                <Typography variant="h5">
                   Affecter les taches aux ressources
                </Typography>
                <Box sx={{width : "100%" , maxWidth: 600, margin: '0 auto', padding: 4}}>
                    <form>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                  <TextField
                                  id="tache"
                                  name="tache"
                                  fullWidth
                                  label="Description de la tache"
                                  variant="outlined"
                                  placeholder="Taper le nom de la tache"
                                  InputLabelProps={{
                                    shrink:true
                                  }}
                                  />
                                  
                            </Grid>
                            <Grid item xs={12} sm={6}>
                              <FormControl fullWidth variant="outlined">
                                <InputLabel id="select2-label">
                                  Sélectionnez un projet
                                </InputLabel>
                                <Select
                                labelId="select2-label"
                                id="select2"
                                label="Sélectionner un projet"
                                name="select2"
                                InputLabelProps={{
                                    shrink : true
                                }}
                                >
                                    <MenuItem value="">
                                        <em>Aucun</em>
                                        </MenuItem>
                                        <MenuItem>Gestion hospitaliere</MenuItem>
                                        <MenuItem>Gestion d'un pharmacie</MenuItem>
                                    
                                </Select>

                              </FormControl>
                            </Grid>

                            <Grid item xs={12} sm={6}>
                              <FormControl fullWidth variant="outlined">
                                <InputLabel id="select2-label">
                                  Sélectionnez un ressource
                                </InputLabel>
                                <Select
                                labelId="select2-label"
                                id="select2"
                                label="Sélectionner un ressource"
                                name="select2"
                                InputLabelProps={{
                                    shrink : true
                                }}
                                >
                                    <MenuItem value="">
                                        <em>Aucun</em>
                                        </MenuItem>
                                        <MenuItem>Ciza Jean</MenuItem>
                                        <MenuItem>Kana Audry</MenuItem>
                                    
                                </Select>

                              </FormControl>
                            </Grid>
                             <Grid item xs={12} sm={6}>
                                <TextField 
                                label="Date début"
                                id="date1"
                                name="date1"
                                type="date"
                                fullWidth
                                variant="outlined"
                                InputLabelProps={{
                                    shrink: true
                                }}
                                />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                <TextField 
                                label="Date fin"
                                id="date2"
                                name="date2"
                                type="date"
                                fullWidth
                                variant="outlined"
                                InputLabelProps={{
                                    shrink: true
                                }}
                                />
                                </Grid>


                        </Grid>
                    </form>
                    <Box sx={{ display: 'flex', gap: 2, justifyContent: 'start', marginTop: 2 }}>
               <Button variant="contained" color="primary">Enregistrer</Button>
               <Button variant="contained" color="error">Annuler</Button>
               
            </Box>
                </Box>

            </header>
        </div>
    );
}

export default projectTask