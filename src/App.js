// src/App.js
import React from 'react';
import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  
import UsersPage from './pages/users/UsersPages';  
import ListPage from './pages/users/ListPage';    
import Navbar from './components/navbar/Navbar'; 
import CreateProject from './pages/projects/CreateProject';
import ProjectTask from './pages/projects/ProjectTask';
import ActivityCard from './pages/projects/ActivityCard';
function App() {
  const theme = createTheme({
    palette: {
      mode: 'light',  
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Router> 
        <div className="App">
          <Navbar />

          <Routes>
            <Route path="/" element={<UsersPage />} />
            
            {/* Route pour la page liste */}
            <Route path="/liste" element={<ListPage />} />
            <Route path="/project" element={<CreateProject/>} />
            <Route path="/task" element={<ProjectTask/>} />
            <Route path="/progression" element={<ActivityCard/>} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
