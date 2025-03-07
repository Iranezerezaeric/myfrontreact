import React from "react";
import { Box, Grid, Paper, Typography, LinearProgress, Card, CardContent } from "@mui/material";
import { AccessTime, Person, Task } from "@mui/icons-material";

function ActivityCard() {
  const activity = {
    name: "Gestion des tâches de maintenance",
    members: [
      { name: "Jean Ciza", progress: 65, activity: "Maintenance serveur" },
      { name: "Audry Kana", progress: 45, activity: "Mise à jour système" },
      { name: "Sophie Ngabire", progress: 80, activity: "Déploiement réseau" },
    ],
    startDate: "01-03-2025",
    endDate: "12-03-2025",
  };

  return (
    <div className="App">
      <header className="App-header">
        <Typography variant="h5" sx={{ marginBottom: 2 }}>
          Détails de l'activité
        </Typography>
        <Box sx={{ width: "100%", maxWidth: 900, margin: "0 auto", padding: 3 }}>
            
          <Paper sx={{ padding: 3, marginBottom: 3 }}>
            <Typography variant="h6" sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Task fontSize="large" />
              {activity.name}
            </Typography>
            <Typography variant="body1" sx={{ display: "flex", alignItems: "center", gap: 1, marginTop: 1 }}>
              <AccessTime fontSize="small" />
              Du {activity.startDate} au {activity.endDate}
            </Typography>
          </Paper>

          {/* Cartes individuelles pour chaque membre */}
          <Grid container spacing={3}>
            {activity.members.map((member, index) => (
              <Grid item xs={12} sm={4} key={index}>
                <Card sx={{ boxShadow: 3 }}>
                  <CardContent>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                      <Person fontSize="large" />
                      <Typography variant="h6">{member.name}</Typography>
                    </Box>
                    <Typography variant="body2" sx={{ marginTop: 1 }}>
                      Activité : {member.activity}
                    </Typography>
                    <LinearProgress
                      variant="determinate"
                      value={member.progress}
                      sx={{ height: 10, borderRadius: 5, marginTop: 2 }}
                    />
                    <Typography variant="body2" align="center" sx={{ marginTop: 1 }}>
                      {member.progress}% complété
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </header>
    </div>
  );
}

export default ActivityCard;
