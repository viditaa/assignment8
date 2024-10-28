import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
   return (
      <nav className="navbar">
         <h1>Student Management Portal</h1>
         <div>
            <Link to="/">Home</Link>
            <Link to="/register">Register Student</Link>
            <Link to="/students">Student List</Link>
         </div>
      </nav>
   );
};

export default NavBar;