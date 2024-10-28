import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage'; // Dashboard
import RegisterPage from './pages/RegisterPage'; // Page for student registration
import RegisterStudent from './pages/RegisterStudent'; // Another registration page if needed
import StudentList from './components/StudentList'; // Ensure this file exists
import StudentDetails from './components/StudentDetails'; // Ensure this file exists
import StudentProvider from './context/StudentContext';
import NavBar from './components/NavBar'; // Navigation bar for routing
import './styles.css'; 

const App = () => {
   return (
      <StudentProvider>
         <Router>
            <NavBar />
            <Routes>
               <Route path="/" element={<HomePage />} /> // Dashboard
               <Route path="/register" element={<RegisterPage />} /> // Page to register a new student
               <Route path="/register-student" element={<RegisterStudent />} /> // Additional registration page
               <Route path="/students" element={<StudentList />} /> // List of all students
               <Route path="/students/:id" element={<StudentDetails />} /> // Detailed view of a specific student
               <Route path="/register/:id" element={<RegisterPage />} />

            </Routes>
         </Router>
      </StudentProvider>
   );
};

export default App;