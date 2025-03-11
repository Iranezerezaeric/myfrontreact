import React from 'react';
import { Box, Typography, Card, CardContent, Button, Chip } from '@mui/material';

const tasks = [
  { id: 1, title: 'Tâche 1', priority: 'Haute', status: 'En cours', deadline: '2025-05-15' },
  { id: 2, title: 'Tâche 2', priority: 'Moyenne', status: 'Terminé', deadline: '2025-06-01' },
  { id: 3, title: 'Tâche 3', priority: 'Basse', status: 'Non commencé', deadline: '2025-07-10' },
];

function TasksPage() {
  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>Liste des Tâches</Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
        {tasks.map((task) => (
          <Box key={task.id} sx={{ flex: '1 1 calc(33.333% - 24px)', display: 'flex', flexDirection: 'column' }}>
            <Card sx={{ 
              padding: 2, 
              height: '180px', 
              display: 'flex', 
              flexDirection: 'column', 
              justifyContent: 'space-between', 
              border: '1px solid #ccc', 
              borderRadius: 2 
            }}>
              <CardContent>
                <Typography variant="h6">{task.title}</Typography>
                <Typography variant="body2" color="text.secondary">Deadline: {task.deadline}</Typography>
                <Chip label={task.priority} color={task.priority === 'Haute' ? 'error' : task.priority === 'Moyenne' ? 'warning' : 'success'} />
                <Typography variant="body2" color={task.status === 'Terminé' ? 'green' : 'orange'}>{task.status}</Typography>
              </CardContent>
              <Button variant="contained" color="primary" fullWidth>
                Mettre à jour
              </Button>
            </Card>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default TasksPage;
