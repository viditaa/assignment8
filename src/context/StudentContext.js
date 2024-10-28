import React, { createContext, useState } from 'react';

export const StudentContext = createContext();

const StudentProvider = ({ children }) => {
   const [students, setStudents] = useState([
      { id: 1, name: "John Doe", email: "john@example.com", age: 16, class: "10th Grade", address: "1234 Elm St, Springfield", phone: "123-456-7890" },
      { id: 2, name: "Jane Smith", email: "jane@example.com", age: 17, class: "11th Grade", address: "5678 Oak St, Springfield", phone: "987-654-3210" },
      { id: 3, name: "Michael Johnson", email: "michael@example.com", age: 18, class: "12th Grade", address: "9102 Maple St, Riverside", phone: "345-678-9012" },
      { id: 4, name: "Emily Davis", email: "emily@example.com", age: 16, class: "10th Grade", address: "2345 Pine St, Greendale", phone: "456-789-0123" },
      { id: 5, name: "Daniel Harris", email: "daniel@example.com", age: 17, class: "11th Grade", address: "6789 Birch St, Fairview", phone: "234-567-8901" },
      { id: 6, name: "Emma Wilson", email: "emma@example.com", age: 16, class: "10th Grade", address: "3456 Willow St, Lakeside", phone: "678-901-2345" },
      
   ]);

   
   const addStudent = (newStudent) => {
      setStudents((prevStudents) => [...prevStudents, newStudent]);
   };

   
   const updateStudent = (updatedStudent) => {
      setStudents((prevStudents) =>
         prevStudents.map((student) =>
            student.id === updatedStudent.id ? updatedStudent : student
         )
      );
   };

   return (
      <StudentContext.Provider value={{ students, setStudents, addStudent, updateStudent }}>
         {children}
      </StudentContext.Provider>
   );
};

export default StudentProvider;