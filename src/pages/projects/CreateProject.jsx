import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";


function createProject(){
    return(
        <div className="App">
             <header className="App-header">
        <Typography variant="h4" color="primary">
           Enregistrer un nouveau projet
        </Typography>

        <Box sx={{width : "100%" , maxWidth: 600, margin: '0 auto', padding: 4}}>
            <form>
                <Grid container spacing={2}>
                 <Grid item xs={12} sm={6}>
                    <TextField
                    id="nameproject"
                    name="nameproject"
                    label="Nom du projet"
                    placeholder="Taper le nom du projet"
                    // value={1}
                    // onChange={handleChange}
                    fullWidth
                    variant="outlined"
                    InputLabelProps={{
                        shrink: true
                    }}
                    />
                    
                 </Grid>
                 <Grid item xs={12} sm={6}>
                    <TextField 
                    id="description"
                    label="Description"
                    name="description"
                    variant="outlined"
                    fullWidth
                    placeholder="Taper le description du projet"
                    InputLabelProps={{
                        shrink: true
                    }}
                    />
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
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'end', marginTop: 2 }}>
               <Button variant="contained" color="primary">Enregistrer</Button>
               <Button variant="contained" color="error">Annuler</Button>
               
            </Box>
        </Box>
        </header>
        </div>
        
    );
}

export default createProject;