import React from "react";
import { Box, Paper, Typography, LinearProgress, Card, CardContent, IconButton } from "@mui/material";
import { AccessTime, Person, Task, Edit } from "@mui/icons-material";

function ActivityCard() {
  const activity = {
    name: "Gestion des tâches de maintenance",
    members: [
      { name: "Jean Ciza", progress: 90, activity: "Maintenance serveur" },
      { name: "Audry Kana", progress: 45, activity: "Mise à jour système" },
      { name: "Sophie Ngabire", progress: 70, activity: "Déploiement réseau" },
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

          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 3 }}>
            {activity.members.map((member, index) => (
              <Box key={index} sx={{ flex: "1 1 calc(33.333% - 24px)" }}>
                <Card sx={{ 
                  position: 'relative', 
                  border: '1px solid #ccc', 
                  borderRadius: 2
                }}>
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

                  <IconButton 
                    sx={{
                      position: 'absolute', 
                      bottom: 8, 
                      right: 8, 
                      color: 'primary',
                      cursor: 'pointer'
                    }}
                    disabled
                  >
                    <Edit />
                  </IconButton>
                </Card>
              </Box>
            ))}
          </Box>
        </Box>
      </header>
    </div>
  );
}

export default ActivityCard;
