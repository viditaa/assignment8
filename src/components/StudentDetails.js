import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { StudentContext } from '../context/StudentContext';

const StudentDetails = () => {
   const { id } = useParams();
   const { students } = useContext(StudentContext);
   const student = students.find(student => student.id === parseInt(id));

   if (!student) {
      return <div>Student not found.</div>;
   }

   return (
      <div className="container">
         <h2>Student Details</h2>
         <div>
            <p><strong>Name:</strong> {student.name}</p>
            <p><strong>Email:</strong> {student.email}</p>
            <p><strong>Age:</strong> {student.age}</p>
            <p><strong>Class:</strong> {student.class}</p>
            <p><strong>Address:</strong> {student.address}</p>
            <p><strong>Phone:</strong> {student.phone}</p>
         </div>
      </div>
   );
};

export default StudentDetails;