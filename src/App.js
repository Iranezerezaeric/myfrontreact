import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  
import UsersPage from './pages/users/UsersPages';  
import ListPage from './pages/users/ListPage';    
import Navbar from './components/navbar/Navbar'; 
import CreateProject from './pages/projects/CreateProject';
import ProjectTask from './pages/projects/ProjectTask';
import ActivityCard from './pages/projects/ActivityCard';
import ListProjet from './pages/projects/ListProjet';
import Login from './pages/login/Login';
import TasksPage from './pages/projects/Tasks';
import RoleAssignment from './pages/users/Role';

function App() {


  return (
      <Router> 
        <div className="App">
          <Routes>
            <Route path="/login" element={<Login />} />

            <Route
              path="/"
              element={
                <>
                  <Navbar />
                  <UsersPage />
                </>
              }
            />
            <Route
              path="/liste"
              element={
                <>
                  <Navbar />
                  <ListPage />
                </>
              }
            />
            <Route
              path="/project"
              element={
                <>
                  <Navbar />
                  <CreateProject />
                </>
              }
            />
            <Route
              path="/task"
              element={
                <>
                  <Navbar />
                  <ProjectTask />
                </>
              }
            />
            <Route
              path="/progression"
              element={
                <>
                  <Navbar />
                  <ActivityCard />
                </>
              }
            />
            <Route
              path="/listeprojet"
              element={
                <>
                  <Navbar />
                  <ListProjet />
                </>
              }
            />
              <Route
              path="/tasks"
              element={
                <>
                  <Navbar />
                  <TasksPage />
                </>
                
              }
            />
            <Route
              path="/role"
              element={
                <>
                  <Navbar />
                  <RoleAssignment />
                </>
                
              }
            />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
