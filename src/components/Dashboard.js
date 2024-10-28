import React, { useContext } from 'react';
import { StudentContext } from '../context/StudentContext';

const Dashboard = () => {
   const { students } = useContext(StudentContext);

   return (
      <div className="container">
         <h2>Dashboard</h2>
         <div className="dashboard-stats">
            <div className="stat-card">
               <h3>Total Students</h3>
               <p>{students.length}</p>
            </div>
            {/* Add more statistics as needed */}
         </div>
      </div>
   );
};

export default Dashboard;